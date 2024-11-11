import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

import conn from './db/conn.js';

import Task from './models/Task.js';

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static('public'));

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
