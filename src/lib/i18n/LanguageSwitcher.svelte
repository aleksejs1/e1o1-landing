<script lang="ts">
	import { page } from '$app/state';
	import { locales, getLocale, localizeHref, type Locale } from '$lib/paraglide/runtime';
	import { rememberLocale } from './detect';
	import * as m from '$lib/paraglide/messages';

	let { variant = 'header' }: { variant?: 'header' | 'footer' } = $props();

	const LOCALE_NAMES: Record<Locale, string> = {
		en: 'EN',
		ru: 'RU',
		lv: 'LV',
		es: 'ES',
		de: 'DE',
		fr: 'FR'
	};

	const LOCALE_FULL_NAMES: Record<Locale, string> = {
		en: 'English',
		ru: 'Русский',
		lv: 'Latviešu',
		es: 'Español',
		de: 'Deutsch',
		fr: 'Français'
	};

	const currentLocale = $derived(getLocale());
	const currentHref = $derived(page.url.pathname);

	let detailsEl = $state<HTMLDetailsElement | null>(null);

	function closeDropdown() {
		if (detailsEl) {
			detailsEl.open = false;
		}
	}
</script>

<svelte:window
	onclick={(e) => {
		if (detailsEl && detailsEl.open && !detailsEl.contains(e.target as Node)) {
			detailsEl.open = false;
		}
	}}
/>

{#if variant === 'footer'}
	<nav class="language-switcher-pills" aria-label={m.language_switcher_label()}>
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
{:else}
	<!-- Desktop Inline Pills (> 768px) -->
	<nav class="language-switcher-pills desktop-only" aria-label={m.language_switcher_label()}>
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

	<!-- Mobile Dropdown (<= 768px) -->
	<details
		bind:this={detailsEl}
		class="lang-dropdown mobile-only"
		aria-label={m.language_switcher_label()}
	>
		<summary class="lang-trigger" aria-haspopup="listbox">
			<span class="lang-current">{LOCALE_NAMES[currentLocale]}</span>
			<span class="lang-caret" aria-hidden="true">▾</span>
		</summary>

		<div class="lang-menu" role="menu">
			{#each locales as code (code)}
				<a
					class="lang-menu-item"
					class:active={code === currentLocale}
					href={localizeHref(currentHref, { locale: code })}
					onclick={() => {
						rememberLocale(code);
						closeDropdown();
					}}
					data-sveltekit-reload
				>
					<span class="lang-code">{LOCALE_NAMES[code]}</span>
					<span class="lang-full">{LOCALE_FULL_NAMES[code]}</span>
					{#if code === currentLocale}
						<span class="lang-check" aria-hidden="true">✓</span>
					{/if}
				</a>
			{/each}
		</div>
	</details>
{/if}

<style>
	.language-switcher-pills {
		display: inline-flex;
		flex-wrap: wrap;
		gap: 4px;
		font-size: 13px;
	}

	.language-switcher-pills a {
		padding: 4px 8px;
		border-radius: 999px;
		color: inherit;
		text-decoration: none;
		opacity: 0.65;
		transition: all 0.15s ease;
	}

	.language-switcher-pills a:hover {
		opacity: 1;
		background: color-mix(in srgb, var(--color-text) 7%, transparent);
	}

	.language-switcher-pills a[aria-current='true'] {
		opacity: 1;
		background: var(--color-accent);
		color: var(--color-on-accent);
	}

	/* Mobile Dropdown styles */
	.lang-dropdown {
		position: relative;
		display: inline-block;
	}

	.lang-trigger {
		display: inline-flex;
		align-items: center;
		gap: 3px;
		padding: 0 8px;
		height: 32px;
		box-sizing: border-box;
		border-radius: 999px;
		border: 1px solid var(--color-divider);
		background: var(--color-surface);
		color: var(--color-text);
		font-size: 12px;
		font-weight: 600;
		cursor: pointer;
		user-select: none;
		list-style: none;
		transition: all 0.15s ease;
		flex-shrink: 0;
	}

	.lang-trigger::-webkit-details-marker {
		display: none;
	}

	.lang-trigger:hover {
		border-color: color-mix(in srgb, var(--color-text) 30%, transparent);
		background: color-mix(in srgb, var(--color-surface) 92%, var(--color-accent) 8%);
	}

	.lang-current {
		line-height: 1;
	}

	.lang-caret {
		font-size: 10px;
		opacity: 0.6;
		transition: transform 0.15s ease;
	}

	.lang-dropdown[open] .lang-caret {
		transform: rotate(180deg);
	}

	.lang-menu {
		position: absolute;
		right: 0;
		top: calc(100% + 6px);
		background: var(--color-surface);
		border: 1px solid var(--color-divider);
		border-radius: 12px;
		box-shadow: var(--shadow-md);
		padding: 4px;
		display: flex;
		flex-direction: column;
		min-width: 150px;
		z-index: 1000;
	}

	.lang-menu-item {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px 12px;
		border-radius: 8px;
		text-decoration: none;
		color: var(--color-text);
		font-size: 13px;
		transition: background 0.12s ease;
	}

	.lang-menu-item:hover {
		background: color-mix(in srgb, var(--color-text) 7%, transparent);
	}

	.lang-menu-item.active {
		font-weight: 700;
		color: var(--color-accent-ink);
		background: color-mix(in srgb, var(--color-accent) 12%, transparent);
	}

	.lang-code {
		font-weight: 700;
		font-family: var(--font-mono);
		font-size: 12px;
		opacity: 0.8;
	}

	.lang-full {
		flex: 1;
	}

	.lang-check {
		color: var(--color-accent-ink);
		font-weight: 700;
	}

	/* Breakpoint toggles */
	.desktop-only {
		display: inline-flex;
	}

	.mobile-only {
		display: none;
	}

	@media (max-width: 768px) {
		.desktop-only {
			display: none;
		}
		.mobile-only {
			display: inline-block;
		}
	}
</style>
