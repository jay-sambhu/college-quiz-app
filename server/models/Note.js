const BaseModel = require('./BaseModel');

class Note extends BaseModel {
  constructor() {
    super('notes');
  }

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
    return this.executeQuery(query);
  }

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
    const results = await this.executeQuery(query, [id]);
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

  async findByUser(userId) {
    const query = `
      SELECT * FROM notes 
      WHERE user_id = ? 
      ORDER BY created_at DESC
    `;
    return this.executeQuery(query, [userId]);
  }

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
    return this.executeQuery(query, [studentId, studentId]);
  }

  async create(data) {
    const query = `
      INSERT INTO notes (title, content, user_id, is_public)
      VALUES (?, ?, ?, ?)
    `;
    const result = await this.executeQuery(query, [
      data.title,
      data.content,
      data.userId,
      data.isPublic ? 1 : 0
    ]);
    return this.findById(result.insertId);
  }

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
    await this.executeQuery(query, values);
    return this.findById(id);
  }

  async shareWithStudent(noteId, studentId) {
    const query = `
      INSERT INTO note_accesses (note_id, student_id)
      VALUES (?, ?)
    `;
    return this.executeQuery(query, [noteId, studentId]);
  }

  async unshareWithStudent(noteId, studentId) {
    const query = `
      DELETE FROM note_accesses 
      WHERE note_id = ? AND student_id = ?
    `;
    return this.executeQuery(query, [noteId, studentId]);
  }
}

module.exports = new Note();