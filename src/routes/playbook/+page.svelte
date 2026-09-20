<script lang="ts">
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { getPlaybookItems, getCategories, getPlaybookUi } from '$lib/content/playbook';
	import { appDemoUrl } from '$lib/links';

	const locale = $derived(getLocale());
	const items = $derived(getPlaybookItems(locale));
	const categories = $derived(getCategories(locale));
	const ui = $derived(getPlaybookUi(locale));

	let selectedCategory = $state<string>('all');

	const filteredItems = $derived(
		selectedCategory === 'all' ? items : items.filter((item) => item.category === selectedCategory)
	);

	const collectionSchema = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'CollectionPage',
			name: ui.playbookTitle,
			description: ui.playbookSubtitle,
			mainEntity: {
				'@type': 'ItemList',
				itemListElement: items.map((item, idx) => ({
					'@type': 'ListItem',
					position: idx + 1,
					name: item.title,
					description: item.subtitle
				}))
			}
		})
	);
</script>

<svelte:head>
	<title>{ui.playbookTitle} — encrypted1on1</title>
	<meta name="description" content={ui.playbookSubtitle} />
	<meta property="og:title" content="{ui.playbookTitle} — encrypted1on1" />
	<meta property="og:description" content={ui.playbookSubtitle} />
	{@html `<script type="application/ld+json">${collectionSchema}</script>`}
</svelte:head>

