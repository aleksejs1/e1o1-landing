import type { Locale } from '$lib/paraglide/runtime';

export type QuestionCategory =
	| 'icebreaker'
	| 'upward-feedback'
	| 'team-dynamics'
	| 'blockers'
	| 'strategy'
	| 'career'
	| 'workload';

export interface QuestionItem {
	id: string;
	category: QuestionCategory;
	text: string;
	whyAsk?: string;
}

export interface QuestionCategoryMeta {
	id: QuestionCategory;
	label: string;
	description: string;
}

export const questionCategoriesEn: QuestionCategoryMeta[] = [
	{
		id: 'icebreaker',
		label: 'Rapport & Energy',
		description: 'Starting conversations with warmth, human connection, and presence.'
	},
	{
		id: 'upward-feedback',
		label: 'Feedback to Manager',
		description: 'Surfacing honest critique, coaching preferences, and blind spots.'
	},
	{
		id: 'team-dynamics',
		label: 'Team & Culture',
		description: 'Psychological safety, peer collaboration, and team health.'
	},
	{
		id: 'blockers',
		label: 'Bottlenecks & Process',
		description: 'Eliminating friction, unnecessary meetings, and slow pipelines.'
	},
	{
		id: 'strategy',
		label: 'Strategy & Purpose',
		description:
			'Connecting daily engineering work to business goals, user impact, and company direction.'
	},
	{
		id: 'career',
		label: 'Growth & Ambition',
		description: 'Long-term trajectory, skill development, and expanded scope.'
	},
	{
		id: 'workload',
		label: 'Capacity & Well-being',
		description: 'Catching burnout early, setting boundaries, and workload triage.'
	}
];

export const questionCategoriesRu: QuestionCategoryMeta[] = [
	{
		id: 'icebreaker',
		label: 'Контакт и энергия',
		description: 'Человеческий контакт, настроение и эмоциональный фон.'
	},
	{
		id: 'upward-feedback',
		label: 'Фидбек руководителю',
		description: 'Честная обратная связь, слепые зоны и улучшение поддержки.'
	},
	{
		id: 'team-dynamics',
		label: 'Команда и культура',
		description: 'Атмосфера в команде, психологическая безопасность и доверие.'
	},
	{
		id: 'blockers',
		label: 'Блокеры и процессы',
		description: 'Устранение трения, бессмысленных встреч и медленных процессов.'
	},
	{
		id: 'strategy',
		label: 'Стратегия и смысл',
		description:
			'Связь повседневных технических задач с целями бизнеса, продуктом и вектором компании.'
	},
	{
		id: 'career',
		label: 'Рост и амбиции',
		description: 'Долгосрочное развитие, освоение новых навыков и масштаб задач.'
	},
	{
		id: 'workload',
		label: 'Нагрузка и баланс',
		description: 'Раннее выявление выгорания, границы и приоритизация.'
	}
];

export const questionsEn: QuestionItem[] = [
	// Rapport & Energy
	{
		id: 'e1',
		category: 'icebreaker',
		text: 'How is your mental battery and energy level this week on a scale of 1 to 5?',
		whyAsk: 'Quick quantitative pulse check that normalizes talking about energy.'
	},
	{
		id: 'e2',
		category: 'icebreaker',
		text: 'What was the highlight of your past week, inside or outside of work?',
		whyAsk: 'Encourages positive reflection and shares personal context.'
	},
	{
		id: 'e3',
		category: 'icebreaker',
		text: 'What is one thing about your day-to-day work environment that you would change if you had a magic wand?',
		whyAsk: 'Uncovers low-hanging ergonomic or environmental friction.'
	},
	{
		id: 'e4',
		category: 'icebreaker',
		text: 'Did you get to do any deep, uninterrupted work this week, or did it feel fragmented?',
		whyAsk: 'Evaluates calendar fragmentation and maker time.'
	},
	{
		id: 'e5',
		category: 'icebreaker',
		text: 'Which task this sprint gave you creative momentum, and which felt like a soul-draining chore?',
		whyAsk:
			'Uncovers unbalanced distribution of chores, on-call spikes, or repetitive manual tasks.'
	},

	// Feedback to Manager
	{
		id: 'm1',
		category: 'upward-feedback',
		text: 'What is one small thing I could do differently or start doing to support you better?',
		whyAsk: 'Lowers the bar for constructive criticism with "one small thing".'
	},
	{
		id: 'm2',
		category: 'upward-feedback',
		text: 'Where do you feel I am providing too much guidance, and where would you like more context or direction?',
		whyAsk: 'Calibrates the micro-management vs under-management spectrum.'
	},
	{
		id: 'm3',
		category: 'upward-feedback',
		text: 'Is there any decision made recently where you felt out of the loop or disagreed with the direction?',
		whyAsk: 'Unearths silent disagreement before it turns into disengagement.'
	},
	{
		id: 'm4',
		category: 'upward-feedback',
		text: 'How clear are our team’s top three priorities for this quarter in your mind?',
		whyAsk: 'Tests strategic clarity without putting the employee on the defensive.'
	},
	{
		id: 'm5',
		category: 'upward-feedback',
		text: 'Am I giving you feedback early enough, or does it ever feel like a surprise?',
		whyAsk: 'Ensures feedback latency is near zero.'
	},
	{
		id: 'm6',
		category: 'upward-feedback',
		text: 'Where am I unintentionally creating a bottleneck or delay for you?',
		whyAsk: 'Identifies delayed code reviews, slow approvals, or unnecessary micromanagement.'
	},
	{
		id: 'm7',
		category: 'upward-feedback',
		text: 'Did I handle any meeting or situation poorly recently where I could have shown up better?',
		whyAsk: 'Surfaces blind spots in communication, tone, or team defense.'
	},
	{
		id: 'm8',
		category: 'upward-feedback',
		text: 'What is something you wish I understood better about your day-to-day reality?',
		whyAsk:
			'Bridges empathy gaps between high-level management planning and ground-level technical implementation.'
	},

	// Team & Culture
	{
		id: 't1',
		category: 'team-dynamics',
		text: 'Who on the team or in adjacent squads has been especially helpful to you recently?',
		whyAsk: 'Surfaces invisible glue work and positive peer recognition.'
	},
	{
		id: 't2',
		category: 'team-dynamics',
		text: 'How comfortable does it feel to voice an unpopular opinion or admit a mistake in our team discussions?',
		whyAsk: 'Direct measure of psychological safety within the squad.'
	},
	{
		id: 't3',
		category: 'team-dynamics',
		text: 'Is there any simmering tension, friction, or misalignment in the team that we need to address?',
		whyAsk: 'Catches interpersonal friction before it escalates.'
	},
	{
		id: 't4',
		category: 'team-dynamics',
		text: 'Do code reviews and technical debates in our team feel constructive and collaborative, or stressful?',
		whyAsk: 'Validates health of the day-to-day engineering culture.'
	},
	{
		id: 't5',
		category: 'team-dynamics',
		text: 'How is collaboration feeling across the team right now? Does anyone feel isolated or out of the loop?',
		whyAsk: 'Diagnoses remote disconnect, timezone silos, or simmering quiet disagreements.'
	},
	{
		id: 't6',
		category: 'team-dynamics',
		text: 'Do you feel your ideas and RFCs are taken seriously by the rest of the team?',
		whyAsk: 'Uncovers feelings of exclusion, seniority bias, or dominant voices dismissing input.'
	},

	// Bottlenecks & Process
	{
		id: 'b1',
		category: 'blockers',
		text: 'What is taking up too much of your time right now that feels unnecessarily painful or bureaucratic?',
		whyAsk: 'Identifies systemic overhead and process waste.'
	},
	{
		id: 'b2',
		category: 'blockers',
		text: 'Which recurring meeting on your calendar feels least valuable or could be handled asynchronously?',
		whyAsk: 'Protects focus time and prunes stale meetings.'
	},
	{
		id: 'b3',
		category: 'blockers',
		text: 'Is there any dependency on another team that is stalling your progress or causing uncertainty?',
		whyAsk: 'Signals where the manager needs to step in to negotiate cross-team boundaries.'
	},
	{
		id: 'b4',
		category: 'blockers',
		text: 'If we could improve one part of our local development, CI, or deployment workflow, what would make the biggest impact?',
		whyAsk: 'Pins down developer experience bottlenecks.'
	},
	{
		id: 'b5',
		category: 'blockers',
		text: 'What is harder in your day-to-day work than it should be?',
		whyAsk:
			'The classic high-signal friction prompt: slow pipelines, flaky tests, lack of staging data, or painful approvals.'
	},
	{
		id: 'b6',
		category: 'blockers',
		text: 'Is there any part of our codebase or architecture that you or the team are terrified to touch, and why?',
		whyAsk:
			'Identifies legacy landmines without test coverage and single-point-of-failure services.'
	},
	{
		id: 'b7',
		category: 'blockers',
		text: 'What is the clunkiest internal tool or process we still tolerate just because "that’s how we’ve always done it"?',
		whyAsk:
			'Uncovers outdated deployment checklists, manual permission grants, or inertia-driven habits.'
	},
	{
		id: 'b8',
		category: 'blockers',
		text: 'If you had two full days to fix any technical debt in our service, what would you tackle first?',
		whyAsk:
			'Surfaces high-ROI refactoring ideas that engineers usually keep to themselves due to sprint pressure.'
	},
	{
		id: 'b9',
		category: 'blockers',
		text: 'Did you run into any permission, cloud IAM, or credential roadblocks this cycle?',
		whyAsk: 'Identifies security bureaucracy, slow IT approvals, or missing staging environments.'
	},

	// Strategy & Purpose
	{
		id: 's1',
		category: 'strategy',
		text: 'Do you feel clear on why our current sprint goals matter to our customers and the business?',
		whyAsk:
			'Prevents engineers from feeling like disconnected factory workers typing tickets without purpose.'
	},
	{
		id: 's2',
		category: 'strategy',
		text: 'Were there any recent announcements or leadership pivots that felt confusing or contradicted our goals?',
		whyAsk: 'Uncovers rumors, strategic whiplash, and gaps in executive context.'
	},
	{
		id: 's3',
		category: 'strategy',
		text: 'If a candidate asked you in an interview what our company’s top priority is this quarter, what would you say?',
		whyAsk: 'Tests strategic alignment and whether company goals actually filter down to the team.'
	},
	{
		id: 's4',
		category: 'strategy',
		text: 'Do you feel we are building the right thing, or are we solving the wrong customer problem?',
		whyAsk: 'Unearths frontline technical doubts about product viability before time is wasted.'
	},
	{
		id: 's5',
		category: 'strategy',
		text: 'What would happen if we didn’t ship this current milestone for another month? Does it actually matter?',
		whyAsk: 'Separates genuine business urgency from artificial, management-induced panic.'
	},

	// Growth & Ambition
	{
		id: 'c1',
		category: 'career',
		text: 'Looking at our upcoming roadmap, which problem space or project are you most excited to tackle?',
		whyAsk: 'Aligns project staffing with genuine personal motivation.'
	},
	{
		id: 'c2',
		category: 'career',
		text: 'What is a skill or technology you don’t currently use in your day-to-day work that you would love to master?',
		whyAsk: 'Informs stretch opportunities and learning budgets.'
	},
	{
		id: 'c3',
		category: 'career',
		text: 'When you imagine your role 1–2 years from now, are you leaning more toward technical leadership, domain depth, or people management?',
		whyAsk: 'Helps navigate the dual career ladder (Staff+ IC vs EM track).'
	},
	{
		id: 'c4',
		category: 'career',
		text: 'What is one recent piece of work where you felt you performed at your absolute best?',
		whyAsk: 'Identifies high-water marks and energizing work.'
	},
	{
		id: 'c5',
		category: 'career',
		text: 'What is the single biggest skill gap holding you back from reaching the next level?',
		whyAsk:
			'Focuses career conversations on actionable growth areas (system design, ambiguity, leadership).'
	},
	{
		id: 'c6',
		category: 'career',
		text: 'Do you feel you are learning faster than the market, or does your professional progress feel stagnant?',
		whyAsk: 'The #1 leading indicator of engineer attrition and disengagement.'
	},

	// Capacity & Well-being
	{
		id: 'w1',
		category: 'workload',
		text: 'How sustainable does your current pace of work feel over the next 2–3 months?',
		whyAsk: 'Assesses marathon pace vs unsustainable sprint burnout.'
	},
	{
		id: 'w2',
		category: 'workload',
		text: 'Are you able to completely shut down your laptop and work notifications in the evenings and weekends?',
		whyAsk: 'Guards boundaries and unplugs culture.'
	},
	{
		id: 'w3',
		category: 'workload',
		text: 'If you had to drop one task or project this week to breathe easier, which one would it be?',
		whyAsk: 'Instantly surfaces lowest-value/highest-stress work.'
	},
	{
		id: 'w4',
		category: 'workload',
		text: 'Do you feel pressure to respond to messages outside working hours, even if it’s unspoken?',
		whyAsk: 'Surfaces accidental peer or leadership pressure.'
	},
	{
		id: 'w5',
		category: 'workload',
		text: 'I noticed you’ve been working late nights or weekends recently. How are you holding up physically?',
		whyAsk:
			'Checks for sleep deprivation, physical exhaustion, and health symptoms before acute burnout occurs.'
	},
	{
		id: 'w6',
		category: 'workload',
		text: 'When was the last time you took a full day off and completely disconnected from Slack and email?',
		whyAsk:
			'Surfaces vacation guilt, hero syndrome, or fear that things will collapse in their absence.'
	},
	{
		id: 'w7',
		category: 'workload',
		text: 'How can I give you air cover so you can catch your breath and reset this coming week?',
		whyAsk:
			'Invites concrete protective commitments from the manager (declining meetings, pushing deadlines).'
	}
];

