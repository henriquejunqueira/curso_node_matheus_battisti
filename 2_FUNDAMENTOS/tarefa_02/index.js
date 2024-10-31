/*
1.Crie um novo projeto que aceite pacotes externos;
2.Instale o inquirer e o chalk;
3.Utilize o inquirer para receber o nome e a idade do usuário;
4.Apresente esta resposta com uma cor de fundo amarela e texto preto;
5.Dica: Você pode utilizar bgYellow e black!
6.Insira um tratamento para um possível erro do inquirer com o catch;
*/

import inquirer from 'inquirer';
import chalk from 'chalk';

inquirer
  .prompt([
    {
      name: 'pNome',
      message: 'Qual o seu nome?',
    },
    {
      name: 'pIdade',
      message: 'Qual a sua idade?',
    },
  ])
  .then((answer) => {
    console.log(
      chalk.bgYellow.black(
        `Seu nome é ${answer.pNome} e você tem ${answer.pIdade} anos.`
      )
    );
  })
  .catch((err) => console.log(err));
