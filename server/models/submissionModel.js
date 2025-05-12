const { query } = require('../utils/db');

/**
 * Create a new quiz submission.
 * @param {Object} submission
 * @param {number|string} submission.quiz_id
 * @param {number|string} submission.student_id
 * @param {number} submission.score
 * @param {number} submission.time_taken
 * @returns {Promise<number>} Inserted submission ID.
 */
async function create({ quiz_id, student_id, score, time_taken }) {
  const result = await query(
    `INSERT INTO quiz_submissions (quiz_id, student_id, score, time_taken)
     VALUES (?, ?, ?, ?)`,
    [quiz_id, student_id, score, time_taken]
  );
  return result.insertId;
}

/**
 * Find a submission by quiz and user.
 * @param {number|string} quizId
 * @param {number|string} userId
 * @returns {Promise<Object|undefined>} Submission record or undefined.
 */
async function findByQuizAndUser(quizId, userId) {
  const rows = await query(
    `SELECT id, quiz_id, student_id, score, time_taken, submitted_at
     FROM quiz_submissions
     WHERE quiz_id = ? AND student_id = ?
     ORDER BY submitted_at DESC LIMIT 1`,
    [quizId, userId]
  );
  return rows[0];
}

module.exports = {
  create,
  findByQuizAndUser
}; 