const url = require('url');
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira';
const parseUrl = new url.URL(address);

console.log('Host: ' + parseUrl.host);
console.log('Pathname: ' + parseUrl.pathname);
console.log('Search: ' + parseUrl.search);
console.log('Search Params: ' + parseUrl.searchParams);
console.log('Search Params Get: ' + parseUrl.searchParams.get('produtos'));
