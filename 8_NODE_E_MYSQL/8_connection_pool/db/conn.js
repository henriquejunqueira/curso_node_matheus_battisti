import mysql from 'mysql';

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'henrique',
  password: 'slipknot1994',
  database: 'db_nodemysql',
});

export default pool;
