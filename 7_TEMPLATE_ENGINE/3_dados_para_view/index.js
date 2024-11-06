import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res, next) => {
  const user = {
    name: 'Henrique',
    surname: 'Junqueira',
    age: 30,
  };

  const palavra = 'Teste';

  // com a criação da main dentro da view/layouts, não é necessário mais o { layout: false }
  //res.render('home', { layout: false });
  res.render('home', { user: user, palavra });
});

app.listen(3000, () => {
  console.log('App funcionando!');
});
