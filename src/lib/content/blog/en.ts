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
	},
	{
		slug: 'v1-2-0-release',
		title: 'encrypted1on1 v1.2.0: Form Versioning, Self-Edit, and Human UX',
		subtitle:
			'How to evolve 1:1 question templates over time without breaking historical meeting records, plus author-scoped editing and date rescheduling.',
		description:
			'encrypted1on1 v1.2.0 introduces anketa form versioning to safely evolve question sets, self-edit for meeting outcomes and comments, upcoming date rescheduling, and display names.',
		date: '2026-08-25',
		formattedDate: 'August 25, 2026',
		readTime: '4 min read',
		category: 'Release',
		author: {
			name: 'Aleksejs',
			role: 'Founder & Maintainer'
		},
		tags: ['v1.2.0', 'Release', 'UX', 'Form Versioning', 'Open Source'],
		coverImage: '/images/landing/methodology-leverage.jpg',
		leadHtml:
			'Two weeks after releasing v1.0.0, we are shipping <strong>encrypted1on1 v1.2.0</strong>. This release focuses on daily usability and architectural integrity: solving the problem of evolving 1:1 question templates without distorting past meeting notes, giving participants control to edit their own contributions, and polishing core UX interactions.',
		sections: [
			{
				heading: 'The problem of historical fidelity in form templates',
				paragraphsHtml: [
					'In any 1:1 meeting tool, the question templates you use inevitably evolve. For instance, in encrypted1on1, we wanted to expand the employee check-in’s “feelings” assessment from 6 coarse emotions to 12 nuanced states (adding options like <em>calm</em>, <em>grateful</em>, <em>stressed</em>, <em>proud</em>, <em>bored</em>, and <em>lonely</em>).',
					'In standard applications, teams simply update the questions array. But in a 1:1 platform that preserves meeting history, that creates a subtle and dangerous distortion: if you change the template globally, past meetings conducted months ago are silently rendered against the new definition. An option an employee left unchecked because it did not exist at the time suddenly looks indistinguishable from an option they saw and consciously rejected.',
					'To protect historical fidelity, v1.2.0 introduces <strong>anketa form versioning</strong>. Each meeting form is stamped with <code>formVersion</code> at creation time. Historical forms stay permanently locked to schema v1, while new meetings automatically use schema v2 with the expanded feelings checklist.'
				]
			},
			{
				heading: 'Self-edit and deletion for meeting outcomes and comments',
				paragraphsHtml: [
					'A productive 1:1 meeting is dynamic: people brainstorm, refine action items on the fly, and sometimes post notes with accidental typos. Previously, once an item was committed to the shared outcomes list or discussion thread, it could not be revised.',
					'In v1.2.0, users can now edit and delete their own items in “Meeting Outcomes” and their own comments in the anketa. Crucially, this is protected by strict author-scoped security policies: participants have full freedom to refine their own words, but no user can modify or erase statements made by their counterpart.'
				]
			},
			{
				heading: 'Rescheduling upcoming meetings & display names',
				paragraphsHtml: [
					'This release also addresses everyday scheduling realities and visual clarity:',
					'<ul><li><strong>Reschedule upcoming meetings:</strong> In earlier versions, rescheduling was only exposed once a meeting was marked overdue. Now, when calendars conflict or deadlines shift, upcoming meetings can be rescheduled directly from the anketa page.</li><li><strong>Human display names:</strong> Raw email addresses and internal UUIDs across headers, counterpart cards, and meeting summaries have been replaced with friendly display names.</li><li><strong>Dark mode contrast & automated WCAG CI:</strong> Badge colors were retuned for optimal dark-mode readability, backed by an automated WCAG contrast check in our CI pipeline to prevent visual regressions.</li><li><strong>Build transparency:</strong> Self-hosters can now display the running version and git commit hash in the footer via the <code>SHOW_VERSION</code> configuration flag.</li></ul>'
				]
			},
			{
				heading: 'Deploying v1.2.0',
				paragraphsHtml: [
					'The v1.2.0 release is backwards-compatible and includes automatic database migrations for both SQLite and MySQL deployments. You can pull the container image now:',
					'<pre><code>docker pull ghcr.io/aleksejs1/encrypted1on1:1.2.0</code></pre>',
					'You can also explore all the new form options and UX refinements live without signing up at <a href="https://demo.private1on1.eu" target="_blank" rel="noopener noreferrer">demo.private1on1.eu</a>.',
					'Read the full changelog and technical discussion in the repository on <a href="https://github.com/aleksejs1/encrypted1on1/releases/tag/v1.2.0" target="_blank" rel="noopener noreferrer">GitHub</a>.'
				]
			}
		]
	},
	{
		slug: '1-on-1-question-bank-templates',
		title: 'Beyond "How’s It Going?": Introducing the 1:1 Question Bank & Templates',
		subtitle:
			'A curated collection of catalytic questions across 7 core dimensions — with the rationale behind each one and ready-to-use templates.',
		description:
			'Why 1:1 meetings get stuck in tactical status updates, and how our interactive Question Bank helps managers and team members uncover blind spots, prevent burnout, and foster growth.',
		date: '2026-09-02',
		formattedDate: 'September 2, 2026',
		readTime: '4 min read',
		category: 'Playbook',
		author: {
			name: 'Aleksejs',
			role: 'Founder & Maintainer'
		},
		tags: ['1:1 Meetings', 'Question Bank', 'Management', 'Playbook', 'Templates'],
		coverImage: '/images/playbook/high-leverage-1-on-1.jpg',
		leadHtml:
			'The most expensive mistake in engineering management is using a 1:1 meeting as a glorified status update. Today, we are opening up our interactive <a href="/playbook/questions/">1:1 Question Bank</a>: a structured repository of battle-tested prompts designed to break past superficial small talk and address what truly matters.',
		sections: [
			{
				heading: 'The "Status Update" trap',
				paragraphsHtml: [
					'We have all been in 1:1s that go nowhere: “How’s project X?” — “Good, almost merged.” — “Any blockers?” — “Nope, all fine.” Within ten minutes, both people run out of things to say and end the meeting early, feeling a vague sense of obligation fulfilled but zero real alignment gained.',
					'Status updates belong in ticketing systems, async Slack threads, and daily standups. A 1:1 meeting is the highest-leverage investment a manager can make with a team member — but only if you ask questions that pull back the surface layer and uncover systemic blockers, emotional fatigue, or unmet career ambitions.'
				]
			},
			{
				heading: '7 dimensions of high-leverage conversations',
				paragraphsHtml: [
					'Rather than giving managers an unstructured list of random icebreakers, we structured the <a href="/playbook/questions/">Question Bank</a> into seven strategic pillars:',
					'<ul><li><strong>Rapport & Energy:</strong> Establishing psychological safety and understanding the human context before jumping into technical topics.</li><li><strong>Feedback to Manager:</strong> Surfacing your own blind spots, discovering how your direct report prefers to be coached, and removing leadership friction.</li><li><strong>Team & Culture:</strong> Assessing psychological safety, peer dynamics, and team health.</li><li><strong>Bottlenecks & Process:</strong> Eliminating unnecessary meetings, broken deployment pipelines, and cross-team friction.</li><li><strong>Strategy & Purpose:</strong> Connecting daily pull requests to overall company vision, customer value, and business impact.</li><li><strong>Growth & Ambition:</strong> Long-term career progression, skill acquisition, and finding the next high-impact challenge.</li><li><strong>Capacity & Well-being:</strong> Spotting cognitive overload, hidden stress, and burnout before someone resigns.</li></ul>'
				]
			},
			{
				heading: 'The "Why ask this?" principle',
				paragraphsHtml: [
					'A good question is only as effective as the intent behind it. In our bank, every single prompt is accompanied by a dedicated <strong>“Why ask this?”</strong> breakdown.',
					'This breakdown explains what psychological dynamic the question touches, what subtle cues to listen for in the reply, and how to follow up constructively without putting the other person on the defensive.'
				]
			},
			{
				heading: 'Using the Question Bank in encrypted1on1',
				paragraphsHtml: [
					'The Question Bank is completely open and free to explore at <a href="/playbook/questions/">/playbook/questions/</a> with instant keyword search, category filters, and random inspiration tools.',
					'Even better, these questions are designed to be dropped directly into <a href="https://demo.private1on1.eu" target="_blank" rel="noopener noreferrer">encrypted1on1</a> anketas ahead of your scheduled meeting. Both manager and direct report can take time to reflect asynchronously before the call, while our zero-knowledge encryption ensures every answer remains strictly private between the two participants.'
				]
			}
		]
	},
	{
		slug: '5-essential-books-for-high-leverage-1-on-1s',
		title: 'The 1:1 Bookshelf: 5 Essential Books Every Engineering Leader Should Read',
		subtitle:
			'Distilling decades of management wisdom from Andy Grove, Ben Horowitz, Julie Zhuo, Camille Fournier, and Kim Scott into actionable 1:1 practices.',
		description:
			'Explore our curated 1:1 Bookshelf: five foundational books that defined modern management, their core 1:1 philosophies, actionable questions, and matching meeting templates.',
		date: '2026-09-10',
		formattedDate: 'September 10, 2026',
		readTime: '5 min read',
		category: 'Playbook',
		author: {
			name: 'Aleksejs',
			role: 'Founder & Maintainer'
		},
		tags: ['Bookshelf', '1:1 Meetings', 'Management', 'Leadership', 'Books'],
		coverImage: '/images/playbook/manager-playbook.jpg',
		leadHtml:
			'Great management is rarely invented from scratch in a vacuum. The principles that make 1:1 meetings transformative — psychological safety, employee-led agendas, early detection of systemic bottlenecks, and radical candor — have been tested and refined by legendary leaders across decades. Today, we are excited to launch our interactive <a href="/playbook/books/">1:1 Bookshelf</a>.',
		sections: [
			{
				heading: 'Why we built a dedicated 1:1 bookshelf',
				paragraphsHtml: [
					'Most leadership books span hundreds of pages covering corporate strategy, hiring funnels, and organizational politics. Yet when experienced managers look back on what created the highest daily leverage, they almost unanimously point to the chapters on one-on-one meetings.',
					'To help busy engineering leaders tap into these insights without wading through hundreds of pages of theory, we built the interactive <a href="/playbook/books/">1:1 Bookshelf</a>. We distilled five foundational texts down to their core 1:1 philosophy, key operating principles, concrete questions to ask, and direct pairings with practical templates in our Playbook.'
				]
			},
			{
				heading: 'The 5 foundational works',
				paragraphsHtml: [
					'The bookshelf features five seminal titles that shaped modern technical leadership:',
					'<ul><li><strong>High Output Management by Andy Grove (1983):</strong> The foundational classic of Silicon Valley. Grove introduced the revolutionary idea that a manager’s output equals the output of their team, and that 90 minutes of focused 1:1 time enhances 80 hours of subordinate work — an unparalleled >50x time leverage. Crucially, Grove established that <em>the 1:1 is the employee’s meeting</em>.</li><li><strong>The Hard Thing About Hard Things by Ben Horowitz (2014):</strong> The definitive guide on crisis leadership. Horowitz positions the 1:1 as the essential organizational safety valve. In high-growth companies, good news travels fast while bad news travels slowly; regular 1:1s are where leaders discover small fires before they become catastrophic emergencies.</li><li><strong>The Making of a Manager by Julie Zhuo (2019):</strong> The modern blueprint for empathetic management. Zhuo deconstructs 1:1s into four essential domains: establishing psychological safety, diagnosing real priorities, unblocking difficult challenges, and calibrating long-term ambitions.</li><li><strong>The Manager’s Path by Camille Fournier (2017):</strong> The definitive roadmap for engineering leadership. Fournier explores the technical nuances of 1:1s — mentoring junior developers, supporting Staff+ individual contributors, and balancing technical debt with product velocity. She explicitly warns that an engineer claiming <em>"I have nothing to talk about"</em> is a flashing red signal of disengagement.</li><li><strong>Radical Candor by Kim Scott (2017):</strong> Combining personal care with direct challenge. Scott frames the 1:1 as the private forge where trust is built. Crucially, she emphasizes asking for critical feedback on your own leadership before handing out critique to others.</li></ul>'
				]
			},
			{
				heading: 'From philosophy to real meeting agendas',
				paragraphsHtml: [
					'A leadership book is useless if its lessons stay on paper. For each featured book, the <a href="/playbook/books/">Bookshelf</a> provides battle-tested questions you can immediately use in your next meeting, along with matching Playbook agendas:',
					'<ul><li>Grove’s leverage methodology pairs directly with our <a href="/playbook/high-leverage-1-on-1/">High-Leverage 1:1 Manifesto</a>.</li><li>Horowitz’s organizational health insights connect to our <a href="/playbook/skip-level/">Skip-Level 1:1 Health Check</a>.</li><li>Zhuo’s trust-building practices power our <a href="/playbook/first-1-on-1/">First 1:1: Expectations & Trust</a> template.</li><li>Fournier’s career ladder framework informs our <a href="/playbook/career-growth/">Quarterly Career & Growth Check-in</a>.</li><li>Scott’s feedback and burnout techniques inspire our <a href="/playbook/burnout-detection/">Overwhelm & Burnout Triage</a> guide.</li></ul>'
				]
			},
			{
				heading: 'Putting it into practice with encrypted1on1',
				paragraphsHtml: [
					'The true barrier to high-leverage 1:1s is rarely a lack of good intentions — it is lack of preparation and mutual psychological safety. When meetings are scheduled without a collaborative, confidential space, conversations inevitably collapse into superficial status recaps.',
					'With <a href="https://demo.private1on1.eu" target="_blank" rel="noopener noreferrer">encrypted1on1</a>, managers and team members can choose proven questions from these classic works, prepare reflections asynchronously, and maintain complete confidence that their candid thoughts are shielded by zero-knowledge end-to-end encryption.',
					'Explore all five books, read the executive summaries, and grab ready-made questions at <a href="/playbook/books/">/playbook/books/</a>.'
				]
			}
		]
	},
	{
		slug: 'meeting-templates-playbook-and-form-templates-preview',
		title: 'The 1:1 Meeting Playbook: Battle-Tested Agendas (And What’s Next for encrypted1on1)',
		subtitle:
			'Explore our comprehensive library of structured 1:1 templates — and a sneak peek at upcoming native form templates in the platform.',
		description:
			'From first 1:1s to burnout triage and career growth: explore our interactive Playbook meeting agendas, plus an exclusive preview of native form templates coming soon to encrypted1on1.',
		date: '2026-09-16',
		formattedDate: 'September 16, 2026',
		readTime: '5 min read',
		category: 'Playbook',
		author: {
			name: 'Aleksejs',
			role: 'Founder & Maintainer'
		},
		tags: ['Playbook', 'Templates', '1:1 Meetings', 'Roadmap', 'Product Update'],
		coverImage: '/images/playbook/bi-weekly-pulse.jpg',
		leadHtml:
			'No two 1:1 meetings should look identical. A sync with a newly hired engineer demands completely different questions than a quarterly career conversation with a Staff architect or a crisis triage with an overwhelmed teammate. Today, we are spotlighting our <a href="/playbook/">1:1 Meeting Playbook</a> — and sharing an exciting preview of what is coming next to encrypted1on1.',
		sections: [
			{
				heading: 'Why one-size-fits-all 1:1s fail',
				paragraphsHtml: [
					'The most common pitfall in modern engineering management is relying on a single, unstructured conversation format for every meeting. Over time, open-ended chats inevitably deteriorate into superficial status reports: <em>"What are you working on? Any blockers? Okay, see you next week."</em>',
					'High-impact leaders recognize that team members move through distinct operational seasons. An effective 1:1 adapts its agenda to the context at hand — whether that is building psychological safety during onboarding, unblocking day-to-day execution, charting multi-year career paths, or navigating urgent burnout.'
				]
			},
			{
				heading: '6 battle-tested Playbook templates',
				paragraphsHtml: [
					'Our <a href="/playbook/">Playbook</a> organizes proven meeting agendas across six strategic scenarios:',
					'<ul><li><strong><a href="/playbook/high-leverage-1-on-1/">The High-Leverage 1:1 Manifesto:</a></strong> The foundational framework rooted in Andy Grove’s management mathematics. A 4-pillar agenda balancing emotional energy, friction removal, strategic alignment, and reciprocal coaching.</li><li><strong><a href="/playbook/first-1-on-1/">The First 1:1: Expectations & Trust:</a></strong> A vital template for new hires and reorganizations. Establishes psychological safety, discovers individual communication preferences, and aligns on operating norms in the first 30 days.</li><li><strong><a href="/playbook/bi-weekly-pulse/">Bi-Weekly Pulse Check:</a></strong> The workhorse cadence for high-performing teams. Maintains momentum, catches emerging blockers before they escalate, and tracks action commitments from cycle to cycle.</li><li><strong><a href="/playbook/career-growth/">Quarterly Career & Growth Check-in:</a></strong> A forward-looking conversation decoupled from tactical sprint pressure. Explores skill acquisition, trajectory along the technical dual ladder, and high-impact stretch assignments.</li><li><strong><a href="/playbook/burnout-detection/">Overwhelm & Burnout Triage:</a></strong> A compassionate framework for detecting cognitive overload and hidden stress before someone reaches a breaking point. Guides immediate workload shedding and sustainable rebalancing.</li><li><strong><a href="/playbook/skip-level/">Skip-Level 1:1: Health Check:</a></strong> For Directors, VPs, and founders seeking an unfiltered pulse on organizational culture, cross-team friction, and strategic clarity from front-line engineers.</li></ul>'
				]
			},
			{
				heading: 'Built for practical execution',
				paragraphsHtml: [
					'Each playbook item is designed to be immediately applicable on your calendar, featuring:',
					'<ul><li><strong>Timed agenda blocks:</strong> Suggested minute allocations so meetings stay focused without feeling rushed.</li><li><strong>Curated conversation prompts:</strong> Catalytic, non-defensive questions that spark genuine reflection.</li><li><strong>Preparation & anti-patterns:</strong> Concrete advice on how both manager and report should prepare beforehand, alongside classic antipatterns to avoid.</li><li><strong>1-click "Copy Agenda" button:</strong> Seamlessly grab the complete markdown agenda to paste into your calendar invite or personal notes.</li></ul>'
				]
			},
			{
				heading: 'Sneak peek: Native form templates coming to encrypted1on1',
				paragraphsHtml: [
					'While our Playbook provides structured agendas to inspire your calendar, we believe true managerial continuity happens when structure lives directly inside your meeting workflow.',
					'Today, encrypted1on1 provides a rock-solid, versioned questionnaire with emotional check-ins, priorities, and action agreements. But different conversations require different questions.',
					'We are thrilled to announce that we are actively developing <strong>native support for form templates</strong> in encrypted1on1! Soon, when creating or scheduling a meeting, you will be able to select from specialized questionnaire templates matching our Playbook scenarios — or build and customize your own team-specific templates — all protected by our zero-knowledge end-to-end encryption.',
					'Explore all the templates today at <a href="/playbook/">/playbook/</a>, and stay tuned for the upcoming platform release!'
				]
			}
		]
	},
	{
		slug: 'v1-3-0-release',
		title: 'encrypted1on1 v1.3.0: Built-in Meeting Templates and One-Off Anketas',
		subtitle:
			'Introducing specialized 1:1 question templates for onboarding, quarterly career growth, and workload support, paired with non-forking one-off meeting chains.',
		description:
			'encrypted1on1 v1.3.0 introduces native meeting templates (onboarding, career growth, support check-in), one-off anketas that preserve recurring chains, and Markdown support in free-text answers.',
		date: '2026-09-24',
		formattedDate: 'September 24, 2026',
		readTime: '4 min read',
		category: 'Release',
		author: {
			name: 'Aleksejs',
			role: 'Founder & Maintainer'
		},
		tags: ['v1.3.0', 'Release', 'Templates', '1:1 Meetings', 'Open Source'],
		coverImage: '/images/landing/privacy-infrastructure.jpg',
		leadHtml:
			'Just a month after introducing form versioning in v1.2.0, we are thrilled to announce <strong>encrypted1on1 v1.3.0</strong>. This milestone release brings one of our most requested capabilities: <strong>native meeting templates</strong> directly within the anketa workflow, alongside architectural support for non-forking <strong>one-off meetings</strong> and Markdown formatting in text answers.',
		sections: [
			{
				heading: '4 specialized meeting templates',
				paragraphsHtml: [
					'A single question set cannot serve every managerial moment. In v1.3.0, whenever you create an anketa, you can choose from four purpose-built meeting templates:',
					'<ul><li><strong>Regular 1:1:</strong> The proven classic format for recurring check-ins — energy & feelings check, achievements, topics for discussion, and shared outcomes.</li><li><strong>Onboarding (First 1:1):</strong> Designed for new hires and team reorganizations. Focuses on establishing psychological safety, mutual working agreements, personal communication preferences, and a "fresh-eyes" audit of company processes.</li><li><strong>Career & Growth:</strong> Tailored for quarterly development conversations. Features an energy retrospective across recent projects, a 3-way trajectory calibration (deepening current mastery, people leadership, or lateral breadth), a concrete 90-day action plan, and explicit manager sponsorship commitments.</li><li><strong>Support & Workload Check-in:</strong> Formatted for moments of high stress or burnout risk. Framed collaboratively rather than clinically, this template guides tactical workload triage, identifies energy drains, clarifies boundaries, and establishes immediate manager support actions.</li></ul>'
				]
			},
			{
				heading: 'Smart cycle transitions: specialized templates don’t get stuck',
				paragraphsHtml: [
					'A common flaw in template systems is that choosing a quarterly review format accidentally turns every future meeting into a quarterly review. To prevent this, v1.3.0 implements automatic cycle transitions.',
					'When an anketa using a specialized template (such as <code>career_growth</code> or <code>support_checkin</code>) is archived, its auto-scheduled successor automatically transitions back to <code>regular</code>. The specialized review happens when needed, while your regular operational rhythm resumes seamlessly without manual re-configuration.',
					'In addition, active meetings with non-standard templates are clearly badged in the meeting list so both manager and employee know exactly what type of conversation is scheduled.'
				]
			},
			{
				heading: 'One-off anketas: ad-hoc meetings without chain forking',
				paragraphsHtml: [
					'In previous releases, creating a new anketa when one was already open would create a split in the pair’s meeting history — resulting in diverging goal lists and multiple meetings auto-recreating themselves in parallel.',
					'v1.3.0 solves this with a new <strong>one-off anketa</strong> architecture (<code>oneOff: true</code>). When you schedule a meeting alongside an existing open anketa, the new meeting is treated as an isolated one-off: it does not fork the carried-forward commitments, and archiving it does not generate an unneeded successor. Your recurring bi-weekly chain remains intact.'
				]
			},
			{
				heading: 'Markdown support and live updates',
				paragraphsHtml: [
					'Between v1.2.0 and v1.3.0, we also rolled out several quality-of-life enhancements now consolidated in this release:',
					'<ul><li><strong>Markdown in text answers:</strong> Free-text fields now support Markdown rendering for bold text, bulleted lists, and code blocks, making complex technical feedback easy to format.</li><li><strong>Live updates during meetings:</strong> Real-time synchronization ensures that when your counterpart updates their answers or adds an outcome during a call, your view stays up to date without page refreshes.</li><li><strong>Multi-language parity:</strong> All new templates and labels are fully translated across English, Russian, Latvian, German, Spanish, and French.</li></ul>'
				]
			},
			{
				heading: 'Deploying v1.3.0',
				paragraphsHtml: [
					'Version 1.3.0 is a smooth upgrade with automatic database migrations for both SQLite and MySQL. Pull the latest container:',
					'<pre><code>docker pull ghcr.io/aleksejs1/encrypted1on1:1.3.0</code></pre>',
					'You can test the new template picker and check-in flows right now in our live demo at <a href="https://demo.private1on1.eu" target="_blank" rel="noopener noreferrer">demo.private1on1.eu</a>.',
					'View the complete source code and release notes on <a href="https://github.com/aleksejs1/encrypted1on1/releases/tag/v1.3.0" target="_blank" rel="noopener noreferrer">GitHub</a>.'
				]
			}
		]
	},
	{
		slug: 'why-1-on-1-notes-should-not-live-in-notion-or-slack',
		title: 'Why 1:1 Notes Shouldn’t Live in Corporate Notion or Slack: The Cost of Candor',
		subtitle:
			'How the illusion of corporate privacy triggers self-censorship, creates legal liabilities, and why leaders need a two-circuit architecture.',
		description:
			'Why 1:1 notes in corporate Notion and Slack destroy psychological safety, how admin exports and eDiscovery operate, and why candor requires separation of concerns.',
		date: '2026-10-04',
		formattedDate: 'October 4, 2026',
		readTime: '7 min read',
		category: 'Leadership & Security',
		author: {
			name: 'Aleksejs',
			role: 'Founder & Maintainer'
		},
		tags: ['1:1 Meetings', 'Privacy', 'Psychological Safety', 'Management', 'Zero-Knowledge'],
		coverImage: '/images/blog/cost-of-candor-cover.jpg',
		leadHtml:
			'Every modern management book preaches vulnerability, radical candor, and psychological safety. Engineering leads set up neat 1:1 templates in a "private" Notion folder or a Slack direct message, only to wonder why conversations quickly degenerate into status reports about Jira tickets. The culprit isn’t introversion or reluctance: employees are perceptive enough to know that corporate clouds have zero attorney-client privilege and no real secrecy.',
		sections: [
			{
				heading: 'The Transparency Paradox: how surveillance kills candor',
				paragraphsHtml: [
					'In 2012, Harvard Business School professor Ethan Bernstein published groundbreaking research titled <em>“The Transparency Paradox”</em> in Administrative Science Quarterly, followed by his influential Harvard Business Review essay <em>“The Transparency Trap”</em>. Bernstein investigated employee behavior under varying levels of visibility and discovered a counterintuitive truth: <strong>excessive transparency and continuous observability systematically degrade performance and shut down honest dialogue</strong>.',
					'When employees know their words or notes are observable from above, they stop experimenting and retreat into "performing for observers". In open areas, people stage compliance and recite textbook answers. Only behind curtains — within sheltered spaces — do people take risks, solve thorny problems, and speak plainly. Bernstein concluded that for organizational learning to occur, teams strictly require <strong>"zones of privacy"</strong>.',
					'A 1:1 meeting was originally conceived as such a zone of privacy. In Amy Edmondson’s research on <em>The Fearless Organization</em>, psychological safety is defined as the belief that one will not be punished or humiliated for speaking up with ideas, questions, concerns, or mistakes. But as soon as meeting notes are committed to corporate SaaS systems, the <strong>chilling effect</strong> takes over. Self-censorship kicks in, and the 1:1 loses the 50x managerial leverage Andy Grove described in <em>High Output Management</em>.'
				]
			},
			{
				heading: 'The technical illusion: what’s behind the "Private" lock icon',
				paragraphsHtml: [
					'Many leaders comfort themselves thinking: "We set page permissions to Only Me and Direct Report — nobody else can see this." In corporate SaaS infrastructure, this is a dangerous misconception.',
					'<ul><li><strong>Notion Enterprise & Workspace Owners:</strong> Notion’s enterprise documentation is clear: Workspace Owners have complete administrative jurisdiction over all stored data. The Workspace Content Export feature allows administrators to export the entire workspace, <em>including pages created in users’ private sections</em>. Furthermore, when an employee leaves, an admin can transfer their private pages to another teammate with a single click, exposing years of candid reflections to unintended eyes.</li><li><strong>Slack Compliance Exports & Background DLP:</strong> On Slack Plus and Enterprise Grid tiers, administrators have access to Compliance Exports, legally and invisibly archiving private channels and 1:1 Direct Messages. Through the Slack Discovery API, third-party Data Loss Prevention (DLP) engines scan direct chats in real time.</li><li><strong>Corporate AI & RAG Permission Leakage:</strong> With Slack AI, Notion AI, and Microsoft Copilot indexing corporate workspaces, large language models continuously ingest company documents. A subtle misconfiguration in permission inheritance (over-permissioning) or a prompt injection can prompt the AI to quote a confidential 1:1 snippet in response to an unrelated query from a peer.</li></ul>'
				]
			},
			{
				heading: 'The legal & HR trap: when working drafts become a smoking gun',
				paragraphsHtml: [
					'Keeping unvarnished 1:1 notes in corporate repositories is not just a cultural issue; it represents significant legal exposure for HR and the company.',
					'Under legal discovery rules (such as Federal Rules of Civil Procedure 26 and 34 in US litigation, and common law equivalents worldwide), all corporate records qualify as Electronically Stored Information (ESI). If a former employee files a claim regarding wrongful termination, discrimination, retaliation, or disputed bonuses, a court subpoena compels the company to produce all manager notes.',
					'During emotional check-ins, well-meaning managers often jot down hurried, subjective thoughts: <em>"Seems unfocused, maybe struggling with family/health issues"</em> or <em>"Frustrated by repeated complaints about overtime"</em>. In the hands of opposing counsel, these informal reflections become a textbook <strong>smoking gun</strong>, transforming ordinary management coaching into evidence of discrimination or hostile workplace conditions.',
					'In Europe, under <strong>Article 9 of the GDPR</strong>, details regarding physical or mental health (burnout, therapy, chronic illness, bereavement) represent special category data. Storing unencrypted health observations in a company-wide SaaS wiki without explicit consent or auditable controls constitutes a serious regulatory violation.'
				]
			},
			{
				heading: 'The two-circuit architecture: a practical guide for managers and HR',
				paragraphsHtml: [
					'The answer is not to abandon notes entirely. Without continuity, agreements evaporate within weeks, and biannual performance reviews devolve into hazy guesswork. The solution is architectural: <strong>Separation of Concerns</strong>.',
					'<figure><img src="/images/blog/two-circuits-model-en.svg" alt="The Two-Circuit Architecture: Separating the private trust space (E2EE) from the corporate system of record" width="780" height="1010" loading="lazy" /><figcaption>The Two-Circuit Architecture: an encrypted trust space for candid check-ins and an official company system of record for approved milestones</figcaption></figure>',
					'<ul><li><strong>Circuit 1: The Trust Space (Zero-Knowledge / E2EE):</strong> A client-side end-to-end encrypted platform where cryptographic keys reside exclusively on the devices of the manager and the direct report. This is where vulnerable discussions happen: real energy levels, interpersonal friction, process doubts, and unvarnished career sketches. Neither HR, nor workspace admins, nor corporate LLMs have mathematical access to this plaintext.</li><li><strong>Circuit 2: The System of Record:</strong> The formal corporate HRIS, BambooHR, Lattice, or company wiki. Here, the manager and employee <em>collaboratively crystallize</em> only official, agreed-upon artifacts: quarterly OKRs, structured personal development plans (PDP), and formal review summaries.</li></ul>',
					'HR leadership does not need — and should not legally want — to read raw personal confessions. To monitor management health, HR needs <strong>metadata</strong>: Are 1:1 cadences maintained bi-weekly? Are cancellations flagged? What is the completion rate of agreed developmental milestones? This guarantees process governance without surveillance.'
				]
			},
			{
				heading: 'The bottom line',
				paragraphsHtml: [
					'A culture of candor cannot be mandated through HR handbooks. It requires concrete boundaries. When organizations ask employees to pour their vulnerabilities into tools equipped with an admin export button, the inevitable outcome is silence, performative conformity, and sudden turnover of key talent.',
					'True candor thrives only when psychological safety is reinforced by mathematical guarantees — where trust is backed by cryptography, not empty promises.'
				]
			},
			{
				heading: 'References and further reading',
				paragraphsHtml: [
					'<ol><li><strong>Bernstein, Ethan S.</strong> (2012). <em>“The Transparency Paradox: A Role for Privacy in Organizational Learning and Operational Control”</em>. Administrative Science Quarterly, 57(2), 181–216.</li><li><strong>Bernstein, Ethan S.</strong> (2014). <a href="https://hbr.org/2014/10/the-transparency-trap" target="_blank" rel="noopener noreferrer"><em>“The Transparency Trap”</em></a>. Harvard Business Review, October 2014.</li><li><strong>Edmondson, Amy C.</strong> (2018). <a href="https://amycedmondson.com/books/" target="_blank" rel="noopener noreferrer"><em>“The Fearless Organization: Creating Psychological Safety in the Workplace for Learning, Innovation, and Growth”</em></a>. John Wiley & Sons.</li><li><strong>Grove, Andrew S.</strong> (1983). <em>“High Output Management”</em>. Random House (Managerial leverage in 1:1 meetings).</li><li><strong>Google re:Work</strong>. <a href="https://rework.withgoogle.com/intl/en/guides/understand-team-effectiveness/" target="_blank" rel="noopener noreferrer"><em>“Project Aristotle (Psychological Safety in Teams) & Project Oxygen (Key Attributes of Effective Managers)”</em></a>.</li><li><strong>Notion Help Center</strong>. <a href="https://www.notion.so/help/export-your-content" target="_blank" rel="noopener noreferrer"><em>“Export your content & Workspace-wide export in Enterprise Plan”</em></a>.</li><li><strong>Slack Help Center & Discovery API</strong>. <a href="https://slack.com/help/articles/201658943-Export-your-workspace-data" target="_blank" rel="noopener noreferrer"><em>“Export your workspace data”</em></a> and <a href="https://slack.com/help/articles/360002079527-A-guide-to-Slacks-Discovery-APIs" target="_blank" rel="noopener noreferrer"><em>“A guide to Slack’s Discovery APIs for DLP / eDiscovery”</em></a>.</li><li><strong>The Sedona Conference</strong>. <a href="https://thesedonaconference.org/" target="_blank" rel="noopener noreferrer"><em>“Commentary on Legal Holds and ESI in Employment Disputes”</em></a> / <a href="https://www.law.cornell.edu/rules/frcp/rule_34" target="_blank" rel="noopener noreferrer"><em>Federal Rules of Civil Procedure (FRCP Rules 26 & 34)</em></a>.</li><li><strong>European Union (GDPR)</strong>. <a href="https://gdpr-info.eu/art-9-gdpr/" target="_blank" rel="noopener noreferrer"><em>“General Data Protection Regulation — Article 9 (Special categories of data)”</em></a>.</li></ol>'
				]
			}
		]
	}
];

