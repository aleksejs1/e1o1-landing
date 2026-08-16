/**
 * External/cross-cutting URLs, kept in one place rather than repeated across
 * four locale content files — these aren't translated content.
 */

export const GITHUB_URL = 'https://github.com/aleksejs1/encrypted1on1';
export const DOCS_URL = 'https://github.com/aleksejs1/encrypted1on1/tree/main/docs';
export const ENCRYPTION_DOCS_URL =
	'https://github.com/aleksejs1/encrypted1on1/blob/main/docs/encryption.md';
export const DEPLOYMENT_DOCS_URL =
	'https://github.com/aleksejs1/encrypted1on1/blob/main/docs/deployment.md';

/**
 * Every "Book a demo"/"Contact us"/"Contact sales" CTA on the site points
 * here (see private/landing-page.md's "Lead capture" section in the source
 * repo for why Cal.com specifically). This is a scheduling link for a live
 * call, distinct from APP_URL below (the self-serve product demo).
 */
export const CAL_COM_URL = 'https://cal.com/aleksejs1/demo';

/**
 * The hero's primary self-service signup CTA — creates a new company on the real
 * multi-tenant cloud instance (see the main repo's docs/deployment.md "Cloud
 * deployment" section and CLAUDE.md's Phase B entry: POST /api/companies, no
 * password needed up front, real activation-link flow). Distinct from APP_URL below
 * (the read-only shared demo account) and from CAL_COM_URL above (a scheduling link
 * for a sales/support call, still used by the pricing table's "Contact us"/"Contact
 * sales" links, unaffected by this constant).
 */
export const CLOUD_SIGNUP_URL = 'https://app.private1on1.eu/create-company';

/**
 * The real running product — every "Try the demo"/"Try the live demo" CTA
 * points here, straight to the login page, which shows its own "Try the
 * live demo" one-click login button when the deployed instance has
 * DEMO_MODE enabled (see the main repo's frontend/src/demo.ts). No booking,
 * no signup — distinct from CAL_COM_URL above (a scheduling link for a
 * live call).
 */
export const APP_URL = 'https://demo.private1on1.eu/';

/**
 * APP_URL with `?lang=` appended so a demo link from this site's RU/LV/ES
 * pages lands a visitor directly on the matching-language demo account
 * (the app reads `?lang=` on load — see the main repo's
 * frontend/src/i18n/index.ts — and both persists it as the displayed UI
 * language and picks the demo login credentials to match, see
 * frontend/src/demo.ts). Safe to call unconditionally: this site's own
 * locale set (project.inlang/settings.json) is exactly the app's 4
 * supported locales (en/ru/lv/es), so every possible `locale` value here
 * is already one the app understands.
 */
export function appDemoUrl(locale: string): string {
	return `${APP_URL}?lang=${locale}`;
}

/** Real contact address for legal/privacy questions — see the Privacy Policy's Contact section. */
export const CONTACT_EMAIL = 'aleksejs@private1on1.eu';
