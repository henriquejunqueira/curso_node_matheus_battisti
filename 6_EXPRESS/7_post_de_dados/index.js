const express = require('express'); // importa o módulo express
const app = express(); // inicializa o express
const port = 3000; // define a porta

const path = require('path'); // importa o módulo path

const basePath = path.join(__dirname, 'templates'); // acessa um diretório

// ler o body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

var checkAuth = function (req, res, next) {
  req.authStatus = true;
  if (req.authStatus) {
    console.log('Está logado, pode continuar...');
    next();
  } else {
    console.log('Não está logado, faça o login para continuar!');
    next();
  }
};

app.use(checkAuth);

app.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

app.post('/users/save', (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const age = req.body.age;

  console.log(`O nome do usuário é ${name} e ele tem ${age} anos`);

  res.sendFile(`${basePath}/userform.html`);
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;

  console.log(`Carregando usuário: ${req.params.id}`);

  res.sendFile(`${basePath}/users.html`);
});

// cria a rota principal utilizando um verbo http
app.get('/', (req, res) => {
  // envia o conteúdo do arquivo na resposta
  res.sendFile(`${basePath}/index.html`);
});

// escuta na porta definida
app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
