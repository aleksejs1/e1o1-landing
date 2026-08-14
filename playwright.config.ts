import { defineConfig, devices } from '@playwright/test';

/**
 * Runs against `npm run dev` (Vite dev server) — this site has no backend,
 * so there's no isolated-stack concern the main app's own e2e setup has to
 * work around; the dev server exercises the exact same client-side routing/
 * Paraglide locale-resolution behavior as a production build.
 */
export default defineConfig({
	testDir: './e2e',
	fullyParallel: true,
	retries: 0,
	workers: 1,
	reporter: 'list',
	use: {
		baseURL: 'http://localhost:5173',
		trace: 'retain-on-failure'
	},
	webServer: {
		command: 'npm run dev',
		url: 'http://localhost:5173',
		reuseExistingServer: !process.env.CI
	},
	projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }]
});
