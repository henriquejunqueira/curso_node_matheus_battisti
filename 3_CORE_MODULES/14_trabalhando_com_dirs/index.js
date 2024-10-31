const fs = require('fs');

// Verifica se não existe um diretório com o nome "minhapasta"
if (!fs.existsSync('./minhapasta')) {
  console.log('Não existe!');

  fs.mkdirSync('minhapasta'); // Se não existe, a pasta é criada
} else if (fs.existsSync('./minhapasta')) {
  console.log('existe!');
}
