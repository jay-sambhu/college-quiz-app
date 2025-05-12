const { query } = require('../utils/db');

/**
 * Create a new quiz.
 * @param {Object} quiz - Quiz details.
 * @param {string} quiz.title
 * @param {string} quiz.description
 * @param {number} quiz.teacher_id
 * @param {number} quiz.time_limit
 * @param {number} quiz.passing_score
 * @param {boolean} quiz.is_published
 * @returns {Promise<number>} The inserted quiz ID.
 */
async function createQuiz({ title, description, teacher_id, time_limit, passing_score, is_published }) {
  const result = await query(
    `INSERT INTO quizzes (title, description, teacher_id, time_limit, passing_score, is_published)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [title, description, teacher_id, time_limit, passing_score, is_published]
  );
  return result.insertId;
}

/**
 * Update a quiz by ID.
 * @param {number|string} id - Quiz ID.
 * @param {Object} fields - Fields to update.
 * @returns {Promise<number>} Rows affected.
 */
async function updateQuiz(id, fields) {
  const keys = Object.keys(fields);
  if (!keys.length) return 0;

  const setClause = keys.map((key) => `${key} = ?`).join(', ');
  const params = keys.map((key) => fields[key]);
  params.push(id);

  const result = await query(
    `UPDATE quizzes SET ${setClause} WHERE id = ?`,
    params
  );
  return result.affectedRows || 0;
}

/**
 * Delete a quiz by ID.
 * @param {number|string} id - Quiz ID.
 * @returns {Promise<number>} Rows affected.
 */
async function deleteQuiz(id) {
  const result = await query(
    `DELETE FROM quizzes WHERE id = ?`,
    [id]
  );
  return result.affectedRows || 0;
}

/**
 * Get a quiz by ID.
 * @param {number|string} id - Quiz ID.
 * @returns {Promise<Object|undefined>} Quiz record.
 */
async function findById(id) {
  const rows = await query(
    `SELECT * FROM quizzes WHERE id = ?`,
    [id]
  );
  return rows[0];
}

/**
 * Get all quizzes (Admin).
 * @returns {Promise<Array<Object>>} Array of quizzes.
 */
async function findAll() {
  return query(`SELECT * FROM quizzes`);
}

/**
 * Get quizzes by teacher ID.
 * @param {number|string} teacherId
 * @returns {Promise<Array<Object>>}
 */
async function findByTeacher(teacherId) {
  return query(
    `SELECT * FROM quizzes WHERE teacher_id = ?`,
    [teacherId]
  );
}

/**
 * Get available quizzes (published=true).
 * @returns {Promise<Array<Object>>}
 */
async function findAvailable() {
  return query(
    `SELECT * FROM quizzes WHERE is_published = 1`
  );
}

module.exports = {
  createQuiz,
  updateQuiz,
  deleteQuiz,
  findById,
  findAll,
  findByTeacher,
  findAvailable
}; 