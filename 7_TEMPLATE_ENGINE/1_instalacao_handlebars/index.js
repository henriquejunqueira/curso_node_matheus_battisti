import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res, next) => {
  res.render('home', { layout: false });
});

app.listen(3000, () => {
  console.log('App funcionando!');
});
