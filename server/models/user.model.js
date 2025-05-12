// Import the query function and base model
const { query } = require('../utils/db');
const baseUserModel = require('./userModel');

/**
 * Find a user by email.
 * @param {string} email
 * @returns {Promise<Object|undefined>} User record or undefined.
 */
async function findByEmail(email) {
  const rows = await query(
    `SELECT * FROM users WHERE email = ?`,
    [email]
  );
  return rows[0];
}

/**
 * Create a new user.
 * @param {{username:string,email:string,password:string,role:string}} data
 * @returns {Promise<number>} The inserted user ID.
 */
async function create({ username, email, password, role }) {
  const result = await query(
    `INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)`,
    [username, email, password, role]
  );
  return result.insertId;
}

// Export all base model methods and extend with email lookup and create
module.exports = {
  ...baseUserModel,
  findByEmail,
  create
}; 