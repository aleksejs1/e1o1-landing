/**
 * Content shape for the whole site, one module per locale (en.ts/ru.ts/lv.ts/
 * es.ts). Deliberately NOT routed through Paraglide's flat message-key format
 * — that format is built for short, reusable UI strings, not multi-paragraph
 * marketing prose with inline links/bold and structured tables. Paraglide
 * still owns the short chrome strings (nav labels, aria-labels) and, more
 * importantly, the real per-locale URLs — see src/lib/i18n/detect.ts.
 *
 * A handful of fields end in `Html` and may contain a small, fixed set of
 * inline tags (<strong>, <em>, <a>) — always author-controlled content, never
 * user input, rendered via {@html}. Keep it to those three tags.
 */

export interface ResearchPoint {
	html: string;
}

export interface ComparisonPoint {
	title: string;
	body: string;
}

export interface Highlight {
	icon: string;
	title: string;
	body: string;
}

export interface PricingTable {
	columns: string[];
	rows: { label: string; values: string[] }[];
}

export interface LegalSection {
	heading: string;
	bodyHtml: string;
}

export interface LegalPage {
	title: string;
	scopeNoteHtml: string;
	sections: LegalSection[];
}

export interface LandingContent {
	meta: {
		title: string;
		description: string;
	};

	skipToContent: string;

	hero: {
		headline: string;
		subhead: string;
		ctaTryDemo: string;
		ctaGetStarted: string;
		ctaGithub: string;
		ctaDocs: string;
		trustBadges: string[];
		highlights: Highlight[];
		screenshotAlt: string;
	};

	origin: {
		heading: string;
		paragraphsHtml: string[];
	};

	methodology: {
		heading: string;
		intro: string;
		points: ResearchPoint[];
		closingHtml: string;
	};

	comparison: {
		heading: string;
		intro: string;
		points: ComparisonPoint[];
		closingHtml: string;
	};

	privacy: {
		heading: string;
		intro: string;
		points: ComparisonPoint[];
		resolutionHtml: string;
		faq: {
			question: string;
			answer1Html: string;
			answer2Html: string;
		};
	};

	pricing: {
		heading: string;
		whyAffordableHeading: string;
		whyAffordableBodyHtml: string;
		quoteHtml: string;
		selfHosted: {
			heading: string;
			table: PricingTable;
			note: string;
		};
		cloud: {
			heading: string;
			intro: string;
			table: PricingTable;
			note: string;
		};
		footnoteHtml: string;
		contactUs: string;
		contactSales: string;
	};

	footer: {
		productHeading: string;
		demoLabel: string;
		pricingLabel: string;
		docsLabel: string;
		githubLabel: string;
		legalHeading: string;
		termsLabel: string;
		privacyLabel: string;
		languageHeading: string;
		smallPrint: string;
	};
}

/**
 * Terms of Service and Privacy Policy — deliberately NOT part of
 * LandingContent/per-locale: this is real legal text (English only for
 * now, see legal.ts), not marketing copy, and every locale falls back to
 * the same English version rather than showing a translation of a stale
 * draft. See src/lib/content/index.ts.
 */
export interface LegalContent {
	terms: LegalPage;
	privacyPolicy: LegalPage;
}
