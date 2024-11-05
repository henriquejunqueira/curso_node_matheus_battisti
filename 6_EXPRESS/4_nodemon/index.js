const express = require('express'); // importa o módulo express
const app = express(); // inicializa o express
const port = 3000; // define a porta

const path = require('path'); // importa o módulo path

const basePath = path.join(__dirname, 'templates'); // acessa um diretório

// cria a rota utilizando um verbo http
app.get('/', (req, res) => {
  // envia o conteúdo do arquivo na resposta
  res.sendFile(`${basePath}/index.html`);
});

// escuta na porta definida
app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
