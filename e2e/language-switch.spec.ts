import { test, expect } from '@playwright/test';

/**
 * Regression test for a real reported bug: clicking a language link updated
 * the URL but not the rendered page — SvelteKit's client-side router
 * intercepts <a> clicks by default, and since Paraglide de-localizes the
 * URL *before* SvelteKit's own router ever sees it, both "/" and "/ru"
 * resolve to the exact same route component from the router's perspective —
 * so nothing remounted and the locale-derived content (read once via
 * getLocale()/getContent(), not through a reactive Svelte store) never
 * re-ran. A manual refresh always worked, because a full page load re-reads
 * everything fresh from the correct prerendered file.
 *
 * Fixed by adding `data-sveltekit-reload` to the language switcher's links
 * (src/lib/i18n/LanguageSwitcher.svelte), forcing a real browser navigation
 * — free on a fully static, prerendered site, since every locale is already
 * a genuinely separate built HTML file.
 *
 * `waitUntil: 'networkidle'` on the initial goto is deliberate, not
 * boilerplate: a plain `goto('/')` lets the click race ahead of SvelteKit's
 * client-side router actually attaching its link-interception handlers —
 * confirmed directly (a click fired that early falls through to a real
 * browser navigation purely by timing luck, masking the bug regardless of
 * which code is under test). Waiting for the app to fully settle first is
 * what makes this test actually exercise client-side routing, matching what
 * a real user reliably experiences once a page has loaded.
 *
 * Confirmed this spec fails without the fix before keeping it (temporarily
 * reverted `data-sveltekit-reload` and reran), matching this project's own
 * established verification discipline (see the main encrypted1on1 repo's
 * relogin-after-logout.spec.ts for the same pattern).
 */
test('clicking a language link in the header updates the page immediately, no reload needed', async ({
	page
}) => {
	await page.goto('/', { waitUntil: 'networkidle' });
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');

	await page.getByRole('link', { name: 'RU', exact: true }).first().click();

	await expect(page).toHaveURL(/\/ru\/?$/);
	await expect(page.locator('html')).toHaveAttribute('lang', 'ru');
	await expect(page.locator('h1')).toHaveText('Приватные встречи 1:1. Доказуемо приватные.');
});

test('switching locale from a non-home page lands on the localized version of that same page', async ({
	page
}) => {
	await page.goto('/terms', { waitUntil: 'networkidle' });
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');

	await page.getByRole('link', { name: 'LV', exact: true }).first().click();

	await expect(page).toHaveURL(/\/lv\/terms\/?$/);
	await expect(page.locator('html')).toHaveAttribute('lang', 'lv');
	await expect(page.locator('h1')).toHaveText('Lietošanas noteikumi');
});
