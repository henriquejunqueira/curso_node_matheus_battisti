const http = require('http'); // Importa o módulo HTTP do Node.js para criar um servidor

const port = 3000; // Define a porta na qual o servidor irá escutar

// Cria o servidor HTTP e define a função de callback para lidar com as requisições recebidas
const server = http.createServer((req, res) => {
  // Analisa a URL da requisição para extrair informações e parâmetros de consulta
  const urlInfo = require('url').parse(req.url, true);

  const name = urlInfo.query.name; // Extrai o parâmetro 'name' da URL, se estiver presente

  res.statusCode = 200; // Define o código de status da resposta HTTP como 200 (OK)

  // Define o cabeçalho de conteúdo da resposta como HTML
  res.setHeader('Content-Type', 'text/html');

  // Verifica se o parâmetro 'name' está ausente
  if (!name) {
    // Envia um formulário HTML ao cliente para preencher o nome e enviar
    res.end(
      '<h1>Preencha o seu nome:</h1><form method="GET"><input type="text" name="name" /><input type="submit" value="Enviar" /></form>'
    );
  } else {
    // Envia uma saudação personalizada ao cliente, usando o valor do parâmetro 'name'
    res.end(`<h1>Seja bem-vindo ${name}</h1>`);
  }
});

// Cria a escuta na porta definida utilizando http://localhost:numero_da_porta
server.listen(port, () => {
  // Exibe no console a mensagem de que o servidor está rodando na porta especificada
  console.log(`Servidor rodando na porta: ${port}`);
});
