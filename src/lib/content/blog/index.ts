import type { Locale } from '$lib/paraglide/runtime';
import type { BlogPost, BlogUiStrings } from './types';
import { blogPostsEn, blogUiEn } from './en';
import { blogPostsRu, blogUiRu } from './ru';
import { blogPostsLv, blogUiLv } from './lv';
import { blogPostsEs, blogUiEs } from './es';
import { blogPostsDe, blogUiDe } from './de';
import { blogPostsFr, blogUiFr } from './fr';

export * from './types';

const postsByLocale: Record<string, BlogPost[]> = {
	en: blogPostsEn,
	ru: blogPostsRu,
	lv: blogPostsLv,
	es: blogPostsEs,
	de: blogPostsDe,
	fr: blogPostsFr
};

const uiByLocale: Record<string, BlogUiStrings> = {
	en: blogUiEn,
	ru: blogUiRu,
	lv: blogUiLv,
	es: blogUiEs,
	de: blogUiDe,
	fr: blogUiFr
};

export function getBlogPosts(locale: Locale): BlogPost[] {
	const posts = postsByLocale[locale] || blogPostsEn;
	return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string | undefined, locale: Locale): BlogPost | undefined {
	if (!slug) return undefined;
	const posts = getBlogPosts(locale);
	const post = posts.find((p) => p.slug === slug);
	if (post) return post;

	// Fallback to English if not translated
	return blogPostsEn.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
	return blogPostsEn.map((post) => post.slug);
}

export function getBlogUi(locale: Locale): BlogUiStrings {
	return uiByLocale[locale] || blogUiEn;
}
