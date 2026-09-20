<script lang="ts">
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import {
		getQuestions,
		getQuestionCategories,
		getPlaybookUi,
		type QuestionItem
	} from '$lib/content/playbook';
	import { appDemoUrl } from '$lib/links';

	const locale = $derived(getLocale());
	const questions = $derived(getQuestions(locale));
	const categories = $derived(getQuestionCategories(locale));
	const ui = $derived(getPlaybookUi(locale));

	let selectedCategory = $state<string>('all');
	let searchQuery = $state<string>('');
	let selectedQuestionIds = $state<string[]>([]);
	let copied = $state(false);
	let highlightedQuestionId = $state<string | null>(null);

	const filteredQuestions = $derived(
		questions.filter((q) => {
			const matchesCategory = selectedCategory === 'all' || q.category === selectedCategory;
			const matchesSearch =
				searchQuery.trim() === '' ||
				q.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
				(q.whyAsk && q.whyAsk.toLowerCase().includes(searchQuery.toLowerCase()));
			return matchesCategory && matchesSearch;
		})
	);

	function toggleQuestion(id: string) {
		if (selectedQuestionIds.includes(id)) {
			selectedQuestionIds = selectedQuestionIds.filter((item) => item !== id);
		} else {
			selectedQuestionIds = [...selectedQuestionIds, id];
		}
	}

	function selectRandomQuestion() {
		const randomIndex = Math.floor(Math.random() * questions.length);
		const randomQ = questions[randomIndex];
		if (randomQ) {
			selectedCategory = 'all';
			searchQuery = '';
			highlightedQuestionId = randomQ.id;

			setTimeout(() => {
				const el = document.getElementById(`q-${randomQ.id}`);
				if (el) {
					el.scrollIntoView({ behavior: 'smooth', block: 'center' });
				}
			}, 50);

			setTimeout(() => {
				highlightedQuestionId = null;
			}, 3000);
		}
	}

	function copySelectedQuestions() {
		const selected = questions.filter((q) => selectedQuestionIds.includes(q.id));
		if (selected.length === 0) return;

		let text = `# 1:1 Meeting Agenda\n\n`;
		for (const q of selected) {
			text += `- [ ] ${q.text}\n`;
		}

		navigator.clipboard.writeText(text).then(() => {
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2500);
		});
	}

	function clearSelection() {
		selectedQuestionIds = [];
	}

	const faqSchema = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			mainEntity: questions.map((q) => ({
				'@type': 'Question',
				name: q.text,
				acceptedAnswer: {
					'@type': 'Answer',
					text: q.whyAsk || q.text
				}
			}))
		})
	);
</script>

<svelte:head>
	<title>{ui.questionsHeroTitle} — encrypted1on1</title>
	<meta name="description" content={ui.questionsHeroSubtitle} />
	<meta property="og:title" content="{ui.questionsHeroTitle} — encrypted1on1" />
	<meta property="og:description" content={ui.questionsHeroSubtitle} />
	{@html `<script type="application/ld+json">${faqSchema}</script>`}
</svelte:head>

