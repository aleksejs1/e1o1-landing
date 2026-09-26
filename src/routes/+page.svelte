<script lang="ts">
	import { getContent } from '$lib/content';
	import { getPlaybookItems, getCategories } from '$lib/content/playbook';
	import {
		appDemoUrl,
		appLoginUrl,
		CAL_COM_URL,
		CLOUD_SIGNUP_URL,
		GITHUB_URL,
		DOCS_URL
	} from '$lib/links';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';

	const content = $derived(getContent());
	const locale = $derived(getLocale());
	const allPlaybooks = $derived(getPlaybookItems(locale));
	const categories = $derived(getCategories(locale));
	const featuredSlugs = ['manager-playbook', 'employee-playbook', 'handling-difficult-situations'];
	const featuredPlaybooks = $derived(
		featuredSlugs
			.map((slug) => allPlaybooks.find((p) => p.slug === slug))
			.filter((p): p is NonNullable<typeof p> => Boolean(p))
	);
</script>

<svelte:head>
	<title>{content.meta.title}</title>
	<meta name="description" content={content.meta.description} />
	<meta property="og:title" content={content.meta.title} />
	<meta property="og:description" content={content.meta.description} />
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'encrypted1on1',
		applicationCategory: 'BusinessApplication',
		operatingSystem: 'Web',
		description: content.meta.description,
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD'
		},
		author: {
			'@type': 'Organization',
			name: 'encrypted1on1',
			url: 'https://private1on1.eu'
		}
	})}</script>`}
</svelte:head>

<section class="hero">
	<div class="hero-grid">
		<div class="hero-content">
			<h1>{content.hero.headline}</h1>
			<p class="hero-subhead">{content.hero.subhead}</p>

			<div class="hero-ctas">
				<a
					class="btn btn-primary"
					href={appDemoUrl(getLocale())}
					target="_blank"
					rel="noopener noreferrer"
				>
					{content.hero.ctaTryDemo}
				</a>
				<a
					class="btn btn-secondary"
					href={CLOUD_SIGNUP_URL}
					target="_blank"
					rel="noopener noreferrer"
				>
					{content.hero.ctaGetStarted}
				</a>
				<a class="btn btn-secondary" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
					{content.hero.ctaGithub}
				</a>
			</div>

			<div class="hero-sublinks">
				<a
					class="hero-login-link"
					href={appLoginUrl(getLocale())}
					target="_blank"
					rel="noopener noreferrer"
				>
					{m.hero_already_have_account()} <strong>{m.header_login()} →</strong>
				</a>
				<span class="hero-sublinks-sep" aria-hidden="true">•</span>
				<a class="hero-docs-link" href={DOCS_URL} target="_blank" rel="noopener noreferrer">
					{content.hero.ctaDocs}
				</a>
			</div>

			<ul class="trust-badges">
				{#each content.hero.trustBadges as badge (badge)}
					<li class="tag tag-outline">{badge}</li>
				{/each}
			</ul>
		</div>

		<div class="hero-visual">
			<img
				class="hero-screenshot hero-screenshot-light"
				src="/screenshots/anketa-preview-{getLocale()}-light.png"
				alt={content.hero.screenshotAlt}
				width="688"
				height="560"
			/>
			<img
				class="hero-screenshot hero-screenshot-dark"
				src="/screenshots/anketa-preview-{getLocale()}-dark.png"
				alt=""
				aria-hidden="true"
				width="688"
				height="560"
			/>
		</div>
	</div>
</section>

<section class="section highlights">
	<div class="section-inner">
		<div class="highlight-grid">
			{#each content.hero.highlights as highlight (highlight.title)}
				<div class="card elev-sm highlight-card">
					<span class="highlight-icon" aria-hidden="true">{highlight.icon}</span>
					<h3 class="card-title">{highlight.title}</h3>
					<p class="card-body">{highlight.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="section" id="origin">
	<div class="section-inner">
		<h2>{content.origin.heading}</h2>
		{#each content.origin.paragraphsHtml.slice(0, 3) as html, i (i)}
			<p>{@html html}</p>
		{/each}

		<figure class="editorial-figure">
			<img
				class="editorial-img"
				src="/images/landing/origin-trust.jpg"
				alt={content.origin.illustrationAlt ?? ''}
				width="1376"
				height="768"
				loading="lazy"
			/>
		</figure>

		{#each content.origin.paragraphsHtml.slice(3) as html, i (i + 3)}
			<p>{@html html}</p>
		{/each}
	</div>
</section>

<section class="section section-alt">
	<div class="section-inner">
		<h2>{content.methodology.heading}</h2>
		<p>{content.methodology.intro}</p>

		<ul class="research-list">
			{#each content.methodology.points as point, i (i)}
				<li>{@html point.html}</li>
			{/each}
		</ul>

		<figure class="editorial-figure">
			<img
				class="editorial-img"
				src="/images/landing/methodology-leverage.jpg"
				alt={content.methodology.illustrationAlt ?? ''}
				width="1376"
				height="768"
				loading="lazy"
			/>
		</figure>

		<p>{@html content.methodology.closingHtml}</p>
	</div>
</section>

<section class="section playbooks-showcase" id="playbooks">
	<div class="section-inner playbooks-inner">
		<div class="section-header text-center">
			<h2>{content.playbooks.heading}</h2>
			<p class="section-subhead">{content.playbooks.intro}</p>
		</div>

		<div class="featured-playbooks-grid">
			{#each featuredPlaybooks as item (item.slug)}
				{@const categoryMeta = categories.find((c) => c.id === item.category)}
				<article class="featured-playbook-card card elev-sm">
					<a
						class="featured-card-cover-link"
						href={localizeHref(`/playbook/${item.slug}/`)}
						tabindex="-1"
						aria-hidden="true"
					>
						<img
							class="featured-card-cover-img"
							src="/images/playbook/{item.slug}.jpg"
							alt=""
							width="720"
							height="405"
							loading="lazy"
						/>
					</a>
					<div class="featured-card-content">
						<div class="featured-card-meta">
							{#if categoryMeta}
								<span class="tag tag-outline">{categoryMeta.label}</span>
							{/if}
							<span class="read-time text-muted">{item.readTime}</span>
						</div>
						<h3 class="featured-card-title">
							<a href={localizeHref(`/playbook/${item.slug}/`)}>
								{item.title}
							</a>
						</h3>
						<p class="featured-card-subtitle">{item.subtitle}</p>
						<div class="featured-card-footer">
							<a class="card-action-link" href={localizeHref(`/playbook/${item.slug}/`)}>
								{content.playbooks.readPlaybook} →
							</a>
						</div>
					</div>
				</article>
			{/each}
		</div>

		<div class="question-bank-banner card elev-sm">
			<div class="question-bank-banner-content">
				<div class="question-bank-badge">
					<span class="badge-icon" aria-hidden="true">💡</span>
					<span class="tag tag-outline">Question Bank</span>
				</div>
				<h3>{content.playbooks.questionBankTitle}</h3>
				<p>{content.playbooks.questionBankDescription}</p>
			</div>
			<div class="question-bank-banner-actions">
				<a class="btn btn-primary" href={localizeHref('/playbook/questions/')}>
					{content.playbooks.openQuestionBank} →
				</a>
				<a class="btn btn-secondary" href={localizeHref('/playbook/')}>
					{content.playbooks.viewAllPlaybooks} →
				</a>
			</div>
		</div>
	</div>
</section>

<section class="section section-alt">
	<div class="section-inner">
		<h2>{content.comparison.heading}</h2>
		<p>{content.comparison.intro}</p>

		<div class="point-grid">
			{#each content.comparison.points as point, i (i)}
				<div class="card elev-sm">
					<h3 class="card-title">{point.title}</h3>
					<p class="card-body">{point.body}</p>
				</div>
			{/each}
		</div>

		<p>{@html content.comparison.closingHtml}</p>
	</div>
</section>

<section class="section" id="privacy">
	<div class="section-inner">
		<h2>{content.privacy.heading}</h2>
		<p>{content.privacy.intro}</p>

		<div class="point-grid point-grid-narrow">
			{#each content.privacy.points as point, i (i)}
				<div class="card elev-sm">
					<h3 class="card-title">{point.title}</h3>
					<p class="card-body">{point.body}</p>
				</div>
			{/each}
		</div>

		<p>{@html content.privacy.resolutionHtml}</p>

		<div class="card faq-card elev-sm">
			<h4>{content.privacy.faq.question}</h4>
			<p>{@html content.privacy.faq.answer1Html}</p>
			<p>{@html content.privacy.faq.answer2Html}</p>
		</div>
	</div>
</section>

<section class="section section-alt" id="pricing">
	<div class="section-inner">
		<h2>{content.pricing.heading}</h2>

		<div class="why-affordable">
			<h3>{content.pricing.whyAffordableHeading}</h3>
			{@html content.pricing.whyAffordableBodyHtml}
		</div>

		<blockquote class="pricing-quote">{@html content.pricing.quoteHtml}</blockquote>

		<div class="pricing-tables">
			<div>
				<h3>{content.pricing.selfHosted.heading}</h3>
				<div class="table-scroll">
					<table class="table">
						<thead>
							<tr>
								<th></th>
								{#each content.pricing.selfHosted.table.columns as col (col)}
									<th>{col}</th>
								{/each}
							</tr>
						</thead>
						<tbody>
							{#each content.pricing.selfHosted.table.rows as row, rowIndex (row.label)}
								<tr>
									<td>{row.label}</td>
									{#each row.values as value, i (i)}
										<td>
											{#if rowIndex === 0 && value === content.pricing.contactUs}
												<a href={CAL_COM_URL} target="_blank" rel="noopener noreferrer">{value}</a>
											{:else}
												{value}
											{/if}
										</td>
									{/each}
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
				<p class="pricing-note text-muted">{content.pricing.selfHosted.note}</p>
			</div>

			<div>
				<h3>{content.pricing.cloud.heading}</h3>
				<p>{content.pricing.cloud.intro}</p>
				<div class="table-scroll">
					<table class="table">
						<thead>
							<tr>
								<th></th>
								{#each content.pricing.cloud.table.columns as col (col)}
									<th>{col}</th>
								{/each}
							</tr>
						</thead>
						<tbody>
							{#each content.pricing.cloud.table.rows as row, rowIndex (row.label)}
								<tr>
									<td>{row.label}</td>
									{#each row.values as value, i (i)}
										<td>
											{#if rowIndex === 0 && value === content.pricing.contactSales}
												<a href={CAL_COM_URL} target="_blank" rel="noopener noreferrer">{value}</a>
											{:else}
												{value}
											{/if}
										</td>
									{/each}
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
				<p class="pricing-note text-muted">{content.pricing.cloud.note}</p>
			</div>
		</div>

		<p class="pricing-footnote text-muted">{@html content.pricing.footnoteHtml}</p>
	</div>
</section>

<style>
	.hero {
		max-width: 1080px;
		margin: 0 auto;
		padding: var(--space-8) var(--space-4) var(--space-6);
	}

	@media (max-width: 480px) {
		.hero {
			padding: var(--space-6) var(--space-3) var(--space-4);
		}
	}

	.hero-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--space-8);
		align-items: center;
	}

	.hero-content {
		text-align: center;
	}

	.hero h1 {
		font-size: clamp(30px, 6vw, 48px);
		line-height: 1.15;
		overflow-wrap: break-word;
		word-break: break-word;
	}

	.hero-subhead {
		font-size: 17px;
		max-width: 640px;
		margin: 0 auto var(--space-6);
		opacity: 0.85;
		overflow-wrap: break-word;
	}

	.hero-ctas {
		display: flex;
		justify-content: center;
		gap: var(--space-3);
		flex-wrap: wrap;
		margin-bottom: var(--space-3);
	}

	.hero-ctas .btn {
		padding: var(--space-3) var(--space-6);
		font-size: 15px;
	}

	.hero-sublinks {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-3);
		flex-wrap: wrap;
		font-size: 14px;
		margin-bottom: var(--space-6);
	}

	.hero-login-link {
		color: var(--color-text);
		text-decoration: none;
		opacity: 0.85;
		transition: opacity 0.15s ease;
	}

	.hero-login-link strong {
		color: var(--color-accent-ink);
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	.hero-login-link:hover {
		opacity: 1;
	}

	.hero-sublinks-sep {
		opacity: 0.35;
	}

	.hero-docs-link {
		display: inline-block;
		font-size: 14px;
		color: color-mix(in srgb, var(--color-text) 75%, transparent);
		text-decoration: none;
		transition: color 0.15s ease;
	}

	.hero-docs-link:hover {
		color: var(--color-accent-ink);
	}

	.trust-badges {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: var(--space-2);
		list-style: none;
		margin: 0;
		padding: 0;
	}

	/* Real product screenshot — see hero.screenshotAlt / static/screenshots/,
	   one pair of light/dark images per supported locale (anketa-preview-
	   {locale}-{light,dark}.png — the src itself picks the right locale via
	   getLocale(), no CSS needed there, since each locale is its own fully
	   prerendered static page, not a runtime toggle). Two <img>s per locale,
	   one per theme, toggled the same way tokens.css itself decides light vs
	   dark: an explicit [data-theme] override wins, else prefers-color-scheme,
	   else light. */
	.hero-visual {
		display: flex;
		justify-content: center;
	}

	.hero-screenshot {
		width: 100%;
		max-width: 420px;
		height: auto;
		display: block;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-lg);
	}

	.hero-screenshot-dark {
		display: none;
	}

	:global(:root[data-theme='dark']) .hero-screenshot-light {
		display: none;
	}
	:global(:root[data-theme='dark']) .hero-screenshot-dark {
		display: block;
	}

	@media (prefers-color-scheme: dark) {
		:global(:root:not([data-theme='light']):not([data-theme='dark'])) .hero-screenshot-light {
			display: none;
		}
		:global(:root:not([data-theme='light']):not([data-theme='dark'])) .hero-screenshot-dark {
			display: block;
		}
	}

	@media (min-width: 860px) {
		.hero-grid {
			grid-template-columns: 1.05fr 1fr;
		}

		.hero-content {
			text-align: left;
		}

		.hero-subhead {
			margin: 0 0 var(--space-6);
		}

		.hero-ctas {
			justify-content: flex-start;
		}

		.hero-sublinks {
			justify-content: flex-start;
		}

		.trust-badges {
			justify-content: flex-start;
		}

		.hero-visual {
			justify-content: flex-end;
		}

		.hero-screenshot {
			max-width: 100%;
		}
	}

	.highlights {
		padding-top: 0;
	}

	.highlights .section-inner {
		max-width: 1080px;
	}

	/* Fixed 2 or 4 columns, not auto-fit — with exactly 4 cards, auto-fit at
	   this container's width produced an unbalanced 3-then-1 layout. */
	.highlight-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-3);
	}

	@media (max-width: 480px) {
		.highlight-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (min-width: 720px) {
		.highlight-grid {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.highlight-card {
		text-align: center;
		align-items: center;
	}

	.highlight-icon {
		font-size: 28px;
		line-height: 1;
	}

	.section {
		padding: var(--space-8) var(--space-4);
	}

	.section-alt {
		background: var(--color-surface);
	}

	.section-inner {
		max-width: 820px;
		margin: 0 auto;
	}

	.editorial-figure {
		margin: var(--space-6) 0;
		padding: 0;
		border-radius: var(--radius-md);
		overflow: hidden;
		border: 1px solid var(--color-divider);
		box-shadow: var(--shadow-sm);
		background: var(--color-surface);
	}

	.editorial-img {
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 9;
		object-fit: cover;
		display: block;
	}

	.research-list {
		list-style: none;
		margin: 0 0 var(--space-4);
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}

	.research-list li {
		padding-left: var(--space-4);
		border-left: 3px solid var(--color-accent);
	}

	.point-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: var(--space-3);
		margin: var(--space-4) 0;
	}

	.point-grid-narrow {
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	}

	.faq-card {
		margin-top: var(--space-6);
	}

	.faq-card h4 {
		font-size: 16px;
		text-transform: none;
		letter-spacing: 0;
		color: var(--color-text);
	}

	.why-affordable {
		margin-bottom: var(--space-4);
	}

	.pricing-quote {
		margin: 0 0 var(--space-6);
		padding: var(--space-4) var(--space-6);
		border-left: 3px solid var(--color-accent);
		font-family: var(--font-heading);
		font-weight: var(--font-heading-weight);
		font-size: 18px;
		line-height: 1.4;
	}

	.pricing-tables {
		display: grid;
		gap: var(--space-8);
		margin-bottom: var(--space-6);
	}

	.pricing-tables > div {
		min-width: 0;
		max-width: 100%;
	}

	.table-scroll {
		overflow-x: auto;
		max-width: 100%;
		-webkit-overflow-scrolling: touch;
	}

	.pricing-note {
		font-size: 13px;
		margin-top: var(--space-2);
	}

	.pricing-footnote {
		font-size: 12px;
	}

	/* Playbooks showcase section */
	.playbooks-showcase {
		padding: var(--space-8) var(--space-4);
	}

	.playbooks-inner {
		max-width: 1080px;
		margin: 0 auto;
	}

	.section-header {
		margin-bottom: var(--space-6);
	}

	.section-header.text-center {
		text-align: center;
	}

	.section-subhead {
		font-size: 16px;
		max-width: 720px;
		margin: 0 auto;
		color: color-mix(in srgb, var(--color-text) 75%, transparent);
	}

	.featured-playbooks-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--space-4);
		margin-bottom: var(--space-6);
	}

	@media (min-width: 768px) {
		.featured-playbooks-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.featured-playbook-card {
		display: flex;
		flex-direction: column;
		padding: 0;
		overflow: hidden;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
		background: var(--color-surface);
		border-radius: var(--radius-md);
	}

	.featured-playbook-card:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
	}

	.featured-card-cover-link {
		display: block;
		overflow: hidden;
		aspect-ratio: 16 / 9;
		background: var(--color-bg);
		border-bottom: 1px solid var(--color-divider);
	}

	.featured-card-cover-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.3s ease;
	}

	.featured-playbook-card:hover .featured-card-cover-img {
		transform: scale(1.03);
	}

	.featured-card-content {
		padding: var(--space-4);
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	.featured-card-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-2);
		margin-bottom: var(--space-2);
	}

	.read-time {
		font-size: 12px;
	}

	.featured-card-title {
		font-size: 17px;
		line-height: 1.3;
		margin: 0 0 var(--space-2);
	}

	.featured-card-title a {
		color: var(--color-text);
		text-decoration: none;
		transition: color 0.15s ease;
	}

	.featured-card-title a:hover {
		color: var(--color-accent-ink);
	}

	.featured-card-subtitle {
		font-size: 13.5px;
		line-height: 1.45;
		color: color-mix(in srgb, var(--color-text) 70%, transparent);
		margin: 0 0 var(--space-4);
		flex-grow: 1;
	}

	.featured-card-footer {
		margin-top: auto;
		padding-top: var(--space-2);
	}

	.card-action-link {
		font-size: 13.5px;
		font-weight: 600;
		color: var(--color-accent-ink);
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 4px;
		transition: transform 0.15s ease;
	}

	.card-action-link:hover {
		text-decoration: underline;
		transform: translateX(2px);
	}

	.question-bank-banner {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		padding: var(--space-5);
		background: color-mix(in srgb, var(--color-accent) 6%, var(--color-surface));
		border: 1px solid var(--color-divider);
		border-radius: var(--radius-md);
		align-items: stretch;
	}

	@media (min-width: 860px) {
		.question-bank-banner {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}

		.question-bank-banner-content {
			max-width: 580px;
		}
	}

	.question-bank-badge {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		margin-bottom: var(--space-2);
	}

	.question-bank-banner h3 {
		font-size: 18px;
		margin: 0 0 var(--space-1);
	}

	.question-bank-banner p {
		margin: 0;
		font-size: 14px;
		color: color-mix(in srgb, var(--color-text) 75%, transparent);
	}

	.question-bank-banner-actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		flex-shrink: 0;
	}
</style>
