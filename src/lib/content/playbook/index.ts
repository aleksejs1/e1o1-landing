import type { Locale } from '$lib/paraglide/runtime';
import type { PlaybookItem, CategoryMeta } from './types';
import { categoriesEn, playbookItemsEn } from './en';
import { categoriesRu, playbookItemsRu } from './ru';
import { categoriesDe, playbookItemsDe } from './de';
import { categoriesEs, playbookItemsEs } from './es';
import { categoriesFr, playbookItemsFr } from './fr';
import { categoriesLv, playbookItemsLv } from './lv';

export * from './types';
export * from './questions';
export * from './books';

const itemsByLocale: Record<string, PlaybookItem[]> = {
	en: playbookItemsEn,
	ru: playbookItemsRu,
	de: playbookItemsDe,
	es: playbookItemsEs,
	fr: playbookItemsFr,
	lv: playbookItemsLv
};

const categoriesByLocale: Record<string, CategoryMeta[]> = {
	en: categoriesEn,
	ru: categoriesRu,
	de: categoriesDe,
	es: categoriesEs,
	fr: categoriesFr,
	lv: categoriesLv
};

export function getCategories(locale: Locale): CategoryMeta[] {
	return categoriesByLocale[locale] || categoriesEn;
}

export function getPlaybookItems(locale: Locale): PlaybookItem[] {
	return itemsByLocale[locale] || playbookItemsEn;
}

export function getPlaybookItem(
	slug: string | undefined,
	locale: Locale
): PlaybookItem | undefined {
	if (!slug) return undefined;
	const items = getPlaybookItems(locale);
	const item = items.find((i) => i.slug === slug);
	if (item) return item;

	// Fallback to English if not translated
	return playbookItemsEn.find((i) => i.slug === slug);
}

export function getAllSlugs(): string[] {
	return playbookItemsEn.map((item) => item.slug);
}

export interface PlaybookUiStrings {
	playbookTitle: string;
	playbookSubtitle: string;
	allCategories: string;
	cadenceLabel: string;
	durationLabel: string;
	audienceLabel: string;
	agendaHeading: string;
	whyItMattersHeading: string;
	tipsHeading: string;
	takeawayHeading: string;
	copyAgendaBtn: string;
	copiedAgendaBtn: string;
	backToPlaybook: string;
	tryDemoBannerTitle: string;
	tryDemoBannerBody: string;
	tryDemoBannerCta: string;
	exploreMoreHeading: string;
	viewAgendaBtn: string;

	// Question Bank UI
	tabsTemplates: string;
	tabsQuestions: string;
	questionsHeroTitle: string;
	questionsHeroSubtitle: string;
	searchPlaceholder: string;
	randomQuestionBtn: string;
	selectedTrayTitle: string;
	copySelectedBtn: string;
	copiedSelectedBtn: string;
	clearSelectionBtn: string;
	addQuestionToAgenda: string;
	removeQuestionFromAgenda: string;
	noQuestionsFound: string;
	selectedCountLabel: string;

	// Bookshelf UI
	tabsBooks: string;
	booksHeroTitle: string;
	booksHeroSubtitle: string;
	coreThesisLabel: string;
	oneOnOnePhilosophyHeading: string;
	keyPrinciplesHeading: string;
	questionsFromBookHeading: string;
	viewRelatedTemplateBtn: string;
}

