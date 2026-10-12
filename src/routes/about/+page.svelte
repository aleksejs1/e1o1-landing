<script lang="ts">
	import { getContent } from '$lib/content';
	import { appDemoUrl } from '$lib/links';
	import { getLocale, localizeHref, type Locale } from '$lib/paraglide/runtime';

	const content = $derived(getContent());
	const locale = $derived(getLocale());

	const backLinkText: Record<Locale, string> = {
		en: 'Back to Overview',
		ru: 'Назад на главную',
		de: 'Zurück zur Übersicht',
		es: 'Volver al inicio',
		fr: 'Retour à l’accueil',
		lv: 'Atpakaļ uz sākumu'
	};

	const badgeText: Record<Locale, string> = {
		en: 'Manifesto & Story',
		ru: 'Манифест и история',
		de: 'Manifest & Geschichte',
		es: 'Manifiesto e historia',
		fr: 'Manifeste & histoire',
		lv: 'Manifests un stāsts'
	};

	const ctaTitleText: Record<Locale, string> = {
		en: 'Experience private 1:1s today',
		ru: 'Попробуйте честные 1:1 прямо сейчас',
		de: 'Erleben Sie private 1:1-Gespräche noch heute',
		es: 'Prueba reuniones 1 a 1 privadas hoy mismo',
		fr: 'Découvrez des 1:1 privés dès aujourd’hui',
		lv: 'Izmēģiniet privātas 1 pret 1 sarunas jau šodien'
	};

	const ctaSubText: Record<Locale, string> = {
		en: 'Interactive sandbox with demo accounts, no signup required.',
		ru: 'Полнофункциональное интерактивное демо без регистрации.',
		de: 'Interaktive Sandbox mit Demo-Konten, keine Registrierung erforderlich.',
		es: 'Sandbox interactivo con cuentas de prueba, sin registro requerido.',
		fr: 'Bac à sable interactif avec comptes de démonstration, sans inscription.',
		lv: 'Interaktīva smilškaste ar demo kontiem bez reģistrācijas.'
	};
</script>

<svelte:head>
	<title>{content.origin.heading} — encrypted1on1</title>
	<meta
		name="description"
		content={content.origin.paragraphsHtml[0]?.replace(/<[^>]*>/g, '') || 'encrypted1on1'}
	/>
</svelte:head>

<article class="about-page">
	<div class="about-header">
		<a href={localizeHref('/')} class="back-link">← {backLinkText[locale] ?? backLinkText.en}</a>
		<div class="badge-pill">
			{badgeText[locale] ?? badgeText.en}
		</div>
		<h1>{content.origin.heading}</h1>
	</div>

	<section class="about-card origin-story">
		{#each content.origin.paragraphsHtml as paragraph}
			<p>{@html paragraph}</p>
		{/each}
	</section>

	<section class="about-card methodology-section">
		<h2>{content.methodology.heading}</h2>
		<p class="methodology-intro">{content.methodology.intro}</p>

		<div class="methodology-points">
			{#each content.methodology.points as pt}
				<div class="methodology-item">
					<p>{@html pt.html}</p>
				</div>
			{/each}
		</div>

		<div class="methodology-closing">
			<p>{@html content.methodology.closingHtml}</p>
		</div>
	</section>

	<div class="cta-box">
		<h2>
			{ctaTitleText[locale] ?? ctaTitleText.en}
		</h2>
		<p>
			{ctaSubText[locale] ?? ctaSubText.en}
		</p>
		<a class="btn btn-primary" href={appDemoUrl(locale)} target="_blank" rel="noopener noreferrer">
			{content.hero.ctaTryDemo} →
		</a>
	</div>
</article>

<style>
	.about-page {
		max-width: 820px;
		margin: 0 auto;
		padding: var(--space-8) var(--space-4) var(--space-12);
	}

	.about-header {
		margin-bottom: var(--space-8);
	}

	.back-link {
		display: inline-block;
		margin-bottom: var(--space-4);
		font-weight: 500;
		color: var(--color-accent-ink);
		text-decoration: none;
	}

	.back-link:hover {
		text-decoration: underline;
	}

	.badge-pill {
		display: inline-block;
		font-size: 12px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		background: color-mix(in srgb, var(--color-accent) 20%, transparent);
		color: var(--color-accent-ink);
		padding: 4px 12px;
		border-radius: 999px;
		margin-bottom: var(--space-3);
	}

	.about-card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg, 12px);
		padding: var(--space-8) var(--space-6);
		margin-bottom: var(--space-8);
		line-height: 1.65;
	}

	.about-card p {
		margin-bottom: var(--space-4);
	}

	.about-card p:last-child {
		margin-bottom: 0;
	}

	.methodology-intro {
		font-size: 17px;
		color: color-mix(in srgb, var(--color-text) 85%, transparent);
		margin-bottom: var(--space-6);
	}

	.methodology-points {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}

	.methodology-item {
		padding: var(--space-4);
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: 8px;
	}

	.methodology-item p {
		margin: 0;
	}

	.methodology-closing {
		margin-top: var(--space-6);
		padding: var(--space-4);
		background: color-mix(in srgb, var(--color-accent) 10%, transparent);
		border-left: 3px solid var(--color-accent);
		border-radius: 0 8px 8px 0;
	}

	.cta-box {
		text-align: center;
		padding: var(--space-8) var(--space-4);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg, 12px);
	}

	.cta-box h2 {
		margin-top: 0;
	}
</style>