export const questionsRu: QuestionItem[] = [
	// Контакт и энергия
	{
		id: 'e1',
		category: 'icebreaker',
		text: 'Как твой уровень энергии и ментальный заряд на этой неделе по шкале от 1 до 5?',
		whyAsk: 'Быстрый количественный срез, нормализующий открытый разговор об усталости.'
	},
	{
		id: 'e2',
		category: 'icebreaker',
		text: 'Что было самым приятным или запоминающимся событием за прошедшую неделю, в работе или вне её?',
		whyAsk: 'Создает позитивный тон и раскрывает личный контекст без навязчивости.'
	},
	{
		id: 'e3',
		category: 'icebreaker',
		text: 'Если бы у тебя была волшебная палочка, что одно ты бы изменил(а) в своем ежедневном рабочем пространстве?',
		whyAsk: 'Помогает выявить бытовые или эргономические мелочи, отнимающие силы.'
	},
	{
		id: 'e4',
		category: 'icebreaker',
		text: 'Удалось ли на этой неделе позаниматься глубокой сфокусированной работой (deep work), или всё время ушло на переключения?',
		whyAsk: 'Диагностирует фрагментацию календаря и качество фокуса.'
	},
	{
		id: 'e5',
		category: 'icebreaker',
		text: 'Какая часть твоей работы ощущалась драйвовым творчеством, а какая — бессмысленной рутиной?',
		whyAsk: 'Выявляет накопление монотонных задач, ручных проверок или избытка дежурств.'
	},

	// Фидбек руководителю
	{
		id: 'm1',
		category: 'upward-feedback',
		text: 'Какое одно небольшое действие я могу начать делать или делать иначе, чтобы лучше тебя поддерживать?',
		whyAsk:
			'Формулировка «одно небольшое действие» снимает психологический барьер перед критикой лида.'
	},
	{
		id: 'm2',
		category: 'upward-feedback',
		text: 'В каких вопросах тебе не хватает моей поддержки/контекста, а где я, наоборот, излишне вмешиваюсь?',
		whyAsk: 'Калибрует баланс между микроменеджментом и недостатком внимания.'
	},
	{
		id: 'm3',
		category: 'upward-feedback',
		text: 'Были ли за последнее время решения, с которыми ты внутренне не согласен(на) или где не хватило контекста?',
		whyAsk: 'Вскрывает скрытое несогласие до того, как оно перерастет в отчуждение и саботаж.'
	},
	{
		id: 'm4',
		category: 'upward-feedback',
		text: 'Насколько четко ты понимаешь топ-3 приоритета нашей команды на этот квартал?',
		whyAsk: 'Проверяет понятность стратегии, не ставя сотрудника в положение экзаменуемого.'
	},
	{
		id: 'm5',
		category: 'upward-feedback',
		text: 'Доходит ли обратная связь от меня достаточно быстро, или бывает ощущение, что фидбек пришел «задним числом»?',
		whyAsk: 'Помогает руководителю сократить задержку в передаче полезного фидбека.'
	},
	{
		id: 'm6',
		category: 'upward-feedback',
		text: 'В каких вопросах я ненамеренно создаю для тебя бутылочное горлышко или задержки?',
		whyAsk:
			'Помогает вовремя заметить задержки код-ревью, зависшие согласования или избыточный контроль.'
	},
	{
		id: 'm7',
		category: 'upward-feedback',
		text: 'Были ли за последнее время встречи или ситуации, где я повёл(а) себя неудачно и мог(ла) бы сработать лучше?',
		whyAsk: 'Вскрывает слепые зоны в коммуникации лида, тоне общения или защите интересов команды.'
	},
	{
		id: 'm8',
		category: 'upward-feedback',
		text: 'Что из твоей повседневной реальности ты хотел(а) бы, чтобы я понимал(а) лучше?',
		whyAsk:
			'Устраняет разрыв в понимании между высокоуровневым планированием и реалиями инженерного стека.'
	},

	// Команда и культура
	{
		id: 't1',
		category: 'team-dynamics',
		text: 'Кто из команды или соседних отделов особенно выручил тебя за последнее время?',
		whyAsk: 'Показывает невидимую командную работу и поводы похвалить коллег.'
	},
	{
		id: 't2',
		category: 'team-dynamics',
		text: 'Насколько безопасно в нашей команде высказывать непопулярное мнение или открыто признавать ошибки?',
		whyAsk: 'Прямой индикатор уровня психологической безопасности в коллективе.'
	},
	{
		id: 't3',
		category: 'team-dynamics',
		text: 'Чувствуется ли скрытое напряжение или недопонимание между кем-то в команде, на которое стоит обратить внимание?',
		whyAsk: 'Позволяет купировать конфликты до того, как они разрастутся.'
	},
	{
		id: 't4',
		category: 'team-dynamics',
		text: 'Проходят ли код-ревью и технические споры конструктивно, или в них ощущается токсичность и давление?',
		whyAsk: 'Оценивает реальное состояние инженерной культуры команды.'
	},
	{
		id: 't5',
		category: 'team-dynamics',
		text: 'Как сейчас атмосфера и общение в команде? Нет ли ощущения, что кто-то изолирован или оторван от контекста?',
		whyAsk: 'Диагностирует проблемы удаленки, барьеры часовых поясов и невысказанное напряжение.'
	},
	{
		id: 't6',
		category: 'team-dynamics',
		text: 'Чувствуешь ли ты, что к твоим идеям, предложениям и RFC прислушиваются?',
		whyAsk: 'Вскрывает ощущение обесценивания, доминирование авторитетов или предвзятость по стажу.'
	},

	// Блокеры и процессы
	{
		id: 'b1',
		category: 'blockers',
		text: 'Что сейчас съедает слишком много времени или кажется неоправданно бюрократичным и болезненным?',
		whyAsk: 'Выявляет устаревшие регламенты и лишнюю трату ресурса.'
	},
	{
		id: 'b2',
		category: 'blockers',
		text: 'Какой регулярный созвон в твоем календаре приносит меньше всего пользы и может быть переведен в асинхрон?',
		whyAsk: 'Защищает рабочее время инженеров и расчищает календарь.'
	},
	{
		id: 'b3',
		category: 'blockers',
		text: 'Есть ли блокеры или зависимости от других команд, которые тормозят тебя или создают неопределенность?',
		whyAsk: 'Сигнал, где лид должен подключиться и провести межкомандные переговоры.'
	},
	{
		id: 'b4',
		category: 'blockers',
		text: 'Какое одно улучшение в нашем CI/CD, локальном окружении или деплое принесло бы наибольшую отдачу?',
		whyAsk: 'Находит реальные узкие места в Developer Experience (DevEx).'
	},
	{
		id: 'b5',
		category: 'blockers',
		text: 'Что в твоей повседневной работе сейчас сложнее, чем должно быть?',
		whyAsk:
			'Классический точный вопрос анкеты: медленный CI/CD, флакующие тесты, отсутствие тестовых данных или бюрократия.'
	},
	{
		id: 'b6',
		category: 'blockers',
		text: 'Есть ли часть нашей кодовой базы или архитектуры, к которой всей команде страшно прикасаться, и почему?',
		whyAsk:
			'Выявляет мины замедленного действия, легаси без тестов и узкие места надежности системы.'
	},
	{
		id: 'b7',
		category: 'blockers',
		text: 'Какой внутренний процесс или инструмент мы до сих пор терпим просто потому, что «так исторически сложилось»?',
		whyAsk: 'Вскрывает устаревшие релизные чеклисты, ручные выдачи доступов и привычки по инерции.'
	},
	{
		id: 'b8',
		category: 'blockers',
		text: 'Если бы у тебя было два свободных дня на закрытие любого техдолга, за что бы ты взялся(лась) в первую очередь?',
		whyAsk:
			'Помогает найти идеи рефакторинга с высоким ROI, о которых инженеры часто молчат из-за дедлайнов.'
	},
	{
		id: 'b9',
		category: 'blockers',
		text: 'Были ли за последнее время проблемы с доступами, правами в облаке или лицензиями?',
		whyAsk:
			'Выявляет бюрократию безопасности, задержки IT-поддержки или отсутствие необходимых прав.'
	},

	// Стратегия и смысл
	{
		id: 's1',
		category: 'strategy',
		text: 'Понятно ли тебе, почему задачи текущего спринта важны для бизнеса и пользователей?',
		whyAsk:
			'Предотвращает превращение инженеров в изолированных «перекладывателей тикетов» без понимания смысла.'
	},
	{
		id: 's2',
		category: 'strategy',
		text: 'Были ли за последнее время новости или решения руководства, смысл которых остался непонятен или противоречив?',
		whyAsk: 'Вскрывает слухи, тревогу от смены курса и дефицит стратегического контекста сверху.'
	},
	{
		id: 's3',
		category: 'strategy',
		text: 'Если бы кандидат на собеседовании спросил тебя о главной цели компании на этот квартал, что бы ты ответил(а)?',
		whyAsk: 'Проверяет, насколько стратегия компании реально понятна и близка людям на передовой.'
	},
	{
		id: 's4',
		category: 'strategy',
		text: 'Чувствуешь ли ты, что мы создаем правильный продукт, или мы решаем не ту проблему клиентов?',
		whyAsk: 'Вскрывает экспертные сомнения команды в жизнеспособности продуктовых гипотез.'
	},
	{
		id: 's5',
		category: 'strategy',
		text: 'Что произойдет, если мы задержим текущий релиз на месяц? Это реально критично для бизнеса?',
		whyAsk: 'Помогает отличить реальную срочность для бизнеса от искусственной паники менеджмента.'
	},

	// Рост и амбиции
	{
		id: 'c1',
		category: 'career',
		text: 'Глядя на наш роадмап на ближайшие месяцы, за какую задачу или проект тебе хотелось бы взяться сильнее всего?',
		whyAsk: 'Связывает распределение проектов с внутренней мотивацией человека.'
	},
	{
		id: 'c2',
		category: 'career',
		text: 'Какой навык или технологию, которой ты сейчас не пользуешься ежедневно, тебе очень хотелось бы освоить?',
		whyAsk: 'Помогает сформировать развивающие задачи и план обучения.'
	},
	{
		id: 'c3',
		category: 'career',
		text: 'Если заглянуть на 1–2 года вперед, куда тебя больше тянет: в архитектуру/глубокую экспертизу или в лидство и людей?',
		whyAsk: 'Помогает направить сотрудника по правильной ветке карьерной лестницы.'
	},
	{
		id: 'c4',
		category: 'career',
		text: 'В какой задаче за последнее время ты чувствовал(а), что выдал(а) свой абсолютный максимум и гордишься результатом?',
		whyAsk: 'Помогает обнаружить условия, при которых человек работает на пике отдачи.'
	},
	{
		id: 'c5',
		category: 'career',
		text: 'Какой ключевой пробел в навыках или опыте сильнее всего сдерживает твой переход на следующий уровень?',
		whyAsk:
			'Фокусирует карьерный диалог на конкретных зонах роста (системный дизайн, управление неопределенностью, влияние).'
	},
	{
		id: 'c6',
		category: 'career',
		text: 'Чувствуешь ли ты, что учишься быстрее рынка, или твой профессиональный рост замедлился?',
		whyAsk: 'Главный опережающий индикатор выгорания и риска ухода сильных инженеров.'
	},

	// Нагрузка и баланс
	{
		id: 'w1',
		category: 'workload',
		text: 'Насколько устойчивым ощущается текущий рабочий темп, если представить его на дистанции следующих 2–3 месяцев?',
		whyAsk: 'Оценивает темп работы: марафонский ли он или ведет к скорейшему выгоранию.'
	},
	{
		id: 'w2',
		category: 'workload',
		text: 'Удается ли полностью закрывать рабочий ноутбук и отключать уведомления по вечерам и на выходных?',
		whyAsk: 'Защищает здоровые личные границы и культуру отдыха.'
	},
	{
		id: 'w3',
		category: 'workload',
		text: 'Если бы нужно было прямо сейчас выкинуть одну задачу, чтобы выдохнуть, что бы ты выбросил(а)?',
		whyAsk: 'Моментально подсвечивает задачи с минимальной ценностью и высоким стрессом.'
	},
	{
		id: 'w4',
		category: 'workload',
		text: 'Чувствуешь ли ты негласное давление отвечать на рабочие сообщения во внерабочее время?',
		whyAsk: 'Выявляет скрытое токсичное давление или ложные ожидания доступности.'
	},
	{
		id: 'w5',
		category: 'workload',
		text: 'Я замечаю, что в последнее время тебе приходится задерживаться по вечерам или на выходных. Как ты себя чувствуешь физически?',
		whyAsk:
			'Проверяет симптомы хронического стресса, недосып и усталость до наступления острого выгорания.'
	},
	{
		id: 'w6',
		category: 'workload',
		text: 'Когда ты в последний раз брал(а) полноценный выходной и полностью отключался(лась) от рабочих чатов и почты?',
		whyAsk:
			'Выявляет чувство вины за отпуск, синдром незаменимого героя или страх, что без человека всё рухнет.'
	},
	{
		id: 'w7',
		category: 'workload',
		text: 'Как я могу прикрыть тебя и обеспечить «воздушный щит», чтобы ты мог(ла) перевести дух на следующей неделе?',
		whyAsk:
			'Предлагает конкретную помощь лида: снятие лишних встреч, сдвиг дедлайнов, блокировка входящих запросов.'
	}
];

