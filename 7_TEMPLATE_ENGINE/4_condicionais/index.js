import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

app.get('/', (req, res, next) => {
  const user = {
    name: 'Henrique',
    surname: 'Junqueira',
    age: 30,
  };

  const palavra = 'Teste';

  // const auth = true;
  const auth = false;

  res.render('home', { user: user, palavra, auth });
});

app.listen(3000, () => {
  console.log('App funcionando!');
});
