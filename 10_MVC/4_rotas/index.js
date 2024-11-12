import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

import conn from './db/conn.js';

import Task from './models/Task.js';

import tasksRoutes from './routes/tasksRoutes.js';

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static('public'));

app.use('/tasks', tasksRoutes);

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
