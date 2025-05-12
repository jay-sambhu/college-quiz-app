const Note = require('../models/Note');

/**
 * Note service with MySQL
 */
const noteService = {
  /**
   * Find all notes
   * @returns {Promise<Array>} Array of notes
   */
  findAll: async () => {
    return Note.findAllWithUser();
  },

  /**
   * Find note by ID
   * @param {number} id - Note ID
   * @returns {Promise<Object|null>} Note object or null
   */
  findById: async (id) => {
    return Note.findByIdWithDetails(id);
  },

  /**
   * Find notes by user ID
   * @param {number} userId - User ID
   * @returns {Promise<Array>} Array of notes
   */
  findByUser: async (userId) => {
    return Note.findByUser(userId);
  },

  /**
   * Find notes accessible to a student
   * @param {number} studentId - Student ID
   * @returns {Promise<Array>} Array of notes
   */
  findAccessibleByStudent: async (studentId) => {
    return Note.findAccessibleByStudent(studentId);
  },

  /**
   * Create a new note
   * @param {Object} data - Note data
   * @returns {Promise<Object>} Created note
   */
  create: async (data) => {
    return Note.create(data);
  },

  /**
   * Update a note
   * @param {number} id - Note ID
   * @param {Object} data - Note data to update
   * @returns {Promise<Object>} Updated note
   */
  update: async (id, data) => {
    return Note.update(id, data);
  },

  /**
   * Delete a note
   * @param {number} id - Note ID
   * @returns {Promise<Object>} Deleted note
   */
  delete: async (id) => {
    return Note.delete(id);
  },

  /**
   * Share a note with a student
   * @param {number} noteId - Note ID
   * @param {number} studentId - Student ID
   * @returns {Promise<Object>} Created note access
   */
  shareWithStudent: async (noteId, studentId) => {
    return Note.shareWithStudent(noteId, studentId);
  },

  /**
   * Unshare a note with a student
   * @param {number} noteId - Note ID
   * @param {number} studentId - Student ID
   * @returns {Promise<Object>} Deleted note access
   */
  unshareWithStudent: async (noteId, studentId) => {
    return Note.unshareWithStudent(noteId, studentId);
  }
};

module.exports = noteService; 