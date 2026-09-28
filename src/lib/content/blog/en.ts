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
	}
];
