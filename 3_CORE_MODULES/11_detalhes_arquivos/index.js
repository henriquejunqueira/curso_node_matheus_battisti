const fs = require('fs');

// fs.stat('novoarquivo.txt', (err, stats) => {
fs.stat('pasta', (err, stats) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(stats.isFile()); // verifica se é um arquivo
  console.log(stats.isDirectory()); // verifica se é um diretório
  console.log(stats.isSymbolicLink()); // verifica se é um atalho (link simbólico)
  console.log(stats.ctime); // verifica a data de criação
  console.log(stats.size); // verifica o tamanho
});
