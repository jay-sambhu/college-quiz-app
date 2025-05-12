const mysql = require('mysql2/promise');
require('dotenv').config();

// Create a connection pool using environment variables
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

/**
 * Execute a parameterized query using the pool.
 * @param {string} sql - The SQL query with placeholders.
 * @param {Array<any>} params - The parameters to bind into the query.
 * @returns {Promise<any>} Result rows or fields.
 */
async function query(sql, params = []) {
  const [rows] = await pool.execute(sql, params);
  return rows;
}

module.exports = {
  pool,
  query
}; 