export const questionCategoriesDe: QuestionCategoryMeta[] = [
	{
		id: 'icebreaker',
		label: 'Kontakt & Energie',
		description: 'Menschliche Nähe, Energielevel und emotionaler Hintergrund.'
	},
	{
		id: 'upward-feedback',
		label: 'Feedback an Führungskraft',
		description: 'Offene Rückmeldung, blinde Flecken und bessere Unterstützung.'
	},
	{
		id: 'team-dynamics',
		label: 'Team & Kultur',
		description: 'Psychologische Sicherheit, Kollegialität und Teamgesundheit.'
	},
	{
		id: 'blockers',
		label: 'Engpässe & Prozesse',
		description: 'Beseitigung von Reibung, überflüssigen Meetings und Bremsen.'
	},
	{
		id: 'strategy',
		label: 'Strategie & Sinn',
		description:
			'Verbindung der täglichen Entwicklungsarbeit mit Unternehmenszielen und Kundenbedürfnissen.'
	},
	{
		id: 'career',
		label: 'Wachstum & Ambitionen',
		description: 'Langfristige Perspektive, neue Fähigkeiten und Wirkung.'
	},
	{
		id: 'workload',
		label: 'Kapazität & Wohlbefinden',
		description: 'Früherkennung von Überlastung, Grenzen und Priorisierung.'
	}
];

export const questionCategoriesEs: QuestionCategoryMeta[] = [
	{
		id: 'icebreaker',
		label: 'Contacto y energía',
		description: 'Vínculo humano, estado de ánimo y presencia.'
	},
	{
		id: 'upward-feedback',
		label: 'Feedback al mánager',
		description: 'Crítica constructiva, puntos ciegos y mejor apoyo.'
	},
	{
		id: 'team-dynamics',
		label: 'Equipo y cultura',
		description: 'Seguridad psicológica, colaboración y salud del equipo.'
	},
	{
		id: 'blockers',
		label: 'Bloqueos y procesos',
		description: 'Eliminación de fricciones, reuniones inútiles y trabas.'
	},
	{
		id: 'strategy',
		label: 'Estrategia y propósito',
		description:
			'Conexión del trabajo técnico diario con los objetivos de negocio y el impacto real.'
	},
	{
		id: 'career',
		label: 'Crecimiento y metas',
		description: 'Trayectoria a largo plazo, nuevas competencias e impacto.'
	},
	{
		id: 'workload',
		label: 'Carga y bienestar',
		description: 'Detección temprana del burnout, límites y triaje.'
	}
];

export const questionCategoriesFr: QuestionCategoryMeta[] = [
	{
		id: 'icebreaker',
		label: 'Contact & Énergie',
		description: 'Lien humain, moral et disponibilité mentale.'
	},
	{
		id: 'upward-feedback',
		label: 'Feedback au manager',
		description: 'Retours constructifs, angles morts et soutien accru.'
	},
	{
		id: 'team-dynamics',
		label: 'Équipe & Culture',
		description: 'Sécurité psychologique, entraide et cohésion.'
	},
	{
		id: 'blockers',
		label: 'Freins & Processus',
		description: 'Suppression des lourdeurs, réunions stériles et blocages.'
	},
	{
		id: 'strategy',
		label: 'Stratégie & Sens',
		description:
			'Relier le travail technique quotidien aux objectifs métier, aux utilisateurs et à la vision.'
	},
	{
		id: 'career',
		label: 'Évolution & Ambitions',
		description: 'Trajectoire long terme, montée en compétences et impact.'
	},
	{
		id: 'workload',
		label: 'Charge & Équilibre',
		description: 'Prévention de l’épuisement, limites saines et priorisation.'
	}
];

export const questionCategoriesLv: QuestionCategoryMeta[] = [
	{
		id: 'icebreaker',
		label: 'Kontakts un enerģija',
		description: 'Cilvēciska saikne, noskaņojums un klātbūtne.'
	},
	{
		id: 'upward-feedback',
		label: 'Atgriezeniskā saite vadītājam',
		description: 'Atklāts vērtējums, aklās zonas un atbalsta uzlabošana.'
	},
	{
		id: 'team-dynamics',
		label: 'Komanda un kultūra',
		description: 'Psiholoģiskā drošība, sadarbība un mikroklimats.'
	},
	{
		id: 'blockers',
		label: 'Šķēršļi un procesi',
		description: 'Aizķeršanos, lieku sapulču un birokrātijas novēršana.'
	},
	{
		id: 'strategy',
		label: 'Stratēģija un jēga',
		description:
			'Ikdienas izstrādes darba sasaiste ar biznesa mērķiem, lietotāju vajadzībām un uzņēmuma virzienu.'
	},
	{
		id: 'career',
		label: 'Izaugsme un ambīcijas',
		description: 'Ilgtermiņa virziens, jaunas prasmes un ietekme.'
	},
	{
		id: 'workload',
		label: 'Slodze un līdzsvars',
		description: 'Izdegšanas laicīga pamanīšana, robežas un prioritātes.'
	}
];

