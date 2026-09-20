import type { PlaybookItem, CategoryMeta } from './types';

export const categoriesDe: CategoryMeta[] = [
	{
		id: 'foundations',
		label: 'Grundlagen',
		description: 'Führungsphilosophie, Hebelwirkung (Leverage) und empirische Studien.'
	},
	{
		id: 'onboarding',
		label: 'Onboarding',
		description: 'Beziehungen mit Klarheit, Erwartungsmanagement und Vertrauen aufbauen.'
	},
	{
		id: 'regular',
		label: 'Regelmäßige Syncs',
		description:
			'Zweiwöchentliche Routinen zur Wahrung des Momentums und Beseitigung von Hindernissen.'
	},
	{
		id: 'growth',
		label: 'Karriere & Entwicklung',
		description: 'Quartalsgespräche über persönliche Entwicklung, Karrierepfade und Wirkung.'
	},
	{
		id: 'difficult',
		label: 'Schwierige Phasen',
		description: 'Umgang mit Überlastung, Burnout-Prävention und konstruktivem Feedback.'
	},
	{
		id: 'leadership',
		label: 'Leadership',
		description: 'Skip-Level-Meetings und strategische Ausrichtung über Teamgrenzen hinweg.'
	}
];

export const playbookItemsDe: PlaybookItem[] = [
	{
		slug: 'high-leverage-1-on-1',
		title: 'Das wirksame 1:1: Das Manifest für wertvolle Gespräche',
		subtitle:
			'Warum 90 % aller Einzelgespräche zu langweiligen Statusberichten verkommen – und wie Sie daraus den stärksten Hebel für Ihr Team machen.',
		category: 'foundations',
		readTime: '6 Min. Lesezeit',
		cadence: 'Grundlegendes Rahmenwerk für jeden wiederkehrenden Zyklus',
		duration: '30–45 Minuten',
		targetAudience: 'Engineering Manager, Tech Leads, Direktoren & CTOs',
		summaryHtml:
			'Das 1:1-Gespräch ist keine lästige Pflicht und kein Statusverhör. Es ist die Aktivität mit dem höchsten Hebel im Kalender einer Führungskraft. Mit Regelmäßigkeit, Kontinuität und echter Privatsphäre verhindert es Burnout und deckt Probleme Wochen vor jedem Dashboard auf.',
		whyItMattersHtml:
			'<p><strong>Die Status-Falle:</strong> Viele Führungskräfte verschwenden 1:1s damit, das mündlich zu wiederholen, was Jira oder Slack längst abbilden: <em>"Was hast du gestern gemacht, woran arbeitest du heute?"</em>. Sobald ein 1:1 zum Status-Meeting wird, schalten beide Seiten ab. Reale Blockaden bleiben ungesagt und Vertrauen geht verloren.</p><p><strong>Die Andy-Grove-Formel:</strong> In <em>High Output Management</em> rechnete Intel-Legende Andy Grove den Hebel vor: 90 Minuten gezieltes 1:1-Gespräch können die Arbeitsqualität eines Mitarbeiters für 80 Stunden zwischen den Terminen steigern – ein mehr als 50-facher ROI. Ziel ist nicht Kontrolle, sondern Kontext, Coaching und das Ausräumen von Hürden.</p><p><strong>Googles Project Oxygen:</strong> Googles langjährige Untersuchung von über 10.000 Beobachtungen zeigte: Regelmäßige, strukturierte 1:1s mit Fokus auf Entwicklung und Wohlbefinden sind der stärkste Prädiktor für exzellente Führung. Reine Fachkompetenz landete auf dem letzten Platz.</p><p><strong>Das Kontinuitätsproblem:</strong> Ein isoliertes Google Doc oder eine Notion-Seite hält Notizen fest, steuert aber keinen Prozess. Vereinbarungen vom Mai sind im Juli vergessen. Echtes Momentum verlangt automatische Kontinuität: Ziele und Verpflichtungen müssen über Zyklen hinweg fortgeführt werden, bis sie gelöst sind.</p><p><strong>Privatsphäre als Voraussetzung für Wahrheit:</strong> Psychologische Sicherheit kann ohne absolute Vertraulichkeit nicht existieren. Wenn Notizen in Cloud-Tools liegen, in die IT-Admins oder Dritte einsehen können, zensieren sich Mitarbeiter selbst. Ende-zu-Ende-Verschlüsselung ist das technische Fundament für Ehrlichkeit.</p>',
		agenda: [
			{
				title: 'Säule 1: Puls & Energie (5 Min.)',
				durationMinutes: 5,
				description:
					'Den Menschen und das Wohlbefinden erfassen, bevor Arbeitsinhalte besprochen werden.',
				questions: [
					'Wie ist dein Energielevel diese Woche auf einer Skala von 1 bis 5?',
					'Was war dein Highlight der Woche – beruflich oder privat?'
				]
			},
			{
				title: 'Säule 2: Hindernisse & Reibung (15 Min.)',
				durationMinutes: 15,
				description: 'Hürden und Engpässe identifizieren, die den Fluss bremsen.',
				questions: [
					'Welcher Engpass oder welche Abhängigkeit von anderen Teams hält dich gerade auf?',
					'Welcher Prozess oder welches Meeting hat sich diese Woche unnötig zäh angefühlt?'
				]
			},
			{
				title: 'Säule 3: Perspektive & Karriere (15 Min.)',
				durationMinutes: 15,
				description: 'Das Tagesgeschäft mit langfristigen Ambitionen verknüpfen.',
				questions: [
					'Wie zahlt deine aktuelle Arbeit auf die Fähigkeiten ein, die du dieses Jahr ausbauen möchtest?',
					'Fühlst du dich aktuell passend gefordert oder ist die Arbeit zu repetitiv?'
				]
			},
			{
				title: 'Säule 4: Beidseitiges Feedback & Verbindlichkeiten (10 Min.)',
				durationMinutes: 10,
				description: 'Rückmeldung austauschen und feste Punkte für den nächsten Zyklus fixieren.',
				questions: [
					'Was kann ich anders machen, um dich besser zu unterstützen oder dir den Rücken freizuhalten?',
					'Welche 1–2 konkreten Vereinbarungen nehmen wir beide bis zum nächsten Treffen mit?'
				]
			}
		],
		tips: [
			'80/20-Regel: Der Mitarbeiter spricht 80 % der Zeit, die Führungskraft maximal 20 %.',
			'Sagen Sie 1:1s niemals kurzfristig ab; falls unvermeidbar, buchen Sie sofort einen Ersatztermin.',
			'Halten Sie Zusagen direkt fest, damit das Anknüpfen beim nächsten Mal mühelos gelingt.'
		],
		keyTakeaway:
			'Der Output einer Führungskraft ist der Output ihres Teams. Das 1:1 ist das wirksamste Steuerrad dafür.'
	},
	{
		slug: 'first-1-on-1',
		title: 'Das erste 1:1: Erwartungsmanagement & psychologische Sicherheit',
		subtitle:
			'Gegenseitiges Vertrauen aufbauen, Arbeitsstile kennenlernen und Spielregeln für die Zusammenarbeit definieren.',
		category: 'onboarding',
		readTime: '4 Min. Lesezeit',
		cadence: 'In den ersten 1–2 Wochen der Zusammenarbeit',
		duration: '45–60 Minuten',
		targetAudience: 'Führungskraft & neues Teammitglied (oder neue Führungskraft im Team)',
		summaryHtml:
			'Das erste 1:1 ist kein Status-Update. Sein alleiniger Zweck ist es, die Zusammenarbeit zu kalibrieren, Unsicherheiten zu nehmen und psychologische Sicherheit aufzubauen.',
		whyItMattersHtml:
			'<p>Wie Andy Grove betonte, ist das 1:1 primär <em>das Meeting des Mitarbeiters</em>. Wenn jemand neu ins Team kommt, erzeugt Unklarheit Stress. Klargestellte Rahmenbedingungen nehmen von Tag eins an den Druck.</p>',
		agenda: [
			{
				title: 'Teil 1: Den Rahmen klären (10 Min.)',
				durationMinutes: 10,
				description: 'Klären, wofür diese Termine da sind – und wofür nicht.',
				questions: [
					'Welche Erfahrungen hast du bisher mit 1:1s gemacht? Was war hilfreich, was frustrierend?',
					'Meine Philosophie: Das ist deine Zeit, nicht meine Aufgabenkontrolle. Wie klingt das für dich?'
				]
			},
			{
				title: 'Teil 2: Arbeits- & Kommunikationsstil (20 Min.)',
				durationMinutes: 20,
				description: 'Verstehen, unter welchen Bedingungen die Person Höchstleistungen erbringt.',
				questions: [
					'Unter welchen Bedingungen arbeitest du am fokussiertesten (Ruhezeiten, Pairing, Deep Work)?',
					'Wie möchtest du Feedback erhalten: direkt im Moment, schriftlich vorab oder im 1:1?',
					'Wenn du gestresst bist: Woran bemerkt man das von außen und wie kann ich dich unterstützen?'
				]
			},
			{
				title: 'Teil 3: Die ersten 30 Tage (15 Min.)',
				durationMinutes: 15,
				description: 'Sicherstellen, dass alles für einen reibungslosen Start vorhanden ist.',
				questions: [
					'Was war bisher am unklarsten oder verwirrendsten?',
					'Fehlt dir aktuell irgendein Tool, Zugriff oder Kontext?'
				]
			}
		],
		tips: [
			'Sprechen Sie nicht über Jira-Tickets oder Sprints.',
			'Hören Sie 80 % der Zeit aktiv zu.',
			'Versichern Sie absolute Vertraulichkeit.'
		],
		keyTakeaway:
			'Das erste Treffen prägt das gesamte Arbeitsverhältnis. Vertrauen geht vor Formalien.'
	},
	{
		slug: 'bi-weekly-pulse',
		title: 'Regelmäßiges 1:1: Der zweiwöchentliche Takt',
		subtitle:
			'Ein wiederholbares 30-Minuten-Framework rund um Energie, Fortschritt, Engpässe und gegenseitiges Feedback.',
		category: 'regular',
		readTime: '3 Min. Lesezeit',
		cadence: 'Alle 1–2 Wochen',
		duration: '30–45 Minuten',
		targetAudience: 'Führungskraft & Teammitglied',
		summaryHtml:
			'Ein routinemäßiger Sync darf niemals ein Board-Vorlesen sein. Es geht um Kontext, Blockaden und emotionale Energie.',
		whyItMattersHtml:
			'<p>Regelmäßige, strukturierte Treffen verhindern, dass kleine Reibungen zu Kündigungen oder großen Konflikten anwachsen.</p>',
		agenda: [
			{
				title: '1. Wohlbefinden & Energie (5 Min.)',
				durationMinutes: 5,
				description: 'Beim Menschen beginnen, nicht beim Backlog.',
				questions: [
					'Wie steht dein Energielevel diese Woche auf einer Skala von 1 bis 5?',
					'Was war dein Highlight der Woche?'
				]
			},
			{
				title: '2. Blockaden & Reibung (15 Min.)',
				durationMinutes: 15,
				description: 'Hindernisse identifizieren und aus dem Weg räumen.',
				questions: [
					'Was kostet dich gerade unverhältnismäßig viel Zeit oder Nerven?',
					'Gibt es Abhängigkeiten von anderen Teams, die dich blockieren?',
					'Was kann ich tun, um dir die nächsten zwei Wochen zu erleichtern?'
				]
			},
			{
				title: '3. Feedback & Vereinbarungen (10 Min.)',
				durationMinutes: 10,
				description: 'Fortschritt der Absprachen prüfen und Kurs korrigieren.',
				questions: [
					'Wie steht es um die Vereinbarungen unseres letzten Termins?',
					'Gibt es Entscheidungen, bei denen du dich übergangen fühlst oder anderer Meinung bist?'
				]
			}
		],
		tips: [
			'Überfliegen Sie vor dem Meeting die Notizen des letzten Termins.',
			'Leiten Sie reine Statusberichte freundlich in asynchrone Kanäle um.'
		],
		keyTakeaway:
			'Regelmäßigkeit schlägt Dauer: 30 fokussierte Minuten alle zwei Wochen sind besser als ein seltener Marathon.'
	},
	{
		slug: 'career-growth',
		title: 'Karriere & Wachstum: Das Quartalsgespräch',
		subtitle:
			'Den Blick vom Tagesgeschäft lösen: Langfristige Richtung, neue Fähigkeiten und berufliche Ambitionen.',
		category: 'growth',
		readTime: '4 Min. Lesezeit',
		cadence: 'Vierteljährlich (alle 3–6 Monate)',
		duration: '45–60 Minuten',
		targetAudience: 'Führungskraft & Teammitglied',
		summaryHtml:
			'Ein dedizierter Raum, um über die berufliche Zukunft zu sprechen, abseits akuter Sprint-Deadlines.',
		whyItMattersHtml:
			'<p>Laut Gallup ist fehlende Entwicklung einer der Hauptgründe für den Weggang von Top-Kräften. Ein fester Quartalstermin garantiert, dass Entwicklung nicht untergeht.</p>',
		agenda: [
			{
				title: '1. Reflexion (15 Min.)',
				durationMinutes: 15,
				description: 'Blick zurück auf Meilensteine und Interessen.',
				questions: [
					'Auf welches Projekt oder Ergebnis der letzten Monate bist du besonders stolz?',
					'Welche Aufgaben gaben dir Energie, welche haben Kraft geraubt?'
				]
			},
			{
				title: '2. Zukünftige Ausrichtung (20 Min.)',
				durationMinutes: 20,
				description: 'Die Rolle in 1–2 Jahren skizzieren.',
				questions: [
					'Wenn du dir deinen idealen Arbeitsalltag in 1–2 Jahren vorstellst: Woran arbeitest du?',
					'Zieht es dich eher in fachliche Tiefe/Architektur oder in Führung und Teamorganisation?'
				]
			},
			{
				title: '3. Konkrete Entwicklungsschritte (15 Min.)',
				durationMinutes: 15,
				description: 'Ambitionen in reale Projekte übersetzen.',
				questions: [
					'In welchem anstehenden Projekt können wir eine Aufgabe zum Üben dieser Fähigkeit einbauen?',
					'Welches konkrete Ziel setzen wir uns für die nächsten 90 Tage?'
				]
			}
		],
		tips: [
			'Trennen Sie dieses Gespräch strikt von Gehaltsverhandlungen oder Krisengesprächen.',
			'Sprechen Sie ehrlich über Entwicklungspfade im Unternehmen.'
		],
		keyTakeaway:
			'Wachstum bedeutet nicht nur Beförderung – sondern das Erweitern von Fähigkeiten und Selbstständigkeit.'
	},
	{
		slug: 'burnout-detection',
		title: 'Überlastung & Burnout: Balance wiederherstellen',
		subtitle:
			'Ein sensibles Framework, um Erschöpfung frühzeitig zu erkennen, Schuldgefühle zu nehmen und Entlastung zu schaffen.',
		category: 'difficult',
		readTime: '4 Min. Lesezeit',
		cadence: 'Bei Bedarf oder ersten Anzeichen von chronischem Stress',
		duration: '45 Minuten',
		targetAudience: 'Führungskraft & überlasteter Mitarbeiter',
		summaryHtml:
			'Wenn jemand erschöpft ist, greifen Standardfragen ins Leere. Dieses Template hilft, achtsam Druck abzubauen und einen Erholungsplan aufzustellen.',
		whyItMattersHtml:
			'<p>Leistungsträger leiden oft still unter Burnout, aus Angst vor Schwäche. Ihre Aufgabe als Führungskraft ist hier nicht Fristenkontrolle, sondern Schutz der Gesundheit.</p>',
		agenda: [
			{
				title: '1. Sicherheit & Entlastung (10 Min.)',
				durationMinutes: 10,
				description: 'Druck nehmen und signalisieren, dass Wohlbefinden Priorität hat.',
				questions: [
					'Ich habe bemerkt, wie intensiv die letzte Zeit war, und wollte hören, wie es dir geht.',
					'Deine Gesundheit steht an erster Stelle. Kein Release rechtfertigt ein Ausbrennen.'
				]
			},
			{
				title: '2. Triage & Aufgabenabbau (20 Min.)',
				durationMinutes: 20,
				description: 'Verantwortlichkeiten radikal reduzieren.',
				questions: [
					'Wenn wir heute zwei Dinge von deinem Tisch nehmen könnten: Was würde dir sofortige Entlastung bringen?',
					'Welche Termine kosten Kraft, ohne Mehrwert zu liefern?'
				]
			},
			{
				title: '3. Sofortige Schutzmaßnahmen (15 Min.)',
				durationMinutes: 15,
				description: 'Klare Grenzen für die nächsten Tage definieren.',
				questions: [
					'Würden dir ein paar Tage kompletter Auszeit oder ein sprint-freier Zeitraum helfen?',
					'Wie kann ich dich vor Anfragen von außen abschirmen, während du durchatmest?'
				]
			}
		],
		tips: [
			'Vermeiden Sie Floskeln wie "mach mal langsam", ohne dem Mitarbeiter echte Arbeit abzunehmen.',
			'Streichen Sie Aufgaben aktiv selbst aus dem Backlog.'
		],
		keyTakeaway:
			'Burnout ist ein systemisches Problem der Aufgabenlast, kein persönliches Versagen. Handeln Sie sofort.'
	},
	{
		slug: 'skip-level',
		title: 'Skip-Level-1:1: Organisationsgesundheit prüfen',
		subtitle:
			'Gespräch zwischen Senior Leadership und Mitarbeitern zur Bewertung von Strategie, Kultur und Engpässen.',
		category: 'leadership',
		readTime: '4 Min. Lesezeit',
		cadence: 'Alle 3–6 Monate',
		duration: '30–45 Minuten',
		targetAudience: 'Senior Leader / CTO / Director & Teammitglied',
		summaryHtml:
			'Skip-Level-Meetings bieten Führungskräften ungefilterten Einblick in Teamdynamik und Prozesse, ohne direkte Vorgesetzte zu untergraben.',
		whyItMattersHtml:
			'<p>Ben Horowitz betonte, dass schlechte Nachrichten in Organisationen oft nur langsam nach oben wandern. Skip-Levels schaffen eine direkte Sicht auf die Realität an der Basis.</p>',
		agenda: [
			{
				title: '1. Rahmen & Ziel (5 Min.)',
				durationMinutes: 5,
				description: 'Klarstellen, dass dies keine Leistungsüberprüfung ist.',
				questions: [
					'Danke für deine Zeit! Es geht mir darum, deine Perspektive auf das Team und die Firma zu hören.'
				]
			},
			{
				title: '2. Strategische Klarheit (15 Min.)',
				durationMinutes: 15,
				description: 'Prüfen, ob die Unternehmensvision im Alltag ankommt.',
				questions: [
					'Ist die übergeordnete Strategie für dich greifbar und nachvollziehbar?',
					'Siehst du klar, wie deine tägliche Arbeit auf unsere Hauptziele einzahlt?'
				]
			},
			{
				title: '3. Systemische Engpässe (15 Min.)',
				durationMinutes: 15,
				description: 'Strukturelle Hürden aufdecken.',
				questions: [
					'Was ist der größte Engpass, der dein Team davon abhält, schneller gute Software zu liefern?',
					'Wenn du eine Woche lang an meiner Stelle wärst: Welche Entscheidung würdest du sofort treffen?'
				]
			}
		],
		tips: [
			'Nutzen Sie Skip-Levels niemals, um über direkte Vorgesetzte zu tratschen.',
			'Suchen Sie nach wiederkehrenden Mustern in mehreren Gesprächen.'
		],
		keyTakeaway: 'Skip-Levels dienen der Diagnose des Gesamtsystems. Behalten Sie den weiten Blick.'
	}
];
