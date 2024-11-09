import express from 'express';
import { engine } from 'express-handlebars';
import conn from './db/conn.js';

import User from './models/User.js';
import Address from './models/Address.js';

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

app.get('/users/create', (req, res) => {
  res.render('adduser');
});

app.post('/users/create', async (req, res) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

  if (newsletter === 'on') {
    newsletter = true;
  } else {
    newsletter = false;
  }

  console.log(req.body);

  await User.create({ name, occupation, newsletter });

  res.redirect('/');
});

app.get('/users/:id', async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ raw: true, where: { id: id } });

  res.render('userview', { user });
});

app.post('/users/delete/:id', async (req, res) => {
  const id = req.params.id;

  await User.destroy({ where: { id: id } });

  res.redirect('/');
});

app.get('/users/edit/:id', async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ raw: true, where: { id: id } });

  res.render('useredit', { user });
});

app.post('/users/update', async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

  if (newsletter === 'on') {
    newsletter = true;
  } else {
    newsletter = false;
  }

  const userData = {
    id,
    name,
    occupation,
    newsletter,
  };

  await User.update(userData, { where: { id: id } });

  res.redirect('/');
});

app.get('/', async (req, res) => {
  const users = await User.findAll({ raw: true });

  console.log(users);

  res.render('home', { users: users });
});

app.post('/address/create', async (req, res) => {
  const UserId = req.body.UserId;
  const street = req.body.UserId;
  const number = req.body.number;
  const city = req.body.city;

  const address = {
    UserId,
    street,
    number,
    city,
  };

  await Address.create(address);

  res.redirect(`/users/edit/${UserId}`);
});

// o sync mapeia e cria a tabela e logo depois é feita a conexão
conn
  .sync()
  // .sync({ force: true }) // dá um drop nas tabelas e recria (usar apenas quando necessário)
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
