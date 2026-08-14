<script lang="ts">
	import type { LegalPage } from '$lib/content/types';

	const { legal }: { legal: LegalPage } = $props();
</script>

<svelte:head>
	<title>{legal.title} — encrypted1on1</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<article class="legal-page">
	<h1>{legal.title}</h1>

	<p class="scope-note">{@html legal.scopeNoteHtml}</p>

	{#each legal.sections as section (section.heading)}
		<section>
			<h2>{section.heading}</h2>
			<p>{@html section.bodyHtml}</p>
		</section>
	{/each}
</article>

<style>
	.legal-page {
		max-width: 720px;
		margin: 0 auto;
		padding: var(--space-8) var(--space-4);
	}

	.scope-note {
		opacity: 0.85;
		margin-bottom: var(--space-8);
	}

	section {
		margin-bottom: var(--space-6);
	}

	section h2 {
		font-size: 17px;
	}
</style>
