<script lang="ts">
	import { page } from '$app/state';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import {
		getPlaybookItem,
		getCategories,
		getPlaybookUi,
		getPlaybookItems
	} from '$lib/content/playbook';
	import { appDemoUrl, SITE_URL } from '$lib/links';

	const locale = $derived(getLocale());
	const slug = $derived(page.params.slug);
	const item = $derived(getPlaybookItem(slug, locale));
	const categories = $derived(getCategories(locale));
	const ui = $derived(getPlaybookUi(locale));
	const allItems = $derived(getPlaybookItems(locale));
	const otherItems = $derived(allItems.filter((i) => i.slug !== slug).slice(0, 3));

	let copied = $state(false);

	function copyAgendaToClipboard() {
		if (!item) return;

		let text = `# ${item.title}\n\n`;
		text += `${item.subtitle}\n\n`;
		text += `Cadence: ${item.cadence} | Duration: ${item.duration}\n\n`;
		text += `## Agenda\n\n`;

		for (const section of item.agenda) {
			text += `### ${section.title}\n`;
			if (section.description) {
				text += `${section.description}\n\n`;
			}
			for (const q of section.questions) {
				text += `- ${q}\n`;
			}
			text += `\n`;
		}

		if (item.tips && item.tips.length > 0) {
			text += `## Guidance\n\n`;
			for (const tip of item.tips) {
				text += `- ${tip}\n`;
			}
			text += `\n`;
		}

		if (item.keyTakeaway) {
			text += `> ${item.keyTakeaway}\n`;
		}

		navigator.clipboard.writeText(text).then(() => {
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2500);
		});
	}

	const articleSchema = $derived(
		item
			? JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'Article',
					headline: item.title,
					description: item.subtitle,
					author: {
						'@type': 'Organization',
						name: 'encrypted1on1',
						url: 'https://private1on1.eu'
					},
					publisher: {
						'@type': 'Organization',
						name: 'encrypted1on1',
						url: 'https://private1on1.eu'
					}
				})
			: ''
	);
</script>

