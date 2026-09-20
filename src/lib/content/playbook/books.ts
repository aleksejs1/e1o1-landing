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
		relatedTemplateTitle: 'Манифест эффективного 1-на-1: Встречи, которые имеют значение'
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
		relatedTemplateTitle: 'Skip-Level 1-на-1: Нефильтрованная диагностика организации'
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
		relatedTemplateTitle: 'Первый 1-на-1: Установка ожиданий и психологическая безопасность'
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
		relatedTemplateTitle: 'Квартальный диалог о развитии и карьере'
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
		relatedTemplateTitle: 'Перегруз и выгорание: Восстановление ресурса'
	}
];

export const booksDe: PlaybookBook[] = [
	{
		slug: 'high-output-management',
		title: 'High Output Management',
		originalTitle: 'High Output Management',
		author: 'Andy Grove',
		authorRole: 'Ehemaliger CEO & Aufsichtsratsvorsitzender von Intel',
		year: 1983,
		badge: 'Klassiker des Silicon Valley',
		coverImage: '/images/playbook/books/high-output-management.jpg',
		coreThesis:
			'Der Output eines Managers ist der Output der Organisationseinheiten unter seiner Führung oder seinem Einfluss. Die wirksamste Hebelaktivität einer Führungskraft ist das 1:1-Gespräch.',
		oneOnOneFocusHtml:
			'<p>Andy Grove hat das moderne Tech-1:1 quasi erfunden. Er wies nach, dass 90 Minuten Zeitaufwand einer Führungskraft die Qualität der Arbeit eines Mitarbeiters für 80 Stunden zwischen zwei Gesprächen steigern können — ein unvergleichlicher Hebel von über 50x. Entscheidend war Groves Grundsatz: <strong>Das 1:1 ist das Meeting des Mitarbeiters</strong>: Er bestimmt die Agenda, er spricht die meiste Zeit, während die Führungskraft zuhört, coacht und strategischen Kontext vermittelt.</p>',
		keyPrinciples: [
			'Der Mitarbeiter bereitet die Agenda vor; die Führungskraft schafft den geschützten Raum.',
			'Mindestens 45 bis 60 Minuten einplanen — kürzere Termine verkommen zu oberflächlichen Statusabfragen.',
			'Termine im oder nahe dem Arbeitsbereich des Mitarbeiters abhalten, um Hierarchiebarrieren abzubauen.',
			'Ein 1:1 niemals ersatzlos streichen; eine Verschiebung ist nur bei echtem Notfall zulässig und muss sofort neu datiert werden.'
		],
		actionableQuestions: [
			'Welcher Engpass bremst deine Arbeit im Moment am meisten aus?',
			'Gibt es Prozesse oder Meetings, die sich für dich wie Zeit- oder Energieverschwendung anfühlen?',
			'Bei welchen Entscheidungen oder Diskussionen dieser Woche fehlte dir Kontext oder Hintergründe?'
		],
		quote: {
			text: 'Neunzig Minuten Ihrer Zeit können die Qualität der Arbeit eines Untergebenen für zwei Wochen oder rund achtzig Arbeitsstunden steigern.',
			attribution: 'Andy Grove, High Output Management'
		},
		relatedTemplateSlug: 'high-leverage-1-on-1',
		relatedTemplateTitle: 'Das wirksame 1:1: Das Manifest für wertvolle Gespräche'
	},
	{
		slug: 'the-hard-thing-about-hard-things',
		title: 'The Hard Thing About Hard Things',
		originalTitle: 'The Hard Thing About Hard Things',
		author: 'Ben Horowitz',
		authorRole: 'Mitgründer von Andreessen Horowitz & Loudcloud/Opsware',
		year: 2014,
		badge: 'Krisenmanagement & Unternehmenskultur',
		coverImage: '/images/playbook/books/the-hard-thing-about-hard-things.jpg',
		coreThesis:
			'Es gibt kein Patentrezept für erfolgreiche Unternehmensführung, aber offene Kommunikationskanäle und das frühe Aufspüren schlechter Nachrichten sind die einzige Überlebensgarantie einer Organisation.',
		oneOnOneFocusHtml:
			'<p>Horowitz widmete 1:1-Gesprächen eigene Kapitel und bezeichnete sie als wichtigstes Instrument des Organisationsdesigns. In Technologieunternehmen verbreiten sich schlechte Nachrichten langsam und gute Nachrichten rasend schnell. Das 1:1 ist das unverzichtbare Sicherheitsventil, in dem Mitarbeiter ungelöste Reibungen, mutige Ideen und chronische Frustrationen ansprechen können, die in keinem Jira-Ticket oder All-Hands Platz finden.</p>',
		keyPrinciples: [
			'Das 1:1 ist der freie Raum für drängende Probleme, Ideen und schwelende Frustrationen.',
			'Wer keine regelmäßigen 1:1s führt, riskiert, dass schlechte Nachrichten erst durch plötzliche Kündigungen oder gescheiterte Releases sichtbar werden.',
			'Auf Muster achten: Kritisieren drei Ingenieure dieselbe Schnittstelle, liegt ein Systemfehler vor, keine individuelle Eigenheit.',
			'Skip-Level-Gespräche sind für das Top-Management unerlässlich, um die ungeschminkte Realität an der Basis zu erfahren.'
		],
		actionableQuestions: [
			'Wenn wir eine Sache in der Arbeitsweise unseres Teams grundlegend verbessern könnten, was hätte den größten Hebel?',
			'Wer im Unternehmen leistet herausragende Arbeit, die von der Führungsebene zu wenig gewürdigt wird?',
			'Über welches Thema spricht das Management auf All-Hands-Meetings, das sich meilenweit von der Realität im Code entfernt anfühlt?'
		],
		quote: {
			text: 'Als Manager sind Ihre 1:1-Gespräche die Meetings mit dem höchsten Hebel. Sie sind der freie Raum für all die drängenden Fragen, die in keine formellen Kanäle passen.',
			attribution: 'Ben Horowitz, The Hard Thing About Hard Things'
		},
		relatedTemplateSlug: 'skip-level',
		relatedTemplateTitle: 'Skip-Level-1:1: Ungefilterte Organisationsdiagnose'
	},
	{
		slug: 'the-making-of-a-manager',
		title: 'The Making of a Manager',
		originalTitle: 'The Making of a Manager',
		author: 'Julie Zhuo',
		authorRole: 'Ehemalige VP of Product Design bei Facebook',
		year: 2019,
		badge: 'Moderne, menschzentrierte Führung',
		coverImage: '/images/playbook/books/the-making-of-a-manager.jpg',
		coreThesis:
			'Großartige Führungskräfte werden nicht geboren, sondern geformt. Management bedeutet nicht Macht oder Status, sondern Menschen dabei zu helfen, gemeinsam nachhaltige Ziele zu erreichen.',
		oneOnOneFocusHtml:
			'<p>Julie Zhuo liefert eine moderne, empathische Analyse des 1:1 und grenzt es strikt von Statusmeetings ab. Sie gliedert wirksame 1:1s in vier Kernbereiche: <em>Vertrauen aufbauen, Prioritäten klären, Herausforderungen lösen und Entwicklungsziele abgleichen</em>. Zhuo betont, dass das in den ersten 30 Tagen aufgebaute Vertrauen das unverzichtbare Fundament für künftiges ehrliches und kritisches Feedback bildet.</p>',
		keyPrinciples: [
			'Ein 1:1 niemals zu einem Statusbericht verkommen lassen — Projektstatus gehört in Tickets und asynchrone Tools.',
			'Taktung und Stil anpassen: Neuzugänge brauchen engmaschige Begleitung; erfahrene Seniors verlangen Autonomie und strategischen Kontext.',
			'Erfolge und Fortschritte bewusst feiern, statt nur über Blocker und Fehler zu sprechen.',
			'Fragen stellen, die Abwehrhaltungen abbauen (z. B. „Was fällt dir momentan am schwersten?“).'
		],
		actionableQuestions: [
			'Unter welchen Bedingungen kannst du am fokussiertesten und besten arbeiten?',
			'Wie möchtest du Feedback am liebsten erhalten: sofort im Moment, vorab schriftlich oder in unserem 1:1?',
			'Was war in letzter Zeit für dich am unklarsten oder verwirrendsten in unseren Abläufen?'
		],
		quote: {
			text: 'Der Hauptzweck eines 1:1 besteht darin, eine Beziehung gegenseitigen Vertrauens aufzubauen. Wenn sich Ihr 1:1 wie ein Statusbericht anfühlt, verschwenden Sie das wertvollste Werkzeug, das Sie haben.',
			attribution: 'Julie Zhuo, The Making of a Manager'
		},
		relatedTemplateSlug: 'first-1-on-1',
		relatedTemplateTitle: 'Das erste 1:1: Erwartungsmanagement & psychologische Sicherheit'
	},
	{
		slug: 'the-managers-path',
		title: 'The Manager’s Path',
		originalTitle: 'The Manager’s Path',
		author: 'Camille Fournier',
		authorRole: 'Ehemalige CTO von Rent the Runway',
		year: 2017,
		badge: 'Technische Führung & Org-Architektur',
		coverImage: '/images/playbook/books/the-managers-path.jpg',
		coreThesis:
			'Technische Führung erfordert auf jeder Stufe grundlegend andere Fähigkeiten — vom Mentoring für Nachwuchskräfte bis zur Führung erfahrener Staff Engineers und dem Leiten anderer Führungskräfte.',
		oneOnOneFocusHtml:
			'<p>Fournier verfasste den Standardleitfaden für technische Führungskräfte. Sie widmet sich den spezifischen Facetten von 1:1s in Engineering-Teams: der Umgang mit Juniors im Vergleich zu Senior/Staff Engineers, Diskussionen über technische Schulden und die Förderung auf Entwicklerkarrierepfaden. Fournier warnt eindringlich: Wenn ein Entwickler sagt <em>„Ich habe heute eigentlich nichts zu besprechen“</em>, ist das kein Zeichen von Harmonie — es ist ein Alarmsignal für schleichende Entfremdung.</p>',
		keyPrinciples: [
			'Niemals ein 1:1 ausfallen lassen, nur weil „alles reibungslos wirkt“ — stille Entkopplung beginnt mit ausfallenden Terminen.',
			'Tagesgeschäft und vierteljährliche Karriereentwicklung trennen — vermischt man beides, geht die langfristige Perspektive verloren.',
			'Ingenieuren helfen, sich auf der doppelten Karriereleiter zurechtzufinden (Staff/Principal-Track vs. Engineering Management).',
			'Als Informationsbrücke agieren: Unternehmensziele und geschäftlichen Kontext verständlich in technische Teams transportieren.'
		],
		actionableQuestions: [
			'Wenn du auf unsere Roadmap schaust: Welche technische Herausforderung reizt dich im Moment am meisten?',
			'Fühlst du dich bei deinen aktuellen Projekten fachlich gefordert, oder schleift sich Routine ein?',
			'Welche Technologie oder Kompetenz, die wir noch nicht einsetzen, würdest du gerne meistern?'
		],
		quote: {
			text: '1:1-Gespräche sind der Pulsschlag Ihres Teams. Wenn jemand sagt, es gebe nichts zu besprechen, haben Sie entweder nicht genug Vertrauen aufgebaut oder nicht die richtigen Fragen gestellt.',
			attribution: 'Camille Fournier, The Manager’s Path'
		},
		relatedTemplateSlug: 'career-growth',
		relatedTemplateTitle: 'Karriere & Wachstum: Das Quartalsgespräch'
	},
	{
		slug: 'radical-candor',
		title: 'Radical Candor: Wie Sie mit schonungsloser Offenheit ein fantastischer Boss werden',
		originalTitle: 'Radical Candor',
		author: 'Kim Scott',
		authorRole: 'Ehemalige Führungskraft bei Google & Fakultätsmitglied der Apple University',
		year: 2017,
		badge: 'Feedbackkultur & Führung',
		coverImage: '/images/playbook/books/radical-candor.jpg',
		coreThesis:
			'Großartige Führung verlangt persönliche Anteilnahme (Care Personally) bei gleichzeitiger schonungsloser Offenheit (Challenge Directly). Ohne Anteilnahme ist Kritik verletzende Aggression; ohne Offenheit verkommt Anteilnahme zu zerstörerischer Empathie.',
		oneOnOneFocusHtml:
			'<p>Kim Scott sieht das 1:1 als zentralen Trainingsraum für Radical Candor. Hier bittet die Führungskraft zuerst um ehrliche Kritik an sich selbst, bevor sie Mitarbeitern Feedback gibt, und hier werden Leistungs- sowie Überlastungs- und Burnout-Themen mit empathischer Klarheit besprochen. Scotts Modell nimmt schwierigen Gesprächen die Angst, indem Kritik als Akt echter Unterstützung verstanden wird.</p>',
		keyPrinciples: [
			'Immer zuerst nach Feedback zur eigenen Leistung fragen, bevor Kritik am Mitarbeiter geäußert wird.',
			'„Zerstörerische Empathie“ (Ruinous Empathy) vermeiden: Aus Angst vor verletzten Gefühlen Probleme nicht anzusprechen, schadet letztlich allen.',
			'Kritisches Feedback unter vier Augen, zeitnah und persönlich im 1:1 geben, niemals öffentlich.',
			'Öffentlich loben; privat im 1:1 Kritik üben.'
		],
		actionableQuestions: [
			'Was könnte ich anders machen oder ganz lassen, um dir deine Arbeit zu erleichtern?',
			'Ich habe den Eindruck, dass die Belastung gerade sehr hoch ist — lass uns deine Aufgaben durchgehen und sofort Dinge streichen.',
			'Gibt es Feedback, bei dem du bisher gezögert hast, es mir offen mitzuteilen?'
		],
		quote: {
			text: 'Radikale Offenheit entsteht dort, wo persönliche Anteilnahme und direkte Konfrontation zusammenkommen. Das 1:1 ist der Ort, an dem dieses Vertrauen geschmiedet wird.',
			attribution: 'Kim Scott, Radical Candor'
		},
		relatedTemplateSlug: 'burnout-detection',
		relatedTemplateTitle: 'Überlastung & Burnout: Kraftreserven wiederherstellen'
	}
];

