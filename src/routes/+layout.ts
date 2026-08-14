// Fully static site — every route is prerendered at build time, no live
// server. adapter-static requires this to be set explicitly.
export const prerender = true;

// Real bug found in prod: the default 'never' writes each route as a flat
// file (ru.html) and computes its relative asset paths (e.g. ./_app/...)
// assuming the page is served at exactly that flat URL. Paraglide's own
// localizeHref() always appends a trailing slash when localizing the root
// path, though, so /ru/ (not /ru) is what real links on this site actually
// point at — serving ru.html's content at that mismatched URL resolves
// every relative asset path wrong (./_app/... becomes /ru/_app/..., a real
// 404). 'always' makes every route ru/index.html instead, whose relative
// paths are correctly computed for a URL that ends in "/", and lets a
// plain Caddy file_server serve it via its own standard directory ->
// index.html handling — no server-side rewrite hack needed at all.
export const trailingSlash = 'always';
