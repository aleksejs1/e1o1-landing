# encrypted1on1 — landing page

The marketing/docs website for [encrypted1on1](https://github.com/aleksejs1/encrypted1on1), a self-hosted, end-to-end encrypted platform for 1:1 meetings. This is a separate, standalone repo from the product itself — a fully static site (SvelteKit + `adapter-static`, every route prerendered at build time), not a copy of the app.

Content and structure follow `private/landing-page.md` in the main repo (not tracked here — a working brief, not part of this codebase).

## Stack

- **SvelteKit** with `@sveltejs/adapter-static` — every route (all four locales × every page) is prerendered to real static HTML at build time. No live server, no SSR at runtime.
- **Paraglide** (`@inlang/paraglide-js`) — owns real per-locale URLs (`/`, `/ru`, `/lv`, `/es`, and the same prefixes on every sub-page) and a handful of short UI strings (theme toggle, language switcher). The `strategy` is `["url", "baseLocale"]` — deliberately narrow, so each prerendered path resolves its own locale unambiguously at build time. First-visit auto-detection (localStorage override, else `navigator.language`, else English) is hand-rolled in `src/lib/i18n/detect.ts`, matching the main app's own `i18n/index.ts` logic rather than leaning on a library strategy for it.
- **Content**: the actual page prose (hero, origin story, research citations, pricing tables, ToS/Privacy) is **not** routed through Paraglide's message-key format — that format fits short, reusable UI strings, not multi-paragraph marketing copy with inline links and bold text. Instead, `src/lib/content/{en,ru,lv,es}.ts` are typed, per-locale content modules (`src/lib/content/types.ts` defines the shared shape) selected at render time via `getLocale()`. A handful of fields end in `Html` and contain a small, fixed, author-controlled set of inline tags (`<strong>`, `<em>`, `<a>`), rendered via `{@html}` — never user input.
- **Design system**: `src/lib/design/tokens.css`/`components.css` and `Logo.svelte` are ported directly from the main app's `frontend/src/design/` (same colors, fonts, spacing, dark/light theme). Fonts are self-hosted `.woff2` files (`static/fonts/`), not a Google Fonts CDN import — same reasoning as the main app: a privacy-focused site loading fonts from Google would be the easiest, most embarrassing inconsistency a technical visitor could find. One deliberate deviation from the source `Logo.svelte`: it takes no `size` prop. The source component sizes itself via a Svelte `style:` directive, which is CSP-safe in the main app (a pure client-side SPA — the directive only ever runs as `element.style.setProperty()` in the browser) but not here, since this site is prerendered: the same directive would serialize as a literal `style="..."` attribute in the actual served HTML, which this site's strict `style-src 'self'` CSP (no `unsafe-inline`) blocks. This site only ever uses one size, so the fix was to drop the prop and size the mark with a real CSS rule instead — confirmed via a real build that the served HTML now has zero inline `style=` attributes.

## Developing

```sh
npm install
npm run dev
```

## Checking

```sh
npm run check   # svelte-check
npm run lint     # prettier --check
npm run format   # prettier --write
```

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

## Known gaps, not yet done

- **No real Cal.com link yet.** `src/lib/links.ts`'s `CAL_COM_URL` is a placeholder — every "Book a demo"/"Contact us"/"Contact sales" CTA on the site points at it. Replace that one constant once a real Cal.com account/username exists.
- **ToS and Privacy Policy are structured first drafts, not final legal text** — flagged as such on the pages themselves (`noindex`, an on-page disclaimer banner). Both need real legal review before this site goes live for real, per `private/landing-page.md`'s own caveat in the main repo.
- **Translations (ru/lv/es) were written by Claude, not reviewed by native speakers yet.** Structurally complete and parallel to the English source (same keys, same sections), but worth a native-speaker pass before this is genuinely public-facing, especially for the legal pages.
- No analytics/tracking of any kind is wired in, deliberately — see the Privacy Policy's own "Marketing site data" section for the reasoning. If that ever changes, it should be a privacy-respecting, self-hostable tool, stated plainly on that page, not silently added.
