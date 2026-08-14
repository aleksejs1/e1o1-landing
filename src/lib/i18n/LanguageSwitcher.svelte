<script lang="ts">
	import { page } from '$app/state';
	import { locales, getLocale, localizeHref, type Locale } from '$lib/paraglide/runtime';
	import { rememberLocale } from './detect';
	import * as m from '$lib/paraglide/messages';

	const LOCALE_NAMES: Record<Locale, string> = {
		en: 'EN',
		ru: 'RU',
		lv: 'LV',
		es: 'ES'
	};

	const currentLocale = $derived(getLocale());
	// .search is deliberately not included — SvelteKit disallows reading it on
	// a prerendered page (no real query string exists at build time), and this
	// site has no query-string state worth preserving across a locale switch.
	const currentHref = $derived(page.url.pathname);
</script>

<nav class="language-switcher" aria-label={m.language_switcher_label()}>
	{#each locales as code (code)}
		<a
			href={localizeHref(currentHref, { locale: code })}
			aria-current={code === currentLocale ? 'true' : undefined}
			onclick={() => rememberLocale(code)}
			data-sveltekit-reload
		>
			{LOCALE_NAMES[code]}
		</a>
	{/each}
</nav>

<style>
	.language-switcher {
		display: inline-flex;
		gap: 4px;
		font-size: 13px;
	}

	.language-switcher a {
		padding: 4px 8px;
		border-radius: 999px;
		color: inherit;
		text-decoration: none;
		opacity: 0.65;
	}

	.language-switcher a:hover {
		opacity: 1;
		background: color-mix(in srgb, var(--color-text) 7%, transparent);
	}

	.language-switcher a[aria-current='true'] {
		opacity: 1;
		background: var(--color-accent);
		color: var(--color-on-accent);
	}
</style>
