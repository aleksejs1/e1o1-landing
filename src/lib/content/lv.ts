import type { LandingContent } from './types';

export const lv: LandingContent = {
	meta: {
		title: 'encrypted1on1 — Privātas 1:1 tikšanās. Pierādāmi privātas.',
		description:
			'Atvērtā koda, pašu uzturēta, no gala līdz galam šifrēta platforma strukturētām vadītāja un darbinieka 1:1 tikšanām. Pat tie, kas uztur serveri, nevar izlasīt uzrakstīto.'
	},

	skipToContent: 'Pāriet uz saturu',

	hero: {
		headline: 'Privātas 1:1 tikšanās. Pierādāmi privātas.',
		subhead:
			'encrypted1on1 ir atvērtā koda, pašu uzturēta platforma strukturētām vadītāja un darbinieka 1:1 tikšanām — šifrēta no gala līdz galam, tāpēc pat tie, kas uztur serveri, nevar izlasīt uzrakstīto. Tas nav solījums privātuma politikā. Tas ir matemātisks fakts.',
		ctaTryDemo: 'Izmēģināt tiešraides demo',
		ctaBookDemo: 'Rezervēt demonstrāciju',
		ctaGithub: 'Skatīt GitHub',
		ctaDocs: 'Lasīt dokumentāciju',
		trustBadges: [
			'Atvērtā koda (AGPLv3)',
			'Pašu uzturēta',
			'Šifrēta no gala līdz galam',
			'Bez piesaistes piegādātājam'
		],
		highlights: [
			{
				icon: '🔒',
				title: 'Nulles zināšanas šifrējums',
				body: 'Saturs tiek šifrēts tieši jūsu pārlūkprogrammā. Pat administrators ar pilnu piekļuvi serverim to nevar izlasīt.'
			},
			{
				icon: '🎯',
				title: 'Mērķi, kas pāriet uz nākamo ciklu',
				body: 'Izvirzīti vienreiz un automātiski izsekoti katrā nākamajā ciklā — nekas nepazūd starp tikšanām.'
			},
			{
				icon: '📊',
				title: 'Izvērtēšanas atskaite vienā klikšķī',
				body: 'Atskaite par jebkuru laika periodu, izveidota klienta pusē no vairāku mēnešu 1:1 tikšanu datiem.'
			},
			{
				icon: '🚀',
				title: 'Pašu uzturēta, mūžīgi bez maksas',
				body: 'Viens Docker konteiners. Bez maksas par lietotāju, bez piesaistes piegādātājam, darbojas dažu minūšu laikā.'
			}
		],
		screenshotAlt:
			'Reāla encrypted1on1 anketa: atbildēts uz noskaņojuma un sajūtu jautājumiem, atvērts viens komentāru pavediens, un piekaramās atslēgas ikona atzīmē šo pusi kā šifrētu no gala līdz galam.'
	},

	origin: {
		heading: 'Kāpēc mēs to izveidojām',
		paragraphsHtml: [
			'Mēs necentāmies izveidot vēl vienu SaaS rīku. Mēs sākām kā klients.',
			'Mūsu organizācija savu 1:1 tikšanu procesu risināja ar trešās puses rīku — vienu no daudzajiem labi izstrādātajiem, labu nolūku produktiem šajā jomā. Tas darīja savu darbu. Tad, kā tas mēdz notikt ar nelieliem piegādātājiem, tika paziņots, ka pakalpojums tiek slēgts.',
			'Tas ir normāli. Jaunuzņēmumi beidz darbību. Nenormāli bija tas, ko šis fakts mums lika saprast: mēs nekad nebijām patiešām jautājuši sev, ko piegādātāja slēgšana <em>nozīmē</em> 1:1 tikšanas saturam. Bažas par sniegumu, kas izteiktas konfidenciāli. Vadītāja privātas piezīmes par padotā karjeras virzienu. Sarunas par atalgojumu. Personiski apstākļi, ko darbinieks atklājis, sagaidot, ka tas paliks tikai starp diviem cilvēkiem.',
			'Nekam no tā nekad nevajadzētu būt redzamam nevienam ārpus abiem dalībniekiem — ne augstākā līmeņa vadītājam, ne, pēc noklusējuma, personāla nodaļai, ne IT, un, kā mēs ar zināmu neveiklību sapratām, patiesībā ne pat <em>pašam piegādātājam</em>, lai gan tehniski piegādātājs to vienmēr varēja redzēt. Slēgšana ir tieši tas brīdis, kad uzņēmuma datu apstrādes prakse tiek pārbaudīta visstingrāk: atbalsta darbinieki veic datu izgūšanu, pircējs veic tehnisko izpēti, atlikusī neliela komanda visu noslēdz termiņu spiedienā. Mums nebija iemesla domāt, ka ar mūsu datiem konkrēti notiks kaut kas slikts. Bet mums arī nebija veida, kā to <em>zināt</em> — jo visa sistēma balstījās uz „uzticieties mums”, un „mēs” bija uzņēmums, kas tobrīd tieši izbeidza savu darbību.',
			'Šī ir plaisa, ko mēs izlēmām aizvērt pareizi — ne tikai savai organizācijai, bet kā kaut ko, ko ikviens tādā pašā situācijā varētu pats pārbaudīt, nevis pieņemt uz ticības. Ja 1:1 platforma glabā dažas no visjutīgākajām sarunām, kādas uzņēmumā notiek, „mēs apsolām neskatīties” nav pietiekami stingra garantija. Vienīgā pietiekami stingrā garantija ir tāda, kurā skatīšanās <em>nav iespējama</em> — kad operators, IT komanda, uzņēmums, kas platformu uztur pats, un pat pilnīga servera kompromitēšana iegūst tikai šifrētu tekstu. Tā nav politika. Tas ir pareizi īstenots šifrējums no gala līdz galam, ar atvērtu kodu, ko ikviens var pārbaudīt, lai pārliecinātos, ka šis apgalvojums patiešām ir patiess.',
			'encrypted1on1 ir tā rezultāts.'
		]
	},

	methodology: {
		heading: 'Vadītāja kalendārā visvērtīgākā tikšanās',
		intro:
			'Regulāras 1:1 tikšanās nav tikai patīkams vadības rituāls — tas ir viens no vislabāk pamatotajiem instrumentiem, kas organizācijai pieejams, lai noturētu darbiniekus, veicinātu iesaisti un pamanītu problēmas, kamēr tās vēl ir mazas.',
		points: [
			{
				html: '<strong>Endijs Grovs (Andy Grove)</strong> grāmatā <em>„High Output Management”</em> (1983) — grāmatā, kas faktiski definēja mūsdienu tehnoloģiju uzņēmumu vadības praksi, — apgalvoja, ka vadītāja individuālās tikšanās ir viena no viņam pieejamajām visvērtīgākajām darbībām tieši tāpēc, ka tur vadītājs iegūst informāciju, kas nepieciešama rīcībai, <em>pirms</em> problēma kļūst redzama kaut kur citur.'
			},
			{
				html: '<strong>Bens Horovics (Ben Horowitz)</strong> grāmatā <em>„The Hard Thing About Hard Things”</em> tieši attīsta Grova ideju un izsaka to pašu domu no otras puses: 1:1 tikšanās ir <em>darbinieka</em> tikšanās, nevis vadītāja statusa atskaites laiks — tās vērtība pilnībā ir spējā atklāt to, kas citādi netiktu izteikts.'
			},
			{
				html: '<strong>Google projekts Oxygen</strong> — iekšējs pētījums, kurā tika analizēti vairāk nekā 10 000 novērojumu par vairāk nekā 100 mainīgajiem, lai noskaidrotu, kas patiešām atšķir izciliem vadītājus no vidējiem, — atklāja, ka regulāru 1:1 tikšanos rīkošana un to labs norises veids (darba kārtību nosaka darbinieks, fokuss uz attīstību un labbūtību, nevis tikai uzdevumu statusu) ir viena no spēcīgākajām identificētajām īpašībām. Tehniskā kompetence, interesanti, ierindojās pēdējā vietā starp astoņām identificētajām īpašībām. (<a href="https://rework.withgoogle.com/intl/en/guides/following-the-data-the-research-behind-great-managers" target="_blank" rel="noopener noreferrer">Google re:Work</a>)'
			},
			{
				html: '<strong>Gallup</strong> pētījumi sniedz visspēcīgāko biznesa argumentu: darbinieki, kuru vadītāji ar viņiem regulāri tiekas, ir <strong>gandrīz trīs reizes lielāka iespēja būt iesaistītiem</strong> nekā tiem, kuru vadītāji to nedara. Un vadītāji veido <strong>70% no komandas iesaistes atšķirībām</strong> — tas nozīmē, ka 1:1 attiecību kvalitāte nav mīksts faktors, bet gan visvairāk kontrolējamais iesaistes virzītājspēks, kāds organizācijai ir. (<a href="https://www.gallup.com/workplace/236570/employees-lot-managers.aspx" target="_blank" rel="noopener noreferrer">Gallup</a>, <a href="https://news.gallup.com/businessjournal/182792/managers-account-variance-employee-engagement.aspx" target="_blank" rel="noopener noreferrer">Gallup Business Journal</a>)'
			},
			{
				html: '<strong>Džūlija Džo (Julie Zhuo)</strong> (<em>„The Making of a Manager”</em>) un <strong>Kamila Furnjē (Camille Fournier)</strong> (<em>„The Manager’s Path”</em>) — divas no visvairāk citētajām mūsdienu vadības grāmatām, abas sarakstījušas bijušās inženierijas nodaļu vadītājas (Facebook, Rent the Runway) — neatkarīgi viena no otras nonāk pie tā paša secinājuma: 1:1 tikšanās ir galvenais mehānisms, ar kura palīdzību vadītājs patiešām veic savu darbu, nevis tikšanās, kas konkurē ar „īsto darbu”.'
			}
		],
		closingHtml:
			'Šajos pētījumos vērojama konsekventa likumsakarība: vērtība nav pašā <em>tikšanos faktā</em>. Tā ir tikšanās rīkošanā <strong>regulāri, strukturēti un ar pēctecību</strong> — sekojot līdzi tam, kas tika teikts iepriekšējā reizē, kādas saistības tika uzņemtas, kādi mērķi vēl ir atvērti. Tieši šī pēctecība pazūd brīdī, kad 1:1 tikšanās dzīvo izkaisītos dokumentos, atmiņā vai kādā rīkā, kas nejauši bija atvērts konkrētajā nedēļā.'
	},

	comparison: {
		heading: 'Kopīgs dokuments nav sistēma',
		intro:
			'Lielākajai daļai komandu netrūkst vietas, kur pierakstīt. Google Docs, Notion, kopīga mape — jebkurš no tiem tehniski var glabāt 1:1 piezīmes. Tieši tas ir problēmas kodols: tie glabā piezīmes, nevis procesu.',
		points: [
			{
				title: 'Nav struktūras.',
				body: 'Tukšam dokumentam nav atmiņas par to, ko aptver laba 1:1 tikšanās. Noskaņojums, noslodze, sasniegumi, šķēršļi, atgriezeniskā saite — katrs vadītājs vai nu izgudro to no jauna, vai, biežāk, laika spiediena dēļ izlaiž pusi no tā.'
			},
			{
				title: 'Nav pēctecības.',
				body: 'Pirms trim mēnešiem izvirzīti mērķi dzīvo pirms trim mēnešiem izveidotā dokumentā — ja vien kāds spēj to atrast. Nav automātiskas saiknes starp šī cikla apņemšanos un nākamā cikla pēckontroli.'
			},
			{
				title: 'Nav ritma.',
				body: 'Nekas neatgādina, ka tuvojas 1:1 tikšanās vai ka viena puse vēl nav aizpildījusi savu daļu. Process pilnībā balstās uz individuālu disciplīnu — tieši tāpēc tas kluso brīdī, kad kāds kļūst aizņemts.'
			},
			{
				title: 'Nav strukturētas informācijas snieguma izvērtēšanai.',
				body: 'Kad pienāk izvērtēšanas sezona, „pārlasīt sešu mēnešu 1:1 pierakstus” lielākajā daļā uzņēmumu ir reālā darba plūsma. Nav apkopota skata par sasniegumiem, izaugsmi vai mērķu progresu visā izvērtēšanas periodā.'
			},
			{
				title: 'Nav reālas privātuma modeļa.',
				body: 'Kopīga dokumenta piekļuves kontrole ir tāda, kādu ļauj platformas koplietošanas iestatījumi — un platformas operators to var faktiski izlasīt, bez izņēmumiem. Tā ir citāda, vājāka garantija nekā šifrējums no gala līdz galam, neatkarīgi no tā, kā konfigurēti koplietošanas iestatījumi.'
			}
		],
		closingHtml:
			'encrypted1on1 aizstāj „dokumentu, ja par to atceras” ar sistēmu: fiksētu, pārdomāti izstrādātu jautājumu kopu abām pusēm, automātisku periodiskumu un atgādinājuma e-pastus, mērķus, kas saglabājas un tiek pārnesti starp cikliem kopā ar pilnu progresa vēsturi, un snieguma izvērtēšanas atskaiti, kas apkopo sasniegumus un mērķu progresu par jebkuru laika periodu — tā tiek ģenerēta klienta pusē, no datiem, kurus serveris nekad nav varējis izlasīt.'
	},

	privacy: {
		heading: 'Jūsu dati. Jūsu infrastruktūra. Pierādāmi privāti.',
		intro:
			'Korporatīvam pircējam frāze „uzticieties mums savu darbinieku visjutīgākajām sarunām” ir grūti pārdodama neatkarīgi no piegādātāja — un tā arī vajadzētu būt. encrypted1on1 ir veidots tā, lai šai frāzei nekad nevajadzētu būt piedāvājuma daļai.',
		points: [
			{
				title: 'Pašu uzturēta.',
				body: 'Visa platforma darbojas uz infrastruktūras, ko kontrolē jūsu uzņēmums — jūsu serveriem, jūsu mākoņa kontu, jūsu dublēšanas politiku. Datiem nekad nav jāatstāj jūsu organizācijas robeža, ja vien pats neizvēlaties mākoņa opciju.'
			},
			{
				title: 'Atvērtā koda (AGPLv3).',
				body: 'Katra koda rindiņa — arī kriptogrāfija — ir publiska un pieejama auditam. Jūs vai jūsu piesaistīta neatkarīga drošības komanda var tieši pārbaudīt privātuma apgalvojumus, nevis vienkārši uzticēties piegādātāja vārdam. Tas ir principiāli citāds uzticēšanās modelis nekā slēgtā koda SaaS produkts, kas lūdz uzticēties nelasītam pirmkodam un tā lietošanas noteikumiem.'
			},
			{
				title: 'Šifrēts no gala līdz galam — burtiski.',
				body: '1:1 saturs — atbildes, sajūtas, atgriezeniskā saite, komentāri, tikšanās rezultāti, mērķu progress — tiek šifrēts pārlūkprogrammā, pirms tas vispār sasniedz serveri, ar atslēgām, kas iegūtas no katra lietotāja paša paroles un nekad netiek pārsūtītas. Serveris glabā tikai šifrētu tekstu. Tas to nevar atšifrēt — ne operators, ne IT, ne mēs paši, ne uzbrucējs, kas kompromitējis datubāzi. Vienīgais apzinātais un šaurais izņēmums: mērķa nosaukums, apraksts un statuss tiek glabāti kā parasts teksts, tieši lai mērķi varētu atbalstīt uzņēmuma mēroga saskaņošanu un vieglu pārskatu veidošanu — viss pārējais 1:1 tikšanās ietvaros paliek privāts abiem dalībniekiem, bez izņēmumiem.'
			}
		],
		resolutionHtml:
			'Tas ir risinājums tieši tai problēmai, kas aprakstīta iepriekš stāstā par produkta izveidi: piegādātāja slēgšana, pārpirkšana vai negodprātīgs darbinieks vairs neietekmē jau uzrakstītā konfidencialitāti, jo nekad nav bijis brīža, kad piegādātājs — jebkurš piegādātājs, ieskaitot mūs — to varētu izlasīt.',
		faq: {
			question:
				'„Kā ar tiesas pieprasījumiem, aizskarošas uzvedības izmeklēšanu vai atbilstības prasībām?”',
			answer1Html:
				'<strong>Nē, un tas ir apzināti — jo alternatīva sagrautu visu mērķi.</strong> Ja uzņēmums varētu lasīt 1:1 saturu, sarunas, kurām visvairāk vajadzīga godīga norise, vispār pārstātu notikt. Scenārijs, par kuru atbilstības komandām patiešām būtu jāraizējas: darbiniekam ir jāziņo par satraucošu uzvedību, ko izrāda <em>viņa paša vadītājs</em>, vai kāds augstāk hierarhijā. Ja šī persona — vai kāds viņas pakļautībā — varētu lasīt 1:1 tikšanās, vai šāds ziņojums jebkad tiktu godīgi pierakstīts? Konfidencialitāte nav pretrunā ar reālu problēmu atklāšanu. Tā ir priekšnoteikums, lai tās vispār tiktu atklātas.',
			answer2Html:
				'<strong>Un praktiski tas nav strupceļš.</strong> Katru 1:1 tikšanos var izlasīt tieši tās divi dalībnieki, neatkarīgi viens no otra — nekad ar vienotu, koplietotu uzņēmuma atslēgu. Ja izmeklēšana skar vienu dalībnieku, saturs joprojām ir pieejams caur otru — tieši tāpat, kā tas būtu, ja tā pati saruna būtu notikusi uz papīra vai personiskā piezīmju blociņā: tiesiskais process var uzlikt par pienākumu <em>personai</em> uzrādīt to, kas viņai ir. Vienkārši tas nekad nav bijis kaut kas, ko <em>platforma</em> varētu nodot pati — tieši tajā ir visa jēga.'
		}
	},

	pricing: {
		heading: 'Divi veidi, kā to izmantot',
		whyAffordableHeading: 'Kāpēc tik pieejama cena?',
		whyAffordableBodyHtml:
			'<p>Mēs neīstenojam riska kapitāla mēroga izaugsmi — mums nav vajadzīgs, lai tas kļūtu par lielu biznesu, tikai par ilgtspējīgu. Cenas atspoguļo reālas izmaksas uzticamas infrastruktūras uzturēšanai, nevis to, ko parasti uzņēmuma programmatūrai piemaksā par pārdošanas komandu, mārketinga budžetu vai investoru atdevi.</p>' +
			'<p>Un tā kā visa platforma ir bez maksas arī pašu uzturēšanai, jūs faktiski nekad nemaksājat par pašu programmatūru — tikai, ja izvēlaties, par to, ka mēs to uzturam jūsu vietā, vai par atbalsta attiecībām, ko uzskatāt par vērtīgām. Ja mēs rīt beigtu darboties, pašu uzturētās instalācijas turpinātu darboties tieši tāpat kā šodien, neietekmētas — tas nav solījums, tā vienkārši darbojas atvērtais kods un pašu uzturēšana. (Tas arī nav nejaušība — tā ir tieši tā problēma, kuras risināšanai šis projekts pastāv — sk. <a href="#origin">Kāpēc mēs to izveidojām</a>.)</p>',
		quoteHtml:
			'Nozīmīga 1:1 tikšanās nozīmē, ka divi cilvēki velta reālu, koncentrētu laiku viens otra izaugsmei — tā ir reālā cena, lai to darītu labi, un neviens rīks šo aprēķinu nemaina. Viss, ko mēs pievienojam, ir pārliecība, ka šis laiks netiek izšķiests, no jauna atjaunojot kontekstu, nav apdraudēts brīdī, kad mainās piegādātāja biznesa modelis, un nav redzams nevienam, izņemot divus cilvēkus telpā. Tam nevajadzētu maksāt vairāk par piezīmju blociņu.',
		selfHosted: {
			heading: 'Pašu uzturēta',
			table: {
				columns: ['Free', 'Premium'],
				rows: [
					{ label: 'Cena', values: ['€0 uz visiem laikiem', 'Sazināties ar mums'] },
					{ label: 'Pilna platforma', values: ['✓', '✓'] },
					{ label: 'Kopienas atbalsts', values: ['✓', '✓'] },
					{ label: 'Prioritārs atbalsts*', values: ['', '✓'] },
					{ label: 'Prioritāra funkciju pieprasījumu izskatīšana*', values: ['', '✓'] },
					{ label: 'SSO', values: ['', 'Drīzumā'] }
				]
			},
			note: 'Pašu uzturētā pamatfunkcionalitāte ir un vienmēr paliks pilnībā bez maksas — bez ierobežota „lite” līmeņa, bez mākslīgiem ierobežojumiem. Premium ir opcionāls papildinājums organizācijām, kas vēlas atbalsta attiecības un balsstiesības attīstības plāna veidošanā, nevis paša produkta ierobežojums.'
		},
		cloud: {
			heading: 'Mākonis',
			intro: 'Nevēlaties uzturēt savu infrastruktūru? Mēs to uzturēsim jūsu vietā.',
			table: {
				columns: ['Free (drīzumā)', 'Plus (drīzumā)', 'Enterprise'],
				rows: [
					{ label: 'Cena', values: ['€0', '€20 / mēnesī', 'Sazināties ar pārdošanas komandu'] },
					{ label: 'Lietotāji', values: ['Līdz 100', 'Līdz 1000', 'Neierobežots'] },
					{ label: 'Vēstures glabāšana', values: ['3 mēneši', 'Neierobežota', 'Neierobežota'] },
					{ label: 'Prioritārs atbalsts*', values: ['', '✓', '✓'] },
					{ label: 'Prioritāra funkciju pieprasījumu izskatīšana*', values: ['', '', '✓'] },
					{ label: 'SSO', values: ['', '', 'Drīzumā'] }
				]
			},
			note: 'Mākoņa versija darbojas uz tā paša atvērtā koda kā pašu uzturētā versija — tāds pats šifrējums no gala līdz galam, tādas pašas privātuma garantijas. Vienīgā atšķirība ir tas, kurš uztur serveri.'
		},
		footnoteHtml:
			'*Prioritārs atbalsts nozīmē, ka maksājošu lietotāju e-pasti un pieteikumi tiek izskatīti pirmie, nevis to, ka labojums ir tūlītējs vai garantēts ar kādu SLA — šis ir neliels, godīgs atvērtā koda projekts, nevis zvanu centrs. Apmaksāta kļūda joprojām var aizņemt nedēļas. Tā vienkārši tiks izlabota pirms bezmaksas līmeņa rindas, nevis tās vietā.',
		contactUs: 'Sazināties ar mums',
		contactSales: 'Sazināties ar pārdošanas komandu'
	},

	footer: {
		productHeading: 'Produkts',
		demoLabel: 'Tiešraides demo',
		pricingLabel: 'Cenas',
		docsLabel: 'Dokumentācija',
		githubLabel: 'GitHub',
		legalHeading: 'Juridiskā informācija',
		termsLabel: 'Lietošanas noteikumi',
		privacyLabel: 'Privātuma politika',
		languageHeading: 'Valoda',
		smallPrint: 'encrypted1on1 ir atvērtā koda programmatūra, licencēta ar AGPLv3.'
	}
};
