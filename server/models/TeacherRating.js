const BaseModel = require('./BaseModel');

class TeacherRating extends BaseModel {
  constructor() {
    super('teacher_ratings');
  }

  async findAllWithUsers() {
    const query = `
      SELECT tr.*, 
             t.id as teacher_id, t.username as teacher_username, t.first_name as teacher_firstName, t.last_name as teacher_lastName,
             s.id as student_id, s.username as student_username, s.first_name as student_firstName, s.last_name as student_lastName
      FROM teacher_ratings tr
      LEFT JOIN users t ON tr.teacher_id = t.id
      LEFT JOIN users s ON tr.student_id = s.id
      ORDER BY tr.created_at DESC
    `;
    return this.query(query);
  }

  async findByIdWithUsers(id) {
    const query = `
      SELECT tr.*, 
             t.id as teacher_id, t.username as teacher_username, t.first_name as teacher_firstName, t.last_name as teacher_lastName,
             s.id as student_id, s.username as student_username, s.first_name as student_firstName, s.last_name as student_lastName
      FROM teacher_ratings tr
      LEFT JOIN users t ON tr.teacher_id = t.id
      LEFT JOIN users s ON tr.student_id = s.id
      WHERE tr.id = ?
    `;
    const results = await this.query(query, [id]);
    return results[0] || null;
  }

  /**
   * Find all ratings for a specific teacher
   */
  async findByTeacher(teacherId) {
    const query = `
      SELECT r.*, u.username, u.first_name, u.last_name
      FROM teacher_ratings r
      JOIN users u ON r.student_id = u.id
      WHERE r.teacher_id = ?
      ORDER BY r.created_at DESC
    `;
    return this.query(query, [teacherId]);
  }

  /**
   * Find a rating by student and teacher
   */
  async findByStudentAndTeacher(studentId, teacherId) {
    return this.findOne({
      student_id: studentId,
      teacher_id: teacherId
    });
  }

  /**
   * Create or update a rating
   */
  async createOrUpdate(data) {
    const { student_id, teacher_id, rating, comment } = data;
    
    // Check if rating exists
    const existing = await this.findByStudentAndTeacher(student_id, teacher_id);
    
    if (existing) {
      // Update existing rating
      return this.update(existing.id, {
        rating,
        comment,
        updated_at: new Date()
      });
    } else {
      // Create new rating
      return this.create({
        student_id,
        teacher_id,
        rating,
        comment,
        created_at: new Date(),
        updated_at: new Date()
      });
    }
  }

  /**
   * Get average rating for a teacher
   */
  async getAverageRating(teacherId) {
    const query = `
      SELECT AVG(rating) as avg_rating, COUNT(*) as count
      FROM teacher_ratings
      WHERE teacher_id = ?
    `;
    const result = await this.query(query, [teacherId]);
    return result[0];
  }

  async create(data) {
    const query = `
      INSERT INTO teacher_ratings (teacher_id, student_id, rating, comment)
      VALUES (?, ?, ?, ?)
    `;
    const result = await this.query(query, [
      data.teacherId,
      data.studentId,
      data.rating,
      data.comment
    ]);
    return this.findById(result.insertId);
  }

  async update(id, data) {
    const allowedFields = ['rating', 'comment'];
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
      UPDATE teacher_ratings SET ${updates.join(', ')} WHERE id = ?
    `;
    await this.query(query, values);
    return this.findById(id);
  }

  async getTeacherStats(teacherId) {
    const query = `
      SELECT rating FROM teacher_ratings WHERE teacher_id = ?
    `;
    const ratings = await this.query(query, [teacherId]);
    if (ratings.length === 0) {
      return {
        count: 0,
        average: 0,
        distribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
      };
    }
    const average = ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length;
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    ratings.forEach(r => {
      distribution[r.rating] = (distribution[r.rating] || 0) + 1;
    });
    return {
      count: ratings.length,
      average: parseFloat(average.toFixed(1)),
      distribution
    };
  }
}

module.exports = new TeacherRating(); 