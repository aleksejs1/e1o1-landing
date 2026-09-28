<script lang="ts">
	import { page } from '$app/state';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { getBlogPost, getBlogUi, getBlogPosts } from '$lib/content/blog';
	import { appDemoUrl, SITE_URL, GITHUB_URL } from '$lib/links';

	const locale = $derived(getLocale());
	const slug = $derived(page.params.slug);
	const post = $derived(getBlogPost(slug, locale));
	const ui = $derived(getBlogUi(locale));
	const allPosts = $derived(getBlogPosts(locale));
	const otherPosts = $derived(allPosts.filter((p) => p.slug !== slug).slice(0, 2));

	let copied = $state(false);

	function shareArticle() {
		if (typeof window === 'undefined') return;
		navigator.clipboard.writeText(window.location.href).then(() => {
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2500);
		});
	}

	const articleSchema = $derived(
		post
			? JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'BlogPosting',
					headline: post.title,
					description: post.description,
					datePublished: post.date,
					author: {
						'@type': 'Person',
						name: post.author.name
					},
					publisher: {
						'@type': 'Organization',
						name: 'encrypted1on1',
						url: SITE_URL
					},
					image: `${SITE_URL}${post.coverImage || '/images/landing/origin-trust.jpg'}`
				})
			: ''
	);
</script>

