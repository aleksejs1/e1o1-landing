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
		<a class="brand" href={localizeHref('/')}>
			<Logo />
			<span class="wordmark">encrypted1on1</span>
		</a>
		<nav class="site-nav">
			<a class="nav-link nav-anchor" href="{localizeHref('/')}#how-it-works">
				{m.nav_how_it_works()}
			</a>
			<a class="nav-link nav-anchor" href="{localizeHref('/')}#privacy">
				{m.nav_security()}
			</a>
			<a class="nav-link nav-anchor" href="{localizeHref('/')}#pricing">
				{m.nav_pricing()}
			</a>
			<a class="nav-link" href={localizeHref('/playbook/')}>
				{m.nav_playbook()}
			</a>
		</nav>
	</div>

	<div class="site-header-controls">
		<a
			class="btn btn-secondary header-login-btn"
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
		gap: 12px;
		max-width: 1080px;
		margin: 0 auto;
		padding: var(--space-4) var(--space-4);
	}

	.brand-group {
		display: flex;
		align-items: center;
		gap: var(--space-4);
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

	.site-nav {
		display: flex;
		align-items: center;
	}

	.nav-link {
		color: color-mix(in srgb, var(--color-text) 80%, transparent);
		text-decoration: none;
		font-size: 14px;
		font-weight: 500;
		padding: 4px 8px;
		border-radius: var(--radius-sm);
		transition: color 0.15s ease;
	}

	.nav-link:hover {
		color: var(--color-accent-ink);
	}

	.site-header-controls {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		flex-shrink: 0;
	}

	.header-login-btn {
		font-size: 13px;
		padding: 4px 12px;
		height: 32px;
		box-sizing: border-box;
		white-space: nowrap;
	}

	@media (max-width: 980px) {
		.nav-anchor {
			display: none;
		}
	}

	/* On tablet & mobile, drop header demo CTA (available right below in hero)
	   and prevent navigation link from wrapping */
	@media (max-width: 768px) {
		.header-demo-btn {
			display: none;
		}

		.header-login-btn {
			font-size: 12px;
			padding: 0 8px;
		}

		.site-header {
			padding: var(--space-3) var(--space-3);
			gap: 8px;
		}

		.brand-group {
			gap: 8px;
			min-width: 0;
		}

		.brand {
			min-width: 0;
			gap: 6px;
		}

		.nav-link {
			white-space: nowrap;
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

	@media (max-width: 600px) {
		.header-login-btn {
			display: none;
		}
	}

	@media (max-width: 420px) {
		.site-header {
			padding: var(--space-3) 8px;
			gap: 6px;
		}

		.wordmark {
			font-size: 14px;
		}

		.nav-link {
			font-size: 12px;
			padding: 2px 4px;
		}
	}

	@media (max-width: 360px) {
		.site-header {
			padding: var(--space-2) 6px;
			gap: 4px;
		}

		.brand-group {
			gap: 4px;
		}

		.wordmark {
			font-size: 13px;
		}

		.nav-link {
			font-size: 11px;
			padding: 2px 3px;
		}

		.site-header-controls {
			gap: 4px;
		}
	}
</style>
