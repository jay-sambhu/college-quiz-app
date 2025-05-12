const BaseModel = require('./BaseModel');

class Quiz extends BaseModel {
  constructor() {
    super('quizzes');
  }

  async findAllWithTeacher() {
    const query = `
      SELECT q.*, 
             t.id as teacher_id, 
             t.username as teacher_username, 
             t.first_name as teacher_firstName, 
             t.last_name as teacher_lastName,
             (SELECT COUNT(*) FROM questions WHERE quiz_id = q.id) as question_count
      FROM quizzes q
      LEFT JOIN users t ON q.teacher_id = t.id
      WHERE q.is_published = 1
      ORDER BY q.created_at DESC
    `;
    return this.query(query);
  }

  async findByIdWithTeacher(id) {
    const query = `
      SELECT q.*, 
             t.id as teacher_id, 
             t.username as teacher_username, 
             t.first_name as teacher_firstName, 
             t.last_name as teacher_lastName
      FROM quizzes q
      LEFT JOIN users t ON q.teacher_id = t.id
      WHERE q.id = ?
    `;
    const results = await this.query(query, [id]);
    return results[0] || null;
  }

  async findByIdWithQuestions(id) {
    const query = `
      SELECT q.*, 
             t.id as teacher_id, 
             t.username as teacher_username, 
             t.first_name as teacher_firstName, 
             t.last_name as teacher_lastName,
             qu.id as question_id,
             qu.text as question_text,
             qu.option_a as optionA,
             qu.option_b as optionB,
             qu.option_c as optionC,
             qu.option_d as optionD,
             qu.correct_option as correctOption
      FROM quizzes q
      LEFT JOIN users t ON q.teacher_id = t.id
      LEFT JOIN questions qu ON q.id = qu.quiz_id
      WHERE q.id = ?
    `;
    const results = await this.query(query, [id]);
    if (!results.length) return null;

    const quiz = {
      ...results[0],
      questions: []
    };

    results.forEach(row => {
      if (row.question_id) {
        quiz.questions.push({
          id: row.question_id,
          text: row.question_text,
          optionA: row.optionA,
          optionB: row.optionB,
          optionC: row.optionC,
          optionD: row.optionD,
          correctOption: row.correctOption
        });
      }
    });

    return quiz;
  }

  async findByTeacher(teacherId) {
    const query = `
      SELECT q.*, 
             (SELECT COUNT(*) FROM questions WHERE quiz_id = q.id) as question_count
      FROM quizzes q
      WHERE q.teacher_id = ?
      ORDER BY q.created_at DESC
    `;
    return this.query(query, [teacherId]);
  }

  async create(data) {
    const query = `
      INSERT INTO quizzes (
        title, description, teacher_id, time_limit, 
        passing_score, is_published, created_at, updated_at
      )
      VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())
    `;
    const result = await this.query(query, [
      data.title,
      data.description,
      data.teacherId,
      data.timeLimit,
      data.passingScore,
      data.isPublished ? 1 : 0
    ]);
    return this.findById(result.insertId);
  }

  async update(id, data) {
    const allowedFields = [
      'title', 'description', 'time_limit', 
      'passing_score', 'is_published'
    ];
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
      UPDATE quizzes 
      SET ${updates.join(', ')}, updated_at = NOW()
      WHERE id = ?
    `;
    await this.query(query, values);
    return this.findById(id);
  }

  async count(where = {}) {
    let query = 'SELECT COUNT(*) as count FROM quizzes';
    const values = [];

    if (Object.keys(where).length > 0) {
      const conditions = [];
      for (const [key, value] of Object.entries(where)) {
        conditions.push(`${key} = ?`);
        values.push(value);
      }
      query += ` WHERE ${conditions.join(' AND ')}`;
    }

    return this.query(query, values);
  }
}

module.exports = new Quiz(); 