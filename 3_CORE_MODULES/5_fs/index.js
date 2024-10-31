const http = require('http'); // Importa o módulo HTTP do Node.js para criar um servidor
const fs = require('fs'); // Importa o módulo fs do Node.js para ler arquivos

const port = 3000; // Define a porta na qual o servidor irá escutar

// Cria o servidor HTTP e define a função de callback para lidar com as requisições recebidas
const server = http.createServer((req, res) => {
  // Lê o conteúdo do arquivo 'mensagem.html' de forma assíncrona
  fs.readFile('mensagem.html', function (err, data) {
    // Define o status da resposta como 200 (OK) e o tipo de conteúdo como HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Escreve o conteúdo do arquivo lido na resposta, enviando-o ao cliente
    res.write(data);

    // Encerra a resposta, garantindo que todos os dados foram enviados
    return res.end();
  });
});

// Cria a escuta na porta definida utilizando http://localhost:numero_da_porta
server.listen(port, () => {
  // Exibe no console a mensagem de que o servidor está rodando na porta especificada
  console.log(`Servidor rodando na porta: ${port}`);
});
