const chalk = require('chalk');

// const nota = 9;
const nota = 5;

// console.log(chalk.green('Parabéns! Você está aprovado!'));
// console.log(chalk.green.bold('Parabéns! Você está aprovado!'));

if (nota >= 7) {
  console.log(chalk.green('Parabéns! Você está aprovado!'));
} else {
  console.log(
    chalk.bgRedBright.black.bold('Você precisa fazer a prova de recuperação!')
  );
}
