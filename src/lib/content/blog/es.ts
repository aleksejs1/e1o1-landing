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
	}
];
