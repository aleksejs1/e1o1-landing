<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import '../app.css';
	import '$lib/design/tokens.css';
	import '$lib/design/components.css';
	import SiteHeader from '$lib/design/SiteHeader.svelte';
	import SiteFooter from '$lib/design/SiteFooter.svelte';
	import { getContent } from '$lib/content';
	import { detectAndRedirectOnFirstVisit } from '$lib/i18n/detect';

	let { children } = $props();

	const content = $derived(getContent());

	onMount(() => {
		detectAndRedirectOnFirstVisit(page.url.pathname);
	});
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<meta name="theme-color" content="#f5ead8" />
</svelte:head>

<div class="app-shell">
	<SiteHeader />
	<main>
		{@render children()}
	</main>
	<SiteFooter {content} />
</div>

<style>
	.app-shell {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
	}
</style>
