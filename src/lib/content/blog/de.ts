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
	}
];
