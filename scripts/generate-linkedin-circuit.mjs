import fs from 'fs';
import path from 'path';

const outDir = path.resolve('static/images/blog');

const data = {
	ru: {
		title: 'ПОЧЕМУ 1-НА-1 НЕ МЕСТО В NOTION И SLACK',
		subtitle: 'Архитектура двух контуров: разделение пространства доверия и учета',

		c1Badge: 'E2EE / ZERO-KNOWLEDGE',
		c1Title: 'КОНТУР 1: ПРОСТРАНСТВО ДОВЕРИЯ',
		c1Sub: 'Зашифровано на устройствах • Доступ только у двоих',
		c1Items: [
			'Честный пульс энергии и нагрузки',
			'Ранние сомнения и симптомы выгорания',
			'Неотфильтрованный фидбек тимлиду',
			'Скрытые риски и страхи по проекту'
		],
		c1Allowed: 'ТОЛЬКО СОТРУДНИК И РУКОВОДИТЕЛЬ',
		c1Blocked: 'ЗАКРЫТО ДЛЯ HR, АДМИНОВ И ИИ',

		filterBadge: 'ФИЛЬТР ОБОЮДНОГО СОГЛАСИЯ',
		filterText: 'Только совместно утвержденные итоги переносятся в систему компании',

		c2Badge: 'SYSTEM OF RECORD',
		c2Title: 'КОНТУР 2: СИСТЕМА УЧЕТА КОМПАНИИ',
		c2Sub: 'Notion, HRIS, BambooHR, Lattice, Slack',
		c2Items: [
			'Официальные цели (OKR / KPI)',
			'Согласованный план развития (PDP)',
			'Итоги Performance Review',
			'Метрика для HR: регулярность встреч'
		],
		c2Allowed: 'ДОСТУПНО HR, РУКОВОДСТВУ И АУДИТУ'
	},
	en: {
		title: 'WHY 1-ON-1s DON’T BELONG IN NOTION OR SLACK',
		subtitle: 'The Two-Circuit Model: Separating the Trust Space from the Record',

		c1Badge: 'E2EE / ZERO-KNOWLEDGE',
		c1Title: 'CIRCUIT 1: THE TRUST SPACE',
		c1Sub: 'Encrypted client-side • Keys held only by participants',
		c1Items: [
			'Authentic energy & workload pulse',
			'Early doubts and burnout warnings',
			'Unfiltered upward feedback to manager',
			'Unspoken project risks & anxieties'
		],
		c1Allowed: 'STRICTLY DIRECT REPORT & MANAGER',
		c1Blocked: 'BLOCKED FOR HR, IT ADMINS & LLMs',

		filterBadge: 'MUTUAL CONSENT FILTER',
		filterText: 'Only mutually agreed outcomes transfer to the corporate system',

		c2Badge: 'SYSTEM OF RECORD',
		c2Title: 'CIRCUIT 2: COMPANY SYSTEM OF RECORD',
		c2Sub: 'Corporate Notion, HRIS, BambooHR, Lattice, Slack',
		c2Items: [
			'Formal quarterly objectives (OKRs / KPIs)',
			'Approved Development Plan (PDP)',
			'Official Performance Review outcomes',
			'HR process health: meeting cadence'
		],
		c2Allowed: 'ACCESSIBLE TO HR, EXECUTIVES & AUDIT'
	}
};

function escapeXml(unsafe) {
	return unsafe.replace(/[<>&'"]/g, (c) => {
		switch (c) {
			case '<':
				return '&lt;';
			case '>':
				return '&gt;';
			case '&':
				return '&amp;';
			case "'":
				return '&apos;';
			case '"':
				return '&quot;';
		}
	});
}

