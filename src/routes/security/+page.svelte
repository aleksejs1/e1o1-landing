<script lang="ts">
	import { getContent } from '$lib/content';
	import { GITHUB_URL, DOCS_URL, ENCRYPTION_DOCS_URL, DEPLOYMENT_DOCS_URL } from '$lib/links';
	import { localizeHref } from '$lib/paraglide/runtime';

	const content = $derived(getContent());
	let copied = $state(false);

	async function copyCommand(cmd: string) {
		if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
			try {
				await navigator.clipboard.writeText(cmd);
				copied = true;
				setTimeout(() => {
					copied = false;
				}, 2500);
			} catch {}
		}
	}
</script>

<svelte:head>
	<title>{content.architecture.heading} — encrypted1on1</title>
	<meta name="description" content={content.architecture.subhead} />
</svelte:head>

<article class="doc-page">
	<div class="doc-header">
		<a href={localizeHref('/')} class="back-link"
			>← {content.skipToContent === 'Skip to content' ? 'Back to Overview' : 'Назад на главную'}</a
		>
		<div class="badge-pill">Zero-Knowledge Architecture</div>
		<h1>{content.architecture.heading}</h1>
		<p class="lead">{content.architecture.subhead}</p>
	</div>

	<section class="doc-card arch-card">
		<h2>{content.architecture.guaranteeTitle}</h2>
		<p>{@html content.architecture.guaranteeTextHtml}</p>

		<div class="steps-grid">
			{#each content.architecture.steps as step (step.stepNumber)}
				<div class="step-card">
					<div class="step-top">
						<span class="step-num">{step.stepNumber}</span>
						<span class="step-badge">{step.badge}</span>
					</div>
					<div class="step-actor">{step.actor}</div>
					<h3>{step.action}</h3>
					<p>{step.detail}</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="doc-card">
		<h2>{content.privacy.heading}</h2>
		<p>{content.privacy.intro}</p>

		<div class="points-list">
			{#each content.privacy.points as pt (pt.title)}
				<div class="point-item">
					<h3>{pt.title}</h3>
					<p>{pt.body}</p>
				</div>
			{/each}
		</div>

		<div class="resolution-box">
			<p>{@html content.privacy.resolutionHtml}</p>
		</div>
	</section>

	<section class="doc-card faq-card">
		<h2>{content.privacy.faq.question}</h2>
		<div class="faq-content">
			<p>{@html content.privacy.faq.answer1Html}</p>
			<p>{@html content.privacy.faq.answer2Html}</p>
		</div>
	</section>

	<section class="doc-card quickstart-card">
		<h2>{content.quickstart.heading}</h2>
		<p>{content.quickstart.subhead}</p>
		<div class="command-box">
			<code>{content.quickstart.command}</code>
			<button
				class="btn btn-secondary btn-sm"
				onclick={() => copyCommand(content.quickstart.command)}
			>
				{copied ? content.quickstart.copiedNotice : content.quickstart.copyButtonText}
			</button>
		</div>
		<p class="quickstart-note">{content.quickstart.note}</p>
		<div class="doc-links">
			<a href={ENCRYPTION_DOCS_URL} target="_blank" rel="noopener noreferrer">
				{content.skipToContent === 'Skip to content'
					? 'Read Cryptographic Spec on GitHub →'
					: 'Спецификация криптографии на GitHub →'}
			</a>
			<a href={DEPLOYMENT_DOCS_URL} target="_blank" rel="noopener noreferrer">
				{content.quickstart.docsLinkText}
			</a>
		</div>
	</section>
</article>

<style>
	.doc-page {
		max-width: 860px;
		margin: 0 auto;
		padding: var(--space-8) var(--space-4) var(--space-12);
	}

	.doc-header {
		margin-bottom: var(--space-8);
	}

	.back-link {
		display: inline-block;
		margin-bottom: var(--space-4);
		font-weight: 500;
		color: var(--color-accent-ink);
		text-decoration: none;
	}

	.back-link:hover {
		text-decoration: underline;
	}

	.badge-pill {
		display: inline-block;
		font-size: 12px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		background: color-mix(in srgb, var(--color-accent) 20%, transparent);
		color: var(--color-accent-ink);
		padding: 4px 12px;
		border-radius: 999px;
		margin-bottom: var(--space-3);
	}

	.lead {
		font-size: 18px;
		line-height: 1.5;
		color: color-mix(in srgb, var(--color-text) 80%, transparent);
	}

	.doc-card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg, 12px);
		padding: var(--space-6) var(--space-6);
		margin-bottom: var(--space-8);
	}

	.doc-card h2 {
		margin-top: 0;
		font-size: 22px;
	}

	.steps-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
		gap: var(--space-4);
		margin-top: var(--space-6);
	}

	.step-card {
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: 8px;
		padding: var(--space-4);
	}

	.step-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--space-2);
	}

	.step-num {
		font-size: 18px;
		font-weight: 800;
		color: var(--color-accent-ink);
	}

	.step-badge {
		font-size: 11px;
		font-weight: 600;
		text-transform: uppercase;
		background: color-mix(in srgb, var(--color-accent) 15%, transparent);
		padding: 2px 8px;
		border-radius: 4px;
	}

	.step-actor {
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: color-mix(in srgb, var(--color-text) 60%, transparent);
		margin-bottom: var(--space-1);
	}

	.step-card h3 {
		font-size: 16px;
		margin: 0 0 var(--space-2);
	}

	.step-card p {
		font-size: 14px;
		line-height: 1.45;
		margin: 0;
	}

	.points-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
		margin: var(--space-5) 0;
	}

	.point-item h3 {
		font-size: 17px;
		margin-bottom: var(--space-2);
	}

	.point-item p {
		margin: 0;
		line-height: 1.55;
	}

	.resolution-box {
		background: color-mix(in srgb, var(--color-accent) 10%, transparent);
		border-left: 3px solid var(--color-accent);
		padding: var(--space-4);
		border-radius: 0 8px 8px 0;
		margin-top: var(--space-5);
	}

	.resolution-box p {
		margin: 0;
		font-style: italic;
	}

	.faq-card {
		border-color: color-mix(in srgb, var(--color-accent) 40%, transparent);
	}

	.command-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-3);
		background: #090d16;
		color: #38bdf8;
		padding: var(--space-3) var(--space-4);
		border-radius: 8px;
		font-family: monospace;
		margin: var(--space-4) 0;
		overflow-x: auto;
	}

	.command-box code {
		white-space: nowrap;
	}

	.quickstart-note {
		font-size: 13px;
		color: color-mix(in srgb, var(--color-text) 65%, transparent);
	}

	.doc-links {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		margin-top: var(--space-4);
	}

	.doc-links a {
		font-weight: 600;
	}
</style>
