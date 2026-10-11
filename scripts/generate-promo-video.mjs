import { chromium } from '@playwright/test';
import { execSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const VIDEOS_DIR = path.join(REPO_ROOT, 'static/videos');
const POSTER_IMAGE_PATH = path.join(VIDEOS_DIR, 'demo-poster.png');
const TEMP_VIDEO_DIR = path.join(REPO_ROOT, '.temp-video-recordings');
const APP_BASE_URL = process.env.APP_BASE_URL || 'http://localhost:5180';

if (!fs.existsSync(VIDEOS_DIR)) {
	fs.mkdirSync(VIDEOS_DIR, { recursive: true });
}
if (!fs.existsSync(TEMP_VIDEO_DIR)) {
	fs.mkdirSync(TEMP_VIDEO_DIR, { recursive: true });
}

const CONFIG = {
	en: {
		lang: 'en',
		url: `${APP_BASE_URL}/?lang=en`,
		email: 'demo-employee@example.com',
		password: 'e1o1-demo-2026',
		managerSelector: 'text=Jordan Blake',
		activeRowSelector: 'text=In 6 days',
		meetingH1Wait: 'h1:has-text("Jordan")',
		archivedRowSelector: 'a.anketa-row:has(.tag:has-text("archived"))',
		feelings: ['Confident', 'Motivated'],
		noteText: 'Shipped billing export migration ahead of deadline. Team cadence is great!',
		privateNoteText: 'Discuss Q4 promotion roadmap & mentorship during sync.',
		reportBtnText: 'Generate report',
		banners: {
			s0_1: {
				badge: 'Psychological Safety',
				title: 'encrypted1on1 — Honest, High-Impact 1:1s',
				subtitle:
					'A thoughtful workspace where employees speak openly and managers coach with clarity.'
			},
			s0_2: {
				badge: 'Private & Secure',
				title: 'Private by Design',
				subtitle:
					'Client-side encrypted notes. Your confidential conversations never leak to HR or IT.'
			},
			s1: {
				badge: 'Clear Cadence',
				title: 'Never Lose Momentum',
				subtitle:
					'Upcoming check-ins, action items, and complete history organized in one clean dashboard.'
			},
			s2: {
				badge: '3-Minute Check-in',
				title: 'Effortless Async Preparation',
				subtitle:
					'Employee logs mood, pulse, and blockers in minutes. No blank pages, no surprise status checks.'
			},
			s3: {
				badge: 'Confidential',
				title: 'Isolated Private Scratchpad',
				subtitle:
					'Safe drafts encrypted exclusively for your eyes — counterpart and skip-level never see them.'
			},
			s4: {
				badge: 'Bank-Grade Privacy',
				title: 'Your Safe Island at Work',
				subtitle:
					'End-to-end encrypted notes. Honest conversations stay strictly between the two of you.'
			},
			s5: {
				badge: 'Continuity',
				title: 'Carry-Forward Commitments',
				subtitle:
					'Past cycles carry forward agreed goals and context automatically into the next meeting.'
			},
			s6: {
				badge: '1-Click Review',
				title: 'Instant Accomplishments Report',
				subtitle:
					'Compile months of achievements, feedback, and milestones into a structured report for promotions.'
			}
		},
		cta: {
			badge: 'High-Impact 1:1 Meetings',
			title: 'encrypted1on1',
			subtitle: 'Honest conversations. Rollover goals. Review-ready in 1 click.',
			buttonText: 'Try the Live Demo at encrypted1on1.eu',
			bullets: ['✓ 3-minute async prep', '✓ Bank-grade privacy', '✓ Free for small teams']
		}
	},
	ru: {
		lang: 'ru',
		url: `${APP_BASE_URL}/?lang=ru`,
		email: 'demo-employee-ru@example.com',
		password: 'e1o1-demo-2026',
		managerSelector: 'text=Дмитрий Волков',
		activeRowSelector: 'text=Через 6 дней',
		meetingH1Wait: 'h1:has-text("Дмитрий")',
		archivedRowSelector: 'a.anketa-row:has(.tag:has-text("архивная"))',
		feelings: ['Уверенность', 'Мотивация'],
		noteText: 'Закрыли миграцию биллинга раньше дедлайна. Отличный темп команды!',
		privateNoteText: 'Обсудить план роста до лида в Q4 и менторство во время встречи.',
		reportBtnText: 'Сформировать отчёт',
		banners: {
			s0_1: {
				badge: 'Безопасное пространство',
				title: 'encrypted1on1 — Честные и полезные 1:1',
				subtitle: 'Пространство, где сотрудники говорят открыто, а руководители помогают расти.'
			},
			s0_2: {
				badge: 'Тайна разговоров',
				title: 'Приватность на уровне кода',
				subtitle: 'Заметки шифруются на вашем устройстве. Никакой слежки со стороны HR или IT.'
			},
			s1: {
				badge: 'Четкий ритм',
				title: 'Контекст всегда под рукой',
				subtitle: 'Предстоящие встречи, задачи и полный архив прошлых разговоров в одном дашборде.'
			},
			s2: {
				badge: '3 минуты на подготовку',
				title: 'Легкий чек-ин до встречи',
				subtitle:
					'Сотрудник отмечает настроение, пульс и блокеры. Никаких пустых листов и неловких пауз.'
			},
			s3: {
				badge: 'Личный блокнот',
				title: 'Черновики только для себя',
				subtitle:
					'Заметки зашифрованы вашим ключом — их не увидит даже руководитель, пока вы сами не решите.'
			},
			s4: {
				badge: 'Банковский уровень приватности',
				title: 'Ваш островок доверия',
				subtitle:
					'Сквозное шифрование гарантирует: личный разговор остается строго между вами двоими.'
			},
			s5: {
				badge: 'Преемственность целей',
				title: 'Ни одна договоренность не забудется',
				subtitle: 'Согласованные цели и задачи автоматически переходят в следующий цикл встреч.'
			},
			s6: {
				badge: 'Отчет к повышению в 1 клик',
				title: 'Готовое резюме полугодия',
				subtitle:
					'Все успехи, проекты и закрытые цели за месяцы работы собираются в готовый отчет за один клик.'
			}
		},
		cta: {
			badge: 'Встречи 1:1 со смыслом',
			title: 'encrypted1on1',
			subtitle: 'Честный диалог. Перенос целей. Готовый отчет к ревью.',
			buttonText: 'Попробуйте живое демо на encrypted1on1.eu',
			bullets: [
				'✓ 3 минуты на подготовку',
				'✓ Банковский уровень приватности',
				'✓ Бесплатно для команд'
			]
		}
	}
};

async function injectUIHelpers(page) {
	await page.evaluate(() => {
		if (!window.__spa_link_interceptor_installed) {
			window.__spa_link_interceptor_installed = true;
			document.addEventListener(
				'click',
				(e) => {
					const a = e.target.closest('a[href]');
					if (a) {
						const href = a.getAttribute('href');
						if (href && href.startsWith('/') && !href.startsWith('//')) {
							e.preventDefault();
							window.history.pushState(null, '', href);
							window.dispatchEvent(new PopStateEvent('popstate'));
						}
					}
				},
				true
			);
		}

		if (document.getElementById('demo-ui-injected')) return;

		const flag = document.createElement('div');
		flag.id = 'demo-ui-injected';
		document.body.appendChild(flag);

		const style = document.createElement('style');
		style.innerHTML = `
      #demo-cursor {
        position: fixed;
        top: 0; left: 0;
        width: 22px; height: 22px;
        border-radius: 50%;
        background: rgba(235, 94, 40, 0.45);
        border: 2.5px solid #eb5e28;
        pointer-events: none;
        z-index: 9999999;
        transform: translate(-50%, -50%);
        transition: transform 0.12s ease-out, background 0.12s ease-out;
        box-shadow: 0 0 14px rgba(235, 94, 40, 0.7);
      }
      #demo-cursor.clicking {
        transform: translate(-50%, -50%) scale(0.6);
        background: rgba(235, 94, 40, 0.95);
      }
      .demo-ripple {
        position: fixed;
        width: 48px; height: 48px;
        border-radius: 50%;
        border: 2px solid #eb5e28;
        pointer-events: none;
        z-index: 9999998;
        transform: translate(-50%, -50%) scale(0.2);
        opacity: 1;
        animation: demoRippleAnim 0.5s ease-out forwards;
      }
      @keyframes demoRippleAnim {
        to {
          transform: translate(-50%, -50%) scale(1.7);
          opacity: 0;
        }
      }
      #demo-banner-card {
        position: fixed;
        pointer-events: none !important;
        background: rgba(14, 16, 22, 0.97);
        backdrop-filter: blur(24px);
        border: 2px solid #eb5e28;
        border-radius: 16px;
        padding: 16px 26px;
        color: #fff;
        font-family: system-ui, -apple-system, sans-serif;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.75);
        z-index: 9999990;
        display: flex;
        align-items: center;
        gap: 18px;
        max-width: 680px;
        transition: opacity 0.3s ease, transform 0.3s ease, left 0.3s ease, right 0.3s ease;
      }
      #demo-banner-card * {
        pointer-events: none !important;
      }
      #demo-banner-card.pos-center {
        bottom: 104px;
        left: 50%;
        right: auto;
        transform: translateX(-50%);
      }
      #demo-banner-card.pos-right {
        bottom: 104px;
        right: 36px;
        left: auto;
        transform: none;
      }
      #demo-banner-card.pos-left {
        bottom: 104px;
        left: 36px;
        right: auto;
        transform: none;
      }
    `;
		document.head.appendChild(style);

		const cursor = document.createElement('div');
		cursor.id = 'demo-cursor';
		document.body.appendChild(cursor);

		window.addEventListener('mousemove', (e) => {
			cursor.style.left = e.clientX + 'px';
			cursor.style.top = e.clientY + 'px';
		});
		window.addEventListener('mousedown', (e) => {
			cursor.classList.add('clicking');
			const ripple = document.createElement('div');
			ripple.className = 'demo-ripple';
			ripple.style.left = e.clientX + 'px';
			ripple.style.top = e.clientY + 'px';
			document.body.appendChild(ripple);
			setTimeout(() => ripple.remove(), 550);
		});
		window.addEventListener('mouseup', () => {
			cursor.classList.remove('clicking');
		});
	});
}

async function showBanner(page, { badge, title, subtitle }, pos = 'center') {
	await page.evaluate(
		({ badge, title, subtitle, pos }) => {
			let card = document.getElementById('demo-banner-card');
			if (!card) {
				card = document.createElement('div');
				card.id = 'demo-banner-card';
				document.body.appendChild(card);
			}
			card.className = `pos-${pos}`;
			card.innerHTML = `
        <div style="background: #eb5e28; color: #fff; padding: 7px 16px; border-radius: 8px; font-weight: 800; font-size: 14.5px; text-transform: uppercase; letter-spacing: 0.8px; white-space: nowrap;">${badge}</div>
        <div>
          <div style="font-weight: 800; font-size: 20px; margin-bottom: 3px; color: #ffffff; letter-spacing: -0.3px;">${title}</div>
          <div style="font-size: 15.5px; color: #cbd5e1; line-height: 1.35;">${subtitle}</div>
        </div>
      `;
		},
		{ badge, title, subtitle, pos }
	);
}

async function hideBanner(page) {
	await page.evaluate(() => {
		const card = document.getElementById('demo-banner-card');
		if (card) card.remove();
	});
}

async function smoothMouseMove(page, targetX, targetY, steps = 18) {
	await page.mouse.move(targetX, targetY, { steps });
}

async function smoothClick(page, selector) {
	const el = typeof selector === 'string' ? page.locator(selector).first() : selector;
	await el.waitFor({ state: 'visible' });
	const box = await el.boundingBox();
	if (box) {
		await smoothMouseMove(page, box.x + box.width / 2, box.y + box.height / 2, 18);
		await page.waitForTimeout(100);
		await page.mouse.down();
		await page.waitForTimeout(120);
		await page.mouse.up();
		await page.waitForTimeout(100);
	} else {
		await el.click();
	}
}

async function smoothType(page, selector, text, delayMs = 24) {
	await smoothClick(page, selector);
	await page.waitForTimeout(120);
	for (const char of text) {
		await page.keyboard.type(char, { delay: delayMs });
	}
}

async function recordPromoForLocale(localeKey) {
	const cfg = CONFIG[localeKey];
	console.log(`\n======================================================`);
	console.log(`Recording promo video for [${localeKey.toUpperCase()}]`);
	console.log(`======================================================`);

	console.log(`[${localeKey}] Resetting demo seed data...`);
	try {
		execSync('docker exec encrypted1on1-backend-1 php bin/console app:reset-demo-data --no-ansi', {
			stdio: 'inherit'
		});
	} catch (err) {
		console.warn(`[${localeKey}] Backend reset warning (continuing):`, err.message);
	}

	const browser = await chromium.launch({ headless: true });
	const context = await browser.newContext({
		recordVideo: {
			dir: TEMP_VIDEO_DIR,
			size: { width: 1440, height: 810 }
		},
		viewport: { width: 1440, height: 810 },
		deviceScaleFactor: 1.333333333
	});

	const page = await context.newPage();
	const videoObj = page.video();
	const recordedVideoPath = await videoObj.path();

	const startTime = Date.now();
	const getElapsed = () => ((Date.now() - startTime) / 1000).toFixed(2);
	const waitUntilElapsed = async (targetSec) => {
		const currentSec = (Date.now() - startTime) / 1000;
		if (targetSec > currentSec) {
			await page.waitForTimeout(Math.round((targetSec - currentSec) * 1000));
		}
	};

	// ----------------------------------------------------
	// SCENE 0: Login (0.0s - 11.5s)
	// ----------------------------------------------------
	console.log(`[${getElapsed()}s] [Scene 0] Login & Psychological Safety`);
	await page.goto(cfg.url);
	await page.waitForLoadState('domcontentloaded');
	await injectUIHelpers(page);
	await smoothMouseMove(page, 720, 405, 10);

	await waitUntilElapsed(1.0);
	await showBanner(page, cfg.banners.s0_1);

	await waitUntilElapsed(3.0);
	await smoothType(page, 'input[type="email"]', cfg.email, 20);
	await page.waitForTimeout(300);
	await smoothType(page, 'input[type="password"]', cfg.password, 20);

	await waitUntilElapsed(6.5);
	await showBanner(page, cfg.banners.s0_2);

	await waitUntilElapsed(10.5);
	await smoothClick(page, 'button[type="submit"]');

	// ----------------------------------------------------
	// SCENE 1: Dashboard (11.5s - 19.5s)
	// ----------------------------------------------------
	console.log(`[${getElapsed()}s] [Scene 1] Dashboard Cadence`);
	await page.waitForSelector(cfg.managerSelector, { timeout: 15000 });
	await injectUIHelpers(page);

	await waitUntilElapsed(12.0);
	await showBanner(page, cfg.banners.s1);

	await smoothMouseMove(page, 720, 315, 20);
	await waitUntilElapsed(15.0);
	await smoothMouseMove(page, 720, 400, 18);
	await waitUntilElapsed(18.5);

	// ----------------------------------------------------
	// SCENE 2: 3-Minute Async Prep (19.5s - 30.5s)
	// ----------------------------------------------------
	console.log(`[${getElapsed()}s] [Scene 2] 3-Minute Async Prep`);
	await smoothClick(page, cfg.activeRowSelector);
	await page.waitForSelector(cfg.meetingH1Wait);
	await injectUIHelpers(page);

	await waitUntilElapsed(20.5);
	await showBanner(page, cfg.banners.s2, 'right');

	await page.evaluate(() => window.scrollBy({ top: 120, behavior: 'smooth' }));
	await page.waitForTimeout(350);

	const mySide = page.locator('.side-card').first();
	await smoothClick(page, mySide.locator('label.radio:has(input[name="moodNow"][value="good"])'));
	await page.waitForTimeout(350);
	await smoothClick(
		page,
		mySide.locator('label.radio:has(input[name="moodTrend"][value="better"])')
	);

	await waitUntilElapsed(24.0);
	await smoothClick(page, mySide.getByRole('button', { name: cfg.feelings[0], exact: true }));
	await page.waitForTimeout(300);
	await smoothClick(page, mySide.getByRole('button', { name: cfg.feelings[1], exact: true }));

	await page.evaluate(() => window.scrollBy({ top: 180, behavior: 'smooth' }));
	await page.waitForTimeout(400);

	await waitUntilElapsed(26.5);
	await smoothType(page, mySide.locator('textarea').first(), cfg.noteText, 18);

	await waitUntilElapsed(30.5);

	// ----------------------------------------------------
	// SCENE 3: Private Notes Drawer (30.5s - 39.5s)
	// ----------------------------------------------------
	console.log(`[${getElapsed()}s] [Scene 3] Private Notes Drawer`);
	await showBanner(page, cfg.banners.s3, 'left');

	const privateNotesArea = page
		.locator('aside textarea, textarea[placeholder*="1:1"], textarea[placeholder*="запомнить"]')
		.first();
	if ((await privateNotesArea.count()) > 0) {
		await waitUntilElapsed(31.5);
		await smoothType(page, privateNotesArea, cfg.privateNoteText, 20);
	}

	await waitUntilElapsed(39.5);

	// ----------------------------------------------------
	// SCENE 4: Bank-Grade Privacy (39.5s - 49.0s)
	// ----------------------------------------------------
	console.log(`[${getElapsed()}s] [Scene 4] Bank-Grade Privacy`);
	await waitUntilElapsed(40.0);
	await showBanner(page, cfg.banners.s4, 'left');

	await waitUntilElapsed(48.5);
	await hideBanner(page);

	// ----------------------------------------------------
	// SCENE 5: Goals Rollover (49.0s - 57.0s)
	// ----------------------------------------------------
	console.log(`[${getElapsed()}s] [Scene 5] Goals Rollover & Continuity`);
	await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
	await smoothClick(page, 'a[href="/"]');
	const archivedRow = page.locator(cfg.archivedRowSelector).first();
	await archivedRow.waitFor({ state: 'visible' });
	await injectUIHelpers(page);

	await waitUntilElapsed(49.8);
	await showBanner(page, cfg.banners.s5, 'right');

	await smoothClick(page, archivedRow);
	await page.waitForSelector('.meta span');
	await injectUIHelpers(page);
	await page.evaluate(() => window.scrollBy({ top: 380, behavior: 'smooth' }));

	await waitUntilElapsed(57.0);

	// ----------------------------------------------------
	// SCENE 6: 1-Click Review (57.0s - 65.5s)
	// ----------------------------------------------------
	console.log(`[${getElapsed()}s] [Scene 6] 1-Click Review Report`);
	await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
	await smoothClick(page, 'a[href="/"]');
	await page.waitForSelector('a[href="/report"]');
	await injectUIHelpers(page);

	await smoothClick(page, 'a[href="/report"]');
	await page.waitForSelector(`button:has-text("${cfg.reportBtnText}")`);
	await injectUIHelpers(page);

	await waitUntilElapsed(57.8);
	await showBanner(page, cfg.banners.s6, 'right');

	await smoothClick(page, `button:has-text("${cfg.reportBtnText}")`);
	await waitUntilElapsed(65.5);

	// ----------------------------------------------------
	// SCENE 7: Theme Toggle & Closing CTA (65.5s - 76.5s)
	// ----------------------------------------------------
	console.log(`[${getElapsed()}s] [Scene 7] Theme Toggle & Closing CTA`);
	await hideBanner(page);

	const themeToggle = page
		.locator('button:has-text("☾"), button:has-text("☽"), [aria-label*="theme"]')
		.first();
	if ((await themeToggle.count()) > 0) {
		await smoothClick(page, themeToggle);
	}

	await page.evaluate(
		({ cta }) => {
			const finalCard = document.createElement('div');
			finalCard.id = 'demo-final-cta';
			finalCard.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(16, 18, 24, 0.97);
      backdrop-filter: blur(28px);
      border: 2.5px solid #eb5e28;
      border-radius: 22px;
      padding: 44px 54px;
      text-align: center;
      color: #fff;
      font-family: system-ui, -apple-system, sans-serif;
      box-shadow: 0 30px 90px rgba(0, 0, 0, 0.88);
      z-index: 99999999;
      min-width: 600px;
      max-width: 820px;
    `;
			finalCard.innerHTML = `
      <div style="display:inline-block; background:rgba(235,94,40,0.22); border:1.5px solid #eb5e28; color:#f97316; font-size:14px; font-weight:800; padding:6px 18px; border-radius:999px; text-transform:uppercase; letter-spacing:1px; margin-bottom:18px;">
        ${cta.badge}
      </div>
      <h1 style="font-size:44px; font-weight:800; margin:0 0 12px 0; color:#fff; letter-spacing:-0.5px;">
        ${cta.title}
      </h1>
      <p style="font-size:20px; color:#cbd5e1; margin:0 0 26px 0; line-height:1.5;">
        ${cta.subtitle}
      </p>
      <div style="background:rgba(235, 94, 40, 0.16); border:2px solid #eb5e28; border-radius:12px; padding:16px 36px; font-size:19px; font-weight:700; color:#fff; margin-bottom:26px; display:inline-block;">
        ${cta.buttonText}
      </div>
      <div style="display:flex; justify-content:center; gap:24px; font-size:15px; color:#cbd5e1;">
        ${cta.bullets.map((b) => `<span>${b}</span>`).join('')}
      </div>
    `;
			document.body.appendChild(finalCard);
		},
		{ cta: cfg.cta }
	);

	await waitUntilElapsed(66.2);

	if (localeKey === 'ru') {
		await page.screenshot({ path: POSTER_IMAGE_PATH });
		console.log('Saved poster frame to:', POSTER_IMAGE_PATH);
	}

	await waitUntilElapsed(76.5);
	await page.close();
	await context.close();
	await browser.close();

	const masterVideoPath = path.join(VIDEOS_DIR, `encrypted1on1-demo-${localeKey}-master.webm`);
	fs.copyFileSync(recordedVideoPath, masterVideoPath);

	// Also maintain generic default master
	if (localeKey === 'ru' || !fs.existsSync(path.join(VIDEOS_DIR, 'encrypted1on1-demo.webm'))) {
		fs.copyFileSync(recordedVideoPath, path.join(VIDEOS_DIR, 'encrypted1on1-demo.webm'));
	}

	const stats = fs.statSync(masterVideoPath);
	console.log(
		`[Success] Master video [${localeKey}] created: ${masterVideoPath} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`
	);
}

(async () => {
	const args = process.argv.slice(2);
	const langArg = args
		.find((a, i) => args[i - 1] === '--lang' || a.startsWith('--lang='))
		?.replace('--lang=', '');

	const localesToRun = langArg ? [langArg] : ['ru', 'en'];

	for (const loc of localesToRun) {
		await recordPromoForLocale(loc);
	}

	try {
		fs.rmSync(TEMP_VIDEO_DIR, { recursive: true, force: true });
	} catch (_) {}

	console.log('\nAll master video recordings completed successfully!');
})().catch((e) => {
	console.error('[Error] Video generation failed:', e);
	process.exit(1);
});
