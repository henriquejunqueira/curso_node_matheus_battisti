const chalk = require('chalk');

// const nota = 9;
const nota = 5;

if (nota >= 7) {
  console.log(chalk.green('Parabéns! Você está aprovado!'));
} else {
  console.log(
    chalk.red.bgBlack.bold('Você precisa fazer a prova de recuperação!')
  );
}
