import { DataTypes } from 'sequelize'; // dá acesso aos tipos de dados do bd

import db from '../db/conn.js';

// o método define define o model
const User = db.define('User', {
  name: {
    type: DataTypes.STRING, // define o campo como string
    allowNull: false, // define que o campo não pode ser null
  },
  occupation: {
    type: DataTypes.STRING,
    required: true, // define que o campo não pode ser vazio e nem null
  },
  newsletter: {
    type: DataTypes.BOOLEAN,
  },
});

export default User;
