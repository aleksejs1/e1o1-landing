<script lang="ts">
	import { getContent } from '$lib/content';
	import { appDemoUrl, CAL_COM_URL, CLOUD_SIGNUP_URL, GITHUB_URL, DOCS_URL } from '$lib/links';
	import { getLocale } from '$lib/paraglide/runtime';

	const content = $derived(getContent());
</script>

<svelte:head>
	<title>{content.meta.title}</title>
	<meta name="description" content={content.meta.description} />
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

			<a class="hero-docs-link" href={DOCS_URL} target="_blank" rel="noopener noreferrer">
				{content.hero.ctaDocs}
			</a>

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
		{#each content.origin.paragraphsHtml as html, i (i)}
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

		<p>{@html content.methodology.closingHtml}</p>
	</div>
</section>

<section class="section">
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

<section class="section section-alt" id="privacy">
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

<section class="section" id="pricing">
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
		font-size: 48px;
	}

	.hero-subhead {
		font-size: 17px;
		max-width: 640px;
		margin: 0 auto var(--space-6);
		opacity: 0.85;
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

	.hero-docs-link {
		display: inline-block;
		font-size: 14px;
		color: var(--color-accent-ink);
		margin-bottom: var(--space-6);
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

	.table-scroll {
		overflow-x: auto;
	}

	.pricing-note {
		font-size: 13px;
		margin-top: var(--space-2);
	}

	.pricing-footnote {
		font-size: 12px;
	}
</style>
