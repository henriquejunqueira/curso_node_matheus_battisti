const express = require('express');
const { engine } = require('express-handlebars');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('express-flash');

const app = express();

const conn = require('./db/conn');

// define a template engine como o handlebars
app.engine('handlebars', engine());
app.set('view engine');

// recebe resposta do body
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

// session middleware

// onde o express vai salvar as sessões
app.use(
  session({
    name: 'session',
    secret: 'nosso_secret',
    resave: false, // caiu a sessão, o usuário desconecta
    saveUninitialized: false,
    store: new FileStore({
      logFn: function () {},
      path: require('path').join(require('os').tmpdir(), 'sessions'), // define a pasta
    }),
    cookie: {
      secure: false,
      maxAge: 360000,
      expires: new Date(Date.now() + 360000), // o cookie expira em um dia
      httpOnly: true, // em produção deve ser utilizado https
    },
  }),
);

// flash messages (mensagens de status do sistema)
app.use(flash());

// public path
app.use(express.static('public'));

// set session to res
app.use((req, res, next) => {
  if (req.session.userid) {
    res.locals.session = req.session;
  }

  next();
});

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