function renderSvg(lang, item) {
	return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@600;700;800;900&amp;family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600&amp;display=swap');
      
      .txt-title {
        font-family: 'Unbounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 800;
        font-size: 32px;
        fill: #201e1d;
        letter-spacing: -0.02em;
      }
      .txt-subtitle {
        font-family: 'Figtree', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-weight: 500;
        font-size: 19px;
        fill: #685e52;
      }
      .txt-card-badge {
        font-family: 'Unbounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 700;
        font-size: 12px;
        letter-spacing: 0.08em;
      }
      .txt-card-title {
        font-family: 'Unbounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 700;
        font-size: 23px;
        letter-spacing: -0.01em;
      }
      .txt-card-sub {
        font-family: 'Figtree', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-weight: 500;
        font-size: 16px;
        fill: #73695d;
      }
      .txt-item {
        font-family: 'Figtree', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-weight: 600;
        font-size: 20px;
        fill: #201e1d;
      }
      .txt-pill {
        font-family: 'Unbounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 700;
        font-size: 12.5px;
        letter-spacing: 0.04em;
      }
      .txt-bridge-badge {
        font-family: 'Unbounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 700;
        font-size: 13px;
        letter-spacing: 0.08em;
      }
      .txt-bridge-text {
        font-family: 'Figtree', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-weight: 600;
        font-size: 18px;
        fill: #201e1d;
      }
    </style>

    <!-- Subtle Drop Shadow -->
    <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="115%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="5" stdDeviation="10" flood-color="#201e1d" flood-opacity="0.07" />
    </filter>
  </defs>

  <!-- ================= CANVAS BACKGROUND ================= -->
  <rect width="1080" height="1080" fill="#f6ebdc" />

  <!-- Outer frame border with rounded corners -->
  <rect x="24" y="24" width="1032" height="1032" rx="20" fill="none" stroke="#201e1d" stroke-width="2.5" />

  <!-- Corner Bauhaus accents -->
  <g stroke="#201e1d" stroke-width="2" fill="none">
    <path d="M 40,36 L 36,36 L 36,40" />
    <path d="M 1040,36 L 1044,36 L 1044,40" />
    <path d="M 36,1040 L 36,1044 L 40,1044" />
    <path d="M 1044,1040 L 1044,1044 L 1040,1044" />
  </g>

  <!-- ================= HEADER SECTION ================= -->
  <g transform="translate(60, 56)">
    <!-- Main Title -->
    <text class="txt-title" x="0" y="32">${escapeXml(item.title)}</text>
    
    <!-- Subtitle -->
    <text class="txt-subtitle" x="0" y="66">${escapeXml(item.subtitle)}</text>
  </g>

  <!-- Divider Line -->
  <line x1="60" y1="140" x2="1020" y2="140" stroke="#dfd2c0" stroke-width="2" />

  <!-- ================= CIRCUIT 1: TRUST SPACE ================= -->
  <g transform="translate(60, 160)" filter="url(#cardShadow)">
    <!-- Card Container -->
    <rect width="960" height="360" rx="16" fill="#fffcf7" stroke="#201e1d" stroke-width="2.5" />
    <!-- Left Accent Stripe (Warm Terracotta / Coral) -->
    <path d="M 0,16 Q 0,0 16,0 L 22,0 L 22,360 L 16,360 Q 0,360 Z" fill="#c85a32" />

    <!-- Card Header -->
    <g transform="translate(48, 26)">
      <!-- Badge -->
      <rect x="0" y="0" width="220" height="28" rx="8" fill="#fdeee7" stroke="#c85a32" stroke-width="1.5" />
      <text class="txt-card-badge" x="110" y="19" fill="#c85a32" text-anchor="middle">${escapeXml(item.c1Badge)}</text>

      <!-- Title & Subtitle -->
      <text class="txt-card-title" x="0" y="58" fill="#201e1d">${escapeXml(item.c1Title)}</text>
      <text class="txt-card-sub" x="0" y="84">${escapeXml(item.c1Sub)}</text>
    </g>

    <!-- 4 Bullet Items in 2x2 Grid -->
    <g transform="translate(48, 134)">
      <!-- Item 1 (top-left) -->
      <g transform="translate(0, 0)">
        <rect x="0" y="4" width="24" height="24" rx="6" fill="#fbe8e0" stroke="#c85a32" stroke-width="1.8" />
        <text x="12" y="21" font-family="sans-serif" font-weight="900" font-size="16" fill="#c85a32" text-anchor="middle">✓</text>
        <text class="txt-item" x="38" y="23">${escapeXml(item.c1Items[0])}</text>
      </g>
      <!-- Item 2 (top-right) -->
      <g transform="translate(450, 0)">
        <rect x="0" y="4" width="24" height="24" rx="6" fill="#fbe8e0" stroke="#c85a32" stroke-width="1.8" />
        <text x="12" y="21" font-family="sans-serif" font-weight="900" font-size="16" fill="#c85a32" text-anchor="middle">✓</text>
        <text class="txt-item" x="38" y="23">${escapeXml(item.c1Items[1])}</text>
      </g>
      <!-- Item 3 (bottom-left) -->
      <g transform="translate(0, 50)">
        <rect x="0" y="4" width="24" height="24" rx="6" fill="#fbe8e0" stroke="#c85a32" stroke-width="1.8" />
        <text x="12" y="21" font-family="sans-serif" font-weight="900" font-size="16" fill="#c85a32" text-anchor="middle">✓</text>
        <text class="txt-item" x="38" y="23">${escapeXml(item.c1Items[2])}</text>
      </g>
      <!-- Item 4 (bottom-right) -->
      <g transform="translate(450, 50)">
        <rect x="0" y="4" width="24" height="24" rx="6" fill="#fbe8e0" stroke="#c85a32" stroke-width="1.8" />
        <text x="12" y="21" font-family="sans-serif" font-weight="900" font-size="16" fill="#c85a32" text-anchor="middle">✓</text>
        <text class="txt-item" x="38" y="23">${escapeXml(item.c1Items[3])}</text>
      </g>
    </g>

    <!-- Bottom Status Pills -->
    <g transform="translate(48, 268)">
      <!-- Green Access Pill -->
      <g transform="translate(0, 0)">
        <rect width="420" height="42" rx="10" fill="#eaf6ea" stroke="#2e541f" stroke-width="1.8" />
        <text x="22" y="27" font-size="18">🔒</text>
        <text class="txt-pill" x="52" y="27" fill="#2e541f">${escapeXml(item.c1Allowed)}</text>
      </g>
      <!-- Red Blocked Pill -->
      <g transform="translate(440, 0)">
        <rect width="424" height="42" rx="10" fill="#fdf0ed" stroke="#a73516" stroke-width="1.8" />
        <text x="20" y="27" font-size="18">🚫</text>
        <text class="txt-pill" x="50" y="27" fill="#a73516">${escapeXml(item.c1Blocked)}</text>
      </g>
    </g>
  </g>

  <!-- ================= BRIDGE / TRANSITION FILTER ================= -->
  <g transform="translate(60, 542)">
    <!-- Connecting dashed lines from C1 to Bridge -->
    <line x1="480" y1="-22" x2="480" y2="0" stroke="#201e1d" stroke-width="2.5" stroke-dasharray="4,4" />

    <!-- Filter Banner Card -->
    <g filter="url(#cardShadow)">
      <rect width="960" height="86" rx="14" fill="#faeed7" stroke="#201e1d" stroke-width="2.2" />

      <!-- Funnel / Filter Icon on left -->
      <g transform="translate(36, 22)">
        <polygon points="0,0 24,0 16,14 16,28 8,24 8,14" fill="#c85a32" stroke="#201e1d" stroke-width="1.5" />
      </g>

      <!-- Badge & Description -->
      <g transform="translate(80, 18)">
        <rect x="0" y="0" width="${lang === 'ru' ? 320 : 240}" height="24" rx="6" fill="#c85a32" />
        <text class="txt-bridge-badge" x="${lang === 'ru' ? 160 : 120}" y="17" fill="#ffffff" text-anchor="middle">${escapeXml(item.filterBadge)}</text>
        <text class="txt-bridge-text" x="0" y="48">${escapeXml(item.filterText)}</text>
      </g>

      <!-- Arrow Down Icon on right -->
      <g transform="translate(896, 26)">
        <circle cx="16" cy="16" r="20" fill="#201e1d" />
        <path d="M 16,9 L 16,23 M 10,17 L 16,23 L 22,17" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      </g>
    </g>

    <!-- Connecting dashed lines from Bridge to C2 -->
    <line x1="480" y1="86" x2="480" y2="108" stroke="#201e1d" stroke-width="2.5" stroke-dasharray="4,4" />
  </g>

  <!-- ================= CIRCUIT 2: SYSTEM OF RECORD ================= -->
  <g transform="translate(60, 650)" filter="url(#cardShadow)">
    <!-- Card Container -->
    <rect width="960" height="360" rx="16" fill="#fffcf7" stroke="#201e1d" stroke-width="2.5" />
    <!-- Left Accent Stripe (Deep Slate / Navy) -->
    <path d="M 0,16 Q 0,0 16,0 L 22,0 L 22,360 L 16,360 Q 0,360 Z" fill="#2d4059" />

    <!-- Card Header -->
    <g transform="translate(48, 26)">
      <!-- Badge -->
      <rect x="0" y="0" width="200" height="28" rx="8" fill="#e8eef6" stroke="#2d4059" stroke-width="1.5" />
      <text class="txt-card-badge" x="100" y="19" fill="#2d4059" text-anchor="middle">${escapeXml(item.c2Badge)}</text>

      <!-- Title & Subtitle -->
      <text class="txt-card-title" x="0" y="58" fill="#201e1d">${escapeXml(item.c2Title)}</text>
      <text class="txt-card-sub" x="0" y="84">${escapeXml(item.c2Sub)}</text>
    </g>

    <!-- 4 Bullet Items in 2x2 Grid -->
    <g transform="translate(48, 134)">
      <!-- Item 1 (top-left) -->
      <g transform="translate(0, 0)">
        <rect x="0" y="4" width="24" height="24" rx="6" fill="#e8eef6" stroke="#2d4059" stroke-width="1.8" />
        <text x="12" y="21" font-family="sans-serif" font-weight="900" font-size="16" fill="#2d4059" text-anchor="middle">✔</text>
        <text class="txt-item" x="38" y="23">${escapeXml(item.c2Items[0])}</text>
      </g>
      <!-- Item 2 (top-right) -->
      <g transform="translate(450, 0)">
        <rect x="0" y="4" width="24" height="24" rx="6" fill="#e8eef6" stroke="#2d4059" stroke-width="1.8" />
        <text x="12" y="21" font-family="sans-serif" font-weight="900" font-size="16" fill="#2d4059" text-anchor="middle">✔</text>
        <text class="txt-item" x="38" y="23">${escapeXml(item.c2Items[1])}</text>
      </g>
      <!-- Item 3 (bottom-left) -->
      <g transform="translate(0, 50)">
        <rect x="0" y="4" width="24" height="24" rx="6" fill="#e8eef6" stroke="#2d4059" stroke-width="1.8" />
        <text x="12" y="21" font-family="sans-serif" font-weight="900" font-size="16" fill="#2d4059" text-anchor="middle">✔</text>
        <text class="txt-item" x="38" y="23">${escapeXml(item.c2Items[2])}</text>
      </g>
      <!-- Item 4 (bottom-right) -->
      <g transform="translate(450, 50)">
        <rect x="0" y="4" width="24" height="24" rx="6" fill="#e8eef6" stroke="#2d4059" stroke-width="1.8" />
        <text x="12" y="21" font-family="sans-serif" font-weight="900" font-size="16" fill="#2d4059" text-anchor="middle">✔</text>
        <text class="txt-item" x="38" y="23">${escapeXml(item.c2Items[3])}</text>
      </g>
    </g>

    <!-- Bottom Status Pill -->
    <g transform="translate(48, 268)">
      <rect width="864" height="42" rx="10" fill="#f0f4f8" stroke="#2d4059" stroke-width="1.8" />
      <text x="24" y="27" font-size="18">📋</text>
      <text class="txt-pill" x="54" y="27" fill="#2d4059">${escapeXml(item.c2Allowed)}</text>
    </g>
  </g>
</svg>`;
}

for (const [lang, item] of Object.entries(data)) {
	const svg = renderSvg(lang, item);
	const filename = path.join(outDir, `linkedin-two-circuits-${lang}.svg`);
	fs.writeFileSync(filename, svg, 'utf-8');
	console.log(`Generated: ${filename}`);
}

async function renderPngs() {
	const { chromium } = await import('playwright');
	const browser = await chromium.launch();
	const page = await browser.newPage({
		viewport: { width: 1080, height: 1080 },
		deviceScaleFactor: 2
	});

	for (const lang of Object.keys(data)) {
		const svgPath = path.join(outDir, `linkedin-two-circuits-${lang}.svg`);
		const pngPath = path.join(outDir, `linkedin-two-circuits-${lang}.png`);
		await page.goto(`file://${svgPath.replace(/\\/g, '/')}`);
		await page.screenshot({ path: pngPath, type: 'png' });
		console.log(`Rendered LinkedIn PNG: ${pngPath}`);
	}

	await browser.close();
}

renderPngs().catch(console.error);
