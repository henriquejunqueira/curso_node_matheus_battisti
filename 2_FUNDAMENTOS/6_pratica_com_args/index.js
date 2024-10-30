// módulo externo
const minimist = require('minimist');

// módulo interno
const soma = require('./soma').soma;

const args = minimist(process.argv.slice(2));

// soma(2, 2);
const a = parseInt(args['a']);
const b = parseInt(args['b']);

soma(a, b);

// ! Utilização
// * node index.js --a=valor --b=valor
