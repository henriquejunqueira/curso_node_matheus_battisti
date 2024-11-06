/*
1.Crie um novo projeto com Express;
2.Adicione nodemon e coloque um script chamado serve para rodar o projeto na porta 5000;
3.Crie duas páginas da sua escolha;
4.Adicione CSS as páginas, mude a cor de fundo e a cor da fonte, pelo menos;
5.Separe as rotas no recurso de Router do Express;
*/

const express = require('express');
const app = express();
const port = 5000;

const path = require('path');

const products = require('./products');
const users = require('./users');

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static('public'));

const basePath = path.join(__dirname, 'templates');

app.use('/products', products);
app.use('/users', users);

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
