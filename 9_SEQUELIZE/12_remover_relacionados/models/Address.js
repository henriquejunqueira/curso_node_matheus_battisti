import { DataTypes } from 'sequelize';
import db from '../db/conn.js';

import User from './User.js';

const Address = db.define('Address', {
  street: {
    type: DataTypes.STRING,
    // required: true,
    allowNull: false,
  },
  number: {
    type: DataTypes.STRING,
    // required: true,
  },
  city: {
    type: DataTypes.STRING,
    // required: true,
  },
});

User.hasMany(Address);

// Define o relacionamento da tabela
Address.belongsTo(User); // um endereço pertence a um usuário

export default Address;
