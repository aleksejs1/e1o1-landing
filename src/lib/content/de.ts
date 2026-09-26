import type { LandingContent } from './types';

export const de: LandingContent = {
	meta: {
		title: 'encrypted1on1 — Private 1:1-Gespräche. Nachweisbar privat.',
		description:
			'Eine quelloffene, selbstgehostete, Ende-zu-Ende-verschlüsselte Plattform für strukturierte 1:1-Gespräche zwischen Manager und Mitarbeiter. Nicht einmal die Betreiber des Servers können lesen, was dort geschrieben steht.'
	},

	skipToContent: 'Zum Inhalt springen',

	hero: {
		headline: 'Private 1:1-Gespräche. Nachweisbar privat.',
		subhead:
			'encrypted1on1 ist eine quelloffene, selbstgehostete Plattform für strukturierte 1:1-Gespräche zwischen Manager und Mitarbeiter — Ende-zu-Ende-verschlüsselt, sodass nicht einmal die Betreiber des Servers lesen können, was dort geschrieben steht. Kein Versprechen in einer Datenschutzrichtlinie. Eine mathematische Tatsache.',
		ctaTryDemo: 'Live-Demo ausprobieren',
		ctaGetStarted: 'Loslegen',
		ctaGithub: 'Auf GitHub ansehen',
		ctaDocs: 'Dokumentation lesen',
		trustBadges: [
			'Open Source (AGPLv3)',
			'Selbstgehostet',
			'Ende-zu-Ende-verschlüsselt',
			'Kein Vendor-Lock-in'
		],
		highlights: [
			{
				icon: '🔒',
				title: 'Zero-Knowledge-Verschlüsselung',
				body: 'Inhalte werden direkt in Ihrem Browser verschlüsselt. Nicht einmal ein Administrator mit vollem Serverzugriff kann sie lesen.'
			},
			{
				icon: '🎯',
				title: 'Ziele, die weitergetragen werden',
				body: 'Einmal festgelegt, automatisch über jeden folgenden Zyklus verfolgt — zwischen den Terminen geht nichts verloren.'
			},
			{
				icon: '📊',
				title: 'Beurteilungsbereit mit einem Klick',
				body: 'Ein Beurteilungsbericht für jeden beliebigen Zeitraum, clientseitig erstellt aus Monaten von 1:1-Gesprächen.'
			},
			{
				icon: '🚀',
				title: 'Selbstgehostet, für immer kostenlos',
				body: 'Ein einziger Docker-Container. Keine Kosten pro Nutzer, kein Vendor-Lock-in, in Minuten einsatzbereit.'
			}
		],
		screenshotAlt:
			'Ein echtes 1:1-Gespräch in encrypted1on1: Stimmung und Gefühle beantwortet, ein offener Kommentar-Thread, und ein Vorhängeschloss-Symbol, das diese Seite als Ende-zu-Ende-verschlüsselt kennzeichnet.'
	},

	origin: {
		heading: 'Warum wir das gebaut haben',
		paragraphsHtml: [
			'Wir wollten kein weiteres SaaS-Tool bauen. Wir haben als Kunde angefangen.',
			'Unsere Organisation hat ihren 1:1-Prozess über ein Tool eines Drittanbieters abgewickelt — eines von vielen gut durchdachten, gut gemeinten Produkten in diesem Bereich. Es hat seinen Zweck erfüllt. Dann, wie es bei vielen kleinen Anbietern irgendwann passiert, wurde die Einstellung des Betriebs angekündigt.',
			'Das ist normal. Startups scheiden aus dem Markt aus. Was nicht normal war, war die Erkenntnis, die uns dabei kam: Wir hatten uns nie wirklich gefragt, was die Einstellung eines Anbieters für den Inhalt eines 1:1-Gesprächs <em>bedeutet</em>. Leistungsbedenken, die jemand vertraulich angesprochen hatte. Private Notizen eines Managers zur Karriereentwicklung eines direkt unterstellten Mitarbeiters. Gehaltsgespräche. Persönliche Umstände, die ein Mitarbeiter offengelegt hatte, in der Erwartung, dass sie zwischen zwei Personen bleiben.',
			'Nichts davon soll jemals für jemanden außerhalb der beiden Beteiligten sichtbar sein — nicht für den Vorgesetzten des Managers, nicht standardmäßig für die Personalabteilung, nicht für die IT, und, wie uns mit einigem Unbehagen klar wurde, eigentlich auch nicht für <em>den Anbieter selbst</em>, obwohl der Anbieter technisch gesehen jederzeit hätte mitlesen können. Eine Betriebseinstellung ist genau der Moment, in dem die Datenpraktiken eines Unternehmens am härtesten auf die Probe gestellt werden: Support-Mitarbeiter, die Exporte durchführen, ein Erwerber, der eine technische Due-Diligence-Prüfung vornimmt, ein Rumpfteam, das unter Zeitdruck alles abwickelt. Wir hatten keinen Grund zur Annahme, dass mit unseren Daten konkret etwas Schlimmes passieren würde. Aber wir hatten auch keine Möglichkeit, <em>sicher zu wissen</em>, dass es nicht passieren würde — denn das gesamte Modell beruhte auf „vertraut uns“, und „uns“ war ein Unternehmen, das gerade sein Geschäft aufgab.',
			'Das ist die Lücke, die wir richtig schließen wollten — nicht nur für unsere eigene Organisation, sondern als etwas, das jeder in derselben Lage selbst überprüfen kann, statt es einfach zu glauben. Wenn eine 1:1-Plattform einige der sensibelsten Gespräche eines Unternehmens speichert, ist „wir versprechen, nicht mitzulesen“ keine ausreichend starke Garantie. Die einzige ausreichend starke Garantie ist eine, bei der Mitlesen <em>gar nicht möglich</em> ist — bei der der Betreiber, das IT-Team, das Unternehmen, das die Plattform hostet, und selbst eine vollständige Kompromittierung des Servers nichts als Chiffretext erhalten. Das ist keine Richtlinie. Das ist Ende-zu-Ende-Verschlüsselung, richtig umgesetzt, mit offenem Quellcode, damit jeder überprüfen kann, dass diese Behauptung tatsächlich zutrifft.',
			'encrypted1on1 ist das Ergebnis davon.'
		],
		illustrationAlt:
			'Vertrauliches 1:1-Gespräch unter einem schützenden Bogen mit Symbolen für Ende-zu-Ende-Verschlüsselung'
	},

	methodology: {
		heading: 'Der wirkungsvollste Termin im Kalender einer Führungskraft',
		intro:
			'Regelmäßige 1:1-Gespräche sind kein nettes Extra im Führungsalltag — sie sind einer der am besten belegten Hebel, die eine Organisation für Mitarbeiterbindung, Engagement und das frühzeitige Erkennen von Problemen hat.',
		points: [
			{
				html: '<strong>Andy Grove</strong> argumentierte in <em>High Output Management</em> (1983) — dem Buch, das die moderne Führungspraxis in der Tech-Branche im Grunde geprägt hat —, dass die 1:1-Gespräche eines Managers zu den wirkungsvollsten Tätigkeiten gehören, die ihm zur Verfügung stehen, gerade weil er dort die Informationen erhält, die er braucht, um zu handeln, bevor ein Problem irgendwo anders sichtbar wird.'
			},
			{
				html: '<strong>Ben Horowitz</strong> baut in <em>The Hard Thing About Hard Things</em> direkt auf Groves Rahmenwerk auf und kommt von der anderen Seite zum selben Punkt: Ein 1:1-Gespräch ist <em>das Gespräch des Mitarbeiters</em>, nicht der Statusbericht-Slot des Managers — sein gesamter Wert liegt darin, das ans Licht zu bringen, was sonst nicht gesagt würde.'
			},
			{
				html: 'Googles <strong>Project Oxygen</strong> — das interne Forschungsprojekt, das über 10.000 Beobachtungen anhand von mehr als 100 Variablen analysierte, um herauszufinden, was großartige Manager tatsächlich von durchschnittlichen unterscheidet — fand heraus, dass regelmäßige 1:1-Gespräche, gut geführt (Mitarbeiter setzt die Agenda, Fokus auf Entwicklung und Wohlbefinden statt nur auf Aufgabenstatus), eines der am stärksten identifizierten Verhaltensmuster war. Fachliche Expertise landete bemerkenswerterweise auf dem letzten Platz der acht identifizierten Verhaltensweisen. (<a href="https://rework.withgoogle.com/intl/en/guides/following-the-data-the-research-behind-great-managers" target="_blank" rel="noopener noreferrer">Google re:Work</a>)'
			},
			{
				html: 'Die Forschung von <strong>Gallup</strong> liefert das schärfste Geschäftsargument: Mitarbeiter, deren Manager regelmäßige Gespräche mit ihnen führen, sind <strong>fast dreimal so wahrscheinlich engagiert</strong> wie Mitarbeiter, deren Manager das nicht tun. Und Manager sind für <strong>70 % der Varianz</strong> im teambezogenen Engagement verantwortlich — das heißt, die Qualität der 1:1-Beziehung ist kein weicher Faktor, sondern der am stärksten beeinflussbare Treiber für Engagement, den eine Organisation hat. (<a href="https://www.gallup.com/workplace/236570/employees-lot-managers.aspx" target="_blank" rel="noopener noreferrer">Gallup</a>, <a href="https://news.gallup.com/businessjournal/182792/managers-account-variance-employee-engagement.aspx" target="_blank" rel="noopener noreferrer">Gallup Business Journal</a>)'
			},
			{
				html: '<strong>Julie Zhuo</strong> (<em>The Making of a Manager</em>) und <strong>Camille Fournier</strong> (<em>The Manager’s Path</em>) — zwei der meistzitierten modernen Führungsbücher, beide von ehemaligen Leiterinnen von Engineering-Organisationen (Facebook, Rent the Runway) verfasst — kommen unabhängig voneinander zum selben Schluss: Das 1:1-Gespräch ist der zentrale Mechanismus, über den ein Manager seine Arbeit tatsächlich ausübt, kein Termin, der mit der „eigentlichen Arbeit“ konkurriert.'
			}
		],
		closingHtml:
			'Das Muster, das sich durch all diese Forschung zieht, ist konsistent: Der Wert liegt nicht darin, <em>Gespräche zu führen</em>. Er liegt darin, sie <strong>regelmäßig, strukturiert und mit Kontinuität</strong> zu führen — nachzuverfolgen, was beim letzten Mal besprochen wurde, welche Zusagen gemacht wurden, welche Ziele noch offen sind. Genau diese Kontinuität geht verloren, sobald 1:1-Gespräche in verstreuten Dokumenten, im Gedächtnis oder in dem Tool leben, das diese Woche gerade offen war.',
		illustrationAlt: 'Mitarbeiter und Führungskraft auf dem Weg zu Zielen mit balanciertem Hebel'
	},

	comparison: {
		heading: 'Ein gemeinsames Dokument ist kein System',
		intro:
			'Den meisten Teams fehlt es nicht an einem Ort, um Dinge festzuhalten. Google Docs, Notion, ein gemeinsamer Ordner — jedes davon kann technisch gesehen 1:1-Notizen enthalten. Genau das ist das Problem: Sie enthalten Notizen, keinen Prozess.',
		points: [
			{
				title: 'Keine Struktur.',
				body: 'Ein leeres Dokument weiß nicht, was ein gutes 1:1-Gespräch abdecken sollte. Stimmung, Arbeitslast, Erfolge, Blockaden, Feedback — jeder Manager erfindet das entweder von Grund auf neu oder lässt, häufiger, unter Zeitdruck die Hälfte davon weg.'
			},
			{
				title: 'Keine Kontinuität.',
				body: 'Vor drei Monaten festgelegte Ziele leben in einem Dokument von vor drei Monaten — sofern jemand es überhaupt wiederfindet. Es gibt keine automatische Verknüpfung zwischen den Zusagen dieses Zyklus und der Nachverfolgung im nächsten.'
			},
			{
				title: 'Keine Taktung.',
				body: 'Nichts erinnert jemanden daran, dass ein 1:1-Gespräch bevorsteht, oder dass eine Seite ihren Teil noch nicht ausgefüllt hat. Der Prozess läuft ausschließlich über individuelle Disziplin — und genau deshalb hört er still und leise auf zu funktionieren, sobald jemand viel zu tun hat.'
			},
			{
				title: 'Keine strukturierte Grundlage für Beurteilungen.',
				body: 'Wenn die Beurteilungssaison kommt, ist „sechs Monate 1:1-Dokumente noch einmal durchlesen“ in den meisten Unternehmen der tatsächliche Arbeitsablauf. Es gibt keine aggregierte Übersicht über Erfolge, Entwicklung oder Zielfortschritt über einen gesamten Beurteilungszeitraum.'
			},
			{
				title: 'Kein echtes Datenschutzmodell.',
				body: 'Die Zugriffskontrolle eines gemeinsamen Dokuments ist das, was die Freigabeeinstellungen der Plattform erlauben — und es ist für den Plattformbetreiber grundsätzlich lesbar. Das ist eine andere, schwächere Garantie als Ende-zu-Ende-Verschlüsselung, unabhängig davon, wie die Freigabeberechtigungen konfiguriert sind.'
			}
		],
		closingHtml:
			'encrypted1on1 ersetzt „ein Dokument, wenn man daran denkt“ durch ein System: einen festen, durchdachten Fragenkatalog für beide Seiten, automatische Periodizität und Erinnerungs-E-Mails, Ziele, die über Zyklen hinweg bestehen bleiben und mit ihrer vollständigen Fortschrittshistorie weitergetragen werden, sowie einen Beurteilungsbericht, der Erfolge und Zielfortschritt über jeden beliebigen Zeitraum aggregiert — clientseitig erstellt, aus Daten, die der Server von Anfang an gar nicht lesen konnte.'
	},

	privacy: {
		heading: 'Ihre Daten. Ihre Infrastruktur. Nachweisbar privat.',
		intro:
			'Für einen Unternehmenskäufer ist „vertrauen Sie uns die sensibelsten Gespräche Ihrer Mitarbeiter an“ eine schwer verkäufliche Aussage von jedem Anbieter — und das sollte sie auch sein. encrypted1on1 ist so gebaut, dass dieser Satz nie das Verkaufsargument sein muss.',
		points: [
			{
				title: 'Selbstgehostet.',
				body: 'Die gesamte Plattform läuft auf Infrastruktur, die Ihr Unternehmen kontrolliert — Ihre Server, Ihr Cloud-Konto, Ihre Backup-Richtlinie. Keine Daten müssen jemals die Grenzen Ihrer Organisation verlassen, es sei denn, Sie entscheiden sich für die Cloud-Option.'
			},
			{
				title: 'Open Source (AGPLv3).',
				body: 'Jede Zeile Code — einschließlich der Kryptografie — ist öffentlich und überprüfbar. Sie, oder ein unabhängiges Sicherheitsteam, das Sie beauftragen, können die Datenschutzaussagen direkt nachprüfen, statt einem Anbieter einfach zu glauben. Das ist ein grundlegend anderes Vertrauensmodell als ein Closed-Source-SaaS-Produkt, das Sie bittet, seinem ungelesenen Quellcode und seinen Nutzungsbedingungen zu vertrauen.'
			},
			{
				title: 'Konkret: Ende-zu-Ende-verschlüsselt.',
				body: '1:1-Inhalte — Antworten, Gefühle, Feedback, Kommentare, Meeting-Ergebnisse, Zielfortschritt — werden im Browser verschlüsselt, bevor sie überhaupt den Server erreichen, mit Schlüsseln, die aus dem eigenen Passwort jedes Nutzers abgeleitet und niemals übertragen werden. Der Server speichert Chiffretext. Er kann ihn nicht entschlüsseln — nicht der Betreiber, nicht die IT, nicht wir, nicht ein Angreifer, der die Datenbank kompromittiert. Die eine bewusste, eng gefasste Ausnahme: Titel, Beschreibung und Status eines Ziels werden im Klartext gespeichert, gezielt damit Ziele eine unternehmensweite Abstimmung und einfache Berichte unterstützen können — alles andere in einem 1:1-Gespräch bleibt ausnahmslos privat für die beiden Beteiligten.'
			}
		],
		resolutionHtml:
			'Das ist die Lösung für genau das Problem aus der Entstehungsgeschichte oben: Ob ein Anbieter sein Geschäft einstellt, übernommen wird oder einen Mitarbeiter mit schlechten Absichten beschäftigt, spielt für die Vertraulichkeit des bereits Geschriebenen keine Rolle mehr — denn es gab nie einen Moment, in dem der Anbieter, irgendein Anbieter, auch wir, es hätte lesen können.',
		faq: {
			question:
				'„Was ist mit gerichtlichen Anordnungen, Belästigungsuntersuchungen oder Compliance-Anfragen?“',
			answer1Html:
				'<strong>Nein, und das ist Absicht — weil die Alternative den Zweck zunichtemachen würde.</strong> Könnte ein Unternehmen 1:1-Inhalte lesen, würden genau die Gespräche, die am ehrlichsten geführt werden müssen, gar nicht mehr stattfinden. Das Szenario, das Compliance-Teams eigentlich beschäftigen sollte: Ein Mitarbeiter muss bedenkliches Verhalten <em>des eigenen Managers</em> melden, oder das von jemandem noch weiter oben. Könnte diese Person — oder irgendjemand in ihrer Führungslinie — 1:1-Gespräche mitlesen, würde dieser Bericht dann jemals ehrlich niedergeschrieben werden? Vertraulichkeit steht nicht im Widerspruch zum Aufdecken echter Probleme. Sie ist die Voraussetzung dafür, dass diese überhaupt ans Licht kommen.',
			answer2Html:
				'<strong>Und praktisch gesehen ist das kein Sackgasse.</strong> Jedes 1:1-Gespräch ist ausschließlich für seine beiden Beteiligten lesbar, unabhängig voneinander — niemals über einen einzigen gemeinsamen Unternehmensschlüssel. Ist eine Untersuchung gegen eine der beiden Personen gerichtet, bleibt der Inhalt über die andere Person weiterhin zugänglich — genauso, wie es wäre, hätte dasselbe Gespräch auf Papier oder in einem persönlichen Notizbuch stattgefunden: Ein rechtliches Verfahren kann eine <em>Person</em> zur Herausgabe zwingen, was sie besitzt. Es war nur nie etwas, das eine <em>Plattform</em> von sich aus hätte herausgeben können — genau das ist der Sinn der Sache.'
		}
	},

	pricing: {
		heading: 'Zwei Wege, es zu betreiben',
		whyAffordableHeading: 'Warum so erschwinglich?',
		whyAffordableBodyHtml:
			'<p>Wir jagen keinem Venture-Capital-Wachstum hinterher — wir brauchen kein großes Geschäft, nur ein tragfähiges. Die Preise spiegeln wider, was der Betrieb zuverlässiger Infrastruktur tatsächlich kostet, nicht das, was Unternehmenssoftware üblicherweise für ein Vertriebsteam, ein Marketingbudget oder in den Preis eingerechnete Investorenrenditen verlangt.</p>' +
			'<p>Und da die gesamte Plattform auch zum Selbsthosten kostenlos ist, zahlen Sie eigentlich nie für die Software selbst — sondern höchstens, wenn Sie sich dafür entscheiden, dafür, dass wir sie für Sie betreiben, oder für eine Support-Beziehung, die Sie wertvoll finden. Würden wir morgen den Betrieb einstellen, liefen selbstgehostete Installationen genau so weiter wie heute, unbeeinflusst — das ist kein Versprechen, das ist einfach, wie Open Source und Selbsthosting funktionieren. (Nicht ganz zufällig ist das genau das Problem, das dieses Projekt lösen soll — siehe <a href="#origin">Warum wir das gebaut haben</a>.)</p>',
		quoteHtml:
			'Ein sinnvolles 1:1-Gespräch bedeutet, dass zwei Menschen echte, konzentrierte Zeit in das Wachstum des jeweils anderen investieren — das sind die eigentlichen Kosten, es gut zu machen, und kein Tool ändert diese Rechnung. Wir sorgen nur dafür, dass diese Zeit nicht damit verschwendet wird, Kontext von Grund auf neu aufzubauen, nicht gefährdet ist, sobald ein Anbieter sein Geschäftsmodell ändert, und für niemanden außer den beiden Beteiligten sichtbar ist. Das sollte nicht mehr kosten als ein Notizbuch.',
		selfHosted: {
			heading: 'Selbstgehostet',
			table: {
				columns: ['Free', 'Premium'],
				rows: [
					{ label: 'Preis', values: ['0 € für immer', 'Kontaktieren Sie uns'] },
					{ label: 'Die gesamte Plattform', values: ['✓', '✓'] },
					{ label: 'Community-Support', values: ['✓', '✓'] },
					{ label: 'Priorisierter Support*', values: ['', '✓'] },
					{ label: 'Priorisierte Bearbeitung von Feature-Wünschen*', values: ['', '✓'] },
					{ label: 'SSO', values: ['', 'Demnächst'] }
				]
			},
			note: 'Der selbstgehostete Kern ist und bleibt vollständig kostenlos — keine beschnittene „Lite“-Stufe, keine künstlichen Limits. Premium ist ein optionales Zusatzangebot für Organisationen, die eine Support-Beziehung und Mitsprache bei der Roadmap wollen, keine Sperre für das Produkt selbst.'
		},
		cloud: {
			heading: 'Cloud',
			intro: 'Sie möchten keine eigene Infrastruktur betreiben? Wir hosten es für Sie.',
			table: {
				columns: ['Free (demnächst)', 'Plus (demnächst)', 'Enterprise'],
				rows: [
					{ label: 'Preis', values: ['0 €', '20 € / Monat', 'Vertrieb kontaktieren'] },
					{ label: 'Nutzer', values: ['Bis zu 100', 'Bis zu 1.000', 'Unbegrenzt'] },
					{ label: 'Historien-Aufbewahrung', values: ['3 Monate', 'Unbegrenzt', 'Unbegrenzt'] },
					{ label: 'Priorisierter Support*', values: ['', '✓', '✓'] },
					{ label: 'Priorisierte Bearbeitung von Feature-Wünschen*', values: ['', '', '✓'] },
					{ label: 'SSO', values: ['', '', 'Demnächst'] }
				]
			},
			note: 'Cloud läuft auf exakt demselben quelloffenen Code wie die selbstgehostete Version — dieselbe Ende-zu-Ende-Verschlüsselung, dieselben Datenschutzgarantien. Der einzige Unterschied ist, wer den Server betreibt.'
		},
		footnoteHtml:
			'*Priorisierter Support bedeutet, dass E-Mails und Anfragen zahlender Nutzer zuerst angesehen werden, nicht, dass eine Lösung sofort erfolgt oder durch ein SLA garantiert ist — das ist ein kleines, ehrliches Open-Source-Projekt, kein Callcenter. Ein bezahlter Fehler kann trotzdem Wochen dauern. Er wird nur vor der Warteschlange der kostenlosen Stufe bearbeitet, nicht anstelle davon.',
		contactUs: 'Kontaktieren Sie uns',
		contactSales: 'Vertrieb kontaktieren'
	},

	footer: {
		productHeading: 'Produkt',
		demoLabel: 'Live-Demo',
		pricingLabel: 'Preise',
		docsLabel: 'Dokumentation',
		githubLabel: 'GitHub',
		legalHeading: 'Rechtliches',
		termsLabel: 'Nutzungsbedingungen',
		privacyLabel: 'Datenschutzerklärung',
		languageHeading: 'Sprache',
		smallPrint: 'encrypted1on1 ist Open-Source-Software unter der AGPLv3-Lizenz.'
	}
};
