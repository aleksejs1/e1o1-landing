#!/usr/bin/env node
/**
 * Builds the real prod image and hits it with real HTTP requests, checking
 * status codes for a fixed table of paths. Exists specifically because a
 * real bug shipped that no other check here would have caught: the Caddy
 * layer 404'd on any trailing-slash URL (e.g. /ru/), which Playwright's
 * dev-server e2e suite (npm run test:e2e) never exercises — the dev server
 * is SvelteKit's own routing, not the built static files served through
 * docker/prod/Caddyfile. Paraglide's localizeHref() always appends a
 * trailing slash when localizing the *root* path, so /ru/, /lv/, /es/ are
 * exactly what the language switcher's home-page links generate — this
 * isn't an edge case, it's the common case for that one link.
 *
 * Not wired into any CI pipeline (none exists yet for this repo) — run by
 * hand before a deploy, or after touching docker/prod/*. Needs a working
 * `docker` on PATH.
 */
import { execSync, spawnSync } from 'node:child_process';

const IMAGE = 'e1o1-landing:verify-docker';
const CONTAINER = 'e1o1-landing-verify-docker';
const PORT = 18099;

const EXPECTED = {
	'/': 200,
	'/ru': 200,
	'/ru/': 200,
	'/lv/': 200,
	'/es/': 200,
	'/terms': 200,
	'/terms/': 200,
	'/ru/terms': 200,
	'/ru/terms/': 200,
	'/es/privacy': 200,
	'/es/privacy/': 200,
	'/favicon.svg': 200,
	'/does-not-exist': 404,
	'/does-not-exist/': 404
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

async function fetchStatus(path) {
	const res = await fetch(`http://localhost:${PORT}${path}`, { redirect: 'manual' });
	return res.status;
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
		const actual = await fetchStatus(path);
		const ok = actual === expected;
		console.log(`${ok ? 'PASS' : 'FAIL'}  ${path.padEnd(20)} expected ${expected}, got ${actual}`);
		if (!ok) failures.push(path);
	}
} finally {
	cleanup();
}

if (failures.length > 0) {
	console.error(`\n${failures.length} path(s) failed: ${failures.join(', ')}`);
	process.exit(1);
}
console.log('\nAll paths returned the expected status.');
