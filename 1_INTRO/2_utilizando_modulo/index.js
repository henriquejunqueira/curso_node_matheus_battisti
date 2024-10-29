const fs = require('fs'); // importa o módulo fs (file system)

// lê os dados do arquivo (fs.readFile('nomedoarquivo', 'formatacao', (erros, dados) => {})
fs.readFile('arquivo.txt', 'utf-8', (err, data) => {
  // se existir algum erro
  if (err) {
    console.log(err); // exibe o erro no console
    return; // sai da aplicação
  }

  console.log(data); // exibe os dados do arquivo se não existir erros
});
