# Projeto prático do curso

### Módulos instalados:

- bcryptjs
- connect-flash
- cookie-parser
- cookie-session
- express
- express-flash
- express-session
- mysql2
- sequelize
- nodemon
- session-file-store

### Estrutura do projeto:

- controllers: Pasta para armazenar os Controllers do MVC
- db: Armazena o arquivo para conexão com o banco de dados
- db/conn.js: Arquivo de conexão com o banco de dados
- models: Armazena os models do MVC
- node_modules: Armazena os módulos do projeto
- public/css: Armazena o css
- routes: Armazena os arquivos de rotas
- sessions: Armazena as sessões do sistema
- views: Armazena as views do MVC
- views/layouts: Armazena o layout do projeto
- .gitignore: Diz para o git quais pastas ou arquivos não devem subir para o github
- index.js: Arquivo principal do projeto (na raiz)
- package.json: Armazena as configurações do projeto

### Comandos Utilizados:

- Criação do package.json: `npm init -y`

- Instalação dos módulos externos principais: `npm install bcryptjs connect-flash cookie-parser cookie-session express express-handlebars express-flash express-session mysql2 sequelize nodemon session-file-store`

- Rodando o projeto: `npm start`

- Observação: Antes de de rodar o projeto foi criado o script start no package.json:

```json
"scripts": {
    "start": "nodemon ./index.js localhost 3000"
  },
```
