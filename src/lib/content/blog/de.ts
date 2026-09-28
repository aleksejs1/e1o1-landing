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
	}
];
