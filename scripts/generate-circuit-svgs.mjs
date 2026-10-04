import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('static/images/blog');
if (!fs.existsSync(outDir)) {
	fs.mkdirSync(outDir, { recursive: true });
}

const data = {
	ru: {
		headerTitle: 'АРХИТЕКТУРА ДВУХ КОНТУРОВ 1-НА-1',
		headerSubtitle: 'Разделение приватного пространства доверия и официального контура компании',
		c1Badge: 'Zero-Knowledge / E2EE',
		c1Title: 'КОНТУР 1: ПРОСТРАНСТВО ДОВЕРИЯ',
		c1Sub: 'Сквозное шифрование в браузере • Ключи только на устройствах участников',
		c1Items: [
			'Честный пульс настроения, уровня энергии и нагрузки',
			'Личные барьеры, сомнения и ранние сигналы выгорания',
			'Неотфильтрованная обратная связь руководителю',
			'Черновики карьерных развилок и сомнения в процессах'
		],
		c1AccessTag: '🔒 ДОСТУП',
		c1AccessText: 'Строго только сотрудник и руководитель (E2EE ключи на устройствах)',
		c1BlockedTag: '❌ ЗАБЛОКИРОВАНО',
		c1BlockedText: 'HR, системные администраторы, IT-поддержка, корпоративный ИИ',
		transition: 'Совместная фильтрация и кристаллизация итогов',
		transitionSub: 'Только обоюдно согласованные артефакты переносятся в систему компании',
		c2Badge: 'System of Record',
		c2Title: 'КОНТУР 2: СИСТЕМА УЧЕТА КОМПАНИИ',
		c2Sub: 'Корпоративный Notion, HRIS, BambooHR, Lattice, Wiki',
		c2Items: [
			'Официальные квартальные цели (OKR / KPI)',
			'Согласованный план индивидуального развития (PDP)',
			'Итоговые оценки и решения Performance Review',
			'Процессные метрики для HR (регулярность встреч, динамика целей)'
		],
		c2AccessTag: '📋 ДОСТУП',
		c2AccessText: 'HR-департамент, высшее руководство, комплаенс и аудит',
		c2NoteTag: '✔ ГАРАНТИЯ',
		c2NoteText: 'Управление процессами и метриками без слежки за содержанием диалогов',
		footerBrand: 'encrypted1on1.eu • Архитектура безопасности и доверия'
	},
	en: {
		headerTitle: 'THE TWO-CIRCUIT 1:1 ARCHITECTURE',
		headerSubtitle: 'Separating the private trust space from the company system of record',
		c1Badge: 'Zero-Knowledge / E2EE',
		c1Title: 'CIRCUIT 1: THE TRUST SPACE',
		c1Sub: 'Client-side end-to-end encryption • Keys strictly on participant devices',
		c1Items: [
			'Authentic pulse on mood, energy levels, and workload',
			'Personal blockers, anxieties, and early burnout indicators',
			'Unvarnished, direct upward feedback to the manager',
			'Working drafts of career paths and process friction'
		],
		c1AccessTag: '🔒 ACCESS',
		c1AccessText: 'Strictly direct report & manager (E2EE keys held on user devices)',
		c1BlockedTag: '❌ BLOCKED',
		c1BlockedText: 'HR, workspace admins, IT support, and corporate LLMs',
		transition: 'Collaborative synthesis & agreed outcomes',
		transitionSub: 'Only mutually agreed milestones transfer to the company record',
		c2Badge: 'System of Record',
		c2Title: 'CIRCUIT 2: THE SYSTEM OF RECORD',
		c2Sub: 'Corporate Notion, HRIS, BambooHR, Lattice, Company Wiki',
		c2Items: [
			'Formal quarterly objectives (OKRs / KPIs)',
			'Mutually agreed Personal Development Plan (PDP) milestones',
			'Consolidated performance review outcomes & ratings',
			'Process metadata for HR (cadence health, goal pacing)'
		],
		c2AccessTag: '📋 ACCESS',
		c2AccessText: 'HR department, senior leadership, compliance audits',
		c2NoteTag: '✔ GOVERNANCE',
		c2NoteText: 'Process governance without surveillance of private conversations',
		footerBrand: 'encrypted1on1.eu • Security & Trust Architecture'
	},
	de: {
		headerTitle: 'DIE ZWEI-KREISE-ARCHITEKTUR FÜR 1:1',
		headerSubtitle: 'Trennung von privatem Vertrauensraum und offiziellem Berichtssystem',
		c1Badge: 'Zero-Knowledge / E2EE',
		c1Title: 'KREIS 1: DER VERTRAUENSRAUM',
		c1Sub: 'Clientseitige E2E-Verschlüsselung • Schlüssel liegen nur auf Endgeräten',
		c1Items: [
			'Ehrlicher Puls zu Energie, Stimmung und Belastungsgrenzen',
			'Persönliche Hürden, Zweifel und Burnout-Frühwarnsignale',
			'Ungefiltertes Aufwärts-Feedback an die Führungskraft',
			'Rohentwürfe zu Entwicklungspfaden und organisatorischen Hürden'
		],
		c1AccessTag: '🔒 ZUGRIFF',
		c1AccessText: 'Ausschließlich Mitarbeiter und Führungskraft (Schlüssel auf Endgeräten)',
		c1BlockedTag: '❌ BLOCKIERT',
		c1BlockedText: 'HR, Workspace-Admins, IT-Support und Unternehmens-KIs',
		transition: 'Gemeinsame Synthese & abgestimmte Ergebnisse',
		transitionSub: 'Ausschließlich einvernehmlich freigegebene Ergebnisse werden übertragen',
		c2Badge: 'System of Record',
		c2Title: 'KREIS 2: DAS OFFIZIELLE BERICHTSSYSTEM',
		c2Sub: 'Unternehmens-Notion, HRIS, BambooHR, Lattice, Firmen-Wiki',
		c2Items: [
			'Offizielle Quartalsziele (OKRs / KPIs)',
			'Freigegebene Meilensteine des Entwicklungsplans (IDP)',
			'Verbindliche Ergebnisse des offiziellen Performance Reviews',
			'Prozess-Metadaten für HR (verlässliche Kadenz, Fortschritt)'
		],
		c2AccessTag: '📋 ZUGRIFF',
		c2AccessText: 'HR-Abteilung, Geschäftsleitung und Compliance-Audits',
		c2NoteTag: '✔ GARANTIE',
		c2NoteText: 'Prozesssteuerung ohne Überwachung persönlicher Gespräche',
		footerBrand: 'encrypted1on1.eu • Sicherheits- und Vertrauensarchitektur'
	},
	es: {
		headerTitle: 'ARQUITECTURA DE DOS CIRCUITOS PARA 1 A 1',
		headerSubtitle: 'Separación del espacio privado de confianza y el registro oficial de la empresa',
		c1Badge: 'Zero-Knowledge / E2EE',
		c1Title: 'CIRCUITO 1: EL ESPACIO DE CONFIANZA',
		c1Sub: 'Cifrado de extremo a extremo • Claves solo en dispositivos de los usuarios',
		c1Items: [
			'Pulso sincero sobre energía, ánimo y sobrecarga de trabajo',
			'Bloqueos personales, dudas y señales tempranas de agotamiento',
			'Retroalimentación directa y sin filtros hacia el mánager',
			'Borradores de desarrollo profesional y fricciones en procesos'
		],
		c1AccessTag: '🔒 ACCESO',
		c1AccessText: 'Solo colaborador y mánager (claves E2EE en dispositivos locales)',
		c1BlockedTag: '❌ BLOQUEADO',
		c1BlockedText: 'RR. HH., administradores de espacio, soporte e IA corporativa',
		transition: 'Síntesis colaborativa y acuerdos consolidados',
		transitionSub: 'Solo los acuerdos mutuos y consensuados se transfieren al registro oficial',
		c2Badge: 'System of Record',
		c2Title: 'CIRCUITO 2: EL SISTEMA OFICIAL DE REGISTRO',
		c2Sub: 'Notion corporativo, HRIS, BambooHR, Lattice, Wiki interno',
		c2Items: [
			'Objetivos trimestrales oficiales (OKRs / KPIs)',
			'Hitos aprobados del Plan de Desarrollo Individual (PDI)',
			'Evaluaciones de desempeño formales consolidadas',
			'Metadatos para RR. HH. (cadencia regular, ritmo de objetivos)'
		],
		c2AccessTag: '📋 ACCESO',
		c2AccessText: 'Departamento de RR. HH., dirección y auditorías',
		c2NoteTag: '✔ GARANTÍA',
		c2NoteText: 'Gobernanza de procesos sin espiar conversaciones privadas',
		footerBrand: 'encrypted1on1.eu • Arquitectura de Seguridad y Confianza'
	},
	fr: {
		headerTitle: 'ARCHITECTURE À DOUBLE CIRCUIT DES 1 À 1',
		headerSubtitle: 'Séparation de l’espace intime de confiance et du registre officiel d’entreprise',
		c1Badge: 'Zero-Knowledge / E2EE',
		c1Title: 'CIRCUIT 1 : L’ESPACE DE CONFIANCE',
		c1Sub: 'Chiffrement de bout en bout • Clés stockées uniquement sur les terminaux',
		c1Items: [
			'Baromètre sincère de l’énergie, du moral et de la charge',
			'Blocages intimes, doutes et signaux précurseurs d’épuisement',
			'Rétroaction directe et non filtrée adressée au responsable',
			'Ébauches d’évolution professionnelle et freins opérationnels'
		],
		c1AccessTag: '🔒 ACCÈS',
		c1AccessText: 'Strictement salarié et manager (clés E2EE sur les terminaux)',
		c1BlockedTag: '❌ BLOQUÉ',
		c1BlockedText: 'RH, administrateurs de l’espace, support technique, IA d’entreprise',
		transition: 'Synthèse concertée & cristallisation des accords',
		transitionSub: 'Seuls les jalons validés d’un commun accord sont transférés au registre',
		c2Badge: 'System of Record',
		c2Title: 'CIRCUIT 2 : LE SYSTÈME D’ENREGISTREMENT OFFICIEL',
		c2Sub: 'Notion d’entreprise, SIRH, BambooHR, Lattice, Wiki interne',
		c2Items: [
			'Objectifs trimestriels officiels (OKR / KPI)',
			'Jalons validés du Plan de Développement Individuel (PDI)',
			'Évaluations périodiques et synthèses de performance',
			'Métadonnées RH (respect de la cadence, tenue des jalons)'
		],
		c2AccessTag: '📋 ACCÈS',
		c2AccessText: 'Direction des RH, direction générale et audits de conformité',
		c2NoteTag: '✔ GARANTIE',
		c2NoteText: 'Pilotage des processus sans intrusion dans les échanges intimes',
		footerBrand: 'encrypted1on1.eu • Architecture de Sécurité et de Confiance'
	},
	lv: {
		headerTitle: 'DIVU LOKU ARHITEKTŪRA 1 PRET 1 SARUNĀM',
		headerSubtitle: 'Privātās uzticības telpas un uzņēmuma oficiālās uzskaites nodalīšana',
		c1Badge: 'Zero-Knowledge / E2EE',
		c1Title: '1. LOKS: UZTICĪBAS TELPA',
		c1Sub: 'Klienta puses E2E šifrēšana • Kriptogrāfiskās atslēgas tikai ierīcēs',
		c1Items: [
			'Patiess noskaņojuma, enerģijas un darba slodzes pulss',
			'Personiskie šķēršļi, šaubas un izdegšanas agrīnās pazīmes',
			'Tieša un nefiltrēta atgriezeniskā saite vadītājam',
			'Karjeras virziena un darba procesu uzlabošanas melnraksti'
		],
		c1AccessTag: '🔒 PIEKĻUVE',
		c1AccessText: 'Tikai darbiniekam un vadītājam (E2EE atslēgas lietotāju ierīcēs)',
		c1BlockedTag: '❌ BLOĶĒTS',
		c1BlockedText: 'Personāla daļai, administratoriem, tehniskajam atbalstam, MI rīkiem',
		transition: 'Kopīga rezultātu kristalizācija un vienošanās',
		transitionSub: 'Tikai abpusēji saskaņotie rezultāti tiek nodoti uzņēmuma sistēmai',
		c2Badge: 'System of Record',
		c2Title: '2. LOKS: OFICIĀLĀ UZŅĒMUMA UZSKAITES SISTĒMA',
		c2Sub: 'Korporatīvais Notion, HRIS, BambooHR, Lattice, uzņēmuma wiki',
		c2Items: [
			'Oficiālie ceturkšņa mērķi (OKR / KPI)',
			'Apstiprinātie individuālās attīstības plāna (IDP) posmi',
			'Formālie novērtēšanas lēmumi un kopsavilkumi',
			'Personālvadības metadati (regulāra sarunu kadence, mērķu izpilde)'
		],
		c2AccessTag: '📋 PIEKĻUVE',
		c2AccessText: 'Personāla vadībai, valdei un atbilstības auditiem',
		c2NoteTag: '✔ GARANTIJA',
		c2NoteText: 'Procesu pārvaldība bez iejaukšanās privātajās sarunās',
		footerBrand: 'encrypted1on1.eu • Drošības un uzticības arhitektūra'
	}
};

