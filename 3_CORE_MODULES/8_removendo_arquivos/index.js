const fs = require('fs'); // Importa o módulo FS do Node.js para manipulação de arquivos

// Usa o método unlink para remover o arquivo 'arquivo.txt'
fs.unlink('arquivo.txt', function (err) {
  // Verifica se ocorreu um erro ao tentar remover o arquivo
  if (err) {
    console.log(err); // Exibe o erro no console, caso exista
    return; // Encerra a execução da função em caso de erro
  }

  // Exibe a mensagem de sucesso no console caso o arquivo tenha sido removido com sucesso
  console.log('Arquivo removido!');
});
