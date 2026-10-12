import type { LandingContent } from './types';

export const fr: LandingContent = {
	meta: {
		title: 'encrypted1on1 — Logiciel pour 1:1 honnêtes & à fort impact',
		description:
			'Plateforme dédiée aux réunions 1:1 manager-collaborateur. Préparation en 3 min, reconduction des objectifs, rapport d’évaluation et sécurité bancaire.'
	},

	skipToContent: 'Passer au contenu',

	hero: {
		headline: 'Des réunions 1:1 qui font grandir l’équipe au lieu de perdre du temps',
		subhead:
			'encrypted1on1 est un espace de travail pensé pour des échanges constructifs entre managers et collaborateurs. Préparez-vous en 3 minutes, reconduisez vos objectifs d’un cycle à l’autre et compilez vos réussites pour vos promotions en un clic. Protégé par un chiffrement de bout en bout pour que vos notes privées restent strictement entre vous.',
		ctaTryDemo: 'Essayer la démo en direct (sans inscription)',
		ctaGetStarted: 'Créer un espace de travail',
		ctaGithub: 'Voir sur GitHub',
		ctaDocs: 'Lire la documentation',
		trustBadges: [
			'Préparation asynchrone en 3 min',
			'Objectifs sans pertes',
			'Rapport d’évaluation en 1 clic',
			'Sécurité de niveau bancaire'
		],
		highlights: [
			{
				icon: '🔒',
				title: 'Espace de sécurité psychologique',
				body: 'Vos notes privées et vos réponses sincères sont chiffrées pour vos yeux uniquement. Jamais visibles pour les RH ou les administrateurs du serveur.'
			},
			{
				icon: '🎯',
				title: 'Aucun engagement oublié',
				body: 'Les actions convenues et les objectifs sont reconduits de cycle en cycle avec un historique complet. Plus de promesses oubliées.'
			},
			{
				icon: '📊',
				title: 'Prêt pour l’évaluation en 1 clic',
				body: 'Rassemblez des mois de réussites, de retours et de jalons dans un rapport structuré pour vos entretiens annuels et promotions.'
			},
			{
				icon: '⚡',
				title: 'Démarrage instantané',
				body: 'Lancez-vous en quelques secondes dans votre navigateur ou auto-hébergez l’outil sans contrainte dans votre réseau d’entreprise.'
			}
		],
		screenshotAlt:
			'Une réunion 1:1 dans encrypted1on1 : humeur, ressentis, progression des objectifs et notes privées protégées.'
	},

	videoDemo: {
		badge: 'Démo vidéo • 75s',
		heading: 'Découvrez à quoi ressemblent des 1:1 porteurs de sens',
		subhead:
			'Du check-in asynchrone de 3 minutes et du bloc-notes privé à la reconduction automatique des objectifs et au rapport d’évaluation instantané.',
		heroWatchCta: 'Voir la démo (75s)'
	},

	howItWorks: {
		heading: 'Comment cela fonctionne en pratique',
		subhead:
			'Un rituel simple et bienveillant qui transforme les bilans de statut fastidieux en moteur d’impact et de confiance au sein de l’équipe.',
		steps: [
			{
				step: '01',
				title: '3 minutes de préparation asynchrone',
				description:
					'Collaborateur et manager partagent humeur, météo du moment et blocages en amont. Fini le syndrome de la page blanche et les silences gênés.',
				badge: 'Asynchrone'
			},
			{
				step: '02',
				title: 'Dialogue sincère et bloc-notes privé',
				description:
					'Toutes les notes et sentiments sont chiffrés localement dans votre navigateur avant envoi. Le serveur ne voit que du texte chiffré opaque.',
				badge: 'Confidentiel'
			},
			{
				step: '03',
				title: 'Focus sur l’échange et la continuité',
				description:
					'Le temps d’échange est dédié au coaching réel. Les objectifs validés sont automatiquement reportés au cycle suivant avec leur historique.',
				badge: 'Continuité'
			},
			{
				step: '04',
				title: 'Rapport d’évaluation de performance en 1 clic',
				description:
					'Au moment des revues de performance ou salariales, des mois d’accomplissements et d’objectifs sont consolidés en un clic.',
				badge: '1 Clic'
			}
		]
	},

	origin: {
		heading: 'Pourquoi nous avons créé ce projet',
		paragraphsHtml: [
			'Nous ne voulions pas créer un énième outil SaaS. Nous avons commencé comme client.',
			"Notre organisation gérait son processus de 1 à 1 via un outil tiers — l'un des nombreux produits bien conçus et bien intentionnés de ce secteur. Il remplissait son rôle. Puis, comme beaucoup de petits éditeurs finissent par le faire, il a annoncé sa fermeture.",
			"C'est normal. Les startups cessent leur activité. Ce qui ne l'était pas, c'est ce que cela nous a fait réaliser : nous ne nous étions jamais vraiment demandé ce que la fermeture d'un fournisseur <em>signifie</em> pour le contenu d'un 1 à 1. Des préoccupations de performance confiées en toute confidentialité. Les notes privées d'un manager sur la trajectoire de carrière d'un collaborateur direct. Des discussions sur la rémunération. Des circonstances personnelles qu'un employé avait révélées en pensant qu'elles resteraient entre deux personnes.",
			"Rien de tout cela n'est censé être visible par quiconque en dehors des deux participants — ni leur n+2, ni les RH par défaut, ni l'informatique, et, nous l'avons réalisé avec un certain malaise, pas vraiment <em>le fournisseur non plus</em>, même si celui-ci pouvait techniquement toujours y accéder. Une fermeture est exactement le moment où les pratiques de gestion des données d'une entreprise sont mises à l'épreuve le plus durement : du personnel support qui effectue des exports, un acquéreur qui mène un audit technique, une équipe réduite qui liquide tout sous la pression des délais. Nous n'avions aucune raison de penser qu'il arriverait quelque chose de grave à nos données en particulier. Mais nous n'avions pas non plus de moyen de <em>savoir</em> que ce ne serait pas le cas — car tout le modèle reposait sur « faites-nous confiance », et « nous » désignait une entreprise en train de cesser son activité.",
			"C'est l'écart que nous avons décidé de combler pour de bon, pas seulement pour notre propre organisation, mais comme quelque chose que n'importe qui dans la même situation pourrait vérifier par soi-même plutôt que devoir le croire sur parole. Si une plateforme de 1 à 1 doit conserver certaines des conversations les plus sensibles d'une entreprise, « nous promettons de ne pas regarder » n'est pas une garantie assez solide. La seule garantie assez solide est celle où regarder <em>n'est pas possible</em> — où l'exploitant, l'équipe informatique, l'entreprise qui héberge le service, et même une compromission totale du serveur, n'obtiennent rien d'autre que du texte chiffré. Ce n'est pas une politique. C'est du chiffrement de bout en bout, fait correctement, avec un code source ouvert pour que chacun puisse vérifier que cette affirmation est bien exacte.",
			'encrypted1on1 est le résultat de tout cela.'
		],
		illustrationAlt:
			'Entretien individuel confidentiel sous une arche protectrice avec symboles de chiffrement de bout en bout'
	},

	methodology: {
		heading: "La réunion la plus rentable de l'agenda d'un manager",
		intro:
			"Les 1 à 1 réguliers ne sont pas un rituel de management agréable mais superflu — ce sont l'un des leviers les mieux étayés dont dispose une organisation pour la rétention, l'engagement et la détection précoce des problèmes.",
		points: [
			{
				html: "<strong>Andy Grove</strong>, dans <em>High Output Management</em> (1983) — l'ouvrage qui a en grande partie défini les pratiques modernes de management dans la tech —, soutenait que les entretiens individuels d'un manager comptent parmi les activités les plus rentables à sa disposition, précisément parce que c'est là qu'il obtient les informations nécessaires pour agir avant qu'un problème ne devienne visible ailleurs."
			},
			{
				html: "<strong>Ben Horowitz</strong>, dans <em>The Hard Thing About Hard Things</em>, s'appuie directement sur le cadre de Grove et arrive au même constat par l'autre bout : un 1 à 1 est <em>la réunion de l'employé</em>, pas le créneau de compte rendu du manager — toute sa valeur consiste à faire remonter ce qui, autrement, ne serait jamais dit."
			},
			{
				html: 'Le <strong>Project Oxygen</strong> de Google — le projet de recherche interne qui a analysé plus de 10 000 observations sur plus de 100 variables pour déterminer ce qui distingue réellement les excellents managers des managers moyens — a constaté que tenir des 1 à 1 réguliers, et bien les mener (l\'employé fixe l\'ordre du jour, l\'accent est mis sur le développement et le bien-être, pas seulement sur l\'état des tâches), était l\'un des comportements les plus fortement identifiés. L\'expertise technique, fait notable, arrivait en dernière position des huit comportements identifiés. (<a href="https://rework.withgoogle.com/intl/en/guides/following-the-data-the-research-behind-great-managers" target="_blank" rel="noopener noreferrer">Google re:Work</a>)'
			},
			{
				html: 'Les travaux de <strong>Gallup</strong> apportent l\'argument business le plus tranchant : les employés dont les managers organisent des réunions régulières avec eux ont <strong>près de trois fois plus de chances d\'être engagés</strong> que ceux dont les managers ne le font pas. Et les managers expliquent <strong>70 % de la variance</strong> de l\'engagement au niveau des équipes — ce qui signifie que la qualité de la relation 1 à 1 n\'est pas un facteur secondaire, mais le levier d\'engagement le plus maîtrisable dont dispose une organisation. (<a href="https://www.gallup.com/workplace/236570/employees-lot-managers.aspx" target="_blank" rel="noopener noreferrer">Gallup</a>, <a href="https://news.gallup.com/businessjournal/182792/managers-account-variance-employee-engagement.aspx" target="_blank" rel="noopener noreferrer">Gallup Business Journal</a>)'
			},
			{
				html: "<strong>Julie Zhuo</strong> (<em>The Making of a Manager</em>) et <strong>Camille Fournier</strong> (<em>The Manager’s Path</em>) — deux des ouvrages de management modernes les plus cités, toutes deux anciennes responsables d'organisations d'ingénierie (Facebook, Rent the Runway) — arrivent indépendamment à la même conclusion : le 1 à 1 est le mécanisme principal par lequel un manager exerce réellement son métier, pas une réunion qui entre en concurrence avec le « vrai travail »."
			}
		],
		closingHtml:
			"Le constat qui se dégage de l'ensemble de ces travaux est cohérent : la valeur ne réside pas dans le fait de <em>tenir des réunions</em>. Elle réside dans le fait de les tenir <strong>régulièrement, de façon structurée et avec continuité</strong> — en suivant ce qui a été dit la dernière fois, les engagements pris, les objectifs encore ouverts. Cette continuité est exactement ce qui se perd dès que les 1 à 1 vivent dans des documents épars, dans la mémoire de chacun, ou dans l'outil qui se trouvait ouvert cette semaine-là.",
		illustrationAlt:
			"Collaborateur et manager gravissant des étapes vers leurs objectifs avec levier d'efficacité"
	},

	playbooks: {
		heading: 'Playbooks pratiques pour les équipes d’ingénierie',
		intro:
			'Des cadres éprouvés, des scripts d’entretiens et des tactiques concrètes pour transformer les bilans d’avancement passifs en leviers managériaux majeurs.',
		readPlaybook: 'Lire le playbook',
		viewAllPlaybooks: 'Explorer tous les playbooks',
		questionBankTitle: 'Banque interactive de questions',
		questionBankDescription:
			'Plus de 60 questions diagnostiques à fort impact réparties par énergie, blocages, stratégie et évolution de carrière, avec des repères d’écoute active.',
		openQuestionBank: 'Ouvrir la banque de questions'
	},

	comparison: {
		heading: "Un document partagé n'est pas un système",
		intro:
			"La plupart des équipes ne manquent pas d'un endroit où écrire. Google Docs, Notion, un dossier partagé — chacun peut techniquement contenir des notes de 1 à 1. C'est exactement le problème : ils contiennent des notes, pas un processus.",
		tableHeading: 'encrypted1on1 par rapport aux documents partagés',
		tableColumns: ['Fonctionnalité', 'encrypted1on1', 'Google Docs / Notion / Notes'],
		tableRows: [
			{
				feature: 'Chiffrement de bout en bout (Zero-Knowledge)',
				e1o1: 'Oui, totalement illisible même pour les administrateurs',
				others: 'Non, les exploitants peuvent lire tout le texte',
				isAdvantage: true
			},
			{
				feature: 'Continuité des objectifs entre cycles',
				e1o1: 'Report automatique avec historique exhaustif',
				others: 'Recherche manuelle dans d’anciens documents',
				isAdvantage: true
			},
			{
				feature: 'Préparation des entretiens de performance',
				e1o1: 'Synthèse des réussites et jalons en 1 clic',
				others: 'Relecture laborieuse de 6 mois de notes éparses',
				isAdvantage: true
			},
			{
				feature: 'Cadence et questions structurées',
				e1o1: 'Méthodologie éprouvée et banque de 60+ questions',
				others: 'Page blanche, tributaire de la mémoire du manager',
				isAdvantage: true
			},
			{
				feature: 'Souveraineté des données et déploiement',
				e1o1: 'Auto-hébergement sur vos serveurs ou Cloud UE',
				others: 'Verrouillage dans un cloud SaaS propriétaire',
				isAdvantage: true
			}
		],
		points: [
			{
				title: 'Aucune structure.',
				body: "Un document vierge ne garde aucune mémoire de ce qu'un bon 1 à 1 doit couvrir. Humeur, charge de travail, réussites, blocages, retour — chaque manager le réinvente à partir de rien ou, plus souvent, en oublie la moitié sous la pression du temps."
			},
			{
				title: 'Aucune continuité.',
				body: "Les objectifs fixés il y a trois mois vivent dans un document vieux de trois mois, si tant est que quelqu'un parvienne à le retrouver. Il n'existe aucun lien automatique entre les engagements de ce cycle et le suivi du suivant."
			},
			{
				title: 'Aucune cadence.',
				body: "Rien ne rappelle à qui que ce soit qu'un 1 à 1 approche, ou qu'un des deux côtés n'a pas encore rempli sa partie. Le processus repose entièrement sur la discipline individuelle — ce qui explique précisément pourquoi il s'arrête discrètement dès que quelqu'un est débordé."
			},
			{
				title: 'Aucune base structurée pour les évaluations.',
				body: "Quand arrive la période des évaluations, « relire six mois de documents de 1 à 1 » est le processus réel dans la plupart des entreprises. Il n'existe aucune vue agrégée des réussites, de la progression ou de l'avancement des objectifs sur toute une période d'évaluation."
			},
			{
				title: 'Aucun véritable modèle de confidentialité.',
				body: "Le contrôle d'accès d'un document partagé dépend uniquement des paramètres de partage de la plateforme — et il reste réellement lisible par l'exploitant de la plateforme, un point c'est tout. C'est une garantie différente, et plus faible, que le chiffrement de bout en bout, quels que soient les réglages de partage."
			}
		],
		closingHtml:
			"encrypted1on1 remplace « un document, si on y pense » par un système : un jeu de questions fixe et soigneusement conçu pour les deux côtés, une périodicité automatique et des e-mails de rappel, des objectifs qui persistent et se prolongent d'un cycle à l'autre avec leur historique de progression complet, et un rapport d'évaluation qui agrège réussites et avancement des objectifs sur n'importe quelle période — généré côté client, à partir de données que le serveur n'a jamais été en mesure de lire."
	},

	architecture: {
		metaTitle: 'Architecture cryptographique Zero-Knowledge — encrypted1on1',
		heading: 'Architecture cryptographique : pourquoi espionner est impossible',
		subhead:
			'La sécurité repose sur des preuves mathématiques et la cryptographie, non sur des promesses rédigées dans une politique de confidentialité.',
		steps: [
			{
				stepNumber: '1',
				actor: 'Navigateur du collaborateur',
				action: 'Dérivation de clés & chiffrement',
				detail:
					'Clés dérivées via Argon2id et X25519. Toutes les réponses sont chiffrées localement avant de transiter sur le réseau.',
				badge: 'Côté client'
			},
			{
				stepNumber: '2',
				actor: 'Serveur et base de données',
				action: 'Stockage Zero-Knowledge',
				detail:
					'Le serveur ne reçoit et ne stocke que des blocs de texte chiffré opaques. Les administrateurs n’ont aucune clé de déchiffrement.',
				badge: 'Zero-Knowledge'
			},
			{
				stepNumber: '3',
				actor: 'Navigateur du manager',
				action: 'Déchiffrement autorisé',
				detail:
					'Seul l’autre participant avec sa clé privée vérifiée peut déchiffrer et lire le contenu de la session.',
				badge: 'Strictement 1:1'
			}
		],
		guaranteeTitle: 'Des garanties qui résistent à la fermeture du service',
		guaranteeTextHtml:
			'Même en cas de compromission totale du serveur, un attaquant n’obtient que des octets aléatoires. Tout le code source est auditable sur GitHub.'
	},

	quickstart: {
		heading: 'Déployez sur votre infrastructure en 2 minutes',
		subhead:
			'Un conteneur Docker autonome, aucune dépendance SaaS externe, le contrôle total de vos données d’entreprise.',
		command: 'docker run -d -p 8080:8080 --name e1o1 ghcr.io/aleksejs1/encrypted1on1:latest',
		copyButtonText: 'Copier la commande',
		copiedNotice: 'Commande copiée dans le presse-papier !',
		docsLinkText: 'Consulter le guide de déploiement Docker et Kubernetes →',
		note: 'AGPLv3 • Nombre d’utilisateurs illimité • Zéro télémétrie'
	},

	privacy: {
		heading: 'Vos données. Votre infrastructure. Une confidentialité vérifiable.',
		intro:
			"Pour un acheteur en entreprise, « faites-nous confiance avec les conversations les plus sensibles de vos employés » est difficile à accepter de la part de n'importe quel fournisseur — et c'est normal. encrypted1on1 est conçu pour que cette phrase n'ait jamais à être l'argument de vente.",
		points: [
			{
				title: 'Auto-hébergé.',
				body: "L'ensemble de la plateforme fonctionne sur une infrastructure que votre entreprise contrôle — vos serveurs, votre compte cloud, votre politique de sauvegarde. Aucune donnée n'a besoin de sortir du périmètre de votre organisation, sauf si vous choisissez l'option Cloud."
			},
			{
				title: 'Open source (AGPLv3).',
				body: "Chaque ligne de code — y compris la cryptographie — est publique et vérifiable. Vous, ou une équipe de sécurité indépendante que vous engagez, pouvez vérifier directement les affirmations sur la confidentialité au lieu de devoir croire un fournisseur sur parole. C'est un modèle de confiance fondamentalement différent d'un produit SaaS à code fermé qui vous demande de faire confiance à un code source jamais lu et à ses conditions d'utilisation."
			},
			{
				title: 'Chiffré de bout en bout, concrètement.',
				body: "Le contenu des 1 à 1 — réponses, sentiments, retours, commentaires, résultats de réunion, avancement des objectifs — est chiffré dans le navigateur avant même d'atteindre le serveur, avec des clés dérivées du mot de passe propre à chaque utilisateur et jamais transmises. Le serveur stocke du texte chiffré. Il ne peut pas le déchiffrer — ni l'exploitant, ni l'informatique, ni nous, ni un attaquant qui compromettrait la base de données. Deux exceptions délibérées et étroitement limitées : (1) le titre, la description et le statut d'un objectif sont stockés en texte clair, spécifiquement pour que les objectifs puissent servir à un alignement à l'échelle de l'entreprise et à des rapports simples ; (2) la bibliothèque de modèles de l'entreprise (noms des modèles, descriptions et énoncés des questions rédigés par les administrateurs, ainsi que la référence au modèle utilisé pour une réunion) est stockée en clair pour permettre le partage des structures de réunion. Les réponses à toutes les questions, les retours, les notes privées et l'avancement des objectifs restent strictement privés pour les deux participants, sans exception."
			}
		],
		resolutionHtml:
			"C'est la réponse exacte au problème évoqué dans l'histoire des origines ci-dessus : qu'un fournisseur ferme, soit racheté, ou emploie une personne malveillante n'a plus d'incidence sur la confidentialité de ce qui a déjà été écrit, car il n'y a jamais eu de moment où le fournisseur — quel qu'il soit, nous y compris — aurait pu le lire.",
		faq: {
			question:
				"« Qu'en est-il des obligations légales de conservation, des enquêtes pour harcèlement ou des demandes de conformité ? »",
			answer1Html:
				"<strong>Non, et c'est délibéré — car l'alternative va à l'encontre du but recherché.</strong> Si une entreprise pouvait lire le contenu des 1 à 1, les conversations qui ont le plus besoin d'avoir lieu honnêtement cesseraient tout simplement d'avoir lieu. Le scénario qui devrait réellement préoccuper les équipes conformité : un employé doit signaler un comportement préoccupant <em>de son propre manager</em>, ou de quelqu'un au-dessus de lui. Si cette personne — ou n'importe qui dans sa ligne hiérarchique — pouvait lire les 1 à 1, ce signalement serait-il un jour écrit honnêtement ? La confidentialité n'entre pas en tension avec la détection de vrais problèmes. Elle en est la condition préalable.",
			answer2Html:
				"<strong>Et en pratique, ce n'est pas une impasse.</strong> Chaque 1 à 1 est lisible exactement par ses deux participants, indépendamment l'un de l'autre — jamais via une clé d'entreprise unique et partagée. Si une enquête concerne l'un des deux participants, le contenu reste accessible via l'autre, de la même façon que si cette même conversation avait eu lieu sur papier ou dans un carnet personnel : une procédure judiciaire peut contraindre une <em>personne</em> à produire ce qu'elle détient. Ce n'était simplement jamais quelque chose qu'une <em>plateforme</em> pouvait remettre d'elle-même — ce qui est exactement le but recherché."
		}
	},

	finalCta: {
		heading: 'Passez à des 1 à 1 efficaces et réellement confidentiels',
		subhead:
			'Découvrez le produit dans notre démonstration interactive en direct ou déployez une instance sur vos serveurs en quelques minutes.',
		ctaTryDemo: 'Tester la démo en direct',
		ctaGetStarted: 'Créer un espace',
		ctaGithub: 'Voir sur GitHub'
	},

	pricing: {
		heading: "Deux façons de l'utiliser",
		whyAffordableHeading: 'Pourquoi si abordable ?',
		whyAffordableBodyHtml:
			"<p>Nous ne recherchons pas une croissance à l'échelle du capital-risque — nous n'avons pas besoin que cela devienne une grande entreprise, seulement une entreprise viable. Les prix reflètent ce que coûte réellement l'exploitation d'une infrastructure fiable, pas ce que les logiciels d'entreprise facturent habituellement pour financer une équipe commerciale, un budget marketing, ou le rendement attendu par des investisseurs.</p>" +
			"<p>Et comme l'ensemble de la plateforme est aussi gratuite en auto-hébergement, vous ne payez en réalité jamais pour le logiciel lui-même — seulement, si vous le choisissez, pour que nous l'exploitions à votre place, ou pour une relation de support que vous jugez utile. Si nous cessions notre activité demain, les déploiements auto-hébergés continueraient de fonctionner exactement comme aujourd'hui, sans être affectés — ce n'est pas une promesse, c'est simplement ainsi que fonctionnent l'open source et l'auto-hébergement. (Ce n'est d'ailleurs pas un hasard : c'est exactement le problème que ce projet existe pour résoudre — voir <a href=\"#origin\">Pourquoi nous avons créé ce projet</a>.)</p>",
		quoteHtml:
			"Un 1 à 1 qui a du sens, c'est deux personnes qui consacrent un temps réel et concentré à la progression de l'autre — c'est le véritable coût de bien faire les choses, et aucun outil ne change ce calcul. Tout ce que nous ajoutons, c'est faire en sorte que ce temps ne soit pas gaspillé à reconstruire le contexte depuis zéro, ne soit pas menacé dès que le modèle économique d'un fournisseur change, et ne soit visible par personne d'autre que les deux personnes présentes. Cela ne devrait pas coûter plus cher qu'un carnet.",
		selfHosted: {
			heading: 'Auto-hébergé',
			table: {
				columns: ['Free', 'Premium'],
				rows: [
					{ label: 'Prix', values: ['0 € pour toujours', 'Contactez-nous'] },
					{ label: 'La plateforme complète', values: ['✓', '✓'] },
					{ label: 'Support communautaire', values: ['✓', '✓'] },
					{ label: 'Support prioritaire*', values: ['', '✓'] },
					{ label: 'Traitement prioritaire des demandes de fonctionnalités*', values: ['', '✓'] },
					{ label: 'SSO', values: ['', 'Bientôt disponible'] }
				]
			},
			note: 'Le socle auto-hébergé est, et restera toujours, entièrement gratuit — pas de version « allégée » bridée, pas de limites artificielles. Premium est un complément optionnel pour les organisations qui souhaitent une relation de support et un mot à dire sur la feuille de route, pas une restriction sur le produit lui-même.'
		},
		cloud: {
			heading: 'Cloud',
			intro: "Vous ne voulez pas gérer votre propre infrastructure ? Nous l'hébergeons pour vous.",
			table: {
				columns: ['Free', 'Plus (bientôt disponible)', 'Enterprise'],
				rows: [
					{ label: 'Prix', values: ['0 €', '20 € / mois', 'Contacter les ventes'] },
					{ label: 'Utilisateurs', values: ["Jusqu'à 100", "Jusqu'à 1 000", 'Illimité'] },
					{ label: 'Conservation de l’historique', values: ['3 mois', 'Illimitée', 'Illimitée'] },
					{ label: 'Support prioritaire*', values: ['', '✓', '✓'] },
					{
						label: 'Traitement prioritaire des demandes de fonctionnalités*',
						values: ['', '', '✓']
					},
					{ label: 'SSO', values: ['', '', 'Bientôt disponible'] }
				]
			},
			note: 'Cloud fonctionne exactement avec le même code open source que la version auto-hébergée — le même chiffrement de bout en bout, les mêmes garanties de confidentialité. La seule différence est qui exploite le serveur.'
		},
		footnoteHtml:
			"*Support prioritaire signifie que les e-mails et demandes des utilisateurs payants sont traités en premier, pas qu'une correction est instantanée ou garantie par un quelconque SLA — c'est un petit projet open source honnête, pas un centre d'appels. Un bug signalé par un utilisateur payant peut quand même prendre des semaines. Il sera simplement traité avant la file d'attente de l'offre gratuite, pas à sa place.",
		contactUs: 'Contactez-nous',
		contactSales: 'Contacter les ventes'
	},

	roleSwitch: {
		badge: 'Pour toute l’équipe',
		heading: 'Le logiciel que collaborateurs et managers prennent plaisir à utiliser',
		subhead:
			'Collaborateurs et managers ont des attentes différentes lors des 1:1. encrypted1on1 rend chaque échange rassurant, fluide et à fort impact pour les deux parties.',
		employeeTab: 'Je suis collaborateur',
		managerTab: 'Je suis manager',
		employeeTitle: 'Votre espace privilégié pour la sécurité psychologique et l’évolution de carrière',
		employeePoints: [
			{
				icon: '🛡️',
				title: 'La franchise sans crainte des conséquences',
				body: 'Vos réponses sur l’épuisement, les blocages ou la charge de travail restent entre vous et votre manager. Jamais partagées aux RH, à la direction ou à l’IT.'
			},
			{
				icon: '⏱️',
				title: 'Fini les interrogatoires de statut impromptus',
				body: 'Indiquez votre ressenti et vos sujets en 3 minutes avant le point. Plus de syndrome de la page blanche ni de silences gênés en début d’appel.'
			},
			{
				icon: '📝',
				title: 'Bloc-notes personnel réservé à vos yeux',
				body: 'Gardez des notes privées chiffrées avec votre propre clé. Votre manager ne peut pas les lire tant que vous ne décidez pas d’en parler.'
			},
			{
				icon: '🚀',
				title: 'Vos réussites ne tombent jamais dans l’oubli',
				body: 'Chaque jalon et objectif accompli reste consigné. Lors de la revue salariale, vous disposez d’un récapitulatif d’impact indiscutable prêt en un clic.'
			}
		],
		managerTitle: 'Accompagnez et fidélisez vos talents sans lourdeur administrative',
		managerPoints: [
			{
				icon: '💡',
				title: 'Les réunions deviennent du vrai coaching',
				body: 'Le collaborateur porte l’ordre du jour. Vous voyez ses blocages et son humeur avant l’appel : l’échange porte d’emblée sur des solutions, pas sur le statut des tâches.'
			},
			{
				icon: '🎯',
				title: 'Un contexte qui ne s’évapore jamais',
				body: 'Les engagements pris il y a des mois sont automatiquement reportés aux points suivants. Aucun accord oublié dans des carnets de notes épars.'
			},
			{
				icon: '📉',
				title: 'Radar précoce contre le désengagement',
				body: 'Suivez l’évolution de l’énergie et du moral au fil du temps. Détectez la baisse de motivation des semaines avant qu’un talent clé ne pose sa démission.'
			},
			{
				icon: '📋',
				title: 'Rapport d’évaluation de performance en 1 clic',
				body: 'Ne redoutez plus la période des entretiens annuels. Regroupez des mois de retours, de réalisations et d’objectifs dans une synthèse claire en quelques secondes.'
			}
		]
	},

	pitchManager: {
		badge: 'Partagez avec votre équipe',
		heading: 'Envie de mener des 1:1 comme ceux-ci avec votre manager ?',
		subhead:
			'Proposez encrypted1on1 à votre responsable ou lead d’équipe. Voici un message prêt à l’envoi pour Slack, Teams ou e-mail :',
		messageTemplate:
			'Bonjour ! J’ai découvert un super outil pour nos réunions 1:1 : encrypted1on1.eu. Il permet une préparation rapide en 3 minutes, reporte automatiquement les objectifs d’un point à l’autre et génère un rapport clair de nos réalisations en un clic pour les bilans annuels. De plus, tout est chiffré de bout en bout, donc rien ne fuite en dehors de nous deux. Aimerais-tu qu’on l’essaie pour notre prochain 1:1 ? Voici la démo en direct sans inscription : https://demo.private1on1.eu/',
		copyButtonText: 'Copier le texte du message',
		copiedNotice: 'Message copié ! Partagez-le avec votre manager sur Slack ou par e-mail.',
		hintText:
			'💡 Les managers apprécient particulièrement que les collaborateurs prennent l’initiative d’améliorer la communication et l’efficacité des réunions.'
	},

	footer: {
		productHeading: 'Produit',
		demoLabel: 'Démo en direct',
		pricingLabel: 'Tarifs',
		docsLabel: 'Documentation',
		githubLabel: 'GitHub',
		legalHeading: 'Mentions légales',
		termsLabel: "Conditions d'utilisation",
		privacyLabel: 'Politique de confidentialité',
		languageHeading: 'Langue',
		smallPrint: 'encrypted1on1 est un logiciel open source sous licence AGPLv3.'
	}
};