export const questionsDe: QuestionItem[] = [
	// Kontakt & Energie
	{
		id: 'e1',
		category: 'icebreaker',
		text: 'Wie steht dein Energielevel und deine mentale Batterie diese Woche auf einer Skala von 1 bis 5?',
		whyAsk:
			'Schneller quantitativer Stimmungscheck, der das offene Gespräch über Energie normalisiert.'
	},
	{
		id: 'e2',
		category: 'icebreaker',
		text: 'Was war dein Highlight der vergangenen Woche, beruflich oder privat?',
		whyAsk: 'Fördert positive Reflexion und teilt persönlichen Kontext.'
	},
	{
		id: 'e3',
		category: 'icebreaker',
		text: 'Was würdest du an deinem täglichen Arbeitsumfeld ändern, wenn du einen Zauberstab hättest?',
		whyAsk: 'Deckt ergonomische oder alltägliche Reibungspunkte auf.'
	},
	{
		id: 'e4',
		category: 'icebreaker',
		text: 'Konntest du diese Woche fokussiert und ungestört an großen Themen arbeiten?',
		whyAsk: 'Bewertet Kalenderfragmentierung und Deep-Work-Zeit.'
	},
	{
		id: 'e5',
		category: 'icebreaker',
		text: 'Welche Aufgabe hat dir kreativen Schwung verliehen und welche fühlte sich wie ermüdende Routine an?',
		whyAsk:
			'Deckt ungleiche Verteilung von Routineaufgaben, Bereitschaftsspitzen oder manuelle Fleißarbeit auf.'
	},

	// Feedback an Führungskraft
	{
		id: 'm1',
		category: 'upward-feedback',
		text: 'Was ist eine Sache, die ich anders machen oder beginnen könnte, um dich besser zu unterstützen?',
		whyAsk: 'Senkt die Hürde für konstruktive Kritik am Vorgesetzten.'
	},
	{
		id: 'm2',
		category: 'upward-feedback',
		text: 'Wo gebe ich dir zu viele Vorgaben, und wo wünschst du dir mehr Orientierung?',
		whyAsk: 'Kalibriert Mikromanagement versus mangelnde Führung.'
	},
	{
		id: 'm3',
		category: 'upward-feedback',
		text: 'Gab es kürzlich Entscheidungen, bei denen dir der Kontext fehlte oder du anderer Meinung warst?',
		whyAsk: 'Deckt stille Meinungsverschiedenheiten frühzeitig auf.'
	},
	{
		id: 'm4',
		category: 'upward-feedback',
		text: 'Wie klar sind dir die drei wichtigsten Prioritäten unseres Teams in diesem Quartal?',
		whyAsk: 'Prüft strategische Klarheit ohne Prüfungssituation.'
	},
	{
		id: 'm5',
		category: 'upward-feedback',
		text: 'Erhältst du Feedback von mir zeitnah genug, oder kommt es je überraschend?',
		whyAsk: 'Stellt minimale Latenz beim Feedback sicher.'
	},
	{
		id: 'm6',
		category: 'upward-feedback',
		text: 'An welcher Stelle bin ich unbeabsichtigt ein Flaschenhals oder Verzögerungsfaktor für dich?',
		whyAsk: 'Macht verzögerte Code-Reviews, schleppende Freigaben oder Mikromanagement sichtbar.'
	},
	{
		id: 'm7',
		category: 'upward-feedback',
		text: 'Gab es kürzlich ein Meeting oder eine Situation, die ich unglücklich moderiert habe und besser hätte lösen können?',
		whyAsk: 'Legt blinde Flecken in der Kommunikation, im Tonfall oder beim Schutz des Teams offen.'
	},
	{
		id: 'm8',
		category: 'upward-feedback',
		text: 'Was aus deiner alltäglichen Arbeitsrealität sollte ich deiner Meinung nach besser verstehen?',
		whyAsk:
			'Schließt die Empathielücke zwischen übergeordneter Planung und technischer Praxis an der Basis.'
	},

	// Team & Kultur
	{
		id: 't1',
		category: 'team-dynamics',
		text: 'Wer im Team oder in Nachbarabteilungen hat dir in letzter Zeit besonders geholfen?',
		whyAsk: 'Macht wertvolle Unterstützungskultur sichtbar.'
	},
	{
		id: 't2',
		category: 'team-dynamics',
		text: 'Wie sicher fühlst du dich dabei, in Teamrunden eine unpopuläre Meinung zu äußern?',
		whyAsk: 'Direkter Gradmesser für psychologische Sicherheit.'
	},
	{
		id: 't3',
		category: 'team-dynamics',
		text: 'Gibt es unterschwellige Reibungen oder Spannungen im Team, die wir ansprechen sollten?',
		whyAsk: 'Fängt zwischenmenschliche Konflikte frühzeitig ab.'
	},
	{
		id: 't4',
		category: 'team-dynamics',
		text: 'Verlaufen Code-Reviews und technische Debatten bei uns konstruktiv oder stressig?',
		whyAsk: 'Validiert die Gesundheit der gelebten Ingenieurskultur.'
	},
	{
		id: 't5',
		category: 'team-dynamics',
		text: 'Wie fühlt sich die Zusammenarbeit im Team derzeit an? Gibt es jemanden, der isoliert oder abgehängt wirkt?',
		whyAsk: 'Erkennt Remote-Isolation, Zeitzonensilos oder schwelende unausgesprochene Differenzen.'
	},
	{
		id: 't6',
		category: 'team-dynamics',
		text: 'Hast du das Gefühl, dass deine Ideen, Vorschläge und RFCs vom Team wirklich ernst genommen werden?',
		whyAsk:
			'Macht Gefühle der Ausgrenzung, Senioritäts-Hierarchien oder dominantes Verhalten sichtbar.'
	},

	// Engpässe & Prozesse
	{
		id: 'b1',
		category: 'blockers',
		text: 'Was raubt dir aktuell zu viel Zeit oder wirkt unnötig bürokratisch?',
		whyAsk: 'Identifiziert überflüssigen Mehraufwand und starre Prozesse.'
	},
	{
		id: 'b2',
		category: 'blockers',
		text: 'Welches wiederkehrende Meeting in deinem Kalender bringt am wenigsten Mehrwert?',
		whyAsk: 'Schützt Fokuszeit und räumt den Kalender auf.'
	},
	{
		id: 'b3',
		category: 'blockers',
		text: 'Gibt es Abhängigkeiten von anderen Teams, die deinen Fortschritt blockieren?',
		whyAsk: 'Signalisiert, wo die Führungskraft vermitteln muss.'
	},
	{
		id: 'b4',
		category: 'blockers',
		text: 'Welche Verbesserung an unserer CI/CD oder Entwicklungsumgebung hätte den größten Hebel?',
		whyAsk: 'Findet echte Engpässe in der Developer Experience.'
	},
	{
		id: 'b5',
		category: 'blockers',
		text: 'Was in deiner täglichen Arbeit ist mühsamer oder komplizierter, als es eigentlich sein sollte?',
		whyAsk:
			'Klassischer Reibungs-Indikator: langsame CI/CD-Pipelines, instabile Tests, fehlende Staging-Daten oder Freigabestau.'
	},
	{
		id: 'b6',
		category: 'blockers',
		text: 'Gibt es Teile unserer Codebasis oder Architektur, die das Team aus Angst kaum anzurühren wagt, und warum?',
		whyAsk: 'Legt Altlasten ohne Testabdeckung und Single-Points-of-Failure schonungslos offen.'
	},
	{
		id: 'b7',
		category: 'blockers',
		text: 'Welches umständliche interne Tool oder Verfahren dulden wir nur noch, weil "wir das schon immer so gemacht haben"?',
		whyAsk:
			'Macht veraltete Release-Checklisten, manuelle Berechtigungsvergaben und träge Gewohnheiten sichtbar.'
	},
	{
		id: 'b8',
		category: 'blockers',
		text: 'Wenn du zwei volle Tage Zeit hättest, um technische Schulden abzutragen, woran würdest du zuerst ansetzen?',
		whyAsk:
			'Bringt wertvolle Refactoring-Ideen mit hoher Hebelwirkung ans Licht, die sonst im Tagesgeschäft untergehen.'
	},
	{
		id: 'b9',
		category: 'blockers',
		text: 'Bist du in diesem Zyklus auf Berechtigungsprobleme, Cloud-IAM-Hürden oder fehlende Zugänge gestoßen?',
		whyAsk:
			'Zeigt Sicherheitsbürokratie, schleppenden IT-Support oder mangelnde Berechtigungen auf.'
	},

	// Strategie & Sinn
	{
		id: 's1',
		category: 'strategy',
		text: 'Ist dir klar verständlich, warum unsere aktuellen Sprint-Ziele für unsere Kunden und das Geschäft wichtig sind?',
		whyAsk:
			'Verhindert, dass sich Entwickler wie isolierte Ticket-Abarbeiter ohne Sinnbezug fühlen.'
	},
	{
		id: 's2',
		category: 'strategy',
		text: 'Gab es kürzlich Ankündigungen oder Kurswechsel der Führung, die verwirrend wirkten oder unseren Zielen widersprachen?',
		whyAsk:
			'Macht Gerüchte, Richtungsunsicherheiten und Lücken in der Unternehmenskommunikation sichtbar.'
	},
	{
		id: 's3',
		category: 'strategy',
		text: 'Wenn ein Bewerber dich im Vorstellungsgespräch nach der obersten Unternehmenspriorität dieses Quartals fragte: Was würdest du sagen?',
		whyAsk:
			'Prüft, wie klar die strategische Vision an der Basis tatsächlich ankommt und verstanden wird.'
	},
	{
		id: 's4',
		category: 'strategy',
		text: 'Hast du das Gefühl, dass wir das Richtige bauen, oder lösen wir das falsche Kundenproblem?',
		whyAsk:
			'Bringt wertvolle Zweifel an Produktentscheidungen ans Licht, bevor monatelang in die falsche Richtung entwickelt wird.'
	},
	{
		id: 's5',
		category: 'strategy',
		text: 'Was würde passieren, wenn sich der aktuelle Meilenstein um einen Monat verschiebt? Ist das geschäftlich wirklich kritisch?',
		whyAsk:
			'Unterscheidet zwischen echter geschäftlicher Dringlichkeit und künstlich erzeugtem Management-Stress.'
	},

	// Wachstum & Ambitionen
	{
		id: 'c1',
		category: 'career',
		text: 'Welcher Bereich auf unserer kommenden Roadmap reizt dich am meisten?',
		whyAsk: 'Verknüpft Projektaufgaben mit echter Motivation.'
	},
	{
		id: 'c2',
		category: 'career',
		text: 'Welche Technologie oder Fähigkeit möchtest du dieses Jahr unbedingt vertiefen?',
		whyAsk: 'Dient als Grundlage für Weiterbildung und Entwicklungsaufgaben.'
	},
	{
		id: 'c3',
		category: 'career',
		text: 'Siehst du deine Rolle in 1–2 Jahren eher in technischer Tiefe/Architektur oder in Teamführung?',
		whyAsk: 'Hilft bei der Ausrichtung auf der Fach- oder Führungslaufbahn.'
	},
	{
		id: 'c4',
		category: 'career',
		text: 'Bei welcher Aufgabe hast du zuletzt gespürt, dass du dein volles Potenzial abrufen konntest?',
		whyAsk: 'Identifiziert Aufgaben, die besondere Stärken aktivieren.'
	},
	{
		id: 'c5',
		category: 'career',
		text: 'Welche konkrete Kompetenzlücke bremst deinen nächsten Entwicklungsschritt derzeit am stärksten?',
		whyAsk:
			'Lenkt Entwicklungsgespräche auf greifbare Wachstumsfelder (Systemdesign, Umgang mit Ambiguität, Führung).'
	},
	{
		id: 'c6',
		category: 'career',
		text: 'Hast du das Gefühl, dass du schneller lernst als der Markt, oder stagniert dein fachlicher Fortschritt?',
		whyAsk: 'Der wichtigste Frühindikator für Abwanderung und Demotivation bei Top-Entwicklern.'
	},

	// Kapazität & Wohlbefinden
	{
		id: 'w1',
		category: 'workload',
		text: 'Wie nachhaltig fühlt sich dein aktuelles Arbeitstempo über die nächsten 2–3 Monate an?',
		whyAsk: 'Unterscheidet Marathon-Tempo von Burnout-Gefahr.'
	},
	{
		id: 'w2',
		category: 'workload',
		text: 'Schaffst du es, abends und am Wochenende den Laptop zuzuklappen und abzuschalten?',
		whyAsk: 'Schützt gesunde Grenzen und Erholungsphasen.'
	},
	{
		id: 'w3',
		category: 'workload',
		text: 'Wenn du diese Woche eine Aufgabe streichen müsstest, um durchzuatmen: Welche wäre das?',
		whyAsk: 'Macht Aufgaben mit geringem Nutzen und hohem Stress sofort sichtbar.'
	},
	{
		id: 'w4',
		category: 'workload',
		text: 'Spürst du Druck, außerhalb der Arbeitszeiten erreichbar zu sein?',
		whyAsk: 'Deckt ungesunden Erreichbarkeitsdruck auf.'
	},
	{
		id: 'w5',
		category: 'workload',
		text: 'Mir ist aufgefallen, dass du zuletzt spät abends oder am Wochenende gearbeitet hast. Wie geht es dir körperlich dabei?',
		whyAsk:
			'Prüft auf Schlafmangel, körperliche Erschöpfung und chronischen Stress vor einem akuten Burnout.'
	},
	{
		id: 'w6',
		category: 'workload',
		text: 'Wann hattest du das letzte Mal einen freien Tag und hast Slack und E-Mails wirklich komplett ignoriert?',
		whyAsk:
			'Macht Schuldgefühle bei Urlaub, Helden-Syndrome oder die Angst vor Kontrollverlust greifbar.'
	},
	{
		id: 'w7',
		category: 'workload',
		text: 'Wie kann ich dir den Rücken freihalten, damit du in der kommenden Woche durchatmen und neue Kraft schöpfen kannst?',
		whyAsk:
			'Ermöglicht konkrete Schutzmaßnahmen durch die Führungskraft (Meetings absagen, Fristen verschieben).'
	}
];

