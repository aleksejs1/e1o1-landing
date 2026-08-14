<script lang="ts">
	import LanguageSwitcher from '$lib/i18n/LanguageSwitcher.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { GITHUB_URL, DOCS_URL } from '$lib/links';
	import type { LandingContent } from '$lib/content/types';

	const { content }: { content: LandingContent } = $props();
</script>

<footer class="site-footer">
	<div class="site-footer-columns">
		<div class="footer-col">
			<h6>{content.footer.productHeading}</h6>
			<a href="{localizeHref('/')}#pricing">{content.footer.pricingLabel}</a>
			<a href={DOCS_URL} target="_blank" rel="noopener noreferrer">{content.footer.docsLabel}</a>
			<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">{content.footer.githubLabel}</a
			>
		</div>

		<div class="footer-col">
			<h6>{content.footer.legalHeading}</h6>
			<a href={localizeHref('/terms/')}>{content.footer.termsLabel}</a>
			<a href={localizeHref('/privacy/')}>{content.footer.privacyLabel}</a>
		</div>

		<div class="footer-col">
			<h6>{content.footer.languageHeading}</h6>
			<LanguageSwitcher />
		</div>
	</div>

	<div class="hr"></div>

	<p class="small-print text-muted">{content.footer.smallPrint}</p>
</footer>

<style>
	.site-footer {
		max-width: 1080px;
		margin: 0 auto;
		padding: var(--space-8) var(--space-4) var(--space-6);
	}

	.site-footer-columns {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-8);
		margin-bottom: var(--space-6);
	}

	.footer-col {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		min-width: 140px;
	}

	.footer-col a {
		color: inherit;
		text-decoration: none;
		font-size: 14px;
		opacity: 0.75;
	}

	.footer-col a:hover {
		opacity: 1;
		color: var(--color-accent-ink);
	}

	.small-print {
		font-size: 12px;
		margin: 0;
	}
</style>
