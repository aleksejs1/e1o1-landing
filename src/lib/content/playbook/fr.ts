import type { PlaybookItem, CategoryMeta } from './types';

export const categoriesFr: CategoryMeta[] = [
	{
		id: 'foundations',
		label: 'Fondations',
		description: 'Philosophie de gestion, effet de levier (leverage) et études empiriques.'
	},
	{
		id: 'onboarding',
		label: 'Intégration',
		description: 'Établir des relations fondées sur la clarté, l’alignement et la confiance.'
	},
	{
		id: 'regular',
		label: 'Synchronisations régulières',
		description: 'Routines bimensuelles pour maintenir le rythme et lever les blocages tôt.'
	},
	{
		id: 'growth',
		label: 'Carrière & Évolution',
		description: 'Échanges trimestriels sur le développement professionnel et la trajectoire.'
	},
	{
		id: 'difficult',
		label: 'Moments délicats',
		description:
			'Gérer la surcharge, prévenir l’épuisement professionnel et formuler un feedback constructif.'
	},
	{
		id: 'leadership',
		label: 'Leadership',
		description: 'Réunions skip-level et cohérence stratégique entre équipes.'
	}
];

export const playbookItemsFr: PlaybookItem[] = [
	{
		slug: 'high-leverage-1-on-1',
		title: 'Le 1:1 à fort impact : Le manifeste pour des réunions constructives',
		subtitle:
			'Pourquoi 90 % des entretiens individuels finissent en rapports d’avancement stériles — et comment en faire le levier le plus puissant de votre équipe.',
		category: 'foundations',
		readTime: '6 min de lecture',
		cadence: 'Cadre fondamental pour chaque cycle récurrent',
		duration: '30–45 minutes',
		targetAudience: 'Engineering Managers, Tech Leads, Directeurs et CTOs',
		summaryHtml:
			'Le 1:1 n’est ni une corvée administrative ni un interrogatoire de suivi de tâches. C’est l’activité au plus fort effet de levier dans l’agenda d’un manager. Avec de la régularité, de la continuité et une vraie confidentialité, il prévient l’épuisement et révèle les dysfonctionnements des semaines avant les tableaux de bord.',
		whyItMattersHtml:
			'<p><strong>Le piège du point d’avancement :</strong> Trop de managers gaspillent les 1:1 à répéter à l’oral ce que Jira ou Slack documentent déjà par écrit : <em>« qu’as-tu fait hier et que fais-tu aujourd’hui ? »</em>. Quand le 1:1 se mue en rapport d’état, l’attention s’effondre. Les véritables freins restent sous silence et la sécurité psychologique disparaît.</p><p><strong>La logique d’Andy Grove :</strong> Dans <em>High Output Management</em>, Andy Grove a posé l’équation du levier managérial : 90 minutes consacrées à un 1:1 approfondi peuvent enrichir la qualité du travail d’un ingénieur pendant 80 heures entre deux séances. C’est un retour sur investissement supérieur à 50x. Le but n’est pas de contrôler, mais de transmettre du contexte, de coacher le discernement et d’aplanir les difficultés.</p><p><strong>Les conclusions de Google Project Oxygen :</strong> L’étude pluriannuelle de Google portant sur plus de 10 000 observations a démontré que la tenue régulière de 1:1s axés sur le développement et le bien-être est le premier critère de réussite d’un leader. L’expertise technique est arrivée bonne dernière parmi les comportements analysés.</p><p><strong>La rupture de continuité :</strong> Un document éparpillé ou une page Notion consigne des notes, mais n’orchestre aucun processus. Les promesses de mai s’oublient en juillet. Le vrai impact exige une continuité automatique : les objectifs et les engagements doivent traverser les cycles jusqu’à leur résolution complète.</p><p><strong>La confidentialité comme condition de la vérité :</strong> La vulnérabilité est impossible sans une étanchéité totale. Lorsque les notes résident dans des outils cloud accessibles aux administrateurs informatiques ou à des tiers, chacun s’autocensure. Le chiffrement de bout en bout constitue le socle technique indispensable à toute discussion sincère.</p>',
		agenda: [
			{
				title: 'Pilier 1 : Humeur et énergie (5 min)',
				durationMinutes: 5,
				description: 'Prendre le pouls de la personne avant d’aborder les dossiers.',
				questions: [
					'Quel est ton niveau d’énergie cette semaine sur une échelle de 1 à 5 ?',
					'Quel a été le moment le plus satisfaisant de ta semaine, au travail ou ailleurs ?'
				]
			},
			{
				title: 'Pilier 2 : Blocages et irritants (15 min)',
				durationMinutes: 15,
				description: 'Repérer les frictions qui ralentissent la progression.',
				questions: [
					'Quel goulot d’étranglement ou quelle dépendance externe te ralentit en ce moment ?',
					'Quelle décision ou procédure a semblé inutilement lourde cette semaine ?'
				]
			},
			{
				title: 'Pilier 3 : Cap et évolution professionnelle (15 min)',
				durationMinutes: 15,
				description: 'Relier les missions du moment aux ambitions d’avenir.',
				questions: [
					'En quoi tes tâches actuelles contribuent-elles aux compétences que tu souhaites développer cette année ?',
					'Te sens-tu suffisamment stimulé(e) ou le quotidien devient-il trop répétitif ?'
				]
			},
			{
				title: 'Pilier 4 : Retours mutuels et engagements (10 min)',
				durationMinutes: 10,
				description: 'Échanger des retours constructifs et consigner des actions précises.',
				questions: [
					'Que pourrais-je faire différemment pour mieux t’épauler ou protéger ton temps de concentration ?',
					'Quels sont les 1 ou 2 engagements précis que nous prenons chacun d’ici notre prochaine entrevue ?'
				]
			}
		],
		tips: [
			'Règle des 80/20 : le collaborateur parle 80 % du temps, le manager 20 % maximum.',
			'N’annulez jamais un 1:1 à la dernière minute ; replanifiez-le immédiatement.',
			'Consignez les décisions en direct pour reprendre le fil sans effort au cycle suivant.'
		],
		keyTakeaway:
			'La performance d’un manager est celle de son équipe. Le 1:1 en est le levier de pilotage le plus direct.'
	},
	{
		slug: 'first-1-on-1',
		title: 'Le premier 1:1 : Clarifier les attentes et instaurer la confiance',
		subtitle:
			'Poser les bases d’une confiance réciproque, comprendre les modes de travail et fixer les règles du jeu.',
		category: 'onboarding',
		readTime: '4 min de lecture',
		cadence: 'Durant les 1 à 2 premières semaines de collaboration',
		duration: '45–60 minutes',
		targetAudience:
			'Manager & nouveau collaborateur (ou nouveau manager dans une équipe existante)',
		summaryHtml:
			'Le premier 1:1 n’est pas un point technique. Son unique dessein est de calibrer la relation de travail, d’apaiser les appréhensions et de créer un climat de sécurité psychologique.',
		whyItMattersHtml:
			'<p>Comme l’a souligné Andy Grove, le 1:1 est par essence <em>la réunion du collaborateur</em>. Lors d’une arrivée, le flou engendre du stress. Établir d’emblée que ce rendez-vous existe pour soutenir change toute la dynamique.</p>',
		agenda: [
			{
				title: 'Partie 1 : Démystifier le 1:1 (10 min)',
				durationMinutes: 10,
				description: 'Expliciter le rôle de ces échanges et garantir la confidentialité.',
				questions: [
					'Quelle a été ton expérience des 1:1 dans tes postes précédents ? Qu’est-ce qui marchait bien et qu’est-ce qui t’agaçait ?',
					'Ma philosophie : ce temps t’appartient, ce n’est pas un contrôle de tes tickets. Qu’en penses-tu ?'
				]
			},
			{
				title: 'Partie 2 : Modes de travail et communication (20 min)',
				durationMinutes: 20,
				description:
					'Comprendre dans quelles conditions la personne donne le meilleur d’elle-même.',
				questions: [
					'Dans quel cadre travailles-tu avec le plus de concentration (plages de deep work, calme, binômage) ?',
					'Comment préfères-tu recevoir les retours : sur le moment, par écrit au préalable ou lors du 1:1 ?',
					'Quand tu ressens du stress, comment cela se manifeste-t-il et comment puis-je au mieux t’aider ?'
				]
			},
			{
				title: 'Partie 3 : Les 30 premiers jours (15 min)',
				durationMinutes: 15,
				description: 'Vérifier que tous les prérequis sont réunis pour démarrer sereinement.',
				questions: [
					'Qu’est-ce qui t’a semblé le plus déroutant ou flou jusqu’à présent ?',
					'Te manque-t-il des accès, des documents ou du contexte pour avancer ?'
				]
			}
		],
		tips: [
			'Ne parlez pas de tickets Jira ou de sprints.',
			'Soyez à l’écoute 80 % du temps.',
			'Réaffirmez la stricte confidentialité des échanges.'
		],
		keyTakeaway:
			'La première entrevue donne le ton de toute la relation. Privilégiez l’écoute attentive aux détails logistiques.'
	},
	{
		slug: 'bi-weekly-pulse',
		title: 'Point bimensuel : Le rythme de croisière à fort impact',
		subtitle:
			'Un format structuré de 30 minutes axé sur l’énergie, l’avancement, la levée des blocages et le feedback mutuel.',
		category: 'regular',
		readTime: '3 min de lecture',
		cadence: 'Toutes les 1 à 2 semaines',
		duration: '30–45 minutes',
		targetAudience: 'Manager et collaborateur',
		summaryHtml:
			'Un point régulier ne doit jamais être une relecture à voix haute d’un tableau Kanban. On y explore le contexte et l’énergie.',
		whyItMattersHtml:
			'<p>Des rencontres régulières et structurées évitent que de petites frictions ne dégénèrent en départs inattendus ou en crises.</p>',
		agenda: [
			{
				title: '1. Moral et niveau d’énergie (5 min)',
				durationMinutes: 5,
				description: 'Partir de l’humain plutôt que du backlog.',
				questions: [
					'Où se situe ton niveau d’énergie cette semaine de 1 à 5 ?',
					'Quel a été le point marquant de ta semaine ?'
				]
			},
			{
				title: '2. Obstacles et dépendances (15 min)',
				durationMinutes: 15,
				description: 'Repérer et éliminer ce qui freine la progression.',
				questions: [
					'Qu’est-ce qui te prend trop de temps ou te semble inutilement lourd en ce moment ?',
					'Y a-t-il une dépendance envers une autre équipe qui te bloque ?',
					'Que puis-je débloquer pour rendre tes deux prochaines semaines plus fluides ?'
				]
			},
			{
				title: '3. Retours et engagements (10 min)',
				durationMinutes: 10,
				description: 'Faire le point sur les engagements passés et ajuster le tir.',
				questions: [
					'Où en sont les actions convenues lors de notre dernier échange ?',
					'Y a-t-il des décisions récentes où le contexte t’a manqué ou avec lesquelles tu es en désaccord ?'
				]
			}
		],
		tips: [
			'Relisez vos notes précédentes avant d’entrer en réunion.',
			'Si le collaborateur énumère des statuts de tâches, réorientez doucement vers les apprentissages et les difficultés.'
		],
		keyTakeaway:
			'La régularité prime sur la durée : 30 minutes ciblées tous les quinze jours valent mieux qu’un marathon irrégulier.'
	},
	{
		slug: 'career-growth',
		title: 'Évolution professionnelle : Le point trimestriel',
		subtitle:
			'Prendre de la hauteur par rapport au quotidien : Trajectoire long terme, nouvelles compétences et ambitions.',
		category: 'growth',
		readTime: '4 min de lecture',
		cadence: 'Trimestriel (tous les 3 à 6 mois)',
		duration: '45–60 minutes',
		targetAudience: 'Manager et collaborateur',
		summaryHtml:
			'Un temps dédié pour aborder l’avenir professionnel, loin de l’urgence des livraisons de sprint.',
		whyItMattersHtml:
			'<p>D’après Gallup, le manque de perspectives d’évolution est l’une des principales causes de départ des meilleurs talents. Bloquer un créneau trimestriel garantit que le développement ne passe pas à la trappe.</p>',
		agenda: [
			{
				title: '1. Rétrospective d’ensemble (15 min)',
				durationMinutes: 15,
				description: 'Bilan des réussites et des centres d’intérêt récents.',
				questions: [
					'En observant ces derniers mois, de quel accomplissement es-tu le plus fier/fière ?',
					'Quelles activités t’ont donné de l’élan, et lesquelles t’ont vidé(e) de ton énergie ?'
				]
			},
			{
				title: '2. Vision et perspectives (20 min)',
				durationMinutes: 20,
				description: 'Projeter le rôle idéal d’ici 1 à 2 ans.',
				questions: [
					'Quand tu imagines ton poste idéal dans 1 ou 2 ans, à quoi ressemble ton quotidien ?',
					'Es-tu plutôt attiré(e) par l’expertise technique pointue ou par le management et l’animation d’équipe ?'
				]
			},
			{
				title: '3. Opportunités d’expérimentation (15 min)',
				durationMinutes: 15,
				description: 'Traduire les envies en projets réels et mesurables.',
				questions: [
					'Sur quel projet à venir pourrions-nous te confier un défi pour pratiquer cette compétence ?',
					'Quel jalon concret pouvons-nous convenir d’évaluer d’ici 90 jours ?'
				]
			}
		],
		tips: [
			'Ne confondez jamais cet entretien avec une négociation salariale ou un recadrage.',
			'Soyez transparent sur les réelles opportunités au sein de l’organisation.'
		],
		keyTakeaway:
			'Grandir n’est pas uniquement gravir des échelons : c’est élargir son autonomie et son rayon d’action.'
	},
	{
		slug: 'burnout-detection',
		title: 'Surcharge et épuisement : Restaurer l’équilibre',
		subtitle:
			'Un cadre bienveillant pour détecter la fatigue, désamorcer la culpabilité et alléger la charge de travail.',
		category: 'difficult',
		readTime: '4 min de lecture',
		cadence: 'Dès que nécessaire ou au moindre signe de stress persistant',
		duration: '45 minutes',
		targetAudience: 'Manager & collaborateur en surcharge',
		summaryHtml:
			'Face à une personne épuisée, les questions classiques échouent. Cette trame permet d’alléger la pression et de mettre en place des mesures d’urgence.',
		whyItMattersHtml:
			'<p>Les collaborateurs très investis s’épuisent souvent en silence par crainte d’être jugés. Votre mission de manager n’est pas de maintenir les délais à tout prix, mais de préserver la santé de vos équipes.</p>',
		agenda: [
			{
				title: '1. Écoute et sécurité (10 min)',
				durationMinutes: 10,
				description: 'Reconnaître l’effort et lever toute crainte de représailles.',
				questions: [
					'J’ai remarqué que la période était très intense et je voulais simplement prendre de tes nouvelles en toute franchise.',
					'Ta santé passe avant n’importe quelle livraison. Aucun projet ne vaut un épuisement.'
				]
			},
			{
				title: '2. Tri et décharge (20 min)',
				durationMinutes: 20,
				description: 'Prioriser radicalement et supprimer les tâches secondaires.',
				questions: [
					'Si nous pouvions t’enlever deux responsabilités immédiatement, laquelle t’apporterait le plus grand soulagement ?',
					'Quelles réunions dans ton calendrier te prennent de l’énergie sans apporter de valeur ?'
				]
			},
			{
				title: '3. Protection immédiate (15 min)',
				durationMinutes: 15,
				description: 'Fixer des règles de protection concrètes pour les jours à venir.',
				questions: [
					'Prendre quelques jours de coupure totale ou une période sans réunions te ferait-il du bien ?',
					'Comment puis-je filtrer les sollicitations externes pour te laisser récupérer ?'
				]
			}
		],
		tips: [
			'Évitez les formules creuses comme "repose-toi" si la liste des tâches reste inchangée.',
			'Prenez vous-même l’initiative de retirer des tâches du backlog.'
		],
		keyTakeaway:
			'L’épuisement est un problème d’organisation de la charge, non une défaillance individuelle. Agissez sans attendre.'
	},
	{
		slug: 'skip-level',
		title: 'Skip-Level 1:1 : Évaluer la santé de l’organisation',
		subtitle:
			'Dialogue entre la direction générale et les équipes de terrain pour évaluer la stratégie, la culture et les irritants.',
		category: 'leadership',
		readTime: '4 min de lecture',
		cadence: 'Tous les 3 à 6 mois',
		duration: '30–45 minutes',
		targetAudience: 'Senior Leader / CTO / Directeur & collaborateur',
		summaryHtml:
			'Les réunions skip-level offrent aux dirigeants un aperçu direct du terrain, sans court-circuiter les managers de proximité.',
		whyItMattersHtml:
			'<p>Ben Horowitz rappelle que les mauvaises nouvelles mettent du temps à remonter la hiérarchie. Les skip-levels contournent les filtres pour connecter la direction à la réalité opérationnelle.</p>',
		agenda: [
			{
				title: '1. Objet et mise en confiance (5 min)',
				durationMinutes: 5,
				description: 'Rassurer : il ne s’agit en aucun cas d’une évaluation masquée.',
				questions: [
					'Merci pour ton temps ! Mon but est de recueillir ta perception de l’équipe et de l’entreprise en général.'
				]
			},
			{
				title: '2. Clarté de la stratégie (15 min)',
				durationMinutes: 15,
				description: 'Vérifier que la vision de l’entreprise se traduit dans le travail quotidien.',
				questions: [
					'La stratégie globale de l’entreprise te paraît-elle claire et mobilisatrice cette année ?',
					'Vois-tu nettement comment tes missions quotidiennes contribuent à nos priorités clés ?'
				]
			},
			{
				title: '3. Freins structurels (15 min)',
				durationMinutes: 15,
				description: 'Identifier les obstacles qui dépassent le champ du manager direct.',
				questions: [
					'Quel est le principal point de blocage qui empêche ton équipe de livrer du travail de qualité plus vite ?',
					'Si tu étais à ma place pendant une semaine, quel changement d’organisation mettrais-tu en place sans attendre ?'
				]
			}
		],
		tips: [
			'N’utilisez jamais un skip-level pour dénigrer le manager direct.',
			'Soyez attentif(ve) aux récurrences observées à travers plusieurs entretiens.'
		],
		keyTakeaway:
			'Le skip-level sert à diagnostiquer la santé de l’ensemble du système. Gardez un regard d’ensemble.'
	}
];
