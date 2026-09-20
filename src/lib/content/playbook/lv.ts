import type { PlaybookItem, CategoryMeta } from './types';

export const categoriesLv: CategoryMeta[] = [
	{
		id: 'foundations',
		label: 'Pamati',
		description: 'Vadības filozofija, ietekmes svira (leverage) un empīriskie pētījumi.'
	},
	{
		id: 'onboarding',
		label: 'Ievadīšana darbā',
		description: 'Sadarbošanās sākums ar skaidrību, gaidu salāgošanu un savstarpēju uzticēšanos.'
	},
	{
		id: 'regular',
		label: 'Regulārās tikšanās',
		description: 'Divu nedēļu ritms darba tempa uzturēšanai un šķēršļu laicīgai novēršanai.'
	},
	{
		id: 'growth',
		label: 'Izaugsme un karjera',
		description: 'Ceturkšņa sarunas par prasmju attīstību, profesionālo trajektoriju un ietekmi.'
	},
	{
		id: 'difficult',
		label: 'Sarežģīti brīži',
		description:
			'Pārslodzes vadība, izdegšanas novēršana un atbalstošas atgriezeniskās saites sniegšana.'
	},
	{
		id: 'leadership',
		label: 'Līderība',
		description: 'Skip-level tikšanās un stratēģiskā salāgošana pāri komandu robežām.'
	}
];

