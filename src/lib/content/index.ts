import { getLocale, type Locale } from '$lib/paraglide/runtime';
import type { LandingContent } from './types';
import { en } from './en';
import { ru } from './ru';
import { lv } from './lv';
import { es } from './es';

const byLocale: Record<Locale, LandingContent> = { en, ru, lv, es };

export function getContent(): LandingContent {
	return byLocale[getLocale()];
}