<svelte:head>
	{#if item}
		<title>{item.title} — encrypted1on1 Playbook</title>
		<meta name="description" content={item.subtitle} />
		<meta property="og:title" content="{item.title} — encrypted1on1 Playbook" />
		<meta property="og:description" content={item.subtitle} />
		<meta property="og:image" content="{SITE_URL}/images/playbook/{item.slug}.jpg" />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="675" />
		<meta name="twitter:image" content="{SITE_URL}/images/playbook/{item.slug}.jpg" />
		{@html `<script type="application/ld+json">${articleSchema}</script>`}
	{/if}
</svelte:head>

{#if item}
	{@const categoryMeta = categories.find((c) => c.id === item.category)}
	<article class="playbook-detail-page">
		<!-- Breadcrumbs -->
		<nav class="breadcrumbs" aria-label="Breadcrumb">
			<a href={localizeHref('/playbook/')}>{ui.playbookTitle}</a>
			<span class="separator">/</span>
			<span class="current-category">{categoryMeta?.label || item.category}</span>
		</nav>

		<!-- Hero Cover Image -->
		<div class="detail-cover-wrap">
			<img
				class="detail-cover-img"
				src="/images/playbook/{item.slug}.jpg"
				alt={item.title}
				width="1200"
				height="675"
			/>
		</div>

		<!-- Header -->
		<header class="detail-header">
			<div class="category-badge-wrap">
				<span class="category-badge">{categoryMeta?.label || item.category}</span>
				<span class="read-time text-muted">{item.readTime}</span>
			</div>
			<h1>{item.title}</h1>
			<p class="detail-subtitle">{item.subtitle}</p>

			<!-- Quick Info Cards -->
			<div class="meta-strip">
				<div class="meta-box">
					<span class="meta-box-label">{ui.cadenceLabel}</span>
					<span class="meta-box-value">{item.cadence}</span>
				</div>
				<div class="meta-box">
					<span class="meta-box-label">{ui.durationLabel}</span>
					<span class="meta-box-value">{item.duration}</span>
				</div>
				<div class="meta-box">
					<span class="meta-box-label">{ui.audienceLabel}</span>
					<span class="meta-box-value">{item.targetAudience}</span>
				</div>
			</div>
		</header>

		<!-- Why It Matters Section -->
		<section class="section-block why-section">
			<h2>{ui.whyItMattersHeading}</h2>
			<div class="prose">
				{@html item.whyItMattersHtml}
			</div>
		</section>

		<!-- Preparation Section (if present) -->
		{#if item.preparationHtml}
			<section class="section-block prep-section">
				<h2>{ui.preparationHeading}</h2>
				<div class="prose prep-box">
					{@html item.preparationHtml}
				</div>
			</section>
		{/if}

		<!-- Action bar -->
		<div class="action-bar">
			<button type="button" class="btn btn-secondary copy-btn" onclick={copyAgendaToClipboard}>
				{#if copied}
					<span class="copy-icon">✓</span> {ui.copiedAgendaBtn}
				{:else}
					<span class="copy-icon">📋</span> {ui.copyAgendaBtn}
				{/if}
			</button>
		</div>

		<!-- Agenda Breakdown -->
		<section class="section-block agenda-section">
			<h2>{ui.agendaHeading}</h2>
			<div class="agenda-items">
				{#each item.agenda as section, idx (section.title)}
					<div class="agenda-card">
						<div class="agenda-card-top">
							<span class="section-num">{idx + 1}</span>
							<div class="section-titles">
								<h3>{section.title}</h3>
								<p class="section-desc">{section.description}</p>
							</div>
							<span class="section-time">{section.durationMinutes} min</span>
						</div>
						<ul class="questions-list">
							{#each section.questions as question (question)}
								<li class="question-item">{question}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</section>

		<!-- Anti-Patterns Section (if present) -->
		{#if item.antiPatterns && item.antiPatterns.length > 0}
			<section class="section-block antipatterns-section">
				<h2>{ui.antiPatternsHeading}</h2>
				<div class="antipatterns-grid">
					{#each item.antiPatterns as ap (ap.mistake)}
						<div class="antipattern-card">
							<div class="ap-header">
								<span class="ap-badge">{ui.antiPatternMistakeLabel}</span>
								<h3 class="ap-mistake-title">{ap.mistake}</h3>
							</div>
							<div class="ap-body">
								<div class="ap-row ap-why">
									<span class="ap-label">{ui.antiPatternWhyBadLabel}:</span>
									<p>{ap.whyBad}</p>
								</div>
								<div class="ap-row ap-better">
									<span class="ap-label">{ui.antiPatternBetterWayLabel}:</span>
									<p>{ap.betterAlternative}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</section>
		{/if}

		<!-- Follow-up Section (if present) -->
		{#if item.followUpHtml}
			<section class="section-block followup-section">
				<h2>{ui.followUpHeading}</h2>
				<div class="prose followup-box">
					{@html item.followUpHtml}
				</div>
			</section>
		{/if}

		<!-- Tips for Managers -->
		{#if item.tips && item.tips.length > 0}
			<section class="section-block tips-section">
				<h2>{ui.tipsHeading}</h2>
				<ul class="tips-list">
					{#each item.tips as tip (tip)}
						<li>{tip}</li>
					{/each}
				</ul>
			</section>
		{/if}

		<!-- Core Principle / Takeaway -->
		{#if item.keyTakeaway}
			<div class="takeaway-callout">
				<h4>{ui.takeawayHeading}</h4>
				<p>{item.keyTakeaway}</p>
			</div>
		{/if}

		<!-- encrypted1on1 Product Banner -->
		<aside class="playbook-cta-banner">
			<div class="banner-content">
				<h3>{ui.tryDemoBannerTitle}</h3>
				<p>{ui.tryDemoBannerBody}</p>
			</div>
			<a
				class="btn btn-primary"
				href={appDemoUrl(locale)}
				target="_blank"
				rel="noopener noreferrer"
			>
				{ui.tryDemoBannerCta}
			</a>
		</aside>

		<!-- Other Recommended Templates -->
		{#if otherItems.length > 0}
			<section class="more-templates">
				<h3>{ui.exploreMoreHeading}</h3>
				<div class="more-grid">
					{#each otherItems as other (other.slug)}
						<a class="more-card" href={localizeHref(`/playbook/${other.slug}/`)}>
							<span class="more-category text-muted">{other.cadence}</span>
							<span class="more-title">{other.title}</span>
						</a>
					{/each}
				</div>
			</section>
		{/if}

		<!-- Bottom Back Link -->
		<div class="back-link-wrap">
			<a class="btn btn-secondary" href={localizeHref('/playbook/')}>
				← {ui.backToPlaybook}
			</a>
		</div>
	</article>
{/if}

<style>
	.playbook-detail-page {
		max-width: 820px;
		margin: 0 auto;
		padding: var(--space-6) var(--space-4) var(--space-8);
	}

	.breadcrumbs {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 13px;
		margin-bottom: var(--space-6);
		color: var(--color-accent-ink);
	}

	.breadcrumbs a {
		color: inherit;
		text-decoration: none;
	}

	.breadcrumbs a:hover {
		text-decoration: underline;
	}

	.separator {
		color: var(--color-divider);
	}

	.current-category {
		color: color-mix(in srgb, var(--color-text) 70%, transparent);
	}

	.detail-cover-wrap {
		width: 100%;
		border-radius: 16px;
		overflow: hidden;
		border: 1px solid var(--color-divider);
		margin-bottom: var(--space-6);
		box-shadow: var(--shadow-sm);
		background: var(--color-surface);
	}

	.detail-cover-img {
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 9;
		object-fit: cover;
		display: block;
	}

	.detail-header {
		margin-bottom: var(--space-8);
	}

	.category-badge-wrap {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: var(--space-2);
	}

	.category-badge {
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-weight: 700;
		padding: 4px 10px;
		border-radius: 999px;
		background: color-mix(in srgb, var(--color-accent) 15%, transparent);
		color: var(--color-accent-ink);
	}

	.read-time {
		font-size: 12px;
	}

	.detail-header h1 {
		font-size: clamp(28px, 4vw, 38px);
		line-height: 1.2;
		margin-bottom: var(--space-3);
	}

	.detail-subtitle {
		font-size: 17px;
		line-height: 1.55;
		color: color-mix(in srgb, var(--color-text) 80%, transparent);
		margin-bottom: var(--space-6);
	}

	.meta-strip {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-4);
		padding: var(--space-4) var(--space-6);
		background: var(--color-surface);
		border: 1px solid var(--color-divider);
		border-radius: var(--radius-md);
	}

	.meta-box {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.meta-box-label {
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: color-mix(in srgb, var(--color-text) 60%, transparent);
		font-weight: 600;
	}

	.meta-box-value {
		font-size: 13px;
		font-weight: 600;
	}

	.action-bar {
		display: flex;
		justify-content: flex-end;
		margin-bottom: var(--space-4);
	}

	.copy-btn {
		font-size: 13px;
		padding: 7px 16px;
	}

	.copy-icon {
		margin-right: 4px;
	}

	.section-block {
		margin-bottom: var(--space-8);
	}

	.section-block h2 {
		font-size: 20px;
		margin-bottom: var(--space-4);
	}

	.prose {
		font-size: 15px;
		line-height: 1.65;
		color: color-mix(in srgb, var(--color-text) 90%, transparent);
	}

	:global(.prose p) {
		margin-bottom: var(--space-3);
	}

	:global(.prose em) {
		font-style: italic;
	}

	.prep-box,
	.followup-box {
		background: var(--color-surface);
		border: 1px solid var(--color-divider);
		border-radius: var(--radius-md);
		padding: var(--space-6);
	}

	:global(.prep-box .invite-box) {
		background: color-mix(in srgb, var(--color-accent) 6%, var(--color-surface));
		border: 1px solid color-mix(in srgb, var(--color-accent) 25%, var(--color-divider));
		border-left: 4px solid var(--color-accent);
		border-radius: var(--radius-sm);
		padding: var(--space-4) var(--space-5);
		margin: var(--space-4) 0;
	}

	:global(.prep-box .invite-badge) {
		display: inline-block;
		font-size: 11px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--color-accent-ink);
		margin-bottom: var(--space-2);
	}

	:global(.prep-box .invite-text) {
		font-size: 14.5px;
		line-height: 1.6;
		font-style: italic;
		color: var(--color-text);
		margin: 0;
	}

	:global(.prep-box ul),
	:global(.followup-box ul) {
		margin: var(--space-3) 0 0;
		padding-left: var(--space-5);
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.antipatterns-grid {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}

	.antipattern-card {
		background: var(--color-surface);
		border: 1px solid var(--color-divider);
		border-radius: var(--radius-md);
		padding: var(--space-5) var(--space-6);
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.ap-header {
		display: flex;
		align-items: baseline;
		gap: var(--space-3);
		flex-wrap: wrap;
	}

	.ap-badge {
		font-size: 11px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding: 3px 8px;
		border-radius: 4px;
		background: color-mix(in srgb, #e05252 14%, transparent);
		color: #e05252;
		flex-shrink: 0;
	}

	.ap-mistake-title {
		font-size: 16px;
		font-weight: 700;
		margin: 0;
		color: var(--color-text);
		line-height: 1.4;
	}

	.ap-body {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.ap-row {
		display: flex;
		flex-direction: column;
		gap: 3px;
	}

	.ap-label {
		font-size: 11px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.ap-why .ap-label {
		color: color-mix(in srgb, var(--color-text) 60%, transparent);
	}

	.ap-why p {
		font-size: 14px;
		line-height: 1.55;
		color: color-mix(in srgb, var(--color-text) 85%, transparent);
		margin: 0;
	}

	.ap-better {
		background: color-mix(in srgb, var(--color-accent) 6%, transparent);
		border-left: 3px solid var(--color-accent);
		border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
		padding: var(--space-3) var(--space-4);
	}

	.ap-better .ap-label {
		color: var(--color-accent-ink);
	}

	.ap-better p {
		font-size: 14px;
		line-height: 1.55;
		color: var(--color-text);
		margin: 0;
	}

	.agenda-items {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}

	.agenda-card {
		background: var(--color-surface);
		border: 1px solid var(--color-divider);
		border-radius: var(--radius-md);
		padding: var(--space-6);
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}

	.agenda-card-top {
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
	}

	.section-num {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 28px;
		height: 28px;
		border-radius: 999px;
		background: color-mix(in srgb, var(--color-accent) 18%, transparent);
		color: var(--color-accent-ink);
		font-size: 13px;
		font-weight: 700;
		flex-shrink: 0;
		margin-top: 1px;
	}

	.section-titles {
		flex: 1;
	}

	.section-titles h3 {
		font-size: 18px;
		margin: 0 0 var(--space-1);
	}

	.section-desc {
		font-size: 14px;
		line-height: 1.5;
		color: color-mix(in srgb, var(--color-text) 70%, transparent);
		margin: 0;
	}

	.section-time {
		font-size: 12px;
		font-weight: 600;
		background: color-mix(in srgb, var(--color-text) 8%, transparent);
		padding: 4px 10px;
		border-radius: 999px;
		white-space: nowrap;
	}

	.questions-list {
		margin: 0;
		padding: var(--space-4) 0 0 var(--space-6);
		border-top: 1px solid var(--color-divider);
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.question-item {
		font-size: 14.5px;
		line-height: 1.55;
	}

	.tips-list {
		margin: 0;
		padding-left: var(--space-6);
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.tips-list li {
		font-size: 14.5px;
		line-height: 1.55;
	}

	.takeaway-callout {
		border-left: 4px solid var(--color-accent);
		background: color-mix(in srgb, var(--color-accent) 8%, var(--color-surface));
		padding: var(--space-4) var(--space-6);
		border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
		margin-bottom: var(--space-8);
	}

	.takeaway-callout h4 {
		margin: 0 0 6px;
		color: var(--color-accent-ink);
		font-size: 12px;
		letter-spacing: 0.08em;
	}

	.takeaway-callout p {
		margin: 0;
		font-size: 15px;
		font-weight: 500;
		font-style: italic;
	}

	.playbook-cta-banner {
		background: color-mix(in srgb, var(--color-accent) 8%, var(--color-surface));
		border: 1px solid color-mix(in srgb, var(--color-accent) 30%, var(--color-divider));
		border-radius: var(--radius-md);
		padding: var(--space-6) var(--space-8);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-6);
		margin-bottom: var(--space-8);
	}

	.playbook-cta-banner h3 {
		font-size: 20px;
		margin: 0 0 var(--space-1);
	}

	.playbook-cta-banner p {
		margin: 0;
		font-size: 14px;
		color: color-mix(in srgb, var(--color-text) 75%, transparent);
	}

	.more-templates {
		margin-bottom: var(--space-8);
		padding-top: var(--space-4);
		border-top: 1px solid var(--color-divider);
	}

	.more-templates h3 {
		font-size: 16px;
		margin-bottom: var(--space-3);
	}

	.more-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: var(--space-3);
	}

	.more-card {
		background: var(--color-surface);
		border: 1px solid var(--color-divider);
		border-radius: var(--radius-sm);
		padding: var(--space-3) var(--space-4);
		text-decoration: none;
		color: inherit;
		display: flex;
		flex-direction: column;
		gap: 4px;
		transition: border-color 0.15s ease;
	}

	.more-card:hover {
		border-color: var(--color-accent);
	}

	.more-category {
		font-size: 11px;
	}

	.more-title {
		font-size: 13px;
		font-weight: 600;
		line-height: 1.35;
	}

	.back-link-wrap {
		margin-top: var(--space-6);
	}

	@media (max-width: 680px) {
		.meta-strip {
			grid-template-columns: 1fr;
			gap: var(--space-2);
			padding: var(--space-4);
		}

		.agenda-card {
			padding: var(--space-4);
		}

		.playbook-cta-banner {
			flex-direction: column;
			text-align: center;
			padding: var(--space-6) var(--space-4);
		}
	}
</style>