const uiStringsEn: PlaybookUiStrings = {
	playbookTitle: '1:1 Meeting Playbook',
	playbookSubtitle:
		'Battle-tested agendas, frameworks, and questions to transform 1:1 meetings into high-leverage conversations.',
	allCategories: 'All templates',
	cadenceLabel: 'Cadence',
	durationLabel: 'Duration',
	audienceLabel: 'Participants',
	agendaHeading: 'Recommended Agenda & Questions',
	whyItMattersHeading: 'Why This Meeting Matters',
	tipsHeading: 'Key Guidance for Managers',
	takeawayHeading: 'Core Principle',
	copyAgendaBtn: 'Copy agenda to clipboard',
	copiedAgendaBtn: 'Agenda copied!',
	backToPlaybook: 'Back to Playbook',
	tryDemoBannerTitle: 'Run private 1:1s with zero paper trail',
	tryDemoBannerBody:
		'Use encrypted1on1 to conduct structured, end-to-end encrypted check-ins. Your notes are mathematically private — not even server admins can read them.',
	tryDemoBannerCta: 'Try live demo',
	exploreMoreHeading: 'Explore other templates',
	viewAgendaBtn: 'View Agenda →',

	// Question Bank UI
	tabsTemplates: 'Templates',
	tabsQuestions: 'Question Bank',
	questionsHeroTitle: '1:1 Question Bank',
	questionsHeroSubtitle:
		'Curated, high-signal questions for managers. Filter by category, find instant inspiration, or build a custom meeting agenda.',
	searchPlaceholder: 'Search questions by keyword...',
	randomQuestionBtn: 'Surprise me',
	selectedTrayTitle: 'Selected for Agenda',
	copySelectedBtn: 'Copy agenda',
	copiedSelectedBtn: 'Copied to clipboard!',
	clearSelectionBtn: 'Clear',
	addQuestionToAgenda: 'Add to agenda',
	removeQuestionFromAgenda: 'Remove from agenda',
	noQuestionsFound: 'No questions match your filter.',
	selectedCountLabel: 'questions selected',

	// Bookshelf UI
	tabsBooks: 'Bookshelf',
	booksHeroTitle: 'The 1:1 Bookshelf',
	booksHeroSubtitle:
		'Essential management literature distilled through the lens of one-on-one meetings. The ideas, philosophies, and actionable questions from the greatest tech leadership books.',
	coreThesisLabel: 'Core Thesis',
	oneOnOnePhilosophyHeading: '1:1 Philosophy & Impact',
	keyPrinciplesHeading: 'Key Management Heuristics',
	questionsFromBookHeading: 'High-Leverage Questions from the Book',
	viewRelatedTemplateBtn: 'Explore Related Template →'
};

const uiStringsRu: PlaybookUiStrings = {
	playbookTitle: 'Плейбук 1-на-1 встреч',
	playbookSubtitle:
		'Проверенные структуры, вопросы и фреймворки, превращающие встречи 1-на-1 в главный рычаг развития команды.',
	allCategories: 'Все шаблоны',
	cadenceLabel: 'Периодичность',
	durationLabel: 'Длительность',
	audienceLabel: 'Участники',
	agendaHeading: 'Рекомендуемая повестка и вопросы',
	whyItMattersHeading: 'Почему это важно',
	tipsHeading: 'Советы руководителю',
	takeawayHeading: 'Главный принцип',
	copyAgendaBtn: 'Скопировать повестку',
	copiedAgendaBtn: 'Повестка скопирована!',
	backToPlaybook: 'Назад в плейбук',
	tryDemoBannerTitle: 'Проводите 1-на-1 с математической гарантией приватности',
	tryDemoBannerBody:
		'encrypted1on1 сохраняет преемственность целей и заметок с E2E-шифрованием в браузере. Никакого доступа у третьих лиц или системных администраторов.',
	tryDemoBannerCta: 'Открыть Live Demo',
	exploreMoreHeading: 'Другие полезные шаблоны',
	viewAgendaBtn: 'Смотреть повестку →',

	// Question Bank UI
	tabsTemplates: 'Шаблоны встреч',
	tabsQuestions: 'Банк вопросов',
	questionsHeroTitle: 'Банк вопросов для 1-на-1',
	questionsHeroSubtitle:
		'Проверенные вопросы для глубоких и содержательных встреч. Фильтруйте по темам, находите идеи или собирайте персональный чек-лист разговора.',
	searchPlaceholder: 'Поиск вопроса по ключевым словам...',
	randomQuestionBtn: 'Случайный вопрос',
	selectedTrayTitle: 'Выбрано для повестки',
	copySelectedBtn: 'Скопировать повестку',
	copiedSelectedBtn: 'Повестка скопирована!',
	clearSelectionBtn: 'Очистить',
	addQuestionToAgenda: 'В повестку',
	removeQuestionFromAgenda: 'Убрать из повестки',
	noQuestionsFound: 'По вашему запросу вопросов не найдено.',
	selectedCountLabel: 'вопросов выбрано',

	// Bookshelf UI
	tabsBooks: 'Книжная полка',
	booksHeroTitle: 'Книжная полка 1-на-1',
	booksHeroSubtitle:
		'Главная литература по менеджменту сквозь призму встреч 1-на-1. Идеи, философия и практические вопросы из канонических книг для технологических лидеров.',
	coreThesisLabel: 'Главный тезис',
	oneOnOnePhilosophyHeading: 'Философия 1-на-1 и эффект',
	keyPrinciplesHeading: 'Ключевые управленческие эвристики',
	questionsFromBookHeading: 'Вопросы из книги для встреч 1-на-1',
	viewRelatedTemplateBtn: 'Смотреть связанный шаблон →'
};

