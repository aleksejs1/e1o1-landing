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

test('bookshelf page is fully localized across languages (DE, ES, FR, LV, RU, EN)', async ({
	page
}) => {
	// German
	await page.goto('/de/playbook/books/', { waitUntil: 'networkidle' });
	await expect(page.locator('h1')).toHaveText('Das 1:1 Bücherregal');
	await expect(page.locator('.thesis-label').first()).toHaveText('Kernthese');
	await expect(page.locator('.related-label').first()).toHaveText('Zugehörige Playbook-Vorlage:');
	await expect(page.locator('.book-title').nth(4)).toHaveText(
		'Radical Candor: Wie Sie mit schonungsloser Offenheit ein fantastischer Boss werden'
	);

	// Spanish
	await page.goto('/es/playbook/books/', { waitUntil: 'networkidle' });
	await expect(page.locator('h1')).toHaveText('La biblioteca del 1 a 1');
	await expect(page.locator('.thesis-label').first()).toHaveText('Tesis central');
	await expect(page.locator('.related-label').first()).toHaveText(
		'Plantilla de playbook relacionada:'
	);
	await expect(page.locator('.book-title').nth(1)).toHaveText(
		'Emprender y liderar en tiempos difíciles'
	);

	// French
	await page.goto('/fr/playbook/books/', { waitUntil: 'networkidle' });
	await expect(page.locator('h1')).toHaveText('La bibliothèque du 1:1');
	await expect(page.locator('.thesis-label').first()).toHaveText('Thèse centrale');
	await expect(page.locator('.related-label').first()).toHaveText('Modèle de playbook associé :');

	// Latvian
	await page.goto('/lv/playbook/books/', { waitUntil: 'networkidle' });
	await expect(page.locator('h1')).toHaveText('1 pret 1 grāmatplaukts');
	await expect(page.locator('.thesis-label').first()).toHaveText('Galvenā tēze');
	await expect(page.locator('.related-label').first()).toHaveText(
		'Saistītais rokasgrāmatas šablons:'
	);
	await expect(page.locator('.book-title').first()).toHaveText('Augstas atdeves vadība');

	// Russian
	await page.goto('/ru/playbook/books/', { waitUntil: 'networkidle' });
	await expect(page.locator('h1')).toHaveText('Книжная полка 1-на-1');
	await expect(page.locator('.thesis-label').first()).toHaveText('Главный тезис');
	await expect(page.locator('.related-label').first()).toHaveText('Связанный шаблон плейбука:');
	await expect(page.locator('.book-title').first()).toHaveText('Высокоэффективный менеджмент');
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

test('first-1-on-1 playbook template renders rich practical sections: preparation, antipatterns, and follow-up', async ({
	page
}) => {
	await page.goto('/ru/playbook/first-1-on-1/', { waitUntil: 'networkidle' });

	// Check page title and read time
	await expect(page.locator('h1')).toHaveText(
		'Первый 1-на-1: Установка ожиданий и психологическая безопасность'
	);
	await expect(page.locator('.read-time')).toHaveText('5 мин чтения');

	// Check preparation section & calendar invite box
	const prepSection = page.locator('.prep-section');
	await expect(prepSection).toBeVisible();
	await expect(prepSection.locator('.invite-box')).toBeVisible();
	await expect(prepSection.locator('.invite-badge')).toHaveText('Шаблон инвайта в календарь:');

	// Check agenda items
	const agendaCards = page.locator('.agenda-card');
	await expect(agendaCards).toHaveCount(3);

	// Check antipattern cards
	const antipatterns = page.locator('.antipattern-card');
	await expect(antipatterns).toHaveCount(4);
	await expect(antipatterns.first().locator('.ap-badge')).toHaveText('Частая ошибка');

	// Check follow-up section
	const followUpSection = page.locator('.followup-section');
	await expect(followUpSection).toBeVisible();
	await expect(followUpSection).toContainText('Правило первого рычага');
});

test('bi-weekly-pulse playbook template renders rich practical sections: preparation, antipatterns, and follow-up', async ({
	page
}) => {
	await page.goto('/ru/playbook/bi-weekly-pulse/', { waitUntil: 'networkidle' });

	// Check page title and read time
	await expect(page.locator('h1')).toHaveText(
		'Регулярный 1-на-1: Высокоэффективный двухнедельный синк'
	);
	await expect(page.locator('.read-time')).toHaveText('5 мин чтения');

	// Check preparation section
	const prepSection = page.locator('.prep-section');
	await expect(prepSection).toBeVisible();
	await expect(prepSection).toContainText('Чеклист менеджера за 10 минут до звонка');

	// Check 4 agenda items
	const agendaCards = page.locator('.agenda-card');
	await expect(agendaCards).toHaveCount(4);

	// Check 4 antipattern cards
	const antipatterns = page.locator('.antipattern-card');
	await expect(antipatterns).toHaveCount(4);
	await expect(antipatterns.first().locator('.ap-badge')).toHaveText('Частая ошибка');

	// Check follow-up section
	const followUpSection = page.locator('.followup-section');
	await expect(followUpSection).toBeVisible();
	await expect(followUpSection).toContainText('Правило 5 минут сразу после встречи');
});

test('career-growth playbook template renders rich practical sections: preparation, 4-block agenda, antipatterns, and follow-up', async ({
	page
}) => {
	await page.goto('/ru/playbook/career-growth/', { waitUntil: 'networkidle' });

	// Check page title and read time
	await expect(page.locator('h1')).toHaveText('Квартальный диалог о развитии и карьере');
	await expect(page.locator('.read-time')).toHaveText('5 мин чтения');

	// Check preparation section
	const prepSection = page.locator('.prep-section');
	await expect(prepSection).toBeVisible();
	await expect(prepSection.locator('.invite-box')).toBeVisible();
	await expect(prepSection.locator('.invite-badge')).toHaveText('Опросник перед карьерным 1-на-1:');

	// Check 4 agenda blocks
	const agendaCards = page.locator('.agenda-card');
	await expect(agendaCards).toHaveCount(4);
	await expect(agendaCards.first()).toContainText('Блок 1: Ретроспектива энергии');

	// Check 4 antipattern cards
	const antipatterns = page.locator('.antipattern-card');
	await expect(antipatterns).toHaveCount(4);
	await expect(antipatterns.first().locator('.ap-badge')).toHaveText('Частая ошибка');

	// Check follow-up section
	const followUpSection = page.locator('.followup-section');
	await expect(followUpSection).toBeVisible();
	await expect(followUpSection).toContainText('Фиксация индивидуального плана развития (IDP)');

	// Verify English page
	await page.goto('/en/playbook/career-growth/', { waitUntil: 'networkidle' });
	await expect(page.locator('h1')).toHaveText('Quarterly Career & Growth Check-in');
	await expect(page.locator('.read-time')).toHaveText('5 min read');
	await expect(page.locator('.agenda-card')).toHaveCount(4);
	await expect(page.locator('.antipattern-card')).toHaveCount(4);
});

test('burnout-detection playbook template renders rich practical sections: preparation, 4-block agenda, antipatterns, and follow-up', async ({
	page
}) => {
	await page.goto('/ru/playbook/burnout-detection/', { waitUntil: 'networkidle' });

	// Check page title and read time
	await expect(page.locator('h1')).toHaveText('Перегруз и выгорание: Восстановление ресурса');
	await expect(page.locator('.read-time')).toHaveText('5 мин чтения');

	// Check preparation section
	const prepSection = page.locator('.prep-section');
	await expect(prepSection).toBeVisible();
	await expect(prepSection.locator('.invite-box')).toBeVisible();
	await expect(prepSection.locator('.invite-badge')).toHaveText(
		'Текст приглашения (с минимальной когнитивной нагрузкой):'
	);

	// Check 4 agenda blocks
	const agendaCards = page.locator('.agenda-card');
	await expect(agendaCards).toHaveCount(4);
	await expect(agendaCards.first()).toContainText('Блок 1: Валидация состояния');

	// Check 4 antipattern cards
	const antipatterns = page.locator('.antipattern-card');
	await expect(antipatterns).toHaveCount(4);
	await expect(antipatterns.first().locator('.ap-badge')).toHaveText('Частая ошибка');

	// Check follow-up section
	const followUpSection = page.locator('.followup-section');
	await expect(followUpSection).toBeVisible();
	await expect(followUpSection).toContainText('Публичное прикрытие в течение 2 часов');

	// Verify English page
	await page.goto('/en/playbook/burnout-detection/', { waitUntil: 'networkidle' });
	await expect(page.locator('h1')).toHaveText('Overwhelm & Burnout: Restoring Equilibrium');
	await expect(page.locator('.read-time')).toHaveText('5 min read');
	await expect(page.locator('.agenda-card')).toHaveCount(4);
	await expect(page.locator('.antipattern-card')).toHaveCount(4);
});

test('skip-level playbook template renders rich practical sections: preparation, 4-block agenda, antipatterns, and follow-up', async ({
	page
}) => {
	await page.goto('/ru/playbook/skip-level/', { waitUntil: 'networkidle' });

	// Check page title and read time
	await expect(page.locator('h1')).toHaveText(
		'Skip-Level 1-на-1: Нефильтрованная диагностика организации'
	);
	await expect(page.locator('.read-time')).toHaveText('5 мин чтения');

	// Check preparation section
	const prepSection = page.locator('.prep-section');
	await expect(prepSection).toBeVisible();
	await expect(prepSection.locator('.invite-box')).toBeVisible();
	await expect(prepSection.locator('.invite-badge')).toHaveText('Шаблон инвайта на Skip-Level:');

	// Check 4 agenda blocks
	const agendaCards = page.locator('.agenda-card');
	await expect(agendaCards).toHaveCount(4);
	await expect(agendaCards.first()).toContainText('Блок 1: Снятие напряжения');

	// Check 4 antipattern cards
	const antipatterns = page.locator('.antipattern-card');
	await expect(antipatterns).toHaveCount(4);
	await expect(antipatterns.first().locator('.ap-badge')).toHaveText('Частая ошибка');

	// Check follow-up section
	const followUpSection = page.locator('.followup-section');
	await expect(followUpSection).toBeVisible();
	await expect(followUpSection).toContainText('Поиск паттернов в течение 24 часов');

	// Verify English page
	await page.goto('/en/playbook/skip-level/', { waitUntil: 'networkidle' });
	await expect(page.locator('h1')).toHaveText(
		'Skip-Level 1:1: Unfiltered Organizational Diagnostics'
	);
	await expect(page.locator('.read-time')).toHaveText('5 min read');
	await expect(page.locator('.agenda-card')).toHaveCount(4);
	await expect(page.locator('.antipattern-card')).toHaveCount(4);
	await expect(page.locator('.followup-section')).toContainText(
		'Pattern Extraction within 24 hours'
	);
});

test('homepage renders playbooks showcase section with 3 cards, cover images, and question bank banner', async ({
	page
}) => {
	await page.goto('/en/', { waitUntil: 'networkidle' });

	const showcase = page.locator('.playbooks-showcase');
	await expect(showcase).toBeVisible();
	await expect(showcase.locator('h2')).toHaveText('Actionable Playbooks for Engineering Teams');

	const cards = showcase.locator('.featured-playbook-card');
	await expect(cards).toHaveCount(3);

	// Check cover images
	for (const card of await cards.all()) {
		const img = card.locator('img');
		await expect(img).toBeVisible();
		const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
		expect(naturalWidth).toBeGreaterThan(0);
	}

	// Check question bank banner
	const banner = showcase.locator('.question-bank-banner');
	await expect(banner).toBeVisible();
	await expect(banner.locator('h3')).toHaveText('Interactive Question Bank');
	await expect(banner.locator('a[href*="/playbook/questions/"]')).toBeVisible();

	// Check Russian homepage
	await page.goto('/ru/', { waitUntil: 'networkidle' });
	const ruShowcase = page.locator('.playbooks-showcase');
	await expect(ruShowcase).toBeVisible();
	await expect(ruShowcase.locator('h2')).toHaveText('Практические плейбуки для инженерных команд');
	await expect(ruShowcase.locator('.featured-playbook-card')).toHaveCount(3);
});

test('question bank page displays enriched questions and new strategy category', async ({
	page
}) => {
	await page.goto('/en/playbook/questions/', { waitUntil: 'networkidle' });

	// Check total questions count is at least 40
	const questions = page.locator('.question-card');
	const count = await questions.count();
	expect(count).toBeGreaterThanOrEqual(44);

	// Check Strategy filter pill exists
	const strategyPill = page.locator('.filter-pill', { hasText: 'Strategy & Purpose' });
	await expect(strategyPill).toBeVisible();

	// Click Strategy pill
	await strategyPill.click();
	const filteredCount = await page.locator('.question-card').count();
	expect(filteredCount).toBe(5);

	// Test Russian question bank
	await page.goto('/ru/playbook/questions/', { waitUntil: 'networkidle' });
	const ruStrategyPill = page.locator('.filter-pill', { hasText: 'Стратегия и смысл' });
	await expect(ruStrategyPill).toBeVisible();
	await ruStrategyPill.click();
	const ruFilteredCount = await page.locator('.question-card').count();
	expect(ruFilteredCount).toBe(5);
});
