const http = require('http'); // Importa o módulo HTTP do Node.js para criar um servidor

const port = 3000; // Define a porta na qual o servidor irá escutar

// Cria o servidor HTTP e define a função de callback para lidar com as requisições
const server = http.createServer((req, res) => {
  res.write('Oi HTTP'); // Escreve uma mensagem de texto simples na resposta
  res.end(); // Encerra a resposta, enviando-a ao cliente
});

// Cria a escuta na porta definida utilizando http://localhost:numero_da_porta
server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`); // Exibe no console a mensagem de que o servidor está rodando na porta especificada
});
