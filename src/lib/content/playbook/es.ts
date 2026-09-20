import type { PlaybookItem, CategoryMeta } from './types';

export const categoriesEs: CategoryMeta[] = [
	{
		id: 'foundations',
		label: 'Fundamentos',
		description: 'Filosofía de gestión, cálculo de apalancamiento (leverage) y estudios empíricos.'
	},
	{
		id: 'onboarding',
		label: 'Incorporación',
		description: 'Iniciar relaciones laborales con claridad, alineación y confianza mutua.'
	},
	{
		id: 'regular',
		label: 'Sincronización habitual',
		description: 'Rutinas quincenales para mantener el ritmo y resolver bloqueos tempranos.'
	},
	{
		id: 'growth',
		label: 'Carrera y crecimiento',
		description: 'Conversaciones trimestrales sobre desarrollo profesional y trayectoria.'
	},
	{
		id: 'difficult',
		label: 'Momentos difíciles',
		description: 'Gestión de la sobrecarga laboral, prevención del burnout y feedback crítico.'
	},
	{
		id: 'leadership',
		label: 'Liderazgo',
		description: 'Reuniones skip-level y alineación estratégica transversal.'
	}
];

export const playbookItemsEs: PlaybookItem[] = [
	{
		slug: 'high-leverage-1-on-1',
		title: 'El 1 a 1 de alto impacto: El manifiesto para reuniones con sentido',
		subtitle:
			'Por qué el 90 % de los 1 a 1 terminan en reportes de estado aburridos y cómo convertirlos en la palanca más potente de tu equipo.',
		category: 'foundations',
		readTime: '6 min de lectura',
		cadence: 'Marco fundamental para cada ciclo recurrente',
		duration: '30–45 minutos',
		targetAudience: 'Engineering Managers, Tech Leads, Directores y CTOs',
		summaryHtml:
			'El 1 a 1 no es una carga burocrática ni un interrogatorio de tareas. Es la actividad de mayor apalancamiento en la agenda de un líder. Con regularidad, continuidad y privacidad real, previene el agotamiento y saca a la luz problemas semanas antes de que aparezcan en los paneles.',
		whyItMattersHtml:
			'<p><strong>La trampa del reporte de estado:</strong> La mayoría de líderes desperdician los 1 a 1 haciendo de viva voz lo que Jira o Slack ya hacen por escrito: <em>"¿qué hiciste ayer y qué harás hoy?"</em>. Cuando el 1 a 1 se convierte en un informe de estado, ambas partes desconectan. Los bloqueos reales quedan ocultos y la seguridad psicológica se disuelve.</p><p><strong>La matemática de Andy Grove:</strong> En <em>High Output Management</em>, Andy Grove calculó el apalancamiento directivo: 90 minutos de dedicación en un 1 a 1 bien enfocado pueden elevar la calidad del trabajo de un ingeniero durante 80 horas entre reuniones. Es un retorno de inversión superior a 50x. El objetivo no es supervisar, sino transmitir contexto, entrenar el criterio y despejar obstáculos.</p><p><strong>El hallazgo de Google Project Oxygen:</strong> El estudio de Google sobre decenas de miles de observaciones demostró que mantener reuniones periódicas centradas en el bienestar y el desarrollo personal es el predictor más sólido del éxito de un mánager. La destreza técnica quedó en el último lugar de las competencias analizadas.</p><p><strong>La brecha de continuidad:</strong> Un documento aislado o una página en Notion almacena notas, pero no articula un proceso. Los acuerdos de mayo se olvidan en julio. El verdadero impacto exige continuidad automática: los objetivos y compromisos deben transitar de un ciclo al siguiente hasta resolverse.</p><p><strong>La privacidad como condición de la sinceridad:</strong> No hay vulnerabilidad sin confidencialidad absoluta. Si las notas residen en la nube corporativa donde administradores de IT o terceros pueden husmear, el equipo se autocensura. El cifrado de extremo a extremo es el fundamento técnico de una conversación transparente.</p>',
		agenda: [
			{
				title: 'Pilar 1: Pulso y energía (5 min)',
				durationMinutes: 5,
				description:
					'Evaluar el estado anímico y el ancho de banda mental antes de entrar en materia.',
				questions: [
					'¿Cuál es tu nivel de energía esta semana en una escala del 1 al 5?',
					'¿Cuál fue tu momento más gratificante de la semana, dentro o fuera del trabajo?'
				]
			},
			{
				title: 'Pilar 2: Bloqueos y fricción (15 min)',
				durationMinutes: 15,
				description: 'Identificar trabas que frenan la fluidez y velocidad del trabajo.',
				questions: [
					'¿Qué cuello de botella o dependencia de otros equipos te está frenando ahora mismo?',
					'¿Qué decisión o proceso esta semana se sintió innecesariamente lento o frustrante?'
				]
			},
			{
				title: 'Pilar 3: Alineación y trayectoria profesional (15 min)',
				durationMinutes: 15,
				description: 'Conectar la labor diaria con las aspiraciones a largo plazo.',
				questions: [
					'¿De qué manera tus tareas actuales ayudan a desarrollar las competencias que buscas potenciar este año?',
					'¿Sientes un nivel adecuado de reto o el trabajo se está volviendo monótono?'
				]
			},
			{
				title: 'Pilar 4: Feedback bidireccional y compromisos (10 min)',
				durationMinutes: 10,
				description: 'Intercambiar observaciones constructivas y fijar compromisos claros.',
				questions: [
					'¿Qué podría hacer yo de forma diferente para respaldarte mejor o blindar tu concentración?',
					'¿Cuáles son los 1 o 2 compromisos concretos que asumimos hasta el próximo encuentro?'
				]
			}
		],
		tips: [
			'Regla 80/20: el colaborador habla el 80 % del tiempo; el mánager no más del 20 %.',
			'Nunca canceles un 1 a 1 a última hora; si es inevitable, reagéndalo de inmediato.',
			'Registra los acuerdos en tiempo real para retomar el hilo sin esfuerzo en la siguiente sesión.'
		],
		keyTakeaway:
			'El rendimiento de un líder es el rendimiento de su equipo. El 1 a 1 es la palanca principal de mando.'
	},
	{
		slug: 'first-1-on-1',
		title: 'El primer 1 a 1: Alineación de expectativas y seguridad psicológica',
		subtitle:
			'Establecer confianza mutua, comprender estilos de trabajo y acordar las bases para futuras reuniones.',
		category: 'onboarding',
		readTime: '4 min de lectura',
		cadence: 'Primeras 1–2 semanas de trabajo conjunto',
		duration: '45–60 minutos',
		targetAudience: 'Mánager y nuevo colaborador (o nuevo líder en equipo consolidado)',
		summaryHtml:
			'El primer 1 a 1 no es una revisión técnica ni un reporte de estado. Su objetivo es calibrar la relación de trabajo, disipar temores y construir seguridad psicológica.',
		whyItMattersHtml:
			'<p>Como decía Andy Grove, el 1 a 1 es fundamentalmente <em>la reunión del colaborador</em>. Cuando alguien se une al equipo, la incertidumbre genera estrés. Clarificar que este espacio existe para apoyar transforma la dinámica desde el primer día.</p>',
		agenda: [
			{
				title: 'Parte 1: Desmitificar el 1 a 1 (10 min)',
				durationMinutes: 10,
				description:
					'Aclarar para qué sirven estas reuniones y por qué la privacidad está garantizada.',
				questions: [
					'¿Cuál ha sido tu experiencia con reuniones 1 a 1 en empleos anteriores? ¿Qué funcionaba bien y qué te molestaba?',
					'Mi filosofía: este es tu espacio, no mi control de tareas. ¿Cómo resuena esto contigo?'
				]
			},
			{
				title: 'Parte 2: Estilo de trabajo y comunicación (20 min)',
				durationMinutes: 20,
				description:
					'Comprender en qué condiciones trabaja mejor y cómo prefiere recibir información.',
				questions: [
					'¿En qué condiciones rindes con mayor enfoque (bloques de concentración, silencio, pairing)?',
					'¿Cómo prefieres recibir feedback: en el momento, por escrito con antelación o en persona en el 1 a 1?',
					'Cuando estás bajo estrés o sobrecarga, ¿cómo se manifiesta y cómo puedo apoyarte?'
				]
			},
			{
				title: 'Parte 3: Los primeros 30 días (15 min)',
				durationMinutes: 15,
				description: 'Garantizar que cuenta con todo lo necesario para un arranque exitoso.',
				questions: [
					'¿Qué es lo que más confuso o poco claro te ha parecido hasta ahora?',
					'¿Sientes que te falta alguna herramienta, permiso o contexto clave?'
				]
			}
		],
		tips: [
			'No hables de tickets de Jira ni de sprints.',
			'Escucha activamente el 80 % del tiempo.',
			'Reitera que la confidencialidad está garantizada.'
		],
		keyTakeaway:
			'La primera reunión define el tono de toda la relación laboral. Prioriza la empatía sobre la burocracia.'
	},
	{
		slug: 'bi-weekly-pulse',
		title: 'Sincronización quincenal: El 1 a 1 periódico',
		subtitle:
			'Un marco de 30 minutos centrado en energía, progreso, eliminación de obstáculos y feedback mutuo.',
		category: 'regular',
		readTime: '3 min de lectura',
		cadence: 'Cada 1 a 2 semanas',
		duration: '30–45 minutos',
		targetAudience: 'Mánager y colaborador',
		summaryHtml:
			'Una sincronización habitual nunca debe ser una lectura en voz alta del backlog. Trata sobre contexto, bloqueos y energía.',
		whyItMattersHtml:
			'<p>Las reuniones periódicas y estructuradas evitan que las pequeñas fricciones se conviertan en crisis graves o renuncias inesperadas.</p>',
		agenda: [
			{
				title: '1. Pulso personal y energía (5 min)',
				durationMinutes: 5,
				description: 'Empezar por la persona, no por las tareas pendientes.',
				questions: [
					'¿Cómo describirías tu nivel de energía esta semana del 1 al 5?',
					'¿Cuál ha sido tu momento más destacado de la semana?'
				]
			},
			{
				title: '2. Bloqueos y dependencias (15 min)',
				durationMinutes: 15,
				description: 'Detectar y eliminar trabas que ralentizan el avance.',
				questions: [
					'¿Qué está consumiendo demasiado tiempo o resultando innecesariamente complejo?',
					'¿Hay dependencias de otros equipos que estén frenando tu trabajo?',
					'¿Qué puedo hacer para despejar el camino en las próximas dos semanas?'
				]
			},
			{
				title: '3. Feedback mutuo y compromisos (10 min)',
				durationMinutes: 10,
				description: 'Revisar acuerdos pasados y calibrar expectativas.',
				questions: [
					'¿Cómo avanzaron los compromisos fijados en nuestro último 1 a 1?',
					'¿Hubo decisiones recientes donde sentiste falta de contexto o desacuerdo?'
				]
			}
		],
		tips: [
			'Revisa las notas del ciclo anterior antes de empezar la sesión.',
			'Si el colaborador empieza a recitar el estado de tickets, redirige amablemente hacia aprendizajes y retos.'
		],
		keyTakeaway:
			'La regularidad supera a la duración: 30 minutos enfocados cada dos semanas rinden más que un maratón esporádico.'
	},
	{
		slug: 'career-growth',
		title: 'Desarrollo y carrera: La revisión trimestral',
		subtitle:
			'Tomar distancia del día a día: Trayectoria a largo plazo, nuevas competencias y aspiraciones.',
		category: 'growth',
		readTime: '4 min de lectura',
		cadence: 'Trimestral (cada 3–6 meses)',
		duration: '45–60 minutos',
		targetAudience: 'Mánager y colaborador',
		summaryHtml:
			'Un espacio exclusivo para hablar del futuro profesional, lejos de las urgencias de los sprints.',
		whyItMattersHtml:
			'<p>Según Gallup, la falta de desarrollo es uno de los principales motivos de renuncia del talento sobresaliente. Fijar un encuentro trimestral evita que el crecimiento quede sepultado por la rutina diaria.</p>',
		agenda: [
			{
				title: '1. Reflexión panorámica (15 min)',
				durationMinutes: 15,
				description: 'Balance de logros recientes e intereses emergentes.',
				questions: [
					'Mirando los últimos meses, ¿de qué proyecto o resultado te sientes más orgulloso(a)?',
					'¿Qué tipo de desafíos te han recargado de energía y cuáles te han agotado?'
				]
			},
			{
				title: '2. Rumbo y aspiraciones (20 min)',
				durationMinutes: 20,
				description: 'Visualizar el rol ideal en los próximos 1–2 años.',
				questions: [
					'Al proyectar tu rol ideal en 1–2 años, ¿cómo imaginas tu jornada diaria?',
					'¿Te atrae más la maestría técnica/arquitectura o la gestión y liderazgo de personas?'
				]
			},
			{
				title: '3. Oportunidades de aprendizaje (15 min)',
				durationMinutes: 15,
				description: 'Convertir metas en retos concretos en proyectos reales.',
				questions: [
					'¿En qué próximo proyecto podemos asignarte un reto para ejercitar esa habilidad?',
					'¿Qué hito claro podemos comprometernos a evaluar dentro de 90 días?'
				]
			}
		],
		tips: [
			'Nunca mezcles este espacio con revisiones de sueldo o llamadas de atención.',
			'Sé honesto sobre los caminos de progresión reales en la empresa.'
		],
		keyTakeaway:
			'Crecer no siempre es un ascenso: es expandir tu autonomía, criterio y capacidad de impacto.'
	},
	{
		slug: 'burnout-detection',
		title: 'Sobrecarga y agotamiento: Recuperar el equilibrio',
		subtitle:
			'Un marco sensible para identificar el agotamiento, eliminar la culpa y redistribuir la carga de trabajo.',
		category: 'difficult',
		readTime: '4 min de lectura',
		cadence: 'Cuando sea necesario o ante señales de estrés prolongado',
		duration: '45 minutos',
		targetAudience: 'Mánager y colaborador bajo sobrecarga',
		summaryHtml:
			'Cuando alguien está agotado, las preguntas habituales fracasan. Esta guía ayuda a descomprimir con empatía y trazar un plan de alivio inmediato.',
		whyItMattersHtml:
			'<p>Los mejores profesionales suelen sufrir el agotamiento en silencio por miedo a parecer vulnerables. Tu misión como líder aquí no es presionar con plazos, sino salvaguardar la salud del equipo.</p>',
		agenda: [
			{
				title: '1. Empatía y seguridad (10 min)',
				durationMinutes: 10,
				description: 'Normalizar la situación y eliminar el temor a represalias.',
				questions: [
					'He notado un ritmo muy intenso últimamente y quería saber honestamente cómo te encuentras.',
					'Tu bienestar y salud van antes que cualquier entrega. Ningún proyecto justifica quemarse.'
				]
			},
			{
				title: '2. Triaje y reducción de carga (20 min)',
				durationMinutes: 20,
				description: 'Priorizar sin contemplaciones y eliminar tareas prescindibles.',
				questions: [
					'Si pudiéramos quitarte dos responsabilidades hoy mismo, ¿qué te aportaría mayor alivio?',
					'¿Qué reuniones en tu calendario consumen energía sin aportar verdadero valor?'
				]
			},
			{
				title: '3. Medidas de protección inmediata (15 min)',
				durationMinutes: 15,
				description: 'Establecer límites protectores para los próximos días.',
				questions: [
					'¿Te ayudaría tomar unos días de desconexión absoluta o un periodo libre de reuniones?',
					'¿Cómo puedo blindarte ante solicitudes externas mientras recuperas tu ritmo?'
				]
			}
		],
		tips: [
			'Evita frases vacías como "tómatelo con calma" si la lista de tareas sigue intacta.',
			'Toma la iniciativa de tachar tareas del backlog tú mismo.'
		],
		keyTakeaway:
			'El burnout es un fallo sistémico de gestión de carga, no una debilidad individual. Actúa con rapidez.'
	},
	{
		slug: 'skip-level',
		title: 'Skip-Level 1 a 1: Diagnóstico de salud organizacional',
		subtitle:
			'Diálogo entre la dirección ejecutiva y los especialistas para evaluar estrategia, cultura y fricciones.',
		category: 'leadership',
		readTime: '4 min de lectura',
		cadence: 'Una vez cada 3–6 meses',
		duration: '30–45 minutos',
		targetAudience: 'Líder Senior / Director / CTO y colaborador individual',
		summaryHtml:
			'Las reuniones skip-level ofrecen una mirada sin filtros sobre los desafíos reales de la organización sin restar autoridad a los mánagers directos.',
		whyItMattersHtml:
			'<p>Ben Horowitz subraya que las malas noticias tardan mucho en llegar a la cumbre. Las conversaciones skip-level eluden esos filtros y conectan a los líderes con la realidad del día a día.</p>',
		agenda: [
			{
				title: '1. Propósito y confianza (5 min)',
				durationMinutes: 5,
				description: 'Aclarar que no se trata de una auditoría encubierta de desempeño.',
				questions: [
					'¡Gracias por tu tiempo! El objetivo es escuchar tu visión sobre el equipo y la empresa en general.'
				]
			},
			{
				title: '2. Claridad estratégica (15 min)',
				durationMinutes: 15,
				description: 'Comprobar si la visión general se traduce en la operativa cotidiana.',
				questions: [
					'¿Sientes clara y motivadora la dirección estratégica de la compañía este año?',
					'¿Ves con nitidez cómo tu labor diaria aporta a las prioridades principales?'
				]
			},
			{
				title: '3. Cuellos de botella sistémicos (15 min)',
				durationMinutes: 15,
				description: 'Identificar trabas que escapan al control del mánager directo.',
				questions: [
					'¿Cuál es el mayor obstáculo que frena a tu equipo al momento de entregar software de calidad?',
					'Si estuvieras en mi puesto durante una semana, ¿qué cambio organizacional implementarías de inmediato?'
				]
			}
		],
		tips: [
			'Nunca utilices un skip-level para ventilar quejas sobre el mánager directo.',
			'Identifica patrones repetidos entre varias conversaciones.'
		],
		keyTakeaway:
			'Los skip-levels evalúan la salud del sistema en su conjunto. Mantén una mirada amplia.'
	}
];
