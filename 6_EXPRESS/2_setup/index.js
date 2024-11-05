const express = require('express'); // importa o módulo express
const app = express(); // inicializa o express
const port = 3000; // define a porta

// cria a rota utilizando um verbo http
app.get('/', (req, res) => {
  res.send('Olá mundo!!!'); // envia uma mensagem para o usuário quando a rota é acessada
});

// escuta na porta definida
app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
