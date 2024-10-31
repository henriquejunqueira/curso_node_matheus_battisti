const url = require('url'); // Importa o módulo URL do Node.js para manipulação de URLs

// Define um endereço URL para ser analisado
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira';

// Cria um objeto URL a partir da string fornecida
const parseUrl = new url.URL(address);

// Exibe o host da URL, que inclui domínio e, opcionalmente, porta
console.log('Host: ' + parseUrl.host);

// Exibe o caminho (path) da URL, que representa o local no servidor
console.log('Pathname: ' + parseUrl.pathname);

// Exibe a parte da pesquisa da URL, incluindo o '?' e os parâmetros
console.log('Search: ' + parseUrl.search);

// Exibe os parâmetros de pesquisa da URL como um objeto URLSearchParams
console.log('Search Params: ' + parseUrl.searchParams);

// Obtém o valor do parâmetro 'produtos' e exibe no console
console.log('Search Params Get: ' + parseUrl.searchParams.get('produtos'));
