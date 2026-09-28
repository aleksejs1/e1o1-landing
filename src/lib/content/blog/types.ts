export interface BlogAuthor {
	name: string;
	role: string;
}

export interface BlogSection {
	heading?: string;
	paragraphsHtml: string[];
}

export interface BlogPost {
	slug: string;
	title: string;
	subtitle: string;
	description: string;
	date: string; // ISO 8601: "2026-08-09"
	formattedDate: string;
	readTime: string;
	category: string;
	author: BlogAuthor;
	tags: string[];
	coverImage?: string;
	leadHtml: string;
	sections: BlogSection[];
}

export interface BlogUiStrings {
	blogTitle: string;
	blogSubtitle: string;
	latestArticles: string;
	readArticle: string;
	backToBlog: string;
	publishedOn: string;
	writtenBy: string;
	shareArticle: string;
	linkCopied: string;
	tryDemoTitle: string;
	tryDemoBody: string;
	tryDemoCta: string;
	moreArticles: string;
}
