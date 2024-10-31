const fs = require('fs');

// fs.stat('novoarquivo.txt', (err, stats) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log('É um arquivo? ' + stats.isFile());
//   console.log('É um diretório? ' + stats.isDirectory());
//   console.log('É um link simbólico (atalho)? ' + stats.isSymbolicLink());
//   console.log('Qual a data de criação do arquivo? ' + stats.ctime);
//   console.log('Qual o tamanho do arquivo? ' + stats.size);
// });

fs.stat('pasta', (err, stats) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('É um arquivo? ' + stats.isFile());
  console.log('É um diretório? ' + stats.isDirectory());
  console.log('É um link simbólico (atalho)? ' + stats.isSymbolicLink());
  console.log('Qual a data de criação do arquivo? ' + stats.ctime);
  console.log('Qual o tamanho do arquivo? ' + stats.size);
});
