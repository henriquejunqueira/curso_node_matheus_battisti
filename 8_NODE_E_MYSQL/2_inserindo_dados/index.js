import express from 'express';
import { engine } from 'express-handlebars';
import mysql from 'mysql';

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

app.post('/books/insertbook', (req, res) => {
  const title = req.body.title;
  const pageqty = req.body.pageqty;

  const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`;

  conn.query(sql, function (err) {
    if (err) {
      console.log(err);
    }

    res.redirect('/');
  });
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

  app.listen(3000, () => {
    const port = 3000;
    console.log(`Conectado ao MySQL e app rodando na porta ${port}...`);
  });
});
