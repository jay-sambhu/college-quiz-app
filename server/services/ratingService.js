const TeacherRating = require('../models/TeacherRating');

/**
 * Rating service with MySQL
 */
const ratingService = {
  /**
   * Find all ratings
   * @returns {Promise<Array>} Array of ratings
   */
  findAll: async () => {
    return TeacherRating.findAllWithUsers();
  },

  /**
   * Find rating by ID
   * @param {number} id - Rating ID
   * @returns {Promise<Object|null>} Rating object or null
   */
  findById: async (id) => {
    return TeacherRating.findByIdWithUsers(id);
  },

  /**
   * Find ratings by teacher ID
   * @param {number} teacherId - Teacher ID
   * @returns {Promise<Array>} Array of ratings
   */
  findByTeacher: async (teacherId) => {
    return TeacherRating.findByTeacher(teacherId);
  },

  /**
   * Find ratings by student ID
   * @param {number} studentId - Student ID
   * @returns {Promise<Array>} Array of ratings
   */
  findByStudent: async (studentId) => {
    return TeacherRating.findByStudent(studentId);
  },

  /**
   * Create a new rating
   * @param {Object} data - Rating data
   * @returns {Promise<Object>} Created rating
   */
  create: async (data) => {
    return TeacherRating.create(data);
  },

  /**
   * Update a rating
   * @param {number} id - Rating ID
   * @param {Object} data - Rating data to update
   * @returns {Promise<Object>} Updated rating
   */
  update: async (id, data) => {
    return TeacherRating.update(id, data);
  },

  /**
   * Delete a rating
   * @param {number} id - Rating ID
   * @returns {Promise<Object>} Deleted rating
   */
  delete: async (id) => {
    return TeacherRating.delete(id);
  },

  /**
   * Get teacher average rating
   * @param {number} teacherId - Teacher ID
   * @returns {Promise<Object>} Rating statistics
   */
  getTeacherStats: async (teacherId) => {
    return TeacherRating.getTeacherStats(teacherId);
  }
};

module.exports = ratingService; 