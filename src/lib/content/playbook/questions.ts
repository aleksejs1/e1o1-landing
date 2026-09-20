import type { Locale } from '$lib/paraglide/runtime';

export type QuestionCategory =
	'icebreaker' | 'upward-feedback' | 'team-dynamics' | 'blockers' | 'career' | 'workload';

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
	{
		id: 'e1',
		category: 'icebreaker',
		text: 'Wie steht dein Energielevel und deine mentale Batterie diese Woche auf einer Skala von 1 bis 5?',
		whyAsk: 'Schneller quantitativer Stimmungscheck.'
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
		whyAsk: 'Deckung ungesunden Erreichbarkeitsdrucks auf.'
	}
];

export const questionsEs: QuestionItem[] = [
	{
		id: 'e1',
		category: 'icebreaker',
		text: '¿Cómo está tu batería mental y nivel de energía esta semana del 1 al 5?',
		whyAsk: 'Pulso cuantitativo rápido que normaliza hablar del cansancio.'
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
	}
];

export const questionsFr: QuestionItem[] = [
	{
		id: 'e1',
		category: 'icebreaker',
		text: 'Où se situe ta batterie mentale et ton niveau d’énergie cette semaine de 1 à 5 ?',
		whyAsk: 'Mesure rapide qui normalise la discussion sur la fatigue.'
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
	}
];

export const questionsLv: QuestionItem[] = [
	{
		id: 'e1',
		category: 'icebreaker',
		text: 'Kāds ir tavs mentālais resurss un enerģijas līmenis šonedēļ skalā no 1 līdz 5?',
		whyAsk: 'Ātrs kvantitatīvs rādītājs, kas normalizē sarunu par nogurumu.'
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
