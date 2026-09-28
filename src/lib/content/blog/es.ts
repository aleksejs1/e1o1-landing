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
	}
];
