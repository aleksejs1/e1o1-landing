import type { BlogPost, BlogUiStrings } from './types';

export const blogUiEn: BlogUiStrings = {
	blogTitle: 'Blog & Engineering Notes',
	blogSubtitle:
		'Reflections on 1:1 meeting methodology, cognitive load in engineering teams, and building zero-knowledge software.',
	latestArticles: 'Latest articles',
	readArticle: 'Read article',
	backToBlog: 'Back to Blog',
	publishedOn: 'Published on',
	writtenBy: 'Written by',
	shareArticle: 'Share article',
	linkCopied: 'Link copied to clipboard!',
	tryDemoTitle: 'Experience private 1:1s with zero paper trail',
	tryDemoBody:
		'encrypted1on1 keeps your meeting notes and goals mathematically private with browser-side encryption. No one on the server can read your discussions.',
	tryDemoCta: 'Try live demo without signup',
	moreArticles: 'More from the blog'
};

export const blogPostsEn: BlogPost[] = [
	{
		slug: 'why-we-built-encrypted1on1',
		title: 'Why we built encrypted1on1',
		subtitle: 'The realization that 1:1 meeting notes need mathematics, not privacy policies.',
		description:
			'Why 1:1 meeting notes contain a company’s most sensitive conversations, and why “we promise not to look” isn’t a strong enough guarantee.',
		date: '2026-08-09',
		formattedDate: 'August 9, 2026',
		readTime: '4 min read',
		category: 'Manifesto',
		author: {
			name: 'Aleksejs',
			role: 'Founder & Maintainer'
		},
		tags: ['Security', 'Zero-Knowledge', '1:1 Meetings', 'Open Source'],
		leadHtml:
			'We didn’t set out to build another SaaS tool. We started as a customer. This is the story of how a small vendor shutdown forced us to look at where 1:1 notes really live.',
		sections: [
			{
				heading: 'Starting as a customer',
				paragraphsHtml: [
					'Our organization ran its 1:1 process through a third-party tool — one of the many well-designed, well-intentioned products in this space. It did its job well.',
					'Then, like a lot of small vendors eventually do, it announced it was shutting down. That’s normal. Startups exit, business models pivot, small tools get sunsetted.',
					'What wasn’t normal was what it made us realize: we’d never actually asked ourselves what a vendor shutdown <em>means</em> for the content of a 1:1 meeting.'
				]
			},
			{
				heading: 'What lives inside a 1:1 meeting',
				paragraphsHtml: [
					'Think about what actually gets written down during high-leverage 1:1s over the course of a year. Performance concerns someone raised in confidence. A manager’s private notes on a direct report’s career trajectory. Candid compensation conversations. Family circumstances an employee disclosed expecting it to stay strictly between two people.',
					'None of that content is ever supposed to be visible to anyone beyond the two participants — not their skip-level manager, not HR by default, not IT, and, as we realized with some discomfort, not really <em>the vendor either</em>, even though the vendor could, technically, always see it in plaintext.'
				]
			},
			{
				heading: 'The shutdown test: why promises aren’t enough',
				paragraphsHtml: [
					'A shutdown is exactly the moment when a company’s data-handling practices get tested hardest: support staff doing database exports, an acquirer doing technical due diligence, a skeleton crew winding things down under deadline pressure.',
					'We had no reason to think anything bad would happen with our data specifically. But we also had no way to <em>know</em> that it wouldn’t — because the entire model was “trust us,” and “us” was a company actively going out of business.'
				]
			},
			{
				heading: 'Mathematics instead of privacy policies',
				paragraphsHtml: [
					'That’s the gap we decided was worth closing properly, not just for our own organization, but as something anyone in the same position could actually verify for themselves rather than take on faith.',
					'If a 1:1 platform is going to hold some of the most sensitive conversations a company has, “we promise not to look” isn’t a strong enough guarantee. The only guarantee strong enough is one where looking is <em>not possible</em> — where the operator, the IT team, the company that self-hosts it, and even a full server compromise, gets nothing but ciphertext.',
					'That’s not a policy. That’s end-to-end encryption, done properly, with open source code so anyone can verify the cryptographic claims for themselves.',
					'<strong>encrypted1on1 is what came out of that.</strong>'
				]
			}
		]
	},
	{
		slug: 'v1-0-0-release',
		title: 'encrypted1on1 v1.0.0: The First Stable Release',
		subtitle:
			'End-to-end encrypted 1:1 meetings, asynchronous prep, goal continuity, and production Docker deployment.',
		description:
			'Announcing encrypted1on1 v1.0.0: the first stable release of our self-hosted, zero-knowledge 1:1 meeting platform. Docker images, client-side encryption proof, and live demo.',
		date: '2026-08-16',
		formattedDate: 'August 16, 2026',
		readTime: '5 min read',
		category: 'Release',
		author: {
			name: 'Aleksejs',
			role: 'Founder & Maintainer'
		},
		tags: ['v1.0.0', 'Release', 'Docker', 'Open Source', 'Security'],
		coverImage: '/images/landing/privacy-infrastructure.jpg',
		leadHtml:
			'Today marks a major milestone: we are officially releasing <strong>encrypted1on1 v1.0.0</strong> — our first stable production release. It provides teams with a dedicated, structured space for 1:1 meetings where the server never sees your plaintext notes, feedback, or goals.',
		sections: [
			{
				heading: 'Why 1:1 meetings need zero-knowledge architecture',
				paragraphsHtml: [
					'1:1 meetings between managers and team members are where a company’s most sensitive conversations happen. Performance concerns shared in confidence, compensation and promotion plans, burnout signals, and deeply personal circumstances.',
					'Conventional internal wikis, docs, and cloud SaaS tools ask everyone to rely on trust: trust that database backups won’t leak, trust that vendor staff won’t peek, and trust that IT administrators won’t inspect private conversations.',
					'With encrypted1on1, we replaced trust with mathematics. All meeting content is encrypted client-side in the browser before reaching the server. Even whoever operates the server or owns the database has zero access to the plaintext.'
				]
			},
			{
				heading: 'What’s new in v1.0.0',
				paragraphsHtml: [
					'The v1.0.0 release represents months of architectural iteration, security hardening, and real-world usage. Here is what is included out of the box:',
					'<ul><li><strong>End-to-end encrypted “anketas” (1:1 meeting forms):</strong> X25519 keypairs per participant, XChaCha20-Poly1305 symmetric authenticated encryption for content, and Argon2id password-based key derivation.</li><li><strong>Asynchronous preparation:</strong> Managers and direct reports fill in feedback, priorities, blockers, and mood/workload self-assessments ahead of the call.</li><li><strong>Goal continuity across cycles:</strong> Goals and checkpoints carry forward automatically into subsequent meeting cycles until archived or completed.</li><li><strong>Privacy-preserving trend reports:</strong> A multi-cycle report view with mood and goal-progress sparklines rendered via inline SVG entirely client-side — no tracking scripts, no charting libraries, no server-side plaintext aggregation.</li><li><strong>Production account controls:</strong> Configurable registration modes (invite-only, admin-only, or domain-restricted self-registration with double opt-in), in-app password changes, and full client-side decrypted JSON data exports.</li></ul>'
				]
			},
			{
				heading: 'Engineered for verifiable security',
				paragraphsHtml: [
					'We designed encrypted1on1 with defense-in-depth principles across the entire stack:',
					'<ul><li><strong>Black-box privacy test suite:</strong> Dual-actor Playwright end-to-end tests that run real browser cryptography, make live API requests, and inspect raw database records to mathematically assert that no plaintext ever reaches disk or network payloads.</li><li><strong>Strict security headers:</strong> Content Security Policy (CSP) with Subresource Integrity (SRI) on all bundled assets, and enforced HSTS.</li><li><strong>Hardened production container:</strong> Runs as a non-privileged user on FrankenPHP + Caddy with automatic HTTPS and built-in healthchecks.</li><li><strong>High-performance storage:</strong> SQLite with Write-Ahead Logging (WAL) enabled by default for rapid concurrent writes, plus a validated migration path to MySQL for large installations.</li></ul>'
				]
			},
			{
				heading: 'Getting started & Docker deployment',
				paragraphsHtml: [
					'Deploying encrypted1on1 takes just one command using our official production image published to the GitHub Container Registry:',
					'<pre><code>docker pull ghcr.io/aleksejs1/encrypted1on1:1.0.0</code></pre>',
					'If you want to experience the workflow before self-hosting, check out the live sandbox at <a href="https://demo.private1on1.eu" target="_blank" rel="noopener noreferrer">demo.private1on1.eu</a> — it requires no registration and includes pre-populated meeting history in all supported languages.',
					'The complete source code is licensed under <strong>AGPLv3</strong> and available on <a href="https://github.com/aleksejs1/encrypted1on1" target="_blank" rel="noopener noreferrer">GitHub</a>.'
				]
			}
		]
	}
];
