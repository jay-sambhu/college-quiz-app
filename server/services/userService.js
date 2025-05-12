const User = require('../models/User');

/**
 * User service with MySQL
 */
const userService = {
  /**
   * Find all users
   * @returns {Promise<Array>} Array of users
   */
  findAll: async () => {
    return User.findAll();
  },

  /**
   * Find user by ID
   * @param {number} id - User ID
   * @returns {Promise<Object|null>} User object or null
   */
  findById: async (id) => {
    return User.findById(id);
  },

  /**
   * Find user by email
   * @param {string} email - User email
   * @returns {Promise<Object|null>} User object or null
   */
  findByEmail: async (email) => {
    return User.findByEmail(email);
  },

  /**
   * Find user by username
   * @param {string} username - Username
   * @returns {Promise<Object|null>} User object or null
   */
  findByUsername: async (username) => {
    return User.findByUsername(username);
  },

  /**
   * Find users by role
   * @param {string} role - User role (admin, teacher, student)
   * @returns {Promise<Array>} Array of users
   */
  findByRole: async (role) => {
    return User.findAll({ role });
  },

  /**
   * Create a new user
   * @param {Object} data - User data
   * @param {string} data.username - Username
   * @param {string} data.email - Email
   * @param {string} data.password - Hashed password
   * @param {string} data.role - User role (admin, teacher, student)
   * @returns {Promise<Object>} Created user
   */
  create: async ({ username, email, password, role, firstName, lastName }) => {
    return User.create({ username, email, password, role, firstName, lastName });
  },

  /**
   * Update a user
   * @param {number} id - User ID
   * @param {Object} data - User data to update
   * @returns {Promise<Object>} Updated user
   */
  update: async (id, data) => {
    return User.update(id, data);
  },

  /**
   * Delete a user
   * @param {number} id - User ID
   * @returns {Promise<Object>} Deleted user
   */
  delete: async (id) => {
    return User.delete(id);
  }
};

module.exports = userService; 