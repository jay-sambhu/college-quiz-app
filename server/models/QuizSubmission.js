const BaseModel = require('./BaseModel');

class QuizSubmission extends BaseModel {
  constructor() {
    super('quiz_submissions');
  }

  async findAllWithDetails() {
    const query = `
      SELECT qs.*,
             q.title as quiz_title,
             t.id as teacher_id,
             t.username as teacher_username,
             t.first_name as teacher_firstName,
             t.last_name as teacher_lastName,
             s.id as student_id,
             s.username as student_username,
             s.first_name as student_firstName,
             s.last_name as student_lastName
      FROM quiz_submissions qs
      LEFT JOIN quizzes q ON qs.quiz_id = q.id
      LEFT JOIN users t ON q.teacher_id = t.id
      LEFT JOIN users s ON qs.student_id = s.id
      ORDER BY qs.submitted_at DESC
    `;
    return this.query(query);
  }

  async findByIdWithDetails(id) {
    const query = `
      SELECT qs.*,
             q.title as quiz_title,
             t.id as teacher_id,
             t.username as teacher_username,
             t.first_name as teacher_firstName,
             t.last_name as teacher_lastName,
             s.id as student_id,
             s.username as student_username,
             s.first_name as student_firstName,
             s.last_name as student_lastName
      FROM quiz_submissions qs
      LEFT JOIN quizzes q ON qs.quiz_id = q.id
      LEFT JOIN users t ON q.teacher_id = t.id
      LEFT JOIN users s ON qs.student_id = s.id
      WHERE qs.id = ?
    `;
    const results = await this.query(query, [id]);
    return results[0] || null;
  }

  async findByStudent(studentId) {
    const query = `
      SELECT qs.*,
             q.title as quiz_title,
             t.id as teacher_id,
             t.username as teacher_username,
             t.first_name as teacher_firstName,
             t.last_name as teacher_lastName
      FROM quiz_submissions qs
      LEFT JOIN quizzes q ON qs.quiz_id = q.id
      LEFT JOIN users t ON q.teacher_id = t.id
      WHERE qs.student_id = ?
      ORDER BY qs.submitted_at DESC
    `;
    return this.query(query, [studentId]);
  }

  async findByQuiz(quizId) {
    const query = `
      SELECT qs.*,
             s.id as student_id,
             s.username as student_username,
             s.first_name as student_firstName,
             s.last_name as student_lastName
      FROM quiz_submissions qs
      LEFT JOIN users s ON qs.student_id = s.id
      WHERE qs.quiz_id = ?
      ORDER BY qs.submitted_at DESC
    `;
    return this.query(query, [quizId]);
  }

  async create(data) {
    const query = `
      INSERT INTO quiz_submissions (
        quiz_id, student_id, score, time_taken, 
        submitted_at, created_at, updated_at
      )
      VALUES (?, ?, ?, ?, NOW(), NOW(), NOW())
    `;
    const result = await this.query(query, [
      data.quizId,
      data.studentId,
      data.score,
      data.timeTaken
    ]);
    return this.findById(result.insertId);
  }

  async createWithAnswers(submissionData, answers) {
    const connection = await this.pool.getConnection();
    try {
      await connection.beginTransaction();

      // Create submission
      const submissionQuery = `
        INSERT INTO quiz_submissions (
          quiz_id, student_id, score, time_taken, 
          submitted_at, created_at, updated_at
        )
        VALUES (?, ?, ?, ?, NOW(), NOW(), NOW())
      `;
      const [submissionResult] = await connection.query(submissionQuery, [
        submissionData.quizId,
        submissionData.studentId,
        submissionData.score,
        submissionData.timeTaken
      ]);

      // Create answers
      if (answers.length > 0) {
        const answersQuery = `
          INSERT INTO submission_answers (
            submission_id, question_id, selected_option, 
            created_at, updated_at
          )
          VALUES ?
        `;
        const answersValues = answers.map(a => [
          submissionResult.insertId,
          a.questionId,
          a.selectedOption,
          new Date(),
          new Date()
        ]);
        await connection.query(answersQuery, [answersValues]);
      }

      await connection.commit();
      return this.findById(submissionResult.insertId);
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  async count(where = {}) {
    let query = 'SELECT COUNT(*) as count FROM quiz_submissions';
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

  async countSince(field, days) {
    const query = `
      SELECT COUNT(*) as count 
      FROM quiz_submissions 
      WHERE ${field} >= DATE_SUB(NOW(), INTERVAL ? DAY)
    `;
    return this.query(query, [days]);
  }
}

module.exports = new QuizSubmission(); 