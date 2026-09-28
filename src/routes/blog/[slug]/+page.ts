import type { EntryGenerator } from './$types';
import { getAllBlogSlugs } from '$lib/content/blog';

export const entries: EntryGenerator = () => {
	return getAllBlogSlugs().map((slug) => ({ slug }));
};

export const prerender = true;
