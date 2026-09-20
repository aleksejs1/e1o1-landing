import type { PlaybookItem, CategoryMeta } from './types';

export const categoriesEn: CategoryMeta[] = [
	{
		id: 'foundations',
		label: 'Foundations',
		description: 'Core management philosophy, leverage calculations, and empirical research.'
	},
	{
		id: 'onboarding',
		label: 'Onboarding',
		description: 'Starting relationships with clarity, alignment, and trust.'
	},
	{
		id: 'regular',
		label: 'Regular Syncs',
		description: 'Bi-weekly routines that maintain momentum and surface blockers early.'
	},
	{
		id: 'growth',
		label: 'Career & Growth',
		description: 'Quarterly conversations on personal development, trajectory, and impact.'
	},
	{
		id: 'difficult',
		label: 'Tough Moments',
		description: 'Navigating overload, burnout, and critical feedback with empathy.'
	},
	{
		id: 'leadership',
		label: 'Leadership',
		description: 'Skip-levels and strategic alignment across organizational boundaries.'
	}
];

export const playbookItemsEn: PlaybookItem[] = [
	{
		slug: 'high-leverage-1-on-1',
		title: 'The High-Leverage 1:1: The Manifesto for Meaningful Meetings',
		subtitle:
			'Why 90% of one-on-ones devolve into boring status reports, and how to turn them into your team’s highest-impact managerial lever.',
		category: 'foundations',
		readTime: '6 min read',
		cadence: 'Foundational framework for every recurring cycle',
		duration: '30–45 minutes',
		targetAudience: 'Engineering Managers, Tech Leads, Directors & CTOs',
		summaryHtml:
			'The 1:1 is not an administrative burden or a status interrogation. It is the single highest-leverage activity on a manager’s calendar. When run with consistency, continuity, and end-to-end privacy, it prevents burnout, supercharges retention, and surfaces problems weeks before they hit a dashboard.',
		whyItMattersHtml:
			'<p><strong>The Status Update Trap:</strong> Most managers waste 1:1s doing verbally what Jira, Slack, or GitHub issues already do in text: asking <em>"what did you do yesterday, and what are you doing today?"</em>. When a 1:1 becomes a status meeting, both parties disengage. Real blockers stay buried, and psychological safety evaporates.</p><p><strong>The Andy Grove Mathematics:</strong> In <em>High Output Management</em>, Andy Grove famously calculated managerial leverage: ninety minutes of a manager’s time in a well-run 1:1 can enhance the quality of an engineer’s work for eighty hours between meetings. That is a >50x return on investment. The purpose is not to inspect work, but to transmit shared context, coach thinking, and remove impediments.</p><p><strong>The Google Project Oxygen Finding:</strong> Google’s multi-year study into managerial effectiveness analyzed tens of thousands of data points. They discovered that holding frequent, structured 1:1s focused on personal well-being and coaching was the single strongest predictor of high manager ratings. Technical expertise ranked dead last among the identified behaviors.</p><p><strong>The Continuity Gap:</strong> A shared document or empty Notion page holds notes, but not a process. Commitments made in May are forgotten by July. When performance review season arrives, managers scramble through months of fragmented memory. High-leverage 1:1s require automatic continuity: goals and commitments that carry forward across cycles until explicitly resolved.</p><p><strong>Privacy as a Prerequisite for Truth:</strong> Vulnerability cannot exist without absolute confidentiality. When notes live in SaaS tools where IT admins, skip-levels, or third-party vendors can peek, people censor themselves. True end-to-end encryption is what unlocks raw, unvarnished honesty.</p>',
		agenda: [
			{
				title: 'Pillar 1: Pulse & Energy (5 min)',
				durationMinutes: 5,
				description: 'Gauge human bandwidth and emotional state before touching work topics.',
				questions: [
					'What is your current energy level on a 1–5 scale?',
					'What was the most energizing moment of your week, and what was the most draining?'
				]
			},
			{
				title: 'Pillar 2: Unblocking & Removing Friction (15 min)',
				durationMinutes: 15,
				description: 'Identify what is slowing them down or causing systemic pain.',
				questions: [
					'What bottleneck or cross-team dependency is actively holding you back?',
					'What is one decision or process this week that felt unnecessarily slow or frustrating?'
				]
			},
			{
				title: 'Pillar 3: Forward Alignment & Career Trajectory (15 min)',
				durationMinutes: 15,
				description: 'Connect daily tasks with broader purpose and personal aspirations.',
				questions: [
					'How does the work you are doing right now fit into the skills you want to develop this year?',
					'Are you getting the right level of challenge, or does your current load feel repetitive?'
				]
			},
			{
				title: 'Pillar 4: Bidirectional Coaching & Action Items (10 min)',
				durationMinutes: 10,
				description:
					'Exchange actionable feedback and log concrete commitments for the next cycle.',
				questions: [
					'What could I do differently to make your job easier or shield your focus?',
					'What are the 1–2 specific commitments we are each carrying forward into the next cycle?'
				]
			}
		],
		tips: [
			'Adopt the 80/20 rule: the employee speaks 80% of the time; the manager speaks 20%.',
			'Never cancel a 1:1 at the last minute; if unavoidable, reschedule immediately.',
			'Document commitments in real time so follow-up in the next session is effortless.'
		],
		keyTakeaway:
			'A manager’s output is the output of their organization. The 1:1 is your highest-leverage steering wheel.'
	},
	{
		slug: 'first-1-on-1',
		title: 'The First 1:1: Setting Expectations & Psychological Safety',
		subtitle:
			'Establish mutual trust, understand communication styles, and set the ground rules for your future meetings.',
		category: 'onboarding',
		readTime: '4 min read',
		cadence: 'First 1–2 weeks of working together',
		duration: '45–60 minutes',
		targetAudience: 'Manager & new direct report (or new manager to existing team)',
		summaryHtml:
			'The first 1:1 is not a status update or technical deep-dive. Its sole purpose is to calibrate how you will work together, lower anxiety, and lay the foundation for psychological safety.',
		whyItMattersHtml:
			'<p>As Andy Grove noted, the one-on-one is fundamentally <em>the employee’s meeting</em>. When an employee joins a team or gets a new manager, ambiguity breeds anxiety. Clarifying that this meeting exists to support them — not interrogate them — changes the dynamic from day one.</p><p>Documenting these preferences creates a shared contract you can refer back to whenever friction arises.</p>',
		agenda: [
			{
				title: 'Part 1: Demystifying the 1:1 (10 min)',
				durationMinutes: 10,
				description:
					'Clarify what these meetings are for, what they are not, and why privacy matters.',
				questions: [
					'What has been your experience with 1:1s in past roles? What worked well and what was frustrating?',
					'Here is my philosophy on 1:1s: this is your time, not my status checkpoint. How do you feel about this?',
					'How would you prefer we structure our recurring agenda?'
				]
			},
			{
				title: 'Part 2: Work Style & Communication Calibration (20 min)',
				durationMinutes: 20,
				description:
					'Understand how they do their best work and how they prefer to receive information.',
				questions: [
					'What conditions help you do your best, most focused work (deep work blocks, quiet time, pairing)?',
					'How do you prefer to receive feedback: in the moment, in writing before a sync, or during our 1:1s?',
					'When you get stressed or overwhelmed, what does that look like from the outside, and how can I best support you?',
					'What makes you feel genuinely appreciated and recognized for your contributions?'
				]
			},
			{
				title: 'Part 3: First 30 Days & Support (15 min)',
				durationMinutes: 15,
				description:
					'Ensure they have what they need to get up to speed without feeling overwhelmed.',
				questions: [
					'What has been the most confusing or unclear thing you’ve encountered so far?',
					'Is there any tool, access, or context you feel you are currently missing?',
					'Who on the team or in the org should you connect with next that you haven’t met yet?'
				]
			}
		],
		tips: [
			'Do not talk about Jira tickets, sprints, or task statuses.',
			'Listen 80% of the time; speak only 20%.',
			'Reassure them that confidentiality is guaranteed — what is discussed here does not get broadcasted.'
		],
		keyTakeaway:
			'The first meeting sets the tone for the entire working relationship. Prioritize rapport and safety over logistics.'
	},
	{
		slug: 'bi-weekly-pulse',
		title: 'Bi-Weekly Check-in: The High-Leverage Sync',
		subtitle:
			'A repeatable 30-minute framework focused on energy, progress, blockers, and continuous feedback.',
		category: 'regular',
		readTime: '3 min read',
		cadence: 'Every 1 to 2 weeks',
		duration: '30–45 minutes',
		targetAudience: 'Manager & direct report',
		summaryHtml:
			'A routine sync should never be a verbal recitation of a sprint board. It is an exploration of context, blockers, emotional energy, and forward momentum.',
		whyItMattersHtml:
			'<p>Google’s Project Oxygen research found that top managers do not micro-manage tasks; they focus on removing impediments, coaching, and checking on well-being. Holding regular, structured syncs prevents small misalignments from compounding into major crises or silent departures.</p>',
		agenda: [
			{
				title: '1. Personal Pulse & Energy (5 min)',
				durationMinutes: 5,
				description: 'Start with the human being, not the backlog.',
				questions: [
					'How is your energy level this week on a scale of 1 to 5?',
					'What was the highlight of your week, inside or outside of work?'
				]
			},
			{
				title: '2. Blockers, Friction & Dependencies (15 min)',
				durationMinutes: 15,
				description: 'Identify what is slowing them down or causing frustration.',
				questions: [
					'What is taking up too much of your time or feeling unnecessarily painful right now?',
					'Is there anything waiting on another person or team that is stalling your progress?',
					'What could I do or unblock to make your next two weeks smoother?'
				]
			},
			{
				title: '3. Bidirectional Feedback & Commitments (10 min)',
				durationMinutes: 10,
				description:
					'Close the loop on previous commitments and exchange small course corrections.',
				questions: [
					'How did we do on the action items we agreed upon in our last cycle?',
					'Is there any decision made recently where you felt out of the loop or disagree with the direction?',
					'What is one small thing I could do differently to support you better?'
				]
			}
		],
		tips: [
			'Always review the notes and commitments from the previous session before walking into the room.',
			'If an employee brings a long list of status updates, gently redirect: "I can read the ticket updates asynchronously; tell me about what felt hardest or what you learned."'
		],
		keyTakeaway:
			'Consistency matters more than length. A 30-minute focused conversation every other week beats an irregular 90-minute marathon.'
	},
	{
		slug: 'career-growth',
		title: 'Quarterly Career & Growth Check-in',
		subtitle:
			'Step away from day-to-day delivery to discuss long-term trajectory, skill acquisition, and aspirations.',
		category: 'growth',
		readTime: '4 min read',
		cadence: 'Quarterly (or every 3–6 months)',
		duration: '45–60 minutes',
		targetAudience: 'Manager & direct report',
		summaryHtml:
			'Dedicated space to discuss where the employee wants to go in their career, what skills they need to develop, and how their current work aligns with their long-term trajectory.',
		whyItMattersHtml:
			'<p>According to Gallup, lack of development opportunities is one of the top reasons high performers quit. Yet managers rarely make time for development because immediate deadlines crowd it out. Scheduling a separate, quarterly career discussion guarantees that development is not forgotten.</p>',
		agenda: [
			{
				title: '1. Big Picture Reflection (15 min)',
				durationMinutes: 15,
				description: 'Reflect on recent milestones and evolving interests.',
				questions: [
					'Looking back at the last 3–6 months, what project or achievement made you feel most proud?',
					'Which types of problems or tasks have felt energizing, and which felt draining?',
					'Where do you feel you have grown the most recently?'
				]
			},
			{
				title: '2. Future Direction & Ambitions (20 min)',
				durationMinutes: 20,
				description: 'Map out the next 1–2 years in terms of skills, scope, or leadership.',
				questions: [
					'When you picture your ideal role 1–2 years from now, what does your day-to-day look like?',
					'Are you leaning more towards deep technical expertise/architecture, team leadership, or product domain mastery?',
					'What is a skill or capability you don’t currently have that you would love to develop?'
				]
			},
			{
				title: '3. Tangible Growth Experiments (15 min)',
				durationMinutes: 15,
				description: 'Turn aspirations into realistic stretch opportunities on upcoming projects.',
				questions: [
					'What upcoming project could serve as a sandbox for you to practice this new skill?',
					'Are there conferences, courses, books, or internal mentors you would like access to?',
					'What is one concrete milestone we can agree to track over the next 90 days?'
				]
			}
		],
		tips: [
			'Never combine this meeting with an annual compensation review or a performance crisis discussion. Keep it focused on forward-looking growth.',
			'Be honest about what opportunities exist in the company and what might require patience.'
		],
		keyTakeaway:
			'Growth is not always a promotion. It is expanding capability, confidence, and scope.'
	},
	{
		slug: 'burnout-detection',
		title: 'Overwhelm & Burnout: Restoring Balance',
		subtitle:
			'A sensitive, low-pressure framework for identifying exhaustion, resetting workloads, and providing psychological support.',
		category: 'difficult',
		readTime: '4 min read',
		cadence: 'As needed, or when sustained stress is detected',
		duration: '45 minutes',
		targetAudience: 'Manager & struggling employee',
		summaryHtml:
			'When an employee is exhausted, standard questions fail. This template provides gentle inquiry, removes guilt, and establishes an actionable recovery plan.',
		whyItMattersHtml:
			'<p>High performers often suffer from burnout in silence because they fear being perceived as incompetent. As a manager, your job in this conversation is not to push for deadlines, but to protect your team member’s health and sustainably restructure the load.</p>',
		agenda: [
			{
				title: '1. Validation & Psychological Safety (10 min)',
				durationMinutes: 10,
				description: 'Normalize the struggle and eliminate fear of repercussions.',
				questions: [
					'I’ve noticed things have been intense lately, and I wanted to check in purely on how you are holding up.',
					'How are you feeling about your current workload and mental bandwidth?',
					'Please know that your health and well-being come first. Nothing we are shipping is worth your health.'
				]
			},
			{
				title: '2. Triage & Load Reduction (20 min)',
				durationMinutes: 20,
				description: 'Ruthlessly prioritize and unburden the employee.',
				questions: [
					'If we could magically take two things off your plate today, what would give you the most immediate relief?',
					'Which meetings on your calendar are draining energy without delivering value?',
					'What tasks can we postpone, delegate, or simply decide not to do at all?'
				]
			},
			{
				title: '3. Immediate Relief Plan (15 min)',
				durationMinutes: 15,
				description: 'Agree on realistic guardrails for the upcoming days.',
				questions: [
					'Would taking a few days of complete disconnect or a light "no-meetings" sprint be helpful right now?',
					'Can we agree on strict boundaries for closing your laptop at the end of the day?',
					'How can I help shield you from inbound requests while you recover?'
				]
			}
		],
		tips: [
			'Do not offer hollow platitudes like "just take it easy" without actually removing responsibilities from their plate.',
			'Be proactive in taking items off their backlog yourself rather than making them justify every item.'
		],
		keyTakeaway:
			'Burnout is a systemic problem, not an individual failure. Take concrete action to lighten the load immediately.'
	},
	{
		slug: 'skip-level',
		title: 'Skip-Level 1:1: The Organizational Health Check',
		subtitle:
			'A conversation between senior leaders and individual contributors to assess alignment, culture, and systemic blockers.',
		category: 'leadership',
		readTime: '4 min read',
		cadence: 'Once every 3–6 months',
		duration: '30–45 minutes',
		targetAudience: 'Senior Leader / Director / VP / CTO & IC',
		summaryHtml:
			'A skip-level meeting provides leaders with unfiltered context on team dynamics, clarity of strategy, and operational friction, while giving contributors visibility into senior leadership.',
		whyItMattersHtml:
			'<p>Ben Horowitz emphasizes in <em>The Hard Thing About Hard Things</em> that bad news travels up an organization slowly, while good news travels instantly. Skip-levels bypass organizational filters, allowing leaders to hear reality directly from the front line without undermining middle managers.</p>',
		agenda: [
			{
				title: '1. Context & Purpose (5 min)',
				durationMinutes: 5,
				description: 'Ensure the contributor knows this is not a stealth performance audit.',
				questions: [
					'Thank you for meeting! The purpose of this chat is to hear your perspective on the team and company, not to review your individual tasks. How are things feeling for you?'
				]
			},
			{
				title: '2. Strategic Clarity & Direction (15 min)',
				durationMinutes: 15,
				description: 'Test whether high-level strategy is understood and actionable on the ground.',
				questions: [
					'Does the broader vision and strategy of the company feel clear and compelling to you right now?',
					'Do you understand how your daily work directly contributes to our top company priorities?',
					'What is something the leadership team talks about that feels disconnected from reality on the ground?'
				]
			},
			{
				title: '3. Systemic Bottlenecks & Culture (15 min)',
				durationMinutes: 15,
				description:
					'Identify organizational friction that immediate managers might be unable to fix.',
				questions: [
					'What is the single biggest bottleneck that slows your team down from shipping high-quality work?',
					'If you were in my shoes for a week, what is one company-wide change you would make immediately?',
					'How well do different departments or squads collaborate together when you need their help?'
				]
			}
		],
		tips: [
			'Never use a skip-level to gossip about or undermine their direct manager.',
			'Listen attentively for recurring patterns across multiple skip-level interviews.',
			'Follow through on issues raised: if you promise to look into tooling or cross-team friction, close the loop.'
		],
		keyTakeaway:
			'Skip-levels are for diagnosing organizational health, not managing daily work. Keep the aperture wide.'
	}
];
