const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'slipknot1994',
  database: 'nodemysql2',
});

module.exports = pool;
