import { paraglideVitePlugin } from '@inlang/paraglide-js';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// Fully static output — no backend, no per-request logic, every route
			// (including every locale prefix Paraglide generates) is prerenderable.
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				fallback: undefined,
				strict: true
			})
		}),

		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			emitTsDeclarations: true,
			// "url" must run first so each prerendered path (/, /ru, /lv, /es, ...)
			// resolves its own distinct locale at build time — the default
			// ["cookie", "globalVariable", "baseLocale"] strategy has no per-path
			// awareness at all, which would make every prerendered page render as
			// the base locale. First-visit auto-detection (localStorage override,
			// else navigator.language, else English) is handled separately, by
			// hand, in src/lib/i18n/detect.ts — matching the main app's own
			// hand-rolled i18n/index.ts rather than leaning on a library strategy
			// for it.
			strategy: ['url', 'baseLocale']
		})
	]
});
