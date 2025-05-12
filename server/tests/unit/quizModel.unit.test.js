const quizModel = require('../../models/quizModel');
const db = require('../../utils/db');

jest.mock('../../utils/db');

describe('Quiz Model Unit Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('createQuiz should return insertId', async () => {
    db.query.mockResolvedValue({ insertId: 42 });
    const quizDetails = {
      title: 'Test Quiz',
      description: 'Desc',
      teacher_id: 1,
      time_limit: 10,
      passing_score: 50,
      is_published: 1,
    };
    const result = await quizModel.createQuiz(quizDetails);
    expect(db.query).toHaveBeenCalledWith(
      expect.stringContaining('INSERT INTO quizzes'),
      [
        quizDetails.title,
        quizDetails.description,
        quizDetails.teacher_id,
        quizDetails.time_limit,
        quizDetails.passing_score,
        quizDetails.is_published,
      ]
    );
    expect(result).toBe(42);
  });

  it('updateQuiz should return affectedRows', async () => {
    db.query.mockResolvedValue({ affectedRows: 2 });
    const result = await quizModel.updateQuiz(5, { title: 'New', is_published: 0 });
    expect(db.query).toHaveBeenCalledWith(
      expect.stringContaining('UPDATE quizzes SET'),
      ['New', 0, 5]
    );
    expect(result).toBe(2);
  });

  it('deleteQuiz should return affectedRows', async () => {
    db.query.mockResolvedValue({ affectedRows: 3 });
    const result = await quizModel.deleteQuiz(3);
    expect(db.query).toHaveBeenCalledWith(
      expect.stringContaining('DELETE FROM quizzes'),
      [3]
    );
    expect(result).toBe(3);
  });

  it('findById should return single quiz', async () => {
    const rows = [{ id: 10, title: 'Quiz' }];
    db.query.mockResolvedValue(rows);
    const result = await quizModel.findById(10);
    expect(db.query).toHaveBeenCalledWith(
      expect.stringContaining('SELECT * FROM quizzes WHERE id'),
      [10]
    );
    expect(result).toEqual(rows[0]);
  });

  it('findAll should return array of quizzes', async () => {
    const list = [{ id: 1 }, { id: 2 }];
    db.query.mockResolvedValue(list);
    const result = await quizModel.findAll();
    expect(db.query).toHaveBeenCalledWith(expect.stringContaining('SELECT * FROM quizzes'));
    expect(result).toEqual(list);
  });

  it('findByTeacher should return array', async () => {
    const list = [{ id: 3 }];
    db.query.mockResolvedValue(list);
    const result = await quizModel.findByTeacher(7);
    expect(db.query).toHaveBeenCalledWith(
      expect.stringContaining('WHERE teacher_id'),
      [7]
    );
    expect(result).toEqual(list);
  });

  it('findAvailable should return array', async () => {
    const list = [{ id: 8 }];
    db.query.mockResolvedValue(list);
    const result = await quizModel.findAvailable();
    expect(db.query).toHaveBeenCalledWith(
      expect.stringContaining('WHERE is_published'),
      undefined
    );
    expect(result).toEqual(list);
  });
}); 