export const booksEs: PlaybookBook[] = [
	{
		slug: 'high-output-management',
		title: 'High Output Management',
		originalTitle: 'High Output Management',
		author: 'Andy Grove',
		authorRole: 'Ex-CEO y presidente del consejo de Intel',
		year: 1983,
		badge: 'El clásico de Silicon Valley',
		coverImage: '/images/playbook/books/high-output-management.jpg',
		coreThesis:
			'El rendimiento de un directivo es el rendimiento de las unidades organizativas bajo su supervisión o influencia. La actividad de mayor apalancamiento a su alcance es la reunión 1 a 1.',
		oneOnOneFocusHtml:
			'<p>Andy Grove prácticamente concibió el 1 a 1 moderno en la industria tecnológica. Argumentó que noventa minutos del tiempo de un líder pueden mejorar la calidad del trabajo de un colaborador durante ochenta horas entre reuniones: un retorno de inversión superior a 50x. Fundamentalmente, Grove fijó un principio innegociable: <strong>el 1 a 1 es la reunión del empleado</strong>: este marca la agenda, habla la mayor parte del tiempo, y el rol del mánager es facilitar, escuchar y transmitir contexto.</p>',
		keyPrinciples: [
			'El empleado prepara la agenda; el mánager crea el espacio de confianza.',
			'Reserva entre 45 y 60 minutos: sesiones más cortas degeneran en un checklist superficial de estado.',
			'Realiza el 1 a 1 en el entorno del colaborador o en un espacio neutro para reducir la barrera jerárquica.',
			'Nunca canceles un 1 a 1; aplazarlo solo es admisible por causa de fuerza mayor y debe reagendarse de inmediato.'
		],
		actionableQuestions: [
			'¿Cuál es el principal cuello de botella que frena tu trabajo ahora mismo?',
			'¿Hay algo en nuestras rutinas o reuniones actuales que sientas como una pérdida de tiempo o energía?',
			'¿En qué decisiones o debates de esta semana sentiste falta de claridad o contexto?'
		],
		quote: {
			text: 'Noventa minutos de tu tiempo pueden mejorar la calidad del trabajo de tu colaborador durante dos semanas, o unas ochenta horas.',
			attribution: 'Andy Grove, High Output Management'
		},
		relatedTemplateSlug: 'high-leverage-1-on-1',
		relatedTemplateTitle: 'El 1 a 1 de alto impacto: El manifiesto para reuniones con sentido'
	},
	{
		slug: 'the-hard-thing-about-hard-things',
		title: 'Emprender y liderar en tiempos difíciles',
		originalTitle: 'The Hard Thing About Hard Things',
		author: 'Ben Horowitz',
		authorRole: 'Cofundador de Andreessen Horowitz y Opsware/Loudcloud',
		year: 2014,
		badge: 'Gestión de crisis y cultura',
		coverImage: '/images/playbook/books/the-hard-thing-about-hard-things.jpg',
		coreThesis:
			'No existen recetas mágicas para crear una gran empresa, pero mantener líneas de comunicación abiertas y detectar las malas noticias a tiempo es la única garantía de supervivencia.',
		oneOnOneFocusHtml:
			'<p>Horowitz reservó capítulos fundamentales de su obra a los 1 a 1, calificándolos como la herramienta primordial de arquitectura organizativa. En las empresas tecnológicas, las malas noticias viajan despacio mientras que las buenas vuelan. El 1 a 1 actúa como la válvula de escape esencial donde el equipo puede plantear fricciones soterradas, ideas audaces y frustraciones crónicas que jamás caben en Jira o en reuniones generales.</p>',
		keyPrinciples: [
			'El 1 a 1 es el espacio abierto para asuntos urgentes, ideas brillantes y frustraciones acumuladas.',
			'Sin 1 a 1 regulares, los problemas reales se ocultan hasta estallar en dimisiones imprevistas o entregas fallidas.',
			'Detecta patrones: si tres ingenieros señalan la misma fricción interdepartamental, se trata de una avería organizativa, no de una queja personal.',
			'Los 1 a 1 skip-level son obligatorios para que los directivos escuchen la realidad sin filtros de la primera línea.'
		],
		actionableQuestions: [
			'Si pudiéramos mejorar un único aspecto del funcionamiento del equipo, ¿cuál marcaría la mayor diferencia?',
			'¿Quién en la empresa está haciendo un trabajo sobresaliente sin recibir el reconocimiento adecuado?',
			'¿Qué discurso repetido por la dirección en las reuniones generales se siente desconectado de la realidad del día a día?'
		],
		quote: {
			text: 'Si eres directivo, los 1 a 1 con tus colaboradores son tus reuniones de mayor apalancamiento. Es el espacio libre para todos los problemas urgentes que no caben en los canales formales.',
			attribution: 'Ben Horowitz, The Hard Thing About Hard Things'
		},
		relatedTemplateSlug: 'skip-level',
		relatedTemplateTitle: '1 a 1 Skip-Level: Diagnóstico de salud organizacional sin filtros'
	},
	{
		slug: 'the-making-of-a-manager',
		title: 'El camino del líder',
		originalTitle: 'The Making of a Manager',
		author: 'Julie Zhuo',
		authorRole: 'Ex-vicepresidenta de diseño de producto en Facebook',
		year: 2019,
		badge: 'Liderazgo humano moderno',
		coverImage: '/images/playbook/books/the-making-of-a-manager.jpg',
		coreThesis:
			'Los grandes directivos no nacen, se hacen. Dirigir no es ejercer poder o estatus; es la disciplina de ayudar a un grupo de personas a alcanzar un propósito compartido de manera sostenible.',
		oneOnOneFocusHtml:
			'<p>Zhuo ofrece un desglose contemporáneo y profundamente humano del 1 a 1, diferenciándolo tajantemente de los reportes de estado. Define cuatro áreas esenciales de conversación: <em>construir confianza, consensuar prioridades, resolver dificultades y calibrar metas de carrera</em>. Subraya que la seguridad psicológica forjada en los primeros 30 días es lo que permite que el feedback crítico futuro sea constructivo y bienvenido.</p>',
		keyPrinciples: [
			'Jamás permitas que un 1 a 1 se convierta en una actualización de estado: el avance se consulta de manera asíncrona.',
			'Adapta cadencia y estilo: los recién incorporados necesitan alineación frecuente; los profesionales senior requieren autonomía y espacio.',
			'Celebra avances y pequeñas victorias deliberadamente, no solo incidencias y defectos.',
			'Haz preguntas que desactiven barreras defensivas (p. ej., «¿Qué es lo que más te está costando resolver ahora mismo?»).'
		],
		actionableQuestions: [
			'¿Bajo qué condiciones consigues hacer tu trabajo más enfocado y gratificante?',
			'¿Cómo prefieres recibir feedback: al instante en caliente, por escrito antes o durante nuestros 1 a 1?',
			'¿Qué ha sido lo más confuso o ambiguo con lo que te has topado en nuestras dinámicas últimamente?'
		],
		quote: {
			text: 'El propósito principal de un 1 a 1 es forjar una relación de confianza mutua. Si tu 1 a 1 se siente como un informe de estado, estás desperdiciando la herramienta más valiosa de tu carrera directiva.',
			attribution: 'Julie Zhuo, The Making of a Manager'
		},
		relatedTemplateSlug: 'first-1-on-1',
		relatedTemplateTitle: 'El primer 1 a 1: Alineación de expectativas y seguridad psicológica'
	},
	{
		slug: 'the-managers-path',
		title: 'El camino del mánager',
		originalTitle: 'The Manager’s Path',
		author: 'Camille Fournier',
		authorRole: 'Ex-CTO de Rent the Runway',
		year: 2017,
		badge: 'Arquitectura de liderazgo técnico',
		coverImage: '/images/playbook/books/the-managers-path.jpg',
		coreThesis:
			'La gestión de ingeniería exige competencias distintas en cada escalón: desde mentorizar júniors hasta liderar perfiles Staff/Principal y gestionar a otros responsables técnicos.',
		oneOnOneFocusHtml:
			'<p>Fournier escribió la guía canónica para líderes tecnológicos. Aborda la naturaleza única de los 1 a 1 de ingeniería: gestión del talento júnior vs sénior, negociación de la deuda técnica y ascensos en carreras técnicas especializadas. Fournier advierte tajantemente: cuando un desarrollador afirma <em>«hoy no tengo nada especial de qué hablar»</em>, no es señal de calma, sino una alarma de desconexión silenciosa.</p>',
		keyPrinciples: [
			'Nunca canceles un 1 a 1 porque «parezca que todo marcha bien»: el desenganche silencioso comienza al abandonar las reuniones.',
			'Separa las entregas inmediatas de la trayectoria profesional a largo plazo; mezclarlas diluye el crecimiento del talento.',
			'Guía a los ingenieros en la doble escalera profesional (trayectoria técnica Staff/Principal vs gestión de personas).',
			'Actúa como canalizador de información: traduce el contexto empresarial y la estrategia a las realidades de la arquitectura técnica.'
		],
		actionableQuestions: [
			'Mirando nuestra hoja de ruta técnica, ¿qué reto arquitectónico te motiva más abordar?',
			'¿Sientes que tus iniciativas actuales te exigen el nivel adecuado de desafío técnico, o el trabajo se ha vuelto monótono?',
			'¿Qué competencia, herramienta o lenguaje que aún no usamos te gustaría dominar este año?'
		],
		quote: {
			text: 'Los 1 a 1 son el pulso vital de tu equipo. Si alguien te dice que no tiene nada de qué hablar, o bien no has forjado suficiente confianza o no estás haciendo las preguntas correctas.',
			attribution: 'Camille Fournier, The Manager’s Path'
		},
		relatedTemplateSlug: 'career-growth',
		relatedTemplateTitle: 'Desarrollo y carrera: La revisión trimestral'
	},
	{
		slug: 'radical-candor',
		title: 'Sinceridad radical',
		originalTitle: 'Radical Candor',
		author: 'Kim Scott',
		authorRole: 'Exdirectiva de Google y profesora de la Apple University',
		year: 2017,
		badge: 'Cultura de feedback y personas',
		coverImage: '/images/playbook/books/radical-candor.jpg',
		coreThesis:
			'El liderazgo inspirador exige preocuparse personalmente (Care Personally) al tiempo que se desafía directamente (Challenge Directly). Sin cuidado, el reto es agresión destructiva; sin franqueza directa, el cuidado se torna en empatía ruinosa.',
		oneOnOneFocusHtml:
			'<p>Scott sitúa el 1 a 1 como el escenario principal para practicar la Sinceridad Radical. Es donde los líderes solicitan primero una crítica honesta sobre su propia gestión antes de ofrecerla a los colaboradores, y donde se abordan con afecto y claridad frontal los problemas de rendimiento o el agotamiento extremo. El enfoque de Scott elimina el temor a las verdades incómodas al convertirlas en ayuda genuina.</p>',
		keyPrinciples: [
			'Pide siempre feedback sobre tu desempeño antes de ofrecer críticas formativas a tu colaborador.',
			'Evita la «empatía ruinosa»: no abordar el bajo rendimiento o el agotamiento por miedo a incomodar termina destruyendo al equipo.',
			'Las críticas difíciles se transmiten en privado, de inmediato y en el 1 a 1 cara a cara, nunca en canales públicos.',
			'Elogia en público y corrige en privado durante el 1 a 1.'
		],
		actionableQuestions: [
			'¿Qué podría hacer yo de forma distinta, o qué debería dejar de hacer, para facilitarte el trabajo?',
			'He notado señales claras de sobrecarga últimamente: revisemos tu carga de trabajo y quitemos tareas de inmediato.',
			'¿Hay algún comentario u opinión que hayas dudado en compartir conmigo hasta ahora?'
		],
		quote: {
			text: 'La sinceridad radical ocurre cuando combinas el afecto personal con el reto directo. El 1 a 1 es el taller donde se forja ese vínculo inquebrantable.',
			attribution: 'Kim Scott, Radical Candor'
		},
		relatedTemplateSlug: 'burnout-detection',
		relatedTemplateTitle: 'Sobrecarga y agotamiento: Recuperar el equilibrio'
	}
];