function escapeXml(unsafe) {
	return unsafe.replace(/[<>&'"]/g, (c) => {
		switch (c) {
			case '<':
				return '&lt;';
			case '>':
				return '&gt;';
			case '&':
				return '&amp;';
			case "'":
				return '&apos;';
			case '"':
				return '&quot;';
		}
	});
}

function renderSvg(lang, item) {
	return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 1010" width="100%" height="100%">
  <defs>
    <style>
      .txt-head-title {
        font-family: 'Unbounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 700;
        font-size: 20px;
        fill: #201e1d;
        letter-spacing: 0.03em;
        text-anchor: middle;
      }
      .txt-head-sub {
        font-family: 'Figtree', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-weight: 500;
        font-size: 15px;
        fill: #645c50;
        text-anchor: middle;
      }
      .txt-card-badge {
        font-family: 'Unbounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 700;
        font-size: 12px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }
      .txt-card-title {
        font-family: 'Unbounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 700;
        font-size: 17.5px;
        letter-spacing: 0.01em;
      }
      .txt-card-sub {
        font-family: 'Figtree', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-weight: 400;
        font-size: 14px;
        fill: #70675a;
      }
      .txt-bullet {
        font-family: 'Figtree', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-weight: 500;
        font-size: 16px;
        fill: #201e1d;
      }
      .txt-tag {
        font-family: 'Unbounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 700;
        font-size: 11px;
        letter-spacing: 0.06em;
      }
      .txt-bar-desc {
        font-family: 'Figtree', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-weight: 600;
        font-size: 14.5px;
      }
      .txt-trans-title {
        font-family: 'Unbounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 700;
        font-size: 14.5px;
        fill: #201e1d;
        text-anchor: middle;
      }
      .txt-footer {
        font-family: 'Figtree', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-weight: 600;
        font-size: 13px;
        fill: #82796a;
      }
    </style>
  </defs>

  <!-- Canvas Background (Warm linen/cream matching reference media_1791095930106) -->
  <rect width="780" height="1010" fill="#f6ebdc" />
  
  <!-- Outer Frame with Bauhaus Corner Accent -->
  <rect x="12" y="12" width="756" height="986" rx="20" fill="none" stroke="#201e1d" stroke-width="2.5" />

  <!-- Bauhaus Decorative Geometry Accents (Reference Style) -->
  <!-- Top Left Indicator -->
  <g transform="translate(32, 34)">
    <line x1="0" y1="0" x2="36" y2="0" stroke="#201e1d" stroke-width="2" stroke-linecap="round" />
    <polyline points="0, -4 4, 0 10, -8" fill="none" stroke="#201e1d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>

  <!-- Top Right Indicator -->
  <g transform="translate(712, 30)">
    <line x1="0" y1="0" x2="0" y2="28" stroke="#201e1d" stroke-width="1.8" />
    <circle cx="0" cy="8" r="3.5" fill="#f6ebdc" stroke="#201e1d" stroke-width="2" />
    <circle cx="0" cy="20" r="3.5" fill="#c67139" />
  </g>

  <!-- ==================== MAIN HEADER ==================== -->
  <g transform="translate(390, 52)">
    <text class="txt-head-title" y="0">${escapeXml(item.headerTitle)}</text>
    <text class="txt-head-sub" y="24">${escapeXml(item.headerSubtitle)}</text>
  </g>

  <!-- ==================== CARD 1: TRUST SPACE ==================== -->
  <g transform="translate(28, 96)">
    <!-- Card Container -->
    <rect width="724" height="372" rx="16" fill="#fffcf7" stroke="#201e1d" stroke-width="2.5" />
    
    <!-- Top-Right Architectural Arch Motif (Direct reference to uploaded image) -->
    <g transform="translate(590, 16)">
      <!-- Outer arch outline -->
      <path d="M 0,55 A 55,55 0 0,1 110,55 L 110,65 L 0,65 Z" fill="#eeddc4" stroke="#201e1d" stroke-width="2" />
      <!-- Arch Keystone Segments (Terracotta, Camel, Sand, Dark) -->
      <path d="M 12,55 A 43,43 0 0,1 98,55 L 86,55 A 31,31 0 0,0 24,55 Z" fill="#c67139" stroke="#201e1d" stroke-width="1.5" />
      <path d="M 36,55 A 19,19 0 0,1 74,55 L 74,65 L 36,65 Z" fill="#fffcf7" stroke="#201e1d" stroke-width="1.5" />
      <!-- Radial Keystone Divider Lines -->
      <line x1="16" y1="36" x2="28" y2="44" stroke="#201e1d" stroke-width="1.5" />
      <line x1="38" y1="18" x2="46" y2="28" stroke="#201e1d" stroke-width="1.5" />
      <line x1="55" y1="12" x2="55" y2="24" stroke="#201e1d" stroke-width="1.5" />
      <line x1="72" y1="18" x2="64" y2="28" stroke="#201e1d" stroke-width="1.5" />
      <line x1="94" y1="36" x2="82" y2="44" stroke="#201e1d" stroke-width="1.5" />
      <!-- Key Motif atop arch -->
      <g transform="translate(50, 4)">
        <circle cx="16" cy="6" r="6" fill="#201e1d" />
        <circle cx="16" cy="6" r="2.5" fill="#fffcf7" />
        <line x1="10" y1="6" x2="-8" y2="6" stroke="#201e1d" stroke-width="2.5" stroke-linecap="round" />
        <line x1="-3" y1="6" x2="-3" y2="10" stroke="#201e1d" stroke-width="2" stroke-linecap="round" />
        <line x1="-6" y1="6" x2="-6" y2="10" stroke="#201e1d" stroke-width="2" stroke-linecap="round" />
      </g>
    </g>

    <!-- Badge: Zero-Knowledge / E2EE -->
    <g transform="translate(24, 20)">
      <rect width="210" height="28" rx="8" fill="#c67139" stroke="#201e1d" stroke-width="2" />
      <!-- Lock Icon inside badge -->
      <g transform="translate(10, 6)">
        <rect x="0" y="6" width="12" height="9" rx="2" fill="#fffcf7" stroke="#201e1d" stroke-width="1.5" />
        <path d="M 2.5,6 L 2.5,3.5 A 3.5,3.5 0 0,1 9.5,3.5 L 9.5,6" fill="none" stroke="#fffcf7" stroke-width="1.8" />
      </g>
      <text class="txt-card-badge" x="32" y="19" fill="#ffffff">${escapeXml(item.c1Badge)}</text>
    </g>

    <!-- Card Title & Subtitle -->
    <text class="txt-card-title" x="24" y="76" fill="#201e1d">${escapeXml(item.c1Title)}</text>
    <text class="txt-card-sub" x="24" y="98">${escapeXml(item.c1Sub)}</text>
    
    <!-- Architectural Divider Line -->
    <line x1="24" y1="112" x2="700" y2="112" stroke="#201e1d" stroke-width="1.5" stroke-dasharray="6 4" />

    <!-- 4 Bullet Items (Full width, clear spacing) -->
    <!-- Item 1 -->
    <g transform="translate(24, 138)">
      <rect x="0" y="-12" width="16" height="16" rx="4" fill="#eeddc4" stroke="#201e1d" stroke-width="1.8" />
      <circle cx="8" cy="-4" r="3" fill="#c67139" />
      <text class="txt-bullet" x="28" y="0">${escapeXml(item.c1Items[0])}</text>
    </g>

    <!-- Item 2 -->
    <g transform="translate(24, 172)">
      <rect x="0" y="-12" width="16" height="16" rx="4" fill="#eeddc4" stroke="#201e1d" stroke-width="1.8" />
      <circle cx="8" cy="-4" r="3" fill="#c67139" />
      <text class="txt-bullet" x="28" y="0">${escapeXml(item.c1Items[1])}</text>
    </g>

    <!-- Item 3 -->
    <g transform="translate(24, 206)">
      <rect x="0" y="-12" width="16" height="16" rx="4" fill="#eeddc4" stroke="#201e1d" stroke-width="1.8" />
      <circle cx="8" cy="-4" r="3" fill="#c67139" />
      <text class="txt-bullet" x="28" y="0">${escapeXml(item.c1Items[2])}</text>
    </g>

    <!-- Item 4 -->
    <g transform="translate(24, 240)">
      <rect x="0" y="-12" width="16" height="16" rx="4" fill="#eeddc4" stroke="#201e1d" stroke-width="1.8" />
      <circle cx="8" cy="-4" r="3" fill="#c67139" />
      <text class="txt-bullet" x="28" y="0">${escapeXml(item.c1Items[3])}</text>
    </g>

    <!-- Stacked Security & Access Bars (Guarantees zero text collision in all locales) -->
    <g transform="translate(24, 274)">
      <!-- Row 1: Permitted Access -->
      <g transform="translate(0, 0)">
        <rect width="676" height="38" rx="8" fill="#f0fae1" stroke="#201e1d" stroke-width="1.8" />
        <rect x="8" y="7" width="130" height="24" rx="5" fill="#2e541f" />
        <text class="txt-tag" x="73" y="23" fill="#ffffff" text-anchor="middle">${escapeXml(item.c1AccessTag)}</text>
        <text class="txt-bar-desc" x="150" y="24" fill="#201e1d">${escapeXml(item.c1AccessText)}</text>
      </g>
      <!-- Row 2: Blocked Surveillance -->
      <g transform="translate(0, 48)">
        <rect width="676" height="38" rx="8" fill="#fff0eb" stroke="#201e1d" stroke-width="1.8" />
        <rect x="8" y="7" width="155" height="24" rx="5" fill="#8c3a1a" />
        <text class="txt-tag" x="85" y="23" fill="#ffffff" text-anchor="middle">${escapeXml(item.c1BlockedTag)}</text>
        <text class="txt-bar-desc" x="175" y="24" fill="#201e1d">${escapeXml(item.c1BlockedText)}</text>
      </g>
    </g>
  </g>

  <!-- ==================== TRANSITION: DELIBERATE SYNTHESIS ==================== -->
  <g transform="translate(390, 478)">
    <!-- Vertical connector lines -->
    <line x1="0" y1="-10" x2="0" y2="12" stroke="#201e1d" stroke-width="2.5" />
    <line x1="0" y1="56" x2="0" y2="76" stroke="#201e1d" stroke-width="2.5" />
    
    <!-- Arrowhead pointing down to Circuit 2 -->
    <polygon points="-6,70 0,80 6,70" fill="#201e1d" />

    <!-- Center Transition Badge -->
    <g transform="translate(-270, 12)">
      <rect width="540" height="44" rx="22" fill="#ecdcc4" stroke="#201e1d" stroke-width="2.5" />
      
      <!-- Bauhaus tick indicator -->
      <g transform="translate(18, 22)">
        <polyline points="0,0 4,4 12,-4" fill="none" stroke="#201e1d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        <line x1="16" y1="-4" x2="28" y2="-4" stroke="#201e1d" stroke-width="2.5" stroke-linecap="round" />
      </g>
      
      <!-- Text -->
      <text class="txt-trans-title" x="280" y="27">${escapeXml(item.transition)}</text>
    </g>

    <!-- Side Graphic Pins matching reference -->
    <g transform="translate(-320, 34)">
      <line x1="-20" y1="0" x2="0" y2="0" stroke="#201e1d" stroke-width="1.8" />
      <circle cx="-10" cy="0" r="3" fill="#c67139" />
    </g>
    <g transform="translate(320, 34)">
      <line x1="0" y1="0" x2="20" y2="0" stroke="#201e1d" stroke-width="1.8" />
      <circle cx="10" cy="0" r="3" fill="#7a8a5e" />
    </g>
  </g>

  <!-- ==================== CARD 2: SYSTEM OF RECORD ==================== -->
  <g transform="translate(28, 568)">
    <!-- Card Container -->
    <rect width="724" height="372" rx="16" fill="#f8faf5" stroke="#201e1d" stroke-width="2.5" />

    <!-- Top-Right Architectural Registry Motif -->
    <g transform="translate(598, 18)">
      <rect x="0" y="0" width="102" height="58" rx="6" fill="#e1eecc" stroke="#201e1d" stroke-width="1.8" />
      <line x1="12" y1="16" x2="90" y2="16" stroke="#201e1d" stroke-width="1.8" />
      <line x1="12" y1="28" x2="68" y2="28" stroke="#7a8a5e" stroke-width="2" />
      <line x1="12" y1="42" x2="72" y2="42" stroke="#7a8a5e" stroke-width="2" />
      <!-- Tiny checkmark block -->
      <rect x="74" y="26" width="18" height="18" rx="3" fill="#7a8a5e" />
      <polyline points="77,35 81,39 88,31" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </g>

    <!-- Badge: System of Record -->
    <g transform="translate(24, 20)">
      <rect width="180" height="28" rx="8" fill="#7a8a5e" stroke="#201e1d" stroke-width="2" />
      <!-- Document icon -->
      <g transform="translate(10, 6)">
        <rect x="0" y="0" width="11" height="15" rx="2" fill="#fffcf7" stroke="#201e1d" stroke-width="1.5" />
        <line x1="3" y1="4" x2="8" y2="4" stroke="#201e1d" stroke-width="1.2" />
        <line x1="3" y1="8" x2="8" y2="8" stroke="#201e1d" stroke-width="1.2" />
      </g>
      <text class="txt-card-badge" x="30" y="19" fill="#ffffff">${escapeXml(item.c2Badge)}</text>
    </g>

    <!-- Card Title & Subtitle -->
    <text class="txt-card-title" x="24" y="76" fill="#201e1d">${escapeXml(item.c2Title)}</text>
    <text class="txt-card-sub" x="24" y="98">${escapeXml(item.c2Sub)}</text>

    <!-- Architectural Divider Line -->
    <line x1="24" y1="112" x2="700" y2="112" stroke="#201e1d" stroke-width="1.5" stroke-dasharray="6 4" />

    <!-- 4 Bullet Items -->
    <!-- Item 1 -->
    <g transform="translate(24, 138)">
      <rect x="0" y="-12" width="16" height="16" rx="4" fill="#e1eecc" stroke="#201e1d" stroke-width="1.8" />
      <circle cx="8" cy="-4" r="3" fill="#7a8a5e" />
      <text class="txt-bullet" x="28" y="0">${escapeXml(item.c2Items[0])}</text>
    </g>

    <!-- Item 2 -->
    <g transform="translate(24, 172)">
      <rect x="0" y="-12" width="16" height="16" rx="4" fill="#e1eecc" stroke="#201e1d" stroke-width="1.8" />
      <circle cx="8" cy="-4" r="3" fill="#7a8a5e" />
      <text class="txt-bullet" x="28" y="0">${escapeXml(item.c2Items[1])}</text>
    </g>

    <!-- Item 3 -->
    <g transform="translate(24, 206)">
      <rect x="0" y="-12" width="16" height="16" rx="4" fill="#e1eecc" stroke="#201e1d" stroke-width="1.8" />
      <circle cx="8" cy="-4" r="3" fill="#7a8a5e" />
      <text class="txt-bullet" x="28" y="0">${escapeXml(item.c2Items[2])}</text>
    </g>

    <!-- Item 4 -->
    <g transform="translate(24, 240)">
      <rect x="0" y="-12" width="16" height="16" rx="4" fill="#e1eecc" stroke="#201e1d" stroke-width="1.8" />
      <circle cx="8" cy="-4" r="3" fill="#7a8a5e" />
      <text class="txt-bullet" x="28" y="0">${escapeXml(item.c2Items[3])}</text>
    </g>

    <!-- Stacked Governance & Assurance Bars -->
    <g transform="translate(24, 274)">
      <!-- Row 1: Permitted Governance Access -->
      <g transform="translate(0, 0)">
        <rect width="676" height="38" rx="8" fill="#f0f4f8" stroke="#201e1d" stroke-width="1.8" />
        <rect x="8" y="7" width="125" height="24" rx="5" fill="#1e293b" />
        <text class="txt-tag" x="70" y="23" fill="#ffffff" text-anchor="middle">${escapeXml(item.c2AccessTag)}</text>
        <text class="txt-bar-desc" x="145" y="24" fill="#201e1d">${escapeXml(item.c2AccessText)}</text>
      </g>
      <!-- Row 2: Safe Process Observability -->
      <g transform="translate(0, 48)">
        <rect width="676" height="38" rx="8" fill="#f0fae1" stroke="#201e1d" stroke-width="1.8" />
        <rect x="8" y="7" width="135" height="24" rx="5" fill="#2e541f" />
        <text class="txt-tag" x="75" y="23" fill="#ffffff" text-anchor="middle">${escapeXml(item.c2NoteTag)}</text>
        <text class="txt-bar-desc" x="155" y="24" fill="#201e1d">${escapeXml(item.c2NoteText)}</text>
      </g>
    </g>
  </g>

  <!-- ==================== BOTTOM DECORATIVE FOOTER ==================== -->
  <g transform="translate(28, 954)">
    <!-- Padlock Icon on left (from reference illustration) -->
    <g transform="translate(10, 4)">
      <rect x="0" y="8" width="16" height="12" rx="3" fill="#d2a06c" stroke="#201e1d" stroke-width="1.8" />
      <path d="M 4,8 L 4,4 A 4,4 0 0,1 12,4 L 12,8" fill="none" stroke="#201e1d" stroke-width="1.8" />
      <circle cx="8" cy="13" r="1.5" fill="#201e1d" />
      <line x1="8" y1="14" x2="8" y2="17" stroke="#201e1d" stroke-width="1.5" />
    </g>

    <!-- Brand text -->
    <text class="txt-footer" x="38" y="20">${escapeXml(item.footerBrand)}</text>

    <!-- Bauhaus Graphic Motifs on right -->
    <g transform="translate(680, 16)">
      <polyline points="0,0 4,4 12,-4" fill="none" stroke="#201e1d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <line x1="16" y1="-4" x2="30" y2="-4" stroke="#201e1d" stroke-width="2" stroke-linecap="round" />
    </g>
  </g>
</svg>`;
}

for (const [lang, item] of Object.entries(data)) {
	const svg = renderSvg(lang, item);
	const filename = path.join(outDir, `two-circuits-model-${lang}.svg`);
	fs.writeFileSync(filename, svg, 'utf-8');
	console.log(`Generated: ${filename}`);
}

async function renderPngs() {
	const { chromium } = await import('playwright');
	const browser = await chromium.launch();
	const page = await browser.newPage({
		viewport: { width: 780, height: 1010 },
		deviceScaleFactor: 2
	});

	for (const lang of Object.keys(data)) {
		const svgPath = path.join(outDir, `two-circuits-model-${lang}.svg`);
		const pngPath = path.join(outDir, `two-circuits-model-${lang}.png`);
		await page.goto(`file://${svgPath.replace(/\\/g, '/')}`);
		await page.screenshot({ path: pngPath, type: 'png' });
		console.log(`Rendered PNG: ${pngPath}`);
	}

	await browser.close();
}

renderPngs().catch(console.error);
