const readline = require('readline').createInterface({
  input: process.stdin, // configuração do node para receber dados no console
  output: process.stdout, // configuração do node para enviar dados no console
});

readline.question('Qual a sua linguagem preferida? ', (language) => {
  if (language === 'Python' || language === 'python') {
    console.log('Isso nem é linguagem!');
  } else {
    console.log(`A minha linguagem preferida é: ${language}`);
  }

  readline.close();
});
