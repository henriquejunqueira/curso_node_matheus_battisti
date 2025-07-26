const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
  partialsDir: ['views/partials'],
});

// app.engine('handlebars', exphbs()); // ! forma antiga
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {
  const items = ['Item a', 'Item b', 'Item c'];

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

app.get('/blog', (req, res) => {
  const posts = [
    {
      title: 'Aprendes Node.js',
      category: 'JavaScript',
      body: 'Teste',
      comments: 4,
    },
    {
      title: 'Aprendes PHP',
      category: 'PHP',
      body: 'Teste',
      comments: 4,
    },
    {
      title: 'Aprendes Python',
      category: 'Python',
      body: 'Teste',
      comments: 4,
    },
  ];

  res.render('blog', { posts });
});

app.get('/', (req, res) => {
  const user = {
    name: 'Henrique',
    surname: 'Junqueira',
    age: 31,
  };

  const palavra = 'Teste';

  // const auth = true;
  const auth = false;

  const approved = true;
  // const approved = false;

  res.render('home', { user: user, palavra, auth, approved });
});

app.listen(3000, () => {
  console.log('App funcionando!');
});
