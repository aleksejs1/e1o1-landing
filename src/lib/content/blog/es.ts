import type { BlogPost, BlogUiStrings } from './types';

export const blogUiEs: BlogUiStrings = {
	blogTitle: 'Blog y notas de ingeniería',
	blogSubtitle:
		'Reflexiones sobre la metodología de reuniones 1 a 1, la carga cognitiva en equipos de software y el desarrollo Zero-Knowledge.',
	latestArticles: 'Artículos recientes',
	readArticle: 'Leer artículo',
	backToBlog: 'Volver al Blog',
	publishedOn: 'Publicado el',
	writtenBy: 'Autor',
	shareArticle: 'Compartir',
	linkCopied: '¡Enlace copiado al portapapeles!',
	tryDemoTitle: 'Gestiona 1 a 1 con garantía matemática de privacidad',
	tryDemoBody:
		'encrypted1on1 protege las notas y metas con cifrado E2E en el navegador. Ni el servidor ni los administradores tienen acceso al contenido.',
	tryDemoCta: 'Probar demo interactiva sin registro',
	moreArticles: 'Más artículos del blog'
};

export const blogPostsEs: BlogPost[] = [
	{
		slug: 'why-we-built-encrypted1on1',
		title: 'Por qué creamos encrypted1on1',
		subtitle:
			'La revelación de que las notas de un 1 a 1 necesitan matemáticas, no políticas de privacidad.',
		description:
			'Las notas de los 1 a 1 contienen las conversaciones más sensibles de una empresa. Por qué prometer «no mirar» no basta y cómo nació la plataforma Zero-Knowledge.',
		date: '2026-08-09',
		formattedDate: '9 de agosto de 2026',
		readTime: '4 min de lectura',
		category: 'Manifiesto',
		author: {
			name: 'Aleksejs',
			role: 'Fundador y desarrollador'
		},
		tags: ['Seguridad', 'Zero-Knowledge', 'Reuniones 1 a 1', 'Código abierto'],
		leadHtml:
			'No nos propusimos crear otra herramienta SaaS más. Empezamos como clientes. Esta es la historia de cómo el cierre de un proveedor externo nos obligó a replantearnos dónde residen realmente las conversaciones más privadas de un equipo.',
		sections: [
			{
				heading: 'Empezamos como clientes',
				paragraphsHtml: [
					'Nuestra organización gestionaba su proceso de reuniones 1 a 1 con una herramienta de terceros, uno de los muchos productos bien diseñados y bien intencionados que existen en este espacio. Cumplía muy bien su función.',
					'Entonces, como suele ocurrir con muchos proveedores pequeños, anunció su cierre. Eso es normal: las startups cierran, los productos cumplen su ciclo.',
					'Lo que no fue normal fue lo que nos hizo darnos cuenta: nunca nos habíamos preguntado en serio qué <em>significa</em> el cierre de un proveedor para el contenido de una reunión 1 a 1.'
				]
			},
			{
				heading: 'Qué se guarda realmente en las notas de un 1 a 1',
				paragraphsHtml: [
					'Pensemos en lo que realmente se anota durante un año de conversaciones sinceras. Preocupaciones de desempeño compartidas en estricta confidencialidad. Notas privadas de un líder sobre la trayectoria profesional de un colaborador. Conversaciones sobre salario. Circunstancias personales y familiares que un empleado reveló esperando que quedaran exclusivamente entre dos personas.',
					'Nada de ese contenido debería ser visible jamás para nadie más allá de los dos participantes: ni su responsable de nivel superior, ni Recursos Humanos, ni TI, y tampoco <em>el propio proveedor de software</em>, aunque técnicamente este siempre pudiera inspeccionar el texto sin cifrar en la base de datos.'
				]
			},
			{
				heading: 'La prueba del cierre: por qué las promesas no bastan',
				paragraphsHtml: [
					'Un cierre es exactamente el momento en que las prácticas de manejo de datos de una empresa se ponen a prueba con más dureza: personal de soporte haciendo exportaciones masivas, un comprador realizando auditorías técnicas y un equipo reducido cerrando la infraestructura con prisas.',
					'No teníamos motivos para creer que fuera a ocurrir nada malo con nuestros datos. Pero tampoco teníamos forma de <em>saber</em> que no pasaría, porque todo el modelo se basaba en «confía en nosotros», y «nosotros» éramos una empresa que estaba cerrando sus puertas.'
				]
			},
			{
				heading: 'Matemáticas en lugar de políticas de privacidad',
				paragraphsHtml: [
					'Esa es la brecha que decidimos cerrar de verdad, no solo para nuestra propia organización, sino como una solución que cualquiera pudiera verificar por sí mismo en lugar de aceptarla por fe.',
					'Si una plataforma de reuniones 1 a 1 va a custodiar algunas de las conversaciones más sensibles de una empresa, «prometemos no mirar» no es una garantía suficiente. La única garantía real es aquella en la que mirar <em>no es posible</em>: donde el operador, el equipo de TI, la empresa que aloja el sistema, e incluso una intrusión en el servidor, no obtienen más que texto cifrado.',
					'Eso no es una declaración en un PDF. Eso es cifrado de extremo a extremo real (E2EE), con código abierto para que cualquier ingeniero pueda comprobarlo.',
					'<strong>encrypted1on1 es el resultado de esa convicción.</strong>'
				]
			}
		]
	},
	{
		slug: 'v1-0-0-release',
		title: 'encrypted1on1 v1.0.0: Primer lanzamiento estable',
		subtitle:
			'Reuniones 1:1 autoalojadas y cifradas de extremo a extremo, preparación asíncrona y despliegue en Docker.',
		description:
			'Anunciamos encrypted1on1 v1.0.0: el primer lanzamiento estable de nuestra plataforma E2EE para reuniones 1 a 1 entre gerentes y empleados. Imagen Docker, pruebas de privacidad y demo en vivo.',
		date: '2026-08-16',
		formattedDate: '16 de agosto de 2026',
		readTime: '5 min de lectura',
		category: 'Lanzamiento',
		author: {
			name: 'Aleksejs',
			role: 'Fundador y desarrollador'
		},
		tags: ['v1.0.0', 'Lanzamiento', 'Docker', 'Código Abierto', 'Seguridad'],
		coverImage: '/images/landing/privacy-infrastructure.jpg',
		leadHtml:
			'Hoy alcanzamos un hito fundamental: lanzamos oficialmente <strong>encrypted1on1 v1.0.0</strong> — nuestra primera versión estable para entornos de producción. Ofrece a los equipos un espacio estructurado para reuniones 1 a 1 donde el servidor jamás tiene acceso al texto en claro de sus notas, comentarios o metas.',
		sections: [
			{
				heading: 'Por qué las reuniones 1 a 1 exigen una arquitectura Zero-Knowledge',
				paragraphsHtml: [
					'En las reuniones 1 a 1 entre gerentes y colaboradores ocurren las conversaciones más delicadas de una organización: retroalimentación confidencial sobre rendimiento, debates salariales, planes de carrera, signos tempranos de agotamiento y circunstancias personales sensibles.',
					'Las herramientas tradicionales basadas en la nube, las wikis internas y los documentos compartidos exigen confiar ciegamente en administradores de bases de datos, proveedores de nube y personal de soporte.',
					'Con encrypted1on1 sustituimos la confianza por matemáticas. Todo el contenido se cifra en el navegador del usuario antes de enviarse al servidor. Ni siquiera el administrador con acceso total al servidor o a la base de datos puede acceder al texto sin cifrar.'
				]
			},
			{
				heading: 'Novedades de la versión 1.0.0',
				paragraphsHtml: [
					'El lanzamiento v1.0.0 es el resultado de meses de diseño arquitectónico riguroso, pruebas de seguridad y uso real en equipos. Incluye de fábrica:',
					'<ul><li><strong>Formularios de reunión («anketas») con cifrado de extremo a extremo:</strong> pares de claves asimétricas X25519 por participante, cifrado simétrico autenticado XChaCha20-Poly1305 para el contenido y derivación de claves mediante Argon2id a partir de la contraseña del usuario.</li><li><strong>Preparación asíncrona:</strong> tanto el mánager como el colaborador completan temas, obstáculos y autoevaluaciones de ánimo y carga de trabajo antes de la videollamada.</li><li><strong>Continuidad de objetivos entre ciclos:</strong> las metas y los acuerdos no quedan olvidados en notas pasadas; se transfieren automáticamente de un ciclo al siguiente hasta que se archiven o completen.</li><li><strong>Informes y métricas que preservan la privacidad:</strong> vista de reporte periódico con gráficos de tendencia (sparklines) generados en SVG directamente en el navegador, sin scripts de seguimiento externos ni procesamiento de texto en claro en el servidor.</li><li><strong>Gestión de cuentas empresarial:</strong> modos de registro configurables (por invitación, solo administradores o autorregistro restringido a dominios de correo corporativo), cambio seguro de contraseñas y exportación completa de datos descifrados en JSON.</li></ul>'
				]
			},
			{
				heading: 'Ingeniería y seguridad verificable',
				paragraphsHtml: [
					'Diseñamos encrypted1on1 con principios de defensa en profundidad en todas las capas del sistema:',
					'<ul><li><strong>Pruebas de privacidad de caja negra:</strong> suite e2e automatizada con Playwright que ejecuta criptografía real en dos sesiones de navegador independientes e inspecciona la base de datos para garantizar matemáticamente que ningún dato en claro llegue al almacenamiento ni a las respuestas de la API.</li><li><strong>Cabeceras de seguridad estrictas:</strong> política de seguridad de contenido (CSP) estricta, Subresource Integrity (SRI) en todos los recursos frontend y HSTS forzado.</li><li><strong>Contenedor Docker blindado:</strong> se ejecuta como usuario sin privilegios junto a FrankenPHP y Caddy con aprovisionamiento automático de certificados HTTPS y comprobaciones de salud (HEALTHCHECK).</li><li><strong>Almacenamiento de alto rendimiento:</strong> SQLite con modo Write-Ahead Logging (WAL) activo por defecto para escrituras concurrentes rápidas, más una ruta documentada y probada de migración a MySQL.</li></ul>'
				]
			},
			{
				heading: 'Primeros pasos y despliegue en Docker',
				paragraphsHtml: [
					'Desplegar encrypted1on1 requiere un único comando gracias a la imagen oficial disponible en GitHub Container Registry:',
					'<pre><code>docker pull ghcr.io/aleksejs1/encrypted1on1:1.0.0</code></pre>',
					'Si desea probar la interfaz antes de instalarla en su infraestructura, pruebe la demo interactiva en <a href="https://demo.private1on1.eu" target="_blank" rel="noopener noreferrer">demo.private1on1.eu</a> — no requiere registro y cuenta con historiales de ejemplo en todos los idiomas.',
					'El código fuente completo está licenciado bajo <strong>AGPLv3</strong> y disponible en el repositorio de <a href="https://github.com/aleksejs1/encrypted1on1" target="_blank" rel="noopener noreferrer">GitHub</a>.'
				]
			}
		]
	},
	{
		slug: 'v1-2-0-release',
		title: 'encrypted1on1 v1.2.0: versionado de formularios, edición propia y mejor experiencia',
		subtitle:
			'Cómo evolucionar los cuestionarios 1 a 1 sin distorsionar el historial de reuniones pasadas, edición propia de acuerdos y reprogramación de fechas.',
		description:
			'encrypted1on1 v1.2.0 incorpora versionado de cuestionarios para evolucionar preguntas sin romper el pasado, edición propia de acuerdos y comentarios, reprogramación de fechas y nombres visibles.',
		date: '2026-08-25',
		formattedDate: '25 de agosto de 2026',
		readTime: '4 min de lectura',
		category: 'Lanzamiento',
		author: {
			name: 'Aleksejs',
			role: 'Fundador y desarrollador'
		},
		tags: ['v1.2.0', 'Lanzamiento', 'UX', 'Versionado', 'Código Abierto'],
		coverImage: '/images/landing/methodology-leverage.jpg',
		leadHtml:
			'Dos semanas después del lanzamiento de v1.0.0, presentamos <strong>encrypted1on1 v1.2.0</strong>. Esta versión se centra en la usabilidad cotidiana y la integridad de los datos: resuelve el dilema arquitectónico de actualizar plantillas de preguntas sin alterar notas pasadas, brinda a los participantes el control de editar sus aportes y pule aspectos clave de la experiencia de usuario.',
		sections: [
			{
				heading: 'El reto de la fidelidad histórica en las plantillas de reunión',
				paragraphsHtml: [
					'En cualquier herramienta de 1 a 1, los cuestionarios evolucionan con el tiempo. Por ejemplo, en encrypted1on1 queríamos ampliar la autoevaluación del estado anímico («sentimientos») del empleado de 6 emociones básicas a 12 matices (añadiendo opciones como <em>calma</em>, <em>gratitud</em>, <em>estrés</em>, <em>orgullo</em>, <em>aburrimiento</em> y <em>soledad</em>).',
					'En aplicaciones convencionales, el equipo de desarrollo simplemente modifica el listado de preguntas. Pero en un sistema que custodia el historial de reuniones de una empresa, esto genera una peligrosa distorsión retroactiva: si la plantilla cambia a nivel global, las reuniones celebradas hace meses se interpretan según la nueva definición. Una casilla que un empleado no marcó hace tres meses porque no existía pasa a ser indistinguible de una que vio y decidió rechazar deliberadamente.',
					'Para proteger la fidelidad histórica de los registros, v1.2.0 implementa <strong>versionado de formularios de anketa</strong> (<code>formVersion</code>). Cada reunión queda sellada con su versión al crearse: los encuentros pasados se mantienen en el esquema v1, mientras que los nuevos adoptan el esquema v2 con el catálogo ampliado de emociones.'
				]
			},
			{
				heading: 'Edición y eliminación propia en acuerdos y comentarios',
				paragraphsHtml: [
					'Una reunión 1 a 1 productiva es un proceso vivo: los asistentes intercambian impresiones, refinan acuerdos sobre la marcha y en ocasiones cometen errores tipográficos al escribir rápidamente. Anteriormente, una vez guardado un punto en los acuerdos compartidos o en los comentarios, no era posible editarlo.',
					'En v1.2.0, los usuarios pueden modificar y eliminar sus propios puntos en «Resultados de la reunión» y sus comentarios en la anketa. Esta función está respaldada por una estricta política de seguridad ligada a la autoría: cada persona tiene total libertad para perfeccionar sus propias palabras, pero nadie puede alterar lo expresado por su interlocutor.'
				]
			},
			{
				heading: 'Reprogramación de próximas reuniones y nombres legibles',
				paragraphsHtml: [
					'Esta versión también incorpora mejoras sustanciales en el día a día:',
					'<ul><li><strong>Reprogramación de fechas:</strong> anteriormente solo se permitía cambiar la fecha si la reunión ya estaba vencida. Ahora, ante cambios de agenda imprevistos, es posible reprogramar un encuentro planificado directamente desde la propia anketa.</li><li><strong>Nombres de usuario legibles:</strong> los correos electrónicos sin formato y los identificadores UUID han sido sustituidos por nombres visibles en encabezados, resúmenes y listas de participantes.</li><li><strong>Contraste en modo oscuro y verificación WCAG en CI:</strong> se reajustó la paleta de colores de las etiquetas para garantizar una legibilidad óptima y se añadió una comprobación automatizada de contraste WCAG en el pipeline de integración continua.</li><li><strong>Información de versión:</strong> los administradores de sistemas pueden activar la visualización de la versión y el commit de git en el pie de página mediante la variable <code>SHOW_VERSION</code>.</li></ul>'
				]
			},
			{
				heading: 'Cómo actualizar y desplegar v1.2.0',
				paragraphsHtml: [
					'La versión v1.2.0 es totalmente compatible con despliegues anteriores e incorpora migraciones automáticas de base de datos para SQLite y MySQL. Puede descargar la imagen oficial en cualquier momento:',
					'<pre><code>docker pull ghcr.io/aleksejs1/encrypted1on1:1.2.0</code></pre>',
					'También puede explorar los nuevos formularios y mejoras visuales sin necesidad de instalar nada en nuestra demo pública interactiva: <a href="https://demo.private1on1.eu" target="_blank" rel="noopener noreferrer">demo.private1on1.eu</a>.',
					'El registro completo de cambios y el código están disponibles en el repositorio de <a href="https://github.com/aleksejs1/encrypted1on1/releases/tag/v1.2.0" target="_blank" rel="noopener noreferrer">GitHub</a>.'
				]
			}
		]
	},
	{
		slug: '1-on-1-question-bank-templates',
		title: 'Más allá del «¿Cómo va todo?»: presentamos el Banco de Preguntas y Plantillas 1 a 1',
		subtitle:
			'Una selección de preguntas catalizadoras en 7 dimensiones esenciales — con el motivo detrás de cada una y plantillas listas para usar.',
		description:
			'Por qué las reuniones 1 a 1 caen en la trampa de los informes de estado tácticos y cómo nuestro Banco de Preguntas interactivo impulsa conversaciones profundas y transparentes.',
		date: '2026-09-02',
		formattedDate: '2 de septiembre de 2026',
		readTime: '4 min de lectura',
		category: 'Playbook',
		author: {
			name: 'Aleksejs',
			role: 'Fundador y desarrollador'
		},
		tags: ['Reuniones 1:1', 'Banco de preguntas', 'Gestión', 'Playbook', 'Plantillas'],
		coverImage: '/images/playbook/high-leverage-1-on-1.jpg',
		leadHtml:
			'El error más habitual y costoso en la gestión de equipos de ingeniería es convertir la reunión 1 a 1 en una simple actualización de tareas. Hoy abrimos nuestro <a href="/es/playbook/questions/">Banco de Preguntas 1 a 1</a> interactivo: un repositorio estructurado de preguntas clave para superar la cortesía superficial y tratar lo realmente decisivo.',
		sections: [
			{
				heading: 'La trampa del informe de estado',
				paragraphsHtml: [
					'Todos hemos vivido reuniones 1 a 1 vacías: «¿Cómo va el proyecto X?» — «Bien, a punto de hacer merge.» — «¿Algún bloqueo?» — «No, todo en orden.» En diez minutos los temas se agotan y la sesión concluye con la sensación de haber cumplido un trámite, pero sin haber ganado alineación real.',
					'El seguimiento de tareas pertenece a los tableros de gestión, hilos asíncronos y stand-ups. Una reunión 1 a 1 es la mayor palanca de liderazgo (high leverage) de un mánager, siempre que se planteen preguntas que saquen a la luz bloqueos sistémicos, desgaste emocional o inquietudes de crecimiento profesional.'
				]
			},
			{
				heading: '7 dimensiones de un diálogo de alto impacto',
				paragraphsHtml: [
					'En lugar de ofrecer una lista desordenada de tópicos, organizamos el <a href="/es/playbook/questions/">Banco de Preguntas</a> en 7 áreas estratégicas:',
					'<ul><li><strong>Contacto y energía:</strong> generar seguridad psicológica y comprender el momento personal antes de entrar en materias técnicas.</li><li><strong>Feedback al mánager:</strong> detectar puntos ciegos de liderazgo, comprender el estilo de apoyo preferido y resolver fricciones de gestión.</li><li><strong>Equipo y cultura:</strong> evaluar el clima laboral, la confianza mutua y la calidad del trabajo colaborativo.</li><li><strong>Bloqueos y procesos:</strong> eliminar reuniones innecesarias, procesos lentos de despliegue y trabas burocráticas.</li><li><strong>Estrategia y sentido:</strong> conectar el trabajo de código diario con los objetivos de negocio y el impacto real para los usuarios.</li><li><strong>Crecimiento y ambición:</strong> plan de carrera a largo plazo, desarrollo de nuevas competencias y búsqueda de nuevos retos.</li><li><strong>Carga y bienestar:</strong> detectar la sobrecarga mental y el agotamiento a tiempo, mucho antes de que surja una renuncia.</li></ul>'
				]
			},
			{
				heading: 'El principio «¿Por qué preguntar esto?»',
				paragraphsHtml: [
					'Una pregunta poderosa solo funciona cuando se comprende su objetivo. Por ello, en nuestro catálogo cada formulación cuenta con una sección explicativa de <strong>«Por qué preguntar esto»</strong>.',
					'En ella se detalla qué dinámica de confianza explora la pregunta, a qué detalles sutiles prestar atención en la respuesta y cómo continuar la conversación de forma constructiva sin generar actitudes defensivas.'
				]
			},
			{
				heading: 'Cómo aprovechar el banco en encrypted1on1',
				paragraphsHtml: [
					'El banco es accesible de forma totalmente libre en <a href="/es/playbook/questions/">/es/playbook/questions/</a> con búsqueda en tiempo real, filtros por categoría y selector aleatorio para inspirarse.',
					'Estas preguntas están diseñadas para incorporarse directamente en las anketas de preparación previa de <a href="https://demo.private1on1.eu/?lang=es" target="_blank" rel="noopener noreferrer">encrypted1on1</a>. Así, tanto líder como colaborador disponen de tiempo para reflexionar asíncronamente antes de la reunión, con la seguridad de que el cifrado client-side protege cada respuesta con total confidencialidad.'
				]
			}
		]
	},
	{
		slug: '5-essential-books-for-high-leverage-1-on-1s',
		title: 'La biblioteca 1:1: 5 libros esenciales para líderes de ingeniería',
		subtitle:
			'Destilando décadas de sabiduría de Andy Grove, Ben Horowitz, Julie Zhuo, Camille Fournier y Kim Scott en prácticas directas para tus reuniones 1:1.',
		description:
			'Descubre nuestra biblioteca 1:1 interactiva: cinco libros fundamentales sobre gestión, sus filosofías para 1:1, preguntas clave y plantillas asociadas.',
		date: '2026-09-10',
		formattedDate: '10 de septiembre de 2026',
		readTime: '5 min de lectura',
		category: 'Playbook',
		author: {
			name: 'Aleksejs',
			role: 'Fundador y desarrollador'
		},
		tags: ['Biblioteca', 'Reuniones 1:1', 'Gestión', 'Liderazgo', 'Libros'],
		coverImage: '/images/playbook/manager-playbook.jpg',
		leadHtml:
			'El liderazgo sólido rara vez surge de la nada. Los principios que transforman las reuniones 1:1 en palancas de alto impacto —seguridad psicológica, agendas marcadas por el colaborador, detección temprana de obstáculos y franqueza constructiva— han sido probados durante décadas por figuras emblemáticas del sector. Hoy presentamos la <a href="/es/playbook/books/">Biblioteca 1:1</a> interactiva.',
		sections: [
			{
				heading: 'Por qué creamos una biblioteca dedicada al 1:1',
				paragraphsHtml: [
					'La mayoría de los libros de gestión dedican cientos de páginas a la estrategia corporativa, la captación de talento y la política interna. Sin embargo, cuando se pregunta a líderes experimentados qué hábito diario genera el mayor retorno de tiempo (leverage), señalan casi unánimemente a los encuentros individuales 1:1.',
					'Para que los responsables de equipo puedan aprovechar estas lecciones sin tener que devorar tomos teóricos, creamos la <a href="/es/playbook/books/">Biblioteca 1:1</a>. Destilamos seis textos fundamentales en su esencia: su filosofía rectora, sus principios de cabecera, preguntas concretas listas para usar y conexiones directas con las plantillas de nuestro Playbook.'
				]
			},
			{
				heading: '6 obras indispensables',
				paragraphsHtml: [
					'Nuestra biblioteca reúne seis títulos clave que han forjado el liderazgo técnico contemporáneo:',
					'<ul><li><strong>«High Output Management» de Andy Grove (1983):</strong> El clásico indiscutible de Silicon Valley. Grove estableció que el rendimiento de un manager es el rendimiento conjunto de su equipo, y que 90 minutos de conversación aumentan la productividad del colaborador durante 80 horas (>50x de retorno en tiempo). Su premisa fundacional: <em>el 1:1 es la reunión del colaborador</em>.</li><li><strong>«The Hard Thing About Hard Things» de Ben Horowitz (2014):</strong> El manual de referencia para la gestión en momentos difíciles. Horowitz define el 1:1 como la válvula de escape indispensable de una organización: las buenas noticias vuelan, pero las malas se ocultan; las reuniones periódicas permiten atajar problemas pequeños antes de que provoquen crisis o deserciones inesperadas.</li><li><strong>«The Making of a Manager» de Julie Zhuo (2019):</strong> El referente del liderazgo empático moderno. Zhuo descompone el 1:1 en cuatro ámbitos esenciales: afianzar la confianza mutua, clarificar prioridades, solventar obstáculos complejos y orientar las aspiraciones de carrera.</li><li><strong>«The Manager’s Path» de Camille Fournier (2017):</strong> La guía definitiva para la escala técnica. Fournier aborda las especificidades de la ingeniería: el acompañamiento de perfiles júnior, la gestión de ingenieros Staff y la deuda técnica. Advierte tajantemente: que alguien diga <em>«No tengo nada de qué hablar»</em> no es señal de tranquilidad, sino una alerta roja de desconexión.</li><li><strong>«Radical Candor» de Kim Scott (2017):</strong> Afecto personal combinado con desafío directo. Scott sitúa el 1:1 como el espacio de confianza por excelencia y formula su regla de oro: antes de señalar áreas de mejora al colaborador, solicita siempre feedback crítico sobre tu propio estilo de liderazgo.</li><li><strong>«La organización sin miedo» de Amy Edmondson (2018):</strong> La ciencia de la seguridad psicológica. Edmondson prueba que los equipos sobresalientes identifican los problemas antes porque nadie teme represalias. En el 1:1, el líder sustituye el juicio punitivo por la indagación constructiva.</li></ul>'
				]
			},
			{
				heading: 'De las ideas a agendas listas para usar',
				paragraphsHtml: [
					'La teoría sólo cobra sentido cuando se lleva al día a día. Para cada obra, la <a href="/es/playbook/books/">Biblioteca</a> incluye preguntas probadas y plantillas operativas integradas en el Playbook:',
					'<ul><li>El enfoque de palanca de Grove inspira nuestro <a href="/es/playbook/high-leverage-1-on-1/">Manifiesto de reuniones de alto impacto</a>.</li><li>La visión de Horowitz se plasma en el formato <a href="/es/playbook/skip-level/">Skip-Level 1:1: chequeo de salud del equipo</a>.</li><li>Los pilares de confianza de Zhuo sustentan la plantilla <a href="/es/playbook/first-1-on-1/">La primera reunión 1:1: expectativas y confianza</a>.</li><li>La orientación profesional de Fournier guía el <a href="/es/playbook/career-growth/">Chequeo trimestral de carrera y crecimiento</a>.</li><li>Las tácticas de prevención de estrés de Scott se articulan en el modelo <a href="/es/playbook/burnout-detection/">Detección de sobrecarga y burnout</a>.</li><li>Los principios de seguridad psicológica de Edmondson se conectan con <a href="/es/playbook/handling-difficult-situations/">Gestión de Situaciones Difíciles: Guiones para 1 a 1 Críticos</a>.</li></ul>'
				]
			},
			{
				heading: 'Implementación ágil y confidencial con encrypted1on1',
				paragraphsHtml: [
					'La verdadera traba para mantener reuniones provechosas no suele ser la falta de voluntad, sino la premura y carecer de un canal seguro y compartido. Sin preparación asíncrona, el encuentro deriva irremediablemente en un informe táctico superficial.',
					'Con <a href="https://demo.private1on1.eu/?lang=es" target="_blank" rel="noopener noreferrer">encrypted1on1</a>, líderes y colaboradores pueden seleccionar preguntas contrastadas de estos libros, redactar sus reflexiones con antelación y contar con el respaldo de nuestro cifrado de extremo a extremo sin conocimiento del servidor (zero-knowledge).',
					'Descubre los seis libros, repasa sus resúmenes y utiliza las preguntas en <a href="/es/playbook/books/">/es/playbook/books/</a>.'
				]
			}
		]
	},
	{
		slug: 'meeting-templates-playbook-and-form-templates-preview',
		title:
			'Playbook de plantillas 1:1: formatos probados y adelanto de plantillas de formularios en encrypted1on1',
		subtitle:
			'Una colección interactiva de agendas adaptadas a cada momento del equipo, con un adelanto exclusivo del próximo soporte nativo de formularios.',
		description:
			'Desde el primer 1:1 hasta la prevención del agotamiento y el crecimiento profesional: descubre el Playbook y conoce el futuro soporte de plantillas de formularios.',
		date: '2026-09-16',
		formattedDate: '16 de septiembre de 2026',
		readTime: '5 min de lectura',
		category: 'Playbook',
		author: {
			name: 'Aleksejs',
			role: 'Fundador y desarrollador'
		},
		tags: ['Playbook', 'Plantillas', 'Reuniones 1:1', 'Roadmap', 'Actualización'],
		coverImage: '/images/playbook/bi-weekly-pulse.jpg',
		leadHtml:
			'Ninguna reunión 1:1 debería ser idéntica a otra. La primera sesión con un nuevo integrante del equipo requiere preguntas totalmente distintas a las de una conversación trimestral de carrera con un ingeniero sénior o la gestión urgente de una sobrecarga. Hoy destacamos nuestro <a href="/es/playbook/">Playbook de reuniones 1:1</a> y compartimos un adelanto de las próximas novedades de encrypted1on1.',
		sections: [
			{
				heading: 'Por qué fallan los formatos únicos',
				paragraphsHtml: [
					'El error más recurrente en la gestión de ingeniería consiste en aplicar una misma conversación genérica semana tras semana. Sin un propósito claro, las sesiones terminan convirtiéndose en un mero informe de tareas: <em>«¿En qué estás trabajando? ¿Algún bloqueo? Perfecto, hasta la próxima semana.»</em>',
					'Los líderes eficaces comprenden que las personas atraviesan diferentes momentos operativos. Un 1:1 transformador adapta su orden del día a la necesidad concreta: ya sea consolidar la seguridad psicológica en la incorporación, eliminar fricciones técnicas cotidianas, proyectar el desarrollo a largo plazo o frenar a tiempo el desgaste personal.'
				]
			},
			{
				heading: '6 plantillas probadas en el Playbook',
				paragraphsHtml: [
					'Nuestro <a href="/es/playbook/">Playbook</a> reúne formatos diseñados para responder a seis situaciones estratégicas:',
					'<ul><li><strong><a href="/es/playbook/high-leverage-1-on-1/">Manifiesto de reuniones de alto impacto:</a></strong> La estructura fundamental inspirada en la visión de rendimiento de Andy Grove. Cuatro pilares para equilibrar energía humana, resolución de bloqueos, alineamiento estratégico y coaching recíproco.</li><li><strong><a href="/es/playbook/first-1-on-1/">La primera reunión 1:1: expectativas y confianza:</a></strong> Ideal para nuevas incorporaciones o reorganizaciones. Establece seguridad psicológica, define preferencias de comunicación y alinea expectativas en los primeros 30 días.</li><li><strong><a href="/es/playbook/bi-weekly-pulse/">Pulso quincenal de equipo:</a></strong> La cadencia habitual para equipos de alto rendimiento. Mantiene el dinamismo, detecta fricciones a tiempo y realiza un seguimiento riguroso de acuerdos entre ciclos.</li><li><strong><a href="/es/playbook/career-growth/">Chequeo trimestral de carrera y crecimiento:</a></strong> Una mirada estratégica desvinculada de la presión diaria de los sprints. Profundiza en el dominio de nuevas competencias y el crecimiento técnico.</li><li><strong><a href="/es/playbook/burnout-detection/">Detección de sobrecarga y burnout:</a></strong> Un marco empático para reconocer el estrés invisible antes de alcanzar un punto crítico y reordenar cargas de trabajo de forma sostenible.</li><li><strong><a href="/es/playbook/skip-level/">Skip-Level 1:1: chequeo de salud del equipo:</a></strong> Para directores, VP y fundadores que necesitan pulsar el clima del equipo y la claridad estratégica directamente en primera línea.</li></ul>'
				]
			},
			{
				heading: 'Orientadas a la acción: tiempos, consejos y copia rápida',
				paragraphsHtml: [
					'Cada guía del Playbook está pensada para ponerse en marcha de inmediato:',
					'<ul><li><strong>Tiempos recomendados:</strong> Distribución en minutos por bloque para cubrir los temas clave sin prisas innecesarias.</li><li><strong>Preguntas catalizadoras:</strong> Enunciados diseñados para incentivar la reflexión honesta sin despertar actitudes defensivas.</li><li><strong>Preparación y antipatrones:</strong> Pautas para líder y colaborador antes de la cita, junto con los errores clásicos que conviene esquivar.</li><li><strong>Botón «Copiar orden del día»:</strong> Copia en un solo clic la agenda completa en Markdown para pegarla en la invitación de calendario o en tus notas.</li></ul>'
				]
			},
			{
				heading:
					'Adelanto: ¡Próximamente soporte nativo de plantillas de formularios en encrypted1on1!',
				paragraphsHtml: [
					'Si bien las agendas del <a href="/es/playbook/">Playbook</a> ya pueden emplearse en cualquier calendario, estamos convencidos de que la mayor continuidad surge cuando la metodología vive dentro de la propia herramienta de reunión.',
					'Actualmente, encrypted1on1 ofrece un cuestionario unificado con seguimiento de estados anímicos, prioridades y acuerdos. Sin embargo, conversaciones distintas demandan preguntas distintas.',
					'Nos complace anunciar que estamos desarrollando activamente el <strong>soporte nativo para plantillas de formularios</strong> en encrypted1on1. Muy pronto, al agendar un encuentro, podrás elegir entre formularios adaptados a los escenarios del Playbook (onboarding, carrera, pulso regular) o configurar plantillas propias a medida de tu organización — manteniendo en todo momento la protección de nuestro cifrado client-side zero-knowledge.',
					'Explora ya las plantillas en <a href="/es/playbook/">/es/playbook/</a> y permanece atento a la próxima versión de la plataforma.'
				]
			}
		]
	},
	{
		slug: 'v1-3-0-release',
		title: 'encrypted1on1 v1.3.0: plantillas integradas de anketas y reuniones puntuales',
		subtitle:
			'Plantillas de preguntas para incorporación, desarrollo profesional y apoyo ante sobrecarga, junto con reuniones puntuales que respetan la continuidad del ciclo.',
		description:
			'encrypted1on1 v1.3.0 incorpora plantillas de reuniones nativas (onboarding, carrera, apoyo emocional), anketas puntuales sin duplicar cadenas y formato Markdown en respuestas.',
		date: '2026-09-24',
		formattedDate: '24 de septiembre de 2026',
		readTime: '4 min de lectura',
		category: 'Lanzamiento',
		author: {
			name: 'Aleksejs',
			role: 'Fundador y desarrollador'
		},
		tags: ['v1.3.0', 'Lanzamiento', 'Plantillas', 'Reuniones 1:1', 'Open Source'],
		coverImage: '/images/landing/privacy-infrastructure.jpg',
		leadHtml:
			'Apenas un mes después de lanzar el versionado de formularios en v1.2.0, nos complace presentar <strong>encrypted1on1 v1.3.0</strong>. Este lanzamiento introduce una de las funciones más esperadas: <strong>plantillas de reunión nativas</strong> directamente integradas en la creación de anketas, acompañadas de soporte para <strong>reuniones puntuales</strong> sin bifurcación y formato Markdown en las respuestas.',
		sections: [
			{
				heading: '4 plantillas especializadas para anketas',
				paragraphsHtml: [
					'Un único formato no puede responder a todas las etapas de un equipo. En v1.3.0, al programar una reunión, podrás elegir entre cuatro tipos de encuentro:',
					'<ul><li><strong>1:1 Regular:</strong> El formato clásico y eficaz para el seguimiento continuo: estado de ánimo y energía, hitos recientes, puntos de debate y acuerdos mutuos.</li><li><strong>Onboarding (Primer 1:1):</strong> Pensado para nuevas incorporaciones o cambios organizativos. Establece la base de confianza, aclara estilos de comunicación y recoge las primeras impresiones sobre los procesos del equipo.</li><li><strong>Carrera y crecimiento (Career & Growth):</strong> Diseñado para revisiones trimestrales de desarrollo. Incluye una retrospectiva de energía en proyectos recientes, selección de rumbo profesional (especialización técnica, liderazgo o rol transversal), plan de acción a 90 días y patrocinio activo del manager.</li><li><strong>Apoyo y gestión de sobrecarga (Support & Workload):</strong> Concebido para etapas de alta exigencia o riesgo de agotamiento. Facilita una revisión colaborativa de prioridades, identifica fugas de energía, delimita barreras saludables y acuerda medidas inmediatas de respaldo.</li></ul>'
				]
			},
			{
				heading: 'Transición inteligente de ciclos: las plantillas no se estancan',
				paragraphsHtml: [
					'Un defecto habitual al usar plantillas en otras herramientas es que, tras seleccionar un cuestionario trimestral, éste se repite por error cada dos semanas. En v1.3.0 esto se resuelve en el diseño arquitectónico.',
					'Cuando se archiva una reunión con plantilla especializada (como <code>career_growth</code> o <code>support_checkin</code>), la siguiente cita generada automáticamente regresa al formato <code>regular</code>. La conversación especial ocurre cuando corresponde, y el ritmo habitual de sincronización se retoma sin reconfiguraciones manuales.',
					'Además, las anketas activas que utilicen plantillas especiales aparecen identificadas con una insignia visible en el listado para que ambas partes reconozcan al instante el enfoque de la reunión.'
				]
			},
			{
				heading: 'Reuniones puntuales sin bifurcar la cadena recurrente',
				paragraphsHtml: [
					'Anteriormente, crear una anketa mientras otra seguía abierta provocaba una bifurcación en el historial, duplicando reuniones que luego se autoregeneraban en paralelo con acuerdos divergentes.',
					'v1.3.0 soluciona esto con el modelo de <strong>anketas puntuales</strong> (<code>oneOff: true</code>). Si programas un encuentro extraordinario junto a una reunión regular ya abierta, la nueva anketa se marca como puntual: no arrastra acuerdos previos ni genera una sucesora al archivarse. La cadena periódica se mantiene limpia y ordenada.'
				]
			},
			{
				heading: 'Soporte de Markdown y sincronización en directo',
				paragraphsHtml: [
					'Esta versión reúne también varias mejoras de experiencia de usuario:',
					'<ul><li><strong>Markdown en respuestas de texto:</strong> Los campos abiertos admiten formato Markdown —listas con viñetas, texto en negrita y bloques de código— para estructurar notas técnicas con total claridad.</li><li><strong>Actualización en tiempo real:</strong> Si tu interlocutor añade un acuerdo o modifica una nota durante la videollamada, la vista se actualiza al instante sin necesidad de recargar la página.</li><li><strong>Traducción completa:</strong> Todas las plantillas y mensajes están traducidos íntegramente al español, inglés, ruso, letón, alemán y francés.</li></ul>'
				]
			},
			{
				heading: 'Despliegue y contenedor Docker',
				paragraphsHtml: [
					'La versión v1.3.0 ofrece compatibilidad total hacia atrás e incluye migraciones automáticas para SQLite y MySQL. Descarga la imagen oficial:',
					'<pre><code>docker pull ghcr.io/aleksejs1/encrypted1on1:1.3.0</code></pre>',
					'Puedes probar el nuevo selector de plantillas y las reuniones en directo sin registro en <a href="https://demo.private1on1.eu/?lang=es" target="_blank" rel="noopener noreferrer">demo.private1on1.eu</a>.',
					'Consulta el código y el registro completo de cambios en <a href="https://github.com/aleksejs1/encrypted1on1/releases/tag/v1.3.0" target="_blank" rel="noopener noreferrer">GitHub</a>.'
				]
			}
		]
	},
	{
		slug: 'why-1-on-1-notes-should-not-live-in-notion-or-slack',
		title: 'Por qué las notas de 1 a 1 no deben estar en Notion o Slack corporativos: el precio de la franqueza',
		subtitle:
			'Cómo la ilusión de privacidad corporativa provoca autocensura, crea riesgos legales y por qué los líderes necesitan una arquitectura de dos circuitos.',
		description:
			'Por qué las notas de 1 a 1 en Notion o Slack corporativos destruyen la seguridad psicológica, cómo operan las exportaciones de administración y el eDiscovery, y por qué la confianza exige separar circuitos.',
		date: '2026-10-04',
		formattedDate: '4 de octubre de 2026',
		readTime: '7 min de lectura',
		category: 'Liderazgo y seguridad',
		author: {
			name: 'Aleksejs',
			role: 'Fundador y desarrollador'
		},
		tags: ['Reuniones 1 a 1', 'Privacidad', 'Seguridad psicológica', 'Gestión', 'Zero-Knowledge'],
		coverImage: '/images/blog/cost-of-candor-cover.jpg',
		leadHtml:
			'Cada manual de gestión moderna insiste en la vulnerabilidad, la franqueza radical y la seguridad psicológica. Los líderes configuran elegantes plantillas en carpetas privadas de Notion o mensajes directos en Slack, para luego preguntarse por qué las reuniones se reducen a rutinarios repasos de tickets de Jira. La razón no es la falta de empatía: los empleados son suficientemente perspicaces para saber que las nubes corporativas no guardan secretos.',
		sections: [
			{
				heading: 'La paradoja de la transparencia: cómo la vigilancia apaga la sinceridad',
				paragraphsHtml: [
					'En 2012, el profesor de Harvard Business School Ethan Bernstein publicó una investigación seminal titulada <em>«The Transparency Paradox»</em> en Administrative Science Quarterly, continuada con su artículo en Harvard Business Review <em>«The Transparency Trap»</em>. Bernstein analizó el comportamiento de los empleados bajo distintos niveles de visibilidad y demostró una verdad contraintuitiva: <strong>la transparencia excesiva y la observabilidad constante reducen el rendimiento real y clausuran el diálogo sincero</strong>.',
					'Cuando los profesionales saben que sus notas o conversaciones pueden ser fiscalizadas por terceros, dejan de experimentar y adoptan una postura escénica (<em>performing for observers</em>). En espacios abiertos, la gente actúa con estricta conformidad fingida. Solo tras una cortina de privacidad —en espacios protegidos— se atreven a asumir riesgos, admitir errores y hablar con franqueza. Bernstein concluyó que para aprender e innovar, los equipos necesitan imperativamente <strong>«zonas de privacidad» (zones of privacy)</strong>.',
					'Una reunión 1 a 1 nació precisamente como esa zona de privacidad. En los estudios de Amy Edmondson (<a href="/es/playbook/books/#the-fearless-organization"><em>The Fearless Organization</em></a>), la seguridad psicológica se define como la certeza de no ser castigado o juzgado por mostrar dudas, cometer fallos o manifestar inquietudes. Pero en cuanto las notas se almacenan en el SaaS corporativo, se activa el <strong>efecto desalentador (chilling effect)</strong>: se impone la autocensura y la reunión pierde el apalancamiento multiplicador descrito por Andy Grove en <a href="/es/playbook/books/#high-output-management"><em>High Output Management</em></a>.'
				]
			},
			{
				heading: 'La ilusión técnica: qué hay detrás del icono de candado «Privado»',
				paragraphsHtml: [
					'Muchos responsables se tranquilizan pensando: «Configuramos los permisos solo para mí y mi colaborador; nadie más tiene acceso». En infraestructuras SaaS corporativas, esto es un grave espejismo.',
					'<ul><li><strong>Notion Enterprise y permisos de Workspace Owner:</strong> La documentación oficial de Notion estipula que los administradores del espacio de trabajo tienen potestad integral sobre los datos. La funcionalidad Workspace Content Export permite descargar el espacio completo, <em>incluyendo las páginas creadas en la sección privada de cada empleado</em>. Además, al causar baja un miembro, el administrador puede reasignar sus páginas privadas a otra persona con un solo clic (Transfer private pages), exponiendo años de reflexiones íntimas.</li><li><strong>Slack Compliance Exports y DLP en segundo plano:</strong> En los planes Plus y Enterprise Grid, Slack ofrece exportaciones de cumplimiento que archivan canales cerrados y mensajes directos (DMs) sin avisar a los participantes. Mediante la Slack Discovery API, sistemas DLP externos analizan conversaciones privadas en tiempo real.</li><li><strong>IA corporativa y fugas por RAG:</strong> Con Slack AI, Notion AI y Microsoft Copilot indexando los repositorios de la empresa mediante RAG, un error sutil en la herencia de permisos (over-permissioning) basta para que el asistente de IA cite notas delicadas de un 1 a 1 al responder una búsqueda cotidiana de cualquier compañero.</li></ul>'
				]
			},
			{
				heading: 'Riesgos jurídicos y para RR. HH.: cuando los borradores se vuelven pruebas incriminatorias',
				paragraphsHtml: [
					'Conservar notas de 1 a 1 sin procesar en sistemas de la empresa no solo deteriora la cultura, sino que plantea contingencias legales críticas.',
					'En los litigios laborales bajo regímenes como <strong>eDiscovery</strong> (reglas FRCP 26 y 34 en EE. UU. y equivalentes internacionales), todos los registros corporativos constituyen información electrónicamente almacenada (ESI). Ante una demanda por despido injustificado, discriminación o represalias, una orden judicial obliga a la compañía a exhibir todas las notas de los mandos.',
					'En un diálogo de confianza, un mánager suele anotar impresiones inmediatas y subjetivas: <em>«Le cuesta mantener el ritmo, quizá por motivos familiares o de salud»</em> o <em>«Cansado de sus quejas continuas sobre horas extra»</em>. En un juzgado, estas notas informales se transforman en una prueba irrefutable (<em>smoking gun</em>) de sesgo o entorno laboral hostil, acarreando indemnizaciones millonarias.',
					'En Europa, el <strong>artículo 9 del RGPD</strong> clasifica la información sobre salud física y mental (agotamiento, bajas médicas, terapia, crisis personales) como categoría especial de datos personales. Alojar dichos comentarios sin cifrar en un wiki corporativo sin consentimiento específico ni auditoría de accesos infringe de lleno la normativa.'
				]
			},
			{
				heading: 'La arquitectura de dos circuitos: guía práctica para mánagers y RR. HH.',
				paragraphsHtml: [
					'Prescindir de las notas tampoco es viable: sin continuidad, los compromisos caen en el olvido en cuestión de semanas y la evaluación de desempeño semestral se convierte en un ejercicio de memoria defectuosa. La solución reside en la <strong>separación de incumbencias (Separation of Concerns)</strong>.',
					'<figure><img src="/images/blog/two-circuits-model-es.svg" alt="La arquitectura de dos circuitos: separación del espacio privado de confianza (E2EE) y el sistema oficial de registro" width="780" height="1010" loading="lazy" /><figcaption>Arquitectura de dos circuitos: espacio de confianza cifrado (E2EE) para el diálogo íntimo y registro oficial de empresa para acuerdos aprobados</figcaption></figure>',
					'<ul><li><strong>Circuito 1: El espacio de confianza (Zero-Knowledge / E2EE):</strong> Una herramienta con cifrado de extremo a extremo en el navegador, donde las claves residen únicamente en los dispositivos del mánager y del colaborador. Aquí se abordan las conversaciones vulnerables: niveles de energía reales, tensiones interpersonales, dudas sobre procesos y aspiraciones de carrera no pulidas. Ni RR. HH., ni los administradores, ni los modelos de IA corporativos tienen la capacidad matemática de leer este texto plano.</li><li><strong>Circuito 2: El sistema oficial de registro (System of Record):</strong> El HRIS corporativo, BambooHR, Lattice o el wiki de la empresa. Aquí, responsable y empleado <em>cristalizan conjuntamente</em> solo artefactos oficiales consensuados: objetivos trimestrales (OKRs), planes de desarrollo individual (PDI) y valoraciones formales.</li></ul>',
					'Los directores de RR. HH. no necesitan —ni les conviene legalmente— examinar confesiones privadas. Para velar por la salud organizativa son suficientes los <strong>metadatos</strong>: ¿Se respeta la cadencia quincenal de los 1 a 1? ¿Se producen cancelaciones reiteradas? ¿Cuál es el grado de avance de los hitos acordados? De este modo se garantiza el control del proceso sin vulnerar la intimidad.'
				]
			},
			{
				heading: 'Conclusión',
				paragraphsHtml: [
					'La confianza mutua no se impone mediante manuales de conducta; se cimienta en el respeto a los límites individuales. Cuando una organización exige a su plantilla confiar sus mayores inquietudes a plataformas dotadas de botones de exportación para administradores, cosecha silencio, conformismo pasivo y fugas inesperadas de talento estratégico.',
					'La auténtica franqueza solo florece cuando la privacidad está blindada por garantías matemáticas y una rigurosa separación de circuitos, sustituyendo las promesas de buena fe por criptografía comprobable.'
				]
			},
			{
				heading: 'Fuentes y lecturas recomendadas',
				paragraphsHtml: [
					'<ol><li><strong>Bernstein, Ethan S.</strong> (2012). <em>«The Transparency Paradox: A Role for Privacy in Organizational Learning and Operational Control»</em>. Administrative Science Quarterly, 57(2), 181–216.</li><li><strong>Bernstein, Ethan S.</strong> (2014). <a href="https://hbr.org/2014/10/the-transparency-trap" target="_blank" rel="noopener noreferrer"><em>«The Transparency Trap»</em></a>. Harvard Business Review, octubre de 2014.</li><li><strong>Edmondson, Amy C.</strong> (2018). <a href="https://amycedmondson.com/books/" target="_blank" rel="noopener noreferrer"><em>«The Fearless Organization: Creating Psychological Safety in the Workplace for Learning, Innovation, and Growth»</em></a>. John Wiley & Sons (<a href="/es/playbook/books/#the-fearless-organization">resumen en la biblioteca</a>).</li><li><strong>Grove, Andrew S.</strong> (1983). <em>«High Output Management»</em>. Random House (<a href="/es/playbook/books/#high-output-management">resumen en la biblioteca</a>).</li><li><strong>Google re:Work</strong>. <a href="https://rework.withgoogle.com/intl/en/guides/understand-team-effectiveness/" target="_blank" rel="noopener noreferrer"><em>«Project Aristotle (seguridad psicológica) y Project Oxygen (cualidades directivas)»</em></a>.</li><li><strong>Notion Help Center</strong>. <a href="https://www.notion.so/help/export-your-content" target="_blank" rel="noopener noreferrer"><em>«Exportar contenido del espacio de trabajo y gestión de páginas privadas en Enterprise»</em></a>.</li><li><strong>Slack Help Center & Discovery API</strong>. <a href="https://slack.com/help/articles/201658943-Export-your-workspace-data" target="_blank" rel="noopener noreferrer"><em>«Exportar datos del espacio de trabajo»</em></a> y <a href="https://slack.com/help/articles/360002079527-A-guide-to-Slacks-Discovery-APIs" target="_blank" rel="noopener noreferrer"><em>«A guide to Slack’s Discovery APIs para integración con DLP»</em></a>.</li><li><strong>The Sedona Conference</strong>. <a href="https://thesedonaconference.org/" target="_blank" rel="noopener noreferrer"><em>«Commentary on Legal Holds and ESI in Employment Disputes»</em></a> / <a href="https://www.law.cornell.edu/rules/frcp/rule_34" target="_blank" rel="noopener noreferrer"><em>Federal Rules of Civil Procedure (Reglas FRCP 26 y 34)</em></a>.</li><li><strong>Unión Europea (RGPD)</strong>. <a href="https://gdpr-info.eu/art-9-gdpr/" target="_blank" rel="noopener noreferrer"><em>«Reglamento General de Protección de Datos — Artículo 9 (Tratamiento de categorías especiales de datos)»</em></a>.</li></ol>'
				]
			}
		]
	}
];

