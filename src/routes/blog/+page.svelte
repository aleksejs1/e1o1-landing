<script lang="ts">
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { getBlogPosts, getBlogUi } from '$lib/content/blog';

	const locale = $derived(getLocale());
	const posts = $derived(getBlogPosts(locale));
	const ui = $derived(getBlogUi(locale));

	const collectionSchema = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'Blog',
			name: ui.blogTitle,
			description: ui.blogSubtitle,
			blogPost: posts.map((post) => ({
				'@type': 'BlogPosting',
				headline: post.title,
				description: post.description,
				datePublished: post.date,
				author: {
					'@type': 'Person',
					name: post.author.name
				}
			}))
		})
	);
</script>

<svelte:head>
	<title>{ui.blogTitle} — encrypted1on1</title>
	<meta name="description" content={ui.blogSubtitle} />
	<meta property="og:title" content="{ui.blogTitle} — encrypted1on1" />
	<meta property="og:description" content={ui.blogSubtitle} />
	{@html `<script type="application/ld+json">${collectionSchema}</script>`}
</svelte:head>

<div class="blog-page">
	<header class="blog-hero">
		<span class="eyebrow">encrypted1on1 Blog</span>
		<h1>{ui.blogTitle}</h1>
		<p class="hero-subtitle">{ui.blogSubtitle}</p>
	</header>

	<section class="posts-grid" aria-label={ui.latestArticles}>
		{#each posts as post (post.slug)}
			<article class="post-card">
				<a
					class="card-cover-link"
					href={localizeHref(`/blog/${post.slug}/`)}
					tabindex="-1"
					aria-hidden="true"
				>
					<img
						class="card-cover-img"
						src={post.coverImage || '/images/landing/origin-trust.jpg'}
						alt={post.title}
						width="688"
						height="384"
						loading="lazy"
					/>
				</a>

				<div class="card-content-wrap">
					<div class="card-header">
						<span class="category-badge">{post.category}</span>
						<span class="read-time text-muted">{post.readTime}</span>
					</div>

					<div class="card-main">
						<h2 class="card-title">
							<a href={localizeHref(`/blog/${post.slug}/`)}>{post.title}</a>
						</h2>
						<p class="card-subtitle">{post.subtitle}</p>
					</div>

					<div class="card-footer">
						<div class="author-meta">
							<span class="author-avatar">{post.author.name.charAt(0)}</span>
							<div class="author-info">
								<span class="author-name">{post.author.name}</span>
								<span class="post-date text-muted">{post.formattedDate}</span>
							</div>
						</div>
						<a class="btn btn-secondary card-cta" href={localizeHref(`/blog/${post.slug}/`)}>
							{ui.readArticle} →
						</a>
					</div>
				</div>
			</article>
		{/each}
	</section>
</div>

<style>
	.blog-page {
		max-width: 1080px;
		margin: 0 auto;
		padding: var(--space-6) var(--space-4) var(--space-12);
	}

	.blog-hero {
		text-align: center;
		padding: var(--space-8) 0 var(--space-8);
		max-width: 760px;
		margin: 0 auto;
	}

	.eyebrow {
		display: inline-block;
		font-size: 13px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-accent-ink);
		margin-bottom: var(--space-2);
	}

	.blog-hero h1 {
		font-size: clamp(32px, 5vw, 44px);
		line-height: 1.15;
		margin: 0 0 var(--space-3);
		color: var(--color-heading);
	}

	.hero-subtitle {
		font-size: clamp(16px, 2.5vw, 19px);
		color: color-mix(in srgb, var(--color-text) 80%, transparent);
		line-height: 1.5;
		margin: 0;
	}

	.posts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: var(--space-6);
		margin-top: var(--space-6);
	}

	.post-card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease,
			border-color 0.2s ease;
	}

	.post-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.08);
		border-color: color-mix(in srgb, var(--color-accent-ink) 40%, var(--color-border));
	}

	.card-cover-link {
		display: block;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		background: var(--color-surface-dim);
	}

	.card-cover-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.post-card:hover .card-cover-img {
		transform: scale(1.02);
	}

	.card-content-wrap {
		padding: var(--space-5);
		display: flex;
		flex-direction: column;
		flex: 1;
		gap: var(--space-4);
	}

	.card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-2);
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

	.card-main {
		flex: 1;
	}

	.card-title {
		font-size: 20px;
		line-height: 1.3;
		margin: 0 0 var(--space-2);
	}

	.card-title a {
		color: inherit;
		text-decoration: none;
		transition: color 0.15s ease;
	}

	.card-title a:hover {
		color: var(--color-accent-ink);
	}

	.card-subtitle {
		font-size: 14px;
		color: color-mix(in srgb, var(--color-text) 75%, transparent);
		line-height: 1.5;
		margin: 0;
	}

	.card-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-3);
		padding-top: var(--space-3);
		border-top: 1px solid var(--color-border);
	}

	.author-meta {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.author-avatar {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: color-mix(in srgb, var(--color-accent-ink) 20%, transparent);
		color: var(--color-accent-ink);
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 13px;
	}

	.author-info {
		display: flex;
		flex-direction: column;
		line-height: 1.25;
	}

	.author-name {
		font-size: 13px;
		font-weight: 600;
		color: var(--color-heading);
	}

	.post-date {
		font-size: 11px;
	}

	.card-cta {
		font-size: 13px;
		padding: 6px 12px;
		white-space: nowrap;
	}

	@media (max-width: 640px) {
		.posts-grid {
			grid-template-columns: 1fr;
		}

		.card-content-wrap {
			padding: var(--space-4);
		}
	}
</style>
