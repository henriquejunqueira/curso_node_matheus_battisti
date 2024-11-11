import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('nodemvc', 'henrique', 'slipknot1994', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  sequelize.authenticate();
  console.log('Conectamos ao MySQL!');
} catch (error) {
  console.log(`Não foi possível conectar: ${error}`);
}

export default sequelize;
