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
	}
];
