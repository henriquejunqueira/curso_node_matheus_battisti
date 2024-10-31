const path = require('path');

const customPath = '/relatorios/henrique/relatorio1.pdf';

console.log('Caminho do arquivo: ' + path.dirname(customPath));
console.log('Nome do arquivo: ' + path.basename(customPath));
console.log('Tipo de extensão: ' + path.extname(customPath));
