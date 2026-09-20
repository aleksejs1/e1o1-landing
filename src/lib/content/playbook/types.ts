export type PlaybookCategory =
	'foundations' | 'onboarding' | 'regular' | 'growth' | 'difficult' | 'leadership';

export interface PlaybookAgendaItem {
	title: string;
	durationMinutes: number;
	description: string;
	questions: string[];
}

export interface PlaybookAntiPattern {
	mistake: string;
	whyBad: string;
	betterAlternative: string;
}

export interface PlaybookItem {
	slug: string;
	title: string;
	subtitle: string;
	category: PlaybookCategory;
	readTime: string;
	cadence: string;
	duration: string;
	targetAudience: string;
	summaryHtml: string;
	whyItMattersHtml: string;
	preparationHtml?: string;
	agenda: PlaybookAgendaItem[];
	antiPatterns?: PlaybookAntiPattern[];
	followUpHtml?: string;
	tips: string[];
	keyTakeaway: string;
}

export interface CategoryMeta {
	id: PlaybookCategory;
	label: string;
	description: string;
}
