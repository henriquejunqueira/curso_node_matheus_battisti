const express = require('express'); // importa o módulo express
const app = express(); // inicializa o express
const port = 3000; // define a porta

const path = require('path'); // importa o módulo path

const basePath = path.join(__dirname, 'templates'); // acessa um diretório

const checkAuth = function (req, res, next) {
  req.authStatus = true; // verifica a autenticação do usuário

  if (req.authStatus) {
    console.log('Está logado, pode continuar...');
    next(); // vai para o próximo passo já que está logado (necessário no uso de middlewares)
  } else {
    console.log('Não está logado, faça o login para continuar');
    next();
  }
};

app.use(checkAuth); // ativa o middleware

// cria a rota utilizando um verbo http
app.get('/', (req, res) => {
  // envia o conteúdo do arquivo na resposta
  res.sendFile(`${basePath}/index.html`);
});

// escuta na porta definida
app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
