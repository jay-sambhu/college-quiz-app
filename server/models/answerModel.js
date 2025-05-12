const { query } = require('../utils/db');

/**
 * Record a student's answer for a submission.
 * @param {Object} answer
 * @param {number|string} answer.submission_id
 * @param {number|string} answer.question_id
 * @param {string} answer.selected_option
 * @returns {Promise<number>} Inserted answer ID
 */
async function createAnswer({ submission_id, question_id, selected_option }) {
  const result = await query(
    `INSERT INTO student_answers (submission_id, question_id, selected_option)
     VALUES (?, ?, ?)`,
    [submission_id, question_id, selected_option]
  );
  return result.insertId;
}

/**
 * Fetch all answers for a given submission.
 * @param {number|string} submissionId
 * @returns {Promise<Array<Object>>} Array of answers
 */
async function findBySubmission(submissionId) {
  return query(
    `SELECT question_id, selected_option
     FROM student_answers
     WHERE submission_id = ?`,
    [submissionId]
  );
}

module.exports = {
  createAnswer,
  findBySubmission
}; 