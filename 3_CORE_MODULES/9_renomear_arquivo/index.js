const fs = require('fs'); // Importa o módulo FS do Node.js para manipulação de arquivos

const arqAntigo = 'arquivo.txt';
const arqNovo = 'novo.txt';

// Usa o método rename para renomear o arquivo 'arquivo.txt' para 'novoarquivo.txt'
// fs.rename('arquivo.txt', 'novoarquivo.txt', function (err) {
fs.rename(arqAntigo, arqNovo, function (err) {
  // Verifica se ocorreu um erro ao tentar renomear o arquivo
  if (err) {
    console.log(err); // Exibe o erro no console, caso exista

    return; // Encerra a execução da função em caso de erro
  }

  // Exibe a mensagem de sucesso no console caso o arquivo tenha sido renomeado com sucesso
  // console.log('Arquivo renomeado!');
  console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo}`);
});
