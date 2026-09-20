import { SITE_URL } from '$lib/links';
import { locales, baseLocale, type Locale } from '$lib/paraglide/runtime';
import { getAllSlugs } from '$lib/content/playbook';

export const prerender = true;

function normalizePath(rawPath: string): string {
	if (!rawPath.endsWith('/')) {
		return `${rawPath}/`;
	}
	return rawPath;
}

function getLocalizedPath(basePath: string, locale: Locale): string {
	const clean = basePath.startsWith('/') ? basePath : `/${basePath}`;
	if (locale === baseLocale) {
		return normalizePath(clean);
	}
	return normalizePath(`/${locale}${clean === '/' ? '' : clean}`);
}

export function GET() {
	const slugs = getAllSlugs();

	// Canonical base paths for indexable public pages (terms/privacy have noindex)
	const basePaths = [
		'/',
		'/playbook/',
		'/playbook/questions/',
		'/playbook/books/',
		...slugs.map((s) => `/playbook/${s}/`)
	];

	const today = new Date().toISOString().split('T')[0];

	let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
	xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

	for (const basePath of basePaths) {
		const isHome = basePath === '/';
		const isPlaybook = basePath.startsWith('/playbook/');
		const priority = isHome ? '1.0' : isPlaybook ? '0.8' : '0.5';
		const changefreq = isHome ? 'weekly' : isPlaybook ? 'weekly' : 'monthly';

		for (const locale of locales) {
			const currentUrl = `${SITE_URL}${getLocalizedPath(basePath, locale)}`;

			xml += `  <url>\n`;
			xml += `    <loc>${currentUrl}</loc>\n`;
			xml += `    <lastmod>${today}</lastmod>\n`;
			xml += `    <changefreq>${changefreq}</changefreq>\n`;
			xml += `    <priority>${priority}</priority>\n`;

			for (const altLocale of locales) {
				const altUrl = `${SITE_URL}${getLocalizedPath(basePath, altLocale)}`;
				xml += `    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${altUrl}"/>\n`;
			}
			const defaultUrl = `${SITE_URL}${getLocalizedPath(basePath, baseLocale)}`;
			xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}"/>\n`;

			xml += `  </url>\n`;
		}
	}

	xml += `</urlset>\n`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
