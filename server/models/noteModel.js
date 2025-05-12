const { query } = require('../utils/db');

/**
 * Create a new note.
 * @param {Object} note
 * @param {string} note.title
 * @param {string} note.content
 * @param {number|string} note.user_id
 * @param {boolean} note.is_public
 * @returns {Promise<number>} New note ID
 */
async function createNote({ title, content, user_id, is_public }) {
  const result = await query(
    `INSERT INTO notes (title, content, user_id, is_public)
     VALUES (?, ?, ?, ?)`,
    [title, content, user_id, is_public]
  );
  return result.insertId;
}

/**
 * Update a note by ID.
 * @param {number|string} id
 * @param {Object} fields - Fields to update (title, content, is_public)
 * @returns {Promise<number>} Rows affected
 */
async function updateNote(id, fields) {
  const keys = Object.keys(fields);
  if (!keys.length) return 0;
  const setClause = keys.map((k) => `${k} = ?`).join(', ');
  const params = keys.map((k) => fields[k]);
  params.push(id);

  const result = await query(
    `UPDATE notes SET ${setClause} WHERE id = ?`,
    params
  );
  return result.affectedRows || 0;
}

/**
 * Delete a note by ID.
 * @param {number|string} id
 * @returns {Promise<number>} Rows affected
 */
async function deleteNote(id) {
  const result = await query(
    `DELETE FROM notes WHERE id = ?`,
    [id]
  );
  return result.affectedRows || 0;
}

/**
 * Find a note by ID.
 * @param {number|string} id
 * @returns {Promise<Object|undefined>} Note record
 */
async function findById(id) {
  const rows = await query(
    `SELECT id, title, content, user_id, is_public, created_at, updated_at
     FROM notes WHERE id = ?`,
    [id]
  );
  return rows[0];
}

/**
 * Find notes for a specific user (owner or shared).
 * @param {number|string} userId
 * @returns {Promise<Array<Object>>} Array of notes
 */
async function findByUser(userId) {
  return query(
    `SELECT DISTINCT n.id, n.title, n.content, n.user_id, n.is_public, n.created_at, n.updated_at
     FROM notes n
     LEFT JOIN note_access na ON n.id = na.note_id
     WHERE n.user_id = ? OR na.student_id = ?`,
    [userId, userId]
  );
}

/**
 * Find all notes (Admin view).
 * @returns {Promise<Array<Object>>}
 */
async function findAll() {
  return query(
    `SELECT id, title, content, user_id, is_public, created_at, updated_at FROM notes`
  );
}

/**
 * Share a note with a student.
 * @param {number|string} noteId
 * @param {number|string} studentId
 * @returns {Promise<number>} Inserted access ID
 */
async function shareNote(noteId, studentId) {
  const result = await query(
    `INSERT INTO note_access (note_id, student_id)
     VALUES (?, ?)`,
    [noteId, studentId]
  );
  return result.insertId;
}

/**
 * Unshare a note (remove access) for a student.
 * @param {number|string} noteId
 * @param {number|string} studentId
 * @returns {Promise<number>} Rows affected
 */
async function unshareNote(noteId, studentId) {
  const result = await query(
    `DELETE FROM note_access WHERE note_id = ? AND student_id = ?`,
    [noteId, studentId]
  );
  return result.affectedRows || 0;
}

/**
 * Retrieve list of student IDs who have access to a note.
 * @param {number|string} noteId
 * @returns {Promise<Array<Object>>>} Array of access records with student_id
 */
async function findNoteAccess(noteId) {
  return query(
    `SELECT student_id
     FROM note_access
     WHERE note_id = ?`,
    [noteId]
  );
}

module.exports = {
  createNote,
  updateNote,
  deleteNote,
  findById,
  findByUser,
  findAll,
  shareNote,
  unshareNote,
  findNoteAccess
}; 