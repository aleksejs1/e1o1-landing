<script lang="ts">
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { getBooks, getPlaybookUi, type PlaybookBook } from '$lib/content/playbook';
	import { appDemoUrl } from '$lib/links';

	const locale = $derived(getLocale());
	const books = $derived<PlaybookBook[]>(getBooks(locale));
	const ui = $derived(getPlaybookUi(locale));

	const booksSchema = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'ItemList',
			name: ui.booksHeroTitle,
			description: ui.booksHeroSubtitle,
			itemListElement: books.map((b, index) => ({
				'@type': 'ListItem',
				position: index + 1,
				item: {
					'@type': 'Book',
					name: b.title,
					alternateName: b.originalTitle !== b.title ? b.originalTitle : undefined,
					image: `https://encrypted1on1.com${b.coverImage}`,
					author: {
						'@type': 'Person',
						name: b.author,
						jobTitle: b.authorRole
					},
					datePublished: String(b.year),
					description: b.coreThesis
				}
			}))
		})
	);
</script>

<svelte:head>
	<title>{ui.booksHeroTitle} — encrypted1on1</title>
	<meta name="description" content={ui.booksHeroSubtitle} />
	<meta property="og:title" content="{ui.booksHeroTitle} — encrypted1on1" />
	<meta property="og:description" content={ui.booksHeroSubtitle} />
	{@html `<script type="application/ld+json">${booksSchema}</script>`}
</svelte:head>

