import type { BlogPost, BlogUiStrings } from './types';

export const blogUiLv: BlogUiStrings = {
	blogTitle: 'Blogs un inženiertehniskās piezīmes',
	blogSubtitle:
		'Pārdomas par 1 pret 1 sarunu metodoloģiju, kognitīvo slodzi inženieru komandās un Zero-Knowledge risinājumu izstrādi.',
	latestArticles: 'Jaunākie raksti',
	readArticle: 'Lasīt rakstu',
	backToBlog: 'Atpakaļ uz blogu',
	publishedOn: 'Publicēts',
	writtenBy: 'Autors',
	shareArticle: 'Dalīties',
	linkCopied: 'Saite nokopēta starpliktuvē!',
	tryDemoTitle: 'Vadiet 1 pret 1 sarunas ar matemātisku privātuma garantiju',
	tryDemoBody:
		'encrypted1on1 saglabā piezīmes un mērķus ar šifrēšanu pārlūkprogrammā. Pat servera administratori nevar piekļūt jūsu sarunu saturam.',
	tryDemoCta: 'Izmēģināt demo bez reģistrācijas',
	moreArticles: 'Citi raksti blogā'
};

export const blogPostsLv: BlogPost[] = [
	{
		slug: 'why-we-built-encrypted1on1',
		title: 'Kāpēc mēs izveidojām encrypted1on1',
		subtitle:
			'Atziņa, ka 1 pret 1 sarunu piezīmēm ir vajadzīga matemātika, nevis privātuma politikas solījumi.',
		description:
			'1 pret 1 sarunas satur visjutīgākās tēmas uzņēmumā. Kāpēc ar solījumu «mēs neskatīsimies» nepietiek un kā radās platforma ar pilnīgu šifrēšanu.',
		date: '2026-08-09',
		formattedDate: '2026. gada 9. augusts',
		readTime: '4 min lasījums',
		category: 'Manifests',
		author: {
			name: 'Aleksejs',
			role: 'Dibinātājs un izstrādātājs'
		},
		tags: ['Drošība', 'Zero-Knowledge', '1 pret 1 sarunas', 'Atvērtais kods'],
		leadHtml:
			'Mēs necentāmies izveidot vēl vienu SaaS rīku. Mēs sākām kā klients. Šis ir stāsts par to, kā trešās puses pakalpojuma slēgšana lika mums citādi paskatīties uz to, kur patiesībā glabājas komandas sensitīvākās sarunas.',
		sections: [
			{
				heading: 'Mēs sākām kā parasts klients',
				paragraphsHtml: [
					'Mūsu organizācija savu 1:1 tikšanos procesu risināja ar trešās puses rīku — vienu no daudzajiem labi izstrādātajiem, labu nolūku produktiem šajā jomā. Tas darīja savu darbu godam.',
					'Tad, kā tas mēdz notikt ar nelieliem piegādātājiem, tika paziņots, ka pakalpojums tiek slēgts. Tas ir normāli: jaunuzņēmumi beidz darbību, produkti noslēdz savu ciklu.',
					'Nenormāli bija tas, ko šis fakts mums lika saprast: mēs nekad nebijām patiešām jautājuši sev, ko piegādātāja slēgšana <em>nozīmē</em> 1:1 tikšanās saturam.'
				]
			},
			{
				heading: 'Kas patiesībā glabājas 1 pret 1 piezīmēs',
				paragraphsHtml: [
					'Padomājiet par to, kas gada gaitā tiek piefiksēts atklātās un dziļās 1 pret 1 sarunās. Bažas par sniegumu, kas izteiktas konfidenciāli. Vadītāja privātas piezīmes par darbinieka karjeras attīstību. Sarunas par atalgojumu. Personiski apstākļi, ko darbinieks atklājis, sagaidot, ka tas paliks tikai starp diviem cilvēkiem.',
					'Nekam no tā nekad nevajadzētu būt redzamam nevienam ārpus abiem dalībniekiem — ne augstāka līmeņa vadītājam, ne personāla daļai, ne IT nodaļai un patiesībā pat <em>pašam pakalpojuma sniedzējam</em>, lai gan tehniski mākoņa operators datus datubāzē vienmēr varēja apskatīt atvērtā veidā.'
				]
			},
			{
				heading: 'Slēgšanas pārbaudījums: kāpēc ar solījumiem nepietiek',
				paragraphsHtml: [
					'Slēgšana ir tieši tas brīdis, kad uzņēmuma datu apstrādes prakse tiek pārbaudīta visstingrāk: atbalsta komanda veic datu izgūšanu, pircējs veic tehnisko izpēti, un atlikusī nelielā komanda visu noslēdz termiņu spiedienā.',
					'Mums nebija iemesla domāt, ka ar mūsu datiem notiks kas slikts. Bet mums arī nebija veida, kā to <em>zināt</em> — jo visa sistēma balstījās uz «uzticieties mums», un «mēs» bija uzņēmums, kas tobrīd tieši izbeidza savu darbību.'
				]
			},
			{
				heading: 'Matemātika, nevis privātuma politikas',
				paragraphsHtml: [
					'Šī ir plaisa, ko mēs izlēmām aizvērt pareizi — ne tikai savai organizācijai, bet kā risinājumu, ko ikviens tādā pašā situācijā varētu pats pārbaudīt, nevis pieņemt uz ticības vārda.',
					'Ja 1 pret 1 platforma glabā dažas no visjutīgākajām sarunām, kādas uzņēmumā notiek, «mēs apsolām neskatīties» nav pietiekami stingra garantija. Vienīgā pietiekami stingrā garantija ir tāda, kurā skatīšanās <em>nav iespējama</em> — kad operators, IT komanda, uzņēmums, kas platformu uztur pats, un pat pilnīga servera kompromitēšana iegūst tikai neizlasāmu šifrētu tekstu.',
					'Tā nav formāla politika. Tas ir pareizi īstenots šifrējums no gala līdz galam (E2EE), ar pilnībā atvērtu pirmkodu, lai ikviens inženieris varētu pārliecināties par kriptogrāfijas drošību savām acīm.',
					'<strong>encrypted1on1 ir šo pārdomu rezultāts.</strong>'
				]
			}
		]
	},
	{
		slug: 'v1-0-0-release',
		title: 'encrypted1on1 v1.0.0: pirmais stabilais laidiens',
		subtitle:
			'Pašmitinātas 1:1 sarunas ar pilnīgu šifrēšanu, asinhronu sagatavošanos, mērķu pēctecību un gatavu Docker konteineru.',
		description:
			'Paziņojam par encrypted1on1 v1.0.0 — pirmo stabilo versiju strukturētām vadītāja un darbinieka 1 pret 1 sarunām ar pilnīgu datu konfidencialitāti. Docker konteiners, drošības testi un tiešsaistes demo.',
		date: '2026-08-16',
		formattedDate: '2026. gada 16. augusts',
		readTime: '5 min lasījums',
		category: 'Laidiens',
		author: {
			name: 'Aleksejs',
			role: 'Dibinātājs un izstrādātājs'
		},
		tags: ['v1.0.0', 'Laidiens', 'Docker', 'Atvērtais kods', 'Drošība'],
		coverImage: '/images/landing/privacy-infrastructure.jpg',
		leadHtml:
			'Šodien ir nozīmīgs brīdis projekta attīstībā: mēs oficiāli izlaižam <strong>encrypted1on1 v1.0.0</strong> — mūsu pirmo stabilo ražošanas laidienu. Tas nodrošina komandām drošu un strukturētu vidi 1 pret 1 sarunām, kur serveris nekad neredz nešifrētas piezīmes, atgriezenisko saiti vai mērķus.',
		sections: [
			{
				heading: 'Kāpēc 1 pret 1 sarunām nepieciešama Zero-Knowledge arhitektūra',
				paragraphsHtml: [
					'Vadītāja un komandas biedra 1 pret 1 sarunas ir vieta, kur notiek uzņēmuma visdelikātākās diskusijas: konfidenciālas atsauksmes, bažas par efektivitāti, algu un karjeras plāni, izdegšanas signāli un personīgi apstākļi.',
					'Klasiskie mākoņpakalpojumi, iekšējās vikivietnes un koplietojamie dokumenti liek uzticēties: uzticēties datubāzu administratoriem, uzticēties mākoņpakalpojumu darbiniekiem un uzticēties, ka neviens nelūkosies personīgajās sarunās.',
					'Ar encrypted1on1 mēs aizstājām uzticēšanos ar matemātiku. Viss sarunu saturs tiek šifrēts pārlūkprogrammā pirms nosūtīšanas uz serveri. Pat servera īpašniekam vai datubāzes administratoram nav iespējas piekļūt nešifrētam tekstam.'
				]
			},
			{
				heading: 'Kas jauns v1.0.0 versijā',
				paragraphsHtml: [
					'v1.0.0 ietver vairāku mēnešu arhitektūras pilnveidošanu, drošības pārbaudes un reālu ikdienas lietošanas pieredzi. Galvenās funkcijas:',
					'<ul><li><strong>Pilnībā šifrētas anketas (End-to-End Encryption):</strong> X25519 atslēgu pāri katram dalībniekam, XChaCha20-Poly1305 simetriskā satura šifrēšana un Argon2id atslēgu atvasināšana no lietotāja paroles.</li><li><strong>Asinhrona sagatavošanās:</strong> vadītājs un darbinieks pirms sarunas formulē darba kārtību, atzīmē šķēršļus un novērtē pašsajūtu un darba slodzi.</li><li><strong>Mērķu pēctecība:</strong> vienošanās un mērķi netiek pazaudēti iepriekšējos pierakstos — tie automātiski pāriet no viena cikla uz nākamo, līdz tiek sasniegti vai arhivēti.</li><li><strong>Privāta analītika un tendences:</strong> perioda pārskats ar noskaņojuma un mērķu progresa diagrammām (sparklines), kas ģenerētas inline-SVG formātā pārlūkā — bez ārējiem izsekošanas skriptiem un bez servera piekļuves datiem.</li><li><strong>Pilnvērtīga kontu pārvaldība:</strong> elastīgi reģistrācijas režīmi (ar ielūgumiem, tikai caur administratoru vai domēnam piesaistīta reģistrācija), ērta paroles maiņa un pilnīgs lokāli atšifrētu datu eksports JSON formātā.</li></ul>'
				]
			},
			{
				heading: 'Pārbaudīta un droša inženierija',
				paragraphsHtml: [
					'encrypted1on1 tika veidots, ievērojot daudzlīmeņu aizsardzības principus visos slāņos:',
					'<ul><li><strong>«Melnās kastes» privātuma testi:</strong> Playwright e2e testi divās neatkarīgās pārlūkprogrammas sesijās, kas pārbauda reālu šifrēšanu un tieši inspicē datubāzi, matemātiski pierādot, ka nešifrēti dati nenonāk diskā vai API atbildēs.</li><li><strong>Stingras drošības galvenes:</strong> stingra Content Security Policy (CSP), Subresource Integrity (SRI) visiem resursiem un HSTS.</li><li><strong>Drošs Docker konteiners:</strong> darbojas no beztiesību lietotāja profila ar FrankenPHP + Caddy, nodrošinot automātiskus HTTPS sertifikātus un veselības pārbaudes (HEALTHCHECK).</li><li><strong>Augstas veiktspējas datu glabāšana:</strong> SQLite ar noklusējuma Write-Ahead Logging (WAL) režīmu ātrai paralēlai rakstīšanai, kā arī pārbaudīts MySQL migrācijas ceļš lielākām komandām.</li></ul>'
				]
			},
			{
				heading: 'Darba sākšana un Docker izvietošana',
				paragraphsHtml: [
					'Jūs varat palaist encrypted1on1 ar vienu komandu, izmantojot oficiālo Docker konteineru:',
					'<pre><code>docker pull ghcr.io/aleksejs1/encrypted1on1:1.0.0</code></pre>',
					'Ja vēlaties izmēģināt sistēmu bez uzstādīšanas, atveriet tiešsaistes demo vietni <a href="https://demo.private1on1.eu" target="_blank" rel="noopener noreferrer">demo.private1on1.eu</a> — tā darbojas bez reģistrācijas ar sagatavotiem sarunu datiem visās atbalstītajās valodās.',
					'Pirmkods ir atvērts saskaņā ar <strong>AGPLv3</strong> licenci un pieejams <a href="https://github.com/aleksejs1/encrypted1on1" target="_blank" rel="noopener noreferrer">GitHub</a>.'
				]
			}
		]
	},
	{
		slug: 'v1-2-0-release',
		title: 'encrypted1on1 v1.2.0: anketu versiju pārvaldība, labojumi un ērta saskarne',
		subtitle:
			'Kā attīstīt 1:1 jautājumu kopas, neizkropļojot vēsturisko sarunu saturu, plus iespēja rediģēt savus ierakstus un elastīgi pārcelt datumus.',
		description:
			'encrypted1on1 v1.2.0 ievieš anketu versiju pārvaldību, iespēju labot savas vienošanās un komentārus, plānoto sarunu datumu pārcelšanu un lietotājvārdus.',
		date: '2026-08-25',
		formattedDate: '2026. gada 25. augusts',
		readTime: '4 min lasījums',
		category: 'Laidiens',
		author: {
			name: 'Aleksejs',
			role: 'Dibinātājs un izstrādātājs'
		},
		tags: ['v1.2.0', 'Laidiens', 'UX', 'Versiju vadība', 'Atvērtais kods'],
		coverImage: '/images/landing/methodology-leverage.jpg',
		leadHtml:
			'Divas nedēļas pēc v1.0.0 iznākšanas mēs piedāvājam <strong>encrypted1on1 v1.2.0</strong>. Šis laidiens veltīts ikdienas ērtībai un datu integritātei: atrisināta arhitektūras problēma par jautājumu attīstību, saglabājot pagātnes piezīmju patiesumu, ieviesta iespēja rediģēt savus ierakstus un uzlabota saskarne.',
		sections: [
			{
				heading: 'Vēsturiskā patiesuma saglabāšana anketu veidnēs',
				paragraphsHtml: [
					'Jebkurā 1 pret 1 sarunu rīkā jautājumu veidnes laika gaitā mainās. Piemēram, encrypted1on1 mēs vēlējāmies paplašināt darbinieka pašsajūtas («sajūtas») novērtējumu no 6 pamata variantiem līdz 12 emocionālām niansēm (pievienojot tādus stāvokļus kā <em>mierīgs</em>, <em>pateicīgs</em>, <em>saspringts</em>, <em>lepns</em>, <em>garlaikots</em> un <em>vientuļš</em>).',
					'Vienkāršās lietotnēs izstrādātāji vienkārši atjaunina jautājumu masīvu. Taču sistēmā, kas uztur sarunu vēsturi, tas rada bīstamu datu kropļojumu: ja veidni nomaina globāli, senas sarunas pēkšņi tiek attēlotas pēc jaunā standarta. Rūtiņa, kuru darbinieks neatzīmēja pirms trim mēnešiem tikai tāpēc, ka tā vēl nepastāvēja, vizuāli kļūst neatšķirama no opcijas, kuru viņš redzēja un apzināti noraidīja.',
					'Lai aizsargātu vēsturisko precizitāti, v1.2.0 ievieš <strong>anketu formu versiju pārvaldību</strong> (<code>formVersion</code>). Katrai anketai izveides brīdī tiek fiksēts formas numurs. Senākas anketas vienmēr paliek pie v1 shēmas, savukārt jaunās tiek veidotas pēc v2 shēmas ar paplašināto emociju sarakstu.'
				]
			},
			{
				heading: 'Iespēja rediģēt un dzēst savas vienošanās un komentārus',
				paragraphsHtml: [
					'Dzīva 1 pret 1 saruna ir dinamiska: dalībnieki apspriež idejas, ātri precizē formulējumus un reizēm pieļauj pārrakstīšanās kļūdas. Iepriekš, kad punkts bija pievienots kopīgajam sarunas kopsavilkumam vai komentāru plūsmai, to vairs nevarēja labot.',
					'Versijā v1.2.0 lietotāji var brīvi labot un dzēst savus ierakstus sadaļā «Sarunas rezultāti» un savus komentārus anketā. Drošība ir stingri piesaistīta autoram: jūs varat noslīpēt savus vārdus, taču neviens nevar mainīt vai dzēst otra sarunas biedra teikto.'
				]
			},
			{
				heading: 'Plānoto sarunu pārcelšana un lietotājvārdi',
				paragraphsHtml: [
					'Šajā laidienā iekļauti arī būtiski ikdienas saskarnes uzlabojumi:',
					'<ul><li><strong>Elastīga sarunu pārcelšana:</strong> iepriekš pārcelt datumu varēja tikai tad, kad saruna jau bija nokavēta. Tagad, ja mainās kalendārs, plānotās tikšanās datumu var ērti nomainīt tieši no anketas skata.</li><li><strong>Cilvēkiem saprotami vārdi:</strong> e-pasta adreses un sistēmas UUID visā saskarnē, galvenē un kolēģu sarakstos ir aizstāti ar ērtiem lietotājvārdiem.</li><li><strong>Tumšā režīma kontrasts un automatizēts WCAG tests:</strong> nozīmīšu krāsas ir pielāgotas labākai lasāmībai tumšajā režīmā, un CI procesam pievienota automātiska WCAG kontrasta pārbaude.</li><li><strong>Versijas caurspīdīgums:</strong> sistēmas administratori ar parametru <code>SHOW_VERSION</code> var ieslēgt lietotnes versijas un git commita koda attēlošanu kājenē.</li></ul>'
				]
			},
			{
				heading: 'Uzstādīšana un v1.2.0 Docker laidiens',
				paragraphsHtml: [
					'v1.2.0 ir pilnībā savietojams ar iepriekšējām versijām un satur automātiskas datubāzes migrācijas SQLite un MySQL vidēm. Oficiālais konteiners ir pieejams:',
					'<pre><code>docker pull ghcr.io/aleksejs1/encrypted1on1:1.2.0</code></pre>',
					'Izmēģināt jaunās anketas iespējas un saskarnes uzlabojumus bez instalēšanas varat demonstrācijas vietnē <a href="https://demo.private1on1.eu" target="_blank" rel="noopener noreferrer">demo.private1on1.eu</a>.',
					'Pilns izmaiņu saraksts un kods pieejams <a href="https://github.com/aleksejs1/encrypted1on1/releases/tag/v1.2.0" target="_blank" rel="noopener noreferrer">GitHub</a> repozitorijā.'
				]
			}
		]
	}
];
