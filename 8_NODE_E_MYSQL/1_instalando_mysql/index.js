import express from 'express';
import { engine, create } from 'express-handlebars';
import mysql from 'mysql';

const app = express();
const port = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'henrique',
  password: 'slipknot1994',
  database: 'db_nodemysql',
});

conn.connect(function (err) {
  if (err) {
    console.log(err);
  }

  app.listen(port, () => {
    console.log(`Conectado ao MySQL e app rodando na porta ${port}...`);
  });
});