const uiStringsDe: PlaybookUiStrings = {
	playbookTitle: '1:1 Meeting Playbook',
	playbookSubtitle:
		'Erprobte Agenden, Leitfäden und Fragen, die 1:1-Gespräche in das wirksamste Führungsinstrument verwandeln.',
	allCategories: 'Alle Vorlagen',
	cadenceLabel: 'Rhythmus',
	durationLabel: 'Dauer',
	audienceLabel: 'Teilnehmer',
	agendaHeading: 'Empfohlene Agenda & Fragen',
	whyItMattersHeading: 'Warum dieses Gespräch zählt',
	tipsHeading: 'Leitfaden für Führungskräfte',
	takeawayHeading: 'Kernprinzip',
	copyAgendaBtn: 'Agenda in die Zwischenablage kopieren',
	copiedAgendaBtn: 'Agenda kopiert!',
	backToPlaybook: 'Zurück zum Playbook',
	tryDemoBannerTitle: 'Führen Sie vertrauliche 1:1s ohne Papierspur',
	tryDemoBannerBody:
		'Nutzen Sie encrypted1on1 für strukturierte, Ende-zu-Ende verschlüsselte Gespräche. Mathematisch privat – selbst für Server-Admins unlesbar.',
	tryDemoBannerCta: 'Live-Demo testen',
	exploreMoreHeading: 'Weitere Vorlagen entdecken',
	viewAgendaBtn: 'Agenda ansehen →',

	// Question Bank UI
	tabsTemplates: 'Gesprächsvorlagen',
	tabsQuestions: 'Fragenkatalog',
	questionsHeroTitle: '1:1 Fragenkatalog',
	questionsHeroSubtitle:
		'Kuratierte, wirkungsvolle Fragen für Führungskräfte. Nach Themen filtern, Inspiration finden oder eine individuelle Agenda zusammenstellen.',
	searchPlaceholder: 'Fragen nach Stichwort suchen...',
	randomQuestionBtn: 'Zufällige Frage',
	selectedTrayTitle: 'Für Agenda ausgewählt',
	copySelectedBtn: 'Agenda kopieren',
	copiedSelectedBtn: 'In die Zwischenablage kopiert!',
	clearSelectionBtn: 'Zurücksetzen',
	addQuestionToAgenda: 'Zur Agenda hinzufügen',
	removeQuestionFromAgenda: 'Aus Agenda entfernen',
	noQuestionsFound: 'Keine Fragen gefunden.',
	selectedCountLabel: 'Fragen ausgewählt',

	// Bookshelf UI
	tabsBooks: 'Bücherregal',
	booksHeroTitle: 'Das 1:1 Bücherregal',
	booksHeroSubtitle:
		'Die wichtigste Managementliteratur im Lichte von 1:1-Gesprächen. Prinzipien, Denkweisen und wirkungsvolle Fragen aus den Klassikern der Tech-Führung.',
	coreThesisLabel: 'Kernthese',
	oneOnOnePhilosophyHeading: '1:1-Philosophie & Wirkung',
	keyPrinciplesHeading: 'Zentrale Führungsprinzipien',
	questionsFromBookHeading: 'Praxiserprobte Fragen aus dem Buch',
	viewRelatedTemplateBtn: 'Zugehörige Vorlage ansehen →'
};

