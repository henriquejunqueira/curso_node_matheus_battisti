import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {
  const items = ['Item A', 'Item B', 'Item C'];

  res.render('dashboard', { items });
});

app.get('/post', (req, res) => {
  const post = {
    title: 'Aprender Node.js',
    category: 'JavaScript',
    body: 'Este artigo vai te ajudar a aprender Node.js...',
    comments: 4,
  };

  res.render('blogpost', { post });
});

app.get('/', (req, res, next) => {
  const user = {
    name: 'Henrique',
    surname: 'Junqueira',
    age: 30,
  };

  const palavra = 'Teste';

  const auth = true;

  const approved = true;
  // const approved = false;

  // res.render('nome_da_view', { atributos_que_serão_impressos_na_view });
  res.render('home', { user: user, palavra, auth, approved });
});

app.listen(3000, () => {
  console.log('App funcionando!');
});
