const BaseModel = require('./BaseModel');

class Note extends BaseModel {
  constructor() {
    super('notes');
  }

  /**
   * Find all notes with user information
   * @returns {Promise<Array>} Array of notes with user data
   */
  async findAllWithUser() {
    const query = `
      SELECT n.*, 
             u.id as user_id, 
             u.username, 
             u.first_name as firstName, 
             u.last_name as lastName
      FROM notes n
      LEFT JOIN users u ON n.user_id = u.id
      ORDER BY n.created_at DESC
    `;
    return this.query(query);
  }

  /**
   * Find note by ID with user and access information
   * @param {number} id - Note ID
   * @returns {Promise<Object|null>} Note object with user and access data
   */
  async findByIdWithDetails(id) {
    const query = `
      SELECT n.*, 
             u.id as user_id, 
             u.username, 
             u.first_name as firstName, 
             u.last_name as lastName,
             na.student_id,
             s.username as student_username,
             s.first_name as student_firstName,
             s.last_name as student_lastName
      FROM notes n
      LEFT JOIN users u ON n.user_id = u.id
      LEFT JOIN note_accesses na ON n.id = na.note_id
      LEFT JOIN users s ON na.student_id = s.id
      WHERE n.id = ?
    `;
    const results = await this.query(query, [id]);
    if (!results.length) return null;

    // Transform the results into a nested structure
    const note = {
      ...results[0],
      accesses: []
    };

    results.forEach(row => {
      if (row.student_id) {
        note.accesses.push({
          student: {
            id: row.student_id,
            username: row.student_username,
            firstName: row.student_firstName,
            lastName: row.student_lastName
          }
        });
      }
    });

    return note;
  }

  /**
   * Find notes by user ID
   * @param {number} userId - User ID
   * @returns {Promise<Array>} Array of notes
   */
  async findByUser(userId) {
    const query = `
      SELECT * FROM notes 
      WHERE user_id = ? 
      ORDER BY created_at DESC
    `;
    return this.query(query, [userId]);
  }

  /**
   * Find notes accessible to a student
   * @param {number} studentId - Student ID
   * @returns {Promise<Array>} Array of notes
   */
  async findAccessibleByStudent(studentId) {
    const query = `
      SELECT n.*, 
             u.id as user_id, 
             u.username, 
             u.first_name as firstName, 
             u.last_name as lastName
      FROM notes n
      LEFT JOIN users u ON n.user_id = u.id
      LEFT JOIN note_accesses na ON n.id = na.note_id
      WHERE n.is_public = 1 
         OR n.user_id = ? 
         OR na.student_id = ?
      ORDER BY n.created_at DESC
    `;
    return this.query(query, [studentId, studentId]);
  }

  /**
   * Create a new note
   * @param {Object} data - Note data
   * @returns {Promise<Object>} Created note
   */
  async create(data) {
    const query = `
      INSERT INTO notes (title, content, user_id, is_public)
      VALUES (?, ?, ?, ?)
    `;
    const result = await this.query(query, [
      data.title,
      data.content,
      data.userId,
      data.isPublic ? 1 : 0
    ]);
    return this.findById(result.insertId);
  }

  /**
   * Update a note
   * @param {number} id - Note ID
   * @param {Object} data - Note data to update
   * @returns {Promise<Object>} Updated note
   */
  async update(id, data) {
    const allowedFields = ['title', 'content', 'is_public'];
    const updates = [];
    const values = [];

    for (const [key, value] of Object.entries(data)) {
      if (allowedFields.includes(key)) {
        updates.push(`${key} = ?`);
        values.push(value);
      }
    }

    if (updates.length === 0) {
      return this.findById(id);
    }

    values.push(id);
    const query = `
      UPDATE notes 
      SET ${updates.join(', ')}
      WHERE id = ?
    `;
    await this.query(query, values);
    return this.findById(id);
  }

  /**
   * Share a note with a student
   * @param {number} noteId - Note ID
   * @param {number} studentId - Student ID
   * @returns {Promise<Object>} Created note access
   */
  async shareWithStudent(noteId, studentId) {
    const query = `
      INSERT INTO note_accesses (note_id, student_id)
      VALUES (?, ?)
    `;
    return this.query(query, [noteId, studentId]);
  }

  /**
   * Unshare a note with a student
   * @param {number} noteId - Note ID
   * @param {number} studentId - Student ID
   * @returns {Promise<Object>} Result of deletion
   */
  async unshareWithStudent(noteId, studentId) {
    const query = `
      DELETE FROM note_accesses 
      WHERE note_id = ? AND student_id = ?
    `;
    return this.query(query, [noteId, studentId]);
  }
}

module.exports = new Note(); 