const uiStringsEs: PlaybookUiStrings = {
	playbookTitle: 'Playbook de reuniones 1 a 1',
	playbookSubtitle:
		'Estructuras, marcos de trabajo y preguntas contrastadas para transformar tus 1 a 1 en conversaciones de alto impacto.',
	allCategories: 'Todas las plantillas',
	cadenceLabel: 'Periodicidad',
	durationLabel: 'Duración',
	audienceLabel: 'Participantes',
	agendaHeading: 'Agenda y preguntas recomendadas',
	whyItMattersHeading: 'Por qué es importante',
	tipsHeading: 'Consejos para líderes',
	takeawayHeading: 'Principio clave',
	copyAgendaBtn: 'Copiar agenda al portapapeles',
	copiedAgendaBtn: '¡Agenda copiada!',
	backToPlaybook: 'Volver al Playbook',
	tryDemoBannerTitle: 'Gestiona 1 a 1 privados sin rastro documental',
	tryDemoBannerBody:
		'Utiliza encrypted1on1 para sincronizaciones estructuradas y cifradas de extremo a extremo. Matemáticamente privadas: ni los administradores del servidor pueden leerlas.',
	tryDemoBannerCta: 'Probar demo interactiva',
	exploreMoreHeading: 'Explorar otras plantillas',
	viewAgendaBtn: 'Ver agenda →',

	// Question Bank UI
	tabsTemplates: 'Plantillas de reunión',
	tabsQuestions: 'Banco de preguntas',
	questionsHeroTitle: 'Banco de preguntas para 1 a 1',
	questionsHeroSubtitle:
		'Preguntas seleccionadas de alto impacto. Filtra por categoría, encuentra inspiración rápida o arma tu propia agenda personalizada.',
	searchPlaceholder: 'Buscar preguntas por palabra clave...',
	randomQuestionBtn: 'Pregunta aleatoria',
	selectedTrayTitle: 'Seleccionadas para la agenda',
	copySelectedBtn: 'Copiar agenda',
	copiedSelectedBtn: '¡Copiado al portapapeles!',
	clearSelectionBtn: 'Limpiar',
	addQuestionToAgenda: 'Añadir a la agenda',
	removeQuestionFromAgenda: 'Quitar de la agenda',
	noQuestionsFound: 'No se encontraron preguntas.',
	selectedCountLabel: 'preguntas seleccionadas',

	// Bookshelf UI
	tabsBooks: 'Biblioteca',
	booksHeroTitle: 'La biblioteca del 1 a 1',
	booksHeroSubtitle:
		'La literatura esencial sobre liderazgo analizada desde la perspectiva de las reuniones 1 a 1. Principios, filosofías y preguntas prácticas de los mayores referentes tecnológicos.',
	coreThesisLabel: 'Tesis central',
	oneOnOnePhilosophyHeading: 'Filosofía del 1 a 1 e impacto',
	keyPrinciplesHeading: 'Principios clave de gestión',
	questionsFromBookHeading: 'Preguntas del libro para tus 1 a 1',
	viewRelatedTemplateBtn: 'Ver plantilla relacionada →'
};

const uiStringsFr: PlaybookUiStrings = {
	playbookTitle: 'Playbook des réunions 1:1',
	playbookSubtitle:
		'Ordres du jour éprouvés, repères méthodologiques et questions clés pour transformer les 1:1 en moments à fort impact.',
	allCategories: 'Tous les modèles',
	cadenceLabel: 'Périodicité',
	durationLabel: 'Durée',
	audienceLabel: 'Participants',
	agendaHeading: 'Ordre du jour et questions recommandés',
	whyItMattersHeading: 'Pourquoi cet échange est essentiel',
	tipsHeading: 'Conseils aux managers',
	takeawayHeading: 'Principe fondamental',
	copyAgendaBtn: 'Copier l’ordre du jour',
	copiedAgendaBtn: 'Ordre du jour copié !',
	backToPlaybook: 'Retour au Playbook',
	tryDemoBannerTitle: 'Menez des 1:1 confidentiels sans aucune trace',
	tryDemoBannerBody:
		'Adoptez encrypted1on1 pour des points d’équipe structurés et chiffrés de bout en bout. Confidentialité mathématique : même les administrateurs ne peuvent rien lire.',
	tryDemoBannerCta: 'Essayer la démo en direct',
	exploreMoreHeading: 'Découvrir d’autres modèles',
	viewAgendaBtn: 'Consulter l’ordre du jour →',

	// Question Bank UI
	tabsTemplates: 'Modèles de réunions',
	tabsQuestions: 'Banque de questions',
	questionsHeroTitle: 'Banque de questions pour 1:1',
	questionsHeroSubtitle:
		'Sélection de questions à fort impact pour managers. Filtrez par thème, trouvez l’inspiration ou composez un ordre du jour sur mesure.',
	searchPlaceholder: 'Rechercher par mot-clé...',
	randomQuestionBtn: 'Question au hasard',
	selectedTrayTitle: 'Sélection pour l’ordre du jour',
	copySelectedBtn: 'Copier la sélection',
	copiedSelectedBtn: 'Copié dans le presse-papier !',
	clearSelectionBtn: 'Effacer',
	addQuestionToAgenda: 'Ajouter à l’ordre du jour',
	removeQuestionFromAgenda: 'Retirer de l’ordre du jour',
	noQuestionsFound: 'Aucune question ne correspond à votre recherche.',
	selectedCountLabel: 'questions sélectionnées',

	// Bookshelf UI
	tabsBooks: 'Bibliothèque',
	booksHeroTitle: 'La bibliothèque du 1:1',
	booksHeroSubtitle:
		'Les ouvrages de référence en management décryptés sous l’angle des réunions 1:1. Idées directrices, repères pratiques et questions concrètes pour les leaders de la tech.',
	coreThesisLabel: 'Thèse centrale',
	oneOnOnePhilosophyHeading: 'Philosophie du 1:1 et impact',
	keyPrinciplesHeading: 'Heuristiques managériales clés',
	questionsFromBookHeading: 'Questions clés issues du livre',
	viewRelatedTemplateBtn: 'Voir le modèle associé →'
};

