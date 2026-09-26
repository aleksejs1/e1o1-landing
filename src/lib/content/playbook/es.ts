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
			'Construir confianza mutua, calibrar estilos de trabajo individuales («manual de usuario personal») y acordar reglas de juego claras para futuros encuentros.',
		category: 'onboarding',
		readTime: '5 min de lectura',
		cadence: 'Primeras 1–2 semanas de trabajo conjunto',
		duration: '45–60 minutos',
		targetAudience: 'Mánager y nuevo colaborador (o nuevo líder en equipo consolidado)',
		summaryHtml:
			'El primer 1 a 1 sienta las bases psicológicas de la relación laboral para los meses venideros. No es un reporte de tareas ni un examen de competencia. Su objetivo es disipar la inquietud natural ante lo desconocido («¿por qué me convocan?», «¿me están evaluando?»), acordar un marco de trabajo compartido (Working Agreement), calibrar canales de feedback y detectar fricciones tempranas durante el onboarding.',
		whyItMattersHtml:
			'<p><strong>Asimetría de poder y detección instintiva de amenazas:</strong> Cuando un nuevo integrante recibe la primera invitación de calendario para un 1 a 1 con su mánager, el cerebro activa de forma refleja un escaneo de amenazas: <em>«¿Hice algo mal? ¿Me van a interrogar? ¿Qué esperan exactamente de mí?»</em>. Si el encuentro arranca sin un encuadre explícito, la persona gasta su energía en defenderse en lugar de abrirse a un diálogo honesto. El objetivo fundamental del primer 1 a 1 es desmitificar por completo este espacio y construir seguridad psicológica.</p><p><strong>El principio de Andy Grove — La reunión del colaborador:</strong> En <em>High Output Management</em>, Andy Grove enunció un axioma intemporal: el 1 a 1 le pertenece por definición al colaborador, no al líder. Es el miembro del equipo quien marca el rumbo de la conversación; el mánager actúa como facilitador, escucha activo y eliminador de bloqueos. Ben Horowitz coincide en <em>The Hard Thing About Hard Things</em>: si el equipo no confía en que su líder tiene un interés genuino en resolver sus fricciones, la organización se deteriora en silencio a causa de los problemas ocultos.</p><p><strong>El alto coste de las expectativas implícitas:</strong> Hasta el 80 % de los malentendidos durante el periodo de prueba no se deben a carencias técnicas, sino a supuestos no verbalizados sobre comunicación, velocidad de respuesta y autonomía. Un mánager puede asumir que cualquier bloqueo se avisa al instante en Slack, mientras que el ingeniero pasa días atascado por temor a molestar. El primer 1 a 1 convierte las suposiciones tácitas en acuerdos explícitos.</p><p><strong>El «manual de usuario personal» (Personal User Manual):</strong> Cada profesional opera con una interfaz de trabajo única: algunos precisan bloques ininterrumpidos de trabajo profundo por la mañana, otros asimilan mejor la crítica constructiva por escrito antes de la reunión, y otros necesitan conocer el contexto estratégico global para orientarse. Calibrar este manual de uso en la primera semana ahorra meses de roces innecesarios.</p>',
		preparationHtml:
			'<p><strong>1. Enviar la invitación con un encuadre transparente:</strong> Jamás envíe una invitación de calendario vacía titulada simplemente «1:1» o «Sync» sin descripción. Esto dispara la ansiedad de inmediato. Utilice esta plantilla contrastada:</p><div class="invite-box"><span class="invite-badge">Plantilla de invitación de calendario:</span><p class="invite-text">«¡Hola! Este es nuestro primer 1 a 1 regular. El propósito de este encuentro es conocernos, definir cómo funcionarán nuestras sesiones periódicas, calibrar la mejor manera de comunicarnos y darnos feedback, y resolver cualquier duda que tengas. No habrá revisiones de tickets de Jira, pruebas sorpresa ni interrogatorios. Este es tu tiempo. Si ya tienes temas que quieras plantear, ¡añádelos directamente a la agenda!»</p></div><p><strong>2. Preparación previa del mánager (15 minutos de trabajo previo):</strong></p><ul><li><strong>Revisar antecedentes y motivaciones:</strong> Relea el CV y las notas de las entrevistas. Recuerde qué motivó a la persona a unirse al equipo (arquitectura técnica, escala, cultura) y qué áreas de desarrollo detectó el panel de selección.</li><li><strong>Verificar la higiene del onboarding:</strong> Asegúrese de que los accesos clave (repositorios, CI/CD, nubes, canales de mensajería) estén operativos y que cuente con un buddy de acogida asignado.</li><li><strong>Garantizar total privacidad ambiental:</strong> Realice la conversación a puerta cerrada en una sala de reuniones o por videoconferencia privada. Nunca en un espacio abierto ruidoso ni en una mesa donde otros compañeros puedan escuchar.</li></ul>',
		agenda: [
			{
				title: 'Parte 1: Acuerdo de trabajo para el 1 a 1 y confianza (10 min)',
				durationMinutes: 10,
				description:
					'Definir la filosofía de las reuniones, la regla 80/20 de escucha activa y la política de protección del espacio.',
				questions: [
					'¿Cuál ha sido tu experiencia con reuniones 1 a 1 en empresas anteriores? ¿Qué funcionaba muy bien y qué te parecía una pérdida de tiempo? (Preste atención: revelará traumas pasados con micrománagers, cancelaciones de última hora o interrogatorios de tickets).',
					'Mi principio básico: este 1 a 1 es tu tiempo, no mi revisión de tareas. Tú marcas la agenda y mi trabajo es despejar obstáculos y ayudarte a crecer. ¿Cómo te suena este enfoque?',
					'Pacto de reprogramación: este espacio está blindado en el calendario. Si surge una urgencia, nunca se cancela en el vacío; se reprograma de inmediato para un momento específico de esa misma semana.'
				]
			},
			{
				title: 'Parte 2: Estilo de trabajo y el «Manual de usuario personal» (25 min)',
				durationMinutes: 25,
				description:
					'Mapear condiciones óptimas de concentración, ritmos productivos, vías de feedback y señales de sobrecarga.',
				questions: [
					'¿En qué condiciones trabajas con mayor concentración y productividad? ¿Necesitas bloques continuos de deep work sin reuniones ni interrupciones de chat? (Clave: cómo proteger su calendario de la fragmentación).',
					'¿Cómo prefieres recibir feedback constructivo: al momento por mensaje directo, de forma estructurada por escrito antes de la reunión para reflexionar, o en persona durante el 1 a 1?',
					'Cuando estás bajo mucho estrés o te sientes sobrecargado: ¿cómo se nota desde fuera (te aíslas, te muestras cortante en code reviews, guardas silencio)? ¿Cuál es la mejor manera de ofrecerte apoyo en esos momentos?',
					'¿Qué forma de reconocimiento valoras más: una felicitación pública ante el equipo/demo o una conversación privada valorando la dificultad técnica de lo que construiste?'
				]
			},
			{
				title: 'Parte 3: Auditoría de «ojos frescos» (Fresh Eyes) y primeros bloqueos (15 min)',
				durationMinutes: 15,
				description:
					'Aprovechar la mirada imparcial de las primeras semanas antes de que surja la ceguera institucional.',
				questions: [
					'¿Qué es lo que te ha parecido más confuso, extraño o ilógico en nuestra base de código, arquitectura o procesos de equipo? (Escuche atentamente: quienes acaban de llegar identifican deudas técnicas y vacíos documentales que los veteranos han normalizado).',
					'¿Cuentas con todos los accesos, contexto y herramientas necesarias ahora mismo? ¿Tienes total claridad sobre qué significará tener éxito en tus primeros 30 y 90 días?',
					'¿Con quién del equipo o de otras áreas necesitas conectar en los próximos días? ¿Te vendría bien que haga una introducción?'
				]
			}
		],
		antiPatterns: [
			{
				mistake: 'Transformar la reunión en un seguimiento verbal de tickets de Jira',
				whyBad:
					'Destruye el valor estratégico de la cita y posiciona al mánager como un inspector de tareas. El colaborador dejará de compartir fricciones sistémicas, frustraciones y señales de agotamiento.',
				betterAlternative:
					'Monitorice el avance de tareas de forma asíncrona en el gestor de incidencias o en la daily. Reserve el 1 a 1 exclusivamente para analizar causas raíz, entorno de trabajo y desarrollo.'
			},
			{
				mistake: 'Monólogo del mánager (hablar más del 50–70 % del tiempo)',
				whyBad:
					'Convierte un refugio de confianza en una lección magistral agotadora. El líder pontifica sobre su visión en vez de escuchar y captar tensiones latentes.',
				betterAlternative:
					'Aplique la regla 80/20: el colaborador habla el 80 % del tiempo. Mantenga pausas deliberadas de 5 a 7 segundos tras una respuesta; los temas más sensibles surgen justo tras el silencio.'
			},
			{
				mistake: 'Hacer promesas precipitadas e infundadas sobre ascensos o sueldo',
				whyBad:
					'Con el afán de agradar de entrada, algunos líderes hacen promesas imprudentes («en seis meses serás senior»). Si RRHH o los presupuestos lo frenan, la credibilidad queda destruida para siempre.',
				betterAlternative:
					'Explique con transparencia las tablas de competencias, calendarios de evaluación y criterios. Comprométase a ofrecer apoyo y feedback sincero, pero no garantice decisiones administrativas de antemano.'
			},
			{
				mistake: 'Grabar la videollamada o registrar notas en espacios públicos de la empresa',
				whyBad:
					'El aviso de grabación o un documento compartido sin cifrar dispara la autocensura inmediata. Nadie compartirá roces interpersonales si sabe que terceros pueden auditar el archivo.',
				betterAlternative:
					'Nunca grabe los 1 a 1. Utilice notas privadas cifradas de extremo a extremo a las que solo tengan acceso los dos participantes, centradas en compromisos claros.'
			}
		],
		followUpHtml:
			'<p><strong>1. Conseguir una victoria rápida (Quick Win) en las primeras 24 horas:</strong> Identifique una pequeña dificultad mencionada en la charla (un permiso pendiente, ruido excesivo, una licencia o una presentación técnica) y <em>resuélvala en las siguientes 24 horas</em>. Es la señal más elocuente para quien recién llega: demuestra que los 1 a 1 tienen impacto real y que su líder cumple lo que dice.</p><p><strong>2. Documentar compromisos bilateralmente de forma privada:</strong> Envíe o anote un breve resumen de 2 o 3 puntos con los compromisos de cada parte en un espacio cifrado de extremo a extremo. Evite wikis corporativas abiertas donde detalles personales puedan quedar expuestos.</p><p><strong>3. Blindar el ritmo periódico en el calendario:</strong> Compruebe que la cita recurrente (semanal o quincenal) quede fijada de forma permanente en ambos calendarios. Este horario debe tratarse como prioritario e inamovible.</p>',
		tips: [
			'Regla 80/20: hable como máximo el 20 % del tiempo. Aprenda a escuchar con pausas reflexivas.',
			'Proteja el espacio: si surge una emergencia, no suspenda la cita; muévala dentro de esa misma semana.',
			'Cero consultas de estado: revise Jira para ver tickets; dedique el 1 a 1 a las personas, el contexto y los bloqueos.',
			'Quick Win en 24h: desactive al menos una pequeña traba de inmediato para afianzar la credibilidad de estas reuniones.'
		],
		keyTakeaway:
			'El primer 1 a 1 construye el cimiento psicológico de toda la colaboración. La rapidez de integración y la sinceridad del colaborador durante los próximos seis meses dependen de si se sintió escuchado y seguro en este diálogo.'
	},
	{
		slug: 'bi-weekly-pulse',
		title: 'Sincronización quincenal: El 1 a 1 periódico de alto impacto',
		subtitle:
			'Un marco repetible de 30–45 minutos para líderes técnicos: diagnosticar carga cognitiva, eliminar bloqueos sistémicos y mantener una alineación continua.',
		category: 'regular',
		readTime: '5 min de lectura',
		cadence: 'Cada 1 a 2 semanas',
		duration: '30–45 minutos',
		targetAudience: 'Engineering managers, líderes técnicos y desarrolladores',
		summaryHtml:
			'La sincronización quincenal es el latido operativo de los equipos de alto rendimiento y el principal radar preventivo del mánager. Su cometido no es repasar tickets de Jira, sino detectar el agotamiento de energía, erradicar la fricción organizativa, conectar el código diario con el impacto del negocio y ajustar el feedback antes de que el malestar desemboque en dimisiones silenciosas.',
		whyItMattersHtml:
			'<p><strong>La trampa del «No tengo nada pendiente, ¿lo cancelamos?»:</strong> El hábito más dañino en los 1 a 1 periódicos es el saludo cómplice: <em>«Oye, yo no tengo nada urgente, ¿tú tampoco? Pues ahorremos tiempo y lo dejamos para la próxima»</em>. En el momento parece una decisión pragmática, pero suspender reuniones de forma reiterada destruye el ritual de seguridad psicológica. Las frustraciones ocultas, el cansancio acumulado y los desencuentros no desaparecen; simplemente se repliegan hacia el silencio. Cuando tres meses después un ingeniero referente renuncia por sorpresa alegando agotamiento y falta de visión, el mánager no comprende nada, pues en los 1 a 1 «todo iba perfecto».</p><p><strong>El principio del radar preventivo:</strong> Un 1 a 1 estructurado no es una brigada de bomberos; es un sensor sísmico. Los factores de desgaste (pipelines de CI/CD lentos, code reviews interminables, dependencias atascadas con otros departamentos o cambios de rumbo poco explicados) se acumulan de manera casi invisible. Sin un espacio periódico y protegido cada dos semanas donde expresarse con total franqueza y sin miedo al juicio, las personas acaban desconectando y cayendo en el cumplimiento mínimo.</p><p><strong>Contexto frente a control (conectar código y negocio):</strong> Los mejores ingenieros pierden el entusiasmo cuando se les trata como meros operarios de fábrica de software. La sesión quincenal es el vehículo ideal para compartir contexto estratégico: por qué esa funcionalidad es crítica para retener clientes, hacia dónde se dirige la empresa y de qué forma las decisiones de arquitectura protegen la estabilidad del producto.</p><p><strong>La ley de la continuidad operativa:</strong> Una reunión solo es creíble si genera seguimiento. Si un mánager se compromete con vehemencia a «gestionar una licencia» o «desatascar un permiso con otro equipo» y lo olvida en la siguiente cita, el colaborador asume que verbalizar problemas es una pérdida de tiempo. La perseverancia en los compromisos mutuos construye un liderazgo intachable.</p>',
		preparationHtml:
			'<p><strong>1. Lista de verificación del mánager (10 minutos antes):</strong></p><ul><li><strong>Revisar las notas del 1 a 1 anterior:</strong> Compruebe el estado de cada acuerdo asumido hace dos semanas. Si tiene algún punto pendiente, reconózcalo de inmediato al inicio del encuentro sin esperar a que se lo reclamen.</li><li><strong>Escanear el contexto objetivo (por empatía, jamás por micromanagement):</strong> Observe Git y el gestor de incidencias. ¿Lleva una PR compleja más de cuatro días en revisión? ¿Hubo commits en fin de semana o guardias nocturnas? ¿Ha habido discusiones tensas en Slack? Esto le revelará dónde se desgastó la energía.</li><li><strong>Mantener una agenda compartida (Running Agenda):</strong> Disponga de un documento cifrado de extremo a extremo donde ambas partes anoten temas asíncronamente a lo largo de las dos semanas.</li></ul>',
		agenda: [
			{
				title: 'Parte 1: Pulso de energía y calibración de recursos (5–7 min)',
				durationMinutes: 7,
				description:
					'Evaluar la energía emocional real antes de abordar temas técnicos. Evitar el superficial «¿qué tal todo?».',
				questions: [
					'Del 1 al 5, ¿en qué nivel está tu energía esta semana? ¿Qué te ha dado mayor satisfacción y qué te ha dejado más exhausto? (Atención: un valor inferior a 3 durante dos ciclos seguidos es una alarma de sobrecarga, conflicto o inicio de burnout).',
					'¿Qué parte de tu trabajo en estas dos semanas te ha parecido estimulante y cuál ha sido pura rutina monótona o burocracia? (Detectar saturación por incidencias menores, soporte o exceso de reuniones).'
				]
			},
			{
				title: 'Parte 2: Fricción de procesos, dependencias y deuda técnica (15 min)',
				durationMinutes: 15,
				description:
					'Hacer emerger los obstáculos sistémicos que frenan el ritmo y desgastan al equipo.',
				questions: [
					'¿Dónde está el mayor cuello de botella en los flujos del equipo o dependencias de otras áreas? ¿Quién o qué te está frenando más? (Atención a demoras en reviews, integración continua inestable o especificaciones ambiguas).',
					'¿Hay alguna parte de nuestro código o arquitectura que el equipo tema tocar, y por qué? (Detectar deuda técnica crítica postergada por la presión de los plazos).',
					'¿Qué obstáculo concreto o distracción puedo retirar de tu camino esta semana para proteger tu concentración?'
				]
			},
			{
				title: 'Parte 3: Contexto de producto y alineación estratégica (10 min)',
				durationMinutes: 10,
				description:
					'Conectar las tareas del sprint con la visión global de la compañía y verificar claridad.',
				questions: [
					'¿Comprendes con total claridad por qué lo que estás construyendo en este sprint es valioso para los usuarios y la empresa? ¿Sientes que tu trabajo tiene impacto real? (Detectar desconexión con el producto).',
					'¿Hubo decisiones recientes del equipo o la dirección cuya lógica no te cuadró o con las que discrepabas internamente? (Identificar dudas que puedan transformarse en cinismo).'
				]
			},
			{
				title: 'Parte 4: Feedback bidireccional y compromisos mutuos (10 min)',
				durationMinutes: 10,
				description:
					'Cerrar el ciclo de compromisos previos y pedir una valoración honesta sobre su liderazgo.',
				questions: [
					'Repasemos nuestras notas: ¿cumplimos lo que acordamos hace dos semanas?',
					'¿Qué podría haber hecho mejor o de otra forma como tu líder en estas dos semanas para apoyarte con mayor eficacia?',
					'¿Qué 1 o 2 compromisos concretos asume cada uno antes de nuestro próximo encuentro?'
				]
			}
		],
		antiPatterns: [
			{
				mistake: '«No tengo nada, tú tampoco, ¡ganemos tiempo!»',
				whyBad:
					'Envía el mensaje de que el contacto regular con los responsables es prescindible. El malestar no se disuelve: madura en silencio hasta desembocar en dimisiones repentinas.',
				betterAlternative:
					'No cancele a la ligera. Si hay pocos temas operativos, aproveche el espacio para debatir arquitectura, visión técnica a largo plazo, crecimiento profesional o cultura de equipo.'
			},
			{
				mistake: 'Lectura en voz alta del tablero de Jira',
				whyBad:
					'Desperdicia un tiempo síncrono valioso leyendo información que ya está escrita. El 1 a 1 degenera en fiscalización de tareas y ahoga las conversaciones estratégicas.',
				betterAlternative:
					'Reoriente con tacto: «El estado lo consulto en el ticket. Cuéntame mejor qué fue lo más complejo y qué cambios organizativos necesitamos para evitar tropezar en lo mismo».'
			},
			{
				mistake: 'El «cuaderno del agujero negro» (promesas olvidadas del mánager)',
				whyBad:
					'Si un responsable apunta una necesidad (reducir reuniones, conseguir herramientas, mediar con un área) y la olvida en la siguiente cita, el 1 a 1 pierde toda legitimidad.',
				betterAlternative:
					'Arrastre los compromisos pendientes de un acta a la siguiente hasta que se completen. Abra cada reunión rindiendo cuentas de sus propios compromisos como líder.'
			},
			{
				mistake: 'Sesión unidireccional de críticas sin pedir feedback ascendente',
				whyBad:
					'Convierte el espacio en un tribunal intimidatorio. El colaborador se pone a la defensiva, oculta equivocaciones y retira su confianza.',
				betterAlternative:
					'Pida siempre retroalimentación: «¿Qué debería empezar a hacer, dejar de hacer o mantener como tu mánager?». Agradezca las observaciones críticas con humildad.'
			}
		],
		followUpHtml:
			'<p><strong>1. La regla de los 5 minutos tras la reunión:</strong> No corra a la siguiente llamada sin cerrar conclusiones. Dedique cinco minutos exactos a anotar 2 o 3 aprendizajes clave y los compromisos de acción (Action Items) con sus responsables.</p><p><strong>2. Estado transparente de bloqueos en 48 horas:</strong> Si asumió una tarea para desatascar a su colaborador (tramitar un permiso, coordinar con RRHH, eximirlo de una reunión), aporte novedades en menos de 48 horas, aunque la gestión siga en curso. Esto demuestra palabra y seriedad.</p><p><strong>3. Continuidad ininterrumpida en notas cifradas:</strong> Guarde los registros en un entorno colaborativo cifrado de extremo a extremo. Estas notas deben ser su primera parada de preparación antes de la siguiente sesión quincenal.</p>',
		tips: [
			'Regularidad sobre duración: 30 minutos cada dos semanas aportan muchísimo más valor que un maratón improvisado de dos horas cada dos meses.',
			'Reprogramar, nunca cancelar en el vacío: en caso de emergencia, traslade la cita a otro día de la misma semana.',
			'Cumplir compromisos propios: la autoridad moral de un líder se mide por la velocidad con la que despeja los obstáculos de su equipo.',
			'Seguir las tendencias de energía: una bajada del nivel de energía en 2 o 3 reuniones consecutivas exige revisar la carga de trabajo de inmediato.'
		],
		keyTakeaway:
			'Un 1 a 1 periódico no es una auditoría de tareas cumplidas, sino el timón maestro de la confianza, la energía y la velocidad del equipo. La calidad de esta conversación quincenal determina si los ingenieros con talento deciden quedarse con usted durante años.'
	},
	{
		slug: 'career-growth',
		title: 'Desarrollo y carrera: La revisión trimestral',
		subtitle:
			'Una sesión estratégica de alto impacto para alinear aspiraciones personales, proyectos formativos y trayectoria técnica a largo plazo.',
		category: 'growth',
		readTime: '5 min de lectura',
		cadence: 'Trimestral (sesión estratégica independiente del ritmo de los sprints)',
		duration: '45–60 minutos',
		targetAudience: 'Mánager e ingeniero (desde Middle hasta Staff+)',
		summaryHtml:
			'El diálogo de carrera trimestral es una sesión estratégica dedicada, rigurosamente desligada de la operativa diaria de los sprints y de la negociación salarial. Su propósito es descubrir las verdaderas fuentes de energía profesional del colaborador, sincronizar sus ambiciones con la hoja de ruta de la compañía, acordar un proyecto de aprendizaje de alto impacto (stretch project) y tender un puente transparente entre el código diario y la evolución a largo plazo.',
		whyItMattersHtml:
			'<p><strong>La trampa de «El trabajo operativo devora el futuro»:</strong> Entre sprints continuos y plazos ajustados, es muy fácil pasar dos años cerrando tickets en Jira de manera ejemplar para luego darse cuenta de que el crecimiento profesional se ha estancado por completo. Según estudios de Gallup, la falta de perspectivas claras y de retos de desarrollo es la razón principal de renuncia entre los mejores perfiles técnicos (Senior, Lead, Staff). Si el mánager no invierte tiempo en el rumbo profesional del ingeniero, un reclutador externo lo hará de inmediato.</p><p><strong>Separación entre desarrollo y evaluación de desempeño (Performance Review):</strong> El error de gestión más grave es mezclar las conversaciones de carrera con evaluaciones formales o revisiones de sueldo. Cuando hay dinero o bonus en juego, el empleado adopta por instinto una postura defensiva: magnifica sus logros y oculta dudas o áreas de mejora. Un diálogo sincero sobre el desarrollo solo es viable cuando la evaluación y la compensación se gestionan en procesos independientes.</p><p><strong>El mito del escalafón único (IC frente a Management):</strong> Durante años imperó en la industria tecnológica la falsa premisa de que la única forma de ascender era pasar a la gestión de personas. Esto provocó que muchas empresas perdieran a ingenieros de sistemas brillantes para convertirlos en líderes frustrados y agotados. La cultura técnica moderna exige vías paralelas: la maestría técnica profunda y el liderazgo de arquitectura (Staff / Principal Engineer) deben recibir el mismo prestigio, influencia y retribución que la dirección de equipos.</p><p><strong>Patrocinio, no solo mentoría:</strong> El mentor aconseja <em>cómo</em> crecer; el patrocinador <em>abre puertas</em>. La mayor palanca de un líder no consiste en dar consejos teóricos, sino en recomendar activamente a su colaborador para iniciativas críticas de arquitectura, respaldar la defensa de sus RFCs ante los directivos y visibilizar su criterio técnico en toda la organización.</p>',
		preparationHtml:
			'<p><strong>1. Envía preguntas de reflexión con 5–7 días de antelación:</strong> No tomes al colaborador por sorpresa con preguntas genéricas como «¿dónde te ves en 3 años?». Ofrécele tiempo para reflexionar con un breve cuestionario previo:</p><div class="invite-box"><span class="invite-badge">Cuestionario previo al 1 a 1 de carrera:</span><p class="invite-text">«¡Hola! En nuestra reunión trimestral dejaremos a un lado los tickets y bugs del sprint para centrarnos en tu trayectoria profesional. Te invito a reflexionar sobre tres preguntas: 1) ¿Qué 2 o 3 proyectos de los últimos seis meses te han producido mayor orgullo y motivación? 2) ¿Qué tareas te parecieron una rutina tediosa o un callejón sin salida? 3) ¿Hacia dónde sientes mayor inclinación actualmente: profundizar en arquitectura y sistemas complejos (Individual Contributor), liderar personas y procesos de equipo (Lead/Management), o involucrarte en estrategia técnica y producto?»</p></div><p><strong>2. Trabajo previo del mánager (15–20 minutos):</strong></p><ul><li><strong>Cruzar ambiciones con la hoja de ruta técnica:</strong> Revisa los planes de producto e infraestructura para los próximos 6 meses. ¿Dónde se necesitarán refactorizaciones clave, adopción de nuevas tecnologías o mentoría a perfiles junior? Prepara asignaciones de aprendizaje de alto impacto (stretch assignments).</li><li><strong>Consultar la matriz de competencias:</strong> Forma una valoración objetiva sobre las áreas de crecimiento del ingeniero: ¿necesita mayor radio de influencia, más autonomía, liderazgo de partes interesadas o mayor rigor en diseño de sistemas?</li></ul>',
		agenda: [
			{
				title: 'Bloque 1: Retrospectiva de energía y orgullo profesional (12 min)',
				durationMinutes: 12,
				description:
					'Diagnosticar los verdaderos motores de motivación analizando la experiencia real de los últimos seis meses.',
				questions: [
					'Mirando los últimos seis meses, ¿qué desafío técnico, decisión de arquitectura o lanzamiento te hizo sentir un orgullo profesional más genuino? (Escucha activa: qué despierta su estado de flow: la elegancia algorítmica, la velocidad de entrega, la resiliencia del sistema o el impacto en los usuarios).',
					'¿Qué tipos de tareas drenaron sistemáticamente tu energía, te causaron frustración o te parecieron una pérdida de tiempo? (Escucha activa: rutina tóxica que conviene delegar, automatizar o replantear).',
					'¿En qué aspecto sientes que has logrado tu mayor salto cualitativo durante el último año y que tal vez no ha sido suficientemente reconocido?'
				]
			},
			{
				title: 'Bloque 2: Trayectoria y arquetipos de rol (18 min)',
				durationMinutes: 18,
				description:
					'Definir el rol objetivo a 1–2 años vista: alta especialización técnica (vía IC), gestión de personas o liderazgo técnico de producto.',
				questions: [
					'Si visualizas tu semana laboral ideal dentro de 18 a 24 meses: ¿qué problemas estás resolviendo, qué alcance lideras y con quién colaboras?',
					'¿Qué camino te atrae con más fuerza: profundizar en sistemas distribuidos, estabilidad y estándares arquitectónicos (Staff Engineer) o impulsar el talento, facilitar entregas y formar a otros (Engineering Management)? (Escucha atenta: asegúrate de que no elija la vía de gestión solo por temor a un "techo salarial" en el código).',
					'¿Qué competencia o experiencia crítica (gestión de la incertidumbre, defensa de RFCs ante liderazgo, mentoría entre equipos) sientes que te falta más para dar ese salto?'
				]
			},
			{
				title: 'Bloque 3: Proyectos de desarrollo (Stretch Projects) y patrocinio (15 min)',
				durationMinutes: 15,
				description:
					'Conectar las aspiraciones del colaborador con los retos estratégicos prioritarios de la empresa.',
				questions: [
					'Dentro de los próximos proyectos de la empresa, ¿en cuál podemos definir un reto de alta exigencia (stretch project) que te obligue a desarrollar estas nuevas habilidades?',
					'¿Qué respaldo específico necesitas de mi parte como líder: mentoría técnica, patrocinio activo (acceso a comités/directivos) o blindaje de tu calendario frente a urgencias operativas?',
					'¿Hay recursos externos (cursos, conferencias técnicas, bibliografía, contacto con ingenieros Staff de otras áreas) que impulsen tu ritmo de aprendizaje?'
				]
			},
			{
				title: 'Bloque 4: Plan de Desarrollo Individual (PDI) a 90 días (15 min)',
				durationMinutes: 15,
				description:
					'Convertir reflexiones estratégicas en 1 o 2 compromisos firmes para el próximo trimestre.',
				questions: [
					'¿Cuál será el objetivo principal de aprendizaje que fijaremos para los próximos 90 días, de modo que en la próxima revisión podamos decir sin duda «objetivo cumplido»?',
					'¿Cuáles son las primeras 1 o 2 acciones concretas que emprenderás en las próximas dos semanas para poner en marcha este plan?',
					'¿De qué forma y con qué frecuencia revisaremos el progreso hacia este objetivo en nuestros 1 a 1 quincenales?'
				]
			}
		],
		antiPatterns: [
			{
				mistake:
					'Mezclar el diálogo de desarrollo con la evaluación de desempeño o la revisión salarial',
				whyBad:
					'Cuando está en juego el sueldo o la puntuación anual, el profesional se pone a la defensiva. Oculta errores y exagera éxitos, haciendo imposible una conversación honesta sobre áreas de mejora.',
				betterAlternative:
					'Separa estos procesos al menos 3 o 4 semanas en el calendario. El diálogo de carrera es una mirada inspiradora hacia el futuro, no un inventario de fallos pasados.'
			},
			{
				mistake:
					'La «trampa del mánager»: forzar a excelentes desarrolladores hacia la gestión de personas',
				whyBad:
					'La organización pierde a un especialista técnico de primer nivel y gana a un líder insatisfecho y estresado. El resultado inevitable es frustración, agotamiento y renuncia.',
				betterAlternative:
					'Desarrolla y consolida una vía técnica paralela (Staff/Principal Engineer). La influencia arquitectónica y la retribución deben crecer sin obligar a asumir la carga de la gestión administrativa.'
			},
			{
				mistake: 'Consejos vagos en lugar de patrocinio activo',
				whyBad:
					'Frases como «debes ganar visibilidad» o «mejora tus habilidades interpersonales» no aportan ninguna guía accionable y generan cinismo en el equipo.',
				betterAlternative:
					'Actúa como patrocinador: confíale la autoría de un RFC de gran calado, respalda su participación en comités de arquitectura o preséntale a los líderes técnicos del negocio.'
			},
			{
				mistake: '«Conversación archivada y olvidada» hasta el próximo año',
				whyBad:
					'Si los objetivos trimestrales no se integran en el día a día, se olvidan en dos semanas, transmitiendo el mensaje de que a la empresa realmente no le importa.',
				betterAlternative:
					'Integra los hitos de desarrollo en tus reuniones 1 a 1 quincenales. Dedica 5 minutos una vez al mes a revisar los avances del plan a 90 días.'
			}
		],
		followUpHtml:
			'<p><strong>1. Formalizar el Plan de Desarrollo Individual (PDI) en 48 horas:</strong> Registra en notas privadas y cifradas una estructura precisa: 1 objetivo central para 90 días, criterios de éxito, proyecto de aprendizaje asignado y compromisos de ambas partes.</p><p><strong>2. Acción de patrocinio del mánager en 7 días:</strong> Cumple tu primer compromiso de inmediato: valida la participación en el proyecto formativo, tramita el acceso a la formación o programa la reunión con un mentor Staff. La rapidez de respuesta demuestra tu compromiso real.</p><p><strong>3. Fijar la cita del próximo trimestre en el calendario:</strong> Agenda la siguiente sesión estratégica a 90 días vista para medir resultados y definir la siguiente etapa de crecimiento.</p>',
		tips: [
			'Crecer va más allá de un cambio de título: significa mayor autonomía, mayor complejidad técnica y un radio de influencia más amplio.',
			'Nunca prometas ascensos como un fin en sí mismos: céntrate en el desarrollo de capacidades e impacto; la promoción llegará de forma natural.',
			'Patrocina oportunidades: la mejor ayuda de un líder es asignar proyectos ambiciosos y brindar respaldo ante los primeros tropiezos.',
			'Cuida el equilibrio: los proyectos de aprendizaje (stretch goals) no deben consumir más del 15–20% de la dedicación laboral para evitar sobrecargas.'
		],
		keyTakeaway:
			'Un diálogo de carrera convierte el trabajo diario de cerrar tickets en un recorrido profesional consciente y motivador. Si ayudas a tus ingenieros a crecer más rápido que el mercado, aportarán su mejor talento a tu equipo.'
	},
	{
		slug: 'burnout-detection',
		title: 'Sobrecarga y agotamiento: Recuperar el equilibrio',
		subtitle:
			'Un marco de intervención crítica para líderes técnicos: diagnóstico temprano del agotamiento, triaje radical de tareas y eliminación de la culpa.',
		category: 'difficult',
		readTime: '5 min de lectura',
		cadence:
			'Ante las primeras señales de estrés crónico, caída de energía en 2+ ciclos o tras incidentes graves',
		duration: '45 minutos',
		targetAudience: 'Mánager e ingeniero bajo sobrecarga/agotamiento',
		summaryHtml:
			'Una conversación sobre burnout no es un ejercicio de empatía superficial, sino una intervención técnica urgente para evitar el colapso del sistema. Cuando una persona está agotada, las preguntas convencionales de seguimiento y los discursos de ánimo solo provocan parálisis y culpa. El objetivo de este encuentro es validar el estado sin estigmas, podar de raíz el trabajo prescindible del backlog, blindar un perímetro de silencio digital y definir un protocolo de recuperación realista.',
		whyItMattersHtml:
			'<p><strong>Fallo del sistema, no debilidad personal:</strong> El agotamiento en el sector tecnológico casi nunca se debe a la desidia o a la falta de temple. Al contrario: estudios basados en el Maslach Burnout Inventory revelan que los perfiles más comprometidos, perfeccionistas y competentes (High Performers) son los primeros en quemarse. El origen radica en un desajuste estructural: enorme responsabilidad sin suficiente autonomía, continuos cambios de contexto, guardias on-call sin compensación y una cascada interminable de tareas pendientes.</p><p><strong>La trampa del «heroísmo silencioso»:</strong> Los ingenieros con talento están acostumbrados a salvar entregas críticas a expensas de su salud. Ocultan la fatiga hasta el límite, confundiendo el cansancio con incompetencia técnica. Cuando un perfil así confiesa «ya no puedo más», suele encontrarse en la fase 4 (terminal) del agotamiento, y dos semanas después presenta su dimisión. Un mánager eficaz debe detectar las alertas mucho antes de llegar a este punto crítico.</p><p><strong>La toxicidad de la falsa empatía («descansa este fin de semana»):</strong> Recomendar a un profesional agotado que se relaje mientras le siguen esperando 15 tickets urgentes en Jira es una negligencia de gestión. Durante el fin de semana la persona no descansará, sino que sufrirá insomnio y angustia sabiendo que el lunes la sepultará una montaña de trabajo acumulado. El cuidado real no se demuestra con palabras de consuelo, sino <em>eliminando tareas y aplazando fechas límite con tus propias manos</em>.</p><p><strong>Seguridad psicológica y desestigmatización:</strong> El mayor temor de una persona exhausta es que admitir su fatiga perjudique su reputación, congele su progresión salarial o sobrecargue a sus compañeros. El deber del líder es disipar ese miedo desde el primer instante, demostrando que la empresa prioriza la salud mental a largo plazo en lugar de exprimir a sus profesionales en sprints insostenibles.</p>',
		preparationHtml:
			'<p><strong>1. Diagnóstico de telemetría objetiva antes de la reunión:</strong> No te fíes de meras conjeturas. Revisa el patrón de actividad de las últimas 4–6 semanas:</p><ul><li><strong>Código y repositorios:</strong> Subidas nocturnas (después de las 22:00), commits en fin de semana, pull requests atascadas más de 5 días en revisión, fallos atípicos en código base o caída drástica del volumen de entrega.</li><li><strong>Señales de comunicación:</strong> Sarcasmo o aspereza en debates técnicos, cámara apagada y silencio en las daily meetings, irritabilidad en el gestor de tareas o demoras de más de 24 horas en responder a mensajes sencillos.</li><li><strong>Carga operativa:</strong> Guardias on-call sucesivas, gestión repetida de incidentes críticos o liderazgo simultáneo de tres o más proyectos independientes.</li></ul><p><strong>2. Trabajo previo del mánager (preparar el colchón de descarga):</strong> Acude a la cita con una <em>lista cerrada de iniciativas que estés dispuesto a cancelar, pausar o asumir personalmente en el acto</em>. Un cerebro exhausto padece fatiga por toma de decisiones: no obligues al ingeniero a justificar cada tarea ni a suplicar un respiro.</p><div class="invite-box"><span class="invite-badge">Invitación con mínima carga mental:</span><p class="invite-text">«¡Hola! He visto que las últimas semanas han sido durísimas y la carga ha estado por las nubes. Me gustaría tener un 1 a 1 contigo: nada de métricas de sprint ni revisión de tickets, solo quiero ayudarte a tomar aire, aligerar peso innecesario y cuidar tus fuerzas. Cero preparación: ven simplemente con un café o té».</p></div>',
		agenda: [
			{
				title: 'Bloque 1: Validación y seguridad psicológica (10 min)',
				durationMinutes: 10,
				description:
					'Rebajar la tensión, reconocer la dificultad mediante hechos contrastados y ofrecer respaldo incondicional.',
				questions: [
					'He visto el ritmo tan desgastante de estas semanas: despliegues intempestivos, resolución constante de incidentes y tensión en los tickets. Hablando con total franqueza: ¿cómo te encuentras física y anímicamente?',
					'Si tuvieras que calificar tu batería interna del 1 al 10 (donde 1 es dificultad para levantarte de la cama y 10 es energía al máximo), ¿qué número refleja tu estado actual?',
					'Quiero dejártelo muy claro: tu salud y equilibrio son mi prioridad absoluta. Ninguna entrega ni fecha límite vale un agotamiento crónico, y hoy mismo vamos a reajustar los procesos.'
				]
			},
			{
				title: 'Bloque 2: Triaje radical y eliminación de lastre (15 min)',
				durationMinutes: 15,
				description:
					'Reorganización decidida del backlog: separar lo imprescindible, lo delegable y lo que debe suprimirse de inmediato.',
				questions: [
					'Abramos juntos tu lista de tareas. Si elimináramos tres tickets ahora mismo sin explicaciones, ¿con cuáles notarías un alivio inmediato para respirar?',
					'¿Qué dinámicas o tareas te generan mayor desgaste mental (fricción con algún interlocutor, reuniones estériles, requisitos vagos, código heredado sin tests)?',
					'De lo que queda, ¿qué podemos posponer al próximo trimestre y qué puedo asumir yo personalmente o repartir en el equipo hoy mismo?'
				]
			},
			{
				title: 'Bloque 3: Blindaje de límites y protocolo de desconexión (10 min)',
				durationMinutes: 10,
				description:
					'Fijar barreras físicas y digitales infranqueables para frenar la pérdida de energía.',
				questions: [
					'¿Acordamos una norma estricta de cierre de portátil: a partir de las 19:00 y durante todo el fin de semana cero alertas de Slack, nada de revisar PRs y buzón de correo cerrado?',
					'¿Te vendría bien que te desmarque de todas las reuniones generales de seguimiento durante las próximas dos semanas y te reserve 2–3 días completos de trabajo focalizado (Focus Days)?',
					'¿Conviene retirarte temporalmente de la rotación on-call y asumir yo o tus compañeros sénior tus guardias de incidencias?'
				]
			},
			{
				title: 'Bloque 4: Plan de recuperación y seguimiento ligero (10 min)',
				durationMinutes: 10,
				description:
					'Pactar medidas concretas de descanso y un canal de comunicación de mínimo esfuerzo.',
				questions: [
					'¿Qué te resultaría más útil ahora: 3 o 4 días de desconexión total a partir de este viernes o pasar a un sprint al 50% de capacidad dedicado solo a mantenimiento sin plazos urgentes?',
					'¿Cómo puedo ejercer mejor de cortafuegos ante otras áreas y la dirección mientras recuperas tu ritmo de trabajo?',
					'Pactemos un semáforo asíncrono: cada dos días me mandas un simple emoji en Slack (verde / amarillo / rojo), sin necesidad de redactar explicaciones. ¿Te parece bien?'
				]
			}
		],
		antiPatterns: [
			{
				mistake: 'Decir «descansa este fin de semana» sin reducir la carga de trabajo real',
				whyBad:
					'Si el volumen de trabajo sigue intacto, el empleado pasa el fin de semana angustiado y con culpa. El lunes su ansiedad se multiplica por dos.',
				betterAlternative:
					'Elimina o reasigna tú mismo los tickets en el gestor de proyectos. El descanso real solo es posible si no hay una cuenta atrás de plazos esperando el lunes.'
			},
			{
				mistake: 'Traspasar la responsabilidad de la descarga al propio empleado exhausto',
				whyBad:
					'Preguntar «¿qué quieres dejar de hacer?» bloquea un cerebro saturado. Por vergüenza ante sus compañeros, el profesional se niega a delegar.',
				betterAlternative:
					'Ofrece decisiones ya tomadas: «Me quedo con el Proyecto A y congelo el Hito B. ¿Alguna objeción? Perfecto, lo registro ahora mismo».'
			},
			{
				mistake: 'Protección encubierta y marginación profesional',
				whyBad:
					'Retirar a alguien de proyectos estratégicos sin transparencia despierta el pánico: «Creen que no sirvo y me están preparando el despido».',
				betterAlternative:
					'Comunícate con claridad: ratifica la valía del colaborador, aclara el carácter transitorio de las medidas y acuerda cada cambio conjuntamente.'
			},
			{
				mistake: 'Volver a la presión máxima en cuanto muestra una leve mejoría',
				whyBad:
					'En cuanto la persona parece recuperada, el mánager vuelve a cargarla de urgencias. La recaída suele ser fulminante y mucho más severa.',
				betterAlternative:
					'El sistema nervioso necesita semanas o meses para sanar. Aumenta la exigencia de forma muy gradual y mantén los filtros protectores al menos 6–8 semanas.'
			}
		],
		followUpHtml:
			'<p><strong>1. Cobertura directiva inmediata en 2 horas:</strong> Asume tú la presión. Actualiza los estados en Jira, avisa a product managers y partes interesadas sobre la reprogramación de fechas y libera al ingeniero de cualquier exigencia de comunicación.</p><p><strong>2. Configuración técnica del entorno de calma en 24 horas:</strong> Da de baja al colaborador en las alertas on-call, declina reuniones superfluas en su calendario y reasigna los flujos de revisión de código.</p><p><strong>3. Chequeo asíncrono empático a las 72 horas:</strong> Envía un mensaje breve sin peticiones de trabajo: <em>«¡Hola! Solo quería saber cómo te sientes hoy. Recuerda: nada de código ni de chats hasta nuestro próximo punto acordado»</em>.</p>',
		tips: [
			'El agotamiento se combate suprimiendo la impotencia y la sobrecarga crónica, no con regalos de bienestar superficial.',
			'Sé el pararrayos: el principal cometido de un líder en crisis es absorber la presión del negocio para ofrecer un puerto seguro a su gente.',
			'Frena el perfeccionismo: ayuda a los ingenieros brillantes a bajar el listón de «arquitectura perfecta» a «suficiente para este ciclo».',
			'No esperes a que pidan auxilio: para cuando un empleado agotado se atreve a pedir ayuda, suele estar ya al borde de la dimisión.'
		],
		keyTakeaway:
			'El burnout es una avería del sistema de trabajo, no un fallo personal del empleado. Proteger a tus ingenieros clave del agotamiento crónico es la prueba definitiva de madurez en el liderazgo.'
	},
	{
		slug: 'skip-level',
		title: '1 a 1 Skip-Level: Diagnóstico de salud organizacional sin filtros',
		subtitle:
			'Un diálogo estratégico de alto impacto entre la alta dirección técnica (VP/CTO/Director) y los ingenieros de primera línea: validar la señal estratégica, erradicar la fricción sistémica y calibrar la cultura.',
		category: 'leadership',
		readTime: '5 min de lectura',
		cadence: 'Trimestral o semestral con ingenieros y equipos clave',
		duration: '30–45 minutos',
		targetAudience:
			'VP of Engineering / CTO / Director y desarrollador individual (Senior / Staff / Lead)',
		summaryHtml:
			'Una reunión skip-level es una de las herramientas de gestión de mayor apalancamiento a disposición de los líderes ejecutivos de ingeniería. Su propósito es atravesar el filtro de distorsión corporativo de las capas intermedias, escuchar la verdad sin filtros sobre el código base y los procesos, comprobar si la visión estratégica permea realmente en la ejecución diaria de los sprints y derribar obstáculos sistémicos que exceden las facultades de los líderes de equipo directos.',
		whyItMattersHtml:
			'<p><strong>El problema de la "degradación de la señal entre intermediarios":</strong> En organizaciones de ingeniería en crecimiento, las malas noticias se suavizan inevitablemente en su camino hacia la cima. Los mandos intermedios liman asperezas de forma inconsciente para proyectar que "todo está bajo control". Como resultado, la dirección solo descubre callejones sin salida arquitectónicos, fuga de talento senior o degradación de pruebas CI cuando un lanzamiento crítico se retrasa o los incidentes en producción se disparan. El skip-level brinda un diagnóstico directo y sin censura.</p><p><strong>Empoderar, no desautorizar, a los líderes de equipo:</strong> El error más destructivo de un skip-level es degradarse en una investigación encubierta sobre el mánager directo. Si el desarrollador sospecha que la dirección está "buscando trapos sucios de su líder", la seguridad psicológica se esfuma al instante. Los ejecutivos perspicaces orientan la sesión como una auditoría del <em>sistema, las herramientas y los límites organizacionales</em>, jamás de personas: "Mi trabajo es eliminar las barreras institucionales que tu mánager no puede resolver en solitario".</p><p><strong>Silos interdepartamentales y fricción:</strong> Los ingenieros en primera línea son los primeros en experimentar las fricciones entre áreas: aprobaciones de días por parte del equipo de plataforma, especificaciones contradictorias de producto o trabas burocráticas de seguridad. En el sprint de un equipo parecen roces menores; a escala de toda la empresa, consumen millones en velocidad de desarrollo.</p><p><strong>Coherencia estratégica y retención de talento:</strong> Para un ingeniero, un skip-level es una oportunidad única para formular preguntas directas a los autores de la estrategia y entender cómo sus pull requests inciden en la viabilidad económica de la empresa. Es una palanca clave de retención para perfiles Senior y Staff.</p>',
		preparationHtml:
			'<p><strong>1. Alineación previa con el mánager directo (Team Lead):</strong> Jamás programes un skip-level a espaldas del líder. Habla con él con anticipación para disipar celos o inseguridades territoriales: <em>"Voy a realizar reuniones skip-level periódicas con los desarrolladores de tu equipo este trimestre. El objetivo es evaluar la claridad estratégica y la infraestructura técnica, no juzgar tu gestión. Hazme saber si hay temas sistémicos específicos que valga la pena explorar."</em></p><p><strong>2. Envía una invitación que elimine el estigma con 5 días de antelación:</strong> Un ingeniero suele sentir alarma al recibir una invitación en el calendario de un CTO o VP ("¿Me van a despedir?" o "¿Cometí un grave error en producción?"). Disipa esta ansiedad desde el primer instante:</p><div class="invite-box"><span class="invite-badge">Plantilla de invitación para Skip-Level:</span><p class="invite-text">"¡Hola! Esta es nuestra reunión skip-level trimestral habitual. Quiero dejarlo claro desde el inicio: no se trata de una evaluación de desempeño ni de una auditoría de tus tickets. Me interesa conocer tu perspectiva honesta: qué cosas funcionan de maravilla, dónde se atascan nuestros procesos o herramientas, si la dirección estratégica se comprende en el día a día y cómo podemos ayudarte desde la dirección para que el equipo trabaje con mayor agilidad y tranquilidad. No necesitas preparar nada previo: tomemos un café virtual y charlemos abiertamente."</p></div><p><strong>3. Revisa el contexto operativo objetivo (5 minutos antes):</strong> Consulta los servicios principales de los que es responsable el ingeniero, incidentes recientes o debates arquitectónicos en los que participó y su antigüedad en la organización.</p>',
		agenda: [
			{
				title: 'Bloque 1: Desescalada psicológica y encuadre del contexto (5–7 min)',
				durationMinutes: 7,
				description:
					'Establecer un entorno de máxima seguridad psicológica y delimitar el propósito.',
				questions: [
					'¡Muchas gracias por hacerte un hueco! Como recordatorio: mi rol hoy es escuchar el 80% del tiempo. No venimos a auditar tickets ni a buscar culpables. ¿Cómo te encuentras a nivel personal y qué tal ha ido tu semana?',
					'¿Qué parte de tu trabajo diario de ingeniería te genera actualmente mayor satisfacción y fluidez, y qué te causa mayor frustración?',
					'¿Sientes que cuentas con las herramientas, autonomía y entorno adecuados para realizar el mejor trabajo técnico de tu carrera aquí?'
				]
			},
			{
				title: 'Bloque 2: Coherencia estratégica y realidad del producto (12 min)',
				durationMinutes: 12,
				description:
					'Comprobar si la dirección estratégica general se traduce en decisiones sensatas en el terreno.',
				questions: [
					'¿Qué tan clara y convincente te resulta nuestra hoja de ruta técnica y comercial para este año? Si alguien nuevo en el equipo te preguntara, ¿cómo resumirías nuestra prioridad número uno?',
					'¿Qué mensaje o iniciativa que la dirección repite con frecuencia en los All-Hands te parece desconectado de la realidad cotidiana de desarrollo?',
					'¿Tienes plena visibilidad de cómo las decisiones arquitectónicas en tus servicios impactan directamente en la experiencia de los clientes y el valor del negocio?'
				]
			},
			{
				title:
					'Bloque 3: Cuellos de botella sistémicos, herramientas y fricción entre equipos (15 min)',
				durationMinutes: 15,
				description:
					'Descubrir impedimentos institucionales profundos que requieren intervención de la dirección ejecutiva.',
				questions: [
					'¿Qué elemento de nuestra infraestructura técnica (tiempos de CI/CD, pruebas intermitentes inestables, entornos de staging, deuda técnica acumulada) drena más energía y tiempo a tu equipo?',
					'¿Cómo experimentas la colaboración con equipos dependientes (Plataforma, Seguridad, Datos, Infraestructura)? ¿Dónde chocas con muros o colas de espera de varios días?',
					'Si asumieras mi puesto como CTO durante una semana con autoridad total, ¿qué norma organizacional o restricción arquitectónica eliminarías de inmediato?'
				]
			},
			{
				title: 'Bloque 4: Síntesis y compromisos de la dirección (8 min)',
				durationMinutes: 8,
				description:
					'Sintetizar hallazgos, reafirmar la confidencialidad y acordar compromisos de acción claros.',
				questions: [
					'De todo lo que hemos abordado hoy, ¿cuál es el obstáculo de nivel organizacional más prioritario que frena el avance de tu equipo?',
					'¿Hay algún tema crítico del que no te haya preguntado hoy y que la dirección ejecutiva deba conocer sin falta?',
					'De acuerdo: asumiré personalmente la gestión de este bloqueo en las herramientas y te compartiré una actualización concreta en el plazo de una semana.'
				]
			}
		],
		antiPatterns: [
			{
				mistake:
					'Degenerar en un interrogatorio encubierto sobre el mánager directo ("¿Cómo te trata tu líder?")',
				whyBad:
					'Pone al ingeniero en una encrucijada destructiva de deslealtad o lo fuerza al silencio defensivo. Siembra paranoia política y desconfianza en toda la estructura.',
				betterAlternative:
					'Mantén el foco exclusivamente en sistemas, arquitectura y flujos de trabajo interequipos. Si el colaborador plantea quejas sobre su responsable, canalízalo constructivamente: "¿Has podido conversar sobre esto con total franqueza en vuestros 1 a 1?"'
			},
			{
				mistake: 'Asumir compromisos operativos "por encima de la cabeza" del mánager de equipo',
				whyBad:
					'Revocar decisiones de hoja de ruta o reasignar tareas durante un skip-level destruye la autoridad del líder directo y desata el caos organizativo.',
				betterAlternative:
					'Nunca tomes decisiones operativas directas al margen del mánager. Anota la inquietud y trátala con él por separado: "Tu ingeniero planteó un problema sistémico con la plataforma; analicemos juntos cómo solucionarlo".'
			},
			{
				mistake:
					'El "agujero negro del feedback": recopilar críticas contundentes y no tomar ninguna acción visible',
				whyBad:
					'Cuando los desarrolladores exponen con valentía fallas organizativas graves (como entornos rotos de CI) y nada cambia al siguiente trimestre, concluyen que a la dirección no le importa y dejan de comunicar problemas.',
				betterAlternative:
					'Selecciona solo 1 o 2 temas sistémicos prioritarios, pero muestra avances medibles. Incluso explicar "lo analizamos y no podemos financiar esta refactorización este trimestre por el motivo X" genera credibilidad y respeto.'
			},
			{
				mistake:
					'Recurrir a los skip-levels únicamente como medida de emergencia durante las crisis',
				whyBad:
					'Si un ejecutivo solo solicita una reunión cuando un proyecto arde o la rotación de personal se dispara, el encuentro se percibe como una auditoría punitiva e intimidante.',
				betterAlternative:
					'Establece los skip-levels como una rutina higiénica, predecible y periódica en tiempos de estabilidad operativa.'
			}
		],
		followUpHtml:
			'<p><strong>1. Detección de patrones en 24 horas:</strong> Documenta las notas en un registro ejecutivo privado. Cruza los puntos con otros skip-levels: si tres desarrolladores de distintos equipos señalan el mismo cuello de botella (por ejemplo, esperar 6 días por una revisión de Seguridad), has identificado un fallo institucional.</p><p><strong>2. Alineación con los líderes directos en 48 horas:</strong> Debate los aprendizajes sistémicos con el mánager del equipo sin divulgar citas directas ni colocarlo en el banquillo: <em>"Vemos una necesidad clara en el equipo de acelerar los despliegues de CI/CD. Evaluemos cómo el equipo de plataforma puede daros soporte."</em></p><p><strong>3. Cerrar el ciclo con el ingeniero en 7 días (Closing the Loop):</strong> Envía un mensaje personal breve informando del estado: <em>"¡Hola! Retomando nuestra charla sobre la lentitud de los entornos de staging: hemos asignado a dos ingenieros de infraestructura para rediseñar los runners. ¡Muchas gracias por tu franqueza!"</em></p>',
		tips: [
			'Escucha el 80% del tiempo y habla el 20%: tu misión ejecutiva en un skip-level es absorber la realidad del terreno, no dar conferencias magistrales sobre la visión.',
			'Busca patrones, no quejas aisladas: un comentario puntual puede ser una preferencia individual; tres observaciones coincidentes constituyen un diagnóstico sistémico.',
			'Agradece las verdades incómodas: cuando un desarrollador cuestione supuestos de la dirección, dale las gracias de corazón; eso modela una cultura técnica transparente.',
			'Nunca prometas lo imposible: sé transparente sobre las prioridades y sacrificios del negocio cuando una solicitud no pueda abordarse de inmediato.'
		],
		keyTakeaway:
			'Las reuniones skip-level no existen para fiscalizar a los mánagers, sino para aportar claridad estratégica y eliminar la fricción organizacional. Una cultura técnica sólida florece cuando la dirección escucha de primera mano a los ingenieros que construyen el futuro con sus propias manos.'
	},
	{
		slug: 'manager-playbook',
		title: 'El Playbook del Manager: Liderando 1 a 1 de Alto Impacto',
		subtitle:
			'Cambio de mentalidad, lista de preparación de 15 minutos, escucha activa, modelo de feedback SBI y patrocinio genuino.',
		category: 'leadership',
		readTime: '8 min de lectura',
		cadence: 'Rutina quincenal (hábito recurrente de preparación y reunión)',
		duration: '30–45 minutos',
		targetAudience: 'Nuevos Team Leads, Engineering Managers y Directores',
		summaryHtml:
			'La guía definitiva para líderes de equipos técnicos. Pasa de ser un policía de estados a un multiplicador de impacto dominando la escucha activa, el análisis de contexto previo, el feedback constructivo SBI y victorias rápidas en 24 horas.',
		whyItMattersHtml:
			'<p><strong>De policía de estados a multiplicador:</strong> Al asumir el rol de líder, la mayor tentación es usar los 1 a 1 para preguntar en qué trabaja cada persona. Resiste ese impulso con fuerza. Las tareas pertenecen a Jira o GitHub; el 1 a 1 se enfoca exclusivamente en energía, bloqueos sistémicos y rumbo.</p><p><strong>La fórmula de apalancamiento de Andy Grove:</strong> En <em>High Output Management</em>, Andy Grove demostró que 90 minutos de 1 a 1 reflexivo mejoran el rendimiento de un ingeniero durante 80 horas entre ciclos (>50x de retorno). Tu función no es vigilar, sino eliminar todo obstáculo que limite el potencial de tu equipo.</p><p><strong>La regla de escucha 80/20:</strong> Si el manager habla el 70 % del tiempo, es una clase, no una conversación. El colaborador debe hablar el 80 % del tiempo. Tus herramientas son preguntas abiertas, pausas conscientes y notas precisas.</p><p><strong>Continuidad y confianza:</strong> Las promesas hechas en una llamada y olvidadas el lunes generan cinismo. La credibilidad se construye cuando los acuerdos trascienden entre ciclos y los bloqueos se rastrean hasta cerrarse.</p>',
		preparationHtml:
			'<p><strong>Paso 1: Análisis de contexto (10–15 min antes):</strong> Observa las señales de las últimas dos semanas sin microgestión. ¿Una pull request estuvo 5 días esperando revisión? ¿Hubo commits después de las 22:00 o en fin de semana? ¿Hubo incidentes nocturnos exigentes? Usa los hechos para calibrar la empatía, no para acusar.</p><p><strong>Paso 2: Flujo en encrypted1on1:</strong><br>1. <em>Revisar gráficos de tendencia:</em> Abre la Anketa del par y evalúa la evolución de ánimo y carga laboral.<br>2. <em>Leer primero las respuestas del colaborador:</em> Revisa sus etiquetas de sentimientos, la sección «Qué es más difícil de lo que debería» y temas a tratar.<br>3. <em>Completar la sección del manager:</em> Brinda feedback objetivo, comparte contexto general, ofrece apoyo concreto de desbloqueo y destaca al menos un logro observado por ti.<br>4. <em>Publicar tu lado:</em> Ambas partes se vuelven visibles a la vez antes de iniciar la llamada.<br>5. <em>Notas privadas:</em> Utiliza la columna de notas privadas cifradas para ideas de coaching, contexto confidencial y aspectos salariales invisibles para terceros.</p>',
		agenda: [
			{
				title: 'Pilar 1: Pulso de energía y conexión humana (5–7 min)',
				durationMinutes: 7,
				description:
					'Evaluar el nivel de batería y la disposición emocional antes de temas laborales.',
				questions: [
					'En una escala del 1 al 5, ¿cuál fue tu nivel de energía en este sprint? ¿Qué te recargó y qué te agotó?',
					'¿Qué tarea sentiste como avance real y cuál como pura fricción burocrática?'
				]
			},
			{
				title: 'Pilar 2: Bloqueos y fricción sistémica (15 min)',
				durationMinutes: 15,
				description: 'Identificar trabas que frenan la velocidad de entrega y la moral.',
				questions: [
					'Si tuvieras una varita mágica para eliminar una herramienta, proceso o reunión de esta semana, ¿cuál sería?',
					'¿En qué punto se atasca el trabajo entre nosotros y otros equipos?',
					'¿Hay alguna parte de nuestro código o infraestructura que el equipo tema tocar?'
				]
			},
			{
				title: 'Pilar 3: Claridad estratégica y contexto (10 min)',
				durationMinutes: 10,
				description: 'Conectar el desarrollo diario con el propósito general del producto.',
				questions: [
					'¿Tienes claro por qué este objetivo del sprint importa para la compañía, o sientes que avanzas a ciegas?',
					'¿Hubo decisiones recientes de la dirección que te hayan parecido confusas o difíciles de comprender?'
				]
			},
			{
				title: 'Pilar 4: Feedback constructivo SBI y compromisos (10 min)',
				durationMinutes: 10,
				description: 'Compartir observaciones concretas de conducta y pactar acciones mutuas.',
				questions: [
					'Bajo el modelo SBI (Situación–Conducta–Impacto): ¿qué comportamiento concreto debemos calibrar?',
					'¿Qué debería yo comenzar, dejar o seguir haciendo como tu líder para apoyarte mejor?',
					'¿Cuáles son los 1–2 compromisos que dejamos registrados en Conclusiones para el próximo ciclo?'
				]
			}
		],
		antiPatterns: [
			{
				mistake: '«Yo no tengo nada, tú no tienes nada: cancelemos»',
				whyBad:
					'Destruye el hábito de la seguridad psicológica. Los problemas crecen en silencio hasta que aparece una renuncia inesperada.',
				betterAlternative:
					'Si no hay temas urgentes, habla de desarrollo profesional, deuda técnica, clima del equipo o mentoría.'
			},
			{
				mistake: 'El líder fantasma (Promesas olvidadas)',
				whyBad:
					'El colaborador siente que las palabras del manager no valen nada y deja de plantear dificultades.',
				betterAlternative:
					'Registra los compromisos en Conclusiones. encrypted1on1 traslada automáticamente lo pendiente al próximo ciclo.'
			},
			{
				mistake: 'Grabar la videollamada del 1 a 1',
				whyBad:
					'Activa la autocensura de inmediato. Nadie comparte inquietudes reales con un indicador rojo de grabación.',
				betterAlternative:
					'Nunca grabes los 1 a 1. Confía plenamente en notas cifradas en tu navegador mediante encrypted1on1.'
			},
			{
				mistake: 'Prometer aumentos o ascensos sin respaldo',
				whyBad:
					'Prometer mejoras salariales antes de la aprobación de RRHH y presupuesto destruye tu credibilidad si son rechazadas.',
				betterAlternative:
					'Revisen juntos la matriz de competencias, identifiquen brechas con claridad y comprométete a defender su caso.'
			}
		],
		followUpHtml:
			'<p><strong>1. Registrar 1–3 Conclusiones:</strong> Anota acciones mutuas en la sección Conclusiones. Son tareas tácticas de un solo ciclo con responsable asignado.</p><p><strong>2. Actualizar Objetivos:</strong> Agrega un punto de control con estado (En curso, En riesgo, Bloqueado) a las metas de mediano plazo.</p><p><strong>3. Entregar una victoria rápida en 24 horas:</strong> Elige un bloqueo mencionado por el colaborador (una licencia, un acceso, liberarlo de una reunión inútil) y resuélvelo en 24 horas. Genera confianza instantánea.</p><p><strong>4. Archivar ciclo:</strong> Haz clic en Archivar para crear la siguiente Anketa trasladando automáticamente temas pendientes y objetivos activos.</p>',
		tips: [
			'Regla de la pausa de 5 a 7 segundos: al terminar de hablar el colaborador, espera en silencio antes de responder; las verdades complejas surgen en la pausa.',
			'Regla 80/20: el colaborador habla el 80 % del tiempo; el manager escucha y formula preguntas clarificadoras el 20 %.',
			'Aporta una solución visible dentro de las 24 horas posteriores para validar la utilidad real del 1 a 1.',
			'Formula el feedback difícil según el modelo SBI (Situación, Conducta, Impacto) en lugar de juicios de personalidad.'
		],
		keyTakeaway:
			'Tu resultado como líder es el resultado de tu equipo. Tu función no es controlar el trabajo, sino despejar el camino para que alcancen su mayor nivel.'
	},
	{
		slug: 'employee-playbook',
		title: 'El Playbook del Colaborador: Dueño de tu 1 a 1',
		subtitle:
			'Cómo ingenieros, diseñadores y miembros del equipo pueden vencer la ansiedad, dirigir la agenda e impulsar su carrera.',
		category: 'foundations',
		readTime: '7 min de lectura',
		cadence: 'Registro asíncrono continuo + sincronización quincenal',
		duration: '30–45 minutos',
		targetAudience: 'Ingenieros de Software, Diseñadores y Colaboradores',
		summaryHtml:
			'La reunión 1 a 1 te pertenece a ti, no a tu responsable. Descubre cómo convertir tus sincronizaciones habituales en la palanca más potente para tu carrera y bienestar: registro continuo de logros, planteamiento constructivo de problemas, conversaciones salariales naturales y recepción de feedback.',
		whyItMattersHtml:
			'<p><strong>Esta reunión te pertenece:</strong> Tu responsable dispone de planificaciones de sprint, standups y revisiones de diseño para tratar los entregables de la empresa. Este espacio de 30–45 minutos es el único del calendario pensado exclusivamente para tus necesidades, retos y trayectoria.</p><p><strong>Lo que un 1 a 1 NO es:</strong> No es un examen de rendimiento encubierto, no es un reporte de tickets de Jira y no es una trampa. Reconocer que una tarea es difícil o que estás saturado es muestra de madurez profesional, no de incapacidad.</p><p><strong>Lo que un 1 a 1 SÍ es:</strong> Es tu motor de desbloqueo personal, el timón de tu crecimiento y tu válvula de escape frente al desgaste crónico.</p><p><strong>El coste del silencio:</strong> Los managers no leen la mente. Si trabajas jornadas de 12 horas para compensar problemas de CI o requerimientos imprecisos, pensarán que todo marcha bien y asignarán más carga. Hablar a tiempo protege tu salud y rendimiento.</p>',
		preparationHtml:
			'<p><strong>Paso 1: Registro continuo entre reuniones:</strong> No intentes recordar dos semanas de trabajo 5 minutos antes de la llamada. Aprovecha encrypted1on1 a lo largo del sprint:<br>• <em>Crecimiento:</em> ¿Descubriste un truco útil de debugging o leíste un buen RFC? Pulsa «Añadir entrada».<br>• <em>Logros:</em> ¿Publicaste una función compleja, solucionaste un fallo difícil o ayudaste a un compañero? Anótalo al instante.<br>• <em>A tratar:</em> Apunta dudas y temas según surjan durante la semana.</p><p><strong>Paso 2: Puesta a punto en 5 minutos (24 horas antes):</strong><br>1. Selecciona tu estado de ánimo y marca etiquetas de sentimientos (ansiedad, sobrecarga, motivación, calma).<br>2. Evalúa tu carga de trabajo (Excesiva, Adecuada, Escasa).<br>3. Completa «Qué es más difícil de lo que debería» (Fricción): menciona builds lentas, permisos demorados o dependencias bloqueadas.<br>4. Pulsa «Publicar» para que tu líder pueda preparar soluciones.<br>5. Usa notas privadas para apuntes personales invisibles para tu manager y administradores.</p>',
		agenda: [
			{
				title: 'Pilar 1: Nivel de batería y realidad de la carga (5 min)',
				durationMinutes: 5,
				description: 'Transmitir tu capacidad actual, nivel de estrés y estado de ánimo.',
				questions: [
					'Mi carga de trabajo se siente actualmente pesada / sostenible / ligera: así afecta el ritmo a mis horas de concentración.',
					'Marqué estas etiquetas de sentimientos en la encuesta: este es el contexto de fondo.'
				]
			},
			{
				title: 'Pilar 2: Fricción y desbloqueo: Problema + Impacto + Propuesta (15 min)',
				durationMinutes: 15,
				description: 'Exponer obstáculos de forma constructiva con el método de tres pasos.',
				questions: [
					'Problema: Nuestro entorno de pruebas se cayó 3 veces este sprint durante las pruebas de release.',
					'Impacto: Retrasó la validación de QA y generó tensión en todo el equipo de frontend.',
					'Propuesta: ¿Podemos asignar 2 días el próximo sprint a automatizar los despliegues de staging? Necesito tu apoyo para priorizarlo con Producto.'
				]
			},
			{
				title: 'Pilar 3: Rumbo profesional y escala de competencias (15 min)',
				durationMinutes: 15,
				description: 'Tratar progreso, habilidades y expectativas de nivel con total naturalidad.',
				questions: [
					'Quiero entender la brecha entre mis entregas actuales y lo que se espera de un perfil Senior: ¿revisamos juntos la matriz?',
					'Mi objetivo de este año es involucrarme más en arquitectura técnica: ¿qué iniciativa próxima sería un buen reto para mí?',
					'¿Qué aspecto técnico o de comunicación consideras que debería pulir prioritariamente?'
				]
			},
			{
				title: 'Pilar 4: Acuerdos compartidos (10 min)',
				durationMinutes: 10,
				description: 'Fijar pasos concretos tanto para ti como para tu manager.',
				questions: [
					'¿Podemos registrar estas 2 acciones específicas en Conclusiones?',
					'Acción del líder: Hablar con el equipo de infraestructura sobre capacidad de runners de CI.',
					'Mi acción: Redactar la propuesta de RFC para el pool de conexiones de base de datos antes del viernes.'
				]
			}
		],
		antiPatterns: [
			{
				mistake: 'El mártir silencioso (Sufrir callado)',
				whyBad:
					'Callar el exceso de trabajo desemboca en fatiga crónica, errores y dimisión sin permitir que tu líder ayude.',
				betterAlternative:
					'Comunica claramente: «Mi carga actual no es viable. Decidamos qué podemos posponer, delegar o cancelar».'
			},
			{
				mistake: 'Completar la encuesta 5 minutos antes',
				whyBad:
					'Apresurarse convierte la reunión en un simple repaso superficial sin soluciones reales.',
				betterAlternative:
					'Anota logros y fricciones de forma progresiva a lo largo del sprint en encrypted1on1.'
			},
			{
				mistake: 'Quejas genéricas sin impacto ni propuesta',
				whyBad:
					'Decir «todo es un caos» sin detalles concretos impide que el manager pueda defender al equipo.',
				betterAlternative:
					'Aplica Problema + Impacto + Propuesta: expón el hecho, demuestra el coste para el equipo y plantea una solución.'
			},
			{
				mistake: 'Exigencias salariales imprevistas',
				whyBad:
					'Exigir un aumento inmediato del 20 % coloca al manager a la defensiva y rara vez prospera.',
				betterAlternative:
					'Apóyate en la matriz de competencias, metas conseguidas y los periodos acordados de revisión.'
			}
		],
		followUpHtml:
			'<p><strong>1. Marcar compromisos a lo largo del sprint:</strong> Ve completando tus tareas en la Anketa abierta. Tú gestionas tus puntos y tu manager los suyos.</p><p><strong>2. Descargar el reporte de periodo para evaluaciones:</strong> Cuando llegue la evaluación semestral o anual, accede a <strong>Informe</strong> en encrypted1on1. Descifra el registro verificado de logros, aprendizajes y objetivos de los últimos 6 meses en un documento Markdown listo para usar. Nunca más tendrás que reconstruir tu trabajo de memoria.</p>',
		tips: [
			'Usa siempre la fórmula Problema + Impacto + Propuesta al señalar dificultades en procesos o herramientas.',
			'Protocolo para recibir feedback: respira, escucha para comprender, agradece y pide colaboración en los pasos siguientes.',
			'Aprovecha las notas privadas para borradores personales, metas salariales o reflexiones íntimas.',
			'Marcar límites y solicitar apoyo a tiempo es señal inequívoca de alta madurez técnica.'
		],
		keyTakeaway:
			'El 1 a 1 es tu reunión. Cuando tomas el mando —registrando éxitos, señalando fricciones y buscando patrocinio— diriges el rumbo de tu crecimiento profesional.'
	},
	{
		slug: 'handling-difficult-situations',
		title: 'Gestión de Situaciones Difíciles: Guiones para 1 a 1 Críticos',
		subtitle:
			'Guiones conversacionales exactos y marcos psicológicos para desescalar tensiones, lágrimas, feedback crítico y ultimátums.',
		category: 'difficult',
		readTime: '9 min de lectura',
		cadence: 'Situacional / Momentos de crisis y alta tensión',
		duration: '30–60 minutos',
		targetAudience: 'Líderes y colaboradores gestionando fricciones emocionales y organizativas',
		summaryHtml:
			'Cuando las reuniones 1 a 1 se complican, los consejos genéricos no sirven. Una guía práctica con guiones contrastados para seis escenarios críticos: el muro del «todo bien», feedback de rendimiento severo, llanto y angustia emocional, demandas salariales inmediatas, acusaciones de microgestión y cinismo organizativo.',
		whyItMattersHtml:
			'<p><strong>La auténtica prueba de liderazgo:</strong> Gestionar un 1 a 1 es sencillo cuando los proyectos van sobre ruedas y hay promociones. El verdadero calibre de un líder se demuestra en situaciones difíciles: cuando alguien se encierra en sí mismo, rompe a llorar o requiere feedback riguroso sobre su rendimiento.</p><p><strong>Seguridad psicológica bajo presión:</strong> Ante momentos críticos, la respuesta humana habitual es la defensa, la culpa o la evasión. Cuando los líderes pierden la calma, la confianza desaparece. Superar estos momentos exige empatía profunda, apego a los hechos y saber sostener las pausas.</p><p><strong>Confidencialidad como refugio seguro:</strong> La sinceridad emocional no puede florecer sin certeza absoluta de privacidad. Las conversaciones complejas nunca deben grabarse y las notas deben permanecer cifradas en el dispositivo.</p>',
		preparationHtml:
			'<p><strong>Preparación previa para conversaciones complejas:</strong><br>1. <em>Revisar tendencias y estados emocionales:</em> Analiza el ánimo y la carga de los últimos ciclos para distinguir entre un pico puntual y un agotamiento acumulado.<br>2. <em>Basarse en hechos observables:</em> Separa conductas tangibles de juicios personales. Anota fechas, PRs o eventos concretos.<br>3. <em>Preparar notas privadas:</em> Utiliza las notas privadas cifradas en encrypted1on1 para estructurar ideas e hipótesis. Jamás compartas apuntes de diagnóstico íntimo.<br>4. <em>Dejar margen en el calendario:</em> Reserva al menos 15 minutos libres tras la reunión para evitar cortar bruscamente una conversación sensible.</p>',
		agenda: [
			{
				title: 'Escenario 1: El muro del «Todo bien» (10 min)',
				durationMinutes: 10,
				description:
					'Gestionar monosílabos defensivos cuando el rendimiento y la energía caen a la vista.',
				questions: [
					'Guion: «Te escucho decir que todo va bien, pero he notado un cambio en las últimas dos semanas: los standups se sienten apagados y esa PR de Auth se percibe muy pesada».',
					'Guion: «No comento esto para juzgarte ni presionarte. Mi labor es proteger tu ritmo. Cuando hay este silencio, suele haber un bloqueo oculto o exceso de carga».',
					'Guion: «¿Qué aspecto puntual de este sprint te ha resultado más agotador de lo normal? (Y sostén 7 segundos de completo silencio)».'
				]
			},
			{
				title: 'Escenario 2: Transmitir feedback crítico de rendimiento (15 min)',
				durationMinutes: 15,
				description:
					'Abordar deficiencias de calidad o comunicaciones cortantes aplicando el modelo SBI.',
				questions: [
					'Situación: «El martes, durante la revisión de código del refactor de pasarela de pago...»',
					"Conducta: «...cuando Jordan preguntó por el flujo de fallback, tu respuesta fue: 'Lee la documentación, no tengo tiempo para explicar lo básico'».",
					'Impacto: «...lo que provocó que Jordan dudara en hacer preguntas de arquitectura, ralentizó las revisiones y tensó al equipo».',
					'Alternativa: «Cuidar la colaboración en las revisiones es tan vital como la velocidad de entrega. ¿Qué estaba sucediendo contigo en ese instante?»'
				]
			},
			{
				title: 'Escenario 3: Angustia emocional y llanto (10 min)',
				durationMinutes: 10,
				description: 'Ofrecer contención empática cuando alguien se desborda por estrés.',
				questions: [
					'Guion: «Tómate tu tiempo. No hay prisa alguna y no tienes nada por lo que disculparte. Trabajamos con sistemas complejos y exigentes, y ante todo somos personas».',
					'Guion: «¿Prefieres tomarte 5 minutos, beber un vaso de agua y regresar, o aplazamos el resto para mañana? Lo que necesites está perfecto».',
					'Regla: Nunca grabes la llamada. Céntrate en escuchar y brindar seguridad, no en resolver problemas técnicos de inmediato.'
				]
			},
			{
				title: 'Escenario 4: Demandas salariales o de ascenso inmediatas (10 min)',
				durationMinutes: 10,
				description: 'Responder con sensatez a un ultimátum económico o de cargo.',
				questions: [
					'Guion: «Agradezco tu franqueza sobre tus expectativas. Valoro mucho tu ambición y quiero que tu aportación se reconozca con justicia».',
					'Guion: «No puedo darte un sí inmediato hoy sobre sueldo o puesto, ya que dependen de la matriz de niveles y aprobaciones de presupuesto. Lo que sí te prometo es transparencia total».',
					'Guion: «Abramos la matriz del nivel Senior, comparemos tus logros, identifiquemos áreas de mejora y presentemos ese análisis en la próxima ronda de revisión».'
				]
			},
			{
				title: 'Escenario 5 y 6: Acusaciones de microgestión y cinismo (10 min)',
				durationMinutes: 10,
				description:
					'Ajustar la visibilidad frente a la autonomía y tratar el desencanto con la estrategia.',
				questions: [
					'Microgestión: «Gracias por decírmelo con franqueza. Si sientes mis consultas como microgestión, tenemos un desajuste comunicativo. ¿Qué cadencia de novedades te resulta cómoda para que yo tenga contexto y pueda respaldarte sin agobiarte?»',
					'Cinismo: «Entiendo tu malestar ante el cambio de rumbo tras el esfuerzo invertido. Este es el contexto de mercado que motiva la decisión... ¿Qué riesgos técnicos prevés y cómo podemos mitigarlos?»'
				]
			}
		],
		antiPatterns: [
			{
				mistake: 'El «sándwich de elogios» (Elogio–Crítica–Elogio)',
				whyBad:
					'Diluye la seriedad del mensaje. El colaborador se va creyendo que todo marcha perfecto y el líder piensa que fue exigente.',
				betterAlternative:
					'Aplica el método SBI con respeto y claridad. Sé conciso y céntrate en construir juntos.'
			},
			{
				mistake: 'Contraatacar a la defensiva',
				whyBad:
					'Responder con enfado ante críticas de microgestión o de rumbo empresarial destruye la seguridad psicológica para siempre.',
				betterAlternative:
					'Agradece la valentía de compartirlo, acepta la fricción con calma e invita a co-diseñar el camino.'
			},
			{
				mistake: 'Hacer promesas improvisadas para calmar los ánimos',
				whyBad:
					'Garantizar promociones o aumentos por evitar la incomodidad causa una ruptura total de confianza si la dirección lo rechaza.',
				betterAlternative:
					'Ofrece escucha genuina y claridad en los pasos, pero nunca asegures decisiones que no dependen solo de ti.'
			},
			{
				mistake: 'Minimizar las emociones («¡No llores, que no pasa nada!»)',
				whyBad:
					'Desconocer el dolor ajeno invalida la realidad de la persona y eleva su sensación de vergüenza.',
				betterAlternative:
					'Facilita un respiro, normaliza el momento como algo humano y permite posponer la conversación.'
			}
		],
		followUpHtml:
			'<p><strong>1. Desbloqueo prioritario en 24 horas:</strong> Si la conversación destapó sobrecarga o fallos en herramientas, actúa de inmediato. Solucionar algo concreto prueba que la honestidad es bien recibida.</p><p><strong>2. Documentación objetiva en notas privadas:</strong> Deja constancia de los hechos y apoyos comprometidos en tus notas privadas cifradas. No almacenes vivencias personales delicadas en herramientas corporativas sin cifrar.</p><p><strong>3. Breve seguimiento tras 3–5 días:</strong> En situaciones con alta carga emocional, un café virtual de 15 minutos a los pocos días restablece la tranquilidad y confirma que todo sigue adelante con normalidad.</p>',
		tips: [
			'Espera 7 segundos en silencio tras formular una pregunta profunda: la sinceridad auténtica requiere tiempo para aflorar.',
			'Diferencia siempre las charlas de coaching y desarrollo de las negociaciones de sueldo.',
			'Ten presente que las actitudes defensivas casi siempre son escudos ante el estrés o la falta de claridad.',
			'Recurre a la plantilla support_checkin en encrypted1on1 en cuanto percibas saturación continuada o riesgo de desgaste.'
		],
		keyTakeaway:
			'Las conversaciones difíciles no deterioran las relaciones; lo hace gestionarlas con torpeza. Tratadas con empatía, serenidad y confidencialidad inviolable, los momentos críticos son la piedra angular de los equipos de alto rendimiento.'
	}
];