<div class="playbook-page">
	<!-- Hub Mode Switcher Tabs -->
	<nav class="hub-tabs" aria-label="Playbook sections">
		<a class="hub-tab active" href={localizeHref('/playbook/')}>
			{ui.tabsTemplates}
		</a>
		<a class="hub-tab" href={localizeHref('/playbook/questions/')}>
			{ui.tabsQuestions}
		</a>
		<a class="hub-tab" href={localizeHref('/playbook/books/')}>
			{ui.tabsBooks}
		</a>
	</nav>

	<header class="playbook-hero">
		<span class="eyebrow">Playbook</span>
		<h1>{ui.playbookTitle}</h1>
		<p class="hero-subtitle">{ui.playbookSubtitle}</p>

		<!-- Category Filter Pills -->
		<div class="filter-pills" role="tablist" aria-label="Template categories">
			<button
				type="button"
				class="filter-pill"
				class:active={selectedCategory === 'all'}
				onclick={() => (selectedCategory = 'all')}
			>
				{ui.allCategories}
			</button>
			{#each categories as cat (cat.id)}
				<button
					type="button"
					class="filter-pill"
					class:active={selectedCategory === cat.id}
					onclick={() => (selectedCategory = cat.id)}
				>
					{cat.label}
				</button>
			{/each}
		</div>
	</header>

	<!-- Template Cards Grid -->
	<section class="templates-grid" aria-label="Available meeting templates">
		{#each filteredItems as item (item.slug)}
			{@const categoryMeta = categories.find((c) => c.id === item.category)}
			<article class="template-card">
				<a
					class="card-cover-link"
					href={localizeHref(`/playbook/${item.slug}/`)}
					tabindex="-1"
					aria-hidden="true"
				>
					<img
						class="card-cover-img"
						src="/images/playbook/{item.slug}.jpg"
						alt=""
						width="600"
						height="338"
						loading="lazy"
					/>
				</a>

				<div class="card-content-wrap">
					<div class="card-header">
						<span class="category-badge">{categoryMeta?.label || item.category}</span>
						<span class="read-time text-muted">{item.readTime}</span>
					</div>

					<div class="card-main">
						<h2 class="card-title">
							<a href={localizeHref(`/playbook/${item.slug}/`)}>{item.title}</a>
						</h2>
						<p class="card-subtitle">{item.subtitle}</p>
					</div>

					<div class="card-meta">
						<div class="meta-item">
							<span class="meta-label text-muted">{ui.cadenceLabel}</span>
							<span class="meta-value">{item.cadence}</span>
						</div>
						<div class="meta-item">
							<span class="meta-label text-muted">{ui.durationLabel}</span>
							<span class="meta-value">{item.duration}</span>
						</div>
					</div>

					<div class="card-footer">
						<a class="btn btn-secondary card-cta" href={localizeHref(`/playbook/${item.slug}/`)}>
							{ui.viewAgendaBtn}
						</a>
					</div>
				</div>
			</article>
		{/each}
	</section>

	<!-- Call to Action Banner -->
	<aside class="playbook-cta-banner">
		<div class="banner-content">
			<h3>{ui.tryDemoBannerTitle}</h3>
			<p>{ui.tryDemoBannerBody}</p>
		</div>
		<a class="btn btn-primary" href={appDemoUrl(locale)} target="_blank" rel="noopener noreferrer">
			{ui.tryDemoBannerCta}
		</a>
	</aside>
</div>

<style>
	.playbook-page {
		max-width: 1080px;
		margin: 0 auto;
		padding: var(--space-8) var(--space-4);
	}

	.hub-tabs {
		display: flex;
		justify-content: center;
		gap: 6px;
		margin-bottom: var(--space-8);
		background: var(--color-surface);
		padding: 4px;
		border-radius: 999px;
		border: 1px solid var(--color-divider);
		width: fit-content;
		margin-left: auto;
		margin-right: auto;
	}

	.hub-tab {
		font-family: var(--font-body);
		font-size: 14px;
		font-weight: 600;
		padding: 6px 18px;
		border-radius: 999px;
		text-decoration: none;
		color: color-mix(in srgb, var(--color-text) 75%, transparent);
		transition: all 0.15s ease;
	}

	.hub-tab:hover {
		color: var(--color-text);
	}

	.hub-tab.active {
		background: var(--color-bg);
		color: var(--color-text);
		box-shadow: var(--shadow-sm);
	}

	.playbook-hero {
		text-align: center;
		max-width: 760px;
		margin: 0 auto var(--space-8);
	}

	.eyebrow {
		display: inline-block;
		text-transform: uppercase;
		font-size: 12px;
		letter-spacing: 0.12em;
		font-weight: 700;
		color: var(--color-accent-ink);
		margin-bottom: var(--space-2);
	}

	.playbook-hero h1 {
		font-size: clamp(32px, 5vw, 44px);
		line-height: 1.15;
		margin-bottom: var(--space-3);
	}

	.hero-subtitle {
		font-size: 18px;
		color: color-mix(in srgb, var(--color-text) 80%, transparent);
		line-height: 1.5;
		margin-bottom: var(--space-6);
	}

	.filter-pills {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 8px;
		margin-bottom: var(--space-4);
	}

	.filter-pill {
		cursor: pointer;
		font-family: var(--font-body);
		font-size: 14px;
		font-weight: 500;
		padding: 6px 14px;
		border-radius: 999px;
		border: 1px solid var(--color-divider);
		background: transparent;
		color: var(--color-text);
		transition: all 0.15s ease;
	}

	.filter-pill:hover {
		background: color-mix(in srgb, var(--color-text) 5%, transparent);
	}

	.filter-pill.active {
		background: var(--color-accent);
		color: var(--color-on-accent);
		border-color: var(--color-accent);
	}

	.templates-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: var(--space-6);
		margin-bottom: var(--space-8);
	}

	.template-card {
		background: var(--color-surface);
		border: 1px solid var(--color-divider);
		border-radius: var(--radius-md);
		padding: 0;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		transition:
			transform 0.15s ease,
			box-shadow 0.15s ease;
	}

	.template-card:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-sm);
	}

	.card-cover-link {
		display: block;
		overflow: hidden;
		background: var(--color-bg);
		border-bottom: 1px solid var(--color-divider);
	}

	.card-cover-img {
		width: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
		display: block;
		transition: transform 0.25s ease;
	}

	.template-card:hover .card-cover-img {
		transform: scale(1.02);
	}

	.card-content-wrap {
		padding: var(--space-6);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: var(--space-4);
		flex: 1;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--space-2);
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

	.card-main {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		flex: 1;
	}

	.card-title {
		font-size: 20px;
		line-height: 1.3;
		margin: 0;
	}

	.card-title a {
		color: inherit;
		text-decoration: none;
	}

	.card-title a:hover {
		color: var(--color-accent-ink);
	}

	.card-subtitle {
		font-size: 14px;
		line-height: 1.55;
		color: color-mix(in srgb, var(--color-text) 75%, transparent);
		margin: 0;
	}

	.card-meta {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-3);
		padding: var(--space-3) 0;
		border-top: 1px solid var(--color-divider);
		border-bottom: 1px solid var(--color-divider);
	}

	.meta-item {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.meta-label {
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 600;
	}

	.meta-value {
		font-size: 13px;
		font-weight: 600;
		line-height: 1.35;
	}

	.card-footer {
		display: flex;
		margin-top: auto;
	}

	.card-cta {
		width: 100%;
		font-size: 14px;
		padding: 10px 16px;
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

	@media (max-width: 680px) {
		.templates-grid {
			grid-template-columns: 1fr;
		}

		.template-card {
			padding: var(--space-4);
		}

		.playbook-cta-banner {
			flex-direction: column;
			text-align: center;
			padding: var(--space-6) var(--space-4);
		}
	}
</style>