const uiStringsLv: PlaybookUiStrings = {
	playbookTitle: '1 pret 1 rokasgrāmata',
	playbookSubtitle:
		'Pārbaudītas struktūras, metodoloģija un jautājumi, kas individuālās sarunas pārvērš par komandas galveno izaugsmes sviru.',
	allCategories: 'Visi šabloni',
	cadenceLabel: 'Periodiskums',
	durationLabel: 'Ilgums',
	audienceLabel: 'Dalībnieki',
	agendaHeading: 'Ieteicamā darba kārtība un jautājumi',
	whyItMattersHeading: 'Kāpēc šī saruna ir būtiska',
	tipsHeading: 'Ieteikumi vadītājam',
	takeawayHeading: 'Pamatprincips',
	copyAgendaBtn: 'Kopēt darba kārtību',
	copiedAgendaBtn: 'Darba kārtība nokopēta!',
	backToPlaybook: 'Atpakaļ uz rokasgrāmatu',
	tryDemoBannerTitle: 'Vadiet privātas 1 pret 1 sarunas bez digitālām pēdām',
	tryDemoBannerBody:
		'Izmantojiet encrypted1on1 strukturētām sarunām ar pilnīgu šifrēšanu no gala līdz galam. Matemātiski privāti – pat servera administratori nevar izlasīt jūsu piezīmes.',
	tryDemoBannerCta: 'Izmēģināt demo',
	exploreMoreHeading: 'Citi noderīgi šabloni',
	viewAgendaBtn: 'Skatīt darba kārtību →',

	// Question Bank UI
	tabsTemplates: 'Tikšanās šabloni',
	tabsQuestions: 'Jautājumu krātuve',
	questionsHeroTitle: '1 pret 1 jautājumu krātuve',
	questionsHeroSubtitle:
		'Pārdomāti un dziļi jautājumi vadītājiem. Filtrējiet pēc tēmas, smelieties iedvesmu vai izveidojiet savu sarunas plānu.',
	searchPlaceholder: 'Meklēt jautājumus pēc atslēgvārda...',
	randomQuestionBtn: 'Nejaušs jautājums',
	selectedTrayTitle: 'Izvēlēts sarunas plānam',
	copySelectedBtn: 'Kopēt plānu',
	copiedSelectedBtn: 'Nokopēts starpliktuvē!',
	clearSelectionBtn: 'Notīrīt',
	addQuestionToAgenda: 'Pievienot plānam',
	removeQuestionFromAgenda: 'Noņemt no plāna',
	noQuestionsFound: 'Nav atrasts neviens jautājums.',
	selectedCountLabel: 'jautājumi izvēlēti',

	// Bookshelf UI
	tabsBooks: 'Grāmatplaukts',
	booksHeroTitle: '1 pret 1 grāmatplaukts',
	booksHeroSubtitle:
		'Būtiskākā vadības literatūra 1 pret 1 sarunu perspektīvā. Pamatatziņas, filozofija un jautājumi no tehnoloģiju nozares vadošajām grāmatām.',
	coreThesisLabel: 'Galvenā tēze',
	oneOnOnePhilosophyHeading: '1 pret 1 filozofija un ietekme',
	keyPrinciplesHeading: 'Būtiskie vadības principi',
	questionsFromBookHeading: 'Jautājumi no grāmatas sarunām',
	viewRelatedTemplateBtn: 'Skatīt saistīto šablonu →'
};

const uiByLocale: Record<string, PlaybookUiStrings> = {
	en: uiStringsEn,
	ru: uiStringsRu,
	de: uiStringsDe,
	es: uiStringsEs,
	fr: uiStringsFr,
	lv: uiStringsLv
};

export function getPlaybookUi(locale: Locale): PlaybookUiStrings {
	return uiByLocale[locale] || uiStringsEn;
}
