import type { LegalContent } from './types';
import { ENCRYPTION_DOCS_URL, DEPLOYMENT_DOCS_URL, CONTACT_EMAIL } from '../links';

/**
 * Real, specific legal text — not a structural skeleton. Still not a
 * substitute for a lawyer's review before this is treated as a binding
 * agreement (see each page's disclaimer banner, LegalPage.svelte).
 *
 * Facts baked in here, decided by the operator rather than guessed:
 * - Governing law / jurisdiction: Latvia.
 * - Legal party: referred to generically as "the Operator" throughout —
 *   no company has been incorporated yet, so this stays accurate without
 *   needing to be revisited the moment one is. Swap in a real entity name
 *   here (and only here) once one exists.
 * - Contact: CONTACT_EMAIL (src/lib/links.ts).
 * - Cloud infrastructure data location: Lithuania.
 * - Notice period for material changes to either document: 30 days.
 * - Data-export window before deletion on account closure: 30 days.
 * Still genuinely undecided (Cloud isn't live yet), stated honestly as
 * such rather than guessed: payment processor, hosting provider name
 * (beyond "Lithuania"), email delivery provider.
 */
export const legal: LegalContent = {
	terms: {
		title: 'Terms of Service',
		scopeNoteHtml:
			'These Terms of Service ("Terms") cover two different things: (a) this marketing/documentation website, and (b) the managed encrypted1on1 Cloud offering, once it launches — the only case where the Operator actually operates infrastructure and a real contractual relationship exists. They do <strong>not</strong> cover self-hosted deployments: an organization self-hosting encrypted1on1 is running its own copy of open-source software under the AGPLv3 license, and is itself solely responsible for whatever terms it sets with its own employees. Throughout these Terms, "the Operator", "we", and "us" refer to the individual or entity operating the encrypted1on1 Cloud service and this website — no separate company has been incorporated as of this writing, and these Terms remain in effect regardless.',
		disclaimerHtml:
			'This document has been drafted to be complete and specific, not a placeholder — but it has not been reviewed by a lawyer, and shouldn’t be treated as a fully vetted, binding legal agreement until it has been.',
		sections: [
			{
				heading: '1. Acceptance of terms',
				bodyHtml:
					'By using this website, or by creating or using an encrypted1on1 Cloud account once that service is available, you agree to be bound by these Terms. If you don’t agree, don’t use the site or the Cloud service.'
			},
			{
				heading: '2. The software vs. the service',
				bodyHtml:
					'The encrypted1on1 software itself is open source, licensed under AGPLv3, and its use is governed entirely by that license — not by these Terms. These Terms apply only to your use of this website and, separately, to the Cloud service, a hosted product governed by these Terms and (for paying customers) a Data Processing Agreement covering the data the Operator processes on your behalf.'
			},
			{
				heading: '3. Account terms',
				bodyHtml:
					'Once the Cloud service is available, any individual or organization may create an account, subject to these Terms. You’re responsible for the accuracy of the information you provide and for keeping your account credentials confidential. The Operator may suspend or terminate an account for: a material breach of these Terms; use of the service for an unlawful purpose or to cause harm; non-payment (see Section 4); or where required by law. Where practical, the Operator will give notice before suspension rather than acting without warning.'
			},
			{
				heading: '4. Subscription & billing',
				bodyHtml:
					'Paid Cloud tiers (Plus, Enterprise) are billed monthly in advance, in euros, via the payment processor in place at the time (to be named here once Cloud billing launches). If a payment fails, the Operator will attempt to notify you and allow a reasonable grace period before suspending the account; suspension for non-payment doesn’t delete your data (see Section 7). Fees already paid are non-refundable except where required by applicable law. If your usage exceeds your plan’s limits (user count, history retention), the Operator will notify you rather than silently deleting data or content; continued use above the limit may require upgrading to a higher tier.'
			},
			{
				heading: '5. Data ownership',
				bodyHtml:
					'You own your data. The Operator, as Cloud operator, cannot read 1:1 content by design — stated explicitly here, not just in the Privacy Policy — and claims no ownership over anything you or your organization store using the service.'
			},
			{
				heading: '6. Service availability',
				bodyHtml:
					'The Operator aims to keep the Cloud service reliably available but does not commit to a specific uptime guarantee for the Free or Plus tiers. A formal SLA is available for the Enterprise tier, negotiated and specified in a separate written agreement with that customer. Where practical, planned maintenance that may cause downtime will be announced in advance.'
			},
			{
				heading: '7. Termination',
				bodyHtml:
					'You may close your Cloud account at any time. The Operator may terminate an account under the conditions described in Section 3. On termination (by either party), you have 30 days from the effective date to export your data before it is deleted from the Operator’s systems; after that window, deletion is permanent.'
			},
			{
				heading: '8. Limitation of liability',
				bodyHtml:
					'To the maximum extent permitted by applicable law, the Operator’s total liability arising out of or relating to the Cloud service is limited to the amount you paid in the 12 months preceding the claim, and the Operator is not liable for indirect, incidental, or consequential damages. Nothing in these Terms limits liability that cannot be limited under applicable law. The self-hosted software is provided "as is", without warranty, exactly as stated in the AGPLv3 license itself — this section concerns the Cloud service only.'
			},
			{
				heading: '9. Changes to these terms',
				bodyHtml:
					'The Operator may update these Terms from time to time. For material changes, you’ll be given at least 30 days’ notice — by email to the address on your account and/or a notice on this site — before the change takes effect. Continuing to use the site or the Cloud service after that date means you accept the updated Terms.'
			},
			{
				heading: '10. Governing law / jurisdiction',
				bodyHtml:
					'These Terms are governed by the laws of Latvia, without regard to its conflict-of-law rules. Any dispute arising out of or relating to these Terms or the Cloud service is subject to the exclusive jurisdiction of the courts of Latvia.'
			}
		]
	},

	privacyPolicy: {
		title: 'Privacy Policy',
		scopeNoteHtml:
			'This Privacy Policy covers the marketing site and the encrypted1on1 Cloud service. Self-hosted deployments are covered by the deploying organization’s own privacy policy — the product itself has a configurable footer link for exactly this purpose (see <a href="' +
			DEPLOYMENT_DOCS_URL +
			'" target="_blank" rel="noopener noreferrer">the deployment docs</a>). Throughout this policy, "the Operator", "we", and "us" refer to the individual or entity operating the encrypted1on1 Cloud service and this website.',
		disclaimerHtml:
			'This document has been drafted to be complete and specific, not a placeholder — but it has not been reviewed by a lawyer, and shouldn’t be treated as a fully vetted, binding statement of our practices until it has been.',
		sections: [
			{
				heading: '1. What this policy covers',
				bodyHtml:
					'The marketing site and the Cloud service. Self-hosted deployments are covered by the deploying organization’s own privacy policy (see the scope note above).'
			},
			{
				heading: '2. What we can technically see, and what we can’t',
				bodyHtml:
					'This is the most important section on this page. Metadata we can see: who talks to whom, meeting dates, account emails. Content we structurally cannot see, because of end-to-end encryption: answers, feedback, comments, goal checkpoints. For the technical reader who wants the real threat model, not just the summary, see <a href="' +
					ENCRYPTION_DOCS_URL +
					'" target="_blank" rel="noopener noreferrer">our encryption documentation</a>.'
			},
			{
				heading: '3. Marketing site data',
				bodyHtml:
					'No third-party analytics or trackers run on this site. Privacy wins over conversion-tracking convenience — a privacy-first product running third-party analytics on its own site would be a real, easily-noticed credibility gap for exactly the audience most likely to check. If analytics are ever added, they’ll be a self-hosted or privacy-respecting tool (e.g. Plausible, Fathom, Umami — no third-party cookies, no cross-site tracking), and this section will say so plainly. No cookie banner is needed as long as this holds — there’s genuinely nothing to consent to. The one exception is the Cal.com booking widget used for “Book a demo” — that’s disclosed below as a sub-processor, not lumped in with “no analytics,” since it’s the actual mechanism of a request you make, not a tracker.'
			},
			{
				heading: '4. Cloud service data',
				bodyHtml:
					'Account data (email, hashed authentication material — never the actual password or master key, which never leave your browser), billing data for paid tiers once Cloud billing launches (via a third-party payment processor, to be named here once one is chosen), and server logs with their retention period.'
			},
			{
				heading: '5. Data location',
				bodyHtml:
					'Cloud infrastructure is physically hosted in Lithuania, within the EU/EEA — relevant for GDPR-conscious customers specifically, since it means Cloud customer data doesn’t leave the EU/EEA by default.'
			},
			{
				heading: '6. Sub-processors',
				bodyHtml:
					'One is already decided and real: <strong>Cal.com</strong>, used for the “Book a demo” lead-capture flow — it handles the name, email, and company of anyone who books a call. The Cloud infrastructure/hosting provider is located in Lithuania (see Section 5); the specific provider, along with the payment processor and email delivery provider, will be named here once those vendors are chosen ahead of Cloud launch.'
			},
			{
				heading: '7. Data subject rights',
				bodyHtml:
					'Access, export, and deletion. The product already has self-service account deletion and data export built in for self-hosted deployments; the Cloud version will offer the same. You can also exercise these rights, or ask a question about them, by contacting the Operator directly (see Section 11).'
			},
			{
				heading: '8. Data retention',
				bodyHtml:
					'Tied to the pricing tiers above: the Free Cloud tier keeps 3 months of history, Plus and Enterprise keep it indefinitely (until you delete it or close your account). “Retention” here means actual deletion, not just hiding old data from the interface — see the Terms of Service’s Termination section for the 30-day export window on account closure.'
			},
			{
				heading: '9. Security practices',
				bodyHtml:
					'End-to-end encryption for content, plus standard practices for the metadata that is visible to us: encryption at rest and in transit, and access controls limiting who can reach production systems.'
			},
			{
				heading: '10. Changes to this policy',
				bodyHtml:
					'The Operator may update this policy from time to time. For material changes, you’ll be given at least 30 days’ notice — by email to the address on your account and/or a notice on this site — before the change takes effect.'
			},
			{
				heading: '11. Contact',
				bodyHtml:
					'For privacy questions or requests, contact the Operator at <a href="mailto:' +
					CONTACT_EMAIL +
					'">' +
					CONTACT_EMAIL +
					'</a>.'
			}
		]
	}
};
