<script lang="ts">
	import Logo from './Logo.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import LanguageSwitcher from '$lib/i18n/LanguageSwitcher.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<header class="site-header">
	<a class="brand" href={localizeHref('/')}>
		<Logo />
		<span class="wordmark">encrypted1on1</span>
	</a>

	<div class="site-header-controls">
		<LanguageSwitcher />
		<ThemeToggle />
	</div>
</header>

<style>
	.site-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		max-width: 1080px;
		margin: 0 auto;
		padding: var(--space-4) var(--space-4);
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 10px;
		color: inherit;
		text-decoration: none;
	}

	.wordmark {
		font-family: var(--font-heading);
		font-weight: var(--font-heading-weight);
		font-size: 18px;
	}

	.site-header-controls {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}
</style>
