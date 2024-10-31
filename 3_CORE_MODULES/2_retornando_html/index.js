const http = require('http'); // Importa o módulo HTTP do Node.js para criar um servidor

const port = 3000; // Define a porta na qual o servidor irá escutar

// Cria o servidor HTTP e define a função de callback para lidar com as requisições recebidas
const server = http.createServer((req, res) => {
  // Define o código de status da resposta HTTP como 200 (OK)
  res.statusCode = 200;

  // Define o cabeçalho de conteúdo da resposta como HTML
  res.setHeader('Content-Type', 'text/html');

  // Envia uma resposta HTML ao cliente e encerra a conexão
  res.end(
    '<h1>Olá, este é meu primeiro server com HTML!</h1><p>Testando atualizações</p>'
  );
});

// Cria a escuta na porta definida utilizando http://localhost:numero_da_porta
server.listen(port, () => {
  // Exibe no console a mensagem de que o servidor está rodando na porta especificada
  console.log(`Servidor rodando na porta: ${port}`);
});
