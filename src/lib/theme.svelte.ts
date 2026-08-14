/**
 * Dark/light theme — ported from the main app's theme.svelte.ts, adapted for
 * SSR/prerendering: the app is a pure client-side SPA where this module only
 * ever runs in a browser, but here it's imported by components that also
 * render during the static build (Node, no `window`/`localStorage`), so
 * every browser access is guarded by `browser` from $app/environment.
 */
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'e1o1-landing:theme';

function detectInitialTheme(): Theme {
	if (!browser) return 'light';

	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored === 'light' || stored === 'dark') return stored;

	return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function apply(theme: Theme): void {
	if (!browser) return;
	document.documentElement.setAttribute('data-theme', theme);
}

export const themeState = $state<{ theme: Theme }>({
	theme: detectInitialTheme()
});
apply(themeState.theme);

export function setTheme(theme: Theme): void {
	themeState.theme = theme;
	if (browser) localStorage.setItem(STORAGE_KEY, theme);
	apply(theme);
}

export function toggleTheme(): void {
	setTheme(themeState.theme === 'dark' ? 'light' : 'dark');
}
