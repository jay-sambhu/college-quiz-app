const { query } = require('../utils/db');

/**
 * Retrieve all questions for a given quiz.
 * @param {number|string} quizId - The quiz ID.
 * @returns {Promise<Array<Object>>} Array of question records.
 */
async function findByQuizId(quizId) {
  return query(
    `SELECT id, quiz_id, text, option_a, option_b, option_c, option_d, correct_option
     FROM questions WHERE quiz_id = ?`,
    [quizId]
  );
}

module.exports = {
  findByQuizId
}; 