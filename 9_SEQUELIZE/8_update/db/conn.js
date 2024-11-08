import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('nodesequelize', 'henrique', 'slipknot1994', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  sequelize.authenticate();
  console.log('Conectamos com sucesso ao Sequelize!');
} catch (err) {
  console.log('Não foi possível conectar: ', err);
}

export default sequelize;