export const questionsEs: QuestionItem[] = [
	// Contacto y energía
	{
		id: 'e1',
		category: 'icebreaker',
		text: '¿Cómo está tu batería mental y nivel de energía esta semana del 1 al 5?',
		whyAsk: 'Pulso cuantitativo rápido que normaliza hablar del cansancio y la energía.'
	},
	{
		id: 'e2',
		category: 'icebreaker',
		text: '¿Cuál fue el momento más gratificante de tu semana, dentro o fuera del trabajo?',
		whyAsk: 'Fomenta la reflexión positiva y comparte contexto humano.'
	},
	{
		id: 'e3',
		category: 'icebreaker',
		text: 'Si tuvieras una varita mágica, ¿qué cambiarías de tu entorno de trabajo diario?',
		whyAsk: 'Identifica fricciones ergonómicas o cotidianas.'
	},
	{
		id: 'e4',
		category: 'icebreaker',
		text: '¿Tuviste tiempo para trabajo enfocado e ininterrumpido esta semana?',
		whyAsk: 'Evalúa la fragmentación de la agenda y el tiempo de concentración.'
	},
	{
		id: 'e5',
		category: 'icebreaker',
		text: '¿Qué tarea te dio impulso creativo en este sprint y cuál se sintió como una rutina desgastante?',
		whyAsk:
			'Identifica acumulación de tareas monótonas, sobrecarga de guardias o procesos manuales repetitivos.'
	},

	// Feedback al mánager
	{
		id: 'm1',
		category: 'upward-feedback',
		text: '¿Qué pequeña acción podría empezar a hacer o cambiar para apoyarte mejor?',
		whyAsk: 'Reduce la barrera psicológica para criticar constructivamente al líder.'
	},
	{
		id: 'm2',
		category: 'upward-feedback',
		text: '¿En qué aspectos sientes que intervengo demasiado y dónde te falta orientación?',
		whyAsk: 'Calibra el equilibrio entre microgestión y desatención.'
	},
	{
		id: 'm3',
		category: 'upward-feedback',
		text: '¿Hubo decisiones recientes donde sentiste falta de contexto o desacuerdo?',
		whyAsk: 'Descubre desacuerdos antes de que deriven en frustración.'
	},
	{
		id: 'm4',
		category: 'upward-feedback',
		text: '¿Qué tan claras tienes las 3 prioridades principales de nuestro equipo este trimestre?',
		whyAsk: 'Comprueba la claridad estratégica sin tono de examen.'
	},
	{
		id: 'm5',
		category: 'upward-feedback',
		text: '¿Te doy retroalimentación con suficiente agilidad o te ha tomado por sorpresa?',
		whyAsk: 'Asegura que el feedback fluya con mínima latencia.'
	},
	{
		id: 'm6',
		category: 'upward-feedback',
		text: '¿En qué momentos me convierto sin querer en un cuello de botella o motivo de demora para ti?',
		whyAsk:
			'Permite detectar revisiones de código retrasadas, aprobaciones lentas o microgestión involuntaria.'
	},
	{
		id: 'm7',
		category: 'upward-feedback',
		text: '¿Hubo alguna reunión o situación reciente que yo haya gestionado mal y donde pudiera haber actuado mejor?',
		whyAsk:
			'Destapa puntos ciegos en la comunicación, el tono o la defensa de los intereses del equipo.'
	},
	{
		id: 'm8',
		category: 'upward-feedback',
		text: '¿Qué aspecto de tu realidad laboral diaria te gustaría que yo comprendiera mejor?',
		whyAsk:
			'Cierra la brecha de empatía entre la planificación estratégica y los retos técnicos reales sobre el terreno.'
	},

	// Equipo y cultura
	{
		id: 't1',
		category: 'team-dynamics',
		text: '¿Quién del equipo o de otras áreas te ha ayudado de forma especial recientemente?',
		whyAsk: 'Reconoce la labor silenciosa y el compañerismo.'
	},
	{
		id: 't2',
		category: 'team-dynamics',
		text: '¿Qué tan seguro te sientes al expresar una opinión discrepante en el equipo?',
		whyAsk: 'Medida directa de la seguridad psicológica.'
	},
	{
		id: 't3',
		category: 'team-dynamics',
		text: '¿Notas alguna tensión o roce latente en el equipo que debamos abordar?',
		whyAsk: 'Previene que los conflictos interpersonales escalen.'
	},
	{
		id: 't4',
		category: 'team-dynamics',
		text: '¿Las revisiones de código y debates técnicos se sienten constructivos o estresantes?',
		whyAsk: 'Verifica la salud de la cultura de ingeniería.'
	},
	{
		id: 't5',
		category: 'team-dynamics',
		text: '¿Cómo se siente la colaboración en el equipo ahora mismo? ¿Hay alguien que parezca aislado o fuera del circuito?',
		whyAsk: 'Diagnostica desconexión en remoto, silos horarios o desacuerdos silenciosos.'
	},
	{
		id: 't6',
		category: 'team-dynamics',
		text: '¿Sientes que el resto del equipo toma en serio tus ideas, propuestas y documentos de diseño (RFC)?',
		whyAsk:
			'Detecta posibles sentimientos de exclusión, sesgo de antigüedad o voces dominantes que anulan opiniones.'
	},

	// Bloqueos y procesos
	{
		id: 'b1',
		category: 'blockers',
		text: '¿Qué te está quitando demasiado tiempo ahora mismo que se sienta burocrático o innecesario?',
		whyAsk: 'Localiza ineficiencias y procesos obsoletos.'
	},
	{
		id: 'b2',
		category: 'blockers',
		text: '¿Qué reunión periódica en tu calendario te aporta menor valor?',
		whyAsk: 'Protege el tiempo de desarrollo y limpia la agenda.'
	},
	{
		id: 'b3',
		category: 'blockers',
		text: '¿Hay dependencias de otros equipos que estén frenando tu progreso?',
		whyAsk: 'Señala dónde debe mediar el mánager con otras áreas.'
	},
	{
		id: 'b4',
		category: 'blockers',
		text: '¿Qué mejora en nuestro pipeline de CI/CD o entorno local tendría mayor impacto?',
		whyAsk: 'Identifica trabas en la experiencia de desarrollo (DevEx).'
	},
	{
		id: 'b5',
		category: 'blockers',
		text: '¿Qué aspectos de tu trabajo diario son más difíciles o lentos de lo que deberían ser?',
		whyAsk:
			'La clásica pregunta de fricción: pipelines lentos, tests intermitentes, falta de datos de prueba o burocracia.'
	},
	{
		id: 'b6',
		category: 'blockers',
		text: '¿Hay alguna parte de nuestro código o arquitectura que al equipo le dé pánico tocar, y por qué?',
		whyAsk:
			'Identifica bombas de relojería heredadas sin tests y servicios que son un único punto de fallo.'
	},
	{
		id: 'b7',
		category: 'blockers',
		text: '¿Cuál es la herramienta o proceso interno más engorroso que aún toleramos solo "porque siempre se ha hecho así"?',
		whyAsk:
			'Destapa listas de verificación obsoletas, solicitudes manuales de accesos e inercia organizativa.'
	},
	{
		id: 'b8',
		category: 'blockers',
		text: 'Si tuvieras dos días completos para solventar deuda técnica en nuestro servicio, ¿qué resolverías primero?',
		whyAsk:
			'Saca a la superficie ideas de refactorización de alto rendimiento que los ingenieros suelen callar por las prisas.'
	},
	{
		id: 'b9',
		category: 'blockers',
		text: '¿Te has topado con trabas de permisos, accesos en la nube o credenciales en este ciclo?',
		whyAsk:
			'Identifica burocracia de seguridad, lentitud en soporte de TI o falta de credenciales de desarrollo.'
	},

	// Estrategia y propósito
	{
		id: 's1',
		category: 'strategy',
		text: '¿Tienes claro por qué los objetivos del sprint actual son relevantes para los clientes y el negocio?',
		whyAsk:
			'Evita que los desarrolladores se sientan como simples ejecutores de tareas desconectados del impacto real.'
	},
	{
		id: 's2',
		category: 'strategy',
		text: '¿Hubo anuncios o giros recientes de la dirección que te parecieran confusos o contradictorios con nuestras metas?',
		whyAsk: 'Detecta rumores, bandazos estratégicos y falta de contexto por parte del liderazgo.'
	},
	{
		id: 's3',
		category: 'strategy',
		text: 'Si un candidato te preguntara en una entrevista cuál es la máxima prioridad de la empresa este trimestre, ¿qué le dirías?',
		whyAsk:
			'Comprueba el grado real de alineación estratégica y si los objetivos calan en el día a día.'
	},
	{
		id: 's4',
		category: 'strategy',
		text: '¿Crees que estamos construyendo lo adecuado o estamos intentando resolver el problema equivocado del cliente?',
		whyAsk:
			'Detecta dudas fundadas del equipo sobre la viabilidad del producto antes de malgastar recursos.'
	},
	{
		id: 's5',
		category: 'strategy',
		text: '¿Qué pasaría realmente si retrasamos este hito un mes? ¿Es verdaderamente crítico para el negocio?',
		whyAsk:
			'Distingue la urgencia empresarial real del pánico artificial autoimpuesto por la gestión.'
	},

	// Crecimiento y metas
	{
		id: 'c1',
		category: 'career',
		text: 'Mirando la hoja de ruta de los próximos meses, ¿qué reto te entusiasma más?',
		whyAsk: 'Conecta la asignación de proyectos con la motivación real.'
	},
	{
		id: 'c2',
		category: 'career',
		text: '¿Qué tecnología o competencia te gustaría dominar este año?',
		whyAsk: 'Orienta oportunidades de aprendizaje y retos prácticos.'
	},
	{
		id: 'c3',
		category: 'career',
		text: 'De cara a 1–2 años, ¿te ves más en profundidad técnica/arquitectura o liderando personas?',
		whyAsk: 'Ayuda a planificar la carrera técnica o de gestión.'
	},
	{
		id: 'c4',
		category: 'career',
		text: '¿En qué tarea reciente sentiste que diste tu máximo potencial y orgullo?',
		whyAsk: 'Descubre las condiciones donde rinde con mayor plenitud.'
	},
	{
		id: 'c5',
		category: 'career',
		text: '¿Cuál es la principal brecha de habilidades o experiencia que frena tu salto al siguiente nivel?',
		whyAsk:
			'Centra la conversación en áreas de crecimiento concretas (diseño de sistemas, gestión de la incertidumbre, liderazgo).'
	},
	{
		id: 'c6',
		category: 'career',
		text: '¿Sientes que estás aprendiendo más rápido que el mercado o percibes que tu progreso profesional se estanca?',
		whyAsk: 'El indicador temprano número uno de desmotivación y fuga de talento técnico clave.'
	},

	// Carga y bienestar
	{
		id: 'w1',
		category: 'workload',
		text: '¿Qué tan sostenible sientes tu ritmo de trabajo actual para los próximos 2–3 meses?',
		whyAsk: 'Distingue un ritmo de maratón del desgaste insostenible.'
	},
	{
		id: 'w2',
		category: 'workload',
		text: '¿Logras desconectar por completo el portátil y notificaciones por las tardes y fines de semana?',
		whyAsk: 'Defiende los límites personales y el descanso real.'
	},
	{
		id: 'w3',
		category: 'workload',
		text: 'Si tuvieras que descartar una tarea esta semana para respirar, ¿cuál sería?',
		whyAsk: 'Evidencia de inmediato tareas de bajo valor y alto estrés.'
	},
	{
		id: 'w4',
		category: 'workload',
		text: '¿Sientes presión implícita por responder mensajes fuera del horario laboral?',
		whyAsk: 'Destapa presiones tóxicas de disponibilidad.'
	},
	{
		id: 'w5',
		category: 'workload',
		text: 'He notado que has estado trabajando hasta tarde o en fines de semana últimamente. ¿Cómo estás físicamente?',
		whyAsk:
			'Evalúa falta de sueño, agotamiento corporal y síntomas de estrés antes de caer en un agotamiento severo.'
	},
	{
		id: 'w6',
		category: 'workload',
		text: '¿Cuándo fue la última vez que te tomaste un día libre y desconectaste al 100% de Slack y del correo?',
		whyAsk:
			'Detecta sentimiento de culpa al descansar, síndrome del héroe o temor a que las cosas se desmoronen.'
	},
	{
		id: 'w7',
		category: 'workload',
		text: '¿Cómo puedo hacerte de escudo protector para que puedas respirar y recuperar energía la próxima semana?',
		whyAsk:
			'Ofrece medidas protectoras concretas del mánager: cancelar reuniones, negociar plazos o frenar peticiones.'
	}
];

