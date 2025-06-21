const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer
  .prompt([
    { name: 'nome', message: 'Qual seu nome?' },
    { name: 'idade', message: 'Qual sua idade?' },
  ])
  .then((perguntas) => {
    if (!perguntas.nome || !perguntas.idade) {
      throw new Error('O nome e a idade são obrigatórios!');
    }

    console.log(
      chalk.bgYellow.black(
        `O seu nome é ${perguntas.nome} e você tem ${perguntas.idade} anos.`
      )
    );
  })
  .catch((err) => console.log(err));