export const booksFr: PlaybookBook[] = [
	{
		slug: 'high-output-management',
		title: 'High Output Management',
		originalTitle: 'High Output Management',
		author: 'Andy Grove',
		authorRole: 'Ancien PDG et président du conseil d’administration d’Intel',
		year: 1983,
		badge: 'Le classique de la Silicon Valley',
		coverImage: '/images/playbook/books/high-output-management.jpg',
		coreThesis:
			'Le rendement d’un manager correspond au rendement des entités placées sous sa direction ou son influence. L’activité à plus fort effet de levier pour un dirigeant est la réunion 1:1.',
		oneOnOneFocusHtml:
			'<p>Andy Grove a littéralement inventé le 1:1 moderne dans la tech. Il a démontré que 90 minutes de temps managérial peuvent bonifier le travail d’un collaborateur pendant 80 heures entre deux points — soit un effet de levier exceptionnel supérieur à 50x. Surtout, Grove a posé un principe cardinal : <strong>le 1:1 est la réunion du collaborateur</strong>. C’est lui qui fixe l’ordre du jour et monopolise la parole ; le manager facilite, écoute et diffuse le contexte stratégique.</p>',
		keyPrinciples: [
			'Le collaborateur élabore l’ordre du jour ; le manager instaure un cadre sécurisant.',
			'Bloquer au moins 45 à 60 minutes : en deçà, l’échange dégénère en point d’avancement superficiel.',
			'Organiser le tête-à-tête dans l’environnement du collaborateur ou en terrain neutre pour gommer le poids hiérarchique.',
			'Ne jamais annuler un 1:1 ; un report ne peut être qu’exceptionnel et reprogrammé sans délai.'
		],
		actionableQuestions: [
			'Quel est le goulet d’étranglement principal qui freine ton travail aujourd’hui ?',
			'Y a-t-il des tâches ou des réunions dans nos processus qui te semblent être une perte de temps ?',
			'Sur quels arbitrages ou discussions de la semaine as-tu manqué de visibilité ou d’explications ?'
		],
		quote: {
			text: 'Quatre-vingt-dix minutes de votre temps peuvent rehausser la qualité du travail d’un subordonné pendant deux semaines, soit environ quatre-vingts heures.',
			attribution: 'Andy Grove, High Output Management'
		},
		relatedTemplateSlug: 'high-leverage-1-on-1',
		relatedTemplateTitle: 'Le 1:1 à fort impact : Le manifeste pour des réunions constructives'
	},
	{
		slug: 'the-hard-thing-about-hard-things',
		title: 'The Hard Thing About Hard Things',
		originalTitle: 'The Hard Thing About Hard Things',
		author: 'Ben Horowitz',
		authorRole: 'Co-fondateur d’Andreessen Horowitz et de Loudcloud/Opsware',
		year: 2014,
		badge: 'Gestion de crise et résilience',
		coverImage: '/images/playbook/books/the-hard-thing-about-hard-things.jpg',
		coreThesis:
			'Il n’existe pas de formule magique pour bâtir une entreprise pérenne, mais maintenir des canaux de communication transparents et détecter les mauvaises nouvelles au plus tôt est le seul gage de survie.',
		oneOnOneFocusHtml:
			'<p>Horowitz a consacré des sections majeures de son ouvrage aux 1:1, les érigeant en outil fondamental d’ingénierie organisationnelle. Dans les startups tech, les mauvaises nouvelles circulent lentement tandis que les succès voyagent vite. Le 1:1 constitue la soupape de sécurité indispensable permettant aux collaborateurs d’exprimer leurs inquiétudes latentes, leurs idées novatrices et leurs irritants profonds que les tickets Jira ignorent.</p>',
		keyPrinciples: [
			'Le 1:1 est le rendez-vous informel dédié aux sujets brûlants, aux idées novatrices et aux frustrations récurrentes.',
			'En l’absence de 1:1 réguliers, les problèmes s’enkystent jusqu’à déclencher des démissions surprises ou des livraisons chaotiques.',
			'Détecter les récurrences : si trois développeurs soulèvent la même friction transverse, il s’agit d’un problème structurel, non d’humeur personnelle.',
			'Les entretiens skip-level sont indispensables pour permettre à la direction d’entendre la vérité brute du terrain.'
		],
		actionableQuestions: [
			'Si nous devions transformer une seule chose dans le fonctionnement de l’équipe, qu’est-ce qui aurait le plus d’impact ?',
			'Qui réalise dans l’entreprise un travail exceptionnel qui reste sous les radars de la direction ?',
			'Qu’est-ce qui revient souvent dans les discours des dirigeants lors des All-Hands mais sonne totalement faux au quotidien ?'
		],
		quote: {
			text: 'Si vous êtes manager, vos entretiens individuels sont vos réunions à plus fort effet de levier. C’est l’espace libre pour tous les sujets urgents qui ne rentrent dans aucun canal formel.',
			attribution: 'Ben Horowitz, The Hard Thing About Hard Things'
		},
		relatedTemplateSlug: 'skip-level',
		relatedTemplateTitle: 'Skip-Level 1:1 : Diagnostic organisationnel sans filtre'
	},
	{
		slug: 'the-making-of-a-manager',
		title: 'The Making of a Manager',
		originalTitle: 'The Making of a Manager',
		author: 'Julie Zhuo',
		authorRole: 'Ancienne vice-présidente du design produit chez Facebook',
		year: 2019,
		badge: 'Leadership humain et moderne',
		coverImage: '/images/playbook/books/the-making-of-a-manager.jpg',
		coreThesis:
			'Les grands managers ne naissent pas tels quels, ils le deviennent. Le management ne se résume pas au pouvoir ou au statut ; c’est l’art d’amener un collectif à accomplir un objectif commun de façon durable.',
		oneOnOneFocusHtml:
			'<p>Julie Zhuo propose une analyse moderne et profondément empathique du 1:1, aux antipodes du compte rendu d’avancement. Elle dégage quatre zones de dialogue fondamentales : <em>tisser la confiance, arbitrer les priorités, dénouer les blocages et construire la trajectoire professionnelle</em>. Elle souligne que la sécurité psychologique instaurée lors des 30 premiers jours conditionne la réceptivité aux feedbacks exigeants de demain.</p>',
		keyPrinciples: [
			'Ne laissez jamais un 1:1 dévier en point de statut — l’état des projets se suit de façon asynchrone dans les outils.',
			'Adaptez la cadence et la posture : les nouveaux ont besoin de repères serrés ; les seniors confirmés ont besoin d’autonomie et de champ libre.',
			'Valorisez explicitement les progrès et les victoires intermédiaires, pas seulement les anomalies ou les dettes techniques.',
			'Posez des questions qui désamorcent les réflexes de défense (ex. « Qu’est-ce qui te paraît le plus ardu en ce moment ? »).'
		],
		actionableQuestions: [
			'Dans quel cadre parviens-tu à produire ton travail le plus concentré et gratifiant ?',
			'Comment préfères-tu recevoir les retours : sur le vif, par écrit en amont ou lors de nos 1:1 ?',
			'Quel est le sujet ou le processus qui t’a semblé le plus obscur ces derniers temps ?'
		],
		quote: {
			text: 'La vocation première d’un 1:1 est de sceller une relation de confiance réciproque. Si votre 1:1 ressemble à un point d’avancement, vous dilapidez le levier managérial le plus précieux.',
			attribution: 'Julie Zhuo, The Making of a Manager'
		},
		relatedTemplateSlug: 'first-1-on-1',
		relatedTemplateTitle: 'Le premier 1:1 : Clarifier les attentes et instaurer la confiance'
	},
	{
		slug: 'the-managers-path',
		title: 'The Manager’s Path',
		originalTitle: 'The Manager’s Path',
		author: 'Camille Fournier',
		authorRole: 'Ancienne CTO de Rent the Runway',
		year: 2017,
		badge: 'Management technique et organisation',
		coverImage: '/images/playbook/books/the-managers-path.jpg',
		coreThesis:
			'Le management technique requiert des compétences spécifiques à chaque palier — du mentorat de juniors à la direction d’ingénieurs Staff/Principal et au management d’autres managers.',
		oneOnOneFocusHtml:
			'<p>Camille Fournier est l’autrice du guide de référence pour le leadership tech. Elle explore les spécificités des 1:1 en ingénierie : accompagner les juniors face aux profils Staff, arbitrer les débats sur la dette technique et piloter les carrières d’experts. Fournier lance un avertissement sans appel : lorsqu’un développeur vous dit <em>« je n’ai rien de particulier à aborder aujourd’hui »</em>, ce n’est pas un signe d’alignement parfait, mais un signal d’alarme de désengagement discret.</p>',
		keyPrinciples: [
			'Ne sautez jamais un 1:1 sous prétexte que « tout a l’air de bien tourner » — le décrochage silencieux naît des rendez-vous abandonnés.',
			'Dissociez les livraisons du sprint des perspectives de carrière trimestrielles pour ne pas noyer le développement long terme.',
			'Aidez les ingénieurs à se repérer dans la double filière technique (filière Staff/Principal vs management d’équipe).',
			'Agissez comme une passerelle d’information : traduisez la stratégie d’entreprise en contexte clair pour les équipes de développement.'
		],
		actionableQuestions: [
			'Au vu de notre feuille de route, quel défi technique te stimule le plus ?',
			'As-tu le sentiment de relever des défis à ta mesure sur tes projets actuels, ou ressens-tu une routine ?',
			'Quelle technologie ou compétence absente de notre stack souhaiterais-tu maîtriser ?'
		],
		quote: {
			text: 'Les 1:1 sont le pouls de votre équipe. Si quelqu’un vous dit qu’il n’a rien à dire, c’est que vous n’avez pas instauré assez de confiance ou que vous ne posez pas les bonnes questions.',
			attribution: 'Camille Fournier, The Manager’s Path'
		},
		relatedTemplateSlug: 'career-growth',
		relatedTemplateTitle: 'Évolution professionnelle : Le point stratégique trimestriel'
	},
	{
		slug: 'radical-candor',
		title: 'Radical Candor : Soyez un manager bienveillant mais intransigeant',
		originalTitle: 'Radical Candor',
		author: 'Kim Scott',
		authorRole: 'Ancienne dirigeante chez Google et formatrice à l’Apple University',
		year: 2017,
		badge: 'Culture du feedback et sincérité',
		coverImage: '/images/playbook/books/radical-candor.jpg',
		coreThesis:
			'Le grand leadership conjugue une bienveillance sincère (Care Personally) et une franchise totale (Challenge Directly). Sans bienveillance, la confrontation est une agression pure ; sans franchise, la bienveillance devient une empathie ruineuse.',
		oneOnOneFocusHtml:
			'<p>Kim Scott place le 1:1 au cœur de sa pratique de la Sincérité Radicale. C’est le lieu où le manager sollicite d’abord des retours sans concession sur son propre management avant d’en formuler, et où les baisses de régime ou l’épuisement professionnel sont abordés avec une lucidité bienveillante. Sa méthode désamorce l’angoisse des vérités qui fâchent en les transformant en leviers d’entraide.</p>',
		keyPrinciples: [
			'Demandez toujours du feedback sur votre propre posture avant d’émettre une critique envers le collaborateur.',
			'Fuyez « l’empathie ruineuse » : taire les difficultés par peur de blesser finit par détruire les individus et les projets.',
			'Formulez les critiques en tête-à-tête, sans attendre et en 1:1, jamais sur des canaux publics.',
			'Félicitez en public ; critiquez en privé lors des 1:1.'
		],
		actionableQuestions: [
			'Que pourrais-je faire différemment ou cesser de faire pour te simplifier le quotidien ?',
			'J’ai remarqué des signes d’épuisement ces derniers temps : passons ta charge en revue et supprimons des tâches immédiatement.',
			'Y a-t-il un retour que tu as hésité à me partager jusqu’à présent ?'
		],
		quote: {
			text: 'La Franchise Radicale naît de la rencontre entre bienveillance personnelle et exigence directe. Le 1:1 est le lieu où cette relation de confiance se forge.',
			attribution: 'Kim Scott, Radical Candor'
		},
		relatedTemplateSlug: 'burnout-detection',
		relatedTemplateTitle: 'Surcharge et épuisement : Restaurer l’équilibre'
	}
];

