/*
    1.Crie um projeto com Express, Handlebars e Nodemon;
    2.Crie também uma rota para uma home, que exibe alguns produtos de um array de objetos;
    3.Utilize o recurso de layout do Handlebars para a base do HTML;
    4.Adicione CSS e modifique alguns estilos a sua escolha;
    5.Os produtos precisam ter um link, que exibe as páginas individuais de
    cada um, dica: URL dinâmica do Express, aproveite o array da home;
*/
import express from 'express';
import { create } from 'express-handlebars';

const app = express();
const hbs = create({
  partialsDir: ['views/partials'],
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// Array de produtos
const products = [
  {
    id: '1',
    name: 'Notebook',
    price: '2500.00',
    description: 'Um notebook poderoso e portátil.',
  },
  {
    id: '2',
    name: 'Impressora',
    price: '1700.00',
    description: 'Impressora rápida e eficiente.',
  },
  {
    id: '3',
    name: 'Mouse',
    price: '50.00',
    description: 'Mouse ergonômico e preciso.',
  },
];

app.get('/', (req, res) => {
  res.render('home', { products });
});

app.get('/product/:id', (req, res) => {
  const product = products.find((p) => p.id === req.params.id);

  if (product) {
    res.render('product', { product });
  } else {
    res.status(404).send('Produto não encontrado!');
  }
});

app.listen(3000, () => {
  console.log('App funcionando');
});
