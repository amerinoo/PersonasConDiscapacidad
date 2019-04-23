const synsEntrada = ['entrada del complejo', 'entrada principal', 'la entrada', 'entrada'];
const synsLab = ['laboratorio', 'laboratorio', 'lab', 'centro de investigación', 'lugar laboratorio', 'sitio de laboratorio', 'habitación laboratorio', 'otro laboratorio', 'otro lado', 'otra dimensión', 'dimensión'];
const synsCom = ['sala de comunicaciones', 'centro de comunicaciones', 'habitación de comunicaciones', 'lugar de comunicaciones', 'comunicaciones'];
const synsAnomalia = ['anomalía', 'brecha', 'grieta', 'grieta de espacio tiempo', 'grieta de espaciotiempo', 'brecha de espacio tiempo', 'anomalía de espacio tiempo', 'grieta verde', 'ana maría', 'la maría', 'gran anomalía del espacio-tiempo'];

const syns = {
  rooms: {
    'entrada': synsEntrada,
    'laboratorio': synsLab,
    'comunicaciones': synsCom,
    'entrada-other': synsEntrada,
    'laboratorio-other': synsLab,
    'comunicaciones-other': synsCom,
  },
  items: {
    'mesa-e1': ['mesa', 'mesa principal', 'mesa de la entrada', 'mesilla', 'mesilla de la entrada'],
    'llave-e2': ['llave', 'llave encima de la mesa'],
    'cajon-e1': ['cajón', 'cajonera', 'cajón abierto', 'cajón cerrado'],
    'espejo-e1': ['espejo', 'espejito', 'pequeño espejo', 'pequeño espejito'],
    'anomalia-l1': synsAnomalia,
    'anomalia-l2': synsAnomalia,
    'laser-l2': ['láser', 'aparato', 'rayo de luz', 'rayo'],
    'mesa-e2': ['mesa', 'mesa principal', 'mesa de la entrada', 'mesilla', 'mesilla de la entrada'],
    'caja-e2': ['caja', 'puzle', 'puzzle', 'juego', 'mastermind', 'teclado', 'juguete', 'teclado', 'teclado de la caja'],
    'cajon-e2': ['cajón', 'cajonera', 'cajón abierto'],
    'papel-e2': ['papel', 'escrito', 'papel escrito por niña', 'hoja de papel', 'hoja'],
    'linterna-e1': ['linterna azul', 'linterna', 'luz azul', 'azul'],
    'estanteria-l2': ['estantería', 'librería'],
    'libro-l2': ['libros', 'diario', 'libros', 'diarios', 'diario de laboratorio'],
    'conversaciones-c2': ['conversaciones', 'ruidos', 'grabaciones', 'grabación'],
    'ordenador-c2': ['ordenador', 'computador', 'ordenadora', 'computadora', 'letras', 'números', 'pantalla', 'número de canal', 'canal', 'gran ordenador'],
    'ordenador-c1': ['ordenador', 'computador', 'ordenadora', 'computadora', 'pantalla', 'número de canal', 'canal', 'gran ordenador'],
    'grabacion-c1': ['grabaciones', 'grabación', 'conversaciones', 'conversacion', 'gente hablando', 'palabras'],
  },
};

exports.syns = syns;
