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
	},
	{
		slug: '1-on-1-question-bank-templates',
		title: 'Vairāk nekā «Kā klājas?»: iepazīstinām ar 1:1 jautājumu banku un veidnēm',
		subtitle:
			'Atlasīti jautājumi 7 galvenajās dimensijās ar skaidrojumu «kāpēc jautāt» un gatavām sarunu veidnēm.',
		description:
			'Kāpēc 1 pret 1 sarunas mēdz pārvērsties par statusa atskaitēm, un kā mūsu jautājumu banka palīdz atklāt slēptos šķēršļus un novērst izdegšanu.',
		date: '2026-09-02',
		formattedDate: '2026. gada 2. septembris',
		readTime: '4 min lasījums',
		category: 'Rokasgrāmata',
		author: {
			name: 'Aleksejs',
			role: 'Dibinātājs un izstrādātājs'
		},
		tags: ['1 pret 1 sarunas', 'Jautājumu banka', 'Vadība', 'Rokasgrāmata', 'Veidnes'],
		coverImage: '/images/playbook/high-leverage-1-on-1.jpg',
		leadHtml:
			'Dārgākā kļūda komandas vadībā ir 1 pret 1 sarunas pārvēršana par iknedēļas uzdevumu statusa atskaiti. Šodien mēs atveram interaktīvo <a href="/lv/playbook/questions/">1:1 jautājumu banku</a>: strukturētu pārbaudītu jautājumu krātuvi, kas palīdz pārkāpt formālas pieklājības robežas un runāt par būtisko.',
		sections: [
			{
				heading: 'Statusa atskaišu lamatas',
				paragraphsHtml: [
					'Mēs visi esam piedzīvojuši sarunas, kas nekur neved: «Kā iet ar projektu X?» — «Labi, drīz pabeigsim.» — «Vai ir kādi šķēršļi?» — «Nē, viss kārtībā.» Pēc desmit minūtēm tēmas ir izsmeltas, un saruna beidzas ar formālu sajūtu, ka pienākums ir izpildīts, taču patiesa skaidrība nav gūta.',
					'Uzdevumu statusam ir vieta Jira, Slack un ikdienas stand-up sanāksmēs. 1 pret 1 saruna ir vadītāja lielākais ietekmes instruments (high leverage), taču tikai tad, ja tiek uzdoti jautājumi, kas atklāj sistēmiskus šķēršļus, slēptu spriedzi vai neapjaustas karjeras ambīcijas.'
				]
			},
			{
				heading: '7 produktīvas sarunas dimensijas',
				paragraphsHtml: [
					'Tā vietā, lai piedāvātu haotisku tēmu sarakstu, mēs sadalījām <a href="/lv/playbook/questions/">jautājumu banku</a> 7 stratēģiskos virzienos:',
					'<ul><li><strong>Kontakts un enerģija:</strong> psiholoģiskās drošības radīšana un cilvēciskā fona izpratne pirms pievēršanās darbiem.</li><li><strong>Atgriezeniskā saite vadītājam:</strong> savu vadības kļūdu un aklo zonu apzināšana, darbiniekam piemērotākā atbalsta veida noskaidrošana.</li><li><strong>Komanda un kultūra:</strong> savstarpējā uzticēšanās, mikroklimats un sadarbības kvalitāte komandā.</li><li><strong>Šķēršļi un procesi:</strong> lieku sapulču, neefektīvu procedūru un birokrātisku aizturu likvidēšana.</li><li><strong>Stratēģija un jēga:</strong> ikdienas uzdevumu sasaiste ar uzņēmuma mērķiem, klienta vērtību un kopējo virzību.</li><li><strong>Izaugsme un ambīcijas:</strong> karjeras attīstība, jaunu prasmju apguve un nākamo profesionālo izaicinājumu meklēšana.</li><li><strong>Slodze un līdzsvars:</strong> kognitīvā noguruma un izdegšanas risku pamanīšana laikus, nevis pirms aiziešanas iesnieguma.</li></ul>'
				]
			},
			{
				heading: 'Princips «Kāpēc jautāt?»',
				paragraphsHtml: [
					'Labs jautājums darbojas tikai tad, ja ir skaidrs tā mērķis. Tādēļ katram jautājumam bankā ir pievienots skaidrojums <strong>«Kāpēc jautāt»</strong>.',
					'Tajā izklāstīts, kādu uzticēšanās aspektu jautājums skar, kādas nianses ir vērts sadzirdēt atbildē un kā sarunu virzīt tālāk bez spiediena un aizsardzības reakcijas.'
				]
			},
			{
				heading: 'Jautājumu bankas izmantošana encrypted1on1',
				paragraphsHtml: [
					'Jautājumu banka ir brīvi pieejama sadaļā <a href="/lv/playbook/questions/">/lv/playbook/questions/</a> ar meklēšanu, filtriem un nejaušas iedvesmas ģeneratoru.',
					'Jautājumus var ērti iekļaut <a href="https://demo.private1on1.eu/?lang=lv" target="_blank" rel="noopener noreferrer">encrypted1on1</a> sagatavošanās anketās pirms tikšanās. Tas ļauj abām pusēm asinhroni apdomāt atbildes, savukārt pilnīgā šifrēšana garantē, ka pat atklātākās sarunas paliek tikai starp diviem cilvēkiem.'
				]
			}
		]
	},
	{
		slug: '5-essential-books-for-high-leverage-1-on-1s',
		title: '1:1 Grāmatu plaukts: 5 būtiskākās grāmatas komandu vadītājiem',
		subtitle:
			'Vadības meistarklase no Endija Grova, Bena Horovica, Džūlijas Džo, Kamillas Furnjē un Kimas Skotas pielietojamās 1:1 sarunās.',
		description:
			'Iepazīstieties ar interaktīvo 1:1 Grāmatu plauktu: piecas fundamentālas vadības grāmatas, to galvenie principi, jautājumi sarunām un gatavas veidnes.',
		date: '2026-09-10',
		formattedDate: '2026. gada 10. septembris',
		readTime: '5 min lasīšana',
		category: 'Rokasgrāmata',
		author: {
			name: 'Aleksejs',
			role: 'Dibinātājs un izstrādātājs'
		},
		tags: ['Grāmatu plaukts', '1:1 sarunas', 'Vadība', 'Līderība', 'Grāmatas'],
		coverImage: '/images/playbook/manager-playbook.jpg',
		leadHtml:
			'Lielisks menedžments reti rodas no nulles. Principi, kas padara 1:1 sarunas patiesi nozīmīgas — psiholoģiskā drošība, darbinieka vadīta darba kārtība, strukturālu šķēršļu identificēšana un radikāls atklātums — ir gadu desmitiem pārbaudīti praksē. Šodien mēs atklājam interaktīvo <a href="/lv/playbook/books/">1:1 Grāmatu plauktu</a>.',
		sections: [
			{
				heading: 'Kāpēc mēs izveidojām 1:1 grāmatu plauktu',
				paragraphsHtml: [
					'Lielākā daļa vadības grāmatu aizņem simtiem lappušu, analizējot korporatīvo stratēģiju, personāla atlasi un uzņēmuma politiku. Taču, kad pieredzējušiem vadītājiem jautā, kura ikdienas prakse sniedz vislielāko atdevi (leverage), viņi gandrīz vienbalsīgi norāda uz individuālajām 1:1 sarunām.',
					'Lai palīdzētu komandu vadītājiem apgūt šīs atziņas bez simtiem lappušu teorijas lasīšanas, mēs izveidojām interaktīvo <a href="/lv/playbook/books/">1:1 Grāmatu plauktu</a>. Mēs izcēlām pašu būtiskāko: katra autora pamatfilozofiju, galvenos principus, konkrētus jautājumus sarunām un tiešās saites ar mūsu Rokasgrāmatas veidnēm.'
				]
			},
			{
				heading: '5 fundamentāli darbi',
				paragraphsHtml: [
					'Grāmatu plauktā apkopoti pieci darbi, kas definējuši mūsdienu komandu vadību:',
					'<ul><li><strong>Endijs Grovs — «High Output Management» (1983):</strong> Silīcija ielejas zelta klasika. Grovs formulēja principu, ka vadītāja sniegums ir viņa komandas kopējais rezultāts, un 90 minūtes kvalitatīvas 1:1 sarunas uzlabo darbinieka sniegumu par 80 stundām (>50x laika atdeve). Pats galvenais: <em>1:1 ir darbinieka sanāksme</em>.</li><li><strong>Bens Horovics — «The Hard Thing About Hard Things» (2014):</strong> Būtiskākais ceļvedis krīžu vadībā. Horovics uzskata 1:1 par uzņēmuma iekšējo drošības vārstu. Labas ziņas izplatās ātri, bet sliktās tiek noklusētas; regulāras sarunas ļauj pamanīt mazas problēmas pirms tās kļūst par katastrofām.</li><li><strong>Džūlija Džo — «The Making of a Manager» (2019):</strong> Cilvēcīga un empātiska pieeja vadībai. Džūlija Džo iedala sarunu četrās zonās: savstarpējas uzticēšanās veidošana, prioritāšu saskaņošana, sarežģītu izaicinājumu risināšana un ilgtermiņa izaugsmes mērķi.</li><li><strong>Kamilla Furnjē — «The Manager’s Path» (2017):</strong> Izcils ceļvedis inženieru vadītājiem. Furnjē aplūko tehniskās nianses: darbu ar jaunākajiem inženieriem, pieredzējušiem arhitektiem un tehnisko parādu. Viņa brīdina: frāze <em>„Man nav par ko runāt”</em> nav miera zīme, bet gan trauksmes zvans par atsvešināšanos.</li><li><strong>Kima Skota — «Radical Candor» (2017):</strong> Rūpes par cilvēku apvienojumā ar tiešu un atklātu atgriezenisko saiti. Skota parāda, ka 1:1 ir vieta uzticēšanās kaldināšanai. Galvenais noteikums: pirms kritizēt darbinieku, vienmēr lūdziet kritiku par savu vadības stilu.</li></ul>'
				]
			},
			{
				heading: 'No teorijas līdz reālām sarunām',
				paragraphsHtml: [
					'Teorija ir vērtīga tikai tad, kad to izmanto dzīvē. Katrai grāmatai <a href="/lv/playbook/books/">Grāmatu plauktā</a> esam atlasījuši praktiskus jautājumus un sasaistījuši tos ar gatavām Rokasgrāmatas veidnēm:',
					'<ul><li>Grova augstas atdeves metodoloģija sasaucas ar <a href="/lv/playbook/high-leverage-1-on-1/">Augstas atdeves 1:1 manifestu</a>.</li><li>Horovica organizācijas veselības principi iestrādāti veidnē <a href="/lv/playbook/skip-level/">Skip-Level 1:1: veselības pārbaude</a>.</li><li>Džūlijas Džo uzticēšanās prakse veido pamatu veidnei <a href="/lv/playbook/first-1-on-1/">Pirmā 1:1 saruna: uzticēšanās un cerības</a>.</li><li>Kamillas Furnjē karjeras attīstības pieeja iekļauta veidnē <a href="/lv/playbook/career-growth/">I ceturkšņa karjeras un izaugsmes saruna</a>.</li><li>Kimas Skotas izdegšanas novēršanas metodes kalpo par pamatu veidnei <a href="/lv/playbook/burnout-detection/">Pārslodzes un izdegšanas diagnostika</a>.</li></ul>'
				]
			},
			{
				heading: 'Ieviešana praksē ar encrypted1on1',
				paragraphsHtml: [
					'Lielākais šķērslis vērtīgām 1:1 sarunām reti ir vēlmes trūkums — tā parasti ir steiga un kopīgas, konfidenciālas telpas trūkums. Bez sagatavošanās tikšanās viegli pārvēršas formālā statusa atskaitē.',
					'Izmantojot <a href="https://demo.private1on1.eu/?lang=lv" target="_blank" rel="noopener noreferrer">encrypted1on1</a>, komandu vadītāji un darbinieki var izvēlēties pārbaudītus jautājumus no šīm klasiskajām grāmatām, sagatavot pārdomas asinhroni un paļauties uz bezkompromisa šifrēšanu (zero-knowledge), kas sargā sarunu konfidencialitāti.',
					'Iepazīstieties ar visām piecām grāmatām un to kopsavilkumiem vietnē <a href="/lv/playbook/books/">/lv/playbook/books/</a>.'
				]
			}
		]
	},
	{
		slug: 'meeting-templates-playbook-and-form-templates-preview',
		title: '1:1 Sarunu rokasgrāmata: pārbaudītas veidnes un drīzs veidlapu atbalsts platformā',
		subtitle:
			'Interaktīva scenāriju bibliotēka dažādiem komandas posmiem — un ieskats gaidāmajā anketu veidņu atbalstā encrypted1on1 platformā.',
		description:
			'No pirmās tikšanās līdz izdegšanas novēršanai un karjeras izaugsmei: iepazīstieties ar Rokasgrāmatas veidnēm un uzziniet par drīzu veidlapu atbalstu encrypted1on1.',
		date: '2026-09-16',
		formattedDate: '2026. gada 16. septembris',
		readTime: '5 min lasīšana',
		category: 'Rokasgrāmata',
		author: {
			name: 'Aleksejs',
			role: 'Dibinātājs un izstrādātājs'
		},
		tags: ['Rokasgrāmata', 'Veidnes', '1:1 sarunas', 'Nākotnes plāni', 'Jaunumi'],
		coverImage: '/images/playbook/bi-weekly-pulse.jpg',
		leadHtml:
			'Nevienai 1:1 sarunai nevajadzētu būt vienādai ar iepriekšējo. Pirmās nedēļas iepazīšanās ar jaunu darbinieku prasa pavisam citus akcentus nekā ceturkšņa saruna par karjeras attīstību vai pārslodzes krīzes risināšana. Šodien mēs izceļam mūsu <a href="/lv/playbook/">1:1 Sarunu rokasgrāmatu</a> — un sniedzam ieskatu par gaidāmo jauninājumu encrypted1on1 platformā.',
		sections: [
			{
				heading: 'Kāpēc universāli šabloni nedarbojas',
				paragraphsHtml: [
					'Visbiežākā inženieru vadības kļūda ir viena un tā paša nekonkrētā sarunas formāta atkārtošana katru nedēļu. Laika gaitā šādas sarunas neizbēgami pārvēršas formālā statusa ziņojumā: <em>„Pie kā strādā? Vai ir kādi šķēršļi? Labi, tiekamies nākamnedēļ.”</em>',
					'Pieredzējuši vadītāji saprot, ka komandas dalībnieki atrodas dažādos posmos. Efektīva 1:1 saruna pielāgo savu darba kārtību kontekstam — vai tā būtu psiholoģiskās drošības veidošana jaunpienācējam, ikdienas šķēršļu novēršana, ilgtermiņa mērķu nospraušana vai izdegšanas riska novēršana.'
				]
			},
			{
				heading: '6 pārbaudītas Rokasgrāmatas veidnes',
				paragraphsHtml: [
					'Mūsu <a href="/lv/playbook/">Rokasgrāmata</a> piedāvā praksē pārbaudītas sarunu struktūras sešām būtiskām situācijām:',
					'<ul><li><strong><a href="/lv/playbook/high-leverage-1-on-1/">Augstas atdeves 1:1 manifests:</a></strong> Pamatprincipi, kas balstīti Endija Grova laika atdeves formulā. 4 pīlāru darba kārtība: enerģija, šķēršļu noņemšana, stratēģiskais virziens un savstarpēja atgriezeniskā saite.</li><li><strong><a href="/lv/playbook/first-1-on-1/">Pirmā 1:1 saruna: cerības un uzticēšanās:</a></strong> Būtiska veidne jaunajiem darbiniekiem pirmajās 30 dienās, lai vienotos par sadarbības principiem un komunikācijas stilu.</li><li><strong><a href="/lv/playbook/bi-weekly-pulse/">Regulārais divu nedēļu pulss:</a></strong> Pamata ritms stabilam komandas darbam. Uztur tempu, laicīgi pamana problēmas un seko līdzi vienošanām.</li><li><strong><a href="/lv/playbook/career-growth/">I ceturkšņa karjeras un izaugsmes saruna:</a></strong> Skats nākotnē ārpus ikdienas uzdevumiem: prasmju apguve, izaugsme pa tehnisko kāpņu ceļu un jauni izaicinājumi.</li><li><strong><a href="/lv/playbook/burnout-detection/">Pārslodzes un izdegšanas diagnostika:</a></strong> Empātisks ietvars, lai atpazītu slēptu stresu pirms cilvēks sasniedz lūzuma punktu, un sabalansētu slodzi.</li><li><strong><a href="/lv/playbook/skip-level/">Skip-Level 1:1: veselības pārbaude:</a></strong> Vadītājiem un dibinātājiem, lai iegūtu patiesu un neizskaistinātu priekšstatu par uzņēmuma kultūru tieši no komandas.</li></ul>'
				]
			},
			{
				heading: 'Praktiskai pielietošanai: laika sadalījums un kopēšana',
				paragraphsHtml: [
					'Katra veidne ir veidota tūlītējai izmantošanai kalendārā:',
					'<ul><li><strong>Laika sadalījums pa tēmām:</strong> Ieteicamais minūšu skaits katram blokam, lai saruna neizplūstu un nebūtu sasteigta.</li><li><strong>Precīzi formulēti jautājumi:</strong> Pārdomāti jautājumi, kas aicina uz atklātību un neizraisa aizsargreakciju.</li><li><strong>Sagatavošanās un kļūdas, no kurām izvairīties:</strong> Ieteikumi abām pusēm un tipiskākie kļūdu scenāriji.</li><li><strong>Poga „Kopēt darba kārtību”:</strong> Ar vienu klikšķi nokopējiet visu Markdown darba kārtību kalendāra ielūgumam vai piezīmēm.</li></ul>'
				]
			},
			{
				heading: 'Ieskats nākotnē: encrypted1on1 drīzumā ieviesīs veidlapu atbalstu!',
				paragraphsHtml: [
					'Lai gan <a href="/lv/playbook/">Rokasgrāmatas</a> darba kārtības var izmantot jebkurā kalendārā, mēs esam pārliecināti: vislielākā jēga rodas tad, ja struktūra ir tieši integrēta pašā sarunu rīkā.',
					'Šobrīd platformā encrypted1on1 darbojas vienota versiju anketa ar noskaņojuma, prioritāšu un vienošanos fiksēšanu. Taču dažādām sarunām ir nepieciešami atšķirīgi jautājumi.',
					'Mēs ar prieku paziņojam, ka aktīvi strādājam pie <strong>iebūvēta veidlapu (anketu) veidņu atbalsta</strong> encrypted1on1 platformā! Pavisam drīz, veidojot tikšanos, varēsiet izvēlēties specializētas anketu veidnes atbilstoši Rokasgrāmatas scenārijiem vai izveidot pielāgotas savas komandas vajadzībām — saglabājot pilnīgu zero-knowledge šifrēšanu.',
					'Izpētiet veidnes vietnē <a href="/lv/playbook/">/lv/playbook/</a> un sekojiet līdzi gaidāmajam izlaidumam!'
				]
			}
		]
	},
	{
		slug: 'v1-3-0-release',
		title: 'encrypted1on1 v1.3.0: iebūvētās anketu veidnes un vienreizējās sarunas',
		subtitle:
			'Specializētas anketas jaunpienācēju ievadīšanai, karjeras sarunām un slodzes pārbaudei, kā arī vienreizējas anketas bez regulāro sarunu ķēdes sadalīšanas.',
		description:
			'encrypted1on1 v1.3.0 ievieš iebūvētas anketu veidnes (onboarding, karjera, atbalsts), vienreizējās sarunas bez regulārā cikla sašķelšanas un Markdown atbalstu atbildēs.',
		date: '2026-09-24',
		formattedDate: '2026. gada 24. septembris',
		readTime: '4 min lasīšana',
		category: 'Laidiens',
		author: {
			name: 'Aleksejs',
			role: 'Dibinātājs un izstrādātājs'
		},
		tags: ['v1.3.0', 'Laidiens', 'Veidnes', '1:1 sarunas', 'Open Source'],
		coverImage: '/images/landing/privacy-infrastructure.jpg',
		leadHtml:
			'Tikai mēnesi pēc formu versiju ieviešanas versijā v1.2.0 mēs ar prieku izlaižam <strong>encrypted1on1 v1.3.0</strong>. Šis nozīmīgais laidiens ievieš vienu no gaidītākajām iespējām: <strong>iebūvētas tikšanās veidnes</strong> tieši anketas izveidē, kā arī arhitektūras atbalstu <strong>vienreizējām anketām</strong> un Markdown formatējumu atbildēs.',
		sections: [
			{
				heading: '4 specializētas sarunu anketu veidnes',
				paragraphsHtml: [
					'Viens jautājumu kopums nespēj nosegt visas vadības situācijas. Versijā v1.3.0, veidojot anketu, iespējams izvēlēties no četriem mērķtiecīgi izstrādātiem tikšanās veidiem:',
					'<ul><li><strong>Regulārā 1:1 (Regular):</strong> Pārbaudīts klasiskais formāts kārtējām sarunām — enerģijas un sajūtu pārbaude, sasniegumi, apspriežamie jautājumi un kopīgās vienošanās.</li><li><strong>Onboarding / Pirmā saruna:</strong> Īpaši pielāgota jaunajiem darbiniekiem un komandas pārmaiņām. Galvenā uzmanība pievērsta psiholoģiskajai drošībai, komunikācijas vēlmēm, savstarpējām gaidām un „svaiga skata” auditam par procesiem uzņēmumā.</li><li><strong>Karjera un izaugsme (Career & Growth):</strong> Radīta ceturkšņa attīstības sarunām. Ietver enerģijas retrospekciju, trīs virzienu trajektorijas kalibrēšanu (ekspertīzes padziļināšana, komandas vadība vai horizontāla lomu paplašināšana), 90 dienu rīcības plānu un konkrētu vadītāja atbalstu.</li><li><strong>Atbalsts un slodzes pārbaude (Support & Workload Check-in):</strong> Formāts augsta stresa vai izdegšanas riska brīžiem. Veidots kā koleģiāls darba slodzes audits, lai identificētu slēptos stresa avotus, nospraustu robežas un noteiktu tūlītēju vadītāja atbalstu.</li></ul>'
				]
			},
			{
				heading: 'Gudra cikla pāreja: veidnes neiestrēgst',
				paragraphsHtml: [
					'Bieža citu rīku nepilnība ir tāda, ka, vienreiz izvēloties karjeras veidni, nākamās sarunas nejauši turpina to pašu retorisko jautājumu loku. Versijā v1.3.0 tas ir atrisināts sistēmas līmenī.',
					'Kad specializēta anketa (piemēram, <code>career_growth</code> vai <code>support_checkin</code>) tiek arhivēta, nākamā automātiski plānotā tikšanās atgriežas pie noklusējuma formāta <code>regular</code>. Īpašā saruna notiek tieši tad, kad nepieciešams, bet ierastais divu nedēļu ritms atjaunojas pats bez manuālas iejaukšanās.',
					'Turklāt aktīvās anketas ar specializētām veidnēm ir skaidri iezīmētas sarunu sarakstā, lai abas puses uzreiz redzētu gaidāmās sarunas raksturu.'
				]
			},
			{
				heading: 'Vienreizējās anketas bez vēstures sašķelšanas',
				paragraphsHtml: [
					'Iepriekšējās versijās, izveidojot jaunu anketu pirms iepriekšējā bija arhivēta, sarunu vēsture sazarojās — radās dublētas ķēdes ar atšķirīgiem mērķiem un vienošanām.',
					'v1.3.0 ievieš <strong>vienreizējās anketas</strong> arhitektūru (<code>oneOff: true</code>). Ja izveidojat tikšanos līdzās jau atvērtai regulārajai anketai, tā tiek uzskatīta par vienreizēju: tā nepārņem iepriekšējos mērķus un pēc arhivēšanas nerada nākamo anketu. Galvenā regulāro sarunu ķēde paliek neskarta.'
				]
			},
			{
				heading: 'Markdown atbalsts un tūlītēji atjauninājumi',
				paragraphsHtml: [
					'Laidienā v1.3.0 ir apkopoti arī vairāki svarīgi ikdienas lietojamības uzlabojumi:',
					'<ul><li><strong>Markdown brīvā teksta atbildēs:</strong> Teksta laukos tagad pilnībā darbojas Markdown formatējums — saraksti, treknraksts un koda fragmenti ir pārskatāmi un ērti lasāmi.</li><li><strong>Datu sinhronizācija sarunas laikā:</strong> Ja sarunas biedrs ievada piezīmi vai papildina vienošanos tikšanās laikā, izmaiņas ekrānā parādās uzreiz bez lapas pārlādēšanas.</li><li><strong>Pilns tulkojums:</strong> Visas jaunās anketu veidnes un paziņojumi ir pilnībā lokalizēti latviešu, angļu, krievu, vācu, spāņu un franču valodās.</li></ul>'
				]
			},
			{
				heading: 'Atjaunināšana un Docker konteiners',
				paragraphsHtml: [
					'Versija v1.3.0 nodrošina pilnīgu atpakaļejošu savietojamību un automātiskas datubāzes migrācijas SQLite un MySQL bāzēm. Konteinera attēls jau ir pieejams:',
					'<pre><code>docker pull ghcr.io/aleksejs1/encrypted1on1:1.3.0</code></pre>',
					'Izmēģināt jaunās veidnes un pārbaudīt darbību bez instalēšanas varat mūsu publiskajā demonstrācijā: <a href="https://demo.private1on1.eu/?lang=lv" target="_blank" rel="noopener noreferrer">demo.private1on1.eu</a>.',
					'Pilns koda repozitorijs un izmaiņu žurnāls pieejams vietnē <a href="https://github.com/aleksejs1/encrypted1on1/releases/tag/v1.3.0" target="_blank" rel="noopener noreferrer">GitHub</a>.'
				]
			}
		]
	},
	{
		slug: 'why-1-on-1-notes-should-not-live-in-notion-or-slack',
		title: 'Kāpēc 1 pret 1 piezīmēm nav vietas korporatīvajā Notion vai Slack: atklātības cena',
		subtitle:
			'Kā ilūzija par korporatīvo privātumu rada pašcenzūru, pakļauj uzņēmumu juridiskiem riskiem un kāpēc vadītājiem nepieciešama divu loku arhitektūra.',
		description:
			'Kāpēc 1 pret 1 sarunu piezīmes korporatīvajos Notion un Slack iznīcina psiholoģisko drošību, kā darbojas administratoru eksporti un eDiscovery, un kāpēc uzticībai nepieciešama loku nodalīšana.',
		date: '2026-10-04',
		formattedDate: '2026. gada 4. oktobris',
		readTime: '7 min lasīšana',
		category: 'Vadība un drošība',
		author: {
			name: 'Aleksejs',
			role: 'Dibinātājs un uzturētājs'
		},
		tags: ['1 pret 1 sarunas', 'Privātums', 'Psiholoģiskā drošība', 'Vadība', 'Zero-Knowledge'],
		coverImage: '/images/blog/cost-of-candor-cover.jpg',
		leadHtml:
			'Katra mūsdienu vadības grāmata aicina veicināt ievainojamību, radikālu atklātību un psiholoģisko drošību. Vadītāji izveido glītas veidnes korporatīvā Notion privātajā sadaļā vai Slack tiešajās ziņās, bet pēc tam brīnās, kāpēc sarunas ātri pārtop formālās atskaitēs par Jira uzdevumiem. Iemesls nav cilvēku noslēgtība: darbinieki skaidri apzinās, ka korporatīvajos mākoņos nepastāv sarakstes noslēpums.',
		sections: [
			{
				heading: 'Caurspīdīguma paradokss: kā novērošana iznīcina atklātību',
				paragraphsHtml: [
					'2012. gadā Hārvarda Biznesa skolas profesors Ītans Bernstīns (Ethan Bernstein) publicēja fundamentālu pētījumu <em>«The Transparency Paradox»</em> žurnālā Administrative Science Quarterly, vēlāk to padziļinot Harvard Business Review rakstā <em>«The Transparency Trap»</em>. Bernstīns pētīja darbinieku uzvedību dažādos caurspīdīguma apstākļos un pierādīja paradoksālu patiesību: <strong>pārmērīga caurspīdība un pastāvīga novērojamība degradē reālo produktivitāti un bloķē atklātu dialogu</strong>.',
					'Tiklīdz darbinieki zina, ka viņu rīcību vai pierakstus var kontrolēt no augšas, viņi pārstāj eksperimentēt un sāk demonstrēt „parauguzvedību” (<em>performing for observers</em>). Atvērtā vidē cilvēki izliekas par ideāliem izpildītājiem. Tikai aiz aizslietņa — drošās zonās — viņi uzņemas riskus, risina patiesās problēmas un runā tiešu valodu. Bernstīns secināja: organizācijas attīstībai un mācīšanās procesam komandām ir kritiski nepieciešamas <strong>„privātuma zonas” (zones of privacy)</strong>.',
					'1 pret 1 saruna pēc savas būtības ir iecerēta kā šāda uzticības zona. Eimijas Edmondsones (Amy Edmondson, <em>«The Fearless Organization»</em>) pētījumos psiholoģiskā drošība tiek definēta kā pārliecība, ka atklāta kļūdu, noguruma vai šaubu atzīšana netiks vērsta pret cilvēku. Taču, tiklīdz piezīmes nonāk korporatīvajā SaaS rīkā, iestājas <strong>atturošais efekts (chilling effect)</strong>: darbinieks ieslēdz iekšējo pašcenzūru, un saruna zaudē to 50-kārtīgo vadības sviru, par kuru rakstīja Endijs Grovs grāmatā <em>High Output Management</em>.'
				]
			},
			{
				heading: 'Tehniskā ilūzija: kas slēpjas aiz „Privāts” slēdzenes ikonas',
				paragraphsHtml: [
					'Daudzi komandu vadītāji maldīgi uzskata: „Mēs taču iestatījām piekļuvi tikai sev un padotajam — neviens cits to neredz”. Korporatīvajā SaaS arhitektūrā tas ir bīstams pašapmāns.',
					'<ul><li><strong>Notion Enterprise un Workspace Owner tiesības:</strong> Saskaņā ar Notion oficiālo dokumentāciju darba telpas īpašniekiem ir pilnīga administratīva piekļuve saturam. Funkcija Workspace Content Export ļauj administratoram lejupielādēt visu darba telpu, <em>ieskaitot lapas, kas atrodas darbinieku personīgajā privātajā sadaļā (Private Pages)</em>. Turklāt, darbiniekam aizejot no uzņēmuma, administrators ar vienu klikšķi var nodot viņa privātās lapas citam kolēģim (Transfer private pages), padarot gadiem krātās personiskās piezīmes pieejamas citiem.</li><li><strong>Slack atbilstības eksporti un fona DLP:</strong> Slack Plus un Enterprise Grid tarifu plānos ir pieejama korporatīvā eksportēšana, kas ļauj administratoriem likumīgi un dalībniekiem neredzot lejupielādēt visu slēgto kanālu un tiešo ziņu (Direct Messages) vēsturi. Ar Slack Discovery API starpniecību tiek pieslēgtas DLP sistēmas, kas analizē sarakstes reāllaikā.</li><li><strong>Korporatīvais AI un datu noplūdes caur RAG:</strong> Līdz ar Slack AI, Notion AI un Microsoft Copilot ienākšanu iekšējās bāzes nepārtraukti indeksē valodu modeļi. Pietiek ar nelielu kļūdu mantoto piekļuves tiesību konfigurācijā (over-permissioning), lai MI asistents citētu konfidenciālas 1 pret 1 piezīmes, atbildot uz cita kolēģa vispārīgu meklēšanas vaicājumu.</li></ul>'
				]
			},
			{
				heading: 'Juridiskie un personālvadības riski: kad darba melnraksti kļūst par pierādījumiem',
				paragraphsHtml: [
					'Nefiltrētu 1 pret 1 piezīmju glabāšana uzņēmuma koplietošanas sistēmās rada tiešus juridiskus draudus pašai organizācijai.',
					'Tiesvedības praksē saskaņā ar <strong>eDiscovery</strong> noteikumiem (piemēram, FRCP 26. un 34. noteikumi ASV un līdzīgi principi citur) visi korporatīvie ieraksti tiek kvalificēti kā elektroniski glabāta informācija (ESI). Ja bijušais darbinieks iesniedz prasību par nelikumīgu atlaišanu, diskrimināciju vai neizmaksātām prēmijām, tiesas rīkojums (subpoena) uzliek uzņēmumam par pienākumu uzrādīt visas vadītāju piezīmes.',
					'Uzticības sarunā vadītājs nereti piefiksē subjektīvus un emocionālus vērojumus: <em>„Šķiet izklaidīgs, iespējams, netiek galā ģimenes vai veselības problēmu dēļ”</em> vai <em>„Apnikuši nemitīgie strīdi par virsstundām”</em>. Tiesas zālē šie neapstrādātie ieraksti pārtop par neapgāžamu pierādījumu (<em>smoking gun</em>) par aizspriedumiem vai naidīgu darba vidi, radot miljoniem eiro lielus zaudējumus.',
					'Eiropas Savienībā saskaņā ar <strong>VDAR (GDPR) 9. pantu</strong> informācija par fizisko vai garīgo veselību (izdegšana, depresija, terapija, ģimenes krīzes) ir īpašu kategoriju personas dati. Šādu ziņu glabāšana nešifrētā korporatīvajā mākonī bez stingras piekrišanas procedūras un audita ir tiešs regulas pārkāpums.'
				]
			},
			{
				heading: 'Divu loku arhitektūra: praktisks risinājums vadītājiem un personāla vadībai',
				paragraphsHtml: [
					'Pavisam atteikties no piezīmēm nedrīkst: bez pēctecības (continuity) vienošanās aizmirstas dažu nedēļu laikā, un pusgada novērtēšanas saruna pārvēršas par minēšanas spēli. Risinājums ir strukturāla <strong>atbildības loku nodalīšana (Separation of Concerns)</strong>.',
					'<figure><img src="/images/blog/two-circuits-model-lv.svg" alt="Divu loku arhitektūra: privātās uzticības telpas (E2EE) un uzņēmuma oficiālās uzskaites nodalīšana" width="780" height="1010" loading="lazy" /><figcaption>Divu loku arhitektūra: ar klienta puses E2EE aizsargāta uzticības telpa un uzņēmuma oficiālā sistēma apstiprinātiem mērķiem</figcaption></figure>',
					'<ul><li><strong>1. loks: Uzticības telpa (Zero-Knowledge / E2EE):</strong> Rīks ar klienta puses pilnīgu šifrēšanu (End-to-End Encryption), kur kriptogrāfiskās atslēgas glabājas tikai vadītāja un darbinieka ierīcēs. Šeit notiek atklātās sarunas: reālais enerģijas līmenis, personiskie šķēršļi, šaubas par procesiem un neapstrādāti karjeras plāni. Ne personāla daļai, ne administratoriem, ne korporatīvajiem neironu tīkliem nav matemātiskas iespējas atšifrēt šos datus.</li><li><strong>2. loks: Oficiālā uzņēmuma uzskaites sistēma (System of Record):</strong> Uzņēmuma personāla sistēma (HRIS), BambooHR, Lattice vai iekšējā zināšanu bāze. Šeit vadītājs un darbinieks <em>kopīgi fiksē tikai oficiāli saskaņotus rezultātus</em>: apstiprinātos ceturkšņa mērķus (OKR), individuālās attīstības plānu (IDP) un oficiālos novērtējuma kopsavilkumus.</li></ul>',
					'Personāla vadībai nav vajadzības — un juridiski nav vēlams — lasīt personiskus pārdzīvojumus. Lai pārraudzītu vadības kvalitāti, pilnīgi pietiek ar <strong>metadatiem</strong>: vai 1 pret 1 sarunas notiek regulāri reizi divās nedēļās? Vai nav sistemātisku atcelšanu? Kāds ir saskaņoto attīstības mērķu izpildes temps? Process tiek pārvaldīts nevainojami, neaskarot cilvēka privātumu.'
				]
			},
			{
				heading: 'Kopsavilkums',
				paragraphsHtml: [
					'Patiesa uzticēšanās komandā nerodas no iekšējās kārtības lozungiem; tā balstās personīgo robežu cienīšanā. Kad organizācija liek darbiniekiem uzticēt savas sensitīvākās domas sistēmām, kurās pieejama administratora eksporta poga, tā neizbēgami saņem klusēšanu, pasīvu konformismu un negaidītu talantu aiziešanu.',
					'Īsta atklātība ir iespējama tikai tur, kur privātumu garantē matemātika un skaidri nodalīti atbildības loki, nevis tukšs solījums „mēs neskatīsimies”.'
				]
			},
			{
				heading: 'Avoti un ieteicamā literatūra',
				paragraphsHtml: [
					'<ol><li><strong>Bernstein, Ethan S.</strong> (2012). <em>«The Transparency Paradox: A Role for Privacy in Organizational Learning and Operational Control»</em>. Administrative Science Quarterly, 57(2), 181–216.</li><li><strong>Bernstein, Ethan S.</strong> (2014). <a href="https://hbr.org/2014/10/the-transparency-trap" target="_blank" rel="noopener noreferrer"><em>«The Transparency Trap»</em></a>. Harvard Business Review, oktobris 2014.</li><li><strong>Edmondson, Amy C.</strong> (2018). <a href="https://amycedmondson.com/books/" target="_blank" rel="noopener noreferrer"><em>«The Fearless Organization: Creating Psychological Safety in the Workplace for Learning, Innovation, and Growth»</em></a>. John Wiley & Sons.</li><li><strong>Grove, Andrew S.</strong> (1983). <em>«High Output Management»</em>. Random House (Vadītāja sviras princips 1 pret 1 sarunās).</li><li><strong>Google re:Work</strong>. <a href="https://rework.withgoogle.com/intl/en/guides/understand-team-effectiveness/" target="_blank" rel="noopener noreferrer"><em>«Project Aristotle (psiholoģiskā drošība) un Project Oxygen (efektīva vadītāja īpašības)»</em></a>.</li><li><strong>Notion palīdzības centrs</strong>. <a href="https://www.notion.so/help/export-your-content" target="_blank" rel="noopener noreferrer"><em>«Export your content & Workspace-wide export Enterprise plānā»</em></a>.</li><li><strong>Slack palīdzības centrs & Discovery API</strong>. <a href="https://slack.com/help/articles/201658943-Export-your-workspace-data" target="_blank" rel="noopener noreferrer"><em>«Datu eksports no darba vietas»</em></a> un <a href="https://slack.com/help/articles/360002079527-A-guide-to-Slacks-Discovery-APIs" target="_blank" rel="noopener noreferrer"><em>«A guide to Slack’s Discovery APIs atbilstībai un DLP»</em></a>.</li><li><strong>The Sedona Conference</strong>. <a href="https://thesedonaconference.org/" target="_blank" rel="noopener noreferrer"><em>«Commentary on Legal Holds and ESI in Employment Disputes»</em></a> / <a href="https://www.law.cornell.edu/rules/frcp/rule_34" target="_blank" rel="noopener noreferrer"><em>Federal Rules of Civil Procedure (FRCP 26. un 34. noteikums)</em></a>.</li><li><strong>Eiropas Savienība (VDAR)</strong>. <a href="https://gdpr-info.eu/art-9-gdpr/" target="_blank" rel="noopener noreferrer"><em>«Vispārīgā datu aizsardzības regula — 9. pants (Īpašu kategoriju personas datu apstrāde)»</em></a>.</li></ol>'
				]
			}
		]
	}
];

