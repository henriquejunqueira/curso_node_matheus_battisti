const minimist = require('minimist');

// módulo externo
const args = minimist(process.argv.slice(2));

// módulo interno
const soma = require('./soma').soma;

// soma(2, 2);
const a = parseInt(args['a']);
const b = parseInt(args['b']);

soma(a, b);
