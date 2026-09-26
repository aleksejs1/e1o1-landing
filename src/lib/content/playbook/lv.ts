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
			'Savstarpējas uzticības veidošana, individuālā darba stila kalibrēšana („lietotāja rokasgrāmata par sevi”) un skaidru sadarbības noteikumu saskaņošana.',
		category: 'onboarding',
		readTime: '5 min lasīšana',
		cadence: 'Pirmajās 1–2 sadarbības nedēļās',
		duration: '45–60 minūtes',
		targetAudience: 'Vadītājs un jauns komandas biedrs (vai jauns vadītājs esošā komandā)',
		summaryHtml:
			'Pirmā 1 pret 1 tikšanās ieliek psiholoģisko pamatu vadītāja un darbinieka sadarbībai mēnešiem uz priekšu. Tā nav atskaite par uzdevumiem un nav zināšanu pārbaude. Tās galvenais mērķis ir kliedēt dabisko satraukumu par nezināmo („kāpēc mani aicina?”, „vai mani vērtē?”), noslēgt abpusēju sadarbības līgumu (Working Agreement), kalibrēt ērtākos atgriezeniskās saites kanālus un atklāt pirmos slēptos šķēršļus adaptācijas procesā.',
		whyItMattersHtml:
			'<p><strong>Varas asimetrija un dabiskā trauksme:</strong> Kad jauns darbinieks saņem pirmo kalendāra uzaicinājumu uz 1 pret 1 sarunu ar vadītāju, viņa pirmā zemapziņas reakcija ir aizsardzība: <em>„Vai es izdarīju ko nepareizi? Vai mani pratinās? Ko no manis gaida?”</em>. Ja tikšanās sākas bez skaidra konteksta, cilvēks tērē enerģiju pašaizsardzībai, nevis atklātam dialogam. Pirmās 1 pret 1 sarunas galvenais mērķis ir pilnībā kliedēt neziņu un radīt psiholoģisko drošību.</p><p><strong>Endija Grova princips — „Darbinieka tikšanās”:</strong> Grāmatā <em>High Output Management</em> Endijs Grovs uzsver fundamentālu patiesību: 1 pret 1 tikšanās pieder darbiniekam, nevis vadītājam. Darbinieks nosaka sarunas virzienu, bet vadītājs darbojas kā atbalstītājs, uzmanīgs klausītājs un šķēršļu novērsējs. Arī Bens Horovics grāmatā <em>The Hard Thing About Hard Things</em> norāda: ja darbinieki netic, ka vadība patiesi vēlas risināt viņu problēmas, organizācija lēnām degradējas no noklusētiem sarežģījumiem.</p><p><strong>Nenoteiktu gaidu augstā cena:</strong> Līdz pat 80 % nesaskaņu pārbaudes laikā rodas nevis profesionālo prasmju trūkuma dēļ, bet gan nerakstītu pieņēmumu nesakritības dēļ par komunikāciju, autonomiju un atbilžu ātrumu. Vadītājs var uzskatīt par pašsaprotamu, ka par aizķeršanos uzreiz jāraksta čatā, kamēr inženieris stundām mēģina tikt galā pats, baidoties traucēt. Pirmā saruna padara visus šos pieņēmumus atklātus un saprotamus.</p><p><strong>„Lietotāja rokasgrāmata par sevi” (Personal User Manual):</strong> Katram speciālistam ir individuāls darba stils: kādam nepieciešami netraucēti dziļa darba (deep work) logi no rītiem, kādam citam kritiku vieglāk uztvert rakstiski pirms sarunas, bet vēl kādam ir svarīgi izprast uzņēmuma kopējo stratēģiju. Šīs savstarpējās „lietošanas pamācības” saskaņošana pirmajā nedēļā aiztaupa mēnešiem ilgu rīvēšanos.</p>',
		preparationHtml:
			'<p><strong>1. Nosūtiet uzaicinājumu ar skaidru kontekstu:</strong> Nekad nesūtiet tukšu kalendāra uzaicinājumu ar nosaukumu „1-on-1” vai „Sync” bez apraksta. Tas garantēti radīs lieku stresu. Izmantojiet šo pārbaudīto šablonu:</p><div class="invite-box"><span class="invite-badge">Kalendāra uzaicinājuma šablons:</span><p class="invite-text">«Sveiks! Šī ir mūsu pirmā regulārā 1 pret 1 tikšanās. Sarunas mērķis ir tuvāk iepazīties, salāgot mūsu turpmāko tikšanos formātu, vienoties, kā mums abiem ir ērtāk komunicēt un apmainīties ar atgriezenisko saiti, kā arī atbildēt uz jebkuriem taviem jautājumiem. Šeit nebūs Jira uzdevumu pārbaudes vai zināšanu kontroles. Šis ir tavs laiks. Ja tev jau ir tēmas, par kurām vēlies aprunāties — droši pievieno tās sarunas plānam!»</p></div><p><strong>2. Vadītāja sagatavošanās (15 minūšu mājasdarbs):</strong></p><ul><li><strong>Iepazīstiet pieredzi:</strong> Pārlasiet CV un darba interviju piezīmes. Atsauciet atmiņā, kas cilvēku motivēja pievienoties komandai (arhitektūra, tehnoloģijas, kultūra) un kādas izaugsmes jomas tika pamanītas atlases procesā.</li><li><strong>Pārbaudiet adaptācijas higiēnu:</strong> Pārliecinieties, ka visas galvenās piekļuves (koda repozitoriji, CI/CD, mākoņvide, čati) ir piešķirtas un ir nozīmēts mentors (buddy).</li><li><strong>Nodrošiniet pilnīgu privātumu:</strong> Rīkojiet tikšanos aiz slēgtām durvīm vai individuālā videozvanā. Nekad nevadiet pirmo sarunu trokšņainā atvērtā birojā vai virtuvē, kur sarunu var dzirdēt citi.</li></ul>',
		agenda: [
			{
				title: '1. bloks: Tikšanās līgums un satraukuma mazināšana (10 min)',
				durationMinutes: 10,
				description:
					'Vienoties par tikšanās filozofiju, 80/20 klausīšanās proporciju un kalendāra laika aizsardzību.',
				questions: [
					'Kāda ir bijusi tava iepriekšējā pieredze ar 1 pret 1 sarunām? Kas citās komandās strādāja lieliski un kas šķita kā laika izšķiešana? (Klausieties: tas atklās iepriekšējās bažas par mikromenedžmentu, pēdējā brīža atcelšanām vai uzdevumu pratināšanu).',
					'Mans pamatprincips: šis 1 pret 1 ir tavs laiks, nevis mana uzdevumu kontrole. Tu veido sarunas plānu, bet mans uzdevums ir noņemt šķēršļus un palīdzēt augt. Kā tev šķiet šāda pieeja?',
					'Vienošanās par atcelšanu: šis laiks kalendārā ir aizsargāts. Ja kādam no mums rodas neatliekama situācija, mēs nekad neatceļam sarunu „tuksnesī”, bet uzreiz pārceļam uz konkrētu laiku tajā pašā nedēļā.'
				]
			},
			{
				title: '2. bloks: Darba stils un „lietotāja rokasgrāmata par sevi” (25 min)',
				durationMinutes: 25,
				description:
					'Noskaidrot produktīvākos darba apstākļus, koncentrēšanās logus, atgriezeniskās saites vēlmes un pārslodzes signālus.',
				questions: [
					'Kādos apstākļos un ritmā tu strādā visproduktīvāk? Vai tev ir nepieciešami nepārtraukti dziļa darba (deep work) bloki bez sapulcēm un paziņojumiem? (Svarīgi: kā pasargāt inženiera kalendāru no sadrumstalotības).',
					'Kā tev ir ērtāk saņemt attīstošu atgriezenisko saiti: uzreiz čatā, strukturēti rakstiski pirms tikšanās (lai būtu laiks apdomāt) vai mutiski 1 pret 1 sarunā?',
					'Kad esi pakļauts(a) stipram stresam vai pārslodzei — kā tas izpaužas no malas (noslēgšanās, asāka reakcija koda pārskatos, klusēšana)? Kā es šādā brīdī varu vislabāk sniegt atbalstu?',
					'Kāds atzinības veids tev šķiet visvērtīgākais: publiska uzslava komandas priekšā vai privāta saruna par paveiktā inženiertehnisko sarežģītību?'
				]
			},
			{
				title: '3. bloks: Svaiga skatījuma audits (Fresh Eyes) un pirmie šķēršļi (15 min)',
				durationMinutes: 15,
				description:
					'Izmantot pirmo divu nedēļu svaigo skatu, pirms ikdienas rutīna rada pieradumu.',
				questions: [
					'Kas pirmajās dienās mūsu koda bāzē, arhitektūrā vai procesos šķita visneskaidrākais, dīvainākais vai neloģiskākais? (Klausieties uzmanīgi: jaunie darbinieki uzreiz pamana tehnisko parādu un dokumentācijas robus, pie kuriem pieredzējušie jau pieraduši).',
					'Vai šobrīd ir pieejamas visas nepieciešamās piekļuves, tehnika un konteksts netraucētam darbam? Vai ir skaidrs, kas tiks uzskatīts par panākumu pēc 30 un 90 dienām?',
					'Ar ko no komandas vai citām nodaļām tev būtu svarīgi iepazīties tuvākajās dienās? Vai ir nepieciešama mana palīdzība ar ievadu?'
				]
			}
		],
		antiPatterns: [
			{
				mistake: 'Tikšanās pārvēršana par mutisku Jira uzdevumu statusa atskaiti',
				whyBad:
					'Iznīcina sarunas stratēģisko vērtību un pozicionē vadītāju kā uzraugu. Darbinieks pārtrauks dalīties ar sistēmiskām problēmām, šaubām un izdegšanas riskiem.',
				betterAlternative:
					'Uzdevumu progresu sekojiet asinhroni uzdevumu pārvaldniekā vai ikdienas stāvsapulcē. 1 pret 1 sarunu veltiet cēloņu analīzei, darba videi un izaugsmei.'
			},
			{
				mistake: 'Vadītāja monologs (vadītājs runā vairāk nekā 50–70 % laika)',
				whyBad:
					'Pārvērš uzticamu pārdomu telpu nogurdinošā lekcijā. Vadītājs pauž savus uzskatus, tā vietā lai ieklausītos un pamanītu apslēpto spriedzi.',
				betterAlternative:
					'Ievērojiet 80/20 likumu: darbinieks runā 80 % laika. Pēc jautājuma uzdošanas apzināti ieturiet 5–7 sekunžu pauzi — tieši pēc klusuma brīža cilvēki bieži atklāj svarīgāko.'
			},
			{
				mistake: 'Pāragri un nepārbaudīti solījumi par amata paaugstināšanu vai algu',
				whyBad:
					'Vēlmē iepatikties jaunajam darbiniekam vadītājs mēdz dot pārsteidzīgus solījumus („pēc pusgada būsi seniors”). Ja vadība vai budžets to nobloķē, uzticība ir neglābjami zaudēta.',
				betterAlternative:
					'Skaidri izskaidrojiet prasmju matricas, novērtēšanas ciklus un prasības. Soliet atbalstu un godīgu atgriezenisko saiti, bet negarantējiet administratīvus lēmumus pirms laika.'
			},
			{
				mistake: 'Sarunas ierakstīšana video vai piezīmju veikšana publiskās uzņēmuma vietnēs',
				whyBad:
					'Ieraksta paziņojums vai nešifrēts dokuments uzreiz rada pašcenzūru. Neviens nerunās par personiskām domstarpībām vai šaubām, ja piezīmes var izlasīt trešās personas.',
				betterAlternative:
					'Nekad neierakstiet 1 pret 1 sarunas video. Izmantojiet privātas, no gala līdz galam šifrētas piezīmes, kas pieejamas tikai jums abiem, un fiksējiet tikai konkrētus rīcības soļus.'
			}
		],
		followUpHtml:
			'<p><strong>1. Ātrā uzvara (Quick Win) pirmajās 24 stundās:</strong> Izvēlieties vismaz vienu nelielu sarežģījumu, ko darbinieks pieminēja sarunā (trūkstoša piekļuve, skaļa vide, programmatūras licence vai iepazīstināšana ar kolēģi), un <em>atrisiniet to nākamo 24 stundu laikā</em>. Tas ir spēcīgākais signāls jaunajam kolēģim: 1 pret 1 sarunām šeit ir reāla ietekme un vadītājs pilda solīto.</p><p><strong>2. Vienošanos fiksēšana privātā vietā:</strong> Sagatavojiet īsu kopsavilkumu ar 2–3 rīcības soļiem šifrētā vidē. Izvairieties no publiskām uzņēmuma lapām, kur personiska informācija var kļūt pieejama citiem.</p><p><strong>3. Regulārā ritma nostiprināšana kalendārā:</strong> Pārliecinieties, ka regulārā tikšanās (katru nedēļu vai reizi divās nedēļās) ir stingri fiksēta abu kalendāros kā aizsargāts laiks.</p>',
		tips: [
			'80/20 likums: runājiet ne vairāk kā 20 % laika. Mācieties mierīgi pieņemt uzmanīgas klusuma pauzes.',
			'Sargājiet sarunas laiku: neparedzētu apstākļu dēļ neatceliet sarunu, bet pārceliet to tajā pašā nedēļā.',
			'Nekādu Jira statusu: uzdevumu statusu skatiet sistēmā; sarunā pievērsieties cilvēkam, kontekstam un šķēršļiem.',
			'Quick Win 24 stundās: novērsiet vismaz vienu traucēkli uzreiz pēc sarunas, lai nostiprinātu uzticību formāta vērtībai.'
		],
		keyTakeaway:
			'Pirmā 1 pret 1 tikšanās ieliek sadarbības psiholoģisko pamatu. Darbinieka adaptācijas ātrums un atklātība turpmākajos sešos mēnešos ir atkarīga nevis no instrukcijām, bet gan no tā, vai viņš šajā sarunā sajuta drošību un patiesu vēlmi uzklausīt.'
	},
	{
		slug: 'bi-weekly-pulse',
		title: 'Regulārā tikšanās: Divu nedēļu sinhronizācija',
		subtitle:
			'Atkārtojams 30–45 minūšu ietvars tehniskajiem vadītājiem: kognitīvās slodzes diagnostika, sistēmisko šķēršļu novēršana un nepārtraukta gaidu salāgošana.',
		category: 'regular',
		readTime: '5 min lasīšana',
		cadence: 'Reizi 1 līdz 2 nedēļās',
		duration: '30–45 minūtes',
		targetAudience: 'Inženieru vadītāji, komandas vadītāji un izstrādātāji',
		summaryHtml:
			'Regulārā divu nedēļu sinhronizācija ir komandas operatīvais pulss un vadītāja svarīgākais agrīnās brīdināšanas radars. Tās mērķis nav pārstāstīt Jira uzdevumus, bet gan savlaicīgi pamanīt enerģijas izsīkumu, novērst starpkomandu berzi, sasaistīt ikdienas koda rakstīšanu ar biznesa jēgu un kalibrēt atgriezenisko saiti, pirms slēpts aizkaitinājums pārvēršas atlūgumā.',
		whyItMattersHtml:
			'<p><strong>Slazds „Man nekā nav, atceļam”:</strong> Visbīstamākais ieradums regulārajās sarunās ir savstarpējā frāze: <em>„Klau, man nekas steidzams nav iekrājies, tev arī ne? Ietaupīsim laiku un šoreiz izlaidīsim.”</em> Tajā brīdī tas šķiet racionāls laika ietaupījums. Tomēr atkārtota tikšanos atcelšana sagrauj psiholoģiskās drošības rituālu. Apslēptais aizkaitinājums, nogurums un nesaskaņas nekur nepazūd — tie vienkārši iegrimst klusumā. Kad pēc trim mēnešiem vadošais inženieris negaidīti iesniedz atlūgumu ar vārdiem „esmu izdedzis un neredzu jēgu”, vadītājs ir neizpratnē, jo sarunās „viss taču bija kārtībā”.</p><p><strong>Preventīvā radara princips:</strong> Strukturēta 1 pret 1 saruna nav ugunsgrēka dzēšana, bet gan seismisks sensors. Berzes punkti (lēns CI/CD, smagnēji koda pārskati, aizkavējušies saskaņojumi ar kaimiņu komandām vai neizskaidrotas stratēģijas maiņas) uzkrājas nemanāmi. Ja inženierim nav regulāra, aizsargāta laika loga reizi divās nedēļās, kur tikt uzklausītam bez nosodījuma, viņš noslēdzas un pāriet iekšējā pasivitātē.</p><p><strong>Konteksts pār kontroli (kods un bizness):</strong> Spēcīgākie inženieri ātri zaudē degsmi, ja jūtas vienkārši kā „uzdevumu koda rakstītāji”. Divu nedēļu sinhronizācija ir labākais rīks stratēģiskā konteksta nodošanai: kāpēc šī funkcionalitāte ir kritiska klientu noturēšanai, kādus mērķus izvirza uzņēmuma vadība un kā arhitektūras izvēles ietekmē visas sistēmas uzticamību.</p><p><strong>Operatīvās pēctecības likums:</strong> Saruna ir vērtīga tikai tik daudz, cik uzticami tiek pildīti dotie solījumi. Ja vadītājs sarunā apņemas „palīdzēt ar licenci” vai „atrisināt jautājumu ar blakus nodaļu”, bet pēc divām nedēļām par to pat neatceras — darbinieks secina, ka runāt par problēmām ir bezjēdzīgi. Disciplinēta vienošanos pildīšana veido patiesu vadītāja autoritāti.</p>',
		preparationHtml:
			'<p><strong>1. Vadītāja 10 minūšu sagatavošanās kontrolsaraksts:</strong></p><ul><li><strong>Pārskatiet iepriekšējās sarunas piezīmes:</strong> Novērtējiet katru pirms divām nedēļām doto solījumu. Ja kaut ko neesat paspējis izdarīt, atzīstiet to pats sarunas sākumā, negaidot atgādinājumu.</li><li><strong>Izvērtējiet objektīvo kontekstu (ar empātiju, nevis mikromenedžmentu):</strong> Ielūkojieties Git un uzdevumu sistēmā. Vai kāds sarežģīts PR nav aizķēries pārskatē ilgāk par 4 dienām? Vai nav bijuši komiti brīvdienās vai nakts dežūras? Vai čatā nav bijušas asas diskusijas? Tas parādīs, kur cilvēkam zudusi enerģija.</li><li><strong>Uzturiet kopīgu pastāvīgo plānu (Running Agenda):</strong> Izmantojiet šifrētu koplietošanas dokumentu, kur abas puses divu nedēļu laikā var asinhroni pievienot apspriežamos jautājumus.</li></ul>',
		agenda: [
			{
				title: '1. bloks: Enerģijas pulss un resursu kalibrēšana (5–7 min)',
				durationMinutes: 7,
				description:
					'Novērtēt patieso emocionālo bateriju, pirms ķerties pie tehniskiem jautājumiem. Izvairīties no virspusējā „kā iet?”.',
				questions: [
					'Skalā no 1 līdz 5, kāds ir tavs enerģijas līmenis šonedēļ? Kas deva vislielāko sparu un kas iztukšoja visvairāk? (Uzmanību: vērtējums zem 3 divus ciklus pēc kārtas ir agrīns trauksmes zvans par izdegšanu vai konfliktu).',
					'Kura darba daļa pēdējās divās nedēļās šķita iedvesmojoša un attīstoša, un kas bija nogurdinoša rutīna vai bezjēdzīga birokrātija? (Pamanīt ikdienas kļūdu labošanas un lieku sapulču pārslogojumu).'
				]
			},
			{
				title: '2. bloks: Procesu berze, atkarības un tehniskais parāds (15 min)',
				durationMinutes: 15,
				description: 'Izcelt sistēmiskos šķēršļus, kas bremzē izstrādes ātrumu un rada vilšanos.',
				questions: [
					'Kur šobrīd ir lielākā pudeles kakla vieta mūsu procesos vai atkarībās no citām komandām? Kas tevi kavē visvairāk? (Pievērst uzmanību koda pārskates aizkavēšanās, nestabilam CI/CD vai neskaidrām prasībām).',
					'Vai mūsu koda bāzē vai arhitektūrā ir daļa, kurai komanda baidās pieskarties, un kāpēc? (Atklāt kritisku tehnisko parādu, par ko sprinta plānošanā klusē termiņu spiediena dēļ).',
					'Kādu konkrētu šķērsli vai traucēkli es šonedēļ varu noņemt no tava ceļa, lai pasargātu tavu fokusu?'
				]
			},
			{
				title: '3. bloks: Produkta konteksts un stratēģiskā salāgošana (10 min)',
				durationMinutes: 10,
				description:
					'Sasaistīt ikdienas sprinta uzdevumus ar uzņēmuma virsmērķiem un pārliecināties par virziena skaidrību.',
				questions: [
					'Vai tev ir pilnīga skaidrība, kāpēc šī sprinta uzdevumi ir svarīgi klientiem un uzņēmumam? Vai ir sajūta, ka tavam darbam ir reāla vērtība? (Pamanīt atslēgšanos no produkta jēgas).',
					'Vai pēdējā laikā ir bijuši vadības vai komandas lēmumi, kuru pamatojums šķita neskaidrs vai ar kuriem iekšēji neesi mierā? (Identificēt šaubas, pirms tās pāraug cinismā).'
				]
			},
			{
				title: '4. bloks: Abpusēja atgriezeniskā saite un vienošanās (10 min)',
				durationMinutes: 10,
				description:
					'Noslēgt iepriekšējo saistību loku un saņemt godīgu atgriezenisko saiti par savu vadības stilu.',
				questions: [
					'Pārskatīsim mūsu iepriekšējās vienošanās: vai paveicām to, par ko vienojāmies pirms divām nedēļām?',
					'Ko es kā tavs vadītājs šajās divās nedēļās varēju darīt labāk vai citādi, lai tevi efektīvāk atbalstītu?',
					'Kādas 1–2 konkrētas apņemšanās katrs no mums uzņemas līdz nākamajai sarunai?'
				]
			}
		],
		antiPatterns: [
			{
				mistake: '„Man nekā nav, tev arī ne? Ietaupīsim laiku!”',
				whyBad:
					'Māca komandai, ka regulārs kontakts ar vadītāju ir mazsvarīgs. Nesaskaņas un nogurums neizkūp gaisā — tie uzkrājas līdz negaidītam atlūgumam.',
				betterAlternative:
					'Neatceliet sarunas vieglprātīgi. Ja operatīvu tēmu nav, izmantojiet laiku arhitektūras diskusijām, ilgtermiņa tehniskajam virzienam, karjeras izaugsmei vai komandas kultūrai.'
			},
			{
				mistake: 'Mutiska Jira sprinta dēļa nolasīšana',
				whyBad:
					'Iznieko vērtīgu sinhrono laiku, lasot informāciju, kas jau ir pieejama sistēmā. Tikšanās pārvēršas sīkumainā kontrolē un izspiež stratēģiskas sarunas.',
				betterAlternative:
					'Maigi mainiet virzienu: „Statusu es redzu sistēmā. Labāk pastāsti, kas šajā uzdevumā prasīja visvairāk pūļu un ko mums uzlabot procesos, lai tas neatkārtotos.”'
			},
			{
				mistake: '„Melnā cauruma piezīmju grāmatiņa” (aizmirstie vadītāja solījumi)',
				whyBad:
					'Ja vadītājs pieraksta darbinieka lūgumu (samazināt sapulču skaitu, iegūt licences, vienoties ar kolēģiem), bet pēc 2 nedēļām to neatceras, 1 pret 1 zaudē jēgu.',
				betterAlternative:
					'Pārnesiet neizpildītos punktus no vienas tikšanās uz nākamo, līdz tie ir atrisināti. Sāciet katru sarunu ar atskaiti par saviem vadītāja solījumiem.'
			},
			{
				mistake: 'Vienpusēja kritika bez atgriezeniskās saites pieprasīšanas par sevi',
				whyBad:
					'Pārvērš sarunu par biedējošu audzināšanas stundu. Darbinieks ieņem aizsardzības pozīciju, slēpj kļūdas un zaudē uzticēšanos.',
				betterAlternative:
					'Vienmēr lūdziet atgriezenisko saiti: „Ko man kā tavam vadītājam vajadzētu sākt darīt, pārtraukt darīt vai turpināt darīt?”. Pieņemiet kritiku ar pateicību.'
			}
		],
		followUpHtml:
			'<p><strong>1. 5 minūšu likums uzreiz pēc sarunas:</strong> Nesteidzieties uz nākamo zvanu. Veltiet tieši piecas minūtes, lai piefiksētu 2–3 galvenos secinājumus un konkrētus rīcības soļus (Action Items) ar atbildīgajiem.</p><p><strong>2. Caurspīdīgs statuss par šķēršļiem 48 stundu laikā:</strong> Ja uzņēmāties uzdevumu palīdzēt darbiniekam (licences iegāde, saskaņošana ar vadību, atbrīvošana no sapulces), sniedziet ziņu 48 stundu laikā, pat ja risinājums vēl top. Tas apliecina jūsu vārda spēku.</p><p><strong>3. Nepārtraukta pēctecība no gala līdz galam šifrētās piezīmēs:</strong> Glabājiet pierakstus privātā vidē ar pilnīgu šifrēšanu. Pirms nākamās divu nedēļu sarunas šīm piezīmēm jābūt jūsu pirmajam atskaites punktam.</p>',
		tips: [
			'Regularitāte pār ilgumu: 30 minūtes ik pēc divām nedēļām sniedz nesalīdzināmi lielāku atdevi nekā divu stundu maratons reizi divos mēnešos.',
			'Nekad neatceliet bez pārcelšanas: neparedzētu apstākļu gadījumā nekavējoties pārceliet sarunu uz citu dienu tajā pašā nedēļā.',
			'Pildiet savus vadītāja solījumus: vadītāja autoritāti nosaka tas, cik ātri viņš likvidē komandas nosauktos šķēršļus.',
			'Sekojiet enerģijas līknei: enerģijas kritums 2–3 tikšanās pēc kārtas ir skaidrs signāls, ka jāpārskata slodze un uzdevumu sadalījums.'
		],
		keyTakeaway:
			'Regulāra 1 pret 1 saruna nav paveikto uzdevumu audits, bet gan komandas uzticības, enerģijas un caurlaidspējas galvenais vadības stūre. Šī divu nedēļu dialoga kvalitāte nosaka to, vai talantīgi inženieri izvēlēsies palikt jūsu komandā gadiem ilgi.'
	},
	{
		slug: 'career-growth',
		title: 'Karjeras un izaugsmes saruna: Ceturkšņa stratēģiskais pārskats',
		subtitle:
			'Augstas ietekmes stratēģiskā sesija personīgo ambīciju, izaicinājumu un ilgtermiņa tehniskās trajektorijas salāgošanai.',
		category: 'growth',
		readTime: '5 min lasīšana',
		cadence: 'Reizi ceturksnī (veltīta stratēģiskā sesija ārpus sprintu cikla)',
		duration: '45–60 minūtes',
		targetAudience: 'Vadītājs un inženieris (no Middle līdz Staff+)',
		summaryHtml:
			'Ceturkšņa karjeras dialogs ir mērķtiecīga stratēģiskā sesija, kas ir stingri nošķirta no ikdienas sprintu kņadas un sarunām par atalgojumu. Tās mērķis ir atklāt darbinieka patiesos profesionālās enerģijas avotus, salāgot personīgās vēlmes ar uzņēmuma attīstības plānu, vienoties par attīstošu izaicinājumu projektu (stretch project) un izveidot caurskatāmu tiltu starp ikdienas programmēšanu un ilgtermiņa izaugsmi.',
		whyItMattersHtml:
			'<p><strong>Slazds „Ikdiena aprij nākotni”:</strong> Nepārtrauktu relīžu un saspringtu termiņu apstākļos ir viegli pavadīt divus gadus, nevainojami slēdzot Jira biļetes, un pēkšņi secināt, ka profesionālā izaugsme ir apstājusies. Saskaņā ar Gallup pētījumiem skaidras perspektīvas un attīstošu izaicinājumu trūkums ir galvenais iemesls, kāpēc spēcīgākie speciālisti (Senior, Lead, Staff) pamet uzņēmumus. Ja vadītājs neiegulda laiku inženiera karjeras virzībā, to labprāt izdarīs citas kompānijas personāla atlases speciālists.</p><p><strong>Izaugsmes nošķiršana no snieguma novērtēšanas (Performance Review):</strong> Rupjākā vadības kļūda ir karjeras sarunas apvienošana ar ikgadējo atestāciju vai atalgojuma pārskatīšanu. Kad runa ir par naudu vai prēmijām, cilvēks instinktīvi pāriet aizsardzības režīmā: viņš pārspīlē sasniegumus un slēpj šaubas vai vājās puses. Patiess sarunu process par izaugsmi ir iespējams tikai tad, kad snieguma vērtēšana tiek risināta atsevišķi.</p><p><strong>Mīts par vienīgajām karjeras kāpnēm (IC pret vadību):</strong> Gadiem ilgi tehnoloģiju nozarē valdīja maldīgs uzskats, ka vienīgais ceļš uz izaugsmi ir kļūt par komandas vadītāju. Tā rezultātā uzņēmumi zaudēja izcilus sistēmu inženierus un ieguva nelaimīgus, izdegušus vadītājus. Mūsdienīga inženierijas kultūra pieprasa paralēlus ceļus: padziļinātai tehniskajai ekspertīzei un arhitektūras līderībai (Staff / Principal Engineer) jābūt tikpat novērtētai, ietekmīgai un atalgotai kā cilvēku vadībai.</p><p><strong>Sponsorēšana, nevis tikai mentorings:</strong> Mentors stāsta, <em>kā</em> augt; sponsors <em>atver durvis</em>. Vadītāja lielākā ietekme ir nevis abstrakti padomi, bet gan darbinieka aktīva virzīšana sarežģītos arhitektūras projektos, uzticība aizstāvēt RFC lēmumu pieņēmēju priekšā un viņa autoritātes stiprināšana uzņēmumā.</p>',
		preparationHtml:
			'<p><strong>1. Nosūtiet pārdomu jautājumus 5–7 dienas pirms sarunas:</strong> Nepārsteidziet inženieri nesagatavotu ar sarežģītiem jautājumiem, piemēram, „kur tu redzi sevi pēc 3 gadiem?”. Dodiet laiku mierīgi apdomāties, nosūtot īsu anketu:</p><div class="invite-box"><span class="invite-badge">Anketa pirms karjeras 1 pret 1 sarunas:</span><p class="invite-text">„Sveiks! Mūsu ceturkšņa sarunā mēs noliksim malā ikdienas kļūdas un biļetes, lai pilnībā pievērstos tavam profesionālajam ceļam. Lūdzu, padomā par trim jautājumiem: 1) Kuri 2–3 projekti pēdējo sešu mēnešu laikā tev sniedza vislielāko lepnumu un enerģiju? 2) Kuri uzdevumi šķita nogurdinoša rutīna vai strupceļš? 3) Uz kuru pusi tevi pašlaik velk visvairāk: padziļināties arhitektūrā un sarežģītās tehniskās sistēmās (Individual Contributor), vadīt cilvēkus un komandas procesus (Lead/Management), vai iedziļināties produkta un biznesa stratēģijā?”</p></div><p><strong>2. Vadītāja mājasdarbs (15–20 minūtes):</strong></p><ul><li><strong>Salāgojiet ambīcijas ar uzņēmuma tehnisko ceļa karti:</strong> Izskatiet produkta un infrastruktūras plānus nākamajiem 6 mēnešiem. Kur būs nepieciešama arhitektūras pārstrāde, jaunu tehnoloģiju ieviešana vai jaunāko inženieru mentorēšana? Sagatavojiet konkrētas izaugsmes iespējas (stretch assignments).</li><li><strong>Pārbaudiet kompetenču matricu:</strong> Formulējiet objektīvu skatījumu uz inženiera izaugsmes zonām: ietekmes mērogs, patstāvība, sadarbība ar ieinteresētajām pusēm vai sistēmu projektēšanas pamatīgums?</li></ul>',
		agenda: [
			{
				title: '1. bloks: Enerģijas retrospekcija un profesionālais lepnums (12 min)',
				durationMinutes: 12,
				description:
					'Noteikt patiesos motivācijas dzinējspēkus, analizējot reālo pēdējo sešu mēnešu darba pieredzi.',
				questions: [
					'Atskatoties uz pēdējiem sešiem mēnešiem, kurš tehniskais uzdevums, arhitektūras lēmums vai relīze tev radīja vispatiesāko profesionālo gandarījumu? (Klausieties: kas tieši rada „plūsmas stāvokli” — algoritmu elegance, relīžu ātrums, sistēmas uzticamība vai lietotāju atsauksmes).',
					'Kādi darba veidi sistemātiski izsūca tavu enerģiju, kaitināja vai šķita kā bezjēdzīga laika tērēšana? (Klausieties: toksiskā rutīna, ko laiks deleģēt, automatizēt vai pārskatīt).',
					'Kurā jomā tu saskati savu ievērojamāko kvalitatīvo izaugsmi aizvadītā gada laikā, kas, iespējams, no malas palika pietiekami nenovērtēta?'
				]
			},
			{
				title: '2. bloks: Trajektorija un lomas arhetipi (18 min)',
				durationMinutes: 18,
				description:
					'Iezīmēt mērķa lomas redzējumu pēc 1–2 gadiem: dziļā tehniskā joma (IC virziens), cilvēku vadība vai tehnoloģiskais produkts.',
				questions: [
					'Ja tu iztēlojies savu ideālo darba nedēļu pēc 18–24 mēnešiem: kādus uzdevumus tu risini, par kādu jomu atbildi un ar ko sadarbojies?',
					'Kas tevi piesaista vairāk: iedziļināties dalītajās sistēmās, kļūmjpacietībā un arhitektūras standartos (Staff Engineer) vai attīstīt komandu, fasilitēt procesus un palīdzēt augt citiem (Engineering Management)? (Klausieties uzmanīgi: pārliecinieties, vai nav vēlmes iet vadībā tikai tāpēc, ka pastāv maldīgas bailes par "algas griestiem" programmēšanā).',
					'Kādas galvenās prasmes vai pieredzes (nenoteiktības pārvaldība, RFC aizstāvēšana vadības priekšā, citu komandu mentorēšana) tev šobrīd visvairāk trūkst nākamajam solim?'
				]
			},
			{
				title: '3. bloks: Attīstošie projekti (Stretch Projects) un sponsorēšana (15 min)',
				durationMinutes: 15,
				description:
					'Atrast krustpunktu starp darbinieka interesēm un uzņēmuma prioritārajiem biznesa izaicinājumiem.',
				questions: [
					'Kādā no uzņēmuma plānotajiem projektiem mēs varam tev uzticēt paaugstinātas sarežģītības uzdevumu (stretch project), kas prasīs tieši šo jauno kompetenču apguvi?',
					'Kāds konkrēts atbalsts tev nepieciešams no manis kā vadītāja: regulārs tehniskais mentorings, aktīva sponsorēšana (piekļuve darba grupām/vadītājiem) vai darba laika aizsardzība no operatīvās kņadas?',
					'Vai ir ārējie resursi (konferences, kursi, nozares grāmatas, sarunas ar citu nodaļu Staff inženieriem), kas palīdzētu paātrināt tavu progresu?'
				]
			},
			{
				title: '4. bloks: Individuālais attīstības plāns (IDP) 90 dienām (15 min)',
				durationMinutes: 15,
				description: 'Pārvērst stratēģiskos sapņus 1–2 konkrētās ceturkšņa apņemšanās.',
				questions: [
					'Kādu vienu galveno attīstības mērķi mēs nofiksēsim nākamajām 90 dienām, lai nākamajā ceturkšņa sarunā varētu skaidri pateikt: „Jā, tas ir izdarīts”?',
					'Kādas 1–2 pirmās konkrētās darbības tu veiksi jau nākamo divu nedēļu laikā, lai uzsāktu šo plānu?',
					'Cik bieži un kādā formātā mēs pārskatīsim progresu saistībā ar šo mērķi mūsu regulārajās divu nedēļu 1 pret 1 sarunās?'
				]
			}
		],
		antiPatterns: [
			{
				mistake: 'Karjeras sarunas apvienošana ar snieguma novērtējumu vai algas apspriešanu',
				whyBad:
					'Kad uz spēles ir atalgojums vai bonusi, inženieris ieņem aizsardzības pozīciju. Viņš izceļ panākumus un noklusē nepilnības, padarot atklātu sarunu par izaugsmi neiespējamu.',
				betterAlternative:
					'Nodaliet šos procesus laikā vismaz par 3–4 nedēļām. Karjeras saruna ir iedvesmojošs skats nākotnē, nevis pagātnes kļūdu revīzija.'
			},
			{
				mistake: '„Vadītāja slazds” — labāko inženieru piespiešana kļūt par komandas vadītājiem',
				whyBad:
					'Komanda zaudē pirmklasīgu tehnisko speciālistu un iegūst neapmierinātu, pārslogotu vadītāju. Seko vilšanās, stress un aiziešana no darba.',
				betterAlternative:
					'Veidojiet un atbalstiet paralēlu tehniskās līderības ceļu (Staff/Principal Engineer). Tehniskajai autoritātei un atalgojumam jāpieaug bez administratīvā vadības sloga.'
			},
			{
				mistake: 'Vāji un vispārīgi padomi reālas sponsorēšanas vietā',
				whyBad:
					'Frāzes kā „esi pamanāmāks” vai „uzlabo komunikācijas prasmes” nesniedz skaidru virzienu un rada cinismu.',
				betterAlternative:
					'Kļūstiet par sponsoru: uzticiet nozīmīga RFC vadību, veiciniet viņa iesaisti arhitektūras padomē vai iepazīstiniet ar tehniskajiem vadītājiem.'
			},
			{
				mistake: '„Aprunājāmies un aizmirsām” līdz nākamajam gadam',
				whyBad:
					'Ja ceturkšņa mērķi netiek sasaistīti ar ikdienas darbu, tie tiek aizmirsti divu nedēļu laikā, liekot darbiniekam justies, ka uzņēmumam tas patiesībā nerūp.',
				betterAlternative:
					'Integrējiet attīstības atskaites punktus regulārajās divu nedēļu 1 pret 1 sarunās. Reizi mēnesī veltiet vismaz 5 minūtes 90 dienu plāna pārskatīšanai.'
			}
		],
		followUpHtml:
			'<p><strong>1. Individuālā attīstības plāna (IDP) nofiksēšana 48 stundu laikā:</strong> Pierakstiet privātās, šifrētās piezīmēs skaidru struktūru: 1 galvenais 90 dienu mērķis, panākumu kritēriji, izvēlētais stretch projekts un abu pušu apņemšanās.</p><p><strong>2. Vadītāja sponsorēšanas solis 7 dienu laikā:</strong> Speriet pirmo soli no savas puses nekavējoties: apstipriniet dalību projektā, noformējiet apmācību budžetu vai iepazīstiniet ar Staff mentoru. Ātra rīcība parāda nopietnu attieksmi.</p><p><strong>3. Nākamā ceturkšņa tikšanās datuma fiksēšana:</strong> Ieplānojiet nākamo stratēģisko sarunu tieši pēc 90 dienām, lai izvērtētu rezultātus un noteiktu nākamo izaugsmes soli.</p>',
		tips: [
			'Izaugsme nav tikai amata maiņa: tā ir patstāvības paplašināšana, sarežģītāki uzdevumi un plašāka ietekme uz produktu.',
			'Nekad nesoliet paaugstinājumu kā pašmērķi: koncentrējieties uz kompetencēm un ietekmi; amata izaugsme sekos dabiski.',
			'Sponsorējiet iespējas: labākais vadītāja atbalsts ir uzticēt sarežģītu uzdevumu un sniegt drošības sajūtu pirmo kļūdu gadījumā.',
			'Uzraugiet slodzes līdzsvaru: attīstošais uzdevums (stretch goal) nedrīkst pārsniegt 15–20% no darba laika, lai neradītu pārslodzi.'
		],
		keyTakeaway:
			'Karjeras dialogs pārvērš ikdienas biļešu pildīšanu par apzinātu profesionālo ceļojumu. Ja palīdzat cilvēkiem augt ātrāk par tirgu, viņi veltīs jūsu komandai savus labākos inženierijas gadus.'
	},
	{
		slug: 'burnout-detection',
		title: 'Pārslodze un izdegšana: Enerģijas atjaunošana',
		subtitle:
			'Krīzes rīcības ietvars inženieru komandu vadītājiem: spēku izsīkuma agrīna diagnostika, radikāls uzdevumu triāžs un vainas apziņas noņemšana.',
		category: 'difficult',
		readTime: '5 min lasīšana',
		cadence:
			'Pie pirmajām hroniska stresa pazīmēm, enerģijas krituma 2+ ciklus pēc kārtas vai pēc smagiem incidentiem',
		duration: '45 minūtes',
		targetAudience: 'Vadītājs un pārslogots/izsmelts inženieris',
		summaryHtml:
			'Saruna par izdegšanu nav virspusējas līdzjūtības paušana, bet gan steidzama inženiertehniska operācija sistēmas pārslodzes novēršanai. Kad darbinieks ir izsmelts, parastie statusa jautājumi un aicinājumi „saņemties” izraisa tikai sastingumu un vainas apziņu. Šīs tikšanās mērķis ir atzīt stāvokli bez aizspriedumiem, izlēmīgi izsvītrot balastu no uzdevumu saraksta, izveidot digitālā klusuma aizsargjoslu un vienoties par reālistisku atjaunošanās protokolu.',
		whyItMattersHtml:
			'<p><strong>Sistēmas kļūme, nevis personisks vājums:</strong> Izdegšana tehnoloģiju nozarē gandrīz nekad nav slinkuma vai rakstura vājuma sekas. Gluži pretēji: pētījumi, kas balstīti uz Maslach Burnout Inventory, rāda, ka pirmie izdeg paši atbildīgākie, apzinīgākie un kompetentākie profesionāļi (High Performers). Cēlonis meklējams strukturālā nelīdzsvarotībā: milzīga atbildība bez pietiekamām pilnvarām, nemitīga konteksta maiņa, nekompensētas nakts on-call dežūras un bezgalīgs nepabeigtu uzdevumu plūdums.</p><p><strong>„Klusā varonības” slazds:</strong> Labākie inženieri ir pieraduši glābt iekavētus termiņus uz savas veselības rēķina. Viņi slēpj nogurumu līdz pēdējam, uzskatot spēku izsīkumu par profesionālu nepiemērotību. Kad šāds darbinieks beidzot pasaka: „Es vairs nevaru”, viņš parasti atrodas izdegšanas 4. (terminālajā) stadijā, un pēc divām nedēļām uz galda parādās atlūgums. Gudram vadītājam brīdinošie signāli jāpamana krietni pirms šī lūzuma punkta.</p><p><strong>Formālās labvēlības toksiskums („Vienkārši izgulies brīvdienās”):</strong> Ieteikt pārgurušam cilvēkam atpūsties brīvdienās, atstājot uz viņa pleciem 15 degošas Jira biļetes, ir vadītāja nolaidība. Brīvdienās darbinieks neatpūšas, bet mokās ar bezmiegu un paniku, zinot, ka pirmdienas rītā neatrisināto problēmu lavīna gāzīsies ar dubultu spēku. Patiesas vadītāja rūpes ir nevis tukši vārdi, bet gan <em>reāla uzdevumu noņemšana un termiņu pārcelšana</em> savām rokām.</p><p><strong>Psiholoģiskā drošība un aizspriedumu noņemšana:</strong> Visspēcīgākās pārguruša cilvēka bailes ir par to, ka spēku izsīkuma atzīšana ietekmēs viņa reputāciju, amata līmeni, prēmiju vai noslogos kolēģus. Vadītāja uzdevums ir jau no pirmajām sekundēm kliedēt šīs bailes un parādīt, ka uzņēmums iegulda cilvēku ilgtermiņa noturībā, nevis izsūc resursus īstermiņa sprintos.</p>',
		preparationHtml:
			'<p><strong>1. Objektīvo rādītāju diagnostika pirms sarunas:</strong> Nepaļaujieties uz minējumiem. Apkopojiet faktus par pēdējām 4–6 nedēļām:</p><ul><li><strong>Kods un repozitorijs:</strong> Nakts koda iesūtīšana (pēc plkst. 22:00), komīti brīvdienās, pull request, kas iestrēguši caurskatē ilgāk par 5 dienām, netipiskas kļūmes vienkāršās vietās vai straujš pabeigto uzdevumu skaita kritums.</li><li><strong>Komunikācija:</strong> Sarkasms vai cinisms arhitektūras diskusijās, izslēgta kamera un klusēšana ikdienas sapulcēs, aizkaitināmība uzdevumu sistēmā vai atbilžu kavēšanās ilgāk par 24 stundām vienkāršos jautājumos.</li><li><strong>Operacionālā slodze:</strong> Vairākas on-call dežūras pēc kārtas, nepārtraukta incidentu dzēšana vai vienlaicīga trīs un vairāk nesaistītu projektu vadība.</li></ul><p><strong>2. Vadītāja sagatavošanās (atslodzes bufera sagatavošana):</strong> Nāciet uz sarunu ar <em>gatavu sarakstu ar uzdevumiem, kurus jūs personīgi esat gatavs atcelt, iesaldēt vai pārņemt uzreiz</em>. Izsmelts prāts cieš no lēmumu pieņemšanas noguruma — nelieciet inženierim lūgties atelpu vai pamatot katru biļeti.</p><div class="invite-box"><span class="invite-badge">Uzaicinājuma teksts (ar minimālu kognitīvo slodzi):</span><p class="invite-text">„Sveiks! Pamanīju, ka pēdējās nedēļas ir bijušas ārkārtīgi smagas un slodze bijusi milzīga. Vēlos aprunāties 1 pret 1: nevis sprintu vai atskaišu dēļ, bet vienīgi tāpēc, lai palīdzētu tev atvilkt elpu, nomest lieko balastu un pasargāt spēkus. Sagatavošanās nav vajadzīga, vienkārši nāc ar tēju vai kafiju.”</p></div>',
		agenda: [
			{
				title: '1. bloks: Stāvokļa atzīšana un psiholoģiskā drošība (10 min)',
				durationMinutes: 10,
				description:
					'Spriedzes mazināšana, problēmas atzīšana ar neitrāliem faktiem un beznosacījuma atbalsta sniegšana.',
				questions: [
					'Pamanīju, cik saspringtas bija pēdējās nedēļas: nakts relīzes, incidentu novēršana un spriedze biļetēs. Godīgi sakot: kā tu patiesībā jūties fiziski un emocionāli?',
					'Ja tev vajadzētu novērtēt savu iekšējo bateriju no 1 līdz 10 (kur 1 ir fiziski grūti izkāpt no gultas, bet 10 ir enerģijas pārpilnība), kurā punktā tu esi šobrīd?',
					'Vēlos uzreiz skaidri pateikt: tava veselība un labsajūta man ir pirmajā vietā. Neviena relīze un neviens termiņš nav vērts izdegšanas, un mēs šodien pārkārtosim slodzi.'
				]
			},
			{
				title: '2. bloks: Radikāls uzdevumu triāžs un balasta likvidēšana (15 min)',
				durationMinutes: 15,
				description:
					'Uzdevumu saraksta izlēmīga revīzija: sadalīšana vitāli svarīgajos, deleģējamos un tūlītēji atceļamos uzdevumos.',
				questions: [
					'Atvērsim kopā tavu aktuālo biļešu sarakstu. Ja mēs šobrīd bez jebkādām sekām izdzēstu trīs uzdevumus, ar kuriem tev uzreiz kļūtu vieglāk elpot?',
					'Kādi procesi vai saziņa tev rada vislielāko pretestību (konflikti ar ieinteresētajām pusēm, tukšas sapulces, neskaidras prasības, mantotais kods bez testiem)?',
					'Ko no atlikušā mēs pārcelsim uz nākamo ceturksni, un ko es šodien pats pārņemšu vai nodošu kolēģiem?'
				]
			},
			{
				title: '3. bloks: Aizsardzības robežu un klusuma protokola ieviešana (10 min)',
				durationMinutes: 10,
				description: 'Stingru fizisku un digitālu barjeru izveide, lai apturētu enerģijas noplūdi.',
				questions: [
					'Vai vienojamies par stingru datora aizvēršanas likumu: pēc plkst. 19:00 un visas brīvdienas nekādu Slack paziņojumu, nekādas koda caurskates un neatvērtas e-pasta vēstules?',
					'Vai tev palīdzētu, ja es tevi atbrīvotu no visām vispārējām statusa sapulcēm uz nākamajām divām nedēļām un rezervētu 2–3 pilnas fokusa dienas bez sapulcēm (Focus Days)?',
					'Vai mums vajadzētu tevi nekavējoties noņemt no on-call dežūrām un nodot tās man vai citiem pieredzējušiem kolēģiem?'
				]
			},
			{
				title: '4. bloks: Atjaunošanās plāns un viegls saziņas kanāls (10 min)',
				durationMinutes: 10,
				description:
					'Konkrētu atelpas pasākumu un minimālas piepūles atgriezeniskās saites noteikšana.',
				questions: [
					'Kas šobrīd palīdzētu vislabāk: paņemt 3–4 pilnīgas atslēgšanās dienas, sākot jau no šīs piektdienas, vai pāriet uz atvieglotu sprintu ar 50% kapacitāti, veicot tikai mierīgus uzdevumus bez termiņiem?',
					'Kā es vislabāk varu tevi piesegt citu nodaļu un vadības priekšā, kamēr tu atgūsti līdzsvaru?',
					'Vienosimies par asinhronu luksoforu: reizi divās dienās tu man Slack vienkārši atsūti emocijzīmi (zaļš / dzeltens / sarkans), bez nepieciešamības rakstīt garas atskaites. Sarunāts?'
				]
			}
		],
		antiPatterns: [
			{
				mistake: 'Ieteikums „vienkārši atpūsties brīvdienās”, nesamazinot reālo uzdevumu apjomu',
				whyBad:
					'Ja uzdevumu kalns paliek neskarts, darbinieks pavada brīvdienas trauksmē un pašpārmetumos. Pirmdienā spriedze dubultojas.',
				betterAlternative:
					'Dzēsiet vai pārceliet uzdevumus sistēmā personīgi. Īsta atpūta ir iespējama tikai tad, kad pirmdienā negaida termiņu laika bumba.'
			},
			{
				mistake: 'Atslodzes atbildības uzvelšana uz paša pārgurušā darbinieka pleciem',
				whyBad:
					'Jautājums „Ko tu gribi atdot citiem?” paralizē izsmeltas smadzenes. Vainas apziņas dēļ inženieris atsakās deleģēt uzdevumus.',
				betterAlternative:
					'Piedāvājiet gatavus lēmumus: „Es pārņemu projektu A un iesaldēju iniciatīvu B. Vai ir iebildumi? Lieliski, es to noformēju.”'
			},
			{
				mistake: 'Slēpta atbīdīšana un aizspriedumi aiz labvēlības maskas',
				whyBad:
					'Darbinieka klusa atstādināšana no svarīgiem projektiem bez atklātas sarunas rada paniku: „Mani uzskata par nederīgu un gatavo atlaišanai.”',
				betterAlternative:
					'Runājiet atklāti: apstipriniet inženiera lielo vērtību, paskaidrojiet aizsardzības pasākumu pagaidu raksturu un saskaņojiet katru soli kopā.'
			},
			{
				mistake: 'Atgriešanās pie maksimālā spiediena, tiklīdz pamanīts neliels uzlabojums',
				whyBad:
					'Tiklīdz darbinieks šķiet atpūties, vadītājs atkal uzkrauj degošus uzdevumus. Seko tūlītējs un daudz smagāks izdegšanas recidīvs.',
				betterAlternative:
					'Nervu sistēmas atjaunošanās prasa mēnešus. Palieliniet slodzi ļoti pakāpeniski un saglabājiet aizsargbarjeras vismaz 6–8 nedēļas.'
			}
		],
		followUpHtml:
			'<p><strong>1. Vadītāja piesegums 2 stundu laikā:</strong> Uzņemieties spiedienu uz sevi. Atjauniniet statusus Jira, paziņojiet produktu vadītājiem un ieinteresētajām pusēm par termiņu maiņu un noņemiet komunikācijas nastu no inženiera pleciem.</p><p><strong>2. Klusuma zonas tehniskā iestatīšana 24 stundu laikā:</strong> Izņemiet darbinieku no on-call eskalācijas sarakstiem, noraidiet liekās sapulces viņa vietā un pāradresējiet koda caurskates plūsmas.</p><p><strong>3. Saudzīga asinhrona saziņa pēc 72 stundām:</strong> Nosūtiet īsu personīgu ziņu bez darba jautājumiem: <em>„Sveiks! Tikai gribēju uzzināt, kā šodien jūties. Atceries: nekāda koda un nekāda Slack līdz mūsu norunātajam laikam.”</em></p>',
		tips: [
			'Izdegšanu ārstē bezspēcības un hroniskas pārslodzes novēršana, nevis virspusēji labsajūtas labumi.',
			'Esiet zibensnovedējs: vadītāja galvenais uzdevums krīzē ir uzņemt biznesa spiedienu uz sevi un nodrošināt inženierim drošu patvērumu.',
			'Mieriniet perfekcionismu: palīdziet izcilajiem speciālistiem samazināt latiņu no „nevainojama arhitektūra” uz „šim posmam pietiekami labi”.',
			'Negaidiet palīgā saucienus: kad izsmelts inženieris saņemas lūgt palīdzību, viņš jau parasti ir soli no aiziešanas.'
		],
		keyTakeaway:
			'Izdegšana ir darba sistēmas bojājums, nevis cilvēka nepilnība. Pasargāt savus vadošos inženierus no sistēmiskas izdegšanas ir vadītāja brieduma un cilvēcības augstākais pārbaudījums.'
	},
	{
		slug: 'skip-level',
		title: 'Skip-Level 1 pret 1: Organizācijas veselības diagnostika bez filtriem',
		subtitle:
			'Augstas atdeves stratēģisks dialogs starp augstākā līmeņa inženierijas vadību (VP/CTO/direktors) un vadošajiem inženieriem: stratēģijas validācija, sistēmisko šķēršļu novēršana un kultūras kalibrēšana.',
		category: 'leadership',
		readTime: '5 min lasīšana',
		cadence: 'Reizi ceturksnī vai pusgadā ar vadošajiem inženieriem un komandām',
		duration: '30–45 minūtes',
		targetAudience:
			'VP of Engineering / CTO / tehniskais direktors un izstrādātājs (Senior / Staff / Lead)',
		summaryHtml:
			'Skip-level tikšanās ir viens no ietekmīgākajiem vadības instrumentiem augstākā līmeņa inženierijas vadītājiem. Tās mērķis ir pārvarēt vidējā līmeņa korporatīvo deformācijas filtru, uzklausīt patieso un nefiltrēto realitāti par kodu bāzi un procesiem, pārbaudīt, vai stratēģiskais redzējums patiešām atbalsojas ikdienas sprintos, un nojaukt sistēmiskos šķēršļus, kurus tiešie komandu vadītāji nespēj atrisināt vienatnē.',
		whyItMattersHtml:
			'<p><strong>Signāla kropļošanās pa vadības līmeņiem:</strong> Augošās inženieru organizācijās sliktās ziņas, ceļojot augšup, neizbēgami tiek nogludinātas. Vidējā līmeņa vadītāji zemapziņā mīkstina problēmas, lai demonstrētu, ka "viss tiek kontrolēts". Rezultātā vadība par arhitektūras strupceļiem, vadošo speciālistu aiziešanu vai CI testu degradāciju uzzina tikai tad, kad kavējas nozīmīgs laidums vai avarē produkcijas vide. Skip-level sniedz nesaudzīgu un tiešu faktu ainu.</p><p><strong>Komandas vadītāja autoritātes stiprināšana, nevis graušana:</strong> Bīstamākā skip-level kļūda ir sarunas pārvēršana slepenā kompromāta vākšanā par tiešo vadītāju. Ja inženieris nojauš, ka vadība "rok bedri viņa vadītājam", psiholoģiskā drošība sabrūk acumirklī. Prasmīgi vadītāji pozicionē šo tikšanos kā <em>sistēmas, instrumentu un organizatorisko robežu</em> auditu, nevis personību vērtēšanu: "Mans uzdevums ir novērst šķēršļus, ar kuriem tavs vadītājs nevar tikt galā viens pats".</p><p><strong>Starpkomandu izolācija un berze (Silos):</strong> Ikdienas izstrādātāji pirmie pamana starpkomandu sadarbības vājos posmus: nedēļām ilgu gaidīšanu uz platformas komandu, pretrunīgas produktu prasības vai drošības nodaļas birokrātiju. Komandas sprinta ietvaros tie šķiet sīkumi; visas organizācijas mērogā tie izšķērdē miljoniem vērtu inženieru laiku.</p><p><strong>Stratēģiskā saskaņotība un talantu noturēšana:</strong> Inženierim skip-level ir reta izdevība uzdot tiešus un izaicinošus jautājumus uzņēmuma stratēģijas autoriem un saprast, kā viņa pull request ietekmē uzņēmuma konkurētspēju tirgū. Tas ir spēcīgs Senior un Staff inženieru noturēšanas rīks.</p>',
		preparationHtml:
			'<p><strong>1. Saskaņojiet ar tiešo komandas vadītāju (Lead):</strong> Nekad nerīkojiet skip-level aiz vadītāja muguras. Brīdiniet viņu laikus, lai novērstu teritoriālu trauksmi vai greizsirdību: <em>"Šajā ceturksnī es plānoju regulāras skip-level sarunas ar tavas komandas izstrādātājiem. Mērķis ir izvērtēt stratēģisko skaidrību un infrastruktūru, nevis vērtēt tavu vadības stilu. Dod ziņu, ja ir kādas sistēmiskas tēmas, kurām vērts pievērst uzmanību."</em></p><p><strong>2. Nosūtiet nomierinošu ielūgumu 5 dienas iepriekš:</strong> Rindas inženieris bieži izjūt paniku, ieraugot kalendāra uzaicinājumu no CTO vai VP ("Vai mani atlaidīs?" vai "Vai es salauzu produkcijas vidi?"). Kliedējiet šīs bažas jau uzaicinājuma tekstā:</p><div class="invite-box"><span class="invite-badge">Skip-Level kalendāra ielūguma paraugs:</span><p class="invite-text">"Sveiks! Šī ir mūsu parastā ceturkšņa skip-level saruna. Vēlos uzreiz precizēt: šis nav tavu darba rezultātu novērtējums un ne biļešu audits. Man ir svarīgi uzklausīt tavu atklāto viedokli: kas mūsu procesos un rīkos darbojas lieliski, kur procesi buksē, vai stratēģija ir skaidra ikdienā un kā vadība var palīdzēt tavai komandai strādāt mierīgāk un produktīvāk. Nekāda iepriekšēja gatavošanās nav nepieciešama — vienkārši iedzersim kafiju un atklāti parunāsim."</p></div><p><strong>3. Izpētiet objektīvo kontekstu (5 minūtes pirms sarunas):</strong> Apskatiet, par kādiem servisiem inženieris ir atbildīgs, kādos nesenos incidentos vai arhitektūras diskusijās viņš piedalījies un cik ilgi strādā uzņēmumā.</p>',
		agenda: [
			{
				title: '1. bloks: Psiholoģiskā atslābināšanās un konteksta ierobežošana (5–7 min)',
				durationMinutes: 7,
				description: 'Nodrošināt augstu psiholoģisko drošību un precīzu sarunas rāmi.',
				questions: [
					'Liels paldies par tavu laiku! Vēlos atgādināt: mana loma šodien ir 80% laika klausīties. Mēs neanalizējam biļetes un nemeklējam vainīgos. Kā tev klājas personīgi un kā pagājusi šī nedēļa?',
					'Kura tavas ikdienas inženiertehniskā darba daļa šobrīd sniedz vislielāko gandarījumu un plūsmu, un kas rada vislielāko vilšanos?',
					'Vai jūti, ka tev ir nepieciešamie rīki, autonomija un darba vide, lai šeit veiktu savas karjeras labāko tehnisko darbu?'
				]
			},
			{
				title: '2. bloks: Stratēģiskā saskaņotība un produkta realitāte (12 min)',
				durationMinutes: 12,
				description:
					'Pārbaudīt, vai vadības stratēģiskais virziens pārtop loģiskos ikdienas lēmumos.',
				questions: [
					'Cik skaidrs un pārliecinošs tev šķiet mūsu gada tehniskais un biznesa ceļvedis? Ja jaunpienācējs tev pajautātu, kā tu raksturotu mūsu galveno mērķi?',
					'Kādas vadības tēzes no uzņēmuma kopsapulcēm tev šķiet visvairāk atrautas no inženieru ikdienas realitātes?',
					'Vai tev ir skaidrs, kā arhitektūras lēmumi tavos servisos tieši ietekmē klientu pieredzi un uzņēmuma ieņēmumus?'
				]
			},
			{
				title: '3. bloks: Sistēmiskie šķēršļi, rīki un starpkomandu berze (15 min)',
				durationMinutes: 15,
				description:
					'Identificēt dziļus strukturālus kavēkļus, kuru risināšanai nepieciešama augstākās vadības iesaiste.',
				questions: [
					'Kura mūsu tehniskās infrastruktūras daļa (CI/CD ilgums, nestabili testi, staging vides, uzkrātais tehniskais parāds) atņem visvairāk laika un enerģijas tavai komandai?',
					'Kā veicas sadarbība ar blakus komandām (Platforma, Drošība, Dati, Infrastruktūra)? Kur jūs saskaraties ar birokrātiju vai vairāku dienu dīkstāvēm?',
					'Ja tu uz vienu nedēļu kļūtu par CTO ar pilnām pilnvarām, kādu organizatorisko noteikumu vai arhitektūras ierobežojumu tu atceltu nekavējoties?'
				]
			},
			{
				title: '4. bloks: Sintēze un vadības atbildība (8 min)',
				durationMinutes: 8,
				description:
					'Apkopot secinājumus, atkārtot konfidencialitāti un vienoties par konkrētiem vadības soļiem.',
				questions: [
					'No visa, ko šodien pārrunājām, kas ir viena augstākās prioritātes problēma organizācijas līmenī, kura visvairāk kavē tavu komandu?',
					'Vai ir kāda svarīga tēma, ko es šodien nepajautāju, bet kuru uzņēmuma vadībai būtu kritiski svarīgi zināt?',
					'Vienojāmies: es personīgi uzņemos šo infrastruktūras šķērsli un nedēļas laikā sniegšu tev konkrētu atbildi par tālāko virzību.'
				]
			}
		],
		antiPatterns: [
			{
				mistake:
					'Pārvēršanās slēptā izmeklēšanā par komandas vadītāju ("Kā tavs vadītājs pret tevi izturas?")',
				whyBad:
					'Nostāda inženieri nepatīkamā nodevības situācijā vai liek noslēgties aizsardzības klusumā. Sēj politisku paranoju un aizdomas visā organizācijā.',
				betterAlternative:
					'Koncentrējieties tikai uz sistēmām, arhitektūru un komandu sadarbību. Ja darbinieks pats sāk sūdzēties par vadītāju, virziet to konstruktīvi: "Vai esi par šo atklāti runājis jūsu 1 pret 1 sarunās?"'
			},
			{
				mistake: 'Operatīvu solījumu došana "pāri tiešā vadītāja galvai"',
				whyBad:
					'Tehniskā ceļveža atcelšana vai uzdevumu pārdale skip-level laikā iznīcina tiešā vadītāja autoritāti un rada operatīvu haosu.',
				betterAlternative:
					'Nekad nedodiet operatīvus solījumus bez tiešā vadītāja. Piefiksējiet bažas un pārrunājiet tās ar vadītāju atsevišķi: "Tavs inženieris norādīja uz sistēmisku problēmu — izdomāsim kopā, kā to atrisināt."'
			},
			{
				mistake:
					'"Atgriezeniskās saites melnais caurums": atklātas kritikas uzklausīšana bez jebkādas redzamas rīcības',
				whyBad:
					'Ja inženieri drosmīgi norāda uz sistēmiskām problēmām (piemēram, bojātām testu vidēm) un līdz nākamajam ceturksnim nekas nemainās, viņi secina, ka vadībai ir vienalga un runāt nav jēgas.',
				betterAlternative:
					'Izvēlieties ne vairāk kā 1–2 sistēmiskas problēmas, bet sasniedziet reālu progresu. Pat paskaidrojums "mēs izpētījām un šajā ceturksnī nevaram to pārrakstīt iemesla X dēļ" vairo uzticību.'
			},
			{
				mistake: 'Skip-level rīkošana tikai kā ārkārtas pasākums krīzes brīžos',
				whyBad:
					'Ja vadītājs aicina uz 1 pret 1 sarunu tikai tad, kad projekts deg vai darbinieki masveidā aiziet, tikšanās tiek uztverta kā biedējošs soda audits.',
				betterAlternative:
					'Ieviesiet skip-level kā paredzamu, regulāru organizācijas higiēnas ieradumu mierīgas darbības laikā.'
			}
		],
		followUpHtml:
			'<p><strong>1. Kopsakarību analīze 24 stundu laikā:</strong> Fiksējiet secinājumus privātās vadītāja piezīmēs. Salīdziniet ar citām skip-level sarunām: ja trīs inženieri no dažādām komandām sūdzas par vienu un to pašu šķērsli (piemēram, 6 dienu gaidīšanu uz drošības pārbaudi), tā ir sistēmiska institucionāla problēma.</p><p><strong>2. Saskaņošana ar komandas vadītāju 48 stundu laikā:</strong> Pārrunājiet sistēmiskos secinājumus ar vadītāju, neizpaužot konfidenciālus citātus un neizvirzot apsūdzības: <em>"Komandā ir liels pieprasījums pēc CI/CD optimizācijas. Padomāsim, kā platformas komanda varētu sniegt jums atbalstu."</em></p><p><strong>3. Atgriezeniskās saites cikla noslēgšana 7 dienu laikā (Closing the Loop):</strong> Nosūtiet inženierim īsu personisku ziņu: <em>"Sveiks! Atsaucoties uz mūsu sarunu par staging vides aizturi: esam norīkojuši divus infrastruktūras inženierus konveijeru pārveidei. Paldies par atklātību!"</em></p>',
		tips: [
			'Klausieties 80% laika, runājiet 20%: augstākā vadītāja uzdevums skip-level sarunā ir uzsūkt realitāti, nevis lasīt lekcijas par uzņēmuma vīziju.',
			'Meklējiet tendences, nevis atsevišķas sūdzības: viens viedoklis var būt subjektīvs; trīs sakrītoši viedokļi ir sistēmiska diagnoze.',
			'Novērtējiet neērtu patiesību: kad inženieris apstrīd vadības pieņēmumus, sirsnīgi pasakieties — tas veido veselīgu inženierijas kultūru.',
			'Nekad nesoliet neiespējamo: esiet godīgi par biznesa kompromisiem, ja prasību nevar prioritizēt uzreiz.'
		],
		keyTakeaway:
			'Skip-level mērķis nav kontrolēt vadītājus, bet gan ieviest stratēģisku skaidrību un novērst organizatorisko berzi. Spēcīga inženierijas kultūra uzplaukst tad, kad vadība ieklausās tieši tajos, kuru rokas būvē nākotni.'
	},
	{
		slug: 'manager-playbook',
		title: 'Vadītāja rokasgrāmata: Augstas ietekmes 1 pret 1 sarunas',
		subtitle:
			'Domāšanas maiņa, 15 minūšu sagatavošanās kontrolsaraksts, aktīvā klausīšanās, SBI modelis un patiess atbalsts.',
		category: 'leadership',
		readTime: '8 min lasīšanai',
		cadence: 'Divu nedēļu rutīna (regulārs sagatavošanās un sarunu ieradums)',
		duration: '30–45 minūtes',
		targetAudience: 'Jaunie komandu vadītāji, inženieru vadītāji un direktori',
		summaryHtml:
			'Galvenais praktiskais ceļvedis tehnoloģiju komandu vadītājiem. Pārejiet no statusa uzrauga uz komandas multiplikatoru, apgūstot aktīvo klausīšanos, konteksta analīzi pirms sarunas, SBI konstruktīvo atgriezenisko saiti un 24 stundu ātros atrisinājumus.',
		whyItMattersHtml:
			'<p><strong>No uzrauga par multiplikatoru:</strong> Ja nesen kļuvāt par vadītāju, lielākais kārdinājums ir izmantot 1 pret 1 sarunas, lai uzzinātu uzdevumu statusus. Pretojieties šim impulsam. Statusus skatās Jira vai GitHub; 1 pret 1 saruna ir veltīta tikai enerģijai, sistēmiskiem šķēršļiem un attīstības virzienam.</p><p><strong>Endija Grova sviras formula:</strong> Grāmatā <em>High Output Management</em> Endijs Grovs aprēķināja, ka 90 minūtes pārdomātas 1 pret 1 sarunas uzlabo inženiera darba kvalitāti un motivāciju par 80 stundām starp sarunu cikliem (>50x laika atdeve). Vadītāja mērķis nav kontrole, bet gan visu šķēršļu novēršana, kas kavē komandas potenciālu.</p><p><strong>80/20 klausīšanās proporcija:</strong> Ja vadītājs runā 70 % laika, tā ir lekcija, nevis sadarbība. Darbiniekam jārunā aptuveni 80 % sarunas laika. Vadītāja instrumenti ir atvērti jautājumi, apzināta pauze un piezīmju veikšana.</p><p><strong>Pēctecība un uzticība:</strong> Solījumi, kas doti sarunā un aizmirsti līdz pirmdienai, rada cinismu. Uzticība rodas tad, kad vienošanās pāriet no cikla uz ciklu un tiek izsekotas līdz pilnīgai izpildei.</p>',
		preparationHtml:
			'<p><strong>1. solis: Konteksta izvērtēšana (10–15 min pirms):</strong> Novērtējiet objektīvos faktorus bez mikromenedžmenta. Vai koda recenzija (PR) stāvēja 5 dienas? Vai bija novērojami nakts komiti (pēc 22:00) vai darbs brīvdienās? Vai bija smagas dežūras? Izmantojiet faktus empātijai, nevis pārmetumiem.</p><p><strong>2. solis: Darbplūsma encrypted1on1 vidē:</strong><br>1. <em>Apskatiet tendences:</em> Atveriet anketu un novērtējiet noskaņojuma un darba slodzes dinamiku.<br>2. <em>Vispirms izlasiet darbinieka atbildes:</em> Pievērsiet uzmanību sajūtu birkām, punktiem sadaļā «Kas ir sarežģītāk, nekā vajadzētu» un pārrunājamajām tēmām.<br>3. <em>Aizpildiet vadītāja pusi:</em> Sniedziet objektīvu atgriezenisko saiti, piedāvājiet skaidru palīdzību un izceliet vismaz vienu sasniegumu, ko pamanījāt personīgi.<br>4. <em>Publicējiet savu pusi:</em> Abas puses kļūst redzamas reizē pirms sarunas sākuma.<br>5. <em>Privātās piezīmes:</em> Izmantojiet šifrēto privāto piezīmju paneli koučinga norādēm, konfidenciālam kontekstam un atalgojuma plāniem, kas citiem nav pieejami.</p>',
		agenda: [
			{
				title: '1. balsts: Enerģijas pulss un cilvēciskais kontakts (5–7 min)',
				durationMinutes: 7,
				description: 'Baterijas līmeņa un emocionālā fona novērtējums pirms darba tēmām.',
				questions: [
					'Kāds šajā sprintā bija tavs enerģijas līmenis skalā no 1 līdz 5? Kas deva spēku un kas visvairāk iztukšoja?',
					'Kāds uzdevums radīja sajūtu par patiesu progresu un kāds šķita bezjēdzīga birokrātija?'
				]
			},
			{
				title: '2. balsts: Šķēršļi un sistēmiskā berze (15 min)',
				durationMinutes: 15,
				description: 'Sastrēguma punktu noteikšana procesos, kas bremzē komandas darba ātrumu.',
				questions: [
					'Ja tev būtu burvju nūjiņa un iespēja atcelt vienu šīs nedēļas rīku, procesu vai sanāksmi — kas tas būtu?',
					'Kurā vietā šobrīd iestrēgst darbs starp mums un blakus komandām?',
					'Vai mūsu koda bāzē vai infrastruktūrā ir kāda daļa, kurai komanda baidās pieskarties?'
				]
			},
			{
				title: '3. balsts: Stratēģiskā skaidrība un konteksts (10 min)',
				durationMinutes: 10,
				description: 'Ikdienas izstrādes sasaiste ar produkta mērķiem un jēgu.',
				questions: [
					'Vai tev ir skaidrs, kāpēc šī sprinta mērķis ir nozīmīgs visam uzņēmumam, vai arī ir sajūta par darbu tumsā?',
					'Vai pēdējā laikā ir bijuši vadības lēmumi, kas šķita mulsinoši vai nesaprotami?'
				]
			},
			{
				title: '4. balsts: Konstruktīva SBI atgriezeniskā saite un vienošanās (10 min)',
				durationMinutes: 10,
				description: 'Konkrēti uzvedības novērojumi un abpusēju soļu fiksēšana.',
				questions: [
					'Pēc SBI modeļa (Situācija–Uzvedība–Ietekme): kādu konkrētu rīcību mums vajadzētu pielāgot nākotnē?',
					'Ko man kā vadītājam vajadzētu sākt, pārtraukt vai turpināt darīt, lai labāk tevi atbalstītu?',
					'Kuras 1–2 saistības mēs fiksējam Vienošanos sadaļā nākamajam ciklam?'
				]
			}
		],
		antiPatterns: [
			{
				mistake: '«Man nekā nav, tev nekā nav — atceļam»',
				whyBad:
					'Iznīcina psiholoģiskās drošības ieradumu. Problēmas briest klusumā, līdz tiek iesniegts negaidīts atlūgums.',
				betterAlternative:
					'Ja nav degošu uzdevumu, pievērsieties karjeras attīstībai, tehniskajam parādam vai koučingam.'
			},
			{
				mistake: 'Pazūdošais vadītājs (Aizmirsti solījumi)',
				whyBad:
					'Darbinieks saprot, ka vadītāja vārdiem nav svara, un pārstāj stāstīt par sarežģījumiem.',
				betterAlternative:
					'Fiksējiet apņemšanās Vienošanās sadaļā. encrypted1on1 automātiski pārnes atvērtos punktus uz nākamo ciklu.'
			},
			{
				mistake: '1 pret 1 sarunas videoieraksts',
				whyBad:
					'Ieslēdz tūlītēju pašcenzūru. Neviens nedalās atklātās pārdomās, ja deg ieraksta indikators.',
				betterAlternative:
					'Nekad neierakstiet 1 pret 1 sarunas. Paļaujieties tikai uz klienta pusē šifrētām piezīmēm encrypted1on1 platformā.'
			},
			{
				mistake: 'Pārsteidzīgi solījumi par amatu vai algas pieaugumu',
				whyBad:
					'Solīt amatu vai algu pirms saskaņošanas ar vadību sagrauj jūsu autoritāti atteikuma gadījumā.',
				betterAlternative:
					'Kopīgi izejiet cauri kompetenču matricai, atklāti iezīmējiet trūkumus un apsoliet caurskatāmu interešu aizstāvību.'
			}
		],
		followUpHtml:
			'<p><strong>1. Piefiksējiet 1–3 Vienošanās:</strong> Ievadiet soļus Vienošanos blokā. Tās ir taktiskas viena cikla apņemšanās ar skaidru atbildīgo.</p><p><strong>2. Atjauniniet Mērķus:</strong> Pievienojiet statusa kontrolpunktu («Pēc plāna», «Apdraudēts», «Bloķēts») vidēja termiņa mērķiem.</p><p><strong>3. Nodrošiniet ātru uzvaru 24 stundās:</strong> Izvēlieties vienu darbinieka minēto šķērsli (piekļuve, licence, atbrīvošana no nevajadzīgas sanāksmes) un atrisiniet to 24 stundu laikā. Tas rada tūlītēju uzticību formātam.</p><p><strong>4. Arhivējiet ciklu:</strong> Nospiediet «Arhivēt», lai izveidotu nākamā cikla anketu un automātiski pārnestu neizpildītās vienošanās un mērķus.</p>',
		tips: [
			'Ieturiet 5 līdz 7 sekunžu pauzi: kad sarunu biedrs pabeidz teikumu, nogaidiet pirms atbildat — būtiskākais izskan pauzē.',
			'80/20 likums: darbinieks runā 80 % laika, vadītājs klausās un precizē 20 % laika.',
			'Sniedziet taustāmu atrisinājumu 24 stundu laikā, lai apliecinātu sarunas praktisko jēgu.',
			'Formulējiet kritisku atgriezenisko saiti pēc SBI modeļa (Situācija, Uzvedība, Ietekme), nevis kā personības vērtējumus.'
		],
		keyTakeaway:
			'Vadītāja rezultāts ir komandas rezultāts. Jūsu loma nav uzraudzīt darbu, bet gan noņemt visus šķēršļus, lai komanda varētu sasniegt savu augstāko potenciālu.'
	},
	{
		slug: 'employee-playbook',
		title: 'Darbinieka rokasgrāmata: Pārņemiet iniciatīvu 1 pret 1 sarunās',
		subtitle:
			'Kā inženieriem, dizaineriem un komandas dalībniekiem pārvarēt uztraukumu, vadīt darba kārtību un virzīt savu karjeru.',
		category: 'foundations',
		readTime: '7 min lasīšanai',
		cadence: 'Nepārtraukta asinhrona fiksēšana + divu nedēļu saruna',
		duration: '30–45 minūtes',
		targetAudience: 'Programmatūras inženieri, dizaineri un komandas dalībnieki',
		summaryHtml:
			'1 pret 1 saruna pieder jums, nevis jūsu vadītājam. Uzziniet, kā regulāras tikšanās pārvērst par spēcīgāko karjeras un labsajūtas sviru: sasniegumu reģistrēšana, konstruktīva problēmu pieteikšana, atalgojuma sarunas bez neērtībām un atgriezeniskās saites pieņemšana.',
		whyItMattersHtml:
			'<p><strong>Šī saruna pieder jums:</strong> Jūsu vadītājam ir sprinta plānošanas, standup un arhitektūras sanāksmes, lai apspriestu uzņēmuma projektus. Šis 30–45 minūšu laiks kalendārā ir vienīgais, kas paredzēts tikai jūsu vajadzībām, izaicinājumiem un izaugsmei.</p><p><strong>Kas 1 pret 1 saruna NAV:</strong> Tā nav slēpta atestācija, nav atskaitīšanās par Jira biļetēm un nav slazds. Atzīt, ka uzdevums ir sarežģīts vai ka esat pārslogots, ir profesionāla brieduma pazīme, nevis vājums.</p><p><strong>Kas 1 pret 1 saruna IR:</strong> Tas ir jūsu personīgais šķēršļu novēršanas dzinējs, jūsu karjeras stūre un drošības vārsts pret izdegšanu.</p><p><strong>Klusēšanas cena:</strong> Vadītāji nelasa domas. Ja klusējot strādāsiet 12 stundas dienā, lai kompensētu problēmas ar rīkiem vai neskaidrām prasībām, vadība pieņems, ka viss ir kārtībā, un uzliks vēl vairāk darba. Savlaicīga robežu noteikšana aizsargā jūsu fokusu.</p>',
		preparationHtml:
			'<p><strong>1. solis: Piezīmju veikšana starp sarunām:</strong> Necentieties atcerēties divu nedēļu darbu 5 minūtes pirms zvana. Izmantojiet encrypted1on1 visā sprinta laikā:<br>• <em>Izaugsme:</em> Apguvāt noderīgu atkļūdošanas paņēmienu vai izlasījāt labu arhitektūras dokumentu? Nospiediet «Pievienot ierakstu».<br>• <em>Sasniegumi:</em> Pabeidzāt sarežģītu funkcionalitāti, novērsāt kļūdu vai palīdzējāt kolēģim? Pierakstiet uzreiz.<br>• <em>Pārrunāt:</em> Pierakstiet jautājumus brīdī, kad tie rodas nedēļas laikā.</p><p><strong>2. solis: 5 minūšu sagatavošanās (24h pirms):</strong><br>1. Izvēlieties Noskaņojumu un atzīmējiet sajūtu birkas (nemierīgs, pārslogots, motivēts, mierīgs).<br>2. Novērtējiet Slodzi (Pārāk liela, Tieši laikā, Pārāk maza).<br>3. Aizpildiet lauku «Kas ir sarežģītāk, nekā vajadzētu» (Berze) — atzīmējiet lēnu koda būvēšanu vai piekļuves trūkumu.<br>4. Nospiediet «Publicēt», lai vadītājam būtu laiks sagatavoties atbalstam.<br>5. Lietojiet privātās piezīmes personiskiem atgādinājumiem, kas nav redzami vadītājam un administratoriem.</p>',
		agenda: [
			{
				title: '1. balsts: Baterijas līmenis un slodzes realitāte (5 min)',
				durationMinutes: 5,
				description: 'Signāls par jūsu kapacitāti, stresa līmeni un emocionālo stāvokli.',
				questions: [
					'Mana slodze pašlaik šķiet smaga / sabalansēta / viegla — lūk, kā šis temps ietekmē manu dziļā darba fokusu.',
					'Es anketā atzīmēju šīs sajūtu birkas: lūk, kāds konteksts ir aiz tām.'
				]
			},
			{
				title: '2. balsts: Berze un šķēršļu novēršana: Problēma + Ietekme + Priekšlikums (15 min)',
				durationMinutes: 15,
				description: 'Konstruktīva grūtību pasniegšana pēc trīs soļu metodes.',
				questions: [
					'Problēma: Mūsu testa vide šajā sprintā nokrita 3 reizes laidiena testēšanas laikā.',
					'Ietekme: Tas aizkavēja kvalitātes pārbaudi un radīja stresu visai komandai.',
					'Priekšlikums: Vai nākamajā sprintā varam veltīt 2 dienas testa vides automatizācijai? Man nepieciešams tavs atbalsts prioritātes saskaņošanai ar produkta vadītāju.'
				]
			},
			{
				title: '3. balsts: Karjeras virziens un kompetenču līmeņi (15 min)',
				durationMinutes: 15,
				description: 'Pārrunājiet izaugsmi, prasmes un nākamā līmeņa prasības bez neērtībām.',
				questions: [
					'Vēlos izprast atšķirību starp maniem pašreizējiem rezultātiem un Senior inženiera prasībām — vai varam kopīgi pārskatīt matricu?',
					'Mans mērķis šim gadam ir padziļināt prasmes sistēmu arhitektūrā: kura no gaidāmajām iniciatīvām būtu labs izaicinājums?',
					'Kuru jomu manās tehniskajās vai komunikācijas prasmēs tu ieteiktu uzlabot vispirms?'
				]
			},
			{
				title: '4. balsts: Abpusējās vienošanās (10 min)',
				durationMinutes: 10,
				description: 'Konkrētu soļu fiksēšana gan sev, gan savam vadītājam.',
				questions: [
					'Vai varam piefiksēt šos 2 punktus Vienošanos sadaļā?',
					'Vadītāja solis: Pārrunāt ar infrastruktūras komandu CI testa darbinātāju kapacitāti.',
					'Mans solis: Sagatavot datubāzes savienojumu pūla RFC priekšlikumu līdz piektdienai.'
				]
			}
		],
		antiPatterns: [
			{
				mistake: 'Klusējošais moceklis (Ciešanas klusumā)',
				whyBad:
					'Pārslodzes noklusēšana noved pie hroniska noguruma, kļūdām un aiziešanas, nedodot vadītājam iespēju palīdzēt.',
				betterAlternative:
					'Sakiet atklāti: «Mana slodze šobrīd nav ilgtspējīga. Izlemsim kopā, ko varam atlikt, deleģēt vai atcelt».'
			},
			{
				mistake: 'Anketas aizpildīšana 5 minūtes pirms sarunas',
				whyBad: 'Steiga pārvērš tikšanos par virspusēju statusa pārskatu bez reāliem risinājumiem.',
				betterAlternative:
					'Fiksējiet sasniegumus un šķēršļus pakāpeniski sprinta laikā encrypted1on1 vidē.'
			},
			{
				mistake: 'Vispārīgas sūdzības bez ietekmes un risinājuma',
				whyBad:
					'Apgalvojumi, ka «viss ir slikti», bez konkrētiem faktiem liedz vadītājam iespēju jūs aizstāvēt.',
				betterAlternative:
					'Lietojiet Problēma + Ietekme + Priekšlikums: nosauciet faktu, parādiet cenu komandai un piedāvājiet variantu.'
			},
			{
				mistake: 'Negaidīts algas ultimāts',
				whyBad:
					'Tūlītēja 20 % pielikuma pieprasīšana nostāda vadītāju aizsardzības pozīcijā un reti vainagojas panākumiem.',
				betterAlternative:
					'Balstieties uz kompetenču matricu, sasniegtajiem mērķiem un paredzētajiem pārskatīšanas periodiem.'
			}
		],
		followUpHtml:
			'<p><strong>1. Izpildiet vienošanās sprinta gaitā:</strong> Atzīmējiet pabeigtos uzdevumus tieši atvērtajā anketā. Jūs atbildat par saviem punktiem, vadītājs — par savējiem.</p><p><strong>2. Eksportējiet perioda pārskatu pirms ikgadējā novērtējuma:</strong> Novērtēšanas laikā atveriet sadaļu <strong>Pārskats</strong> encrypted1on1 sistēmā. Atšifrējiet pārbaudītu sasniegumu, atziņu un mērķu žurnālu par pēdējiem 6 mēnešiem sagatavotā Markdown dokumentā. Jums nekad vairs nebūs jāatceras savi nopelni no galvas.</p>',
		tips: [
			'Vienmēr izmantojiet formulu Problēma + Ietekme + Priekšlikums, piesakot rīku vai procesu berzi.',
			'Atgriezeniskās saites pieņemšanas protokols: elpojiet, klausieties, lai saprastu, pasakiet paldies un vienojieties par soļiem.',
			'Izmantojiet privātās piezīmes melnrakstiem, algas mērķiem vai personiskām atziņām.',
			'Savlaicīga robežu novilkšana un atbalsta lūgšana ir pieredzējuša profesionāļa brieduma apliecinājums.'
		],
		keyTakeaway:
			'1 pret 1 ir jūsu saruna. Kad pārņemat iniciatīvu — reģistrējot panākumus, izgaismojot šķēršļus un prasot atbalstu —, jūs paši vadāt savas karjeras virzību.'
	},
	{
		slug: 'handling-difficult-situations',
		title: 'Sarežģītu situāciju risināšana: Scenāriji kritiskiem 1 pret 1 brīžiem',
		subtitle:
			'Pārbaudīti sarunu scenāriji un psiholoģiskie ietvari spriedzes, asaru, kritiskas atgriezeniskās saites un ultimātu risināšanai.',
		category: 'difficult',
		readTime: '9 min lasīšanai',
		cadence: 'Situatīvs / Krīzes un paaugstinātas spriedzes brīži',
		duration: '30–60 minūtes',
		targetAudience: 'Vadītāji un darbinieki emocionālu un organizatorisku beržu brīžos',
		summaryHtml:
			'Kad 1 pret 1 sarunas kļūst sarežģītas, standarta padomi nedarbojas. Praktisks ceļvedis ar pārbaudītiem scenārijiem sešām kritiskām situācijām: «viss kārtībā» siena, kritiska snieguma atgriezeniskā saite, asaras un emocionāls pārgurums, pēkšņas algas prasības, mikromenedžmenta pārmetumi un cinisms pret uzņēmuma stratēģiju.',
		whyItMattersHtml:
			'<p><strong>Līderības patiesais pārbaudījums:</strong> Vadīt 1 pret 1 sarunu ir vienkārši, kad sprinti norit gludi un darbinieki ir apmierināti. Vadītāja patiesais briedums atklājas saspringtos brīžos: kad darbinieks noslēdzas, nespēj valdīt asaras vai kad nepieciešams sniegt stingru atgriezenisko saiti.</p><p><strong>Psiholoģiskā drošība spriedzes apstākļos:</strong> Saspringtos brīžos dabiska cilvēciska reakcija ir aizsardzība, vainošana vai izvairīšanās. Ja vadītājs pakļaujas panikai, uzticība zūd. Krīžu pārvarēšanai nepieciešama dziļa empātija, balstīšanās faktos un prasme noturēt pauzi.</p><p><strong>Konfidencialitāte kā drošības osta:</strong> Atklātība nav iespējama bez garantētas privātuma aizsardzības. Sarežģītas sarunas nedrīkst ierakstīt, un piezīmēm jāpaliek šifrētām jūsu iekārtā.</p>',
		preparationHtml:
			'<p><strong>Sagatavošanās saspringtai sarunai:</strong><br>1. <em>Pārbaudiet dinamiku un sajūtu birkas:</em> Analizējiet iepriekšējo ciklu rādītājus, lai atšķirtu īslaicīgu nogurumu no hroniskas izdegšanas.<br>2. <em>Balstieties uz novērojamiem faktiem:</em> Nošķiriet konkrētu rīcību no personiskiem spriedumiem. Pierakstiet datumus, PR un faktus.<br>3. <em>Sagatavojiet privātās piezīmes:</em> Izmantojiet privāto piezīmju paneli encrypted1on1 vidē sarunas punktiem. Nekad nedalieties ar šīm piezīmēm.<br>4. <em>Ieplānojiet laika rezervi:</em> Atstājiet vismaz 15 minūtes brīva laika pēc sarunas, lai nevajadzētu pēkšņi pārtraukt emocionāli jutīgu dialogu.</p>',
		agenda: [
			{
				title: '1. scenārijs: Siena «Viss kārtībā» (10 min)',
				durationMinutes: 10,
				description:
					'Kā rīkoties ar vienzilbīgām atbildēm, kad progress un enerģija acīmredzami krītas.',
				questions: [
					'Scenārijs: «Es dzirdu, ka saki — viss ir kārtībā. Taču pēdējās divās nedēļās pamanīju, ka ikdienas sanāksmēs esi klusāks un autorizācijas servisa uzdevums virzās neierasti smagi».',
					'Scenārijs: «Es to nepieminu, lai tevi vērtētu. Mans mērķis ir pasargāt tavu darba tempu. Kad iestājas šāds klusums, tas parasti liecina par slēptu šķērsli vai pārslodzi».',
					'Scenārijs: «Kas šajā sprintā paņēma visvairāk spēku? (Un ieturiet 7 sekunžu pilnīgu klusumu)».'
				]
			},
			{
				title: '2. scenārijs: Kritiska atgriezeniskā saite par darba kvalitāti (15 min)',
				durationMinutes: 15,
				description: 'Asas komunikācijas vai kvalitātes krituma risināšana pēc SBI modeļa.',
				questions: [
					'Situācija: «Otrdien koda recenzijas laikā pie maksājumu vārtejas koda...»',
					"Uzvedība: «...kad Džordans jautāja par rezerves loģiku, tava atbilde bija: 'Izlasi dokumentāciju, man nav laika skaidrot pamatus'».",
					'Ietekme: «...tā rezultātā Džordans baidījās uzdot svarīgus arhitektūras jautājumus, recenzēšana aizkavējās un komandā radās spriedze».',
					'Alternatīva: «Savstarpējs atbalsts recenzijās mums ir tikpat būtisks kā koda piegādes ātrums. Kas tajā brīdī notika ar tevi?»'
				]
			},
			{
				title: '3. scenārijs: Asaras un emocionāls pārgurums (10 min)',
				durationMinutes: 10,
				description: 'Cilvēcīgs un iejūtīgs atbalsts brīdī, kad kolēģis netiek galā ar stresu.',
				questions: [
					'Scenārijs: «Nesteidzies. Viss ir labi, tev pilnīgi nav par ko atvainoties. Mēs strādājam ar sarežģītām sistēmām, un mēs visi pirmkārt esam cilvēki».',
					'Scenārijs: «Vai vēlies paņemt 5 minūšu pauzi, iedzert ūdeni un atgriezties? Vai arī pārcelsim sarunas atlikušo daļu uz rītdienu? Jebkurš variants ir pilnīgi pieņemams».',
					'Likums: Nekad neierakstiet sarunu. Koncentrējieties uz uzklausīšanu un drošību, nevis tūlītēju problēmu risināšanu.'
				]
			},
			{
				title: '4. scenārijs: Negaidīts algas vai amata ultimāts (10 min)',
				durationMinutes: 10,
				description: 'Līdzsvarota reakcija uz pēkšņu finansiālu prasību.',
				questions: [
					'Scenārijs: «Paldies par atklātību. Es novērtēju tavu apņēmību un vēlos, lai tavs ieguldījums tiktu novērtēts taisnīgi».',
					'Scenārijs: «Es šodien nevaru dot tūlītēju atbildi par summu vai amatu, jo pārskatīšana ir piesaistīta kompetenču matricai un budžeta apstiprināšanai. Taču es apsolu pilnīgu caurspīdīgumu».',
					'Scenārijs: «Atvērsim kopā Senior līmeņa prasības, salīdzināsim tavus sasniegumus, iezīmēsim attīstības zonas un iesim ar šo analīzi uz tuvāko pārskatīšanas ciklu».'
				]
			},
			{
				title: '5. un 6. scenārijs: Mikromenedžmenta pārmetumi un cinisms (10 min)',
				durationMinutes: 10,
				description: 'Autonomijas kalibrēšana un vilšanās mazināšana uzņēmuma stratēģijā.',
				questions: [
					'Mikromenedžments: «Paldies par tiešumu. Ja manas intereses šķiet kā pārlieka kontrole, mūsu sadarbības formāts nestrādā labi. Kāds atjauninājumu ritms tev šķistu ērts, lai man būtu skaidrība tevis aizstāvēšanai bez kontroles sajūtas?»',
					'Cinisms: «Es saprotu tavu neapmierinātību par kursa maiņu pēc ieguldītā darba. Lūk, tirgus konteksts, kas noteica šo lēmumu... Kādus tehniskos riskus tu saskati un kā mēs tos varam novērst?»'
				]
			}
		],
		antiPatterns: [
			{
				mistake: '«Uzslavu sviestmaize» (Uzslava–Kritika–Uzslava)',
				whyBad:
					'Izpludina aizrādījuma būtību. Darbinieks aiziet ar pārliecību, ka viss ir lieliski, bet vadītājs domā, ka sniedzis skaidru aizrādījumu.',
				betterAlternative:
					'Sniedziet tiešu, cieņpilnu SBI atgriezenisko saiti. Esiet kodolīgi un aiciniet uz sadarbību.'
			},
			{
				mistake: 'Aizsargājoša pretagresija',
				whyBad:
					'Dusmīga reakcija uz pārmetumiem par mikromenedžmentu vai stratēģiju neatgriezeniski sagrauj uzticību.',
				betterAlternative:
					'Pateicieties par drosmi runāt atklāti, mierīgi atzīstiet berzi un aiciniet kopīgi veidot risinājumu.'
			},
			{
				mistake: 'Vieglprātīgi solījumi nomierināšanas nolūkā',
				whyBad:
					'Apsolīt algas pieaugumu vai amatu neērtības dēļ beidzas ar katastrofālu uzticības zaudēšanu, kad augstākā vadība to noraida.',
				betterAlternative:
					'Uzklausiet ar empātiju un nodrošiniet procesa caurspīdīgumu, bet nekad nedodiet vienpusējas garantijas.'
			},
			{
				mistake: 'Emociju noniecināšana («Neraudi, viss taču ir labi!»)',
				whyBad: 'Aizrādījums neraudāt noniecina cilvēka pārdzīvojumus un pastiprina kauna sajūtu.',
				betterAlternative:
					'Piedāvājiet pauzi, aplieciniet, ka šāda reakcija ir cilvēciska, un dodiet izvēli pārcelt sarunu.'
			}
		],
		followUpHtml:
			'<p><strong>1. Ātrs šķēršļa novēršanas solis 24 stundās:</strong> Ja sarunas gaitā atklājās pārslodze vai rīku problēmas, rīkojieties tūlīt. Tas pierāda, ka atklātība ir droša un tiek novērtēta.</p><p><strong>2. Objektīva fiksēšana privātajās piezīmēs:</strong> Fiksējiet faktus un apsolītos soļus šifrētās privātajās piezīmēs. Nekad neglabājiet sensitīvus personiskus datus nešifrētās uzņēmuma sistēmās.</p><p><strong>3. Īsa saziņa pēc 3–5 dienām:</strong> Emocionāli smagos gadījumos organizējiet īsu 15 minūšu sarunu pēc pāris dienām, lai atjaunotu mieru un nostiprinātu drošības sajūtu komandā.</p>',
		tips: [
			'Pēc dziļa diagnostiska jautājuma domās noskaitiet līdz septiņi: cilvēkam nepieciešams laiks, lai uzdrošinātos runāt no sirds.',
			'Vienmēr nodaliet izaugsmes un koučinga sarunas no atalgojuma pārskatīšanas procesa.',
			'Atcerieties, ka aizsargājoša nostāja gandrīz vienmēr ir vairogs pret lielu stresu vai neskaidrām gaidām.',
			'Izmantojiet sagatavi support_checkin encrypted1on1 vidē, tiklīdz pamanāt hronisku pārslodzi vai izdegšanas pazīmes.'
		],
		keyTakeaway:
			'Sarežģītas sarunas neizjauc darba attiecības — to izdara neveikla rīcība ar tām. Ar empātiju, mieru un negrozāmu privātumu risināti saspringti brīži kļūst par stabilāko uzticības pamatu komandā.'
	}
];
