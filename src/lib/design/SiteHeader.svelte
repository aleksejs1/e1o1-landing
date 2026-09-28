<script lang="ts">
	import Logo from './Logo.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import LanguageSwitcher from '$lib/i18n/LanguageSwitcher.svelte';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { appDemoUrl, appLoginUrl } from '$lib/links';
	import * as m from '$lib/paraglide/messages';
</script>

<header class="site-header">
	<div class="brand-group">
		<a class="brand" href={localizeHref('/')} aria-label="encrypted1on1">
			<Logo />
			<span class="wordmark wordmark-full">encrypted1on1</span>
			<span class="wordmark wordmark-short">e1o1</span>
		</a>
		<nav class="site-nav">
			<a class="nav-link nav-anchor" href="{localizeHref('/')}#how-it-works">
				{m.nav_how_it_works()}
			</a>
			<a class="nav-link nav-anchor" href="{localizeHref('/')}#pricing">
				{m.nav_pricing()}
			</a>
			<a class="nav-link" href={localizeHref('/playbook/')}>
				{m.nav_playbook()}
			</a>
			<a class="nav-link" href={localizeHref('/blog/')}>
				{m.nav_blog()}
			</a>
		</nav>
	</div>

	<div class="site-header-controls">
		<a
			class="header-login-link"
			href={appLoginUrl(getLocale())}
			target="_blank"
			rel="noopener noreferrer"
		>
			{m.header_login()}
		</a>
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
		gap: 16px;
		max-width: 1080px;
		width: 100%;
		box-sizing: border-box;
		margin: 0 auto;
		padding: var(--space-4) var(--space-4);
	}

	.brand-group {
		display: flex;
		align-items: center;
		gap: var(--space-4);
		min-width: 0;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 10px;
		color: inherit;
		text-decoration: none;
		flex-shrink: 0;
	}

	.wordmark {
		font-family: var(--font-heading);
		font-weight: var(--font-heading-weight);
		font-size: 18px;
		letter-spacing: -0.01em;
	}

	.wordmark-short {
		display: none;
	}

	.site-nav {
		display: flex;
		align-items: center;
		gap: 4px;
	}

	.nav-link {
		color: color-mix(in srgb, var(--color-text) 80%, transparent);
		text-decoration: none;
		font-size: 14px;
		font-weight: 500;
		padding: 5px 10px;
		border-radius: var(--radius-sm);
		transition:
			color 0.15s ease,
			background 0.15s ease;
		white-space: nowrap;
	}

	.nav-link:hover {
		color: var(--color-accent-ink);
		background: color-mix(in srgb, var(--color-text) 5%, transparent);
	}

	.site-header-controls {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		flex-shrink: 0;
	}

	.header-login-link {
		color: color-mix(in srgb, var(--color-text) 80%, transparent);
		text-decoration: none;
		font-size: 14px;
		font-weight: 500;
		padding: 4px 8px;
		border-radius: var(--radius-sm);
		transition: color 0.15s ease;
		white-space: nowrap;
	}

	.header-login-link:hover {
		color: var(--color-accent-ink);
	}

	.header-demo-btn {
		font-size: 13px;
		font-weight: 600;
		padding: 6px 14px;
		height: 32px;
		box-sizing: border-box;
		white-space: nowrap;
		display: inline-flex;
		align-items: center;
	}

	/* Responsive thresholds */
	@media (max-width: 960px) {
		.wordmark-full {
			display: none;
		}
		.wordmark-short {
			display: inline;
		}

		.nav-anchor {
			display: none;
		}
	}

	@media (max-width: 820px) {
		.header-demo-btn {
			display: none;
		}
	}

	@media (max-width: 640px) {
		.header-login-link {
			display: none;
		}

		.site-header {
			padding: var(--space-3) var(--space-3);
			gap: 8px;
		}

		.brand-group {
			gap: 8px;
		}

		.brand {
			gap: 6px;
		}

		.nav-link {
			font-size: 13px;
			padding: 4px 6px;
		}

		.site-header-controls {
			gap: 6px;
		}

		:global(.site-header .btn-icon) {
			width: 32px;
			height: 32px;
			font-size: 14px;
			flex-shrink: 0;
		}
	}

	@media (max-width: 400px) {
		.wordmark-short {
			font-size: 15px;
		}

		.nav-link {
			font-size: 12px;
			padding: 3px 5px;
		}
	}
</style>
