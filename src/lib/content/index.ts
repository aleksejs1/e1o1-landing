import { getLocale, type Locale } from '$lib/paraglide/runtime';
import type { LandingContent } from './types';
import { en } from './en';
import { ru } from './ru';
import { lv } from './lv';
import { es } from './es';
import { legal } from './legal';

const byLocale: Record<Locale, LandingContent> = { en, ru, lv, es };

export function getContent(): LandingContent {
	return byLocale[getLocale()];
}

/**
 * Terms of Service and Privacy Policy are real legal text, filled in for
 * English only (see legal.ts) — deliberately not translated yet, unlike
 * the rest of the site. Every locale gets the same English version rather
 * than a translation of stale placeholder text.
 */
export function getLegalContent() {
	return legal;
}
