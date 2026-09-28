import type { BlogPost, BlogUiStrings } from './types';

export const blogUiDe: BlogUiStrings = {
	blogTitle: 'Blog & Engineering-Notizen',
	blogSubtitle:
		'Gedanken zur 1:1-Gesprächsmethodik, kognitiven Belastung in Entwicklerteams und der Entwicklung von Zero-Knowledge-Software.',
	latestArticles: 'Aktuelle Artikel',
	readArticle: 'Artikel lesen',
	backToBlog: 'Zurück zum Blog',
	publishedOn: 'Veröffentlicht am',
	writtenBy: 'Autor',
	shareArticle: 'Teilen',
	linkCopied: 'Link in die Zwischenablage kopiert!',
	tryDemoTitle: '1:1-Gespräche mit mathematischer Vertraulichkeit führen',
	tryDemoBody:
		'encrypted1on1 schützt Gesprächsnotizen und Entwicklungsziele mit Ende-zu-Ende-Verschlüsselung im Browser. Weder Server noch Administratoren haben Zugriff.',
	tryDemoCta: 'Live-Demo ohne Registrierung testen',
	moreArticles: 'Weitere Beiträge im Blog'
};

export const blogPostsDe: BlogPost[] = [
	{
		slug: 'why-we-built-encrypted1on1',
		title: 'Warum wir encrypted1on1 gebaut haben',
		subtitle:
			'Die Erkenntnis, dass 1:1-Gesprächsnotizen Mathematik erfordern und keine Versprechen in Datenschutzerklärungen.',
		description:
			'1:1-Notizen enthalten die vertraulichsten Gespräche eines Unternehmens. Warum das Versprechen «wir lesen nicht mit» nicht ausreicht und wie die Zero-Knowledge-Plattform entstand.',
		date: '2026-08-09',
		formattedDate: '9. August 2026',
		readTime: '4 Min. Lesezeit',
		category: 'Manifest',
		author: {
			name: 'Aleksejs',
			role: 'Gründer & Entwickler'
		},
		tags: ['Sicherheit', 'Zero-Knowledge', '1:1 Meetings', 'Open Source'],
		leadHtml:
			'Wir wollten kein weiteres SaaS-Tool bauen. Wir haben als Kunde angefangen. Dies ist die Geschichte darüber, wie die Einstellung eines Drittanbieters uns dazu zwang, grundlegend zu überdenken, wo die vertraulichsten Teamgespräche tatsächlich liegen.',
		sections: [
			{
				heading: 'Wir fingen als Kunde an',
				paragraphsHtml: [
					'Unsere Organisation hat ihren 1:1-Prozess über ein Tool eines Drittanbieters abgewickelt — eines von vielen gut durchdachten, gut gemeinten Produkten in diesem Bereich. Es hat seinen Zweck gut erfüllt.',
					'Dann, wie es bei vielen kleinen Anbietern irgendwann passiert, wurde die Einstellung des Betriebs angekündigt. Das ist normal: Startups schließen, Produkte laufen aus.',
					'Was nicht normal war, war die Erkenntnis, die uns dabei kam: Wir hatten uns nie wirklich gefragt, was die Einstellung eines Anbieters für den Inhalt eines 1:1-Gesprächs <em>bedeutet</em>.'
				]
			},
			{
				heading: 'Was sich wirklich in 1:1-Notizen verbirgt',
				paragraphsHtml: [
					'Bedenken Sie, was im Laufe eines Jahres vertraulicher Gespräche festgehalten wird: Leistungsbedenken, die jemand im Vertrauen geäußert hat. Private Notizen einer Führungskraft zur Karriereentwicklung. Gehaltsgespräche. Persönliche Umstände, die ein Mitarbeiter offenbart hat in der Erwartung, dass sie streng zwischen zwei Personen bleiben.',
					'Nichts davon soll jemals für jemanden außerhalb der beiden Beteiligten sichtbar sein — weder für den Vorgesetzten noch für die Personalabteilung oder die IT, und im Grunde auch nicht für <em>den SaaS-Anbieter selbst</em>, obwohl dieser technisch gesehen jederzeit Klartext in der Datenbank hätte einsehen können.'
				]
			},
			{
				heading: 'Die Bewährungsprobe: Warum Versprechen nicht genügen',
				paragraphsHtml: [
					'Eine Betriebseinstellung ist genau der Moment, in dem Datenpraktiken am härtesten auf die Probe gestellt werden: Support-Mitarbeiter führen Datenbankexporte durch, ein Käufer macht eine technische Due-Diligence, und ein kleines Team wickelt unter Zeitdruck alles ab.',
					'Wir hatten keinen Grund zur Annahme, dass mit unseren Daten konkret etwas Schlimmes passieren würde. Aber wir hatten auch keine Möglichkeit, <em>sicher zu wissen</em>, dass es nicht passieren würde — denn das gesamte Modell beruhte auf „vertraut uns“, und „uns“ war ein Unternehmen, das gerade sein Geschäft aufgab.'
				]
			},
			{
				heading: 'Mathematik statt Datenschutzerklärungen',
				paragraphsHtml: [
					'Das ist die Lücke, die wir richtig schließen wollten — nicht nur für unsere eigene Organisation, sondern als etwas, das jeder in derselben Lage selbst überprüfen kann, statt es einfach glauben zu müssen.',
					'Wenn eine 1:1-Plattform einige der sensibelsten Gespräche eines Unternehmens speichert, ist „wir versprechen, nicht mitzulesen“ keine ausreichend starke Garantie. Die einzige verlässliche Garantie ist eine, bei der Mitlesen <em>gar nicht möglich</em> ist: bei der Betreiber, IT-Team und selbst Angreifer bei voller Serverkompromittierung nichts als unlesbaren Chiffretext erhalten.',
					'Das ist keine Klausel in einem PDF. Das ist echte Ende-zu-Ende-Verschlüsselung mit offenem Quellcode, damit jeder Entwickler die kryptografische Sicherheit selbst verifizieren kann.',
					'<strong>encrypted1on1 ist das Ergebnis dieser Überzeugung.</strong>'
				]
			}
		]
	},
	{
		slug: 'v1-0-0-release',
		title: 'encrypted1on1 v1.0.0: Die erste stabile Version',
		subtitle:
			'Self-hosted, Ende-zu-Ende-verschlüsselte 1:1-Gespräche mit asynchroner Vorbereitung, Zielverfolgung und Docker-Deployment.',
		description:
			'encrypted1on1 v1.0.0 ist da: Die erste stabile Version unserer Zero-Knowledge-Plattform für strukturierte 1:1-Gespräche zwischen Führungskräften und Mitarbeitern. Docker-Image, Verifikation und Live-Demo.',
		date: '2026-08-16',
		formattedDate: '16. August 2026',
		readTime: '5 Min. Lesezeit',
		category: 'Release',
		author: {
			name: 'Aleksejs',
			role: 'Gründer & Entwickler'
		},
		tags: ['v1.0.0', 'Release', 'Docker', 'Open Source', 'Sicherheit'],
		coverImage: '/images/landing/privacy-infrastructure.jpg',
		leadHtml:
			'Heute erreichen wir einen entscheidenden Meilenstein: Wir veröffentlichen offiziell <strong>encrypted1on1 v1.0.0</strong> — unsere erste stabile Produktionsversion. Sie bietet Teams einen dedizierten, strukturierten Rahmen für 1:1-Gespräche, bei dem der Server zu keinem Zeitpunkt Klartextnotizen, Feedback oder Ziele einsehen kann.',
		sections: [
			{
				heading: 'Warum 1:1-Gespräche eine Zero-Knowledge-Architektur verlangen',
				paragraphsHtml: [
					'In vertraulichen 1:1-Gesprächen zwischen Teamleitung und Mitarbeitenden finden die sensibelsten Unterhaltungen eines Unternehmens statt: ehrliches Feedback zur Leistung, Gehalts- und Entwicklungsgespräche, Überlastungssignale und private Lebensumstände.',
					'Herkömmliche SaaS-Cloud-Tools, interne Wikis und geteilte Dokumente verlangen blindes Vertrauen: Vertrauen in Datenbankadministratoren, Hosting-Provider und Support-Teams.',
					'Mit encrypted1on1 haben wir Vertrauen durch Mathematik ersetzt. Sämtliche Inhalte werden vor der Übertragung direkt im Browser des Nutzers verschlüsselt. Selbst wer uneingeschränkten Server- und Datenbankzugriff hat, sieht ausnahmslos unlesbaren Chiffretext.'
				]
			},
			{
				heading: 'Neuerungen in Version 1.0.0',
				paragraphsHtml: [
					'Version 1.0.0 ist das Resultat monatelanger Architekturarbeit, gründlicher Sicherheitsaudits und praktischer Erprobung. Der Funktionsumfang umfasst:',
					'<ul><li><strong>Ende-zu-Ende-verschlüsselte Gesprächsbögen („Anketas“):</strong> X25519-Schlüsselpaare pro Teilnehmer, XChaCha20-Poly1305 authentifizierte symmetrische Verschlüsselung für Inhalte und Argon2id-Schlüsselableitung aus dem Nutzerpasswort.</li><li><strong>Asynchrone Vorbereitung:</strong> Führungskraft und Mitarbeiter erfassen Agenda, Blocker sowie Stimmungs- und Workload-Einschätzungen strukturiert vor dem Meeting.</li><li><strong>Zyklusübergreifende Zielverfolgung:</strong> Beschlüsse und Quartalsziele gehen nicht verloren — sie werden automatisch in nachfolgende Zyklen übernommen, bis sie abgeschlossen oder archiviert werden.</li><li><strong>Datenschutzkonforme Trendberichte:</strong> Periodenübersicht mit Mood- und Ziel-Sparklines, die vollständig im Browser via Inline-SVG gerendert werden — ohne externe Tracking-Skripte oder serverseitige Klartextaggregation.</li><li><strong>Vollständige Accountverwaltung:</strong> Konfigurierbare Registrierungsmodi (auf Einladung, nur durch Administratoren oder E-Mail-Domänen-beschränkt mit Double-Opt-in), Passwortänderung ohne Schlüsselverlust und clientseitig entschlüsselter JSON-Datenexport.</li></ul>'
				]
			},
			{
				heading: 'Kompromisslose und überprüfbare Sicherheit',
				paragraphsHtml: [
					'encrypted1on1 folgt dem Prinzip der tiefengestaffelten Verteidigung (Defense-in-Depth):',
					'<ul><li><strong>Black-Box-Datenschutztests:</strong> Playwright-e2e-Tests mit zwei unabhängigen Browserinstanzen prüfen echte Kryptooperationen und analysieren die Rohdatenbank, um mathematisch zu garantieren, dass kein Klartext im Speicher oder in API-Antworten landet.</li><li><strong>Strikte Sicherheits-Header:</strong> Strenge Content Security Policy (CSP), Subresource Integrity (SRI) für alle Frontend-Assets und erzwungenes HSTS.</li><li><strong>Gehärteter Docker-Container:</strong> Läuft als unprivilegierter Benutzer mit FrankenPHP + Caddy inklusive automatischer HTTPS-Zertifikate und HEALTHCHECK.</li><li><strong>Hochperformante Speicherung:</strong> SQLite mit aktiviertem Write-Ahead-Logging (WAL) für schnelle parallele Schreibzugriffe sowie ein erprobter Migrationspfad auf MySQL für größere Teams.</li></ul>'
				]
			},
			{
				heading: 'Erste Schritte & Docker-Deployment',
				paragraphsHtml: [
					'Das Ausrollen von encrypted1on1 erfordert lediglich einen einzigen Befehl über unser offizielles Image in der GitHub Container Registry:',
					'<pre><code>docker pull ghcr.io/aleksejs1/encrypted1on1:1.0.0</code></pre>',
					'Möchten Sie das System vorab testen? Besuchen Sie unsere interaktive Demo unter <a href="https://demo.private1on1.eu" target="_blank" rel="noopener noreferrer">demo.private1on1.eu</a> — ohne Registrierung und mit vorbereiteten Beispielzyklen in allen Sprachen.',
					'Der Quellcode ist vollständig unter der <strong>AGPLv3</strong>-Lizenz auf <a href="https://github.com/aleksejs1/encrypted1on1" target="_blank" rel="noopener noreferrer">GitHub</a> veröffentlicht.'
				]
			}
		]
	},
	{
		slug: 'v1-2-0-release',
		title: 'encrypted1on1 v1.2.0: Fragebogen-Versionierung, eigene Korrekturen und verbesserte UX',
		subtitle:
			'Wie Fragebögen für 1:1-Gespräche ohne Bedeutungsverlust vergangener Notizen weiterentwickelt werden, eigene Korrekturen und Terminverschiebungen.',
		description:
			'encrypted1on1 v1.2.0 bringt Formular-Versionierung für unverfälschte Historien, eigene Korrekturen an Vereinbarungen und Kommentaren sowie flexible Terminverschiebungen.',
		date: '2026-08-25',
		formattedDate: '25. August 2026',
		readTime: '4 Min. Lesezeit',
		category: 'Release',
		author: {
			name: 'Aleksejs',
			role: 'Gründer & Entwickler'
		},
		tags: ['v1.2.0', 'Release', 'UX', 'Versionierung', 'Open Source'],
		coverImage: '/images/landing/methodology-leverage.jpg',
		leadHtml:
			'Zwei Wochen nach der Veröffentlichung von v1.0.0 folgt nun <strong>encrypted1on1 v1.2.0</strong>. Dieses Release widmet sich der täglichen Praxistauglichkeit und Datenintegrität: Es löst das architektonische Dilemma bei der Weiterentwicklung von Fragenkatalogen, ermöglicht nachträgliche Bearbeitungen eigener Beiträge und verfeinert zentrale UX-Details.',
		sections: [
			{
				heading: 'Das Problem historischer Treue in Gesprächsbögen',
				paragraphsHtml: [
					'In jedem Tool für 1:1-Gespräche entwickeln sich Fragebögen kontinuierlich weiter. Beispielsweise wollten wir in encrypted1on1 die Selbsteinschätzung des Wohlbefindens („Gefühle“) von 6 Grundwerten auf 12 differenzierte Emotionen erweitern (unter anderem mit <em>gelassen</em>, <em>dankbar</em>, <em>gestresst</em>, <em>stolz</em>, <em>gelangweilt</em> und <em>isoliert</em>).',
					'In einfachen Systemen wird schlicht das Fragen-Array im Code aktualisiert. Für eine Plattform, die vertrauliche Gesprächshistorien über Jahre archiviert, birgt das jedoch eine schleichende Verfälschung: Ändert man die Definition global, werden Monate alte Meetings rückwirkend gegen den neuen Katalog gerendert. Eine Checkbox, die ein Mitarbeiter damals gar nicht ankreuzen konnte, weil sie noch nicht existierte, wirkt plötzlich wie eine bewusst abgelehnte Option.',
					'Um die historische Wahrheit von Notizen zu schützen, führt v1.2.0 eine <strong>Formular-Versionierung</strong> (<code>formVersion</code>) ein. Jeder Bogen wird beim Erstellen unveränderlich mit seiner Version gestempelt. Ältere Gespräche verbleiben dauerhaft im Schema v1, während neue Termine automatisch mit dem erweiterten Schema v2 starten.'
				]
			},
			{
				heading: 'Eigene Korrekturen an Vereinbarungen und Kommentaren',
				paragraphsHtml: [
					'Ein produktives 1:1-Gespräch ist lebendig: Ideen werden verworfen, Beschlüsse formuliert und im schnellen Mitschreiben schleichen sich Tippfehler ein. Bislang konnte ein einmal gespeicherter Punkt weder editiert noch entfernt werden.',
					'Mit v1.2.0 können Teilnehmende ihre eigenen Einträge in den „Gesprächsergebnissen“ und ihre Kommentare im Fragebogen editieren oder löschen. Dies ist durch strikte Autoren-Berechtigungen geschützt: Jeder kann seine eigenen Formulierungen verfeinern, die Aussagen des Gegenübers bleiben jedoch unantastbar.'
				]
			},
			{
				heading: 'Termine vorab verschieben & sprechende Benutzernamen',
				paragraphsHtml: [
					'Zusätzlich bringt dieses Release handfeste Verbesserungen für die tägliche Nutzung:',
					'<ul><li><strong>Zukünftige Termine verschieben:</strong> Bisher war ein Rescheduling erst nach Überschreiten des Termins möglich. Ändern sich Kalenderpläne, lässt sich der anstehende Termin nun direkt auf der Anketa-Seite flexibel anpassen.</li><li><strong>Sprechende Benutzernamen:</strong> Reine E-Mail-Adressen und interne UUIDs wurden in Headern, Übersichten und Teilnehmerkarten durch lesbare Anzeigenamen ersetzt.</li><li><strong>Dark-Mode-Kontraste & automatisierter WCAG-Check:</strong> Badge-Farben wurden für optimale Lesbarkeit im Dunkelmodus kalibriert und in der CI-Pipeline durch automatisierte WCAG-Kontrastprüfungen abgesichert.</li><li><strong>Versionsanzeige im Footer:</strong> Administratoren können Version und Git-Commit-Hash über die Umgebungsvariable <code>SHOW_VERSION</code> im Footer einblenden.</li></ul>'
				]
			},
			{
				heading: 'Upgrade & Docker-Deployment',
				paragraphsHtml: [
					'Version v1.2.0 ist vollständig abwärtskompatibel und beinhaltet automatische Datenbankmigrationen für SQLite und MySQL. Das offizielle Docker-Image steht bereit:',
					'<pre><code>docker pull ghcr.io/aleksejs1/encrypted1on1:1.2.0</code></pre>',
					'Alle neuen Optionen und Verbesserungen können Sie ohne Registrierung in unserer Live-Demo unter <a href="https://demo.private1on1.eu" target="_blank" rel="noopener noreferrer">demo.private1on1.eu</a> testen.',
					'Das vollständige Changelog und der Quellcode sind auf <a href="https://github.com/aleksejs1/encrypted1on1/releases/tag/v1.2.0" target="_blank" rel="noopener noreferrer">GitHub</a> einsehbar.'
				]
			}
		]
	},
	{
		slug: '1-on-1-question-bank-templates',
		title: 'Mehr als „Wie läuft’s?“: Der interaktive Fragenkatalog & Vorlagen für 1:1-Gespräche',
		subtitle:
			'Eine kuratierte Sammlung tiefgehender Fragen in 7 Dimensionen — inklusive methodischer Hintergründe und einsatzbereiter Vorlagen.',
		description:
			'Warum 1:1-Gespräche so oft in reine Status-Updates abdriften und wie unser interaktiver Fragenkatalog Managern hilft, blinde Flecken und Überlastung frühzeitig aufzudecken.',
		date: '2026-09-02',
		formattedDate: '2. September 2026',
		readTime: '4 Min. Lesezeit',
		category: 'Leitfaden',
		author: {
			name: 'Aleksejs',
			role: 'Gründer & Entwickler'
		},
		tags: ['1:1-Gespräche', 'Fragenkatalog', 'Management', 'Leitfaden', 'Vorlagen'],
		coverImage: '/images/playbook/high-leverage-1-on-1.jpg',
		leadHtml:
			'Der teuerste Fehler im Engineering-Management besteht darin, ein 1:1-Gespräch als reines Status-Update zu missbrauchen. Ab heute stellen wir unseren interaktiven <a href="/de/playbook/questions/">1:1-Fragenkatalog</a> bereit: eine praxiserprobte Sammlung gezielter Fragen, die oberflächlichen Smalltalk überwinden und den Fokus auf das Wesentliche lenken.',
		sections: [
			{
				heading: 'Die Falle der Status-Updates',
				paragraphsHtml: [
					'Wir alle kennen 1:1-Gespräche, die im Sande verlaufen: „Wie läuft Projekt X?“ — „Gut, fast fertig.“ — „Irgendwelche Blocker?“ — „Nein, alles im Plan.“ Nach zehn Minuten gehen beiden die Themen aus. Das Meeting endet verfrüht mit einem vagen Pflichtgefühl, aber ohne wirklichen Erkenntnisgewinn oder Vertrauensaufbau.',
					'Reine Statusberichte gehören in Ticketsysteme, asynchrone Chatkanäle und kurze Dailies. Ein 1:1-Gespräch ist das wirksamste Führungsinstrument für Manager und Mitarbeitende — vorausgesetzt, man stellt Fragen, die hinter die Fassade blicken und systemische Hürden, emotionale Erschöpfung oder unausgesprochene Karriereziele sichtbar machen.'
				]
			},
			{
				heading: '7 Dimensionen wirkungsvoller Gespräche',
				paragraphsHtml: [
					'Statt einer unstrukturierten Liste beliebiger Eisbrecher ist unser <a href="/de/playbook/questions/">Fragenkatalog</a> in sieben strategische Kernbereiche unterteilt:',
					'<ul><li><strong>Beziehung & Energie:</strong> Psychologische Sicherheit aufbauen und den menschlichen Kontext verstehen, bevor technische Themen besprochen werden.</li><li><strong>Feedback an die Führungskraft:</strong> Eigene blinde Flecken erkennen, bevorzugte Coaching-Stile verstehen und Führungsfriktionen abbauen.</li><li><strong>Team & Kultur:</strong> Teamdynamik, Zusammenarbeit und das zwischenmenschliche Arbeitsklima beurteilen.</li><li><strong>Engpässe & Prozesse:</strong> Überflüssige Meetings, instabile Deployment-Pipelines und teamübergreifende Reibungsverluste beseitigen.</li><li><strong>Strategie & Sinn:</strong> Den Bezug zwischen täglichen Pull Requests, der übergeordneten Unternehmensvision und echtem Kundennutzen herstellen.</li><li><strong>Entwicklung & Ambitionen:</strong> Langfristige Karrierepfade, Kompetenzaufbau und nächste wirkungsvolle Herausforderungen planen.</li><li><strong>Kapazität & Wohlbefinden:</strong> Kognitive Überlastung, versteckten Stress und drohendes Burnout frühzeitig erkennen.</li></ul>'
				]
			},
			{
				heading: 'Das Prinzip „Warum diese Frage?“',
				paragraphsHtml: [
					'Eine Frage ist nur so wirkungsvoll wie die Absicht dahinter. In unserem Katalog verfügt jede einzelne Frage über eine präzise Erläuterung unter <strong>„Warum diese Frage?“</strong>.',
					'Dieser Leitfaden erklärt, welche psychologische Dynamik angesprochen wird, auf welche subtilen Nuancen in der Antwort zu achten ist und wie sich konstruktiv nachhaken lässt, ohne das Gegenüber in eine Rechtfertigungshaltung zu drängen.'
				]
			},
			{
				heading: 'Nutzung des Fragenkatalogs in encrypted1on1',
				paragraphsHtml: [
					'Der Fragenkatalog steht allen Interessierten unter <a href="/de/playbook/questions/">/de/playbook/questions/</a> kostenfrei zur Verfügung — inklusive schneller Volltextsuche, Kategoriefiltern und Zufallsauswahl.',
					'Zusätzlich lassen sich die Fragen direkt in <a href="https://demo.private1on1.eu" target="_blank" rel="noopener noreferrer">encrypted1on1</a>-Bögen vor dem nächsten Gesprächstermin übernehmen. Führungskraft und Mitarbeiter können sich asynchron vorbereiten, während unsere Ende-zu-Ende-Verschlüsselung (Zero-Knowledge) garantiert, dass keine Notiz jemals unverschlüsselt den geschützten Kreis verlässt.'
				]
			}
		]
	},
	{
		slug: '5-essential-books-for-high-leverage-1-on-1s',
		title: 'Das 1:1-Bücherregal: 5 essenzielle Werke für erfolgreiche Führungskräfte',
		subtitle:
			'Jahrzehnte an Führungserfahrung von Andy Grove, Ben Horowitz, Julie Zhuo, Camille Fournier und Kim Scott, destilliert in konkrete 1:1-Praxis.',
		description:
			'Entdecken Sie unser interaktives 1:1-Bücherregal: fünf wegweisende Managementbücher, deren Kernideen für 1:1-Gespräche, Fragenkataloge und passende Vorlagen.',
		date: '2026-09-10',
		formattedDate: '10. September 2026',
		readTime: '5 Min. Lesezeit',
		category: 'Leitfaden',
		author: {
			name: 'Aleksejs',
			role: 'Gründer & Entwickler'
		},
		tags: ['Bücherregal', '1:1-Gespräche', 'Management', 'Führung', 'Bücher'],
		coverImage: '/images/playbook/manager-playbook.jpg',
		leadHtml:
			'Gute Führung entsteht selten im luftleeren Raum. Die Prinzipien, die 1:1-Gespräche zu wirkungsvollen Führungsinstrumenten machen — psychologische Sicherheit, Mitarbeiter-geführte Agenden, frühes Aufdecken systemischer Reibungsverluste und radikale Offenheit —, wurden über Jahrzehnte hinweg in der Praxis erprobt. Heute präsentieren wir das interaktive <a href="/de/playbook/books/">1:1-Bücherregal</a>.',
		sections: [
			{
				heading: 'Warum ein dediziertes 1:1-Bücherregal?',
				paragraphsHtml: [
					'Die meisten Managementbücher umfassen hunderte Seiten zu Konzernstrategie, Recruiting-Funnels und Firmenpolitik. Fragt man erfahrene Führungskräfte jedoch nach der Praxis mit dem höchsten täglichen Hebel (Leverage), verweisen fast alle ausnahmslos auf die Kapitel über 1:1-Gespräche.',
					'Um vielbeschäftigten Tech-Leadern und Engineering-Managern diesen Wissensschatz ohne Hunderte Seiten theoretischen Ballasts zugänglich zu machen, haben wir das interaktive <a href="/de/playbook/books/">1:1-Bücherregal</a> entwickelt. Wir haben fünf Standardwerke auf ihren Kern reduziert: ihre Leitphilosophie, operative Grundsätze, konkrete Fragen und direkte Verknüpfungen mit den Vorlagen unseres Leitfadens.'
				]
			},
			{
				heading: '5 Standardwerke der Führungskultur',
				paragraphsHtml: [
					'Das Bücherregal vereint fünf wegweisende Werke der modernen Technologiebranche:',
					'<ul><li><strong>„High Output Management“ von Andy Grove (1983):</strong> Der zeitlose Klassiker des Silicon Valley. Grove begründete die Formel, dass die Leistung einer Führungskraft der Gesamtleistung ihres Teams entspricht und dass 90 Minuten 1:1-Gespräch die Arbeitsqualität eines Mitarbeiters für 80 Stunden steigern (>50-facher Hebel). Sein zentraler Leitsatz: <em>Das 1:1 ist das Meeting des Mitarbeiters</em>.</li><li><strong>„The Hard Thing About Hard Things“ von Ben Horowitz (2014):</strong> Der Maßstab für Krisenmanagement. Horowitz beschreibt das 1:1 als das unverzichtbare Sicherheitsventil der Organisation: Gute Nachrichten verbreiten sich rasant, schlechte Nachrichten versanden; regelmäßige Gespräche decken Schwelbrände auf, bevor sie zu Bränden oder plötzlichen Kündigungen führen.</li><li><strong>„The Making of a Manager“ von Julie Zhuo (2019):</strong> Das moderne Fundament für empathische Führung. Zhuo gliedert das 1:1 in vier Kernbereiche: Aufbau gegenseitigen Vertrauens, Klären echter Prioritäten, Bewältigen komplexer Hürden und Schärfen langfristiger Entwicklungsziele.</li><li><strong>„The Manager’s Path“ von Camille Fournier (2017):</strong> Die Orientierungshilfe für technische Karrierepfade. Fournier behandelt die Besonderheiten im Engineering: Coaching von Juniors, Begleitung von Staff-Engineers und technischer Schuldenabbau. Ihre Warnung: Sagt ein Entwickler <em>„Ich habe nichts zu besprechen“</em>, ist das kein Zeichen von Harmonie, sondern ein Alarmzeichen für innere Kündigung.</li><li><strong>„Radical Candor“ von Kim Scott (2017):</strong> Menschliche Fürsorge kombiniert mit direkter Herausforderung. Scott zeigt, dass Vertrauen im 1:1 geschmiedet wird, und formuliert die goldene Regel: Bevor man Kritik übt, bittet man die Mitarbeitenden stets um schonungsloses Feedback zur eigenen Führungsarbeit.</li></ul>'
				]
			},
			{
				heading: 'Von der Idee zur einsatzbereiten Agenda',
				paragraphsHtml: [
					'Führungstheorie nützt wenig, wenn sie nicht im Alltag ankommt. Für jedes Werk bietet das <a href="/de/playbook/books/">Bücherregal</a> praxiserprobte Fragen und passende Vorlagen aus unserem Leitfaden:',
					'<ul><li>Groves Hebel-Methodik bildet das Fundament für unser <a href="/de/playbook/high-leverage-1-on-1/">Manifest für wirkungsvolle 1:1-Gespräche</a>.</li><li>Horowitz’ Fokus auf Transparenz spiegelt sich in <a href="/de/playbook/skip-level/">Skip-Level 1:1: Team-Gesundheitscheck</a> wider.</li><li>Zhuos Vertrauensansatz leitet die Vorlage <a href="/de/playbook/first-1-on-1/">Das erste 1:1-Gespräch: Erwartungen & Vertrauen</a>.</li><li>Fourniers Karriere-Modell strukturiert das <a href="/de/playbook/career-growth/">Quartalsgespräch zu Karriere & Weiterentwicklung</a>.</li><li>Scotts Burnout-Früherkennung treibt den Leitfaden <a href="/de/playbook/burnout-detection/">Überlastungs- und Burnout-Triage</a> an.</li></ul>'
				]
			},
			{
				heading: 'Praktische Umsetzung mit encrypted1on1',
				paragraphsHtml: [
					'Die größte Hürde für gewinnbringende 1:1-Gespräche ist selten mangelnder Wille, sondern Zeitnot und das Fehlen eines geschützten, gemeinsamen Vorbereitungsraums. Ohne asynchrone Notizen verflachen Meetings schnell zur reinen Statusabfrage.',
					'Mit <a href="https://demo.private1on1.eu" target="_blank" rel="noopener noreferrer">encrypted1on1</a> können Teams die bewährten Fragen dieser Management-Klassiker direkt in ihre Bögen übernehmen, Gedanken vorab in Ruhe formulieren und sich darauf verlassen, dass alle vertraulichen Notizen durch echte Ende-zu-Ende-Verschlüsselung geschützt sind.',
					'Entdecken Sie alle fünf Bücher und kopieren Sie einsatzbereite Fragen unter <a href="/de/playbook/books/">/de/playbook/books/</a>.'
				]
			}
		]
	},
	{
		slug: 'meeting-templates-playbook-and-form-templates-preview',
		title: 'Das 1:1-Gesprächs-Playbook: Praxiserprobte Vorlagen & Vorschau auf Formular-Vorlagen',
		subtitle:
			'Eine strukturierte Sammlung zielgerichteter Agenden für jede Teamphase — inklusive eines Ausblicks auf die kommende Formular-Vorlagenunterstützung in encrypted1on1.',
		description:
			'Vom Onboarding über Burnout-Früherkennung bis zum Karriere-Check: Entdecken Sie unsere interaktiven Playbook-Vorlagen und erfahren Sie mehr über die geplanten Formular-Vorlagen.',
		date: '2026-09-16',
		formattedDate: '16. September 2026',
		readTime: '5 Min. Lesezeit',
		category: 'Leitfaden',
		author: {
			name: 'Aleksejs',
			role: 'Gründer & Entwickler'
		},
		tags: ['Leitfaden', 'Vorlagen', '1:1-Gespräche', 'Roadmap', 'Produktupdate'],
		coverImage: '/images/playbook/bi-weekly-pulse.jpg',
		leadHtml:
			'Kein 1:1-Gespräch gleicht dem anderen. Das Kennenlernen in den ersten Wochen verlangt eine völlig andere Vorbereitung als ein Quartalsdialog über berufliche Perspektiven mit einem Senior Engineer oder die akute Triage bei drohender Überlastung. Heute stellen wir unseren <a href="/de/playbook/">Leitfaden für 1:1-Vorlagen</a> vor — und geben einen spannenden Ausblick auf eine bevorstehende Funktion in encrypted1on1.',
		sections: [
			{
				heading: 'Warum Einheitsformate im 1:1 scheitern',
				paragraphsHtml: [
					'Der häufigste Fehler im modernen Tech-Management ist der Rückgriff auf ein immer gleiches, unstrukturiertes Gesprächsmuster. Ohne klaren Fokus verflachen Meetings schnell zur reinen Statusabfrage: <em>„Woran arbeitest du gerade? Gibt es Blocker? Gut, bis nächste Woche.“</em>',
					'Erfolgreiche Führungskräfte wissen, dass Mitarbeitende unterschiedliche Phasen durchlaufen. Ein wirkungsvolles 1:1 passt seine Agenda flexibel dem aktuellen Kontext an — sei es der Aufbau psychologischer Sicherheit im Onboarding, das Ausräumen von Hindernissen im Alltag, die langfristige Karriereplanung oder die rechtzeitige Entlastung bei Überlastung.'
				]
			},
			{
				heading: '6 praxiserprobte Vorlagen im Leitfaden',
				paragraphsHtml: [
					'Unser <a href="/de/playbook/">Leitfaden</a> bietet durchdachte, einsatzbereite Agenden für sechs zentrale Szenarien:',
					'<ul><li><strong><a href="/de/playbook/high-leverage-1-on-1/">Manifest für wirkungsvolle 1:1-Gespräche:</a></strong> Das Kernframework nach Andy Groves Führungsmathematik. Eine 4-Säulen-Agenda aus emotionaler Energie, Beseitigung von Friktionen, strategischem Fokus und gegenseitigem Feedback.</li><li><strong><a href="/de/playbook/first-1-on-1/">Das erste 1:1-Gespräch: Erwartungen & Vertrauen:</a></strong> Unverzichtbar bei Neueinstellungen und Umstrukturierungen. Schafft psychologische Sicherheit, klärt Kommunikationspräferenzen und setzt gemeinsame Spielregeln für die ersten 30 Tage.</li><li><strong><a href="/de/playbook/bi-weekly-pulse/">Zweiwöchentlicher Team-Puls:</a></strong> Der bewährte Rhythmus für High-Performance-Teams. Hält das Momentum aufrecht, erkennt Blocker frühzeitig und verfolgt Vereinbarungen verlässlich nach.</li><li><strong><a href="/de/playbook/career-growth/">Quartalsgespräch zu Karriere & Weiterentwicklung:</a></strong> Ein Blick in die Zukunft fernab des täglichen Sprint-Drucks. Beleuchtet Kompetenzaufbau, die technische Fachkarriere und neue Wachstumsherausforderungen.</li><li><strong><a href="/de/playbook/burnout-detection/">Überlastungs- und Burnout-Triage:</a></strong> Ein empathischer Leitfaden, um kognitive Erschöpfung frühzeitig zu erkennen und Aufgaben nachhaltig zu priorisieren, bevor jemand an seine Belastungsgrenze stößt.</li><li><strong><a href="/de/playbook/skip-level/">Skip-Level 1:1: Team-Gesundheitscheck:</a></strong> Für Directors, VPs und Gründer, die ein ungefiltertes Stimmungsbild zu Kultur und Prozessen direkt von den Teams an vorderster Front einholen möchten.</li></ul>'
				]
			},
			{
				heading: 'Konzipiert für die Praxis: Timing & 1-Klick-Export',
				paragraphsHtml: [
					'Jede Vorlage im Playbook ist sofort einsatzbereit:',
					'<ul><li><strong>Feste Zeitblöcke:</strong> Sinnvolle Minutenempfehlungen, damit alle Kernfragen ohne Hetze Raum finden.</li><li><strong>Präzise Impulsfragen:</strong> Fragen, die ehrliche Reflexion anregen, ohne Rechtfertigungsdruck zu erzeugen.</li><li><strong>Vorbereitung & Antipatterns:</strong> Konkrete Hinweise für Führungskraft und Mitarbeiter sowie typische Fehler, die es zu vermeiden gilt.</li><li><strong>Schaltfläche „Agenda kopieren“:</strong> Mit einem Klick die gesamte Markdown-Agenda in die Kalendereinladung oder private Notizen übernehmen.</li></ul>'
				]
			},
			{
				heading: 'Vorschau: Demnächst native Formular-Vorlagen in encrypted1on1!',
				paragraphsHtml: [
					'Die Agenden unseres <a href="/de/playbook/">Leitfadens</a> lassen sich schon heute in jedem Kalender nutzen. Wir sind jedoch überzeugt, dass maximale Wirkung entsteht, wenn die Methodik nahtlos in die vertrauliche Gesprächsumgebung integriert ist.',
					'Aktuell nutzt encrypted1on1 einen bewährten, versionierten Fragebogen für Befindlichkeit, Prioritäten und Vereinbarungen. Unterschiedliche Meetings erfordern jedoch unterschiedliche Fragen.',
					'Wir freuen uns ankündigen zu können, dass wir mit Hochdruck an der <strong>nativen Unterstützung von Formular-Vorlagen</strong> in encrypted1on1 arbeiten! In Kürze können Sie bei der Terminerstellung passende Vorlagen für die Szenarien unseres Leitfadens auswählen (Onboarding, Quartals-Review, Puls-Check) oder eigene Vorlagen für Ihre Organisation anlegen — stets geschützt durch kompromisslose Zero-Knowledge-Ende-zu-Ende-Verschlüsselung.',
					'Entdecken Sie alle Vorlagen unter <a href="/de/playbook/">/de/playbook/</a> und freuen Sie sich auf die kommenden Releases!'
				]
			}
		]
	},
	{
		slug: 'v1-3-0-release',
		title: 'encrypted1on1 v1.3.0: Integrierte Formular-Vorlagen und einmalige Gespräche',
		subtitle:
			'Spezialisierte Fragebögen für Onboarding, Karriereentwicklung und Belastungs-Check-ins, kombiniert mit verzweigungsfreien Einmal-Gesprächen.',
		description:
			'encrypted1on1 v1.3.0 führt native Gesprächsvorlagen (Onboarding, Karriere, Belastung), verzweigungsfreie Einmal-Gespräche und Markdown-Formatierung für Textantworten ein.',
		date: '2026-09-24',
		formattedDate: '24. September 2026',
		readTime: '4 Min. Lesezeit',
		category: 'Release',
		author: {
			name: 'Aleksejs',
			role: 'Gründer & Entwickler'
		},
		tags: ['v1.3.0', 'Release', 'Vorlagen', '1:1-Gespräche', 'Open Source'],
		coverImage: '/images/landing/privacy-infrastructure.jpg',
		leadHtml:
			'Nur einen Monat nach der Einführung der Formular-Versionierung in v1.2.0 veröffentlichen wir <strong>encrypted1on1 v1.3.0</strong>. Dieses wichtige Release liefert eine der am häufigsten nachgefragten Funktionen: <strong>integrierte Vorlagen für Gesprächsbögen</strong>, ergänzt durch die saubere Handhabung von <strong>Einmal-Gesprächen</strong> und Markdown-Unterstützung in Freitextfeldern.',
		sections: [
			{
				heading: '4 spezialisierte Vorlagen für Gesprächsbögen',
				paragraphsHtml: [
					'Ein einzelner Fragenkatalog kann unmöglich allen Führungssituationen gerecht werden. In v1.3.0 können Sie beim Erstellen einer Anketa aus vier maßgeschneiderten Gesprächsformaten wählen:',
					'<ul><li><strong>Reguläres 1:1:</strong> Das bewährte Standardformat für wiederkehrende Abstimmungen — Stimmungs- und Energie-Check, Erfolge, Gesprächsthemen und gemeinsame Vereinbarungen.</li><li><strong>Onboarding (Erstes 1:1):</strong> Entwickelt für neue Mitarbeitende und Teamwechsel. Konzentriert sich auf psychologische Sicherheit, Kommunikationsgewohnheiten, wechselseitige Erwartungen und den unvoreingenommenen Blick auf interne Prozesse.</li><li><strong>Karriere & Entwicklung (Career & Growth):</strong> Für vierteljährliche Orientierungsgespräche. Beinhaltet eine Energie-Retrospektive bisheriger Projekte, eine 3-Wege-Kalibrierung der Zielrichtung (Spezialisierung, Führung oder Rollenverbreiterung), einen 90-Tage-Aktionsplan und klare Förderzusagen der Führungskraft.</li><li><strong>Support & Belastungs-Check-in:</strong> Ausgelegt für Phasen hoher Belastung oder Burnout-Risiko. Als partnerschaftliche Bestandsaufnahme konzipiert, hilft dieser Bogen, Energieverluste aufzudecken, gesunde Grenzen zu setzen und sofortige Entlastungsmaßnahmen zu vereinbaren.</li></ul>'
				]
			},
			{
				heading: 'Intelligente Zyklus-Übergänge: Vorlagen bleiben nicht hängen',
				paragraphsHtml: [
					'Ein verbreitetes Manko vieler Vorlagensysteme ist, dass die einmalige Auswahl eines Karrierebogens versehentlich alle künftigen Meetings in Karrieregespräche verwandelt. In v1.3.0 ist dieses Verhalten architektonisch gelöst.',
					'Sobald ein Bogen mit Spezialvorlage (wie <code>career_growth</code> oder <code>support_checkin</code>) archiviert wird, wechselt der automatisch neu angelegte Folgetermin verlässlich zurück zum Typ <code>regular</code>. Das Sondergespräch findet genau dann statt, wenn es ansteht, und der zweiwöchentliche Arbeitsrhythmus läuft ohne manuelle Korrekturen weiter.',
					'Zusätzlich sind offene Termine mit Sonderbögen in der Übersicht mit gut sichtbaren Badges gekennzeichnet, damit beide Seiten sofort wissen, welcher Austausch ansteht.'
				]
			},
			{
				heading: 'Einmal-Gespräche ohne Verzweigung der Historie',
				paragraphsHtml: [
					'Bislang führte das Erstellen eines zweiten Bogens neben einem noch offenen Termin zu einer Verzweigung der Historie — mit duplizierten Vereinbarungsketten und parallelen Terminen.',
					'v1.3.0 löst dies durch das Konzept der <strong>Einmal-Anketa</strong> (<code>oneOff: true</code>). Wird ein zusätzlicher Bogen manuell neben einem offenen Termin erstellt, gilt er als isoliertes Einzelgespräch: Er übernimmt keine Altdaten und erzeugt beim Archivieren keinen Folgetermin. Die reguläre Gesprächskette bleibt vollkommen unberührt.'
				]
			},
			{
				heading: 'Markdown-Formatierung und Echtzeit-Synchronisation',
				paragraphsHtml: [
					'Dieses Release bündelt weitere spürbare Bedienverbesserungen:',
					'<ul><li><strong>Markdown in Textfeldern:</strong> Freitextantworten unterstützen nun Markdown — Aufzählungslisten, Fettschrift und Codeblöcke sorgen für übersichtliche Notizen.</li><li><strong>Live-Updates im Meeting:</strong> Ergänzt Ihr Gegenüber während des Gesprächs eine Notiz oder einen Beschluss, aktualisiert sich die Ansicht sofort ohne Neuladen der Seite.</li><li><strong>Vollständige Lokalisierung:</strong> Sämtliche neuen Vorlagen und Hinweistexte stehen auf Deutsch, Englisch, Russisch, Lettisch, Spanisch und Französisch bereit.</li></ul>'
				]
			},
			{
				heading: 'Upgrade & Docker-Deployment',
				paragraphsHtml: [
					'Version v1.3.0 ist vollständig abwärtskompatibel und führt Datenbankmigrationen für SQLite und MySQL automatisch aus. Das Docker-Image steht bereit:',
					'<pre><code>docker pull ghcr.io/aleksejs1/encrypted1on1:1.3.0</code></pre>',
					'Die neuen Vorlagen und Live-Ansichten können Sie ohne Anmeldung direkt in unserer Demo unter <a href="https://demo.private1on1.eu" target="_blank" rel="noopener noreferrer">demo.private1on1.eu</a> testen.',
					'Der Quellcode und die Release-Details sind auf <a href="https://github.com/aleksejs1/encrypted1on1/releases/tag/v1.3.0" target="_blank" rel="noopener noreferrer">GitHub</a> veröffentlicht.'
				]
			}
		]
	}
];
