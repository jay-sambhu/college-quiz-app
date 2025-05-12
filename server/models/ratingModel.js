const { query } = require('../utils/db');

/**
 * Create a new teacher rating.
 * @param {Object} data
 * @param {number|string} data.teacher_id
 * @param {number|string} data.student_id
 * @param {number} data.rating
 * @param {string} [data.comment]
 * @returns {Promise<number>} Inserted rating ID
 */
async function createRating({ teacher_id, student_id, rating, comment }) {
  const result = await query(
    `INSERT INTO teacher_ratings (teacher_id, student_id, rating, comment)
     VALUES (?, ?, ?, ?)`,
    [teacher_id, student_id, rating, comment || null]
  );
  return result.insertId;
}

/**
 * Update an existing rating by ID.
 * @param {number|string} id - Rating ID
 * @param {Object} fields - Fields to update (rating, comment)
 * @returns {Promise<number>} Rows affected
 */
async function updateRating(id, fields) {
  const keys = Object.keys(fields);
  if (!keys.length) return 0;
  const setClause = keys.map((k) => `${k} = ?`).join(', ');
  const params = keys.map((k) => fields[k]);
  params.push(id);

  const result = await query(
    `UPDATE teacher_ratings SET ${setClause} WHERE id = ?`,
    params
  );
  return result.affectedRows || 0;
}

/**
 * Delete a rating by ID.
 * @param {number|string} id - Rating ID
 * @returns {Promise<number>} Rows affected
 */
async function deleteRating(id) {
  const result = await query(
    `DELETE FROM teacher_ratings WHERE id = ?`,
    [id]
  );
  return result.affectedRows || 0;
}

/**
 * Retrieve all ratings for a specific teacher.
 * @param {number|string} teacherId
 * @returns {Promise<Array<Object>>} Array of rating records
 */
async function findByTeacherId(teacherId) {
  return query(
    `SELECT id, teacher_id, student_id, rating, comment, created_at
     FROM teacher_ratings WHERE teacher_id = ?`,
    [teacherId]
  );
}

/**
 * Retrieve all ratings (Admin view).
 * @returns {Promise<Array<Object>>} Array of rating records
 */
async function findAllRatings() {
  return query(
    `SELECT id, teacher_id, student_id, rating, comment, created_at
     FROM teacher_ratings`
  );
}

module.exports = {
  createRating,
  updateRating,
  deleteRating,
  findByTeacherId,
  findAllRatings
}; 