<svelte:head>
	{#if post}
		<title>{post.title} — encrypted1on1 Blog</title>
		<meta name="description" content={post.description} />
		<meta property="og:title" content="{post.title} — encrypted1on1 Blog" />
		<meta property="og:description" content={post.description} />
		<meta
			property="og:image"
			content="{SITE_URL}${post.coverImage || '/images/landing/origin-trust.jpg'}"
		/>
		<meta property="og:image:width" content="1376" />
		<meta property="og:image:height" content="768" />
		<meta
			name="twitter:image"
			content="{SITE_URL}${post.coverImage || '/images/landing/origin-trust.jpg'}"
		/>
		{@html `<script type="application/ld+json">${articleSchema}</script>`}
	{/if}
</svelte:head>

{#if post}
	<article class="blog-detail-page">
		<!-- Breadcrumbs -->
		<nav class="breadcrumbs" aria-label="Breadcrumb">
			<a href={localizeHref('/blog/')}>{ui.blogTitle}</a>
			<span class="separator">/</span>
			<span class="current-crumb">{post.category}</span>
		</nav>

		<!-- Header -->
		<header class="detail-header">
			<div class="meta-badge-wrap">
				<span class="category-badge">{post.category}</span>
				<span class="read-time text-muted">{post.readTime}</span>
			</div>
			<h1>{post.title}</h1>
			<p class="detail-subtitle">{post.subtitle}</p>

			<div class="author-bar">
				<div class="author-meta">
					<span class="author-avatar">{post.author.name.charAt(0)}</span>
					<div class="author-info">
						<span class="author-name">{post.author.name}</span>
						<span class="author-role text-muted">{post.author.role}</span>
					</div>
				</div>
				<div class="date-meta text-muted">
					<span>{ui.publishedOn} {post.formattedDate}</span>
				</div>
			</div>
		</header>

		<!-- Cover Image -->
		<div class="detail-cover-wrap">
			<img
				class="detail-cover-img"
				src={post.coverImage || '/images/landing/origin-trust.jpg'}
				alt={post.title}
				width="1376"
				height="768"
			/>
		</div>

		<!-- Article Body -->
		<div class="article-body">
			<p class="article-lead">{@html post.leadHtml}</p>

			{#each post.sections as section, i (i)}
				<section class="article-section">
					{#if section.heading}
						<h2>{section.heading}</h2>
					{/if}
					{#each section.paragraphsHtml as p, j (j)}
						<p>{@html p}</p>
					{/each}
				</section>
			{/each}
		</div>

		<!-- Conversion Banner -->
		<section class="try-demo-card elev-md">
			<div class="try-demo-header">
				<span class="pill-dot" aria-hidden="true"></span>
				<span class="try-demo-badge">Zero-Knowledge E2EE</span>
			</div>
			<h3>{ui.tryDemoTitle}</h3>
			<p class="try-demo-body">{ui.tryDemoBody}</p>
			<div class="try-demo-actions">
				<a
					class="btn btn-primary"
					href={appDemoUrl(locale)}
					target="_blank"
					rel="noopener noreferrer"
				>
					{ui.tryDemoCta} →
				</a>
				<a class="btn btn-secondary" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
					GitHub (AGPLv3)
				</a>
			</div>
		</section>

		<!-- Footer Actions -->
		<footer class="detail-footer">
			<button type="button" class="btn btn-secondary share-btn" onclick={shareArticle}>
				{#if copied}
					✓ {ui.linkCopied}
				{:else}
					🔗 {ui.shareArticle}
				{/if}
			</button>
			<a class="btn btn-ghost" href={localizeHref('/blog/')}>
				← {ui.backToBlog}
			</a>
		</footer>

		{#if otherPosts.length > 0}
			<section class="more-articles">
				<h3>{ui.moreArticles}</h3>
				<div class="more-articles-grid">
					{#each otherPosts as op (op.slug)}
						<a class="more-article-card" href={localizeHref(`/blog/${op.slug}/`)}>
							<span class="more-category">{op.category}</span>
							<span class="more-title">{op.title}</span>
							<span class="more-date text-muted">{op.formattedDate}</span>
						</a>
					{/each}
				</div>
			</section>
		{/if}
	</article>
{/if}

<style>
	.blog-detail-page {
		max-width: 820px;
		margin: 0 auto;
		padding: var(--space-6) var(--space-4) var(--space-12);
	}

	.breadcrumbs {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-size: 13px;
		margin-bottom: var(--space-6);
		color: color-mix(in srgb, var(--color-text) 60%, transparent);
	}

	.breadcrumbs a {
		color: inherit;
		text-decoration: none;
	}

	.breadcrumbs a:hover {
		color: var(--color-accent-ink);
	}

	.separator {
		opacity: 0.4;
	}

	.current-crumb {
		color: var(--color-heading);
		font-weight: 500;
	}

	.detail-header {
		margin-bottom: var(--space-6);
	}

	.meta-badge-wrap {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		margin-bottom: var(--space-3);
	}

	.category-badge {
		font-size: 11px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		background: color-mix(in srgb, var(--color-accent-ink) 12%, transparent);
		color: var(--color-accent-ink);
		padding: 3px 8px;
		border-radius: var(--radius-sm);
	}

	.read-time {
		font-size: 12px;
	}

	.detail-header h1 {
		font-size: clamp(28px, 4.5vw, 40px);
		line-height: 1.2;
		color: var(--color-heading);
		margin: 0 0 var(--space-3);
	}

	.detail-subtitle {
		font-size: clamp(17px, 2.5vw, 20px);
		line-height: 1.5;
		color: color-mix(in srgb, var(--color-text) 80%, transparent);
		margin: 0 0 var(--space-5);
	}

	.author-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-4);
		padding: var(--space-3) 0;
		border-top: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
	}

	.author-meta {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.author-avatar {
		width: 38px;
		height: 38px;
		border-radius: 50%;
		background: color-mix(in srgb, var(--color-accent-ink) 20%, transparent);
		color: var(--color-accent-ink);
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 15px;
	}

	.author-info {
		display: flex;
		flex-direction: column;
		line-height: 1.3;
	}

	.author-name {
		font-size: 14px;
		font-weight: 600;
		color: var(--color-heading);
	}

	.author-role {
		font-size: 12px;
	}

	.date-meta {
		font-size: 13px;
	}

	.detail-cover-wrap {
		border-radius: var(--radius-lg);
		overflow: hidden;
		margin: var(--space-6) 0 var(--space-8);
		border: 1px solid var(--color-border);
		background: var(--color-surface-dim);
	}

	.detail-cover-img {
		width: 100%;
		height: auto;
		display: block;
	}

	.article-body {
		font-size: 17px;
		line-height: 1.7;
		color: var(--color-text);
	}

	.article-lead {
		font-size: 20px;
		line-height: 1.6;
		font-weight: 500;
		color: var(--color-heading);
		margin-bottom: var(--space-6);
		padding-bottom: var(--space-4);
		border-bottom: 1px solid var(--color-border);
	}

	.article-section {
		margin-bottom: var(--space-6);
	}

	.article-section h2 {
		font-size: clamp(22px, 3vw, 26px);
		line-height: 1.3;
		color: var(--color-heading);
		margin: var(--space-8) 0 var(--space-4);
	}

	.article-section p {
		margin: 0 0 var(--space-4);
	}

	.article-section p:last-child {
		margin-bottom: 0;
	}

	.article-section :global(ul),
	.article-section :global(ol) {
		margin: 0 0 var(--space-5);
		padding-left: var(--space-5);
	}

	.article-section :global(li) {
		margin-bottom: var(--space-2);
		line-height: 1.6;
	}

	.article-section :global(code) {
		font-family: var(--font-mono, monospace);
		font-size: 0.9em;
		padding: 2px 6px;
		border-radius: var(--radius-sm, 4px);
		background: color-mix(in srgb, var(--color-surface-dim) 80%, var(--color-border));
		border: 1px solid var(--color-border);
		color: var(--color-accent-ink);
	}

	.article-section :global(pre) {
		margin: var(--space-4) 0 var(--space-5);
		padding: var(--space-4);
		border-radius: var(--radius-md);
		background: #0e1217;
		color: #e2e8f0;
		border: 1px solid var(--color-border);
		overflow-x: auto;
	}

	.article-section :global(pre code) {
		background: transparent;
		border: none;
		padding: 0;
		color: inherit;
		font-size: 14px;
	}

	.article-section :global(a) {
		color: var(--color-accent-ink);
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.article-section :global(a:hover) {
		opacity: 0.85;
	}

	.try-demo-card {
		margin: var(--space-10) 0;
		padding: var(--space-6);
		background: var(--color-surface);
		border: 1px solid color-mix(in srgb, var(--color-accent-ink) 30%, var(--color-border));
		border-radius: var(--radius-lg);
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.try-demo-header {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.pill-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #10b981;
	}

	.try-demo-badge {
		font-size: 12px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-accent-ink);
	}

	.try-demo-card h3 {
		font-size: 20px;
		margin: 0;
		color: var(--color-heading);
	}

	.try-demo-body {
		font-size: 15px;
		line-height: 1.5;
		margin: 0;
		color: color-mix(in srgb, var(--color-text) 80%, transparent);
	}

	.try-demo-actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-top: var(--space-2);
	}

	.detail-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-4);
		padding-top: var(--space-6);
		border-top: 1px solid var(--color-border);
		margin-bottom: var(--space-8);
	}

	.share-btn {
		font-size: 14px;
	}

	.more-articles {
		margin-top: var(--space-8);
		padding-top: var(--space-6);
		border-top: 1px solid var(--color-border);
	}

	.more-articles h3 {
		font-size: 18px;
		margin: 0 0 var(--space-4);
		color: var(--color-heading);
	}

	.more-articles-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: var(--space-4);
	}

	.more-article-card {
		padding: var(--space-4);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		text-decoration: none;
		color: inherit;
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		transition:
			transform 0.15s ease,
			border-color 0.15s ease;
	}

	.more-article-card:hover {
		transform: translateY(-2px);
		border-color: var(--color-accent-ink);
	}

	.more-category {
		font-size: 11px;
		font-weight: 600;
		text-transform: uppercase;
		color: var(--color-accent-ink);
	}

	.more-title {
		font-size: 15px;
		font-weight: 600;
		line-height: 1.35;
		color: var(--color-heading);
	}

	.more-date {
		font-size: 12px;
	}

	@media (max-width: 640px) {
		.author-bar {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--space-2);
		}

		.detail-footer {
			flex-direction: column;
			align-items: stretch;
		}

		.try-demo-card {
			padding: var(--space-4);
		}
	}
</style>
