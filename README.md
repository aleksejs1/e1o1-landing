# encrypted1on1 — landing page

The marketing/docs website for [encrypted1on1](https://github.com/aleksejs1/encrypted1on1), a self-hosted, end-to-end encrypted platform for 1:1 meetings. This is a separate, standalone repo from the product itself — a fully static site (SvelteKit + `adapter-static`, every route prerendered at build time), not a copy of the app.

Content and structure follow `private/landing-page.md` in the main repo (not tracked here — a working brief, not part of this codebase).

## Stack

- **SvelteKit** with `@sveltejs/adapter-static` — every route (all four locales × every page) is prerendered to real static HTML at build time. No live server, no SSR at runtime.
- **Paraglide** (`@inlang/paraglide-js`) — owns real per-locale URLs (`/`, `/ru`, `/lv`, `/es`, and the same prefixes on every sub-page) and a handful of short UI strings (theme toggle, language switcher). The `strategy` is `["url", "baseLocale"]` — deliberately narrow, so each prerendered path resolves its own locale unambiguously at build time. First-visit auto-detection (localStorage override, else `navigator.language`, else English) is hand-rolled in `src/lib/i18n/detect.ts`, matching the main app's own `i18n/index.ts` logic rather than leaning on a library strategy for it.
- **Content**: the actual page prose (hero, origin story, research citations, pricing tables) is **not** routed through Paraglide's message-key format — that format fits short, reusable UI strings, not multi-paragraph marketing copy with inline links and bold text. Instead, `src/lib/content/{en,ru,lv,es}.ts` are typed, per-locale content modules (`src/lib/content/types.ts` defines the shared `LandingContent` shape) selected at render time via `getLocale()`/`getContent()`. A handful of fields end in `Html` and contain a small, fixed, author-controlled set of inline tags (`<strong>`, `<em>`, `<a>`), rendered via `{@html}` — never user input. Terms of Service and Privacy Policy are a separate `LegalContent` type, English-only (`src/lib/content/legal.ts`), served to every locale via `getLegalContent()` — deliberately not translated yet, since it's real legal text, not marketing copy.
- **Design system**: `src/lib/design/tokens.css`/`components.css` and `Logo.svelte` are ported directly from the main app's `frontend/src/design/` (same colors, fonts, spacing, dark/light theme). Fonts are self-hosted `.woff2` files (`static/fonts/`), not a Google Fonts CDN import — same reasoning as the main app: a privacy-focused site loading fonts from Google would be the easiest, most embarrassing inconsistency a technical visitor could find. One deliberate deviation from the source `Logo.svelte`: it takes no `size` prop. The source component sizes itself via a Svelte `style:` directive, which is CSP-safe in the main app (a pure client-side SPA — the directive only ever runs as `element.style.setProperty()` in the browser) but not here, since this site is prerendered: the same directive would serialize as a literal `style="..."` attribute in the actual served HTML, which this site's strict `style-src 'self'` CSP (no `unsafe-inline`) blocks. This site only ever uses one size, so the fix was to drop the prop and size the mark with a real CSS rule instead — confirmed via a real build that the served HTML now has zero inline `style=` attributes.

## Developing

```sh
npm install
npm run dev
```

## Checking

```sh
npm run check     # svelte-check
npm run lint       # prettier --check
npm run format     # prettier --write
npm run test:e2e   # Playwright, against the dev server
```

`e2e/language-switch.spec.ts` is a real regression test for a bug that shipped in the initial version: clicking a language link updated the URL but not the rendered page. SvelteKit's client-side router intercepts `<a>` clicks by default, and since Paraglide de-localizes the URL _before_ SvelteKit's own router sees it, `/` and `/ru` looked like the same route to it — nothing remounted, so the locale-derived content (read once via `getLocale()`, not through a reactive store) never re-ran. A manual refresh always worked, which is what made it non-obvious. Fixed with `data-sveltekit-reload` on the language switcher's links, forcing a real browser navigation — free on a fully static site, since every locale is already a separate built HTML file. Confirmed the test genuinely fails without the fix before keeping it.

## Building

```sh
npm run build      # prerenders every route to ./build
npm run preview    # serve the production build locally
```

## Production Docker

```sh
docker build -f docker/prod/app.Dockerfile -t e1o1-landing .
docker run -p 8080:8080 e1o1-landing
```

Multi-stage: `node:26-alpine` builds the static output, then a minimal `caddy:2-alpine` runtime serves only the built files plus `docker/prod/Caddyfile` — zero Node/build tooling in the final image. Runs as a fixed non-root user (uid/gid 10001). No TLS/`auto_https` — this container always sits behind something that terminates TLS (a reverse proxy, a PaaS's own edge). The container reads `PORT` directly (default `8080`, Caddy's own `{$PORT:8080}` syntax) rather than relying on any Compose-level indirection, so it works identically under plain `docker run`, Compose, Kubernetes, or a PaaS that injects its own port — verified for real, including that the `HEALTHCHECK` itself correctly follows a `PORT` override (shell-form `CMD` expands `${PORT:-8080}` from the container's actual runtime environment).

CSP is stricter than the main app's own (`script-src 'self'` with no `'wasm-unsafe-eval'`) since this site has no WebAssembly/crypto at all — confirmed via a real grep of the built bundle, not assumed.

### Redeploying

```sh
docker/prod/deploy.sh
```

Builds the image and (re)starts it as a single, fixed-name container (`e1o1-landing` by default) — a redeploy is just running this again, no need to look up a container ID/name and stop/remove it by hand first, since the script does that itself before starting the new one. Also sets `--restart unless-stopped`, so the container comes back on its own after a host reboot or crash, which a bare `docker run` doesn't give you. Configurable via env vars, e.g.:

```sh
HOST_PORT=8204 docker/prod/deploy.sh
```

`IMAGE_NAME`/`CONTAINER_NAME`/`HOST_PORT` all have defaults (`e1o1-landing`/`e1o1-landing`/`8204`) — override any of them the same way. Verified for real: ran it twice in a row against a live container and confirmed the second run produces a genuinely new container (different container ID) cleanly replacing the first, with no leftover stopped containers left behind and zero downtime gap longer than the container's own restart time.

```sh
npm run verify:docker
```

Builds the real image, runs it, and checks real HTTP status codes for a fixed table of paths — both with and without a trailing slash (`/ru`, `/ru/`, `/ru/terms`, `/ru/terms/`, ...) and a genuine 404 case. Exists because a real bug shipped that nothing else here would have caught: the Caddy layer 404'd on any trailing-slash URL, because `/ru/` is itself an existing _directory_ on disk (it holds `ru/terms.html`/`ru/privacy.html`), so a naive `try_files {path} {path}.html` matched the directory on its first candidate and never got to try `.html`. Paraglide's `localizeHref()` always appends a trailing slash when localizing the _root_ path, so `/ru/`, `/lv/`, `/es/` are exactly what the language switcher's home-page links generate — not an edge case. `npm run test:e2e` (against the dev server) can't catch this class of bug at all, since the dev server doesn't go through `docker/prod/Caddyfile`. Needs a working `docker` on `PATH`; not wired into any CI (none exists yet for this repo).

## Known gaps, not yet done

- **ToS and Privacy Policy are complete, specific drafts, but still not lawyer-reviewed** — flagged as such on the pages themselves (`noindex`, an on-page disclaimer banner). Both need real legal review before this site goes live for real. Content lives in `src/lib/content/legal.ts`, English-only by deliberate choice (see below), with facts baked in: governing law is Latvia, "the Operator" is used generically (no company incorporated yet), Cloud data location is Lithuania, contact is `CONTACT_EMAIL` in `src/lib/links.ts`. Still genuinely open: payment processor and the specific hosting/email-provider names (Cloud isn't live yet), stated honestly as pending rather than guessed.
- **ToS and Privacy Policy are English-only, deliberately** — every locale falls back to the same English text (`getLegalContent()` in `src/lib/content/index.ts`) rather than a translation of legal text that hasn't been reviewed yet. The rest of the site (`src/lib/content/{ru,lv,es}.ts`) is still fully translated.
- **Marketing-copy translations (ru/lv/es) were written by Claude, not reviewed by native speakers yet.** Structurally complete and parallel to the English source (same keys, same sections), but worth a native-speaker pass before this is genuinely public-facing.
- No analytics/tracking of any kind is wired in, deliberately — see the Privacy Policy's own "Marketing site data" section for the reasoning. If that ever changes, it should be a privacy-respecting, self-hostable tool, stated plainly on that page, not silently added.