<div class="bookshelf-page">
	<!-- Hub Mode Switcher Tabs -->
	<nav class="hub-tabs" aria-label="Playbook sections">
		<a class="hub-tab" href={localizeHref('/playbook/')}>
			{ui.tabsTemplates}
		</a>
		<a class="hub-tab" href={localizeHref('/playbook/questions/')}>
			{ui.tabsQuestions}
		</a>
		<a class="hub-tab active" href={localizeHref('/playbook/books/')}>
			{ui.tabsBooks}
		</a>
	</nav>

	<header class="bookshelf-hero">
		<span class="eyebrow">Playbook</span>
		<h1>{ui.booksHeroTitle}</h1>
		<p class="hero-subtitle">{ui.booksHeroSubtitle}</p>
	</header>

	<!-- Books List -->
	<div class="books-container">
		{#each books as book (book.slug)}
			<article class="book-card" id={book.slug}>
				<div class="book-card-top">
					<div class="book-cover-wrap">
						<img
							src={book.coverImage}
							alt="{book.originalTitle} cover"
							class="book-cover-img"
							loading="lazy"
							width="140"
							height="210"
						/>
					</div>

					<header class="book-header">
						<div class="book-meta-top">
							<span class="book-badge">{book.badge}</span>
							<span class="book-year">{book.year}</span>
						</div>

						<h2 class="book-title">{book.title}</h2>
						{#if book.title !== book.originalTitle}
							<div class="book-original-title">({book.originalTitle})</div>
						{/if}

						<div class="book-author">
							<span class="author-name">{book.author}</span>
							<span class="author-divider">•</span>
							<span class="author-role">{book.authorRole}</span>
						</div>
					</header>
				</div>

				<!-- Core Thesis Callout -->
				<div class="core-thesis-box">
					<span class="thesis-label">{ui.coreThesisLabel}</span>
					<p class="thesis-content">“{book.coreThesis}”</p>
				</div>

				<!-- 1:1 Philosophy & Impact -->
				<section class="book-section">
					<h3 class="section-title">{ui.oneOnOnePhilosophyHeading}</h3>
					<div class="prose-body">
						{@html book.oneOnOneFocusHtml}
					</div>
				</section>

				<!-- Key Management Heuristics -->
				<section class="book-section">
					<h3 class="section-title">{ui.keyPrinciplesHeading}</h3>
					<ul class="principles-list">
						{#each book.keyPrinciples as principle}
							<li class="principle-item">
								<span class="principle-bullet" aria-hidden="true">✓</span>
								<span>{principle}</span>
							</li>
						{/each}
					</ul>
				</section>

				<!-- High-Leverage Questions -->
				<section class="book-section">
					<h3 class="section-title">{ui.questionsFromBookHeading}</h3>
					<div class="book-questions-grid">
						{#each book.actionableQuestions as question}
							<div class="book-question-card">
								<span class="question-icon" aria-hidden="true">💬</span>
								<p class="question-text">“{question}”</p>
							</div>
						{/each}
					</div>
				</section>

				<!-- Memorable Quote -->
				<blockquote class="book-quote">
					<p class="quote-text">“{book.quote.text}”</p>
					<cite class="quote-cite">— {book.quote.attribution}</cite>
				</blockquote>

				<!-- Cross-link to Related Template -->
				<footer class="book-footer">
					<div class="related-template-info">
						<span class="related-label">{ui.relatedTemplateLabel}</span>
						<span class="related-title">{book.relatedTemplateTitle}</span>
					</div>
					<a
						class="btn btn-secondary related-btn"
						href={localizeHref(`/playbook/${book.relatedTemplateSlug}/`)}
					>
						{ui.viewRelatedTemplateBtn}
					</a>
				</footer>
			</article>
		{/each}
	</div>

	<!-- Bottom Demo CTA Banner -->
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
	.bookshelf-page {
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

	.bookshelf-hero {
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

	.bookshelf-hero h1 {
		font-size: clamp(32px, 5vw, 44px);
		line-height: 1.15;
		margin-bottom: var(--space-3);
	}

	.hero-subtitle {
		font-size: 18px;
		line-height: 1.55;
		color: color-mix(in srgb, var(--color-text) 80%, transparent);
		margin: 0 auto;
	}

	.books-container {
		display: flex;
		flex-direction: column;
		gap: var(--space-8);
		margin-bottom: var(--space-8);
	}

	.book-card {
		background: var(--color-surface);
		border: 1px solid var(--color-divider);
		border-radius: 16px;
		padding: var(--space-8);
		box-shadow: var(--shadow-sm);
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
	}

	.book-card-top {
		display: flex;
		gap: var(--space-6);
		align-items: flex-start;
		border-bottom: 1px solid var(--color-divider);
		padding-bottom: var(--space-6);
	}

	.book-cover-wrap {
		flex-shrink: 0;
	}

	.book-cover-img {
		width: 130px;
		height: auto;
		aspect-ratio: 2 / 3;
		object-fit: cover;
		border-radius: 3px 8px 8px 3px;
		box-shadow:
			-3px 0 6px -2px rgba(0, 0, 0, 0.4),
			6px 12px 24px -4px rgba(0, 0, 0, 0.25),
			0 2px 4px -1px rgba(0, 0, 0, 0.15);
		border-left: 3px solid rgba(0, 0, 0, 0.3);
		transition:
			transform 0.25s ease,
			box-shadow 0.25s ease;
		display: block;
	}

	.book-card:hover .book-cover-img {
		transform: translateY(-4px) rotate(1deg);
		box-shadow:
			-4px 0 8px -2px rgba(0, 0, 0, 0.45),
			8px 18px 30px -4px rgba(0, 0, 0, 0.32),
			0 4px 8px -1px rgba(0, 0, 0, 0.2);
	}

	.book-header {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		flex: 1;
		min-width: 0;
	}

	.book-meta-top {
		display: flex;
		align-items: center;
		gap: var(--space-3);
	}

	.book-badge {
		font-size: 12px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		background: color-mix(in srgb, var(--color-accent) 15%, transparent);
		color: var(--color-accent-ink);
		padding: 4px 10px;
		border-radius: 999px;
	}

	.book-year {
		font-size: 13px;
		font-weight: 600;
		color: color-mix(in srgb, var(--color-text) 60%, transparent);
		font-family: var(--font-mono);
	}

	.book-title {
		font-size: clamp(24px, 3.5vw, 32px);
		line-height: 1.25;
		margin: var(--space-1) 0 0;
	}

	.book-original-title {
		font-size: 15px;
		font-style: italic;
		color: color-mix(in srgb, var(--color-text) 65%, transparent);
	}

	.book-author {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-2);
		font-size: 15px;
		margin-top: var(--space-1);
	}

	.author-name {
		font-weight: 700;
		color: var(--color-text);
	}

	.author-divider {
		color: color-mix(in srgb, var(--color-text) 40%, transparent);
	}

	.author-role {
		color: color-mix(in srgb, var(--color-text) 75%, transparent);
	}

	.core-thesis-box {
		background: color-mix(in srgb, var(--color-bg) 60%, var(--color-surface));
		border-left: 4px solid var(--color-accent);
		border-radius: 0 10px 10px 0;
		padding: var(--space-4) var(--space-6);
	}

	.thesis-label {
		display: block;
		font-size: 11px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--color-accent-ink);
		margin-bottom: var(--space-1);
	}

	.thesis-content {
		font-size: 16px;
		line-height: 1.5;
		font-style: italic;
		font-weight: 500;
		color: var(--color-text);
		margin: 0;
	}

	.book-section {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.section-title {
		font-size: 18px;
		font-weight: 700;
		margin: 0;
		color: var(--color-text);
	}

	.prose-body {
		font-size: 15px;
		line-height: 1.65;
		color: color-mix(in srgb, var(--color-text) 85%, transparent);
	}

	.prose-body :global(p) {
		margin: 0 0 var(--space-3);
	}

	.prose-body :global(p:last-child) {
		margin-bottom: 0;
	}

	.prose-body :global(strong) {
		color: var(--color-text);
	}

	.principles-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.principle-item {
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
		font-size: 15px;
		line-height: 1.5;
		color: color-mix(in srgb, var(--color-text) 85%, transparent);
	}

	.principle-bullet {
		color: var(--color-accent-ink);
		font-weight: 700;
		line-height: 1.4;
		flex-shrink: 0;
	}

	.book-questions-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: var(--space-3);
	}

	.book-question-card {
		background: var(--color-bg);
		border: 1px solid var(--color-divider);
		border-radius: 8px;
		padding: var(--space-3) var(--space-4);
		display: flex;
		align-items: flex-start;
		gap: var(--space-2);
	}

	.question-icon {
		font-size: 14px;
		flex-shrink: 0;
		margin-top: 2px;
	}

	.question-text {
		font-size: 14px;
		line-height: 1.45;
		font-style: italic;
		color: var(--color-text);
		margin: 0;
	}

	.book-quote {
		margin: 0;
		padding: var(--space-4) var(--space-6);
		background: color-mix(in srgb, var(--color-accent) 6%, transparent);
		border-radius: 12px;
		border: 1px dashed color-mix(in srgb, var(--color-accent) 30%, transparent);
	}

	.quote-text {
		font-size: 15px;
		line-height: 1.55;
		font-style: italic;
		color: var(--color-text);
		margin: 0 0 var(--space-2);
	}

	.quote-cite {
		font-size: 13px;
		font-weight: 600;
		color: var(--color-accent-ink);
		display: block;
		font-style: normal;
	}

	.book-footer {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-4);
		background: var(--color-bg);
		border: 1px solid var(--color-divider);
		border-radius: 12px;
		padding: var(--space-4) var(--space-6);
		margin-top: var(--space-2);
	}

	.related-template-info {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.related-label {
		font-size: 12px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: color-mix(in srgb, var(--color-text) 60%, transparent);
	}

	.related-title {
		font-size: 15px;
		font-weight: 700;
		color: var(--color-text);
	}

	.related-btn {
		font-size: 14px;
		white-space: nowrap;
	}

	.playbook-cta-banner {
		background: var(--color-surface);
		border: 1px solid var(--color-divider);
		border-radius: 16px;
		padding: var(--space-8);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-6);
		box-shadow: var(--shadow-sm);
	}

	.banner-content h3 {
		font-size: 22px;
		margin: 0 0 var(--space-2);
	}

	.banner-content p {
		font-size: 15px;
		color: color-mix(in srgb, var(--color-text) 75%, transparent);
		margin: 0;
		line-height: 1.5;
	}

	@media (max-width: 768px) {
		.book-card {
			padding: var(--space-6);
		}

		.book-card-top {
			gap: var(--space-4);
			padding-bottom: var(--space-4);
		}

		.book-cover-img {
			width: 110px;
		}

		.book-footer {
			flex-direction: column;
			align-items: flex-start;
		}

		.related-btn {
			width: 100%;
			text-align: center;
		}

		.playbook-cta-banner {
			flex-direction: column;
			text-align: center;
			padding: var(--space-6);
		}

		.playbook-cta-banner .btn {
			width: 100%;
		}
	}

	@media (max-width: 520px) {
		.book-card {
			padding: var(--space-4);
			gap: var(--space-4);
		}

		.book-card-top {
			gap: var(--space-3);
		}

		.book-cover-img {
			width: 85px;
		}

		.book-title {
			font-size: 19px;
		}

		.book-original-title {
			font-size: 13px;
		}

		.book-author {
			font-size: 13px;
		}

		.core-thesis-box {
			padding: var(--space-3) var(--space-4);
		}

		.thesis-content {
			font-size: 14px;
		}
	}
</style>
