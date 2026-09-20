import type { Locale } from '$lib/paraglide/runtime';

export interface PlaybookBook {
	slug: string;
	title: string;
	originalTitle: string;
	author: string;
	authorRole: string;
	year: number;
	badge: string;
	coverImage: string;
	coreThesis: string;
	oneOnOneFocusHtml: string;
	keyPrinciples: string[];
	actionableQuestions: string[];
	quote: {
		text: string;
		attribution: string;
	};
	relatedTemplateSlug: string;
	relatedTemplateTitle: string;
}

export const booksEn: PlaybookBook[] = [
	{
		slug: 'high-output-management',
		title: 'High Output Management',
		originalTitle: 'High Output Management',
		author: 'Andy Grove',
		authorRole: 'Former CEO & Chairman of Intel',
		year: 1983,
		badge: 'The Silicon Valley Classic',
		coverImage: '/images/playbook/books/high-output-management.jpg',
		coreThesis:
			'A manager’s output is the output of the organizational units under their supervision or influence. The highest-leverage activity available to a manager is the 1:1 meeting.',
		oneOnOneFocusHtml:
			'<p>Grove effectively invented the modern tech 1:1. He argued that ninety minutes of a manager’s time can enhance the quality of a direct report’s work for eighty hours between meetings — an unmatched >50x return on time. Crucially, Grove established that <strong>the 1:1 is the employee’s meeting</strong>: they set the agenda, they do most of the talking, and the manager’s role is to facilitate, listen, and transmit context.</p>',
		keyPrinciples: [
			'The employee prepares the agenda; the manager creates the space.',
			'Schedule at least 45 to 60 minutes — anything shorter turns into a superficial status checklist.',
			'Hold 1:1s in or near the employee’s workspace, not just the executive corner office, to shift the power dynamic.',
			'Never cancel a 1:1; rescheduling is acceptable only when unavoidable and done immediately.'
		],
		actionableQuestions: [
			'What is the single biggest bottleneck slowing down your work right now?',
			'Is there anything we are doing that feels like a waste of your time or energy?',
			'What decisions or discussions this week did you feel out of the loop on?'
		],
		quote: {
			text: 'Ninety minutes of your time can enhance the quality of your subordinate’s work for two weeks, or for some eighty hours.',
			attribution: 'Andy Grove, High Output Management'
		},
		relatedTemplateSlug: 'high-leverage-1-on-1',
		relatedTemplateTitle: 'The High-Leverage 1:1 Manifesto'
	},
	{
		slug: 'the-hard-thing-about-hard-things',
		title: 'The Hard Thing About Hard Things',
		originalTitle: 'The Hard Thing About Hard Things',
		author: 'Ben Horowitz',
		authorRole: 'Co-founder of Andreessen Horowitz & Loudcloud/Opsware',
		year: 2014,
		badge: 'Crisis & Cultural Resilience',
		coverImage: '/images/playbook/books/the-hard-thing-about-hard-things.jpg',
		coreThesis:
			'There is no recipe for building a great company, but keeping the lines of communication open and discovering bad news while it’s still small is the only way an organization survives.',
		oneOnOneFocusHtml:
			'<p>Horowitz dedicated entire sections of the book to 1:1s, calling them the primary tool for organizational design. In a startup, bad news travels slowly while good news travels fast. The 1:1 is the essential safety valve where employees can surface urgent concerns, brilliant ideas, and chronic frustrations that do not fit into formal Jira backlogs or company town halls.</p>',
		keyPrinciples: [
			'The 1:1 is the free-form meeting for pressing issues, brilliant ideas, and chronic frustrations.',
			'If a manager does not run regular 1:1s, bad news stays hidden until it manifests as unexpected resignations or failed releases.',
			'Look for patterns: if three different engineers mention the same cross-team friction, it is an architectural/organizational bug, not a personal flaw.',
			'Skip-level 1:1s are essential for senior leaders to hear unfiltered reality from the front lines.'
		],
		actionableQuestions: [
			'If we could improve one thing about how our team operates, what would make the biggest difference?',
			'Who in the company is doing incredible work that doesn’t get enough recognition?',
			'What is something the leadership team talks about that feels disconnected from reality on the ground?'
		],
		quote: {
			text: 'If you are a manager, your one-on-ones with your direct reports are your highest-leverage meeting. It’s the free-form meeting for all the pressing issues that do not fit into neatly organized formal channels.',
			attribution: 'Ben Horowitz, The Hard Thing About Hard Things'
		},
		relatedTemplateSlug: 'skip-level',
		relatedTemplateTitle: 'Skip-Level 1:1: Health Check'
	},
	{
		slug: 'the-making-of-a-manager',
		title: 'The Making of a Manager',
		originalTitle: 'The Making of a Manager',
		author: 'Julie Zhuo',
		authorRole: 'Former VP of Product Design at Facebook',
		year: 2019,
		badge: 'Modern Human Leadership',
		coverImage: '/images/playbook/books/the-making-of-a-manager.jpg',
		coreThesis:
			'Great managers are made, not born. Management is not about power or status; it is the discipline of helping a group of people achieve a shared goal sustainably.',
		oneOnOneFocusHtml:
			'<p>Zhuo provides a modern, empathetic breakdown of 1:1s, contrasting them sharply with status syncs. She outlines four core conversation zones for one-on-ones: <em>building trust, discussing priorities, resolving challenges, and calibrating career goals</em>. She emphasizes that building psychological safety in the first 30 days is what makes future critical feedback possible.</p>',
		keyPrinciples: [
			'Never let a 1:1 become a status update — status can be read asynchronously in tickets.',
			'Tailor the cadence and style to the person: new team members need frequent alignment; senior veterans need space and autonomy.',
			'Celebrate progress and small wins deliberately, not just blockers and defects.',
			'Ask questions that lower defensive barriers (e.g. "What feels hardest right now?").'
		],
		actionableQuestions: [
			'What conditions help you do your best, most focused work?',
			'How do you prefer to receive feedback: in the moment, in writing beforehand, or during our 1:1s?',
			'What has been the most confusing or unclear thing you’ve encountered recently?'
		],
		quote: {
			text: 'The primary purpose of a 1:1 is to build a relationship of mutual trust. If your 1:1 feels like a status report, you are squandering the most valuable tool you have.',
			attribution: 'Julie Zhuo, The Making of a Manager'
		},
		relatedTemplateSlug: 'first-1-on-1',
		relatedTemplateTitle: 'The First 1:1: Expectations & Trust'
	},
	{
		slug: 'the-managers-path',
		title: 'The Manager’s Path',
		originalTitle: 'The Manager’s Path',
		author: 'Camille Fournier',
		authorRole: 'Former CTO of Rent the Runway',
		year: 2017,
		badge: 'Engineering Org Architecture',
		coverImage: '/images/playbook/books/the-managers-path.jpg',
		coreThesis:
			'Engineering management requires different skills at every tier — from mentoring interns to leading senior staff engineers and managing other managers.',
		oneOnOneFocusHtml:
			'<p>Fournier wrote the definitive guide for tech leaders. She addresses the engineering specificities of 1:1s: handling junior vs senior engineers, managing technical debt conversations, and navigating promotions on technical ladders. Fournier explicitly warns that when an engineer says <em>"I don’t have anything to talk about"</em>, it is not a sign of smooth sailing — it is a flashing warning of disengagement.</p>',
		keyPrinciples: [
			'Never skip a 1:1 just because "everything seems fine". Quiet disengagement starts when meetings are dropped.',
			'Separate daily delivery from quarterly career trajectory — mixing them dilutes long-term development.',
			'Help technical staff navigate the dual ladder (Staff+ engineer track vs engineering management).',
			'Act as an information conduit: translate high-level business context down to technical teams.'
		],
		actionableQuestions: [
			'Looking at our roadmap, which technical challenge excites you most?',
			'Are you getting the right level of stretch on your current projects, or does it feel repetitive?',
			'Which skill or technology that we don’t currently use would you love to master?'
		],
		quote: {
			text: 'One-on-ones are the pulse check of your team. If someone tells you they have nothing to talk about, you haven’t built enough trust or asked the right questions.',
			attribution: 'Camille Fournier, The Manager’s Path'
		},
		relatedTemplateSlug: 'career-growth',
		relatedTemplateTitle: 'Quarterly Career & Growth Check-in'
	},
	{
		slug: 'radical-candor',
		title: 'Radical Candor',
		originalTitle: 'Radical Candor',
		author: 'Kim Scott',
		authorRole: 'Former Executive at Google & Apple University Faculty',
		year: 2017,
		badge: 'Feedback & Culture',
		coverImage: '/images/playbook/books/radical-candor.jpg',
		coreThesis:
			'Great leadership requires Care Personally while Challenging Directly. Without care, challenge is obnoxious aggression; without challenge, care becomes ruinous empathy.',
		oneOnOneFocusHtml:
			'<p>Scott positions the 1:1 as the central venue for practicing Radical Candor. It is where managers solicit feedback on themselves before giving it to direct reports, and where difficult performance and burnout issues are handled with compassionate directness. Scott’s model removes the fear of delivering uncomfortable truths by grounding them in authentic human support.</p>',
		keyPrinciples: [
			'Always ask for feedback on your own performance before offering critique to the employee.',
			'Avoid "Ruinous Empathy": failing to address poor performance or burnout out of fear of hurting feelings ultimately hurts everyone.',
			'Deliver critical feedback privately, immediately, and in person (or on 1:1 calls), never in public channels.',
			'Praise in public; criticize in private 1:1s.'
		],
		actionableQuestions: [
			'What could I do differently or stop doing to make your job easier?',
			'I noticed you seemed overwhelmed lately — let’s review your workload and take things off your plate.',
			'Is there any feedback you’ve been hesitant to share with me?'
		],
		quote: {
			text: 'Radical Candor is what happens when you put Care Personally and Challenge Directly together. The 1:1 is where that relationship is forged.',
			attribution: 'Kim Scott, Radical Candor'
		},
		relatedTemplateSlug: 'burnout-detection',
		relatedTemplateTitle: 'Overwhelm & Burnout Triage'
	}
];

