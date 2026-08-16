import type { LandingContent } from './types';

export const es: LandingContent = {
	meta: {
		title: 'encrypted1on1 — Reuniones 1 a 1 privadas. Demostrablemente privadas.',
		description:
			'Una plataforma de código abierto, autoalojada y cifrada de extremo a extremo para reuniones estructuradas 1 a 1 entre responsable y empleado. Ni siquiera quienes administran el servidor pueden leer lo que se escribe.'
	},

	skipToContent: 'Saltar al contenido',

	hero: {
		headline: 'Reuniones 1 a 1 privadas. Demostrablemente privadas.',
		subhead:
			'encrypted1on1 es una plataforma de código abierto y autoalojada para reuniones estructuradas 1 a 1 entre responsable y empleado, cifrada de extremo a extremo, de modo que ni siquiera quienes administran el servidor pueden leer lo que se escribe. No es una promesa de política de privacidad. Es un hecho matemático.',
		ctaTryDemo: 'Probar la demo en vivo',
		ctaGetStarted: 'Comenzar',
		ctaGithub: 'Ver en GitHub',
		ctaDocs: 'Leer la documentación',
		trustBadges: [
			'Código abierto (AGPLv3)',
			'Autoalojado',
			'Cifrado de extremo a extremo',
			'Sin dependencia de proveedor'
		],
		highlights: [
			{
				icon: '🔒',
				title: 'Cifrado de conocimiento cero',
				body: 'El contenido se cifra directamente en tu navegador. Ni siquiera un administrador con acceso total al servidor puede leerlo.'
			},
			{
				icon: '🎯',
				title: 'Objetivos que se trasladan entre ciclos',
				body: 'Se fijan una vez y se siguen automáticamente en cada ciclo siguiente: nada se pierde entre reuniones.'
			},
			{
				icon: '📊',
				title: 'Informe de evaluación en un clic',
				body: 'Un informe para cualquier rango de fechas, generado del lado del cliente a partir de meses de reuniones 1 a 1.'
			},
			{
				icon: '🚀',
				title: 'Autoalojado, gratis para siempre',
				body: 'Un solo contenedor Docker. Sin coste por usuario, sin dependencia de proveedor, en marcha en minutos.'
			}
		],
		screenshotAlt:
			'Una reunión 1 a 1 real de encrypted1on1: estado de ánimo y sensaciones respondidos, un hilo de comentarios abierto, y un icono de candado que marca este lado como cifrado de extremo a extremo.'
	},

	origin: {
		heading: 'Por qué lo creamos',
		paragraphsHtml: [
			'No nos propusimos crear otra herramienta SaaS más. Empezamos como clientes.',
			'Nuestra organización gestionaba su proceso de reuniones 1 a 1 con una herramienta de terceros, uno de los muchos productos bien diseñados y bien intencionados que existen en este espacio. Cumplía su función. Entonces, como suele ocurrir con muchos proveedores pequeños, anunció su cierre.',
			'Eso es normal. Las startups cierran. Lo que no fue normal fue lo que nos hizo darnos cuenta: nunca nos habíamos preguntado en serio qué <em>significa</em> el cierre de un proveedor para el contenido de una reunión 1 a 1. Preocupaciones de desempeño compartidas en confianza. Notas privadas de un responsable sobre la trayectoria profesional de un colaborador directo. Conversaciones sobre compensación. Circunstancias personales que un empleado reveló esperando que quedaran solo entre dos personas.',
			'Nada de ese contenido debería ser visible para nadie más allá de los dos participantes: ni su responsable de nivel superior, ni Recursos Humanos por defecto, ni TI, y, nos dimos cuenta con cierta incomodidad, en realidad tampoco <em>el propio proveedor</em>, aunque técnicamente el proveedor siempre pudiera verlo. Un cierre es exactamente el momento en que las prácticas de manejo de datos de una empresa se ponen a prueba con más dureza: personal de soporte haciendo exportaciones, un comprador realizando la debida diligencia técnica, un equipo reducido cerrando todo bajo presión de plazos. No teníamos ningún motivo para pensar que fuera a pasar algo malo con nuestros datos en concreto. Pero tampoco teníamos forma de <em>saber</em> que no pasaría, porque todo el modelo se basaba en «confía en nosotros», y «nosotros» éramos una empresa que estaba cerrando en ese mismo momento.',
			'Esa es la brecha que decidimos cerrar de verdad, no solo para nuestra propia organización, sino como algo que cualquiera en la misma situación pudiera verificar por sí mismo en lugar de aceptarlo por fe. Si una plataforma de reuniones 1 a 1 va a guardar algunas de las conversaciones más sensibles de una empresa, «prometemos no mirar» no es una garantía suficientemente sólida. La única garantía suficientemente sólida es aquella en la que mirar <em>no es posible</em>: donde el operador, el equipo de TI, la empresa que aloja el sistema, e incluso un compromiso total del servidor, no obtienen más que texto cifrado. Eso no es una política. Eso es cifrado de extremo a extremo, hecho correctamente, con el código abierto para que cualquiera pueda comprobar que esa afirmación es realmente cierta.',
			'encrypted1on1 es el resultado de todo eso.'
		]
	},

	methodology: {
		heading: 'La reunión de mayor impacto en la agenda de un responsable',
		intro:
			'Las reuniones 1 a 1 regulares no son un ritual de gestión agradable pero prescindible: son una de las palancas mejor respaldadas por evidencia que tiene una organización para la retención, el compromiso y la detección temprana de problemas.',
		points: [
			{
				html: '<strong>Andy Grove</strong>, en <em>High Output Management</em> (1983) —el libro que definió de hecho la práctica moderna de gestión en tecnología—, sostenía que las reuniones individuales de un responsable están entre las actividades de mayor impacto a su disposición, precisamente porque es ahí donde obtiene la información necesaria para actuar antes de que un problema se haga visible en cualquier otro lugar.'
			},
			{
				html: '<strong>Ben Horowitz</strong>, en <em>The Hard Thing About Hard Things</em>, construye directamente sobre el marco de Grove y llega al mismo punto desde el otro lado: una reunión 1 a 1 es <em>la reunión del empleado</em>, no el turno de actualización de estado del responsable; todo su valor está en sacar a la luz lo que de otro modo no se diría.'
			},
			{
				html: 'El <strong>Proyecto Oxygen de Google</strong> —la investigación interna que analizó más de 10.000 observaciones a lo largo de más de 100 variables para averiguar qué distingue realmente a los responsables excelentes de los promedio— encontró que celebrar reuniones 1 a 1 regulares, y hacerlo bien (el empleado marca la agenda, con foco en el desarrollo y el bienestar, no solo en el estado de las tareas), fue uno de los comportamientos identificados con mayor peso. La experiencia técnica, cabe destacar, quedó en último lugar de los ocho comportamientos identificados. (<a href="https://rework.withgoogle.com/intl/en/guides/following-the-data-the-research-behind-great-managers" target="_blank" rel="noopener noreferrer">Google re:Work</a>)'
			},
			{
				html: 'La investigación de <strong>Gallup</strong> ofrece el argumento de valor de negocio más contundente: los empleados cuyos responsables mantienen reuniones regulares con ellos tienen <strong>casi tres veces más probabilidades de estar comprometidos</strong> que aquellos cuyos responsables no lo hacen. Y los responsables explican el <strong>70% de la varianza</strong> en el compromiso a nivel de equipo, lo que significa que la calidad de la relación 1 a 1 no es un factor blando, sino el impulsor más controlable del compromiso que tiene una organización. (<a href="https://www.gallup.com/workplace/236570/employees-lot-managers.aspx" target="_blank" rel="noopener noreferrer">Gallup</a>, <a href="https://news.gallup.com/businessjournal/182792/managers-account-variance-employee-engagement.aspx" target="_blank" rel="noopener noreferrer">Gallup Business Journal</a>)'
			},
			{
				html: '<strong>Julie Zhuo</strong> (<em>The Making of a Manager</em>) y <strong>Camille Fournier</strong> (<em>The Manager’s Path</em>) —dos de los libros de gestión modernos más citados, ambas escritas por antiguas líderes de organizaciones de ingeniería (Facebook, Rent the Runway)— llegan de forma independiente a la misma conclusión: la reunión 1 a 1 es el mecanismo principal a través del cual un responsable realmente hace su trabajo, no una reunión que compite con el «trabajo de verdad».'
			}
		],
		closingHtml:
			'El patrón que se repite en toda esta investigación es consistente: el valor no está en <em>tener reuniones</em>. Está en tenerlas <strong>de forma regular, estructurada y con continuidad</strong>, haciendo seguimiento de lo que se dijo la última vez, de los compromisos adquiridos, de qué objetivos siguen abiertos. Esa continuidad es exactamente lo que se pierde en el momento en que las reuniones 1 a 1 viven en documentos dispersos, en la memoria o en la herramienta que estuviera abierta esa semana.'
	},

	comparison: {
		heading: 'Un documento compartido no es un sistema',
		intro:
			'A la mayoría de los equipos no les falta un lugar donde escribir. Google Docs, Notion, una carpeta compartida: cualquiera de estos puede técnicamente contener notas de reuniones 1 a 1. Ese es exactamente el problema: contienen notas, no un proceso.',
		points: [
			{
				title: 'Sin estructura.',
				body: 'Un documento en blanco no tiene memoria de lo que debe cubrir una buena reunión 1 a 1. Estado de ánimo, carga de trabajo, logros, bloqueos, retroalimentación: cada responsable, o bien lo reinventa desde cero, o, más frecuentemente, omite la mitad bajo presión de tiempo.'
			},
			{
				title: 'Sin continuidad.',
				body: 'Los objetivos fijados hace tres meses viven en un documento de hace tres meses, si es que alguien puede encontrarlo. No existe un vínculo automático entre los compromisos de este ciclo y el seguimiento del siguiente.'
			},
			{
				title: 'Sin cadencia.',
				body: 'Nada recuerda a nadie que se acerca una reunión 1 a 1, ni que una de las partes aún no ha completado su parte. El proceso funciona enteramente sobre la disciplina individual, precisamente por eso deja de funcionar en silencio en cuanto alguien se llena de trabajo.'
			},
			{
				title: 'Sin insumos estructurados para la evaluación de desempeño.',
				body: 'Cuando llega la temporada de evaluaciones, «volver a leer seis meses de documentos de reuniones 1 a 1» es el flujo de trabajo real en la mayoría de las empresas. No existe una vista agregada de logros, crecimiento o progreso de objetivos a lo largo de todo un periodo de evaluación.'
			},
			{
				title: 'Sin un modelo real de privacidad.',
				body: 'El control de acceso de un documento compartido es lo que permitan los ajustes de uso compartido de la plataforma, y resulta genuinamente legible para el operador de la plataforma, sin excepción. Esa es una garantía distinta, y más débil, que el cifrado de extremo a extremo, sin importar cómo se configuren los permisos de uso compartido.'
			}
		],
		closingHtml:
			'encrypted1on1 sustituye «un documento, si te acuerdas» por un sistema: un conjunto de preguntas fijo y cuidadosamente diseñado para ambas partes, periodicidad automática y correos de recordatorio, objetivos que persisten y se trasladan entre ciclos con su historial de progreso completo, y un informe de evaluación de desempeño que agrega logros y progreso de objetivos en cualquier rango de fechas, generado del lado del cliente, a partir de datos que el servidor nunca tuvo la capacidad de leer.'
	},

	privacy: {
		heading: 'Tus datos. Tu infraestructura. Privacidad verificable.',
		intro:
			'Para un comprador corporativo, «confía en nosotros las conversaciones más sensibles de tus empleados» es difícil de aceptar viniendo de cualquier proveedor, y así debería ser. encrypted1on1 está construido para que esa frase nunca tenga que ser el argumento de venta.',
		points: [
			{
				title: 'Autoalojado.',
				body: 'Toda la plataforma se ejecuta sobre infraestructura que controla tu empresa: tus servidores, tu cuenta en la nube, tu política de copias de seguridad. Ningún dato tiene por qué salir del perímetro de tu organización a menos que elijas la opción en la nube.'
			},
			{
				title: 'Código abierto (AGPLv3).',
				body: 'Cada línea de código, incluida la criptografía, es pública y auditable. Tú, o un equipo de seguridad independiente que contrates, podéis verificar directamente las afirmaciones sobre privacidad en lugar de fiaros de la palabra de un proveedor. Ese es un modelo de confianza sustancialmente distinto al de un producto SaaS de código cerrado que te pide confiar en un código fuente que nunca has leído y en sus términos de servicio.'
			},
			{
				title: 'Cifrado de extremo a extremo, en concreto.',
				body: 'El contenido de las reuniones 1 a 1 —respuestas, estados de ánimo, retroalimentación, comentarios, resultados de la reunión, progreso de objetivos— se cifra en el navegador antes de que llegue al servidor, con claves derivadas de la propia contraseña de cada usuario y que nunca se transmiten. El servidor almacena únicamente texto cifrado. No puede descifrarlo: ni el operador, ni TI, ni nosotros, ni un atacante que comprometa la base de datos. La única excepción deliberada y acotada: el título, la descripción y el estado de un objetivo se almacenan en texto plano, específicamente para que los objetivos puedan servir de base a la alineación a nivel de empresa y a informes ligeros; todo lo demás en una reunión 1 a 1 permanece privado para los dos participantes, sin excepción.'
			}
		],
		resolutionHtml:
			'Esta es la solución al problema exacto planteado en la historia de origen anterior: que un proveedor cierre, sea adquirido o tenga un empleado con malas intenciones ya no afecta a la confidencialidad de lo que ya se ha escrito, porque nunca existió un momento en el que el proveedor —cualquier proveedor, incluidos nosotros— pudiera leerlo.',
		faq: {
			question:
				'«¿Qué pasa con las retenciones legales, las investigaciones de acoso o las solicitudes de cumplimiento normativo?»',
			answer1Html:
				'<strong>No, y es deliberado, porque la alternativa anula todo el propósito.</strong> Si una empresa pudiera leer el contenido de las reuniones 1 a 1, las conversaciones que más necesitan ocurrir con honestidad simplemente dejarían de ocurrir. El escenario que realmente debería preocupar a los equipos de cumplimiento normativo: un empleado necesita reportar una conducta preocupante <em>de su propio responsable</em>, o de alguien por encima de él. Si esa persona —o cualquiera en su cadena de mando— pudiera leer las reuniones 1 a 1, ¿llegaría ese informe a escribirse alguna vez con honestidad? La confidencialidad no está en tensión con detectar problemas reales. Es la condición previa para que esos problemas salgan a la luz.',
			answer2Html:
				'<strong>Y en la práctica, esto no es un callejón sin salida.</strong> Cada reunión 1 a 1 puede ser leída exactamente por sus dos participantes, de forma independiente, nunca mediante una clave compartida única de la empresa. Si una investigación involucra a uno de los participantes, el contenido sigue estando disponible a través del otro, de la misma forma que lo estaría si esa misma conversación hubiera ocurrido en papel o en un cuaderno personal: un proceso legal puede obligar a una <em>persona</em> a entregar lo que tiene. Simplemente nunca fue algo que una <em>plataforma</em> pudiera entregar por sí sola, que es precisamente el objetivo.'
		}
	},

	pricing: {
		heading: 'Dos formas de usarlo',
		whyAffordableHeading: '¿Por qué es tan asequible?',
		whyAffordableBodyHtml:
			'<p>No perseguimos un crecimiento a escala de capital riesgo: no necesitamos que esto sea un gran negocio, solo uno sostenible. Los precios reflejan lo que realmente cuesta operar una infraestructura fiable, no lo que el software empresarial suele cobrar para financiar un equipo de ventas, un presupuesto de marketing o el retorno esperado por inversores.</p>' +
			'<p>Y como toda la plataforma también es gratuita para autoalojar, en realidad nunca estás pagando por el software en sí, solo, si así lo eliges, porque lo operemos por ti, o por una relación de soporte que consideres valiosa. Si dejáramos de operar mañana, las instalaciones autoalojadas seguirían funcionando exactamente igual que hoy, sin verse afectadas; eso no es una promesa, es simplemente cómo funcionan el código abierto y el autoalojamiento. (Y no es casualidad: es exactamente el problema que este proyecto existe para resolver; ver <a href="#origin">Por qué lo creamos</a>.)</p>',
		quoteHtml:
			'Una reunión 1 a 1 con sentido es dos personas dedicando tiempo real y concentrado al crecimiento de la otra; ese es el coste real de hacerlo bien, y ninguna herramienta cambia esa cuenta. Lo único que añadimos es asegurarnos de que ese tiempo no se pierda reconstruyendo contexto desde cero, no quede en riesgo en cuanto cambie el modelo de negocio de un proveedor, y no sea visible para nadie más que las dos personas presentes. Eso no debería costar más que un cuaderno.',
		selfHosted: {
			heading: 'Autoalojado',
			table: {
				columns: ['Free', 'Premium'],
				rows: [
					{ label: 'Precio', values: ['0 € para siempre', 'Contáctanos'] },
					{ label: 'La plataforma completa', values: ['✓', '✓'] },
					{ label: 'Soporte de la comunidad', values: ['✓', '✓'] },
					{ label: 'Soporte prioritario*', values: ['', '✓'] },
					{ label: 'Gestión prioritaria de solicitudes de funciones*', values: ['', '✓'] },
					{ label: 'SSO', values: ['', 'Próximamente'] }
				]
			},
			note: 'El núcleo autoalojado es, y siempre seguirá siendo, completamente gratuito: sin un nivel «lite» recortado, sin límites artificiales. Premium es un complemento opcional para organizaciones que quieren una relación de soporte y voz en la hoja de ruta, no una restricción sobre el propio producto.'
		},
		cloud: {
			heading: 'Nube',
			intro: '¿No quieres operar tu propia infraestructura? Nosotros la alojamos por ti.',
			table: {
				columns: ['Free (próximamente)', 'Plus (próximamente)', 'Enterprise'],
				rows: [
					{ label: 'Precio', values: ['0 €', '20 € / mes', 'Contactar con ventas'] },
					{ label: 'Usuarios', values: ['Hasta 100', 'Hasta 1000', 'Ilimitados'] },
					{ label: 'Retención de historial', values: ['3 meses', 'Ilimitada', 'Ilimitada'] },
					{ label: 'Soporte prioritario*', values: ['', '✓', '✓'] },
					{ label: 'Gestión prioritaria de solicitudes de funciones*', values: ['', '', '✓'] },
					{ label: 'SSO', values: ['', '', 'Próximamente'] }
				]
			},
			note: 'La nube funciona sobre exactamente el mismo código abierto que la versión autoalojada: el mismo cifrado de extremo a extremo, las mismas garantías de privacidad. La única diferencia es quién opera el servidor.'
		},
		footnoteHtml:
			'*Soporte prioritario significa que los correos y solicitudes de los usuarios de pago se atienden primero, no que una solución sea instantánea ni esté garantizada por ningún SLA; este es un proyecto de código abierto pequeño y honesto, no un centro de atención telefónica. Un error de pago aún puede tardar semanas. Simplemente se resolverá antes que la cola del nivel gratuito, no en su lugar.',
		contactUs: 'Contáctanos',
		contactSales: 'Contactar con ventas'
	},

	footer: {
		productHeading: 'Producto',
		demoLabel: 'Demo en vivo',
		pricingLabel: 'Precios',
		docsLabel: 'Documentación',
		githubLabel: 'GitHub',
		legalHeading: 'Legal',
		termsLabel: 'Términos de servicio',
		privacyLabel: 'Política de privacidad',
		languageHeading: 'Idioma',
		smallPrint: 'encrypted1on1 es software de código abierto licenciado bajo AGPLv3.'
	}
};
