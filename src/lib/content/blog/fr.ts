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
	}
];
