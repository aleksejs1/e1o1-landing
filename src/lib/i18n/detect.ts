/**
 * First-visit locale auto-detection + the LanguageSwitcher's own persistence —
 * matches the main app's own already-proven i18n/index.ts logic exactly
 * ("a localStorage override if one's already been set, else navigator.language
 * matched against the 4 supported codes, else English"), just adapted for real
 * per-locale URLs instead of in-memory SPA state: here, "detecting" a
 * non-English locale means a client-side redirect to that locale's URL, not a
 * content swap.
 *
 * Deliberately hand-rolled rather than leaning on Paraglide's own multi-
 * strategy resolution for this part — the vite.config.ts strategy is
 * `["url", "baseLocale"]` precisely so each prerendered path is unambiguous
 * at build time; this module is the separate, explicit piece that decides
 * whether to *move* a first-time visitor off the (English) base path.
 */
import { goto } from '$app/navigation';
import { browser } from '$app/environment';
import {
	baseLocale,
	extractLocaleFromNavigator,
	getLocale,
	isLocale,
	localizeHref,
	type Locale
} from '$lib/paraglide/runtime';

const STORAGE_KEY = 'e1o1-landing:locale';
const SESSION_KEY = 'e1o1-landing:locale-checked';

export function rememberLocale(locale: Locale): void {
	if (!browser) return;
	localStorage.setItem(STORAGE_KEY, locale);
}

/**
 * Called once, on mount, from the root layout. Only ever acts on the base
 * (unprefixed, English) path — a visitor who arrived via an already-localized
 * URL (e.g. a shared `/ru/...` link) keeps exactly what they clicked.
 */
export function detectAndRedirectOnFirstVisit(pathname: string): void {
	if (!browser) return;
	if (getLocale() !== baseLocale) return;
	if (sessionStorage.getItem(SESSION_KEY)) return;
	sessionStorage.setItem(SESSION_KEY, '1');

	const stored = localStorage.getItem(STORAGE_KEY);
	const preferred: Locale | undefined =
		stored && isLocale(stored) ? stored : extractLocaleFromNavigator();

	if (!preferred || preferred === baseLocale) return;

	void goto(localizeHref(pathname, { locale: preferred }), { replaceState: true });
}
