import { chromium } from '@playwright/test';
import { execSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const VIDEOS_DIR = path.join(REPO_ROOT, 'static/videos');
const FINAL_VIDEO_PATH = path.join(VIDEOS_DIR, 'encrypted1on1-demo.webm');
const POSTER_IMAGE_PATH = path.join(VIDEOS_DIR, 'demo-poster.png');
const TEMP_VIDEO_DIR = path.join(REPO_ROOT, '.temp-video-recordings');

if (!fs.existsSync(VIDEOS_DIR)) {
	fs.mkdirSync(VIDEOS_DIR, { recursive: true });
}
if (!fs.existsSync(TEMP_VIDEO_DIR)) {
	fs.mkdirSync(TEMP_VIDEO_DIR, { recursive: true });
}

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
        bottom: 36px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(20, 20, 24, 0.95);
        backdrop-filter: blur(16px);
        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 14px;
        padding: 16px 28px;
        color: #fff;
        font-family: system-ui, -apple-system, sans-serif;
        box-shadow: 0 20px 48px rgba(0, 0, 0, 0.55);
        z-index: 9999990;
        display: flex;
        align-items: center;
        gap: 18px;
        min-width: 520px;
        max-width: 880px;
        transition: opacity 0.3s ease, transform 0.3s ease;
      }
      #demo-crypto-modal {
        position: fixed;
        bottom: 110px;
        right: 40px;
        width: 540px;
        background: rgba(13, 16, 23, 0.97);
        backdrop-filter: blur(16px);
        border: 1.5px solid #eb5e28;
        border-radius: 14px;
        padding: 18px 22px;
        color: #e2e8f0;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 12.5px;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
        z-index: 9999995;
        animation: demoSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
      @keyframes demoSlideUp {
        from { opacity: 0; transform: translateY(24px); }
        to { opacity: 1; transform: translateY(0); }
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

async function showBanner(page, { badge, title, subtitle }) {
	await page.evaluate(
		({ badge, title, subtitle }) => {
			let card = document.getElementById('demo-banner-card');
			if (!card) {
				card = document.createElement('div');
				card.id = 'demo-banner-card';
				document.body.appendChild(card);
			}
			card.innerHTML = `
      <div style="background: #eb5e28; color: #fff; padding: 5px 12px; border-radius: 7px; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.6px; white-space: nowrap;">${badge}</div>
      <div>
        <div style="font-weight: 700; font-size: 16px; margin-bottom: 3px; color: #ffffff;">${title}</div>
        <div style="font-size: 13.5px; color: #cbd5e1; line-height: 1.35;">${subtitle}</div>
      </div>
    `;
		},
		{ badge, title, subtitle }
	);
}

async function hideBanner(page) {
	await page.evaluate(() => {
		const card = document.getElementById('demo-banner-card');
		if (card) card.remove();
	});
}

async function showCryptoInspector(page) {
	await page.evaluate(() => {
		const modal = document.createElement('div');
		modal.id = 'demo-crypto-modal';
		modal.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid #334155; padding-bottom:8px;">
        <span style="font-weight:bold; color:#f97316; font-size:13px; display:flex; align-items:center; gap:6px;">
          🔒 Zero-Knowledge Network Payload
        </span>
        <span style="font-size:11px; background:#0f766e; color:#ccfbf1; padding:2px 8px; border-radius:4px; font-weight:600;">PROVABLY SECURE</span>
      </div>
      <div style="color:#94a3b8; margin-bottom:6px; font-size:12px;">POST /api/anketas/.../publish</div>
      <div style="background:#090d16; padding:10px; border-radius:8px; overflow-x:hidden; word-break:break-all; line-height:1.45; color:#38bdf8; font-size:11.5px;">
        {<br>
        &nbsp;&nbsp;<span style="color:#f43f5e">"employeeBlob"</span>: <span style="color:#a7f3d0">"3lZo8iTwxFl8BLAX1FagzNGoITxo1JetxUUpODIGnN2HJGCGr..."</span>,<br>
        &nbsp;&nbsp;<span style="color:#f43f5e">"employeeSealedKey"</span>: <span style="color:#a7f3d0">"hS/rS4/k3fumr0uLzmiHb8czu7fQbyRRKpQmFYMvK3g00ZL..."</span><br>
        }
      </div>
      <div style="margin-top:10px; font-size:11.5px; color:#a1a1aa; line-height:1.4;">
        ✓ Encrypted client-side with Argon2id + X25519.<br>
        ✓ The server & database never see plaintext notes.
      </div>
    `;
		document.body.appendChild(modal);
	});
}

async function hideCryptoInspector(page) {
	await page.evaluate(() => {
		const modal = document.getElementById('demo-crypto-modal');
		if (modal) modal.remove();
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

(async () => {
	console.log('[Step 0] Resetting backend demo data...');
	try {
		execSync('docker exec encrypted1on1-backend-1 php bin/console app:reset-demo-data --no-ansi', {
			stdio: 'inherit'
		});
	} catch (err) {
		console.warn('Backend reset warning (continuing):', err.message);
	}

	console.log('[Step 1] Launching Chromium 1920x1080...');
	const browser = await chromium.launch({ headless: true });
	const context = await browser.newContext({
		recordVideo: {
			dir: TEMP_VIDEO_DIR,
			size: { width: 1920, height: 1080 }
		},
		viewport: { width: 1920, height: 1080 }
	});

	const page = await context.newPage();
	const videoObj = page.video();
	const recordedVideoPath = await videoObj.path();
	console.log('Video recording started at:', recordedVideoPath);

	const startTime = Date.now();
	const getElapsed = () => ((Date.now() - startTime) / 1000).toFixed(2);
	const waitUntilElapsed = async (targetSec) => {
		const currentSec = (Date.now() - startTime) / 1000;
		if (targetSec > currentSec) {
			await page.waitForTimeout(Math.round((targetSec - currentSec) * 1000));
		}
	};

	// ----------------------------------------------------
	// SCENE 0: Login & Zero-Knowledge Architecture (0.0s - 11.5s)
	// ----------------------------------------------------
	console.log(`[${getElapsed()}s] [Scene 0] Login & Zero-Knowledge Architecture`);
	await page.goto('http://localhost:5173/?lang=en');
	await page.waitForLoadState('domcontentloaded');
	await injectUIHelpers(page);
	await smoothMouseMove(page, 960, 540, 10);

	// Voice 0 starts at 1.0s, finishes at ~10.2s RU / ~9.3s EN
	await waitUntilElapsed(1.0);
	await showBanner(page, {
		badge: 'Zero-Knowledge',
		title: 'encrypted1on1 — Provably Private 1:1 Meetings',
		subtitle:
			'Self-hosted, client-side encrypted meetings. Not even the server operator can read what’s written.'
	});

	await waitUntilElapsed(3.0);
	await smoothType(page, 'input[type="email"]', 'demo-employee@example.com', 20);
	await page.waitForTimeout(300);
	await smoothType(page, 'input[type="password"]', 'e1o1-demo-2026', 20);

	await waitUntilElapsed(6.5);
	await showBanner(page, {
		badge: 'Security',
		title: 'Keys Derived in Browser',
		subtitle:
			'Cryptographic keys are derived locally via Argon2id. Your password never leaves this device.'
	});

	// Wait until voiceover 0 completes comfortably before submitting
	await waitUntilElapsed(10.5);
	await smoothClick(page, 'button[type="submit"]');

	// ----------------------------------------------------
	// SCENE 1: Dashboard & Meeting Cadence (11.5s - 19.5s)
	// ----------------------------------------------------
	console.log(`[${getElapsed()}s] [Scene 1] Dashboard & Meeting Cadence`);
	await page.waitForSelector('text=Jordan Blake', { timeout: 15000 });
	await injectUIHelpers(page);

	// Voice 1 starts at 12.0s, finishes at ~17.9s RU / ~18.5s EN
	await waitUntilElapsed(12.0);
	await showBanner(page, {
		badge: 'Continuity',
		title: 'Structured 1:1 Cadence',
		subtitle:
			'Continuous meeting rhythm with complete history — upcoming cycles and archived syncs.'
	});

	// Smooth hover across meeting cards
	await smoothMouseMove(page, 960, 420, 20);
	await waitUntilElapsed(15.0);
	await smoothMouseMove(page, 960, 530, 18);
	await waitUntilElapsed(18.5);

	// ----------------------------------------------------
	// SCENE 2: 3-Minute Async Prep (19.5s - 30.5s)
	// ----------------------------------------------------
	console.log(`[${getElapsed()}s] [Scene 2] 3-Minute Async Prep`);
	// Click on active meeting ("In 6 days")
	await smoothClick(page, 'text=In 6 days');
	await page.waitForSelector('.meta span:has-text("Meeting:")');
	await page.waitForSelector('h1:has-text("Jordan")');
	await injectUIHelpers(page);

	// Voice 2 starts at 20.5s, finishes at ~28.9s RU / ~28.9s EN
	await waitUntilElapsed(20.5);
	await showBanner(page, {
		badge: 'Async Prep',
		title: '3-Minute Preparation Ahead of Meeting',
		subtitle:
			'Employee logs mood, pulse, and blockers in minutes. No blank pages, no surprise status checks.'
	});

	// Select Mood: "Good", "Better"
	const mySide = page.locator('.side-card').first();
	await smoothClick(page, mySide.locator('label.radio:has(input[name="moodNow"][value="good"])'));
	await page.waitForTimeout(350);
	await smoothClick(
		page,
		mySide.locator('label.radio:has(input[name="moodTrend"][value="better"])')
	);

	// Select Feelings: "Confident", "Motivated"
	await waitUntilElapsed(24.0);
	await smoothClick(page, mySide.getByRole('button', { name: 'Confident', exact: true }));
	await page.waitForTimeout(300);
	await smoothClick(page, mySide.getByRole('button', { name: 'Motivated', exact: true }));

	// Scroll down smoothly
	await page.evaluate(() => window.scrollBy({ top: 220, behavior: 'smooth' }));
	await page.waitForTimeout(400);

	// Type note in "Anything to add?"
	await waitUntilElapsed(26.5);
	await smoothType(
		page,
		mySide.locator('textarea').first(),
		'Shipped billing export migration ahead of deadline. Team cadence is great!',
		18
	);

	// Transition to Private Notes right at 30.5s
	await waitUntilElapsed(30.5);

	// ----------------------------------------------------
	// SCENE 3: Private Notes Drawer (30.5s - 39.5s)
	// ----------------------------------------------------
	console.log(`[${getElapsed()}s] [Scene 3] Private Notes Drawer`);
	// Voice 3 starts at 31.0s, finishes at ~37.0s RU / ~35.8s EN
	await showBanner(page, {
		badge: 'Confidential',
		title: 'Isolated Private Scratchpad',
		subtitle:
			'Notes encrypted exclusively for your own eyes — counterpart and skip-level never see them.'
	});

	const privateNotesArea = page.locator('aside textarea, textarea[placeholder*="1:1"]').first();
	if ((await privateNotesArea.count()) > 0) {
		await waitUntilElapsed(31.5);
		await smoothType(
			page,
			privateNotesArea,
			'Discuss Q4 promotion roadmap & mentorship during sync.',
			20
		);
	}

	// Let user view private notes safely until 39.5s
	await waitUntilElapsed(39.5);

	// ----------------------------------------------------
	// SCENE 4: The Proof (Zero-Knowledge Ciphertext Modal) (39.5s - 49.0s)
	// ----------------------------------------------------
	console.log(`[${getElapsed()}s] [Scene 4] The Proof (Zero-Knowledge Ciphertext)`);
	// Pop up modal right at 39.5s
	await showCryptoInspector(page);

	// Voice 4 starts at 40.0s, finishes at ~46.7s RU / ~46.0s EN
	await waitUntilElapsed(40.0);
	await showBanner(page, {
		badge: 'The Proof',
		title: 'Client-Side Zero-Knowledge Encryption',
		subtitle:
			'Content is encrypted before transmission. The server and database only ever see ciphertext.'
	});

	// Keep modal visible throughout speech until 48.5s
	await waitUntilElapsed(48.5);
	await hideCryptoInspector(page);

	// ----------------------------------------------------
	// SCENE 5: Goals Rollover & Continuity (49.0s - 57.0s)
	// ----------------------------------------------------
	console.log(`[${getElapsed()}s] [Scene 5] Goals Rollover & Inline Feedback`);
	await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
	await smoothClick(page, 'a[href="/"]');
	const archivedRow = page.locator('a.anketa-row:has(.tag:has-text("archived"))').first();
	await archivedRow.waitFor({ state: 'visible' });
	await injectUIHelpers(page);

	// Voice 5 starts at 49.8s, finishes at ~54.7s RU / ~55.1s EN
	await waitUntilElapsed(49.8);
	await showBanner(page, {
		badge: 'Continuity',
		title: 'Inline Feedback & Goals Rollover',
		subtitle:
			'Past cycles carry forward agreed goals and context automatically into the next meeting.'
	});

	// Open completed meeting
	await smoothClick(page, archivedRow);
	await page.waitForSelector('.meta span:has-text("Meeting:")');
	await page.waitForSelector('.tag:has-text("archived")');
	await injectUIHelpers(page);
	await page.evaluate(() => window.scrollBy({ top: 380, behavior: 'smooth' }));

	await waitUntilElapsed(57.0);

	// ----------------------------------------------------
	// SCENE 6: 1-Click Performance Review (57.0s - 65.5s)
	// ----------------------------------------------------
	console.log(`[${getElapsed()}s] [Scene 6] 1-Click Performance Review`);
	await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
	await smoothClick(page, 'a[href="/"]');
	await page.waitForSelector('a[href="/report"]');
	await injectUIHelpers(page);

	await smoothClick(page, 'a[href="/report"]');
	await page.waitForSelector('button:has-text("Generate report")');
	await injectUIHelpers(page);

	// Voice 6 starts at 57.8s, finishes at ~62.7s RU / ~63.4s EN
	await waitUntilElapsed(57.8);
	await showBanner(page, {
		badge: '1-Click Review',
		title: 'Instant Performance Review Report',
		subtitle:
			'Aggregate months of 1:1 achievements, feedback, and milestones into a structured report in one click.'
	});

	await smoothClick(page, 'button:has-text("Generate report")');
	await waitUntilElapsed(65.5);

	// ----------------------------------------------------
	// SCENE 7: Theme Toggle & Closing CTA (65.5s - 76.5s)
	// ----------------------------------------------------
	console.log(`[${getElapsed()}s] [Scene 7] Theme Toggle & Closing CTA`);
	await hideBanner(page);

	// Toggle Dark Theme
	const themeToggle = page
		.locator('button:has-text("☾"), button:has-text("☽"), [aria-label*="theme"]')
		.first();
	if ((await themeToggle.count()) > 0) {
		await smoothClick(page, themeToggle);
	}

	// Final Call-to-Action Card
	await page.evaluate(() => {
		const finalCard = document.createElement('div');
		finalCard.id = 'demo-final-cta';
		finalCard.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(18, 18, 22, 0.96);
      backdrop-filter: blur(24px);
      border: 2px solid #eb5e28;
      border-radius: 20px;
      padding: 48px 60px;
      text-align: center;
      color: #fff;
      font-family: system-ui, -apple-system, sans-serif;
      box-shadow: 0 25px 80px rgba(0, 0, 0, 0.85);
      z-index: 99999999;
      animation: demoSlideUp 0.5s ease forwards;
      min-width: 620px;
    `;
		finalCard.innerHTML = `
      <div style="display:inline-block; background:rgba(235,94,40,0.22); border:1px solid #eb5e28; color:#f97316; font-size:13px; font-weight:700; padding:6px 16px; border-radius:999px; text-transform:uppercase; letter-spacing:1px; margin-bottom:18px;">
        Open Source • AGPLv3
      </div>
      <h1 style="font-size:42px; font-weight:800; margin:0 0 12px 0; color:#fff; letter-spacing:-0.5px;">
        encrypted1on1
      </h1>
      <p style="font-size:19px; color:#cbd5e1; margin:0 0 28px 0; line-height:1.5;">
        Private 1:1s. Provably private. Zero-Knowledge E2EE.
      </p>
      <div style="background:#090d16; border:1px solid #334155; border-radius:10px; padding:15px 24px; font-family:monospace; font-size:16px; color:#38bdf8; margin-bottom:28px; display:inline-block;">
        docker run -p 8080:8080 encrypted1on1
      </div>
      <div style="display:flex; justify-content:center; gap:24px; font-size:15px; color:#94a3b8;">
        <span>✓ Self-hosted in 2 minutes</span>
        <span>✓ No per-seat pricing</span>
        <span>✓ Zero vendor lock-in</span>
      </div>
    `;
		document.body.appendChild(finalCard);
	});

	// Voice 7 starts at 66.2s, finishes at ~73.7s RU / ~72.3s EN
	await waitUntilElapsed(66.2);

	// Save poster frame
	await page.screenshot({ path: POSTER_IMAGE_PATH });
	console.log('Saved poster frame to:', POSTER_IMAGE_PATH);

	// Wait comfortably until 76.5s (giving ~2.8s of clean outro after voice stops)
	await waitUntilElapsed(76.5);

	console.log(`[${getElapsed()}s] [Step 8] Finalizing video recording...`);
	await page.close();
	await context.close();
	await browser.close();

	// Copy finalized video
	fs.copyFileSync(recordedVideoPath, FINAL_VIDEO_PATH);

	// Clean temp recording dir
	try {
		fs.rmSync(TEMP_VIDEO_DIR, { recursive: true, force: true });
	} catch (_) {}

	const stats = fs.statSync(FINAL_VIDEO_PATH);
	console.log(
		`[Success] Video created at: ${FINAL_VIDEO_PATH} (${(stats.size / 1024 / 1024).toFixed(2)} MB, total ~${getElapsed()}s)`
	);
})().catch((e) => {
	console.error('[Error] Video generation failed:', e);
	process.exit(1);
});