export const playbookItemsLv: PlaybookItem[] = [
	{
		slug: 'high-leverage-1-on-1',
		title: 'Augstas ietekmes 1 pret 1: Jēgpilnu tikšanos manifests',
		subtitle:
			'Kāpēc 90 % individuālo tikšanos pārtop par garlaicīgām statusa atskaitēm un kā tās padarīt par komandas spēcīgāko vadības sviru.',
		category: 'foundations',
		readTime: '6 min lasīšana',
		cadence: 'Pamatprincipi katram regulārajam ciklam',
		duration: '30–45 minūtes',
		targetAudience: 'Inženieru vadītāji, tehniskie līderi, vadītāji un CTO',
		summaryHtml:
			'1 pret 1 tikšanās nav administratīvs slogs vai uzdevumu nopratināšana. Tā ir vadītāja kalendāra ietekmīgākā aktivitāte. Regulāra, pēctecīga un patiesi privāta saruna novērš izdegšanu un atklāj problēmas nedēļām pirms tās parādās pārskatos.',
		whyItMattersHtml:
			'<p><strong>Statusa atskaites lamatas:</strong> Daudzi vadītāji iznieko 1 pret 1 laiku, mutiski prasot to, kas jau redzams Jira vai Slack: <em>"ko tu darīji vakar un ko darīsi šodien?"</em>. Kad 1 pret 1 kļūst par statusa sapulci, abas puses atslēdzas. Būtiskie šķēršļi paliek nepateikti, un psiholoģiskā drošība zūd.</p><p><strong>Endija Grova matemātika:</strong> Grāmatā <em>High Output Management</em> Endijs Grovs aprēķināja vadītāja ietekmes sviru: 90 minūtes pārdomātā 1 pret 1 sarunā var uzlabot inženiera darba kvalitāti un skaidrību uz 80 stundām starp tikšanās reizēm. Tas ir vairāk nekā 50-kārtīgs laika ieguldījuma atgriezums.</p><p><strong>Google Project Oxygen secinājums:</strong> Google daudzgadu pētījums ar vairāk nekā 10 000 novērojumiem atklāja, ka biežu un strukturētu 1 pret 1 tikšanos rīkošana ar uzsvaru uz labklājību un personīgo izaugsmi ir spēcīgākais izcila vadītāja rādītājs. Tehniskā ekspertīze starp novērtētajām īpašībām ierindojās pašā pēdējā vietā.</p><p><strong>Pēctecības trūkums:</strong> Vienkāršs Google Doc vai Notion lapa glabā piezīmes, nevis procesu. Maijā dotie solījumi līdz jūlijam tiek aizmirsti. Patiesa atdeve prasa automātisku pēctecību: mērķiem un vienošanām jāceļo cauri cikliem, līdz tie ir atrisināti.</p><p><strong>Privātums kā atklātības priekšnoteikums:</strong> Patiesa ievainojamība un uzticēšanās nav iespējama bez absolūtas konfidencialitātes. Ja piezīmes glabājas korporatīvajā mākonī, kur tās var redzēt IT administratori vai trešās puses, darbinieki ieslēdz pašcenzūru. Pilnīga šifrēšana no gala līdz galam (E2EE) ir atklātas sarunas tehniskais pamats.</p>',
		agenda: [
			{
				title: '1. pīlārs: Enerģija un noskaņojums (5 min)',
				durationMinutes: 5,
				description: 'Cilvēciskā resursa un pašsajūtas novērtējums pirms darba jautājumiem.',
				questions: [
					'Kāds ir tavs enerģijas līmenis šonedēļ skalā no 1 līdz 5?',
					'Kas šonedēļ sniedza vislielāko gandarījumu darbā vai ārpus tā?'
				]
			},
			{
				title: '2. pīlārs: Šķēršļi un aizķeršanās (15 min)',
				durationMinutes: 15,
				description: 'Sistēmisko grūtību un bremzējošo faktoru apzināšana.',
				questions: [
					'Kāds šķērslis vai atkarība no citām komandām šobrīd visvairāk kavē tavu progresu?',
					'Kāds lēmums vai process šonedēļ likās nevajadzīgi lēns vai nomācošs?'
				]
			},
			{
				title: '3. pīlārs: Nākotnes virziens un karjera (15 min)',
				durationMinutes: 15,
				description: 'Ikdienas pienākumu sasaiste ar ilgtermiņa mērķiem.',
				questions: [
					'Kā pašreizējie uzdevumi palīdz attīstīt tās prasmes, ko vēlies stiprināt šogad?',
					'Vai pašreizējais darbs sniedz veselīgu izaicinājumu, vai arī kļūst par rutīnu?'
				]
			},
			{
				title: '4. pīlārs: Abpusēja atgriezeniskā saite un vienošanās (10 min)',
				durationMinutes: 10,
				description: 'Konstruktīva atgriezeniskā saite un konkrētu soļu fiksēšana.',
				questions: [
					'Ko es kā vadītājs varētu darīt citādi, lai tevi labāk atbalstītu?',
					'Kādas ir 1–2 konkrētas apņemšanās, ko katrs no mums paņem līdzi līdz nākamajai tikšanās reizei?'
				]
			}
		],
		tips: [
			'80/20 likums: darbinieks runā 80 % laika, vadītājs – ne vairāk kā 20 %.',
			'Nekad neatceliet 1 pret 1 pēdējā brīdī; ja nepieciešams, nekavējoties pārceliet.',
			'Piefiksējiet vienošanās uzreiz sarunas laikā, lai nākamreiz konteksts būtu skaidrs.'
		],
		keyTakeaway:
			'Vadītāja rezultāts ir viņa komandas rezultāts. 1 pret 1 tikšanās ir galvenā vadības svira.'
	},
	{
		slug: 'first-1-on-1',
		title: 'Pirmā 1 pret 1 tikšanās: Gaidu salāgošana un psiholoģiskā drošība',
		subtitle:
			'Uzticības veidošana, darba stilu izzināšana un vienošanās par turpmākās sadarbības noteikumiem.',
		category: 'onboarding',
		readTime: '4 min lasīšana',
		cadence: 'Pirmajās 1–2 sadarbības nedēļās',
		duration: '45–60 minūtes',
		targetAudience: 'Vadītājs un jauns komandas biedrs (vai jauns vadītājs esošā komandā)',
		summaryHtml:
			'Pirmā 1 pret 1 saruna nav tehnisks pārskats vai atskaite. Tās mērķis ir iepazīt vienam otra darba stilu, kliedēt neziņu un radīt uzticēšanās gaisotni.',
		whyItMattersHtml:
			'<p>Kā norādīja Endijs Grovs, 1 pret 1 pamatā ir <em>darbinieka tikšanās</em>. Jaunā amatā neskaidrība rada spriedzi. Apziņa, ka šī saruna kalpo atbalstam, nevis kontrolei, jau no pirmās dienas maina gaisotni komandā.</p>',
		agenda: [
			{
				title: '1. daļa: Sarunas mērķa izskaidrošana (10 min)',
				durationMinutes: 10,
				description: 'Vienoties par formātu un uzsvērt konfidencialitātes nozīmi.',
				questions: [
					'Kāda ir bijusi tava pieredze ar 1 pret 1 sarunām iepriekš? Kas palīdzēja un kas traucēja?',
					'Mana pieeja: šis ir tavs laiks, nevis mana uzdevumu kontrole. Kā tas tev izklausās?'
				]
			},
			{
				title: '2. daļa: Darba stils un komunikācija (20 min)',
				durationMinutes: 20,
				description: 'Uzzināt, kādos apstākļos darbinieks spēj strādāt visproduktīvāk.',
				questions: [
					'Kādi apstākļi tev palīdz vislabāk koncentrēties (klusuma bloki, deep work, darbs pārī)?',
					'Kā tev ir ērtāk saņemt atgriezenisko saiti: uzreiz, rakstiski pirms sarunas vai 1 pret 1 laikā?',
					'Kad esi pakļauts(a) spriedzei vai pārslodzei, kā tas izpaužas un kā es varu vislabāk palīdzēt?'
				]
			},
			{
				title: '3. daļa: Pirmās 30 dienas (15 min)',
				durationMinutes: 15,
				description: 'Pārliecināties, ka ir pieejams viss nepieciešamais vienmērīgam sākumam.',
				questions: [
					'Kas līdz šim mūsu procesos ir šķitis visneskaidrākais vai mulsinošākais?',
					'Vai šobrīd netrūkst kādas pieejas, dokumentācijas vai informācijas?'
				]
			}
		],
		tips: [
			'Nespriediet par Jira uzdevumiem un termiņiem.',
			'Klausieties 80 % laika.',
			'Apstipriniet, ka sarunas saturs paliek tikai starp jums.'
		],
		keyTakeaway:
			'Pirmā tikšanās nosaka visas turpmākās sadarbības toni. Uzticēšanās ir svarīgāka par procedūrām.'
	},
	{
		slug: 'bi-weekly-pulse',
		title: 'Regulārā tikšanās: Divu nedēļu sinhronizācija',
		subtitle:
			'30 minūšu ietvars, kas fokusējas uz enerģiju, progresu, šķēršļu novēršanu un abpusēju atgriezenisko saiti.',
		category: 'regular',
		readTime: '3 min lasīšana',
		cadence: 'Reizi 1 līdz 2 nedēļās',
		duration: '30–45 minūtes',
		targetAudience: 'Vadītājs un darbinieks',
		summaryHtml:
			'Regulāra saruna nedrīkst būt uzdevumu saraksta nolasīšana. Tā ir iedziļināšanās cilvēka sajūtās, šķēršļos un enerģijā.',
		whyItMattersHtml:
			'<p>Regulāras un strukturētas sarunas novērš situāciju, kad nelieli pārpratumi pāraug aiziešanā no darba vai nopietnās krīzēs.</p>',
		agenda: [
			{
				title: '1. Enerģija un noskaņojums (5 min)',
				durationMinutes: 5,
				description: 'Sāciet ar cilvēku, nevis ar darbu sarakstu.',
				questions: [
					'Kāds ir tavs enerģijas līmenis šonedēļ skalā no 1 līdz 5?',
					'Kas bija tavas nedēļas patīkamākais notikums?'
				]
			},
			{
				title: '2. Šķēršļi un atkarības (15 min)',
				durationMinutes: 15,
				description: 'Identificēt faktorus, kas kavē ritmu.',
				questions: [
					'Kas šobrīd prasa pārāk daudz laika vai šķiet lieki sarežģīts?',
					'Vai ir kādas atkarības no citām komandām, kas kavē darbu?',
					'Ko es varu atrisināt, lai nākamās divas nedēļas būtu vieglākas?'
				]
			},
			{
				title: '3. Atgriezeniskā saite un vienošanās (10 min)',
				durationMinutes: 10,
				description: 'Novērtēt iepriekšējos solījumus un precizēt virzienu.',
				questions: [
					'Kā virzās iepriekšējā 1 pret 1 fiksētās vienošanās?',
					'Vai ir bijuši lēmumi, kur tev pietrūka konteksta vai kuriem nepiekrīti?'
				]
			}
		],
		tips: [
			'Pirms tikšanās pārskatiet iepriekšējās piezīmes.',
			'Ja darbinieks sāk stāstīt tikai uzdevumu statusus, maigi pievērsieties mācībām un izaicinājumiem.'
		],
		keyTakeaway:
			'Regulārums ir svarīgāks par ilgumu: 30 saturīgas minūtes ik pēc divām nedēļām ir labākas par neregulāru maratonu.'
	},
	{
		slug: 'career-growth',
		title: 'Karjeras un izaugsmes saruna: Ceturkšņa pārskats',
		subtitle:
			'Skats ārpus ikdienas steigas: Ilgtermiņa virziens, jaunas prasmes un profesionālie mērķi.',
		category: 'growth',
		readTime: '4 min lasīšana',
		cadence: 'Reizi ceturksnī (ik pēc 3–6 mēnešiem)',
		duration: '45–60 minūtes',
		targetAudience: 'Vadītājs un darbinieks',
		summaryHtml:
			'Veltīts laiks sarunai par profesionālo nākotni, prom no ikdienas sprintu termiņiem.',
		whyItMattersHtml:
			'<p>Pēc Gallup datiem, izaugsmes iespēju trūkums ir viens no galvenajiem iemesliem, kāpēc labākie darbinieki aiziet. Regulāra saruna nodrošina, ka attīstība netiek aizmirsta ikdienas steigā.</p>',
		agenda: [
			{
				title: '1. Pārskats un atskats (15 min)',
				durationMinutes: 15,
				description: 'Sasniegumi un gūtā pieredze pēdējos mēnešos.',
				questions: [
					'Atskatoties uz pēdējiem mēnešiem, par kuru sasniegumu jūties visvairāk lepns(a)?',
					'Kādi uzdevumi deva enerģiju un kādi to izsūca?'
				]
			},
			{
				title: '2. Nākotnes virziens (20 min)',
				durationMinutes: 20,
				description: 'Vēlamās lomas iezīmēšana pēc 1–2 gadiem.',
				questions: [
					'Iedomājoties savu ideālo darba dienu pēc 1–2 gadiem, ko tu dari?',
					'Kas tevi vairāk saista: padziļināta tehniskā ekspertīze vai cilvēku un komandas vadība?'
				]
			},
			{
				title: '3. Konkrēti izaugsmes soļi (15 min)',
				durationMinutes: 15,
				description: 'Vēlmju pārvēršana reālos projektos.',
				questions: [
					'Kādā nākamajā projektā mēs varam iekļaut uzdevumu šīs prasmes praktizēšanai?',
					'Kādu konkrētu mērķi mēs varam apņemties novērtēt nākamo 90 dienu laikā?'
				]
			}
		],
		tips: [
			'Nekad neapvienojiet šo sarunu ar algas pārskatīšanu vai kļūdu analīzi.',
			'Esiet atklāti par reālajām iespējām uzņēmumā.'
		],
		keyTakeaway:
			'Izaugsme ne vienmēr ir amata maiņa – tā ir prasmju, patstāvības un ietekmes paplašināšana.'
	},
	{
		slug: 'burnout-detection',
		title: 'Pārslodze un izdegšana: Līdzsvara atgūšana',
		subtitle:
			'Iejūtīgs ietvars spēku izsīkuma pamanīšanai, vainas apziņas mazināšanai un slodzes pārkārtošanai.',
		category: 'difficult',
		readTime: '4 min lasīšana',
		cadence: 'Pēc nepieciešamības vai pie ilgstoša stresa pazīmēm',
		duration: '45 minūtes',
		targetAudience: 'Vadītājs un pārslogots darbinieks',
		summaryHtml:
			'Kad cilvēks ir izsmelts, standarta jautājumi nestrādā. Šis šablons palīdz saudzīgi noņemt spriedzi un izveidot atelpas plānu.',
		whyItMattersHtml:
			'<p>Atbildīgi darbinieki bieži izdeg klusējot, baidoties izskatīties vāji. Vadītāja uzdevums ir nevis prasīt rezultātus, bet aizsargāt komandas veselību.</p>',
		agenda: [
			{
				title: '1. Atbalsts un drošība (10 min)',
				durationMinutes: 10,
				description: 'Spriedzes noņemšana un apliecinājums, ka veselība ir pirmajā vietā.',
				questions: [
					'Pamanīju, ka pēdējā laikā temps ir bijis ļoti saspringts, un gribēju pajautāt, kā tu patiesībā jūties.',
					'Tava veselība ir svarīgāka par jebkuru termiņu. Neviens projekts nav izdegšanas vērts.'
				]
			},
			{
				title: '2. Slodzes samazināšana (20 min)',
				durationMinutes: 20,
				description: 'Pienākumu pārskatīšana un liekā atcelšana.',
				questions: [
					'Ja mēs šodien varētu noņemt divus uzdevumus no tava galda, kas sniegtu vislielāko atvieglojumu?',
					'Kādas sapulces kalendārā patērē enerģiju, bet nesniedz reālu vērtību?'
				]
			},
			{
				title: '3. Tūlītēji soļi atelpai (15 min)',
				durationMinutes: 15,
				description: 'Aizsargājošu robežu noteikšana tuvākajām dienām.',
				questions: [
					'Vai palīdzētu dažas pilnīgas atslēgšanās dienas vai periods bez sapulcēm?',
					'Kā es varu tevi pasargāt no citiem pieprasījumiem, kamēr tu atgūsti spēkus?'
				]
			}
		],
		tips: [
			'Izvairieties no tukšām frāzēm "vienkārši atpūties", ja uzdevumu saraksts paliek nemainīgs.',
			'Paši uzņemieties iniciatīvu noņemt uzdevumus no darbinieka pleciem.'
		],
		keyTakeaway:
			'Izdegšana ir slodzes pārvaldības sistēmas problēma, nevis individuāla vājība. Rīkojieties laicīgi.'
	},
	{
		slug: 'skip-level',
		title: 'Skip-Level 1 pret 1: Organizācijas veselības pārbaude',
		subtitle:
			'Saruna starp augstākā līmeņa vadītāju un speciālistu, lai novērtētu stratēģiju, kultūru un procesus.',
		category: 'leadership',
		readTime: '4 min lasīšana',
		cadence: 'Reizi 3–6 mēnešos',
		duration: '30–45 minūtes',
		targetAudience: 'Vadošais līderis / CTO / direktors un speciālists',
		summaryHtml:
			'Skip-level tikšanās sniedz vadībai patiesu ieskatu komandas ikdienā un procesos, neapejot tiešos vadītājus.',
		whyItMattersHtml:
			'<p>Bens Horovics uzsver, ka sliktās ziņas uzņēmumos ceļo lēni. Skip-level sarunas apiet šos filtrus, savienojot vadību ar realitāti darba vietā.</p>',
		agenda: [
			{
				title: '1. Mērķis un uzticēšanās (5 min)',
				durationMinutes: 5,
				description: 'Paskaidrot, ka šī nav slēpta darba novērtēšana.',
				questions: [
					'Paldies par tavu laiku! Mērķis ir uzklausīt tavu skatījumu uz komandu un uzņēmumu kopumā.'
				]
			},
			{
				title: '2. Stratēģijas skaidrība (15 min)',
				durationMinutes: 15,
				description: 'Pārbaudīt, vai uzņēmuma kopējā vīzija sasniedz ikdienas darbu.',
				questions: [
					'Vai kopējā uzņēmuma stratēģija šim gadam tev šķiet skaidra un iedvesmojoša?',
					'Vai redzi, kā tavs ikdienas darbs tieši virza uzņēmuma galvenās prioritātes?'
				]
			},
			{
				title: '3. Sistēmiskie šķēršļi (15 min)',
				durationMinutes: 15,
				description: 'Strukturālo aizķeršanos apzināšana.',
				questions: [
					'Kāds ir lielākais šķērslis, kas kavē komandu piegādāt kvalitatīvu rezultātu ātrāk?',
					'Ja tu būtu manā vietā uz vienu nedēļu, kādas pārmaiņas uzņēmumā tu ieviestu nekavējoties?'
				]
			}
		],
		tips: [
			'Nekad neizmantojiet skip-level, lai aprunātu tiešo vadītāju.',
			'Meklējiet kopējus modeļus vairākās sarunās.'
		],
		keyTakeaway:
			'Skip-level kalpo visas sistēmas veselības diagnosticēšanai. Skatieties uz kopainu.'
	}
];