<div class="questions-page">
	<!-- Hub Mode Switcher Tabs -->
	<nav class="hub-tabs" aria-label="Playbook sections">
		<a class="hub-tab" href={localizeHref('/playbook/')}>
			{ui.tabsTemplates}
		</a>
		<a class="hub-tab active" href={localizeHref('/playbook/questions/')}>
			{ui.tabsQuestions}
		</a>
		<a class="hub-tab" href={localizeHref('/playbook/books/')}>
			{ui.tabsBooks}
		</a>
	</nav>

	<header class="questions-hero">
		<span class="eyebrow">Playbook</span>
		<h1>{ui.questionsHeroTitle}</h1>
		<p class="hero-subtitle">{ui.questionsHeroSubtitle}</p>

		<!-- Search and Action Bar -->
		<div class="toolbar">
			<div class="search-wrap">
				<span class="search-icon">🔍</span>
				<input
					type="search"
					class="search-input"
					placeholder={ui.searchPlaceholder}
					bind:value={searchQuery}
					aria-label={ui.searchPlaceholder}
				/>
			</div>
			<button type="button" class="btn btn-secondary random-btn" onclick={selectRandomQuestion}>
				🎲 {ui.randomQuestionBtn}
			</button>
		</div>

		<!-- Category Filter Pills -->
		<div class="filter-pills" role="tablist" aria-label="Question categories">
			<button
				type="button"
				class="filter-pill"
				class:active={selectedCategory === 'all'}
				onclick={() => (selectedCategory = 'all')}
			>
				{ui.allCategories}
			</button>
			{#each categories as cat (cat.id)}
				<button
					type="button"
					class="filter-pill"
					class:active={selectedCategory === cat.id}
					onclick={() => (selectedCategory = cat.id)}
				>
					{cat.label}
				</button>
			{/each}
		</div>
	</header>

	<!-- Questions List -->
	<section class="questions-grid" aria-label="Question list">
		{#if filteredQuestions.length === 0}
			<div class="no-results">
				<p class="text-muted">{ui.noQuestionsFound}</p>
			</div>
		{:else}
			{#each filteredQuestions as q (q.id)}
				{@const categoryMeta = categories.find((c) => c.id === q.category)}
				{@const isSelected = selectedQuestionIds.includes(q.id)}
				{@const isHighlighted = highlightedQuestionId === q.id}
				<div
					id="q-{q.id}"
					class="question-card"
					class:selected={isSelected}
					class:highlighted={isHighlighted}
					onclick={() => toggleQuestion(q.id)}
					onkeydown={(e) => e.key === 'Enter' && toggleQuestion(q.id)}
					role="checkbox"
					aria-checked={isSelected}
					tabindex="0"
				>
					<div class="card-left">
						<div class="check-box" class:checked={isSelected}>
							{#if isSelected}✓{/if}
						</div>
					</div>

					<div class="card-content">
						<div class="question-header">
							<span class="category-badge">{categoryMeta?.label || q.category}</span>
						</div>
						<p class="question-text">{q.text}</p>
						{#if q.whyAsk}
							<p class="why-ask text-muted">
								<span class="why-label">Context:</span>
								{q.whyAsk}
							</p>
						{/if}
					</div>
				</div>
			{/each}
		{/if}
	</section>

	<!-- Call to Action Banner -->
	<aside class="playbook-cta-banner">
		<div class="banner-content">
			<h3>{ui.tryDemoBannerTitle}</h3>
			<p>{ui.tryDemoBannerBody}</p>
		</div>
		<a class="btn btn-primary" href={appDemoUrl(locale)} target="_blank" rel="noopener noreferrer">
			{ui.tryDemoBannerCta}
		</a>
	</aside>

	<!-- Floating Bottom Action Tray (when questions are selected) -->
	{#if selectedQuestionIds.length > 0}
		<aside class="selection-dock" aria-live="polite">
			<div class="dock-inner">
				<div class="dock-info">
					<span class="dock-count">{selectedQuestionIds.length}</span>
					<span class="dock-label">{ui.selectedCountLabel}</span>
				</div>

				<div class="dock-actions">
					<button type="button" class="btn btn-secondary dock-clear-btn" onclick={clearSelection}>
						{ui.clearSelectionBtn}
					</button>
					<button
						type="button"
						class="btn btn-primary dock-copy-btn"
						onclick={copySelectedQuestions}
					>
						{#if copied}
							✓ {ui.copiedSelectedBtn}
						{:else}
							📋 {ui.copySelectedBtn} ({selectedQuestionIds.length})
						{/if}
					</button>
				</div>
			</div>
		</aside>
	{/if}
</div>

<style>
	.questions-page {
		max-width: 960px;
		margin: 0 auto;
		padding: var(--space-6) var(--space-4) var(--space-8);
	}

	.hub-tabs {
		display: flex;
		justify-content: center;
		gap: 6px;
		margin-bottom: var(--space-8);
		background: var(--color-surface);
		padding: 4px;
		border-radius: 999px;
		border: 1px solid var(--color-divider);
		width: fit-content;
		margin-left: auto;
		margin-right: auto;
	}

	.hub-tab {
		font-family: var(--font-body);
		font-size: 14px;
		font-weight: 600;
		padding: 6px 18px;
		border-radius: 999px;
		text-decoration: none;
		color: color-mix(in srgb, var(--color-text) 75%, transparent);
		transition: all 0.15s ease;
	}

	.hub-tab:hover {
		color: var(--color-text);
	}

	.hub-tab.active {
		background: var(--color-bg);
		color: var(--color-text);
		box-shadow: var(--shadow-sm);
	}

	.questions-hero {
		text-align: center;
		max-width: 760px;
		margin: 0 auto var(--space-8);
	}

	.eyebrow {
		display: inline-block;
		text-transform: uppercase;
		font-size: 12px;
		letter-spacing: 0.12em;
		font-weight: 700;
		color: var(--color-accent-ink);
		margin-bottom: var(--space-2);
	}

	.questions-hero h1 {
		font-size: clamp(30px, 4.5vw, 42px);
		line-height: 1.15;
		margin-bottom: var(--space-3);
	}

	.hero-subtitle {
		font-size: 17px;
		color: color-mix(in srgb, var(--color-text) 80%, transparent);
		line-height: 1.5;
		margin-bottom: var(--space-6);
	}

	.toolbar {
		display: flex;
		gap: var(--space-3);
		justify-content: center;
		align-items: center;
		margin-bottom: var(--space-4);
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.search-wrap {
		position: relative;
		flex: 1;
	}

	.search-icon {
		position: absolute;
		left: 14px;
		top: 50%;
		transform: translateY(-50%);
		font-size: 14px;
		opacity: 0.5;
		pointer-events: none;
	}

	.search-input {
		width: 100%;
		font-family: var(--font-body);
		font-size: 14px;
		padding: 10px 16px 10px 38px;
		border-radius: 999px;
		border: 1px solid var(--color-divider);
		background: var(--color-surface);
		color: var(--color-text);
		outline: none;
		transition: border-color 0.15s ease;
	}

	.search-input:focus {
		border-color: var(--color-accent);
	}

	.random-btn {
		white-space: nowrap;
		font-size: 13px;
		padding: 9px 16px;
	}

	.filter-pills {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 8px;
		margin-top: var(--space-4);
	}

	.filter-pill {
		cursor: pointer;
		font-family: var(--font-body);
		font-size: 13px;
		font-weight: 500;
		padding: 5px 13px;
		border-radius: 999px;
		border: 1px solid var(--color-divider);
		background: transparent;
		color: var(--color-text);
		transition: all 0.15s ease;
	}

	.filter-pill:hover {
		background: color-mix(in srgb, var(--color-text) 5%, transparent);
	}

	.filter-pill.active {
		background: var(--color-accent);
		color: var(--color-on-accent);
		border-color: var(--color-accent);
	}

	.questions-grid {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		margin-bottom: var(--space-8);
	}

	.no-results {
		text-align: center;
		padding: var(--space-8);
	}

	.question-card {
		background: var(--color-surface);
		border: 1px solid var(--color-divider);
		border-radius: var(--radius-md);
		padding: var(--space-4) var(--space-6);
		display: flex;
		align-items: flex-start;
		gap: var(--space-4);
		cursor: pointer;
		user-select: none;
		transition:
			border-color 0.15s ease,
			background 0.15s ease,
			transform 0.12s ease;
	}

	.question-card:hover {
		border-color: color-mix(in srgb, var(--color-accent) 50%, var(--color-divider));
		transform: translateX(2px);
	}

	.question-card.selected {
		border-color: var(--color-accent);
		background: color-mix(in srgb, var(--color-accent) 6%, var(--color-surface));
	}

	.question-card.highlighted {
		border-color: var(--color-accent);
		background: color-mix(in srgb, var(--color-accent) 15%, var(--color-surface));
		box-shadow: 0 0 0 2px var(--color-accent);
	}

	.card-left {
		padding-top: 2px;
	}

	.check-box {
		width: 20px;
		height: 20px;
		border-radius: 5px;
		border: 1.5px solid color-mix(in srgb, var(--color-text) 35%, transparent);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 12px;
		font-weight: 700;
		color: var(--color-on-accent);
		background: transparent;
		transition: all 0.15s ease;
	}

	.check-box.checked {
		background: var(--color-accent);
		border-color: var(--color-accent);
	}

	.card-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.category-badge {
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-weight: 700;
		padding: 3px 8px;
		border-radius: 999px;
		background: color-mix(in srgb, var(--color-accent) 14%, transparent);
		color: var(--color-accent-ink);
	}

	.question-text {
		font-size: 16px;
		font-weight: 600;
		line-height: 1.4;
		margin: 0;
	}

	.why-ask {
		font-size: 13px;
		line-height: 1.45;
		margin: 0;
	}

	.why-label {
		font-weight: 600;
	}

	.playbook-cta-banner {
		background: color-mix(in srgb, var(--color-accent) 8%, var(--color-surface));
		border: 1px solid color-mix(in srgb, var(--color-accent) 30%, var(--color-divider));
		border-radius: var(--radius-md);
		padding: var(--space-6) var(--space-8);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-6);
	}

	.playbook-cta-banner h3 {
		font-size: 20px;
		margin: 0 0 var(--space-1);
	}

	.playbook-cta-banner p {
		margin: 0;
		font-size: 14px;
		color: color-mix(in srgb, var(--color-text) 75%, transparent);
	}

	/* Floating selection dock */
	.selection-dock {
		position: fixed;
		bottom: 24px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 100;
		width: calc(100% - 32px);
		max-width: 580px;
		animation: slideUp 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	@keyframes slideUp {
		from {
			transform: translate(-50%, 20px);
			opacity: 0;
		}
		to {
			transform: translate(-50%, 0);
			opacity: 1;
		}
	}

	.dock-inner {
		background: var(--color-text);
		color: var(--color-bg);
		padding: 10px 18px;
		border-radius: 999px;
		box-shadow: var(--shadow-lg);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-3);
	}

	.dock-info {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.dock-count {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: var(--color-accent);
		color: var(--color-on-accent);
		font-size: 12px;
		font-weight: 700;
		width: 22px;
		height: 22px;
		border-radius: 999px;
	}

	.dock-label {
		font-size: 13px;
		font-weight: 600;
	}

	.dock-actions {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.dock-clear-btn {
		color: var(--color-bg);
		border-color: color-mix(in srgb, var(--color-bg) 30%, transparent);
		font-size: 12px;
		padding: 6px 12px;
	}

	.dock-clear-btn:hover {
		background: color-mix(in srgb, var(--color-bg) 15%, transparent);
	}

	.dock-copy-btn {
		font-size: 13px;
		padding: 8px 16px;
	}

	@media (max-width: 680px) {
		.toolbar {
			flex-direction: column;
		}

		.random-btn {
			width: 100%;
		}

		.question-card {
			padding: var(--space-4);
		}

		.playbook-cta-banner {
			flex-direction: column;
			text-align: center;
			padding: var(--space-6) var(--space-4);
		}

		.dock-inner {
			flex-direction: column;
			border-radius: var(--radius-md);
			padding: 12px 16px;
		}

		.dock-actions {
			width: 100%;
			justify-content: space-between;
		}

		.dock-copy-btn {
			flex: 1;
		}
	}
</style>
