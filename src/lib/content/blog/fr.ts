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
	},
	{
		slug: '1-on-1-question-bank-templates',
		title:
			'Au-delà du simple « Comment ça va ? » : découvrez la Banque de questions et modèles 1:1',
		subtitle:
			'Une sélection de questions stimulantes réparties en 7 dimensions clés — avec les explications méthodologiques et des trames prêtes à l’emploi.',
		description:
			'Pourquoi les entretiens 1:1 s’enlisent trop souvent dans de simples points d’avancement, et comment notre Banque de questions aide à briser les non-dits et prévenir l’épuisement.',
		date: '2026-09-02',
		formattedDate: '2 septembre 2026',
		readTime: '4 min de lecture',
		category: 'Guide',
		author: {
			name: 'Aleksejs',
			role: 'Fondateur et mainteneur'
		},
		tags: ['Entretiens 1:1', 'Banque de questions', 'Management', 'Guide', 'Modèles'],
		coverImage: '/images/playbook/high-leverage-1-on-1.jpg',
		leadHtml:
			'L’erreur la plus coûteuse en management d’ingénierie consiste à réduire l’entretien 1:1 à un simple point d’avancement de projet. Aujourd’hui, nous ouvrons notre <a href="/fr/playbook/questions/">Banque de questions 1:1</a> interactive : un répertoire structuré de questions éprouvées sur le terrain, conçues pour dépasser les banalités et aborder ce qui compte réellement.',
		sections: [
			{
				heading: 'Le piège du « point d’avancement »',
				paragraphsHtml: [
					'Nous avons tous vécu ces 1:1 stériles : « Où en est le projet X ? » — « Ça avance bien, bientôt mergé. » — « Des blocages ? » — « Non, tout roule. » En dix minutes, les sujets s’épuisent. La réunion s’achève prématurément sur un vague sentiment d’obligation remplie, mais sans le moindre progrès d’alignement ou de confiance réciproque.',
					'Le suivi de tâches a sa place dans les tickets, les discussions asynchrones et les points d’équipe du matin. L’entretien 1:1 est l’investissement au rendement le plus élevé qu’un manager puisse consacrer à ses collaborateurs — à la condition de poser des questions capables de percer la surface pour révéler les blocages systémiques, l’épuisement latent ou les aspirations professionnelles inexploitées.'
				]
			},
			{
				heading: '7 dimensions pour des conversations à fort impact',
				paragraphsHtml: [
					'Plutôt que d’aligner une liste brute d’amorces de conversation, nous avons articulé la <a href="/fr/playbook/questions/">Banque de questions</a> autour de sept piliers stratégiques :',
					'<ul><li><strong>Relationnel & Énergie :</strong> instaurer la sécurité psychologique et appréhender le contexte humain avant d’aborder les considérations techniques.</li><li><strong>Feedback au manager :</strong> repérer ses propres angles morts, adapter son style d’accompagnement et lever les frictions hiérarchiques.</li><li><strong>Équipe & Culture :</strong> évaluer la cohésion, l’ambiance collective et la dynamique entre pairs.</li><li><strong>Goulots d’étranglement & Processus :</strong> éliminer les réunions superflues, fiabiliser les chaînes de déploiement et fluidifier la collaboration inter-équipes.</li><li><strong>Stratégie & Sens :</strong> relier le travail quotidien des pull requests à la vision d’ensemble de l’entreprise et à l’impact client.</li><li><strong>Évolution & Ambitions :</strong> tracer les perspectives de carrière à long terme, développer les compétences et identifier les prochains défis stimulants.</li><li><strong>Charge & Bien-être :</strong> détecter la surcharge cognitive, le stress dissimulé et le risque de burn-out bien avant une démission.</li></ul>'
				]
			},
			{
				heading: 'Le principe « Pourquoi poser cette question ? »',
				paragraphsHtml: [
					'Une question n’a de valeur que par l’intention qui l’anime. Dans notre banque, chaque formulation est accompagnée d’une section méthodologique <strong>« Pourquoi poser cette question ? »</strong>.',
					'Cet éclairage détaille les leviers psychologiques en jeu, les signaux faibles à observer dans la réponse et la manière de rebondir constructivement sans placer votre interlocuteur sur la défensive.'
				]
			},
			{
				heading: 'Utiliser la Banque de questions dans encrypted1on1',
				paragraphsHtml: [
					'La Banque de questions est accessible en accès libre sur <a href="/fr/playbook/questions/">/fr/playbook/questions/</a> avec recherche instantanée par mot-clé, filtres par thématique et générateur d’inspiration aléatoire.',
					'Ces questions peuvent en outre être directement intégrées dans vos trames <a href="https://demo.private1on1.eu" target="_blank" rel="noopener noreferrer">encrypted1on1</a> en amont de votre entretien. Manager et collaborateur prennent ainsi le temps de mûrir leurs réflexions de manière asynchrone, tandis que notre chiffrement zéro-connaissance garantit la confidentialité absolue de leurs échanges.'
				]
			}
		]
	},
	{
		slug: '5-essential-books-for-high-leverage-1-on-1s',
		title: 'La bibliothèque 1:1 : 5 livres incontournables pour les managers d’ingénierie',
		subtitle:
			'L’essentiel de la sagesse managériale d’Andy Grove, Ben Horowitz, Julie Zhuo, Camille Fournier et Kim Scott adapté à vos entretiens 1:1.',
		description:
			'Explorez notre bibliothèque 1:1 interactive : cinq ouvrages fondateurs du management moderne, leurs principes clés, leurs questions catalytiques et les modèles associés.',
		date: '2026-09-10',
		formattedDate: '10 septembre 2026',
		readTime: '5 min de lecture',
		category: 'Guide',
		author: {
			name: 'Aleksejs',
			role: 'Fondateur et mainteneur'
		},
		tags: ['Bibliothèque', 'Entretiens 1:1', 'Management', 'Leadership', 'Livres'],
		coverImage: '/images/playbook/manager-playbook.jpg',
		leadHtml:
			'Le management efficace s’invente rarement en vase clos. Les principes qui font des entretiens 1:1 de formidables leviers de progrès — sécurité psychologique, ordre du jour fixé par le collaborateur, détection précoce des freins organisationnels et franchise bienveillante — ont été forgés et affinés au fil des décennies. Aujourd’hui, nous inaugurons notre <a href="/fr/playbook/books/">Bibliothèque 1:1</a> interactive.',
		sections: [
			{
				heading: 'Pourquoi une bibliothèque dédiée au 1:1 ?',
				paragraphsHtml: [
					'La plupart des manuels de leadership s’étendent sur des centaines de pages traitant de vision macroéconomique, de processus de recrutement ou de jeux d’influence. Pourtant, lorsqu’on interroge des managers aguerris sur l’activité qui produit le plus fort levier au quotidien (leverage), ils mentionnent quasi systématiquement les chapitres consacrés aux entretiens en tête-à-tête.',
					'Afin de rendre ces enseignements directement exploitables sans avoir à parcourir des tomes entiers, nous avons conçu la <a href="/fr/playbook/books/">Bibliothèque 1:1</a>. Nous avons condensé cinq ouvrages de référence pour en extraire l’approche fondamentale, les règles d’or, des questions prêtes à poser et les liens directs avec les trames de notre Guide.'
				]
			},
			{
				heading: '5 œuvres fondamentales du management',
				paragraphsHtml: [
					'Notre sélection rassemble cinq titres incontournables qui ont façonné le leadership technologique moderne :',
					'<ul><li><strong>« High Output Management » d’Andy Grove (1983) :</strong> Le grand classique de la Silicon Valley. Grove y démontre que le rendement d’un manager équivaut à celui de son équipe et que 90 minutes consacrées à un 1:1 décuplent la qualité du travail d’un collaborateur sur 80 heures (un effet de levier supérieur à 50x). Son principe cardinal : <em>l’entretien 1:1 est la réunion du collaborateur</em>.</li><li><strong>« The Hard Thing About Hard Things » de Ben Horowitz (2014) :</strong> Le guide par excellence de la gestion des temps troubles. Horowitz qualifie le 1:1 de soupape de sécurité vitale pour l’organisation : les bonnes nouvelles circulent vite, mais les mauvaises stagnent ; des échanges réguliers permettent de désamorcer les dérapages avant qu’ils ne causent des démissions surprises ou des échecs critiques.</li><li><strong>« The Making of a Manager » de Julie Zhuo (2019) :</strong> Le modèle du leadership humain et empathique. Julie Zhuo articule le 1:1 autour de quatre priorités : bâtir la confiance mutuelle, clarifier les priorités réelles, débloquer les situations complexes et accompagner la trajectoire professionnelle.</li><li><strong>« The Manager’s Path » de Camille Fournier (2017) :</strong> La référence pour les carrières techniques et d’ingénierie. Fournier aborde la gestion fine : guider les juniors, accompagner les ingénieurs Staff et équilibrer la dette technique. Elle alerte très clairement : un développeur qui répond <em>« Je n’ai rien de particulier à aborder »</em> ne signale pas une mer d’huile, mais un risque imminent de désengagement.</li><li><strong>« Radical Candor » de Kim Scott (2017) :</strong> Bienveillance humaine conjuguée à une franchise directe. Scott démontre que le 1:1 est l’endroit où se forge la confiance authentique et pose la règle d’or : avant de formuler une critique à son collaborateur, le manager doit d’abord solliciter des retours sincères sur son propre management.</li></ul>'
				]
			},
			{
				heading: 'De la philosophie aux trames d’entretien prêtes à l’emploi',
				paragraphsHtml: [
					'Un livre de management n’a d’intérêt que s’il transforme la pratique concrète. Pour chaque ouvrage, la <a href="/fr/playbook/books/">Bibliothèque</a> propose des questions éprouvées sur le terrain et renvoie vers les modèles correspondants du Guide :',
					'<ul><li>La vision d’effet de levier de Grove s’incarne dans le <a href="/fr/playbook/high-leverage-1-on-1/">Manifeste du 1:1 à fort effet de levier</a>.</li><li>L’approche de transparence d’Horowitz inspire le modèle <a href="/fr/playbook/skip-level/">Skip-Level 1:1 : diagnostic de santé d’équipe</a>.</li><li>La démarche de confiance de Zhuo structure la trame <a href="/fr/playbook/first-1-on-1/">Premier entretien 1:1 : attentes et confiance</a>.</li><li>Le suivi de carrière de Fournier pilote le <a href="/fr/playbook/career-growth/">Bilan trimestriel de carrière et d’évolution</a>.</li><li>La prévention de la surcharge de Scott anime le guide <a href="/fr/playbook/burnout-detection/">Triage de surcharge et détection du burn-out</a>.</li></ul>'
				]
			},
			{
				heading: 'Mise en pratique confidentielle avec encrypted1on1',
				paragraphsHtml: [
					'Le véritable écueil des 1:1 utiles est rarement le manque de bonne volonté, mais la précipitation et l’absence d’un espace de préparation partagé et confidentiel. Sans notes préalables, l’échange retombe vite dans un suivi de tâches anecdotique.',
					'Grâce à <a href="https://demo.private1on1.eu" target="_blank" rel="noopener noreferrer">encrypted1on1</a>, managers et collaborateurs peuvent puiser dans les questions de ces grands auteurs, formuler leurs réflexions en amont de façon asynchrone et bénéficier d’un chiffrement client-side de bout en bout qui garantit le secret absolu de leurs notes.',
					'Découvrez les cinq ouvrages, consultez les fiches de synthèse et intégrez les questions depuis <a href="/fr/playbook/books/">/fr/playbook/books/</a>.'
				]
			}
		]
	},
	{
		slug: 'meeting-templates-playbook-and-form-templates-preview',
		title:
			'Le Guide des modèles 1:1 : trames éprouvées et avant-première des modèles de formulaires',
		subtitle:
			'Une collection interactive d’ordres du jour adaptés à chaque étape d’équipe — avec un aperçu exclusif de la prise en charge prochaine des modèles de trames dans encrypted1on1.',
		description:
			'Du premier entretien au diagnostic de surcharge et à l’évolution de carrière : découvrez les modèles du Guide et les coulisses du futur support de modèles de formulaires.',
		date: '2026-09-16',
		formattedDate: '16 septembre 2026',
		readTime: '5 min de lecture',
		category: 'Guide',
		author: {
			name: 'Aleksejs',
			role: 'Fondateur et mainteneur'
		},
		tags: ['Guide', 'Modèles', 'Entretiens 1:1', 'Feuille de route', 'Nouveauté'],
		coverImage: '/images/playbook/bi-weekly-pulse.jpg',
		leadHtml:
			'Deux entretiens 1:1 ne devraient jamais se ressembler. Le premier rendez-vous avec un nouvel arrivant requiert un cadre radicalement différent d’un point trimestriel de trajectoire de carrière ou du désamorçage urgent d’un début de burn-out. Aujourd’hui, nous mettons en lumière notre <a href="/fr/playbook/">Guide des modèles 1:1</a> — et dévoilons une évolution majeure à venir sur encrypted1on1.',
		sections: [
			{
				heading: 'Pourquoi les trames uniques échouent',
				paragraphsHtml: [
					'L’écueil le plus répandu en management technique consiste à réutiliser indéfiniment la même discussion informelle semaine après semaine. Sans structure intentionnelle, ces rendez-vous s’étiolent en un simple relevé de tickets : <em>« Sur quoi avances-tu ? Des blocages ? Très bien, à la semaine prochaine. »</em>',
					'Les managers performants savent que leurs collaborateurs traversent des cycles opérationnels distincts. Un 1:1 efficace calibre sa trame selon l’objectif du moment : instaurer la sécurité psychologique lors de l’onboarding, dénouer les frictions du quotidien, tracer des perspectives de long terme ou réagir à une surcharge critique.'
				]
			},
			{
				heading: '6 modèles de référence dans le Guide',
				paragraphsHtml: [
					'Notre <a href="/fr/playbook/">Guide</a> propose des ordres du jour minutieusement articulés autour de six cas d’usage :',
					'<ul><li><strong><a href="/fr/playbook/high-leverage-1-on-1/">Manifeste du 1:1 à fort effet de levier :</a></strong> Le canevas fondateur hérité de la vision d’Andy Grove. Quatre piliers pour équilibrer énergie individuelle, levée des points de blocage, vision stratégique et coaching réciproque.</li><li><strong><a href="/fr/playbook/first-1-on-1/">Premier entretien 1:1 : attentes et confiance :</a></strong> Indispensable pour les nouveaux arrivants. Établit la sécurité psychologique, explicite les modes de communication préférés et clarifie les attentes mutuelles dès le premier mois.</li><li><strong><a href="/fr/playbook/bi-weekly-pulse/">Point d’étape bimensuel :</a></strong> La cadence de croisière des équipes véloces. Entretient le dynamisme, désamorce les freins émergents et assure le suivi rigoureux des actions d’une session à l’autre.</li><li><strong><a href="/fr/playbook/career-growth/">Bilan trimestriel de carrière et d’évolution :</a></strong> Un temps d’échange détaché de l’urgence des sprints. Évalue le développement des compétences, les jalons de la filière technique et les opportunités d’élargissement d’impact.</li><li><strong><a href="/fr/playbook/burnout-detection/">Triage de surcharge et détection du burn-out :</a></strong> Un protocole bienveillant pour repérer la fatigue cognitive dissimulée et redistribuer la charge de travail avant d’atteindre la rupture.</li><li><strong><a href="/fr/playbook/skip-level/">Skip-Level 1:1 : diagnostic de santé d’équipe :</a></strong> Destiné aux directeurs, VP et fondateurs désireux de mesurer la cohérence culturelle et les irritants opérationnels au contact direct des équipes terrain.</li></ul>'
				]
			},
			{
				heading: 'Conçus pour l’action : minutage, conseils et copie rapide',
				paragraphsHtml: [
					'Chaque fiche du Guide est prête à l’emploi pour vos invitations d’agenda :',
					'<ul><li><strong>Minutage indicatif :</strong> Des durées conseillées par séquence pour couvrir l’essentiel sans précipitation.</li><li><strong>Questions catalytiques :</strong> Des amorces précises qui encouragent une introspection sincère sans provoquer de repli défensif.</li><li><strong>Préparation et antipatterns :</strong> Les étapes clés à anticiper pour les deux participants et les pièges récurrents à éviter.</li><li><strong>Bouton « Copier l’ordre du jour » :</strong> Copiez d’un clic l’intégralité de la trame en Markdown pour la glisser dans votre invitation de calendrier ou vos notes.</li></ul>'
				]
			},
			{
				heading:
					'Avant-première : bientôt la prise en charge des modèles de formulaires dans encrypted1on1 !',
				paragraphsHtml: [
					'Bien que les trames du <a href="/fr/playbook/">Guide</a> soient utilisables dans n’importe quel outil, nous avons l’intime conviction que la continuité managériale atteint son plein potentiel quand la structure est directement portée par la plateforme d’entretien.',
					'Aujourd’hui, encrypted1on1 propose une trame unique et versionnée avec météo émotionnelle, priorités et engagements mutuels. Toutefois, des entretiens variés appellent des formulaires spécifiques.',
					'Nous avons le plaisir de vous annoncer que nous développons activement le <strong>support natif des modèles de questionnaires</strong> directement dans encrypted1on1 ! Très prochainement, lors de la création d’une réunion, vous pourrez choisir une trame adaptée aux scénarios de notre Guide (onboarding, carrière, point bimensuel) ou concevoir des modèles personnalisés pour votre entreprise — avec la garantie absolue de notre chiffrement zéro-connaissance.',
					'Parcourez dès aujourd’hui l’ensemble des scénarios sur <a href="/fr/playbook/">/fr/playbook/</a> et préparez-vous pour les prochaines nouveautés !'
				]
			}
		]
	},
	{
		slug: 'v1-3-0-release',
		title: 'encrypted1on1 v1.3.0 : modèles d’anketa intégrés et entretiens ponctuels',
		subtitle:
			'Des trames de questions spécialisées pour l’intégration, l’évolution de carrière et le soutien face à la charge, associées à des entretiens ponctuels sans rupture de cycle.',
		description:
			'encrypted1on1 v1.3.0 introduit des modèles de questionnaires natifs (onboarding, carrière, soutien), des entretiens ponctuels sans divergence d’historique et le support Markdown.',
		date: '2026-09-24',
		formattedDate: '24 septembre 2026',
		readTime: '4 min de lecture',
		category: 'Version',
		author: {
			name: 'Aleksejs',
			role: 'Fondateur et mainteneur'
		},
		tags: ['v1.3.0', 'Version', 'Modèles', 'Entretiens 1:1', 'Open Source'],
		coverImage: '/images/landing/privacy-infrastructure.jpg',
		leadHtml:
			'Un mois seulement après l’introduction du versionnage de formulaires dans la v1.2.0, nous sommes ravis d’annoncer <strong>encrypted1on1 v1.3.0</strong>. Cette version majeure concrétise l’une des fonctionnalités les plus attendues : les <strong>modèles d’entretien natifs</strong> directement intégrés aux anketas, complétés par la prise en charge des <strong>entretiens ponctuels</strong> et le support du Markdown dans les réponses.',
		sections: [
			{
				heading: '4 modèles spécialisés pour vos anketas',
				paragraphsHtml: [
					'Un questionnaire unique ne peut couvrir l’ensemble des situations managériales. Dans la v1.3.0, lors de la création d’une anketa, vous pouvez choisir parmi quatre trames conçues sur mesure :',
					'<ul><li><strong>1:1 Régulier :</strong> Le format classique et éprouvé pour les échanges récurrents — bilan d’énergie et de ressenti, accomplissements récents, sujets à débattre et accords mutuels.</li><li><strong>Onboarding (Premier 1:1) :</strong> Conçu pour les nouveaux collaborateurs ou les transitions d’équipe. Met l’accent sur la sécurité psychologique, les habitudes de travail, les attentes mutuelles et un regard neuf sur les processus internes.</li><li><strong>Carrière & Évolution (Career & Growth) :</strong> Pensé pour les bilans trimestriels. Comprend une rétrospective d’énergie sur les projets récents, un calibrage de trajectoire à 3 voies (expertise technique, management ou compétences transverses), un plan d’action à 90 jours et des engagements de parrainage de la part du manager.</li><li><strong>Soutien & Gestion de charge (Support Check-in) :</strong> Conçu pour les périodes de stress intense ou de risque d’épuisement. Structuré comme un audit de charge bienveillant pour identifier les sources de fatigue, poser des limites claires et acter des mesures d’allègement immédiates.</li></ul>'
				]
			},
			{
				heading: 'Transition de cycle intelligente : les modèles ne s’enlisent pas',
				paragraphsHtml: [
					'Un piège classique des outils de réunions est qu’en choisissant un questionnaire trimestriel, celui-ci tend à se répéter par erreur toutes les deux semaines. Dans la v1.3.0, ce problème est résolu dès la conception.',
					'Lorsqu’une anketa utilisant un modèle spécialisé (tel que <code>career_growth</code> ou <code>support_checkin</code>) est archivée, la réunion suivante générée automatiquement rebascule vers le modèle <code>regular</code>. La discussion spécifique a lieu au moment opportun, tandis que la cadence bimensuelle reprend son cours sans configuration manuelle.',
					'De plus, les entretiens actifs adoptant un modèle spécifique sont clairement identifiés par un badge dans la liste des anketas pour éclairer d’emblée les participants.'
				]
			},
			{
				heading: 'Entretiens ponctuels : réunions à la volée sans scission d’historique',
				paragraphsHtml: [
					'Auparavant, créer une nouvelle anketa alors qu’une autre était déjà en cours provoquait une scission de l’historique du binôme — générant deux chaînes parallèles avec des engagements divergents se renouvelant indéfiniment.',
					'La version v1.3.0 apporte la solution grâce aux <strong>anketas ponctuelles</strong> (<code>oneOff: true</code>). Si vous planifiez un entretien exceptionnel en parallèle d’une réunion régulière ouverte, la nouvelle anketa est traitée comme un point isolé : elle n’emporte pas les accords en cours et ne génère aucun successeur lors de son archivage. Le fil conducteur principal reste parfaitement préservé.'
				]
			},
			{
				heading: 'Prise en charge du Markdown et mises à jour en direct',
				paragraphsHtml: [
					'Ce jalon regroupe également des améliorations ergonomiques indispensables :',
					'<ul><li><strong>Markdown dans les champs libres :</strong> Les réponses de texte acceptent le formatage Markdown — listes à puces, caractères gras et blocs de code structurent vos notes techniques avec une parfaite lisibilité.</li><li><strong>Synchronisation en direct :</strong> Dès que votre interlocuteur modifie une note ou ajoute un accord pendant l’entretien, l’affichage se met à jour en temps réel sans rechargement de page.</li><li><strong>Parité multilingue :</strong> L’ensemble des nouvelles trames et des intitulés est traduit en français, anglais, allemand, espagnol, letton et russe.</li></ul>'
				]
			},
			{
				heading: 'Mise à niveau et image Docker',
				paragraphsHtml: [
					'La version v1.3.0 assure une compatibilité totale et applique automatiquement les migrations de schéma pour SQLite et MySQL. L’image Docker officielle est disponible :',
					'<pre><code>docker pull ghcr.io/aleksejs1/encrypted1on1:1.3.0</code></pre>',
					'Vous pouvez tester le sélecteur de modèles et les nouvelles fonctionnalités sans création de compte sur notre démo en ligne : <a href="https://demo.private1on1.eu" target="_blank" rel="noopener noreferrer">demo.private1on1.eu</a>.',
					'Le code source complet et les notes de publication sont consultables sur <a href="https://github.com/aleksejs1/encrypted1on1/releases/tag/v1.3.0" target="_blank" rel="noopener noreferrer">GitHub</a>.'
				]
			}
		]
	},
	{
		slug: 'why-1-on-1-notes-should-not-live-in-notion-or-slack',
		title: 'Pourquoi les notes de 1 à 1 ne doivent pas rester dans Notion ou Slack : le prix de la franchise',
		subtitle:
			'Comment l’illusion de confidentialité d’entreprise engendre l’autocensure, crée des risques juridiques et pourquoi les leaders ont besoin de deux circuits.',
		description:
			'Pourquoi consigner les 1 à 1 dans Notion ou Slack détruit la sécurité psychologique, comment fonctionnent les exports d’administration et l’eDiscovery, et comment séparer les circuits.',
		date: '2026-10-04',
		formattedDate: '4 octobre 2026',
		readTime: '7 min de lecture',
		category: 'Leadership et sécurité',
		author: {
			name: 'Aleksejs',
			role: 'Fondateur et développeur'
		},
		tags: ['Entretiens 1 à 1', 'Confidentialité', 'Sécurité psychologique', 'Management', 'Zero-Knowledge'],
		coverImage: '/images/blog/cost-of-candor-cover.jpg',
		leadHtml:
			'Tous les manuels de management moderne célèbrent la vulnérabilité, la franchise radicale et la sécurité psychologique. Les managers créent de jolis modèles dans une section privée de Notion ou échangent par messages directs dans Slack, avant de s’étonner que leurs échanges se réduisent à des bilans mécaniques de tickets Jira. La cause n’est pas un manque d’ouverture : les collaborateurs savent pertinemment que les clouds d’entreprise ignorent le secret professionnel.',
		sections: [
			{
				heading: 'Le paradoxe de la transparence : comment la surveillance éteint la franchise',
				paragraphsHtml: [
					'En 2012, le professeur Ethan Bernstein de la Harvard Business School publiait une étude fondatrice intitulée <em>« The Transparency Paradox »</em> dans Administrative Science Quarterly, prolongée par son article dans la Harvard Business Review <em>« The Transparency Trap »</em>. Bernstein a analysé les réactions des salariés face à différents niveaux de visibilité pour révéler une vérité contre-intuitive : <strong>une transparence excessive et une observabilité constante dégradent les performances réelles et étouffent le dialogue authentique</strong>.',
					'Dès lors que les collaborateurs savent que leurs écrits ou leurs paroles peuvent être consultés par leur hiérarchie, ils cessent d’expérimenter pour basculer dans le conformisme de façade (<em>performing for observers</em>). Dans les espaces ouverts, on récite des réponses convenues. C’est uniquement à l’abri des regards — derrière des zones protégées — que les individus osent prendre des risques, reconnaître leurs blocages et s’exprimer sans fard. Bernstein en a tiré un principe fondamental : pour progresser, les équipes ont un besoin vital de <strong>« zones de confidentialité » (zones of privacy)</strong>.',
					'L’entretien 1 à 1 a été imaginé précisément comme cette zone de confiance. Selon les recherches d’Amy Edmondson (<em>The Fearless Organization</em>), la sécurité psychologique repose sur la certitude qu’une faiblesse, une question ou une erreur avouée ne sera pas retournée contre soi. Dès qu’une note est consignée dans un outil SaaS d’entreprise, le <strong>chilling effect (effet dissuasif)</strong> prend le relais : l’autocensure s’impose et la réunion perd l’effet de levier managérial démultiplié décrit par Andy Grove dans <em>High Output Management</em>.'
				]
			},
			{
				heading: 'L’illusion technique : ce que dissimule le cadenas « Privé »',
				paragraphsHtml: [
					'Beaucoup de responsables se rassurent : « Nous avons restreint les droits à moi et mon collaborateur, personne d’autre n’y a accès ». Dans l’écosystème SaaS d’entreprise, c’est un dangereux mirage.',
					'<ul><li><strong>Notion Enterprise et prérogatives de Workspace Owner :</strong> La documentation officielle de Notion l’établit sans équivoque : les administrateurs d’espace de travail disposent d’un contrôle intégral. L’option Workspace Content Export leur permet d’exporter l’intégralité de l’espace, <em>y compris les pages situées dans la section privée personnelle des utilisateurs</em>. De surcroît, lors du départ d’un salarié, l’administrateur peut réassigner ses pages privées à un autre membre en un clic (Transfer private pages), transmettant des années d’échanges confidentiels à des tiers.</li><li><strong>Exports de conformité Slack et DLP en arrière-plan :</strong> Sur les offres Plus et Enterprise Grid, Slack propose des exports de conformité archivant silencieusement les canaux fermés et les messages directs privés (DMs). Via l’API Slack Discovery, des solutions DLP analysent également les conversations directes en temps réel.</li><li><strong>IA d’entreprise et fuites par RAG :</strong> Avec Slack AI, Notion AI et Microsoft Copilot indexant les données internes en continu via RAG, une simple anomalie d’héritage de droits (over-permissioning) permet à un assistant IA de citer des extraits sensibles d’un 1 à 1 en réponse à la requête anodine d’un collègue d’une autre équipe.</li></ul>'
				]
			},
			{
				heading: 'Risques juridiques et RH : quand les brouillons deviennent des preuves à charge',
				paragraphsHtml: [
					'Conserver des notes brutes de 1 à 1 dans les référentiels de l’entreprise ne fragilise pas seulement la culture interne ; cela expose l’organisation à des risques juridiques majeurs.',
					'Dans les litiges de droit du travail soumis aux règles de <strong>eDiscovery</strong> (telles que les règles FRCP 26 et 34 aux États-Unis et leurs équivalents en droit comparé), toutes les traces écrites constituent des informations électroniques exigibles (ESI). En cas de plainte pour licenciement abusif, discrimination ou harcèlement, une réquisition judiciaire contraint l’employeur à verser aux débats toutes les notes des managers.',
					'Au détour d’un point individuel, un responsable note parfois des impressions subjectives à la volée : <em>« Semble distrait, sans doute dépassé par sa vie de famille ou sa santé »</em> ou <em>« Lassé de ses plaintes récurrentes sur les heures supplémentaires »</em>. Devant un tribunal, ces bribes deviennent une <strong>preuve accablante (smoking gun)</strong> attestant d’un préjugé ou d’un environnement hostile, ouvrant la voie à de lourdes condamnations pécuniaires.',
					'En Europe, l’<strong>article 9 du RGPD</strong> qualifie les éléments relatifs à la santé physique ou mentale (épuisement professionnel, arrêt maladie, fragilité psychologique) de données sensibles. Enregistrer ces observations sans chiffrement fort dans un wiki d’entreprise sans consentement explicite ni traçabilité stricte constitue une infraction réglementaire directe.'
				]
			},
			{
				heading: 'L’architecture à double circuit : guide opérationnel pour managers et RH',
				paragraphsHtml: [
					'Supprimer totalement les notes n’est pas envisageable : sans traçabilité, les engagements s’évaporent en quelques semaines et l’entretien annuel d’évaluation se transforme en exercice d’amnésie collective. La réponse réside dans la <strong>séparation des responsabilités (Separation of Concerns)</strong>.',
					'<figure><img src="/images/blog/two-circuits-model-fr.svg" alt="L’architecture à double circuit : séparation de l’espace de confiance chiffré (E2EE) et du registre officiel d’entreprise" width="780" height="1010" loading="lazy" /><figcaption>L’architecture à double circuit : un espace de confiance chiffré de bout en bout (E2EE) pour le dialogue intime et un système d’enregistrement officiel pour les livrables validés</figcaption></figure>',
					'<ul><li><strong>Circuit 1 : L’espace de confiance (Zero-Knowledge / E2EE) :</strong> Un outil sécurisé par un chiffrement de bout en bout côté navigateur, où les clés cryptographiques n’appartiennent qu’au manager et à son collaborateur. C’est le sanctuaire de la vulnérabilité : ressenti énergétique, irritants personnels, doutes sur les méthodes et ébauches de trajectoire. Ni les RH, ni les administrateurs système, ni les modèles d’IA d’entreprise ne peuvent déchiffrer ce texte brut.</li><li><strong>Circuit 2 : Le système d’enregistrement officiel (System of Record) :</strong> Le SIRH d’entreprise, BambooHR, Lattice ou l’intranet. C’est ici que le responsable et le collaborateur <em>cristallisent d’un commun accord</em> les seuls livrables formels : les objectifs trimestriels (OKR), le plan de développement individuel (PDI) et les synthèses officielles d’évaluation.</li></ul>',
					'Pour piloter la qualité managériale, les directions RH n’ont aucun besoin — ni intérêt juridique — d’espionner les états d’âme. Les <strong>métadonnées</strong> suffisent amplement : le rythme bimensuel est-il maintenu ? Y a-t-il des annulations répétées ? Quel est le taux d’avancement des jalons convenus ? Le pilotage reste rigoureux, sans jamais violer l’intimité des collaborateurs.'
				]
			},
			{
				heading: 'Conclusion',
				paragraphsHtml: [
					'La confiance mutuelle ne se décrète pas par des chartes RH ; elle s’établit par le respect des limites personnelles. Quand une entreprise impose à ses équipes de confier leurs doutes les plus intimes à des outils pourvus d’un bouton d’export administrateur, elle récolte le silence, la conformité de façade et le départ inattendu de ses meilleurs éléments.',
					'La véritable franchise ne peut s’épanouir que lorsque la confidentialité repose sur des garanties mathématiques et une séparation étanche des circuits, substituant la cryptographie aux promesses d’intention.'
				]
			},
			{
				heading: 'Sources et lectures recommandées',
				paragraphsHtml: [
					'<ol><li><strong>Bernstein, Ethan S.</strong> (2012). <em>« The Transparency Paradox: A Role for Privacy in Organizational Learning and Operational Control »</em>. Administrative Science Quarterly, 57(2), 181–216.</li><li><strong>Bernstein, Ethan S.</strong> (2014). <a href="https://hbr.org/2014/10/the-transparency-trap" target="_blank" rel="noopener noreferrer"><em>« The Transparency Trap »</em></a>. Harvard Business Review, octobre 2014.</li><li><strong>Edmondson, Amy C.</strong> (2018). <a href="https://amycedmondson.com/books/" target="_blank" rel="noopener noreferrer"><em>« The Fearless Organization: Creating Psychological Safety in the Workplace for Learning, Innovation, and Growth »</em></a>. John Wiley & Sons.</li><li><strong>Grove, Andrew S.</strong> (1983). <em>« High Output Management »</em>. Random House (Effet de levier managérial des entretiens 1 à 1).</li><li><strong>Google re:Work</strong>. <a href="https://rework.withgoogle.com/intl/en/guides/understand-team-effectiveness/" target="_blank" rel="noopener noreferrer"><em>« Project Aristotle (sécurité psychologique) et Project Oxygen (compétences managériales) »</em></a>.</li><li><strong>Centre d’aide Notion</strong>. <a href="https://www.notion.so/help/export-your-content" target="_blank" rel="noopener noreferrer"><em>« Exporter le contenu de l’espace de travail et transfert de pages privées dans l’offre Enterprise »</em></a>.</li><li><strong>Centre d’assistance Slack & Discovery API</strong>. <a href="https://slack.com/help/articles/201658943-Export-your-workspace-data" target="_blank" rel="noopener noreferrer"><em>« Exporter les données de l’espace de travail »</em></a> et <a href="https://slack.com/help/articles/360002079527-A-guide-to-Slacks-Discovery-APIs" target="_blank" rel="noopener noreferrer"><em>« A guide to Slack’s Discovery APIs pour DLP et eDiscovery »</em></a>.</li><li><strong>The Sedona Conference</strong>. <a href="https://thesedonaconference.org/" target="_blank" rel="noopener noreferrer"><em>« Commentary on Legal Holds and ESI in Employment Disputes »</em></a> / <a href="https://www.law.cornell.edu/rules/frcp/rule_34" target="_blank" rel="noopener noreferrer"><em>Federal Rules of Civil Procedure (Règles FRCP 26 et 34)</em></a>.</li><li><strong>Union européenne (RGPD)</strong>. <a href="https://gdpr-info.eu/art-9-gdpr/" target="_blank" rel="noopener noreferrer"><em>« Règlement général sur la protection des données — Article 9 (Traitement de catégories particulières de données) »</em></a>.</li></ol>'
				]
			}
		]
	}
];