export const questionsFr: QuestionItem[] = [
	// Contact & Énergie
	{
		id: 'e1',
		category: 'icebreaker',
		text: 'Où se situe ta batterie mentale et ton niveau d’énergie cette semaine de 1 à 5 ?',
		whyAsk: 'Mesure rapide qui normalise la discussion sur la fatigue et la réserve d’énergie.'
	},
	{
		id: 'e2',
		category: 'icebreaker',
		text: 'Quel a été le moment le plus positif de ta semaine, au travail ou ailleurs ?',
		whyAsk: 'Encourage la réflexion constructive et partage du contexte humain.'
	},
	{
		id: 'e3',
		category: 'icebreaker',
		text: 'Si tu avais une baguette magique, que changerais-tu dans ton cadre de travail quotidien ?',
		whyAsk: 'Révèle les petits irritants matériels ou d’organisation.'
	},
	{
		id: 'e4',
		category: 'icebreaker',
		text: 'As-tu pu avancer sur des plages de travail concentré cette semaine sans être interrompu(e) ?',
		whyAsk: 'Évalue la fragmentation de l’agenda et le temps de réflexion.'
	},
	{
		id: 'e5',
		category: 'icebreaker',
		text: 'Quelle tâche t’a apporté un élan créatif ce sprint, et laquelle t’a semblé être une corvée épuisante ?',
		whyAsk:
			'Met au jour l’accumulation de tâches ingrates, de pics d’astreinte ou de corvées manuelles.'
	},

	// Feedback au manager
	{
		id: 'm1',
		category: 'upward-feedback',
		text: 'Quelle petite action pourrais-je commencer ou changer pour mieux t’épauler ?',
		whyAsk: 'Abaisse la barrière pour formuler une critique constructive au manager.'
	},
	{
		id: 'm2',
		category: 'upward-feedback',
		text: 'Dans quels domaines penses-tu que j’interviens trop, et où manquerais-tu de cadre ?',
		whyAsk: 'Équilibre le micro-management et le manque d’accompagnement.'
	},
	{
		id: 'm3',
		category: 'upward-feedback',
		text: 'Y a-t-il eu des décisions récentes où le contexte t’a manqué ou avec lesquelles tu n’étais pas d’accord ?',
		whyAsk: 'Fait émerger les désaccords silencieux avant le désengagement.'
	},
	{
		id: 'm4',
		category: 'upward-feedback',
		text: 'À quel point les 3 priorités clés de notre équipe ce trimestre sont-elles claires pour toi ?',
		whyAsk: 'Teste la clarté stratégique sans posture d’examen.'
	},
	{
		id: 'm5',
		category: 'upward-feedback',
		text: 'Mes retours te parviennent-ils assez tôt, ou as-tu déjà été surpris(e) ?',
		whyAsk: 'Garantit une latence minimale dans les échanges de feedback.'
	},
	{
		id: 'm6',
		category: 'upward-feedback',
		text: 'Où est-ce que je constitue involontairement un goulot d’étranglement ou un frein pour toi ?',
		whyAsk:
			'Permet de repérer les revues de code en attente, les approbations lentes ou la micro-gestion.'
	},
	{
		id: 'm7',
		category: 'upward-feedback',
		text: 'Y a-t-il eu récemment une réunion ou une situation que j’ai mal gérée et où j’aurais pu mieux faire ?',
		whyAsk:
			'Révèle les angles morts dans la communication, le ton employé ou la défense de l’équipe.'
	},
	{
		id: 'm8',
		category: 'upward-feedback',
		text: 'Qu’aimerais-tu que je comprenne mieux concernant ta réalité technique au quotidien ?',
		whyAsk:
			'Comble le fossé d’empathie entre la planification stratégique et les contraintes techniques du terrain.'
	},

	// Équipe & Culture
	{
		id: 't1',
		category: 'team-dynamics',
		text: 'Qui dans l’équipe ou les services voisins t’a particulièrement aidé(e) récemment ?',
		whyAsk: 'Valorise l’entraide et le travail collectif invisible.'
	},
	{
		id: 't2',
		category: 'team-dynamics',
		text: 'Te sens-tu à l’aise pour exprimer une opinion divergente ou reconnaître une erreur en réunion ?',
		whyAsk: 'Mesure directe du degré de sécurité psychologique.'
	},
	{
		id: 't3',
		category: 'team-dynamics',
		text: 'Ressens-tu des tensions latentes ou des frictions dans l’équipe qu’il faudrait aborder ?',
		whyAsk: 'Désamorce les conflits interpersonnels à la racine.'
	},
	{
		id: 't4',
		category: 'team-dynamics',
		text: 'Les revues de code et débats techniques te semblent-ils constructifs ou anxiogènes ?',
		whyAsk: 'Vérifie la maturité de la culture technique.'
	},
	{
		id: 't5',
		category: 'team-dynamics',
		text: 'Comment perçois-tu la collaboration au sein de l’équipe actuellement ? Quelqu’un semble-t-il isolé ou exclu ?',
		whyAsk:
			'Diagnostique l’isolement en télétravail, les silos de fuseaux horaires ou les désaccords silencieux.'
	},
	{
		id: 't6',
		category: 'team-dynamics',
		text: 'Sens-tu que tes idées, propositions et RFC sont réellement prises au sérieux par le reste de l’équipe ?',
		whyAsk:
			'Met en lumière le sentiment d’exclusion, les biais d’ancienneté ou la confiscation du débat par des voix dominantes.'
	},

	// Freins & Processus
	{
		id: 'b1',
		category: 'blockers',
		text: 'Qu’est-ce qui te prend trop de temps actuellement et te paraît inutilement lourd ?',
		whyAsk: 'Identifie les lenteurs bureaucratiques et les pertes de temps.'
	},
	{
		id: 'b2',
		category: 'blockers',
		text: 'Quelle réunion récurrente dans ton calendrier t’apporte le moins de valeur ?',
		whyAsk: 'Protège le temps utile et élague les réunions obsolètes.'
	},
	{
		id: 'b3',
		category: 'blockers',
		text: 'Y a-t-il des dépendances envers d’autres équipes qui bloquent ton avancement ?',
		whyAsk: 'Indique où le manager doit intervenir pour fluidifier les relations.'
	},
	{
		id: 'b4',
		category: 'blockers',
		text: 'Quelle amélioration dans notre CI/CD ou environnement local aurait le plus d’impact ?',
		whyAsk: 'Isole les freins dans l’expérience développeur (DevEx).'
	},
	{
		id: 'b5',
		category: 'blockers',
		text: 'Qu’est-ce qui est plus difficile dans ton travail quotidien que cela ne devrait l’être ?',
		whyAsk:
			'L’indicateur classique de friction : pipelines CI/CD lents, tests instables, manque de données de test ou bureaucratie.'
	},
	{
		id: 'b6',
		category: 'blockers',
		text: 'Y a-t-il une partie de notre base de code ou de notre architecture que l’équipe a peur de modifier, et pourquoi ?',
		whyAsk: 'Identifie le code hérité dangereux non testé et les points de défaillance uniques.'
	},
	{
		id: 'b7',
		category: 'blockers',
		text: 'Quel est l’outil ou le processus interne le plus archaïque qu’on tolère encore simplement parce que « ça a toujours été comme ça » ?',
		whyAsk:
			'Met au jour des checklists de déploiement dépassées, des autorisations manuelles et des habitudes tenaces.'
	},
	{
		id: 'b8',
		category: 'blockers',
		text: 'Si tu disposais de deux jours entiers pour résorber de la dette technique, par quoi commencerais-tu ?',
		whyAsk:
			'Fait émerger des idées de refactoring à fort ROI que les ingénieurs gardent pour eux sous la pression des délais.'
	},
	{
		id: 'b9',
		category: 'blockers',
		text: 'As-tu rencontré des blocages d’accès, de droits IAM cloud ou d’identifiants pendant ce cycle ?',
		whyAsk:
			'Révèle la bureaucratie liée à la sécurité, les lenteurs du support informatique ou les accès manquants.'
	},

	// Stratégie & Sens
	{
		id: 's1',
		category: 'strategy',
		text: 'Comprends-tu clairement pourquoi les objectifs du sprint actuel sont importants pour nos clients et l’entreprise ?',
		whyAsk:
			'Évite que les ingénieurs ne se sentent comme de simples exécutants de tickets privés de sens.'
	},
	{
		id: 's2',
		category: 'strategy',
		text: 'Y a-t-il eu récemment des annonces ou des changements de cap de la direction qui t’ont semblé confus ou contradictoires ?',
		whyAsk:
			'Fait remonter les rumeurs, l’incompréhension stratégique et le manque d’explications de la direction.'
	},
	{
		id: 's3',
		category: 'strategy',
		text: 'Si un candidat te demandait en entretien quelle est la priorité n°1 de l’entreprise ce trimestre, que répondrais-tu ?',
		whyAsk:
			'Évalue l’alignement stratégique et la diffusion réelle des priorités jusqu’aux équipes techniques.'
	},
	{
		id: 's4',
		category: 'strategy',
		text: 'Penses-tu que nous construisons le bon produit, ou résolvons-nous le mauvais problème utilisateur ?',
		whyAsk:
			'Révèle les doutes techniques et fonctionnels sur la pertinence du produit avant de perdre des mois d’efforts.'
	},
	{
		id: 's5',
		category: 'strategy',
		text: 'Que se passerait-il si nous repoussions cette livraison d’un mois ? Est-ce réellement critique pour le business ?',
		whyAsk:
			'Distingue l’urgence commerciale réelle de la panique artificielle induite par le management.'
	},

	// Évolution & Ambitions
	{
		id: 'c1',
		category: 'career',
		text: 'Au vu de notre feuille de route, quel projet ou défi te motive le plus ?',
		whyAsk: 'Rapproche les affectations de projets des motivations profondes.'
	},
	{
		id: 'c2',
		category: 'career',
		text: 'Quelle technologie ou compétence aimerais-tu approfondir cette année ?',
		whyAsk: 'Nourrit le plan de formation et les opportunités d’apprentissage.'
	},
	{
		id: 'c3',
		category: 'career',
		text: 'D’ici 1 à 2 ans, te projettes-tu plutôt vers l’expertise technique ou le management ?',
		whyAsk: 'Aide à positionner la personne sur la bonne filière.'
	},
	{
		id: 'c4',
		category: 'career',
		text: 'Sur quelle mission récente as-tu eu le sentiment d’exprimer ton plein potentiel ?',
		whyAsk: 'Révèle les conditions propices à l’excellence.'
	},
	{
		id: 'c5',
		category: 'career',
		text: 'Quel est le principal écart de compétences qui freine ton passage au niveau supérieur ?',
		whyAsk:
			'Oriente la discussion sur des axes de progression concrets (conception système, gestion de l’ambiguïté, leadership).'
	},
	{
		id: 'c6',
		category: 'career',
		text: 'As-tu l’impression d’apprendre plus vite que le marché, ou ton développement professionnel stagne-t-il ?',
		whyAsk: 'L’indicateur précurseur n°1 du risque de départ ou de désengagement des ingénieurs.'
	},

	// Charge & Équilibre
	{
		id: 'w1',
		category: 'workload',
		text: 'À quel point ton rythme de travail actuel te semble-t-il tenable sur les 2–3 prochains mois ?',
		whyAsk: 'Distingue l’endurance d’un risque d’épuisement imminent.'
	},
	{
		id: 'w2',
		category: 'workload',
		text: 'Arrives-tu à fermer complètement ton ordinateur et couper les alertes le soir et le week-end ?',
		whyAsk: 'Défend le droit à la déconnexion et le repos effectif.'
	},
	{
		id: 'w3',
		category: 'workload',
		text: 'Si tu devais abandonner une tâche cette semaine pour souffler, laquelle choisirais-tu ?',
		whyAsk: 'Met en lumière les tâches à faible valeur et forte charge mentale.'
	},
	{
		id: 'w4',
		category: 'workload',
		text: 'Ressens-tu une pression implicite à répondre aux messages en dehors des heures ouvrées ?',
		whyAsk: 'Met au jour une fausse injonction de disponibilité permanente.'
	},
	{
		id: 'w5',
		category: 'workload',
		text: 'J’ai remarqué que tu as travaillé tard le soir ou le week-end récemment. Comment tiens-tu le coup physiquement ?',
		whyAsk:
			'Vérifie le manque de sommeil, l’épuisement physique et les signes de stress avant le burn-out aigu.'
	},
	{
		id: 'w6',
		category: 'workload',
		text: 'À quand remonte ton dernier vrai jour de congé où tu t’es totalement déconnecté(e) de Slack et des e-mails ?',
		whyAsk:
			'Révèle la culpabilité de prendre des vacances, le syndrome du héros ou la peur que tout s’effondre en son absence.'
	},
	{
		id: 'w7',
		category: 'workload',
		text: 'Comment puis-je te protéger et te faire gagner de l’espace pour que tu puisses souffler la semaine prochaine ?',
		whyAsk:
			'Permet au manager d’agir concrètement : refuser des réunions, repousser des échéances, absorber la pression.'
	}
];

