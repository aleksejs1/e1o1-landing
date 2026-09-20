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
	import { SITE_URL } from '$lib/links';
	import { locales, baseLocale, localizeHref, type Locale } from '$lib/paraglide/runtime';

	let { children } = $props();

	const content = $derived(getContent());
	const currentPath = $derived(page.url.pathname);

	function ensureTrailingSlash(path: string): string {
		return path.endsWith('/') ? path : `${path}/`;
	}

	function getAlternateUrl(locale: Locale): string {
		const loc = localizeHref(currentPath, { locale });
		return `${SITE_URL}${ensureTrailingSlash(loc)}`;
	}

	const canonicalUrl = $derived(`${SITE_URL}${ensureTrailingSlash(currentPath)}`);
	const defaultUrl = $derived(getAlternateUrl(baseLocale));

	onMount(() => {
		detectAndRedirectOnFirstVisit(page.url.pathname);
	});
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<meta name="theme-color" content="#f5ead8" />

	<!-- Canonical & Multilingual Hreflang Tags -->
	<link rel="canonical" href={canonicalUrl} />
	{#each locales as l (l)}
		<link rel="alternate" hreflang={l} href={getAlternateUrl(l)} />
	{/each}
	<link rel="alternate" hreflang="x-default" href={defaultUrl} />

	<!-- Social & Open Graph Metadata -->
	<meta property="og:site_name" content="encrypted1on1" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="{SITE_URL}/images/playbook/og-default.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="675" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="{SITE_URL}/images/playbook/og-default.jpg" />
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