export const booksRu: PlaybookBook[] = [
	{
		slug: 'high-output-management',
		title: 'Высокоэффективный менеджмент',
		originalTitle: 'High Output Management',
		author: 'Энди Гроув',
		authorRole: 'Легендарный CEO и председатель совета директоров Intel',
		year: 1983,
		badge: 'Классика Кремниевой долины',
		coverImage: '/images/playbook/books/high-output-management.jpg',
		coreThesis:
			'Результат руководителя — это результат его организации. Самая эффективная инвестиция времени лидера с точки зрения коэффициента полезного действия (leverage) — это встреча 1-на-1.',
		oneOnOneFocusHtml:
			'<p>Энди Гроув фактически сформировал культуру современных 1-на-1 в IT. Он подсчитал, что 90 минут качественного диалога повышают качество работы инженера на 80 часов вперед — это более чем 50-кратный возврат инвестиций времени. Принципиальный тезис Гроува: <strong>1-на-1 — это встреча сотрудника</strong>. Сотрудник задает повестку и говорит большую часть времени, а задача лидера — слушать, обучать и передавать контекст.</p>',
		keyPrinciples: [
			'Повестку готовит сотрудник; руководитель создает безопасное пространство.',
			'Выделяйте не менее 45–60 минут — более короткие встречи превращаются в поверхностную спешку.',
			'Проводите встречи на нейтральной территории или рядом с рабочим местом сотрудника, чтобы снять барьер иерархии.',
			'Никогда не отменяйте 1-на-1; если перенос неизбежен, назначайте новую дату немедленно.'
		],
		actionableQuestions: [
			'Какое главное узкое место замедляет твою работу прямо сейчас?',
			'Что из наших текущих процессов или совещаний кажется тебе бессмысленной тратой времени?',
			'В каких решениях за эту неделю тебе не хватило контекста или понимания причин?'
		],
		quote: {
			text: 'Девяносто минут вашего времени могут повысить качество работы подчиненного на две недели вперед, то есть примерно на восемьдесят рабочих часов.',
			attribution: 'Энди Гроув, «Высокоэффективный менеджмент»'
		},
		relatedTemplateSlug: 'high-leverage-1-on-1',
		relatedTemplateTitle: 'Манифест эффективного 1-на-1'
	},
	{
		slug: 'the-hard-thing-about-hard-things',
		title: 'Легко не будет',
		originalTitle: 'The Hard Thing About Hard Things',
		author: 'Бен Горовиц',
		authorRole: 'Сооснователь Andreessen Horowitz и Opsware/Loudcloud',
		year: 2014,
		badge: 'Управление в кризис и культура',
		coverImage: '/images/playbook/books/the-hard-thing-about-hard-things.jpg',
		coreThesis:
			'В менеджменте нет универсальных рецептов, но сохранение открытых каналов коммуникации и раннее обнаружение плохих новостей — единственный способ выжить компании.',
		oneOnOneFocusHtml:
			'<p>Горовиц посвятил 1-на-1 отдельные главы, назвав их главным инструментом проектирования организации. В технологических компаниях плохие новости идут наверх медленно, а хорошие долетают мгновенно. 1-на-1 — это предохранительный клапан, где люди могут поднять скрытые конфликты, хронические фрустрации и смелые идеи, которые не помещаются в регламенты и тикеты.</p>',
		keyPrinciples: [
			'1-на-1 — свободное пространство для наболевших проблем, идей и разногласий.',
			'Если лид не проводит регулярные 1-на-1, плохие новости копятся и выстреливают внезапными увольнениями ключевых людей.',
			'Ищите паттерны: если три инженера говорят об одном и том же трении со смежной командой, это системная проблема процессов, а не каприз.',
			'Skip-level встречи через уровень обязательны для топ-менеджеров, чтобы видеть реальность на передовой.'
		],
		actionableQuestions: [
			'Если бы мы могли исправить одну вещь в работе команды, что дало бы максимальный результат?',
			'Кто в компании делает огромную работу, которую руководство не замечает?',
			'О чем руководство часто говорит на общих собраниях, что на практике расходится с реальностью?'
		],
		quote: {
			text: 'Для менеджера встреча 1-на-1 — самое важное событие в расписании. Это свободная площадка для всех острых вопросов, которые не вписываются в формальные каналы.',
			attribution: 'Бен Горовиц, «Легко не будет»'
		},
		relatedTemplateSlug: 'skip-level',
		relatedTemplateTitle: 'Skip-Level 1-на-1: Здоровье системы'
	},
	{
		slug: 'the-making-of-a-manager',
		title: 'Становление менеджера',
		originalTitle: 'The Making of a Manager',
		author: 'Джули Чжо',
		authorRole: 'Экс-вице-президент по дизайну продукта в Facebook',
		year: 2019,
		badge: 'Современное лидерство',
		coverImage: '/images/playbook/books/the-making-of-a-manager.jpg',
		coreThesis:
			'Менеджерами не рождаются, ими становятся. Управление — это не власть, а навык помогать команде устойчиво достигать общей цели.',
		oneOnOneFocusHtml:
			'<p>Джули Чжо дает современный, глубоко человечный разбор 1-на-1. Она выделяет 4 ключевые зоны встречи: <em>построение доверия, расстановка приоритетов, преодоление трудностей и планирование карьеры</em>. Чжо подчеркивает: доверие и психологическая безопасность, заложенные на первых встречах, определяют возможность честного разговора в будущем.</p>',
		keyPrinciples: [
			'Никогда не превращайте 1-на-1 в статус-апдейт — статус задач читается асинхронно.',
			'Адаптируйте формат: новичкам нужны частые синки и поддержка, опытным сеньорам — автономия и стратегический контекст.',
			'Празднуйте победы и прогресс, а не только разбирайте блокеры и инциденты.',
			'Задавайте вопросы, снимающие защитные реакции (например: «Что сейчас кажется самым сложным?»).'
		],
		actionableQuestions: [
			'В каких условиях тебе работается наиболее сфокусированно и спокойно?',
			'Как тебе удобнее получать фидбек: сразу в моменте, письменно перед встречей или на 1-на-1?',
			'Что за последнее время показалось самым запутанным или неясным в наших процессах?'
		],
		quote: {
			text: 'Главная цель 1-на-1 — построение взаимного доверия. Если встреча напоминает отчет о статусе задач, вы впустую растрачиваете самый мощный инструмент руководителя.',
			attribution: 'Джули Чжо, «Становление менеджера»'
		},
		relatedTemplateSlug: 'first-1-on-1',
		relatedTemplateTitle: 'Первый 1-на-1: Ожидания и доверие'
	},
	{
		slug: 'the-managers-path',
		title: 'Путь менеджера',
		originalTitle: 'The Manager’s Path',
		author: 'Камилла Фурнье',
		authorRole: 'Экс-CTO Rent the Runway',
		year: 2017,
		badge: 'Инженерный менеджмент в IT',
		coverImage: '/images/playbook/books/the-managers-path.jpg',
		coreThesis:
			'Руководство техническими специалистами требует разных компетенций на каждом этапе — от наставничества джунов до управления техлидами и другими менеджерами.',
		oneOnOneFocusHtml:
			'<p>Фурнье написала настольное руководство для инженерных лидеров. Она разбирает техническую специфику 1-на-1: обсуждение техдолга, работу с архитектурными разногласиями и движение по грейдам. Фурнье предупреждает: когда опытный разработчик говорит <em>«мне не о чем сегодня говорить»</em>, это не знак благополучия — это сигнал скрытого отчуждения.</p>',
		keyPrinciples: [
			'Не отменяйте 1-на-1 только потому, что «вроде всё идет нормально» — именно так начинается потеря контакта.',
			'Разделяйте спринты и долгосрочную карьеру: обсуждение роста нельзя топить в текущих релизах.',
			'Помогайте инженерам ориентироваться в карьерных развилках (траектория Staff/Principal vs путь техлида и менеджера).',
			'Служите проводником бизнес-контекста для разработчиков.'
		],
		actionableQuestions: [
			'Глядя на наш роадмап, за какой технический вызов тебе хотелось бы взяться сильнее всего?',
			'Чувствуешь ли ты достаточный уровень сложности задач, или работа стала монотонной?',
			'Какой инструмент или технологию тебе очень хотелось бы освоить в этом году?'
		],
		quote: {
			text: 'Встречи 1-на-1 — это пульс команды. Если человек говорит, что ему нечего обсудить, вы либо не построили доверие, либо задаете не те вопросы.',
			attribution: 'Камилла Фурнье, «Путь менеджера»'
		},
		relatedTemplateSlug: 'career-growth',
		relatedTemplateTitle: 'Квартальный диалог о развитии'
	},
	{
		slug: 'radical-candor',
		title: 'Радикальная прямота',
		originalTitle: 'Radical Candor',
		author: 'Ким Скотт',
		authorRole: 'Экс-руководитель в Google и преподаватель Apple University',
		year: 2017,
		badge: 'Обратная связь и культура',
		coverImage: '/images/playbook/books/radical-candor.jpg',
		coreThesis:
			'Эффективное лидерство соединяет искреннюю заботу о человеке с прямой требовательностью. Без заботы прямота становится агрессией; без прямоты забота превращается в губительную эмпатию.',
		oneOnOneFocusHtml:
			'<p>Ким Скотт считает 1-на-1 главной практической лабораторией Радикальной прямоты. Здесь руководитель сначала запрашивает честную критику на себя самого, а затем бережно, но прямо обсуждает трудности и признаки выгорания сотрудника. Эта модель снимает страх сложных разговоров, превращая критику в инструмент поддержки.</p>',
		keyPrinciples: [
			'Сначала искренне запросите фидбек на себя, прежде чем давать развивающую критику сотруднику.',
			'Опасайтесь «губительной эмпатии»: замалчивание проблем из страха задеть чувства в итоге разрушает доверие и карьеру.',
			'Критикуйте с глазу на глаз на 1-на-1, хвалите при всей команде.',
			'Обратная связь должна быть своевременной и частой, а не копиться до полугодового ревью.'
		],
		actionableQuestions: [
			'Что я могу делать иначе или перестать делать, чтобы тебе работалось легче?',
			'Я заметил(а) признаки перегруза — давай посмотрим на твои задачи и снимем лишнее прямо сейчас.',
			'Есть ли фидбек, которым тебе было неловко или сложно со мной поделиться?'
		],
		quote: {
			text: 'Радикальная прямота рождается на стыке искренней заботы и открытой требовательности. Встреча 1-на-1 — это место, где закладываются эти отношения.',
			attribution: 'Ким Скотт, «Радикальная прямота»'
		},
		relatedTemplateSlug: 'burnout-detection',
		relatedTemplateTitle: 'Перегруз и выгорание: Баланс'
	}
];

export function getBooks(locale: Locale): PlaybookBook[] {
	if (locale === 'ru') return booksRu;
	return booksEn;
}
