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
	}
];
