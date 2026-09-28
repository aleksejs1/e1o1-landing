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
	},
	{
		slug: 'v1-2-0-release',
		title: 'encrypted1on1 v1.2.0 : versionnage des formulaires, édition autonome et UX affinée',
		subtitle:
			'Comment faire évoluer les trames d’entretiens 1:1 sans altérer l’historique passé, édition de ses propres accords et report de date.',
		description:
			'encrypted1on1 v1.2.0 introduit le versionnage des questionnaires pour faire évoluer les trames en toute sécurité, la modification de ses propres points d’accord et le report de rendez-vous.',
		date: '2026-08-25',
		formattedDate: '25 août 2026',
		readTime: '4 min de lecture',
		category: 'Version',
		author: {
			name: 'Aleksejs',
			role: 'Fondateur et mainteneur'
		},
		tags: ['v1.2.0', 'Version', 'UX', 'Versionnage', 'Open Source'],
		coverImage: '/images/landing/methodology-leverage.jpg',
		leadHtml:
			'Deux semaines après la sortie de v1.0.0, nous publions <strong>encrypted1on1 v1.2.0</strong>. Cette version met l’accent sur la fluidité d’usage au quotidien et l’intégrité des archives : elle résout le casse-tête architectural de l’évolution des questionnaires sans falsifier les réunions passées, permet d’éditer ses propres interventions et perfectionne l’expérience utilisateur.',
		sections: [
			{
				heading: 'Le défi de la fidélité historique des trames d’entretien',
				paragraphsHtml: [
					'Dans tout outil de management 1:1, les formulaires de questions évoluent avec le temps. Dans encrypted1on1, nous souhaitions enrichir l’évaluation du ressenti collaborateur (« sentiments ») en passant de 6 états généraux à 12 émotions nuancées (en intégrant des options comme <em>serein</em>, <em>reconnaissant</em>, <em>stressé</em>, <em>fier</em>, <em>désabusé</em> et <em>isolé</em>).',
					'Dans une application classique, l’équipe met simplement à jour la liste des questions en base. Mais sur une plateforme qui préserve les traces d’entretiens passés, cette pratique crée une distorsion silencieuse : les réunions tenues des mois auparavant se retrouvent interprétées selon la nouvelle nomenclature. Une case qu’un employé n’avait pas cochée tout simplement parce qu’elle n’existait pas devient rétroactivement indiscernable d’une option qu’il a lue et consciemment écartée.',
					'Afin de préserver l’authenticité des archives, la version 1.2.0 introduit le <strong>versionnage des formulaires d’anketa</strong> (<code>formVersion</code>). Chaque entretien reste figé dans la version de son schéma d’origine (v1), tandis que les nouvelles réunions bénéficient automatiquement de la trame v2 avec le catalogue élargi d’émotions.',
					'Ce choix garantit que les entretiens menés sur les versions antérieures gardent scrupuleusement leur intégrité d’origine au fil des années.'
				]
			},
			{
				heading: 'Modification et suppression de ses propres accords et commentaires',
				paragraphsHtml: [
					'Un entretien 1:1 efficace est interactif : on échange des perspectives, on affine des plans d’action en direct et il arrive que des fautes de frappe se glissent dans la prise de notes. Auparavant, une fois consigné dans les conclusions ou les commentaires, un élément ne pouvait plus être modifié.',
					'Avec la v1.2.0, chaque participant peut modifier ou supprimer ses propres entrées dans les « Conclusions d’entretien » et ses commentaires dans l’anketa. Cette souplesse s’accompagne d’un cloisonnement strict par auteur : vous pouvez retoucher vos propres mots, mais il est strictement impossible de modifier les déclarations de votre interlocuteur.'
				]
			},
			{
				heading: 'Report des entretiens à venir et noms d’affichage',
				paragraphsHtml: [
					'Cette version intègre également des gains notables de confort opérationnel :',
					'<ul><li><strong>Report anticipé de réunion :</strong> auparavant, la reprogrammation n’était accessible qu’une fois la date dépassée. Désormais, en cas d’imprévu d’agenda, la date d’un entretien à venir peut être modifiée d’un clic depuis l’anketa.</li><li><strong>Noms d’affichage personnalisés :</strong> les adresses e-mail brutes et identifiants UUID ont été remplacés par des noms d’affichage conviviaux dans les en-têtes et les récapitulatifs.</li><li><strong>Contraste en mode sombre et tests WCAG en CI :</strong> les badges et contrastes ont été réajustés pour le thème sombre, avec une validation automatique de conformité WCAG dans notre chaîne d’intégration continue.</li><li><strong>Transparence de version :</strong> les administrateurs système peuvent activer l’affichage de la version et de l’empreinte git dans le pied de page via la variable <code>SHOW_VERSION</code>.</li></ul>'
				]
			},
			{
				heading: 'Mise à niveau et conteneur Docker',
				paragraphsHtml: [
					'La version v1.2.0 préserve une rétrocompatibilité intégrale et applique automatiquement les migrations de base de données pour SQLite et MySQL. L’image Docker officielle est disponible :',
					'<pre><code>docker pull ghcr.io/aleksejs1/encrypted1on1:1.2.0</code></pre>',
					'Vous pouvez également tester les nouvelles trames et améliorations d’interface sans installation sur notre démo en ligne : <a href="https://demo.private1on1.eu" target="_blank" rel="noopener noreferrer">demo.private1on1.eu</a>.',
					'Le journal des modifications et l’ensemble des sources sont accessibles sur <a href="https://github.com/aleksejs1/encrypted1on1/releases/tag/v1.2.0" target="_blank" rel="noopener noreferrer">GitHub</a>.'
				]
			}
		]
	}
];
