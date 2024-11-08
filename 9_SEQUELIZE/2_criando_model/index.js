import express from 'express';
import { engine } from 'express-handlebars';
import conn from './db/conn.js';

import User from './models/User.js';

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

// o sync mapeia e cria a tabela e logo depois é feita a conexão
conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
