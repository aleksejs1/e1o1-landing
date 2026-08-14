#!/usr/bin/env node
/**
 * Builds the real prod image and hits it with real HTTP requests, checking
 * status codes (and redirect targets) for a fixed table of paths. Exists
 * because two real bugs shipped here that nothing else in this repo would
 * have caught — Playwright's e2e suite (npm run test:e2e) runs against the
 * dev server, which never goes through docker/prod/Caddyfile at all:
 *
 * 1. The Caddy layer 404'd on any trailing-slash URL (e.g. /ru/), because
 *    /ru/ is itself an existing *directory* on disk. Paraglide's own
 *    localizeHref() always appends a trailing slash when localizing the
 *    *root* path, so /ru/, /lv/, /es/ are exactly what the language
 *    switcher's home-page links generate — not an edge case.
 * 2. Fixing #1 by rewriting trailing-slash requests in place (serving
 *    ru.html's content while the browser's address bar stayed at /ru/)
 *    broke every relative asset path on the page (./_app/... resolves
 *    against the *served* URL, not the file the content came from) — the
 *    page loaded with no CSS/JS at all. The real fix was at the source:
 *    src/routes/+layout.ts now sets trailingSlash = 'always', so every
 *    route is genuinely routename/index.html with correctly-relative
 *    asset paths, and a non-trailing-slash request (e.g. /ru) is expected
 *    to get a real 308 redirect to the canonical /ru/ — Caddy's own
 *    file_server does this natively, no custom rewrite needed.
 *
 * Not wired into any CI pipeline (none exists yet for this repo) — run by
 * hand before a deploy, or after touching docker/prod/* or trailingSlash
 * config. Needs a working `docker` on PATH.
 */
import { execSync, spawnSync } from 'node:child_process';

const IMAGE = 'e1o1-landing:verify-docker';
const CONTAINER = 'e1o1-landing-verify-docker';
const PORT = 18099;

const EXPECTED = {
	'/': { status: 200 },
	'/ru': { status: 308, location: '/ru/' },
	'/ru/': { status: 200 },
	'/lv/': { status: 200 },
	'/es/': { status: 200 },
	'/terms': { status: 308, location: '/terms/' },
	'/terms/': { status: 200 },
	'/ru/terms': { status: 308, location: '/ru/terms/' },
	'/ru/terms/': { status: 200 },
	'/es/privacy': { status: 308, location: '/es/privacy/' },
	'/es/privacy/': { status: 200 },
	'/favicon.svg': { status: 200 },
	'/does-not-exist': { status: 404 },
	'/does-not-exist/': { status: 404 }
};

function sh(cmd, opts = {}) {
	return execSync(cmd, { stdio: 'pipe', encoding: 'utf8', ...opts });
}

function cleanup() {
	spawnSync('docker', ['rm', '-f', CONTAINER], { stdio: 'ignore' });
}

async function waitForHealthy(timeoutMs = 30000) {
	const start = Date.now();
	while (Date.now() - start < timeoutMs) {
		const status = spawnSync('docker', [
			'inspect',
			CONTAINER,
			'--format',
			'{{.State.Health.Status}}'
		])
			.stdout?.toString()
			.trim();
		if (status === 'healthy') return;
		await new Promise((r) => setTimeout(r, 500));
	}
	throw new Error('Container never became healthy within ' + timeoutMs + 'ms');
}

async function check(path) {
	const res = await fetch(`http://localhost:${PORT}${path}`, { redirect: 'manual' });
	return { status: res.status, location: res.headers.get('location') };
}

console.log('Building', IMAGE, '...');
sh(`docker build -f docker/prod/app.Dockerfile -t ${IMAGE} .`);

cleanup();
console.log('Starting container...');
sh(`docker run -d --name ${CONTAINER} -p ${PORT}:8080 ${IMAGE}`);

let failures = [];
try {
	await waitForHealthy();

	for (const [path, expected] of Object.entries(EXPECTED)) {
		const actual = await check(path);
		const statusOk = actual.status === expected.status;
		const locationOk = expected.location ? actual.location === expected.location : true;
		const ok = statusOk && locationOk;
		const detail = expected.location
			? `expected ${expected.status} -> ${expected.location}, got ${actual.status} -> ${actual.location}`
			: `expected ${expected.status}, got ${actual.status}`;
		console.log(`${ok ? 'PASS' : 'FAIL'}  ${path.padEnd(20)} ${detail}`);
		if (!ok) failures.push(path);
	}
} finally {
	cleanup();
}

if (failures.length > 0) {
	console.error(`\n${failures.length} path(s) failed: ${failures.join(', ')}`);
	process.exit(1);
}
console.log('\nAll paths returned the expected status/redirect.');
