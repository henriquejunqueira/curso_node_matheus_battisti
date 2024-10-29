const meuModulo = require('./meu_modulo'); // * importa o modulo (não precisa da extensão)
const soma = meuModulo.soma; // * encapsula o método sem invocá-lo (sem colocar parênteses)

// * invoca a função que está encapsulada
soma(2, 3);
soma(5, 10);

// ? posso fazer assim também, mas é desnecessário
// meuModulo.soma(2, 10);