export const booksLv: PlaybookBook[] = [
	{
		slug: 'high-output-management',
		title: 'Augstas atdeves vadība',
		originalTitle: 'High Output Management',
		author: 'Endijs Grovs (Andy Grove)',
		authorRole: 'Bijušais Intel izpilddirektors un valdes priekšsēdētājs',
		year: 1983,
		badge: 'Silīcija ielejas klasika',
		coverImage: '/images/playbook/books/high-output-management.jpg',
		coreThesis:
			'Vadītāja darba rezultāts ir viņa vadītās vai ietekmētās komandas rezultāts. Visaugstākās atdeves aktivitāte vadītāja arsenālā ir 1 pret 1 saruna.',
		oneOnOneFocusHtml:
			'<p>Endijs Grovs faktiski radīja moderno tehnoloģiju nozares 1 pret 1 kultūru. Viņš pierādīja, ka 90 minūtes vadītāja laika var ievērojami paaugstināt inženiera darba kvalitāti turpmākajām 80 darba stundām — sniedzot vairāk nekā 50-kārtīgu laika ieguldījuma atdevi. Būtiskākā Grova atziņa: <strong>1 pret 1 ir darbinieka saruna</strong>. Tieši darbinieks veido plānu un runā lielāko daļu laika, kamēr vadītājs uzklausa, trenē un nodod stratēģisko kontekstu.</p>',
		keyPrinciples: [
			'Darbinieks sagatavo sarunas tēmas; vadītājs nodrošina drošu un atvērtu telpu.',
			'Plānojiet vismaz 45 līdz 60 minūtes — īsākas sarunas pārvēršas formālā statusa atskaitē.',
			'Tikieties darbinieka darba vidē vai neitrālā telpā, lai mazinātu hierarhijas barjeras.',
			'Nekad neatceliet 1 pret 1 sarunas; pārcelšana pieļaujama tikai ārkārtas gadījumos ar tūlītēju jaunu laiku.'
		],
		actionableQuestions: [
			'Kas šobrīd ir lielākais šķērslis vai pudeles kakls, kas bremzē tavu darbu?',
			'Vai mūsu procesos ir kādas sanāksmes vai uzdevumi, kas šķiet lieka laika un enerģijas izšķiešana?',
			'Kuros šīs nedēļas lēmumos vai diskusijās tev pietrūka konteksta vai pamatojuma?'
		],
		quote: {
			text: 'Deviņdesmit minūtes jūsu laika var uzlabot padotā darba kvalitāti divām nedēļām jeb apmēram astoņdesmit darba stundām.',
			attribution: 'Endijs Grovs, High Output Management'
		},
		relatedTemplateSlug: 'high-leverage-1-on-1',
		relatedTemplateTitle: 'Augstas ietekmes 1 pret 1: Jēgpilnu tikšanos manifests'
	},
	{
		slug: 'the-hard-thing-about-hard-things',
		title: 'Grūtās lietas par grūtajām lietām',
		originalTitle: 'The Hard Thing About Hard Things',
		author: 'Bens Horovics (Ben Horowitz)',
		authorRole: 'Andreessen Horowitz un Opsware/Loudcloud līdzdibinātājs',
		year: 2014,
		badge: 'Krīzes vadība un uzņēmuma kultūra',
		coverImage: '/images/playbook/books/the-hard-thing-about-hard-things.jpg',
		coreThesis:
			'Lielisku uzņēmumu veidošanā nav gatavu recepšu, taču atvērtu komunikācijas kanālu uzturēšana un slikto ziņu savlaicīga atklāšana ir vienīgais organizācijas izdzīvošanas priekšnoteikums.',
		oneOnOneFocusHtml:
			'<p>Bens Horovics savā grāmatā veltīja atsevišķas nodaļas 1 pret 1 sarunām, dēvējot tās par galveno organizācijas arhitektūras instrumentu. Tehnoloģiju uzņēmumos sliktās ziņas augšup ceļo lēni, kamēr labās ziņas lido zibenīgi. 1 pret 1 saruna ir drošības vārsts, kur darbinieki var atklāt samilzušas problēmas, drosmīgas idejas un hronisku neapmierinātību, kas neparādās formālajos uzdevumos vai kopsapulcēs.</p>',
		keyPrinciples: [
			'1 pret 1 ir brīva platforma degošiem jautājumiem, jaunām idejām un apslēptai spriedzei.',
			'Bez regulārām sarunām sliktās ziņas uzkrājas un eksplodē pēkšņās vadošo darbinieku aiziešanās vai neveiksmīgos laidienos.',
			'Meklējiet kopsakarības: ja trīs inženieri min vienu un to pašu berzi ar citu komandu, tā ir sistēmas kļūda, nevis atsevišķs kašķis.',
			'Skip-level sarunas augstākajai vadībai ir neaizvietojamas, lai dzirdētu patiesību no inženieru ikdienas.'
		],
		actionableQuestions: [
			'Ja mēs komandas ikdienā varētu uzlabot tieši vienu lietu, kas dotu vislielāko atdevi?',
			'Kurš uzņēmumā veic izcilu darbu, ko vadība līdz šim nav pietiekami pamanījusi vai novērtējusi?',
			'Par ko uzņēmuma vadība bieži runā kopsapulcēs, kas reālajā ikdienas darbā izrādās pilnīgi pretēji?'
		],
		quote: {
			text: 'Ja esat vadītājs, individuālās sarunas ar tiešajiem padotajiem ir jūsu ietekmīgākās tikšanās. Tā ir brīva telpa visiem akūtajiem jautājumiem, kas neietilpst formālajos kanālos.',
			attribution: 'Bens Horovics, The Hard Thing About Hard Things'
		},
		relatedTemplateSlug: 'skip-level',
		relatedTemplateTitle: 'Skip-Level 1 pret 1: Organizācijas veselības diagnostika bez filtriem'
	},
	{
		slug: 'the-making-of-a-manager',
		title: 'Kļūt par vadītāju',
		originalTitle: 'The Making of a Manager',
		author: 'Džūlija Džo (Julie Zhuo)',
		authorRole: 'Bijušā Facebook produktu dizaina viceprezidente',
		year: 2019,
		badge: 'Mūsdienīga un cilvēcīga vadība',
		coverImage: '/images/playbook/books/the-making-of-a-manager.jpg',
		coreThesis:
			'Par izciliem vadītājiem nepiedzimst, par tiem kļūst. Vadība nav vara vai amats, bet gan prasme palīdzēt komandai ilgtspējīgi sasniegt kopīgus mērķus.',
		oneOnOneFocusHtml:
			'<p>Džūlija Džo piedāvā mūsdienīgu, empātisku un praktisku 1 pret 1 sarunu analīzi, stingri nodalot tās no statusa atskaitēm. Viņa definē 4 sarunu pamattēmas: <em>uzticēšanās veidošana, prioritāšu saskaņošana, sarežģījumu risināšana un karjeras mērķu kalibrēšana</em>. Džo uzsver: pirmajās 30 dienās ieliktie savstarpējās uzticēšanās un psiholoģiskās drošības pamati nosaka to, vai vēlāk būs iespējama atklāta un konstruktīva kritika.</p>',
		keyPrinciples: [
			'Nekad nepieļaujiet 1 pret 1 pārvēršanos par statusa sapulci — uzdevumu progresu var izlasīt asinhroni.',
			'Pielāgojiet biežumu un pieeju: jaunajiem kolēģiem nepieciešams biežāks atbalsts, savukārt pieredzējušiem senioriem — autonomija un uzticēšanās.',
			'Apzināti novērtējiet panākumus un mazās uzvaras, nevis tikai analizējiet kļūmes un problēmas.',
			'Uzdodiet jautājumus, kas noņem aizsargbarjeras (piemēram: «Kas šobrīd šķiet visgrūtākais?»).'
		],
		actionableQuestions: [
			'Kādos darba apstākļos tu spēj strādāt visfokusētāk un produktīvāk?',
			'Kā tev ir ērtāk saņemt atgriezenisko saiti: uzreiz situācijā, rakstiski pirms tikšanās vai mūsu 1 pret 1 sarunā?',
			'Kas no nesenajiem procesiem vai lēmumiem tev šķita visnesaprotamākais vai mulsinošākais?'
		],
		quote: {
			text: 'Individuālās sarunas galvenais mērķis ir veidot savstarpēju uzticēšanos. Ja jūsu 1 pret 1 atgādina statusa atskaiti, jūs izniekojat savu vērtīgāko vadības instrumentu.',
			attribution: 'Džūlija Džo, The Making of a Manager'
		},
		relatedTemplateSlug: 'first-1-on-1',
		relatedTemplateTitle: 'Pirmā 1 pret 1 tikšanās: Gaidu salāgošana un psiholoģiskā drošība'
	},
	{
		slug: 'the-managers-path',
		title: 'Vadītāja ceļš',
		originalTitle: 'The Manager’s Path',
		author: 'Kamilla Furnjē (Camille Fournier)',
		authorRole: 'Bijušā Rent the Runway tehniskā direktore (CTO)',
		year: 2017,
		badge: 'Tehniskā vadība un inženierija',
		coverImage: '/images/playbook/books/the-managers-path.jpg',
		coreThesis:
			'Inženieru vadība pieprasa atšķirīgas prasmes katrā līmenī — no jaunāko speciālistu mentorēšanas līdz vadošo Staff inženieru vadīšanai un citu vadītāju attīstībai.',
		oneOnOneFocusHtml:
			'<p>Kamilla Furnjē uzrakstīja pamatgrāmatu tehnoloģiju nozares līderiem. Viņa pievēršas specifiskiem inženiertehniskiem 1 pret 1 aspektiem: atšķirībām darbā ar junioriem un senioriem, tehniskā parāda sarunām un karjeras virzībai pa tehniskajām kāpnēm. Furnjē brīdina: ja inženieris saka <em>«man šodien īsti nav par ko runāt»</em>, tā nav miera zīme, bet gan trauksmes signāls par pieaugošu atsvešinātību.</p>',
		keyPrinciples: [
			'Nekad neatceliet 1 pret 1 tikai tāpēc, ka «viss šķiet kārtībā» — klusā atsvešināšanās sākas ar atceltām sarunām.',
			'Nodaliet ikdienas piegādes no ilgtermiņa karjeras izaugsmes sarunām, lai nepazaudētu attīstības perspektīvu.',
			'Palīdziet inženieriem orientēties karjeras ceļos (Staff/Principal tehniskā trase pret cilvēku vadības ceļu).',
			'Esiet informācijas tilts: tulkojiet uzņēmuma stratēģisko kontekstu saprotamā inženieru komandas valodā.'
		],
		actionableQuestions: [
			'Skatoties uz mūsu tehnoloģisko plānu, kurš izaicinājums tevi šobrīd aizrauj visvairāk?',
			'Vai tavos pašreizējos projektos jūti pietiekamu profesionālu izaicinājumu, vai arī darbs kļuvis vienmuļš?',
			'Kuru jaunu rīku vai tehnoloģiju tu vēlētos apgūt šogad?'
		],
		quote: {
			text: 'Individuālās sarunas ir jūsu komandas pulss. Ja kāds apgalvo, ka nav par ko runāt, jūs neesat izveidojis uzticēšanos vai neuzdodat pareizos jautājumus.',
			attribution: 'Kamilla Furnjē, The Manager’s Path'
		},
		relatedTemplateSlug: 'career-growth',
		relatedTemplateTitle: 'Karjeras un izaugsmes saruna: Ceturkšņa stratēģiskais pārskats'
	},
	{
		slug: 'radical-candor',
		title: 'Radikāls atklātums',
		originalTitle: 'Radical Candor',
		author: 'Kima Skota (Kim Scott)',
		authorRole: 'Bijušā Google vadītāja un Apple University pasniedzēja',
		year: 2017,
		badge: 'Atgriezeniskā saite un kultūra',
		coverImage: '/images/playbook/books/radical-candor.jpg',
		coreThesis:
			'Izcila līderība apvieno patiesu personīgu rūpi (Care Personally) ar tiešu prasīgumu (Challenge Directly). Bez rūpēm prasīgums ir agresija; bez prasīguma rūpes kļūst par graujošu empātiju.',
		oneOnOneFocusHtml:
			'<p>Kima Skota uzskata 1 pret 1 sarunu par Radikālā atklātuma galveno laboratoriju. Šeit vadītājs vispirms lūdz atklātu atgriezenisko saiti par sevi pašu, pirms izsaka kritiku citiem, un šeit ar līdzjūtīgu tiešumu tiek risinātas snieguma vai izdegšanas pazīmes. Skotas modelis noņem bailes no neērtām sarunām, pārvēršot kritiku par patiesu atbalsta instrumentu.</p>',
		keyPrinciples: [
			'Vienmēr vispirms pajautājiet atgriezenisko saiti par sevi, pirms kritizējat darbinieku.',
			'Izvairieties no «graujošās empātijas»: problēmu noklusēšana aiz bailēm aizvainot galu galā kaitē visiem.',
			'Izsakiet kritiku aci pret aci, tūlītēji un privāti 1 pret 1 sarunā, nekad publiskos kanālos.',
			'Slavējiet publiski; kritizējiet privāti 1 pret 1 sarunā.'
		],
		actionableQuestions: [
			'Ko es varētu darīt citādi vai pārtraukt darīt, lai atvieglotu tavu ikdienas darbu?',
			'Es pamanīju pārslodzes pazīmes — apskatīsim tavus uzdevumus un nekavējoties noņemsim lieko.',
			'Vai ir kādas pārdomas vai kritika, ar ko tev līdz šim bija neērti padalīties?'
		],
		quote: {
			text: 'Radikāls atklātums rodas, apvienojot personīgas rūpes ar tiešu prasīgumu. 1 pret 1 saruna ir vieta, kur šīs attiecības tiek nostiprinātas.',
			attribution: 'Kima Skota, Radical Candor'
		},
		relatedTemplateSlug: 'burnout-detection',
		relatedTemplateTitle: 'Pārslodze un izdegšana: Enerģijas atjaunošana'
	}
];

export function getBooks(locale: Locale): PlaybookBook[] {
	switch (locale) {
		case 'ru':
			return booksRu;
		case 'de':
			return booksDe;
		case 'es':
			return booksEs;
		case 'fr':
			return booksFr;
		case 'lv':
			return booksLv;
		case 'en':
		default:
			return booksEn;
	}
}
