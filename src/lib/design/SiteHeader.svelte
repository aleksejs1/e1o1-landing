<script lang="ts">
	import Logo from './Logo.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import LanguageSwitcher from '$lib/i18n/LanguageSwitcher.svelte';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { appDemoUrl } from '$lib/links';
	import * as m from '$lib/paraglide/messages';
</script>

<header class="site-header">
	<a class="brand" href={localizeHref('/')}>
		<Logo />
		<span class="wordmark">encrypted1on1</span>
	</a>

	<div class="site-header-controls">
		<a
			class="btn btn-primary header-demo-btn"
			href={appDemoUrl(getLocale())}
			target="_blank"
			rel="noopener noreferrer"
		>
			{m.header_try_demo()}
		</a>
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

	/* The header already has no room to spare on narrow phones (the wordmark
	   + 4 language links + theme toggle alone are already tight) — the demo
	   CTA repeats seconds later as the hero's own primary button, so it's
	   dropped here rather than crowding out the language switcher/theme
	   toggle. */
	@media (max-width: 480px) {
		.header-demo-btn {
			display: none;
		}
	}
</style>
