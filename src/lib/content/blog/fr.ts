import type { BlogPost, BlogUiStrings } from './types';

export const blogUiFr: BlogUiStrings = {
	blogTitle: 'Blog et notes d’ingénierie',
	blogSubtitle:
		'Réflexions sur la méthodologie des 1:1, la charge cognitive des équipes techniques et la conception logicielle Zero-Knowledge.',
	latestArticles: 'Derniers articles',
	readArticle: 'Lire l’article',
	backToBlog: 'Retour au Blog',
	publishedOn: 'Publié le',
	writtenBy: 'Auteur',
	shareArticle: 'Partager',
	linkCopied: 'Lien copié dans le presse-papier !',
	tryDemoTitle: 'Menez des 1:1 avec une garantie mathématique de confidentialité',
	tryDemoBody:
		'encrypted1on1 préserve vos notes et objectifs grâce au chiffrement de bout en bout dans le navigateur. Ni le serveur ni les administrateurs ne peuvent accéder à vos échanges.',
	tryDemoCta: 'Essayer la démo sans inscription',
	moreArticles: 'Autres articles du blog'
};

export const blogPostsFr: BlogPost[] = [
	{
		slug: 'why-we-built-encrypted1on1',
		title: 'Pourquoi nous avons créé encrypted1on1',
		subtitle:
			'La prise de conscience que les notes de 1:1 exigent des mathématiques, pas de simples politiques de confidentialité.',
		description:
			'Les notes de 1:1 renferment les échanges les plus sensibles d’une entreprise. Pourquoi la promesse « nous ne regardons pas » ne suffit pas et comment est née la plateforme Zero-Knowledge.',
		date: '2026-08-09',
		formattedDate: '9 août 2026',
		readTime: '4 min de lecture',
		category: 'Manifeste',
		author: {
			name: 'Aleksejs',
			role: 'Fondateur et développeur'
		},
		tags: ['Sécurité', 'Zero-Knowledge', 'Réunions 1:1', 'Open Source'],
		leadHtml:
			'Nous ne voulions pas créer un énième outil SaaS. Nous avons commencé comme client. Voici l’histoire de la fermeture d’un service tiers qui nous a poussés à repenser où dorment réellement les discussions les plus confidentielles de l’équipe.',
		sections: [
			{
				heading: 'Nous avons commencé comme client',
				paragraphsHtml: [
					'Notre organisation gérait son processus de 1 à 1 via un outil tiers — l’un des nombreux produits bien conçus et bien intentionnés de ce secteur. Il remplissait parfaitement son rôle.',
					'Puis, comme beaucoup de petits éditeurs finissent par le faire, il a annoncé sa fermeture. C’est normal : les startups cessent leur activité, les produits achèvent leur cycle.',
					'Ce qui ne l’était pas, c’est ce que cela nous a fait réaliser : nous ne nous étions jamais vraiment demandé ce que la fermeture d’un fournisseur <em>signifie</em> pour le contenu d’un 1 à 1.'
				]
			},
			{
				heading: 'Ce que renferment réellement les notes de 1:1',
				paragraphsHtml: [
					'Songez à tout ce qui est consigné au cours d’une année de vrais échanges : des préoccupations de performance partagées sous le sceau de la confidentialité, les notes privées d’un manager sur l’évolution d’un collaborateur, des discussions sur la rémunération ou des aléas personnels qu’un employé a confiés en comptant sur le fait que cela reste strictement entre deux personnes.',
					'Rien de tout cela ne devrait être accessible à quiconque au-delà des deux participants — ni au n+2, ni aux RH, ni au service informatique, et encore moins <em>à l’éditeur du logiciel</em>, même si techniquement ce dernier pouvait toujours lire le texte en clair dans la base de données.'
				]
			},
			{
				heading: 'L’épreuve de la fermeture : pourquoi les promesses ne suffisent pas',
				paragraphsHtml: [
					'Une fermeture est exactement le moment où la gestion des données est soumise à la plus rude épreuve : des équipes support effectuant des exports complets, un acquéreur menant des audits techniques, et une équipe réduite liquidant tout sous la pression des délais.',
					'Nous n’avions aucune raison de penser qu’il arriverait malheur à nos données. Mais nous n’avions aucun moyen de <em>savoir</em> que ce ne serait pas le cas, car tout le modèle reposait sur « faites-nous confiance », alors que « nous » était une entreprise en train de disparaître.'
				]
			},
			{
				heading: 'Des mathématiques plutôt que des chartes de confidentialité',
				paragraphsHtml: [
					'C’est cet angle mort que nous avons voulu combler pour de bon, pas seulement pour notre organisation, mais comme une solution vérifiable par chacun plutôt qu’acceptée sur parole.',
					'Si une plateforme de 1:1 doit abriter certaines des discussions les plus sensibles d’une entreprise, « nous promettons de ne pas regarder » n’est pas une garantie suffisante. La seule vraie garantie est celle où regarder est <em>matériellement impossible</em> : où l’exploitant, l’équipe IT et même une compromission intégrale du serveur n’obtiennent que du texte chiffré.',
					'Ce n’est pas un engagement dans un PDF. C’est du vrai chiffrement de bout en bout (E2EE), avec un code source ouvert pour que tout ingénieur puisse vérifier les garanties de ses propres yeux.',
					'<strong>encrypted1on1 est né de cette conviction.</strong>'
				]
			}
		]
	},
	{
		slug: 'v1-0-0-release',
		title: 'encrypted1on1 v1.0.0 : Première version stable',
		subtitle:
			'Entretiens 1:1 auto-hébergés et chiffrés de bout en bout, préparation asynchrone, suivi des objectifs et déploiement Docker.',
		description:
			'Lancement de encrypted1on1 v1.0.0 : la première version stable de notre plateforme E2EE pour les entretiens 1:1 entre managers et collaborateurs. Image Docker, garanties cryptographiques et démo en ligne.',
		date: '2026-08-16',
		formattedDate: '16 août 2026',
		readTime: '5 min de lecture',
		category: 'Version',
		author: {
			name: 'Aleksejs',
			role: 'Fondateur et mainteneur'
		},
		tags: ['v1.0.0', 'Version', 'Docker', 'Open Source', 'Sécurité'],
		coverImage: '/images/landing/privacy-infrastructure.jpg',
		leadHtml:
			'Aujourd’hui marque une étape majeure : nous publions officiellement <strong>encrypted1on1 v1.0.0</strong> — notre première version stable pour la production. Elle offre aux équipes un espace structuré pour les entretiens 1:1 où le serveur n’a jamais accès en clair à vos notes, retours ou objectifs.',
		sections: [
			{
				heading: 'Pourquoi les réunions 1:1 exigent une architecture Zero-Knowledge',
				paragraphsHtml: [
					'Les entretiens 1:1 entre un manager et ses collaborateurs concentrent les échanges les plus confidentiels d’une entreprise : retours sur performance partagés sous le sceau de la confiance, trajectoires de rémunération, alertes d’épuisement et situations personnelles délicates.',
					'Les outils cloud traditionnels, les wikis internes et les documents partagés exigent une confiance aveugle : envers les administrateurs de bases de données, les hébergeurs et les équipes support.',
					'Avec encrypted1on1, nous avons remplacé la confiance par les mathématiques. L’intégralité des contenus est chiffrée côté client dans le navigateur avant d’être transmise au serveur. Même une personne disposant d’un accès root complet au serveur ou à la base de données ne voit qu’un texte chiffré indéchiffrable.'
				]
			},
			{
				heading: 'Les nouveautés de la version 1.0.0',
				paragraphsHtml: [
					'Cette version 1.0.0 couronne plusieurs mois d’itérations architecturales, d’audits de sécurité et d’utilisation concrète en équipe. Elle intègre d’emblée :',
					'<ul><li><strong>Formulaires d’entretien (« anketas ») chiffrés de bout en bout :</strong> paires de clés asymétriques X25519 par participant, chiffrement symétrique authentifié XChaCha20-Poly1305 pour le contenu et dérivation de clés Argon2id à partir du mot de passe utilisateur.</li><li><strong>Préparation asynchrone :</strong> manager et collaborateur préparent l’ordre du jour, signalent les blocages et évaluent leur humeur et charge de travail en amont du point.</li><li><strong>Continuité des objectifs au fil des cycles :</strong> les décisions et objectifs trimestriels ne tombent pas dans l’oubli — ils sont automatiquement reconduits de cycle en cycle jusqu’à leur accomplissement ou archivage.</li><li><strong>Rapports et tendances respectueux de la vie privée :</strong> vue de synthèse périodique avec courbes d’évolution (sparklines) générées en SVG directement dans le navigateur, sans traceurs externes ni traitement en clair côté serveur.</li><li><strong>Gestion complète des comptes :</strong> modes d’inscription modulables (sur invitation, restreint aux administrateurs ou inscription autonome limitée au domaine de messagerie de l’entreprise avec double opt-in), changement de mot de passe sécurisé et export complet des données déchiffrées en JSON.</li></ul>'
				]
			},
			{
				heading: 'Une ingénierie de sécurité vérifiable',
				paragraphsHtml: [
					'encrypted1on1 a été conçu selon les règles de l’art de la défense en profondeur :',
					'<ul><li><strong>Tests de confidentialité en boîte noire :</strong> suite e2e Playwright simulant deux sessions de navigateur indépendantes avec cryptographie réelle et inspectant la base de données brute pour prouver mathématiquement l’absence de texte en clair dans le stockage ou les réponses API.</li><li><strong>En-têtes de sécurité stricts :</strong> Content Security Policy (CSP) stricte, Subresource Integrity (SRI) sur tous les fichiers statiques et HSTS obligatoire.</li><li><strong>Conteneur Docker renforcé :</strong> exécution sous utilisateur non privilégié avec FrankenPHP et Caddy, assurant la gestion automatique des certificats HTTPS et des vérifications d’intégrité (HEALTHCHECK).</li><li><strong>Stockage haute performance :</strong> SQLite avec mode Write-Ahead Logging (WAL) actif par défaut pour des écritures concurrentes rapides, ainsi qu’une procédure documentée de migration vers MySQL pour les déploiements plus vastes.</li></ul>'
				]
			},
			{
				heading: 'Démarrage rapide et déploiement Docker',
				paragraphsHtml: [
					'Le déploiement de encrypted1on1 ne requiert qu’une seule commande grâce à notre conteneur officiel sur GitHub Container Registry :',
					'<pre><code>docker pull ghcr.io/aleksejs1/encrypted1on1:1.0.0</code></pre>',
					'Si vous souhaitez tester l’expérience sans rien installer, découvrez notre bac à sable en ligne sur <a href="https://demo.private1on1.eu" target="_blank" rel="noopener noreferrer">demo.private1on1.eu</a> — disponible sans inscription avec un historique complet dans toutes les langues supportées.',
					'Le code source est entièrement libre sous licence <strong>AGPLv3</strong> et consultable sur <a href="https://github.com/aleksejs1/encrypted1on1" target="_blank" rel="noopener noreferrer">GitHub</a>.'
				]
			}
		]
	}
];
