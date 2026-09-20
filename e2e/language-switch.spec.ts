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

/**
 * Terms of Service and Privacy Policy are deliberately English-only for now
 * (src/lib/content/legal.ts / getLegalContent()) — every locale falls back
 * to the same English text rather than showing a translation of stale
 * placeholder content. This test both confirms that fallback (h1 stays
 * "Terms of Service" in every locale) and that switching locale from a
 * non-home page still correctly navigates to the localized *URL* — the
 * chrome/routing layer and the legal-content fallback are independent, and
 * this is the one page where a naive fix could plausibly conflate them.
 */
test('switching locale from a non-home page updates the URL and lang, but Terms of Service stays English by design', async ({
	page
}) => {
	await page.goto('/terms', { waitUntil: 'networkidle' });
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');

	await page.getByRole('link', { name: 'LV', exact: true }).first().click();

	await expect(page).toHaveURL(/\/lv\/terms\/?$/);
	await expect(page.locator('html')).toHaveAttribute('lang', 'lv');
	await expect(page.locator('h1')).toHaveText('Terms of Service');
});

test('mobile viewport renders compact dropdown and switches language properly', async ({
	page
}) => {
	await page.setViewportSize({ width: 375, height: 667 });
	await page.goto('/', { waitUntil: 'networkidle' });
	await expect(page.locator('html')).toHaveAttribute('lang', 'en');

	// Dropdown summary trigger is visible
	const langTrigger = page.locator('.lang-dropdown summary');
	await expect(langTrigger).toBeVisible();
	await langTrigger.click();

	// Select Russian
	const ruOption = page.locator('.lang-menu .lang-menu-item', { hasText: 'Русский' });
	await expect(ruOption).toBeVisible();
	await ruOption.click();

	await expect(page).toHaveURL(/\/ru\/?$/);
	await expect(page.locator('html')).toHaveAttribute('lang', 'ru');
});

test('header controls (language dropdown and theme toggle) fit within mobile viewports without overflowing', async ({
	page
}) => {
	for (const width of [375, 360, 320]) {
		await page.setViewportSize({ width, height: 667 });
		await page.goto('/ru', { waitUntil: 'networkidle' });

		const themeToggle = page.locator('.site-header .btn-icon');
		await expect(themeToggle).toBeVisible();

		const themeBox = await themeToggle.boundingBox();
		expect(themeBox).not.toBeNull();
		if (themeBox) {
			// Button should be fully within screen boundaries
			expect(themeBox.x + themeBox.width).toBeLessThanOrEqual(width);
		}

		// Ensure horizontal scrollbar does not appear on document
		const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
		const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
		expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
	}
});

test('bookshelf page loads and displays all 5 original book covers without broken images', async ({
	page
}) => {
	await page.goto('/playbook/books', { waitUntil: 'networkidle' });
	const bookCards = page.locator('.book-card');
	await expect(bookCards).toHaveCount(5);

	const covers = page.locator('.book-cover-img');
	await expect(covers).toHaveCount(5);

	for (let i = 0; i < 5; i++) {
		const img = covers.nth(i);
		await img.scrollIntoViewIfNeeded();
		await expect(img).toBeVisible();
		await expect(async () => {
			const isLoaded = await img.evaluate(
				(el: HTMLImageElement) => el.complete && el.naturalWidth > 0
			);
			expect(isLoaded).toBe(true);
		}).toPass({ timeout: 5000 });
	}
});

test('login links are present in hero, header, and footer pointing to cloud app with current language', async ({
	page
}) => {
	await page.goto('/ru', { waitUntil: 'networkidle' });

	// Hero login link
	const heroLogin = page.locator('.hero-login-link');
	await expect(heroLogin).toBeVisible();
	await expect(heroLogin).toHaveAttribute('href', 'https://app.private1on1.eu/?lang=ru');

	// Header login button (desktop viewport)
	const headerLogin = page.locator('.header-login-btn');
	await expect(headerLogin).toBeVisible();
	await expect(headerLogin).toHaveAttribute('href', 'https://app.private1on1.eu/?lang=ru');

	// Footer login link
	const footerLogin = page.locator('.site-footer a', { hasText: 'Войти' });
	await expect(footerLogin).toHaveAttribute('href', 'https://app.private1on1.eu/?lang=ru');
});
