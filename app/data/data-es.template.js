const { theEndingScene, aRoom, anItem, aLockedDestination, aCondDescUsage, aCondDesc, anExpectAnswerAction, anAnswer, anUsage, aConditionalResponse, anUnlockingAction, aPickingAction, pluginExtension, aPickingCondition } = require('scure').dsl;
const { syns } = require('./syns-es');

const useGun = () => {};
const useMachine = () => {};
const lookGun = () => {};

exports.data = {
  sentences: {
    help: 'Me puedes dar las siguientes instrucciones: Mirar, Usar, Ir, Coger e Inventario. Quedan {time}. ',
    'help-no-screen': 'Me puedes dar las siguientes instrucciones: Mirar, Usar, Ir, Coger e Inventario. Quedan {time}. ',
    fallback: 'No te entiendo. Mi programación actual solo me permite mirar, usar, coger objetos; e ir a lugares. Quedan {time}. ',
    destinations: 'Desde aquí puedo ir a: {destinations}. ',
    'destination-unknown': 'No sé ir a {destination}. ',
    'remaining-time': '{minutes} minutos y {seconds} segundos',
    'ending-remaining-time': 'Quedaban {timeLeft}',
    'item-not-in-location': 'No encuentro o veo ese objeto. ',
    'item-notseen': 'No veo el objeto {name} por aquí. ',
    'item-unknown': 'No te he entendido qué quieres que me lleve. ',
    'item-pickedup': 'Ok, me llevo el objeto {name}. ',
    'item-notpickable': 'No puedo llevarme el objeto {name}. ',
    'item-alreadyinventory': 'Ya llevo el objeto {name}. ',
    'item-alreadypicked': 'Ya me llevo el objeto {name}. ',
    'use-noarg': 'Dime qué objeto u objetos quieres que use. ',
    'use-cant': 'No puedo usar el objeto {item}. ',
    'use-canttwo': 'No puedo usar los objetos {item1} y {item2} entre sí. ',
    'use-onlyonce': 'Ya utilicé ese objeto. No puedo usarlo otra vez. ',
    'use-onlyonce-two': 'Ya utilicé esos objetos. No puedo usarlos otra vez. ',
    inventory: 'Llevo los siguientes objetos encima: {items}. ',
    'inventory-nothing': 'No llevo nada encima. ',
    bye: 'Ha sido un placer trabajar contigo. Es una lástima que la humanidad esté perdida. Intentémoslo otra vez más adelante. ¡Gracias!',
    'end-timeover': 'Ya no hay tiempo, la anomalía se ha desgarrado, y nuestra existencia con ella. Lo siento. ¡Inténtalo otra vez!',
    'answer-cant': '¿Perdona? No estaba esperando una respuesta. Si me estás contestando a un código, utiliza antes el objeto en cuestión.',
    'walk-nowhere': 'Desde aquí no podemos ir a ningún sitio. ¡Busca una salida!',
  },
  init: {
    totalMinutes: 10,
    roomId: 'entrada',
    welcome: [
      '¡Hola! Soy Dron Johnson, y soy tu compañero de aventuras. Tenemos 10 minutos para salvar a la humanidad, y descubrir qué es esa anomalía. Dame instrucciones para interactuar con el entorno. ¡Vamos allá!',
    ],
  },
  rooms: [
    aRoom('entrada', 'Entrada del complejo', syns.rooms['entrada'], 'Es la entrada del complejo. Lo más destacable de este lugar es una mesa con un cajón. '),
    aRoom('sala-central', 'Sala central', syns.rooms['sala-central'], [
      aCondDesc('picked:llave-sc', 'Estás en una sala totalmente blanca. En el centro se encuentra una mesa de metal y una caja cerrada encima. Prueba a pedirme que mire la mesa.'),
      aCondDesc('!unlocked:open-caja-sc', 'Tú ahora estás en una simulación de Realidad Virtual, en una sala totalmente blanca. Estás aquí porque ha llegado un mensaje de auxilio de los equipos Rojo y Azul. Al llegar al Complejo Omega en Marte, se han llevado una terrible sorpresa, las especies han escapado y el complejo se encuentra en cuarentena. Salvarlos depende de ti. Por eso estás practicando conmigo en esta simulación. En el centro de la sala se ve una mesa de metal y una caja cerrada sobre ésta. Prueba a pedirme que mire la mesa.'),
      aCondDesc('unlocked:open-caja-sc', 'Estás en una sala totalmente blanca. En el centro se encuentra una mesa de metal y una caja cerrada encima. Prueba a pedirme que mire la mesa.'),
    ]),
    aRoom('sala-neutral', 'Sala neutral', syns.rooms['sala-neutral'], [
      aCondDesc('!picked:arma-sn', 'Esta es la Sala Neutral. Esta sala es metálica pero con una tenue luz blanca. De aquí puedes ir a las salas azul 1, rojo 1 y central. En una esquina hay un armario que indica "CAMBIADOR". Arriba colgada de unos cables ves un arma, no llegas a cogerla, quizás con algo largo...'),
      aCondDesc('picked:arma-sn', 'Esta es la Sala Neutral. Esta sala es metálica pero con una tenue luz blanca. De aquí puedes ir a las salas azul 1, rojo 1 y central. En una esquina hay un armario que indica "CAMBIADOR".'),
    ]),
    aRoom('sala-azul-1', 'Sala 1 Azul', syns.rooms['sala-azul-1'], [
      aCondDesc('!unlocked:taquilla-open-sa1', 'Es la SALA 1 AZUL. Es metálica, con una luz azul. En una pared hay una taquilla cerrada con código de acceso de 4 números y un cartel que indica "SOLO PERSONAL DE LIMPIEZA".'),
      aCondDesc('unlocked:taquilla-open-sa1', 'Es la SALA 1 AZUL. Es metálica, con una luz azul. En una pared hay una taquilla con un cartel que indica "SOLO PERSONAL DE LIMPIEZA".'),
    ]),
    aRoom('sala-azul-2', 'Sala 2 Azul', syns.rooms['sala-azul-2'], [
      aCondDesc('!unlocked:killed-roger-sa2', 'Es la SALA AZUL 2. Es una sala metálica, con una luz azul. En frente hay una puerta que pone SALA 3 AZUL. Pero entre la puerta y tú se encuentra un hombre con un traje de limpieza. Parece infectado, encadenado con muy malas pulgas, intenta morderte, pero no llega. Aunque tampoco te deja ir a la puerta de la SALA 3 AZUL. Sería un suicidio.'),
      aCondDesc('unlocked:killed-roger-sa2', 'Es la SALA AZUL 2. Es una sala metálica, con una luz azul.  El pobre Roger se encuentra tirado en el suelo.'),
    ]),
    aRoom('sala-azul-3', 'Sala 3 Azul', syns.rooms['sala-azul-3'], 'Es la SALA 3 AZUL. Es metálica, con una luz azul. Se ven unas tuberías que parece que transportan ácido. Esposado a éstas, se ve un maletín con la inscripción "personal de mantenimiento". Arriba del maletín, en la pared, pintado con sangre, se pueden ver unas letras, y en su pared opuesta, un espejo.'),
    aRoom('sala-rojo-1', 'Sala 1 Rojo', syns.rooms['sala-rojo-1'], [
      aCondDesc('!unlocked:killed-infectados-sr1', 'Es la SALA 1 ROJO. Es metálica, con una luz roja. Te encuentras una puerta en frente que dirige a la SALA 2 ROJA. En el centro de la habitación y muy juntos entre ellos, hay 5 infectados, que te bloquean el paso. En el techo, arriba en una esquina hay una placa de metal muy grande, sujetada por una cuerda. Justo a tu lado hay una máquina extraña.'),
      aCondDesc('unlocked:killed-infectados-sr1', 'Es la SALA 1 ROJO. Es metálica, con una luz roja. Yacen 5 infectados muertos en el centro de la sala, aplastados por una plancha metálica. En la pared hay una máquina extraña.'),
    ]),
    aRoom('sala-rojo-2', 'Sala 2 Rojo', syns.rooms['sala-rojo-2'], [
      aCondDesc('!unlocked:acido-sr2', 'Es la SALA 2 ROJO. Es metálica, con una luz roja. Te encuentras una puerta en frente que dirige a la SALA 3 ROJA. En el centro de la sala hay una piscina de ácido, que te impide el paso. Unas tuberías salen de ésta.'),
      aCondDesc('unlocked:acido-sr2', 'Es la SALA 2 ROJO. Es metálica, con una luz roja. Tiene una gran piscina vacía en medio.'),
    ]),
    aRoom('sala-rojo-3', 'Sala 3 Rojo', syns.rooms['sala-rojo-3'], 'Es la SALA 3 ROJA. Es metálica, con una luz roja. Solo hay un ordenador enorme en el centro de la sala.'),
  ],
  mapImage: {
    url: 'https://simomega-1debd.firebaseapp.com/map/map.jpg',
    alt: 'Mapa con: sala central, sala neutral, sala 1 rojo, sala 2 rojo, sala 3 rojo, sala 1 azul, sala 2 azul y sala 3 azul',
  },
  map: {
    'sala-central': [aLockedDestination('sala-neutral', 'central-button-pressed')],
    'sala-neutral': ['sala-central', aLockedDestination('sala-azul-1', 'traje-azul', 'No puedes ir a zonas azules si no eres del equipo azul.'), aLockedDestination('sala-rojo-1', 'traje-rojo', 'No puedes pasar por zonas rojas si no eres del equipo rojo.')],
    'sala-azul-1': ['sala-azul-2', 'sala-neutral'],
    'sala-azul-2': ['sala-azul-1', aLockedDestination('sala-azul-3', 'killed-roger-sa2', 'No puedes ir a la sala 3 azul con el hombre infectado cerrándote el paso e intentando morderte.')],
    'sala-azul-3': ['sala-azul-2'],
    'sala-rojo-1': ['sala-neutral', aLockedDestination('sala-rojo-2', 'killed-infectados-sr1', 'No podemos ir con los hombres infectados en medio de la sala.')],
    'sala-rojo-2': ['sala-rojo-1', aLockedDestination('sala-rojo-3', 'acido-sr2', 'Para llegar a la sala 3 rojo debes sortear esa piscina llena de ácido.')],
    'sala-rojo-3': ['sala-rojo-2'],
  },
  items: [
    anItem('mesa-sc', 'Mesa', syns.items['mesa-sc'], [
      aCondDesc('!picked:llave-sc', 'Es una mesa que tiene una caja encima. También veo una llave sobre ésta. Prueba a coger la llave.'),
      aCondDesc('!unlocked:open-caja-sc', 'Es una mesa que tiene una caja cerrada encima. Prueba a abrir la caja.'),
      aCondDesc('unlocked:open-caja-sc', 'Es una mesa que tiene una caja abierta encima con un botón.'),
    ], 'sala-central', false),
    anItem('caja-sc', 'Caja', syns.items['caja-sc'], 'Es una caja. Prueba a abrir la caja con la llave, usando los dos elementos entre sí.', 'sala-central', false),
    anItem('llave-sc', 'Llave', syns.items['llave-sc'], 'Es una llave. Prueba a cogerla.', 'sala-central', true, 'Eres un valioso miembro del equipo Verde: salvar a los equipos azul y rojo depende de ti. Practiquemos en esta simulación: Prueba a usar la llave con la caja para abrirla.'),
    anItem('boton-sc', 'Botón', syns.items['boton-sc'], 'Es un botón. Prueba a usarlo para pulsarlo.', 'sala-central', false),
    anItem('cables-sn', 'Cables', syns.items['cables-sn'], 'De los cables cuelga un arma. No llegas, quizás con algo largo...', 'sala-neutral', false, 'Los cables están a una altura considerable. ¿Quizás con algo largo?'),
    anItem('arma-sn', 'Arma', syns.items['arma-sn'], pluginExtension(lookGun([
      'Una pistola en el techo.',
      'Una pistola. Tiene dos balas en su interior.',
      'Una pistola. Le queda una única bala.',
    ])), 'sala-neutral', false, 'El arma está demasiado lejos'),
    anItem('cambiador-sn', 'Cambiador', syns.items['cambiador-sn'], 'Un cambiador para cambiarte de traje. Puedes usar el traje azul, el rojo o el verde. ', 'sala-neutral', false),
    anItem('traje-azul-sn', 'Traje azul', syns.items['traje-azul-sn'], 'Un traje azul.', 'sala-neutral', false, 'El traje no se puede coger. Puedes usarlo. '),
    anItem('traje-rojo-sn', 'Traje rojo', syns.items['traje-rojo-sn'], 'Un traje rojo.', 'sala-neutral', false, 'El traje no se puede coger. Puedes usarlo. '),
    anItem('traje-verde-sn', 'Traje verde', syns.items['traje-verde-sn'], 'Un traje verde.', 'sala-neutral', false, 'El traje no se puede coger. Puedes usarlo. '),
    anItem('taquilla-sa1', 'Taquilla', syns.items['taquilla-sa1'], [
      aCondDesc('!unlocked:taquilla-open-sa1', 'La taquilla está cerrada. Necesita un código de 4 cifras para abrirse.'),
      aCondDesc('!picked:escoba-sa1', 'La taquilla está abierta. Dentro hay una escoba. También se puede ver el código S1 escrito en las paredes interiores.'),
      aCondDesc('picked:escoba-sa1', 'La taquilla está abierta. Se ve el código S1 escrito en las paredes interiores.'),
    ], 'sala-azul-1', false, 'La taquilla está fija al suelo, es imposible levantarla.'),
    anItem('escoba-sa1', 'Escoba', syns.items['escoba-sa1'], [
      aCondDesc('!unlocked:taquilla-open-sa1', '¿De qué estás hablando?'),
      aCondDesc('unlocked:taquilla-open-sa1', 'Una escoba'),
    ], 'sala-azul-1', aPickingCondition('unlocked:taquilla-open-sa1', '¿Una escoba? ¿Aquí? ¿Dónde?')),
    anItem('s1-sa1', 'S1', syns.items['s1-sa1'], [
      aCondDesc('!unlocked:taquilla-open-sa1', '¿De qué estás hablando?'),
      aCondDesc('unlocked:taquilla-open-sa1', 'El código S1 está escrito dentro de la taquilla, en las paredes.'),
    ], 'sala-azul-1', false, 'El código S1 está escrito en la pared. No se puede llevar.'),
    anItem('roger-sa2', 'Hombre con muy malas pulgas', syns.items['roger-sa2'], [
      aCondDesc('!unlocked:killed-roger-sa2', 'El hombre lleva una placa identificativa en el pecho. Puedes distinguir ROGER 2431.'),
      aCondDesc('unlocked:killed-roger-sa2', 'Pobre Roger. Está tendido en el suelo. Se le ve infectado por algo, mejor no tocarlo.'),
    ], 'sala-azul-2', false, 'Mejor no tocar a Roger...'),
    anItem('tuberias-sa3', 'Tuberías', syns.items['tuberias-sa3'], 'Por el líquido verde que rebosa, creo que estas tuberías transportan ácido.', 'sala-azul-3', false, 'Mejor no tocar las tuberías'),
    anItem('maletin-sa3', 'Maletín', syns.items['maletin-sa3'], [
      aCondDesc('!picked:llavepaso-sa3', 'Puedes leer "personal de mantenimiento" escrito en él. Está cerrado. Para abrirlo necesitas un código numérico de 3 cifras.'),
      aCondDesc('picked:llavepaso-sa3', 'Puedes leer "personal de mantenimiento" escrito en él. Está abierto, y puedes ver las letras L2 escritas en la pared interna del maletín.'),
    ], 'sala-azul-3', false, 'El maletín está esposado a las tuberías. No se puede llevar.'),
    anItem('letras-sa3', 'Pared', syns.items['letras-sa3'], 'Puedes ver unas letras en la pared. Son 3 letras: S O S. ¿Significará SOCORRO o algo más?', 'sala-azul-3', false),
    anItem('espejo-sa3', 'Espejo', syns.items['espejo-sa3'], 'El espejo refleja horizontalmente las 3 letras de la pared.', 'sala-azul-3', false),
    anItem('llavepaso-sa3', 'Llave de paso', syns.items['llavepaso-sa3'], 'Es una llave de paso.', 'sala-azul-3', false),
    anItem('infectados-sr1', 'Grupo de infectados', syns.items['infectados-sr1'], [
      aCondDesc('!unlocked:killed-infectados-sr1', 'Un grupo de 5 hombres infectados inmóviles. Parece que no te han visto.'),
      aCondDesc('unlocked:killed-infectados-sr1', 'Un grupo de 5 hombres aplastados por una plancha metálica. Sobre la plancha se lee A7.'),
    ], 'sala-rojo-1', false, 'Sí, sí, inténtalo...'),
    anItem('placa-sr1', 'Placa de metal', syns.items['placa-sr1'], [
      aCondDesc('!unlocked:killed-infectados-sr1', 'La placa está colgando de una cuerda, que la mantiene sujeta.'),
      aCondDesc('unlocked:killed-infectados-sr1', 'Puedes ver el código A7 en el reverso de la placa metálica.'),
    ], 'sala-rojo-1', false, 'Es imposible llevarse la placa de metal.'),
    anItem('cuerda-sr1', 'Cuerda', syns.items['cuerda-sr1'], [
      aCondDesc('!unlocked:killed-infectados-sr1', 'La cuerda sostiene la placa.'),
      aCondDesc('unlocked:killed-infectados-sr1', 'La cuerda se ha roto por efecto del disparo y está inservible.'),
    ], 'sala-rojo-1', false, 'Es imposible llevarse la cuerda.'),
    anItem('maquina-sr1', 'Máquina', syns.items['maquina-sr1'], [
      aCondDesc('unlocked:killed-infectados-sr1', 'La máquina para mover la placa y a través de la cual mataste a los infectados.'),
      aCondDesc('unlocked:moved-placa-sr1', 'La máquina tiene una pantalla que indica "PLACA EN POSICIÓN".'),
      aCondDesc('!unlocked:killed-infectados-sr1', 'La máquina tiene una pantalla que indica "PLACA NO EN POSICIÓN".'),
    ], 'sala-rojo-1', false, 'La máquina está pegada a la pared'),
    anItem('tuberias-sr2', 'Tuberías de desagüe', syns.items['tuberias-sr2'], 'Es el desagüe de la piscina.', 'sala-rojo-2', false, 'No tocaría las tuberías con las manos...'),
    anItem('piscina-sr2', 'Piscina', syns.items['piscina-sr2'], [
      aCondDesc('!unlocked:acido-sr2', 'Es una piscina llena de ácido. Te impide pasar al otro lado de la sala.'),
      aCondDesc('unlocked:acido-sr2', 'Es una piscina vacía. En el interior de las paredes puedes ver escrito el código E5.'),
    ], 'sala-rojo-2', false),
    anItem('ordenador-sr3', 'Ordenador', syns.items['ordenador-sr3'], 'Un ordenador ocupa la estancia completamente. En letras grandes puedes leer "SOLO MI NOMBRE TE DEJARÁ MARCHAR". Parece que pide un código de 6 cifras.', 'sala-rojo-3', false),
  ],
  usages: [
    anUsage(['llave-sc', 'caja-sc'], [anUnlockingAction('La caja se abre. Tiene un botón encima. Prueba a pedirme que use el botón para pulsarlo.', 'open-caja-sc')], true),
    anUsage('caja-sc', [
      aConditionalResponse([
        aCondDescUsage(false, 'unlocked:open-caja-sc', 'La caja ya está abierta. Prueba a usar el botón.'),
        aCondDescUsage(false, '!unlocked:open-caja-sc', 'La caja está cerrada. Prueba a abrirla con una llave.'),
      ]),
    ], false),
    anUsage('boton-sc', [
      aConditionalResponse([
        aCondDescUsage(false, 'unlocked:open-caja-sc', anUnlockingAction('Al pulsar el botón se ve cómo la sala blanca empieza a tomar forma con texturas, el suelo se convierte en metálico con un gran logotipo de la OMEGA Corp en el centro. Las paredes han cambiado también, son de un material metálico. Aparece una única puerta con un cartel que indica SALA NEUTRAL. ¡Has superado el tutorial! Ahora, demuéstrame que eres capaz de superar esta simulación antes de los 30 minutos que tardaremos en llegar a Marte. Indícame que me dirija a la sala neutral.', 'central-button-pressed')),
        aCondDescUsage(false, '!unlocked:open-caja-sc', '¿De qué botón me estás hablando?'),
      ]),
    ], false),
    anUsage('taquilla-sa1', [
      aConditionalResponse([
        aCondDescUsage(false, 'unlocked:taquilla-open-sa1', 'La taquilla ya está abierta.'),
        aCondDescUsage(false, '!unlocked:taquilla-open-sa1', anExpectAnswerAction('¿Con qué código quieres abrir la taquilla?', 'taquilla-code-sa1')),
      ]),
    ], false),
    anUsage('cables-sn', ['No puedes tirar de los cables, porque están lejos.'], false),
    anUsage(['escoba-sa1', 'cables-sn'], [aPickingAction('Al tirar de los cables con la escoba, el arma cae. Coges el arma. La escoba se rompe y la desechas.', 'arma-sn')], true),
    anUsage(['arma-sn', 'roger-sa2'], [pluginExtension(useGun('roger'))], false),
    anUsage('maletin-sa3', [anExpectAnswerAction('¿Con qué código quieres abrir el maletín?', 'maletin-code-sa3')], false),
    anUsage(['llavepaso-sa3', 'tuberias-sa3'], ['Esta llave de paso no encaja en estas tuberías'], false),
    anUsage(['arma-sn', 'espejo-sa3'], [pluginExtension(useGun('espejo'))], false),
    anUsage(['arma-sn', 'tuberias-sa3'], [pluginExtension(useGun('tuberias'))], false),
    anUsage(['arma-sn', 'infectados-sr1'], [pluginExtension(useGun('infectados'))], false),
    anUsage(['arma-sn', 'placa-sr1'], [pluginExtension(useGun('placa'))], false),
    anUsage('infectados-sr1', ['Tirarse a lo loco contra el grupo de infectados sería un suicidio.'], false),
    anUsage('maquina-sr1', [pluginExtension(useMachine([
      'Al pulsar un par de botones, la placa del techo empieza a moverse, y se coloca en el centro del techo. La pantalla indica "PLANCHA EN POSICIÓN".',
      'Al pulsar un par de botones, la placa del techo empieza a moverse, y se coloca en una esquina del techo. La pantalla indica "PLANCHA NO EN POSICIÓN".',
      'Los engranajes del techo se mueven, pero no hay efecto. En la pantalla se muestran unas letras que parpadean "AVERÍA". ',
    ]))], false),
    anUsage('cuerda-sr1', ['No llegas a la cuerda.'], false),
    anUsage(['arma-sn', 'cuerda-sr1'], [pluginExtension(useGun('cuerda'))], false),
    anUsage(['llavepaso-sa3', 'tuberias-sr2'], [anUnlockingAction('Al abrir el desagüe, la piscina de ácido se vacía, y te permite pasar. En el interior de la piscina ves las letras E5.', 'acido-sr2')], true),
    anUsage('piscina-sr2', [
      aConditionalResponse([
        aCondDescUsage(false, '!unlocked:acido-sr2', 'No es buena idea meterse en el ácido.'),
        aCondDescUsage(false, 'unlocked:acido-sr2', 'Dentro de la piscina ves las letras E5.'),
      ]),
    ], false),
    anUsage('tuberias-sr2', [
      'No se aconseja tocar las tuberías con las manos.',
      'No deberías tocar las tuberías con las manos.',
      'Busca algo para manipular las tuberías.',
    ], false),
    anUsage('ordenador-sr3', [anExpectAnswerAction('¿Qué código quieres introducir en el ordenador?', 'ordenador-code-sr3')], false),

  ],
  answers: [
    anAnswer('taquilla-code-sa1', '2431', anUnlockingAction('Clic. La taquilla se abre. Ves dentro una escoba y el código S1 escrito en las paredes interiores.', 'taquilla-open-sa1'), 'Ese código no abre la taquilla.'),
    anAnswer('maletin-code-sa3', '202', aPickingAction('Clic. El maletín se abre. Ves dentro una llave de paso. Te la llevas. También ves las letras L2 inscritas en las paredes internas del maletín. ', 'llavepaso-sa3'), 'Ese código no abre el maletín.'),
    anAnswer('ordenador-code-sr3', '725117', theEndingScene('¡Código correcto, iniciando! Escuchas un ruido y tu equipo vuelve a ser verde. Se abre una puerta de salida. Mientras sales por ésta, puedes escuchar: Equipo Alpha aterrizando en Marte. Preparaos para la misión. El Complejo Omega necesita de vuestra ayuda. Con una sonrisa y cogiendo tu arma real, bajas de la nave mientras piensas: ¡Estoy preparado!\n' +
      'Enhorabuena. Has completado el entrenamiento del equipo verde. Nos vemos en Dino Rising.'), 'El ordenador responde con un pítido. Parece que no es el código correcto.'),
  ],
  commandOverwrites: [
    aCommandOverwrite(command('walk', 'anomaly'), command('use', 'anomaly')),
  ],
};
