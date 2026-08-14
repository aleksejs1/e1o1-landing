import type { LandingContent } from './types';
import { ENCRYPTION_DOCS_URL, DEPLOYMENT_DOCS_URL } from '../links';

export const en: LandingContent = {
	meta: {
		title: 'encrypted1on1 — Private 1:1s. Provably private.',
		description:
			'An open-source, self-hosted, end-to-end encrypted platform for structured manager–employee 1:1 meetings. Not even the people running the server can read what’s written.'
	},

	skipToContent: 'Skip to content',

	hero: {
		headline: 'Private 1:1s. Provably private.',
		subhead:
			'encrypted1on1 is an open-source, self-hosted platform for structured manager–employee 1:1 meetings — end-to-end encrypted, so not even the people running the server can read what’s written. Not a policy promise. A mathematical one.',
		ctaBookDemo: 'Book a demo',
		ctaGithub: 'View on GitHub',
		ctaDocs: 'Read the docs',
		trustBadges: [
			'Open Source (AGPLv3)',
			'Self-Hosted',
			'End-to-End Encrypted',
			'No Vendor Lock-in'
		]
	},

	origin: {
		heading: 'Why we built this',
		paragraphsHtml: [
			'We didn’t set out to build another SaaS tool. We started as a customer.',
			'Our organization ran its 1:1 process through a third-party tool — one of the many well-designed, well-intentioned products in this space. It did its job. Then, like a lot of small vendors eventually do, it announced it was shutting down.',
			'That’s normal. Startups exit. What wasn’t normal was what it made us realize: we’d never actually asked ourselves what a vendor shutdown <em>means</em> for the content of a 1:1. Performance concerns someone raised in confidence. A manager’s private notes on a direct report’s career trajectory. Compensation conversations. Personal circumstances an employee disclosed expecting it to stay between two people.',
			'None of that content is ever supposed to be visible to anyone beyond the two participants — not their skip-level manager, not HR by default, not IT, and, we realized with some discomfort, not really <em>the vendor either</em>, even though the vendor could, technically, always see it. A shutdown is exactly the moment when a company’s data-handling practices get tested hardest: support staff doing exports, an acquirer doing technical due diligence, a skeleton crew winding things down under deadline pressure. We had no reason to think anything bad would happen with our data specifically. But we also had no way to <em>know</em> that it wouldn’t — because the entire model was “trust us,” and “us” was a company actively going out of business.',
			'That’s the gap we decided was worth closing properly, not just for our own organization, but as something anyone in the same position could actually verify for themselves rather than take on faith. If a 1:1 platform is going to hold some of the most sensitive conversations a company has, “we promise not to look” isn’t a strong enough guarantee. The only guarantee strong enough is one where looking is <em>not possible</em> — where the operator, the IT team, the company that self-hosts it, even a full server compromise, gets nothing but ciphertext. That’s not a policy. That’s end-to-end encryption, done properly, with the code open for anyone to check that the claim is actually true.',
			'encrypted1on1 is what came out of that.'
		]
	},

	methodology: {
		heading: 'The highest-leverage meeting on a manager’s calendar',
		intro:
			'Regular 1:1s aren’t a nice-to-have management ritual — they’re one of the best-evidenced levers an organization has for retention, engagement, and catching problems while they’re still small.',
		points: [
			{
				html: '<strong>Andy Grove</strong>, in <em>High Output Management</em> (1983) — the book that effectively defined modern tech management practice — argued that a manager’s one-on-ones are among the highest-leverage activities available to them, precisely because they’re where a manager gets the information needed to act before a problem becomes visible anywhere else.'
			},
			{
				html: '<strong>Ben Horowitz</strong>, in <em>The Hard Thing About Hard Things</em>, builds directly on Grove’s framework and makes the same point from the other direction: a 1:1 is <em>the employee’s</em> meeting, not the manager’s status-update slot — its entire value is in surfacing what wouldn’t otherwise get said.'
			},
			{
				html: '<strong>Google’s Project Oxygen</strong> — the internal research project that analyzed over 10,000 observations across 100+ variables to find out what actually distinguishes great managers from average ones — found that holding regular 1:1s, and running them well (employee sets the agenda, focus on development and well-being, not just task status), was one of the strongest identified behaviors. Technical expertise, notably, ranked last of the eight behaviors identified. (<a href="https://rework.withgoogle.com/intl/en/guides/following-the-data-the-research-behind-great-managers" target="_blank" rel="noopener noreferrer">Google re:Work</a>)'
			},
			{
				html: '<strong>Gallup’s</strong> research is the sharpest business-value case: employees whose managers hold regular meetings with them are <strong>almost three times as likely to be engaged</strong> as employees whose managers don’t. And managers account for <strong>70% of the variance</strong> in team-level engagement — meaning the quality of the 1:1 relationship isn’t a soft factor, it’s the single most controllable driver of engagement an organization has. (<a href="https://www.gallup.com/workplace/236570/employees-lot-managers.aspx" target="_blank" rel="noopener noreferrer">Gallup</a>, <a href="https://news.gallup.com/businessjournal/182792/managers-account-variance-employee-engagement.aspx" target="_blank" rel="noopener noreferrer">Gallup Business Journal</a>)'
			},
			{
				html: '<strong>Julie Zhuo</strong> (<em>The Making of a Manager</em>) and <strong>Camille Fournier</strong> (<em>The Manager’s Path</em>) — two of the most-cited modern management books, both written by former engineering-org leaders (Facebook, Rent the Runway) — independently arrive at the same conclusion: the 1:1 is the primary mechanism through which a manager actually does their job, not a meeting that competes with “real work.”'
			}
		],
		closingHtml:
			'The pattern across all of this research is consistent: the value isn’t in <em>having meetings</em>. It’s in having them <strong>regularly, structurally, and with continuity</strong> — tracking what was said last time, what commitments were made, what goals are still open. That consistency is exactly what gets lost the moment 1:1s live in scattered documents, memory, or whatever tool happened to be open that week.'
	},

	comparison: {
		heading: 'A shared doc isn’t a system',
		intro:
			'Most teams don’t lack a place to write things down. Google Docs, Notion, a shared folder — any of these can technically hold 1:1 notes. That’s exactly the problem: they hold notes, not a process.',
		points: [
			{
				title: 'No structure.',
				body: 'A blank doc has no memory of what a good 1:1 covers. Mood, workload, achievements, blockers, feedback — every manager either reinvents this from scratch or, more often, skips half of it under time pressure.'
			},
			{
				title: 'No continuity.',
				body: 'Goals set three months ago live in a doc from three months ago, if anyone can find it. There’s no automatic link between this cycle’s commitments and the next one’s follow-up.'
			},
			{
				title: 'No cadence.',
				body: 'Nothing reminds anyone a 1:1 is coming up, or that one side hasn’t filled in their part yet. The process runs entirely on individual discipline — which is exactly why it quietly stops running the moment someone gets busy.'
			},
			{
				title: 'No structured performance-review input.',
				body: 'When review season arrives, “go re-read six months of 1:1 docs” is the actual workflow at most companies. There’s no aggregated view of achievements, growth, or goal progress across a whole review period.'
			},
			{
				title: 'No real privacy model.',
				body: 'A shared doc’s access control is whatever the platform’s sharing settings allow — and it’s genuinely readable by the platform operator, full stop. That’s a different, weaker guarantee than E2E encryption, regardless of how the sharing permissions are configured.'
			}
		],
		closingHtml:
			'encrypted1on1 replaces “a doc, if you remember” with a system: a fixed, thoughtfully-designed question set on both sides, automatic periodicity and reminder emails, goals that persist and carry forward across cycles with their full progress history, and a performance-review report that aggregates achievements and goal progress across any date range — generated client-side, from data the server never had the ability to read in the first place.'
	},

	privacy: {
		heading: 'Your data. Your infrastructure. Verifiably private.',
		intro:
			'For a corporate buyer, “trust us with your employees’ most sensitive conversations” is a hard sell from any vendor — and it should be. encrypted1on1 is built so that sentence never has to be the pitch.',
		points: [
			{
				title: 'Self-hosted.',
				body: 'The entire platform runs on infrastructure your company controls — your servers, your cloud account, your backup policy. No data ever has to leave your organization’s boundary unless you choose the Cloud option.'
			},
			{
				title: 'Open source (AGPLv3).',
				body: 'Every line of code — including the cryptography — is public and auditable. You, or an independent security team you hire, can verify the privacy claims directly instead of taking a vendor’s word for it. That’s a materially different trust model than a closed-source SaaS product asking you to trust its unread source code and its Terms of Service.'
			},
			{
				title: 'End-to-end encrypted, specifically.',
				body: '1:1 content — answers, feelings, feedback, comments, meeting outcomes, goal progress — is encrypted in the browser before it ever reaches the server, with keys derived from each user’s own password and never transmitted. The server stores ciphertext. It cannot decrypt it — not the operator, not IT, not us, not an attacker who compromises the database. The one deliberate, narrow exception: a goal’s title, description, and status are stored as plain text specifically so goals can support company-wide alignment and light reporting — everything else in a 1:1 stays private to the two participants, full stop.'
			}
		],
		resolutionHtml:
			'This is the resolution to the exact problem in the origin story above: a vendor shutting down, being acquired, or having a bad actor on staff no longer matters to the confidentiality of what’s already been written, because there was never a point where the vendor — any vendor, including us — could read it.',
		faq: {
			question: '“What about legal holds, harassment investigations, or compliance requests?”',
			answer1Html:
				'<strong>No, and that’s deliberate — because the alternative defeats the purpose.</strong> If a company could read 1:1 content, the conversations that most need to happen honestly would stop happening at all. The scenario compliance teams should actually worry about: an employee needs to report concerning behavior <em>by their own manager</em>, or by someone above their manager. If that person — or anyone in their reporting chain — could read 1:1s, would the report ever get written down truthfully? Confidentiality isn’t in tension with catching real problems. It’s the precondition for them surfacing in the first place.',
			answer2Html:
				'<strong>And practically, this isn’t a dead end.</strong> Every 1:1 is readable by exactly its two participants, independently — never through a single shared company key. If an investigation involves one participant, the content remains available through the other one, the same way it would if the same conversation had happened on paper or in a personal notebook: legal process can compel a <em>person</em> to produce what they have. It was just never something a <em>platform</em> could hand over on its own, which is the entire point.'
		}
	},

	pricing: {
		heading: 'Two ways to run it',
		whyAffordableHeading: 'Why so affordable?',
		whyAffordableBodyHtml:
			'<p>We’re not chasing venture-scale growth — we don’t need this to be a big business, only a sustainable one. Pricing reflects what it actually costs to run reliable infrastructure, not what enterprise software typically charges for a sales team, a marketing budget, or investor returns baked into the price.</p>' +
			'<p>And because the entire platform is also free to self-host, you’re never actually paying for the software itself — only, if you choose, for us to run it for you, or for a support relationship you find worth it. If we ever stopped operating tomorrow, self-hosted deployments would keep running exactly as they do today, unaffected — that’s not a promise, it’s just how open source and self-hosting work. (It’s also, not coincidentally, the exact problem this project exists to solve — see <a href="#origin">Why we built this</a>.)</p>',
		quoteHtml:
			'A meaningful 1:1 is two people spending real, focused time on each other’s growth — that’s the actual cost of doing this well, and no tool changes that math. All we add is making sure that time isn’t wasted rebuilding context from scratch, isn’t at risk the moment a vendor’s business model changes, and isn’t visible to anyone but the two people in the room. That shouldn’t cost more than a notebook.',
		selfHosted: {
			heading: 'Self-hosted',
			table: {
				columns: ['Free', 'Premium'],
				rows: [
					{ label: 'Price', values: ['€0 forever', 'Contact us'] },
					{ label: 'The full platform', values: ['✓', '✓'] },
					{ label: 'Community support', values: ['✓', '✓'] },
					{ label: 'Priority support*', values: ['', '✓'] },
					{ label: 'Priority feature request handling*', values: ['', '✓'] },
					{ label: 'SSO', values: ['', 'Coming soon'] }
				]
			},
			note: 'The self-hosted core is, and will always stay, completely free — no crippled “lite” tier, no artificial limits. Premium is an optional add-on for organizations that want a support relationship and a say in the roadmap, not a gate on the product itself.'
		},
		cloud: {
			heading: 'Cloud',
			intro: 'Don’t want to run your own infrastructure? We host it for you.',
			table: {
				columns: ['Free (coming soon)', 'Plus (coming soon)', 'Enterprise'],
				rows: [
					{ label: 'Price', values: ['€0', '€20 / month', 'Contact sales'] },
					{ label: 'Users', values: ['Up to 100', 'Up to 1,000', 'Unlimited'] },
					{ label: 'History retention', values: ['3 months', 'Unlimited', 'Unlimited'] },
					{ label: 'Priority support*', values: ['', '✓', '✓'] },
					{ label: 'Priority feature request handling*', values: ['', '', '✓'] },
					{ label: 'SSO', values: ['', '', 'Coming soon'] }
				]
			},
			note: 'Cloud runs on the exact same open-source code as the self-hosted version — same end-to-end encryption, same privacy guarantees. The only difference is who operates the server.'
		},
		footnoteHtml:
			'*Priority support means paid users’ emails and issues get looked at first, not that a fix is instant or guaranteed by any SLA — this is a small, honest open-source project, not a call center. A paid bug might still take weeks. It’ll just get fixed before the free-tier queue, not instead of it.',
		contactUs: 'Contact us',
		contactSales: 'Contact sales'
	},

	footer: {
		productHeading: 'Product',
		pricingLabel: 'Pricing',
		docsLabel: 'Docs',
		githubLabel: 'GitHub',
		legalHeading: 'Legal',
		termsLabel: 'Terms of Service',
		privacyLabel: 'Privacy Policy',
		languageHeading: 'Language',
		smallPrint: 'encrypted1on1 is open-source software licensed under AGPLv3.'
	},

	terms: {
		title: 'Terms of Service',
		scopeNoteHtml:
			'This ToS covers (a) the marketing/docs website itself, and (b) the managed Cloud offering, where we actually operate infrastructure and a real ToS relationship exists. It does <strong>not</strong> cover self-hosted deployments — a self-hosting company is running its own copy of open-source software under AGPLv3, and is itself responsible for whatever terms it sets with its own employees.',
		disclaimerHtml:
			'This is a structured first draft, not final legal text. It has not yet been reviewed by a lawyer, and shouldn’t be relied on as a binding agreement until it has been.',
		sections: [
			{
				heading: '1. Acceptance of terms',
				bodyHtml: 'Using the site or the Cloud service means accepting these terms.'
			},
			{
				heading: '2. The software vs. the service',
				bodyHtml:
					'There’s a clear distinction between the open-source software — use of which is governed by the AGPLv3 license, not this ToS — and the Cloud service, a hosted product governed by this ToS and a separate Data Processing Agreement.'
			},
			{
				heading: '3. Account terms',
				bodyHtml:
					'Who can create a Cloud account, acceptable use, and the conditions under which an account may be suspended.'
			},
			{
				heading: '4. Subscription & billing',
				bodyHtml:
					'Covers the Plus and Enterprise tiers: billing cycle, what happens on non-payment, refund policy, and how tier limits (user count, history retention) are enforced, including what happens if they’re exceeded.'
			},
			{
				heading: '5. Data ownership',
				bodyHtml:
					'The customer owns their data. encrypted1on1, as Cloud operator, cannot read 1:1 content by design — stated explicitly here, not just in the Privacy Policy.'
			},
			{
				heading: '6. Service availability',
				bodyHtml:
					'Uptime expectations and any SLA (Enterprise tier only, where applicable), and maintenance windows.'
			},
			{
				heading: '7. Termination',
				bodyHtml:
					'Either party may terminate. Covers what happens to a customer’s data on account closure, and the export window available before deletion.'
			},
			{
				heading: '8. Limitation of liability',
				bodyHtml: 'Standard SaaS liability caps apply; the exact terms require real legal drafting.'
			},
			{
				heading: '9. Changes to these terms',
				bodyHtml: 'Notice period and how customers are informed of changes.'
			},
			{
				heading: '10. Governing law / jurisdiction',
				bodyHtml: 'To be determined, likely tied to wherever the operating entity is incorporated.'
			}
		]
	},

	privacyPolicy: {
		title: 'Privacy Policy',
		scopeNoteHtml:
			'This policy covers the marketing site and the Cloud service. Self-hosted deployments are covered by the deploying organization’s own privacy policy — the product itself has a configurable footer link for exactly this purpose (see <a href="' +
			DEPLOYMENT_DOCS_URL +
			'" target="_blank" rel="noopener noreferrer">the deployment docs</a>).',
		disclaimerHtml:
			'This is a structured first draft, not final legal text. It has not yet been reviewed by a lawyer, and shouldn’t be relied on as a binding statement of our practices until it has been.',
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
					'Account data (email, hashed authentication material — never the actual password or master key, which never leave your browser), billing data for paid tiers (via a third-party payment processor, to be named once one is chosen), and server logs with their retention period.'
			},
			{
				heading: '5. Data location',
				bodyHtml:
					'Where Cloud infrastructure is physically hosted is still to be decided — it matters a lot for GDPR-conscious customers in particular.'
			},
			{
				heading: '6. Sub-processors',
				bodyHtml:
					'One is already decided and real: <strong>Cal.com</strong>, used for the “Book a demo” lead-capture flow — it handles the name, email, and company of anyone who books a call. The rest (hosting provider, payment processor, email delivery provider) will be listed here once those vendors are chosen.'
			},
			{
				heading: '7. Data subject rights',
				bodyHtml:
					'Access, export, and deletion. The product already has self-service account deletion and data export built in for self-hosted deployments; the Cloud version will offer the same.'
			},
			{
				heading: '8. Data retention',
				bodyHtml:
					'Tied to the pricing tiers above: the Free Cloud tier keeps 3 months of history, Plus and Enterprise keep it indefinitely. “Retention” here means actual deletion, not just hiding old data from the interface.'
			},
			{
				heading: '9. Security practices',
				bodyHtml:
					'End-to-end encryption for content, plus standard practices for the metadata that is visible to us: encryption at rest and in transit, and access controls.'
			},
			{
				heading: '10. Changes to this policy',
				bodyHtml: 'Notice period and how customers are informed of changes.'
			},
			{
				heading: '11. Contact',
				bodyHtml:
					'A real contact method for privacy questions and requests will be listed here once one exists.'
			}
		]
	}
};
