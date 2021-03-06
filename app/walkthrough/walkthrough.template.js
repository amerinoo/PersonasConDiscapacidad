const c = require('scure-dialogflow').sdk.dsl.aCommand;
const { runWalkthrough } = require('scure-dialogflow').sdk;
const { data } = require('../data/data-es');

const commands = [
  c('_welcome', ''),
  c('look', ''),
  c('walk', ''),
  c('look', 'mesa'),
  c('look', 'cajón'),
  c('walk', 'sala neutral'),
  c('look', 'mesa'),
  c('look', 'llave'),
  c('pickup', 'llave'),
  c('use', 'caja'),
  c('use', ['llave', 'caja']),
  c('look', 'mesa'),
  c('use', 'caja'),
  c('use', 'botón'),
  c('walk', 'sala neutral'),
  c('walk', ''),
  c('look', 'cables'),
  c('pickup', 'pistola'),
  c('look', 'pistola'),
  c('walk', 'sala azul 1'),
  c('walk', 'sala rojo 1'),
  c('look', 'cambiador'),
  c('pickup', 'traje azul'),
  c('use', 'traje azul'),
  c('walk', 'sala 1 azul'),
  c('look', 'taquilla cerrada'),
  c('walk', 'sala 2 azul'),
  c('walk', 'azul 3'),
  c('look', 'hombre'),
  c('walk', 'sala 1 azul'),
  c('look', 'taquilla'),
  c('use', 'taquilla'),
  c('answer', '', '1234'),
  c('use', 'taquilla'),
  c('answer', '', '2431'),
  c('look', 'taquilla'),
  c('look', 'sala'),
  c('look', 'escoba'),
  c('pickup', 'escoba'),
  c('look', 'taquilla'),
  c('look', 'S1'),
  c('walk', 'sala neutral'),
  c('use', 'cables'),
  c('use', ['cables', 'escoba']),
  c('look', 'arma'),
  c('walk', 'azul 1'),
  c('walk', 'azul 2'),
  c('use', ['arma', 'hombre']),
  c('use', ['arma', 'hombre']),
  c('walk', 'azul 1'),
  c('walk', 'azul 2'),
  c('walk', 'azul 3'),
  c('look', 'tuberias'),
  c('look', 'pared'),
  c('look', 'espejo'),
  c('look', 'maletin'),
  c('use', 'maletin'),
  c('answer', '', '202'),
  c('look', 'maletin'),
  c('use', ['tuberías', 'llave']),
  c('use', ['espejo', 'arma']),
  c('use', ['tuberías', 'arma']),
  c('walk', 'azul 2'),
  c('walk', 'azul 1'),
  c('walk', 'sala neural'),
  c('walk', 'sala rojo 1'),
  c('use', 'rojo'),
  c('walk', 'sala rojo 1'),
  c('look', 'los infectados'),
  c('use', 'infectados'),
  c('use', ['arma', 'infectados']),
  c('use', ['arma', 'placa']),
  c('look', 'máquina'),
  c('look', 'cuerda'),
  c('use', 'cuerda'),
  c('use', ['arma', 'cuerda']),
  c('use', 'máquina'),
  c('use', ['arma', 'cuerda']),
  c('use', 'máquina'),
  c('look', 'placa'),
  c('look', ''),
  c('walk', 'sala 2 rojo'),
  c('walk', 'sala 3 rojo'),
  c('use', 'piscina'),
  c('look', 'piscina'),
  c('use', 'tuberías'),
  c('look', 'tuberías'),
  c('use', ['llave', 'tuberías']),
  c('look', 'piscina'),
  c('walk', 'sala 3 rojo'),
  c('look', 'ordenador'),
  c('use', 'ordenador'),
  c('answer', '', 'wrong'),
  c('use', 'ordenador'),
  c('answer', '', '725117'),
];

runWalkthrough(data, commands);

