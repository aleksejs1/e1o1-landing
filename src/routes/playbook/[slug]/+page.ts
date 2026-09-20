import type { EntryGenerator } from './$types';
import { getAllSlugs } from '$lib/content/playbook';

export const entries: EntryGenerator = () => {
	return getAllSlugs().map((slug) => ({ slug }));
};

export const prerender = true;