export const questionsLv: QuestionItem[] = [
	// Kontakts un enerģija
	{
		id: 'e1',
		category: 'icebreaker',
		text: 'Kāds ir tavs mentālais resurss un enerģijas līmenis šonedēļ skalā no 1 līdz 5?',
		whyAsk: 'Ātrs kvantitatīvs rādītājs, kas normalizē atklātu sarunu par enerģiju un nogurumu.'
	},
	{
		id: 'e2',
		category: 'icebreaker',
		text: 'Kas bija tavas aizvadītās nedēļas patīkamākais brīdis darbā vai ārpus tā?',
		whyAsk: 'Veicina pozitīvu noskaņojumu un atklāj personīgo kontekstu.'
	},
	{
		id: 'e3',
		category: 'icebreaker',
		text: 'Ja tev būtu burvju nūjiņa, ko vienu tu mainītu savā ikdienas darba vidē?',
		whyAsk: 'Palīdz pamanīt ergonomiskus vai ikdienas sīkumus, kas traucē.'
	},
	{
		id: 'e4',
		category: 'icebreaker',
		text: 'Vai šonedēļ izdevās netraucēti pastrādāt pie sarežģītākiem uzdevumiem (deep work)?',
		whyAsk: 'Novērtē kalendāra sadrumstalotību un koncentrēšanās iespējas.'
	},
	{
		id: 'e5',
		category: 'icebreaker',
		text: 'Kurš uzdevums šajā sprintā deva radošu enerģiju un kurš šķita kā nogurdinoša rutīna?',
		whyAsk: 'Atklāj vienveidīgu uzdevumu uzkrāšanos, dežūru pārslodzi vai manuālu darbu.'
	},

	// Atgriezeniskā saite vadītājam
	{
		id: 'm1',
		category: 'upward-feedback',
		text: 'Ko vienu es kā vadītājs varētu sākt darīt vai darīt citādi, lai tevi labāk atbalstītu?',
		whyAsk: 'Mazina psiholoģisko barjeru konstruktīvas kritikas sniegšanai vadītājam.'
	},
	{
		id: 'm2',
		category: 'upward-feedback',
		text: 'Kurās jomās es iejaucos par daudz un kur pietrūkst mana atbalsta vai konteksta?',
		whyAsk: 'Salāgo līdzsvaru starp mikromenedžmentu un patstāvību.'
	},
	{
		id: 'm3',
		category: 'upward-feedback',
		text: 'Vai nesen ir pieņemti lēmumi, kur tev pietrūka pamatojuma vai ar kuriem nepiekriti?',
		whyAsk: 'Atklāj klusējošu nepiekrišanu pirms tā pāraug neapmierinātībā.'
	},
	{
		id: 'm4',
		category: 'upward-feedback',
		text: 'Cik skaidras tev šķiet mūsu komandas trīs galvenās prioritātes šajā ceturksnī?',
		whyAsk: 'Pārbauda stratēģijas skaidrību bez eksaminēšanas toņa.'
	},
	{
		id: 'm5',
		category: 'upward-feedback',
		text: 'Vai atgriezeniskā saite no manis nāk laicīgi, vai kādreiz ir bijis pārsteiguma moments?',
		whyAsk: 'Nodrošina minimālu laika aizturi atgriezeniskās saites sniegšanā.'
	},
	{
		id: 'm6',
		category: 'upward-feedback',
		text: 'Kuros posmos es neviļus kļūstu par šauro vietu vai aiztures cēloni tavā darbā?',
		whyAsk:
			'Palīdz pamanīt aizkavētas koda pārskates, lēnus saskaņojumus vai nevajadzīgu mikromenedžmentu.'
	},
	{
		id: 'm7',
		category: 'upward-feedback',
		text: 'Vai pēdējā laikā bija kāda sapulce vai situācija, ko es novadīju neveiksmīgi un varēju rīkoties labāk?',
		whyAsk: 'Atklāj aklās zonas vadītāja komunikācijā, balss tonī vai komandas interešu aizstāvībā.'
	},
	{
		id: 'm8',
		category: 'upward-feedback',
		text: 'Ko par tavu ikdienas darba realitāti tu vēlētos, lai es izprastu labāk?',
		whyAsk:
			'Mazina plaisu starp augsta līmeņa plānošanu un reālajiem tehniskās izstrādes izaicinājumiem.'
	},

	// Komanda un kultūra
	{
		id: 't1',
		category: 'team-dynamics',
		text: 'Kurš komandā vai no citiem departamentiem tev pēdējā laikā ir īpaši palīdzējis?',
		whyAsk: 'Izceļ komandas biedru atbalstu un sadarbības kultūru.'
	},
	{
		id: 't2',
		category: 'team-dynamics',
		text: 'Cik droši tu jūties izteikt nepopulāru viedokli vai atzīt kļūdu komandas sarunās?',
		whyAsk: 'Tiešs psiholoģiskās drošības rādītājs komandā.'
	},
	{
		id: 't3',
		category: 'team-dynamics',
		text: 'Vai komandā ir jūtama kāda spriedze vai berze, kurai būtu vērts pievērst uzmanību?',
		whyAsk: 'Palīdz risināt domstarpības, pirms tās pāraug konfliktos.'
	},
	{
		id: 't4',
		category: 'team-dynamics',
		text: 'Vai koda pārskatīšana (code review) un tehniskās diskusijas rit konstruktīvi vai rada stresu?',
		whyAsk: 'Pārbauda ikdienas inženierijas kultūras veselīgumu.'
	},
	{
		id: 't5',
		category: 'team-dynamics',
		text: 'Kāda pašlaik ir sadarbība komandā? Vai nav sajūtas, ka kāds ir izolēts vai palaists garām no konteksta?',
		whyAsk:
			'Diagnosticē attālinātā darba atsvešinātību, laika joslu barjeras un neizteiktu saspīlējumu.'
	},
	{
		id: 't6',
		category: 'team-dynamics',
		text: 'Vai jūti, ka tavas idejas, priekšlikumi un tehniskie risinājumi (RFC) komandā tiek uztverti nopietni?',
		whyAsk: 'Atklāj ignorēšanas sajūtu, stāža aizspriedumus vai dominējošo kolēģu spiedienu.'
	},

	// Šķēršļi un procesi
	{
		id: 'b1',
		category: 'blockers',
		text: 'Kas šobrīd prasa pārāk daudz laika un šķiet nevajadzīgi birokrātisks vai smagnējs?',
		whyAsk: 'Identificē neefektīvas procedūras un lieku laika patēriņu.'
	},
	{
		id: 'b2',
		category: 'blockers',
		text: 'Kura regulārā sapulce tavā kalendārā sniedz vismazāko pievienoto vērtību?',
		whyAsk: 'Aizsargā darba laiku un atsijā liekās sanāksmes.'
	},
	{
		id: 'b3',
		category: 'blockers',
		text: 'Vai ir atkarības no citām komandām, kas bremzē tavu darbu vai rada neskaidrību?',
		whyAsk: 'Norāda vietas, kur vadītājam jāiesaistās starpkomandu sarunās.'
	},
	{
		id: 'b4',
		category: 'blockers',
		text: 'Kāds viens uzlabojums mūsu CI/CD vai lokālajā vidē dotu vislielāko atdevi?',
		whyAsk: 'Atrod praktiskus izstrādātāja pieredzes (DevEx) šķēršļus.'
	},
	{
		id: 'b5',
		category: 'blockers',
		text: 'Kas tavā ikdienas darbā pašlaik ir sarežģītāks vai lēnāks, nekā tam vajadzētu būt?',
		whyAsk:
			'Klasisks šķēršļu diagnostikas jautājums: lēns CI/CD, nestabili testi, testa datu trūkums vai birokrātija.'
	},
	{
		id: 'b6',
		category: 'blockers',
		text: 'Vai mūsu koda bāzē vai arhitektūrā ir kāda daļa, kurai komanda baidās pieskarties, un kāpēc?',
		whyAsk: 'Atklāj nepārbaudītu vēsturisko kodu, aizkavētas mīnas un sistēmas vājās vietas.'
	},
	{
		id: 'b7',
		category: 'blockers',
		text: 'Kuru neērto iekšējo rīku vai procesu mēs joprojām paciešam tikai tāpēc, ka "tā vēsturiski iegājies"?',
		whyAsk: 'Atmasko novecojušus laišanas sarakstus, manuālu piekļuvju dalīšanu un inerci.'
	},
	{
		id: 'b8',
		category: 'blockers',
		text: 'Ja tev būtu divas pilnas dienas jebkura tehniskā parāda novēršanai mūsu servisā, kam tu ķertos klāt vispirms?',
		whyAsk:
			'Palīdz atklāt augstas atdeves refaktorēšanas idejas, par kurām izstrādātāji klusē termiņu spiediena dēļ.'
	},
	{
		id: 'b9',
		category: 'blockers',
		text: 'Vai šajā ciklā saskāries ar piekļuvju, mākoņa tiesību vai akreditācijas datu šķēršļiem?',
		whyAsk: 'Atklāj drošības birokrātiju, lēnu IT atbalstu vai trūkstošas vides piekļuves.'
	},

	// Stratēģija un jēga
	{
		id: 's1',
		category: 'strategy',
		text: 'Vai tev ir skaidrs, kāpēc pašreizējā sprinta mērķi ir svarīgi mūsu klientiem un biznesam?',
		whyAsk:
			'Novērš situāciju, kad inženieri jūtas kā izolēti «uzdevumu izpildītāji» bez mērķa izpratnes.'
	},
	{
		id: 's2',
		category: 'strategy',
		text: 'Vai pēdējā laikā bija kādi vadības paziņojumi vai virziena maiņas, kas šķita neskaidri vai pretrunīgi mūsu mērķiem?',
		whyAsk:
			'Izgaismo baumas, trauksmi par prioritāšu maiņu un stratēģiskā konteksta trūkumu no vadības puses.'
	},
	{
		id: 's3',
		category: 'strategy',
		text: 'Ja kandidāts darba intervijā tev jautātu par uzņēmuma galveno šī ceturkšņa prioritāti, ko tu atbildētu?',
		whyAsk:
			'Pārbauda, cik precīzi uzņēmuma stratēģiskais virziens ir saprotams darbiniekiem ikdienā.'
	},
	{
		id: 's4',
		category: 'strategy',
		text: 'Vai tev šķiet, ka mēs veidojam pareizo produktu, vai arī risinām nepareizo klientu problēmu?',
		whyAsk: 'Atklāj komandas šaubas par produkta hipotēžu dzīvotspēju, pirms iztērēti resursi.'
	},
	{
		id: 's5',
		category: 'strategy',
		text: 'Kas notiktu, ja mēs aizkavētu pašreizējo laidienu par mēnesi? Vai tas tiešām ir kritiski biznesam?',
		whyAsk: 'Palīdz atšķirt reālu biznesa steidzamību no mākslīgi radītas vadības panikas.'
	},

	// Izaugsme un ambīcijas
	{
		id: 'c1',
		category: 'career',
		text: 'Raugoties uz mūsu nākamajiem mērķiem, pie kura projekta tev gribētos strādāt visvairāk?',
		whyAsk: 'Sasaista projektu sadali ar cilvēka patieso motivāciju.'
	},
	{
		id: 'c2',
		category: 'career',
		text: 'Kādu prasmi vai tehnoloģiju tu vēlētos padziļināti apgūt šogad?',
		whyAsk: 'Palīdz plānot mācīšanās iespējas un izaicinājumus.'
	},
	{
		id: 'c3',
		category: 'career',
		text: 'Pēc 1–2 gadiem: vai tevi vairāk saista dziļa tehniskā ekspertīze vai cilvēku un komandas vadība?',
		whyAsk: 'Palīdz izvēlēties piemērotāko karjeras attīstības ceļu.'
	},
	{
		id: 'c4',
		category: 'career',
		text: 'Kādā nesenā uzdevumā tu juti, ka parādi savu vislabāko sniegumu?',
		whyAsk: 'Atklāj apstākļus, kuros darbinieks strādā ar visaugstāko atdevi.'
	},
	{
		id: 'c5',
		category: 'career',
		text: 'Kura prasmju vai pieredzes nepilnība pašlaik visvairāk kavē tavu pāreju nākamajā līmenī?',
		whyAsk:
			'Koncentrē sarunu uz konkrētām izaugsmes jomām (sistēmu arhitektūra, nenoteiktības pārvaldība, līderība).'
	},
	{
		id: 'c6',
		category: 'career',
		text: 'Vai jūti, ka mācies un aud ātrāk par tirgu, vai arī profesionālā attīstība šķiet iestrēgusi?',
		whyAsk:
			'Galvenais agrīnais signāls par spēcīgu inženieru motivācijas zudumu un aiziešanas risku.'
	},

	// Slodze un līdzsvars
	{
		id: 'w1',
		category: 'workload',
		text: 'Cik ilgtspējīgs šķiet pašreizējais darba temps nākamo 2–3 mēnešu perspektīvā?',
		whyAsk: 'Novērtē maratona tempu pret izdegšanas risku.'
	},
	{
		id: 'w2',
		category: 'workload',
		text: 'Vai vakaros un brīvdienās izdodas pilnībā aizvērt datoru un atslēgt darba paziņojumus?',
		whyAsk: 'Aizsargā atpūtas laiku un veselīgas robežas.'
	},
	{
		id: 'w3',
		category: 'workload',
		text: 'Ja šonedēļ vajadzētu atteikties no viena uzdevuma, lai atvilktu elpu, kas tas būtu?',
		whyAsk: 'Izgaismo zemas vērtības un augsta stresa uzdevumus.'
	},
	{
		id: 'w4',
		category: 'workload',
		text: 'Vai jūti neizteiktu spiedienu atbildēt uz ziņām ārpus oficiālā darba laika?',
		whyAsk: 'Atklāj toksisku pieejamības spiedienu.'
	},
	{
		id: 'w5',
		category: 'workload',
		text: 'Esmu pamanījis(-usi), ka pēdējā laikā tev sanāk strādāt vēlos vakaros vai brīvdienās. Kā tu jūties fiziski?',
		whyAsk:
			'Pārbauda miega trūkumu, fizisko izsīkumu un hroniska stresa simptomus pirms akūtas izdegšanas.'
	},
	{
		id: 'w6',
		category: 'workload',
		text: 'Kad tu pēdējo reizi paņēmi pilnvērtīgu brīvdienu un pilnībā atslēdzies no saziņas rīkiem un e-pastiem?',
		whyAsk:
			'Izgaismo vainas sajūtu par atpūtu, neaizvietojamā varoņa sindromu vai bailes, ka bez viņa viss apstāsies.'
	},
	{
		id: 'w7',
		category: 'workload',
		text: 'Kā es varu dot tev aizsegu un atbrīvot telpu, lai nākamnedēļ tu varētu mierīgi atvilkt elpu?',
		whyAsk:
			'Piedāvā konkrētu vadītāja rīcību: nevajadzīgu sapulču atcelšanu, termiņu pārcelšanu, ienākošā spiediena mazināšanu.'
	}
];

const categoriesByLocale: Record<string, QuestionCategoryMeta[]> = {
	en: questionCategoriesEn,
	ru: questionCategoriesRu,
	de: questionCategoriesDe,
	es: questionCategoriesEs,
	fr: questionCategoriesFr,
	lv: questionCategoriesLv
};

const questionsByLocale: Record<string, QuestionItem[]> = {
	en: questionsEn,
	ru: questionsRu,
	de: questionsDe,
	es: questionsEs,
	fr: questionsFr,
	lv: questionsLv
};

export function getQuestionCategories(locale: Locale): QuestionCategoryMeta[] {
	return categoriesByLocale[locale] || questionCategoriesEn;
}

export function getQuestions(locale: Locale): QuestionItem[] {
	return questionsByLocale[locale] || questionsEn;
}
