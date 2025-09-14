const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('toughts', 'root', 'slipknot1994', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  sequelize.authenticate();
  console.log('Conectado com sucesso!');
} catch (err) {
  console.log(`Não foi possível conectar: ${err}`);
}

module.exports = sequelize;
