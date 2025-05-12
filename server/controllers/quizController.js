const quizModel = require('../models/quizModel');
const questionModel = require('../models/questionModel'); // to be implemented in models/questionModel.js
const submissionModel = require('../models/submissionModel'); // to be implemented
const { createAnswer, findBySubmission } = require('../models/answerModel');

/**
 * Create a new quiz (Teacher only).
 * @param {import('express').Request} req  - must include quiz details in body
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
exports.createQuiz = async (req, res, next) => {
  try {
    const teacher_id = req.user.id;
    const quizData = { ...req.body, teacher_id };
    const newId = await quizModel.createQuiz(quizData);
    res.status(201).json({ id: newId });
  } catch (err) {
    next(err);
  }
};

/**
 * Update a quiz by ID (Teacher only).
 */
exports.updateQuiz = async (req, res, next) => {
  try {
    const id = req.params.id;
    const fields = req.body;
    const affected = await quizModel.updateQuiz(id, fields);
    if (!affected) return res.status(404).json({ message: 'Quiz not found or no change' });
    res.json({ message: 'Quiz updated' });
  } catch (err) {
    next(err);
  }
};

/**
 * Delete a quiz by ID (Teacher only).
 */
exports.deleteQuiz = async (req, res, next) => {
  try {
    const id = req.params.id;
    const affected = await quizModel.deleteQuiz(id);
    if (!affected) return res.status(404).json({ message: 'Quiz not found' });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

/**
 * Get a quiz by ID, including its questions.
 */
exports.getQuizById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const quiz = await quizModel.findById(id);
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
    const questions = await questionModel.findByQuizId(id);
    res.json({ quiz, questions });
  } catch (err) {
    next(err);
  }
};

/**
 * Get all quizzes (Admin only).
 */
exports.getAllQuizzes = async (req, res, next) => {
  try {
    const quizzes = await quizModel.findAll();
    res.json(quizzes);
  } catch (err) {
    next(err);
  }
};

/**
 * Get quizzes for the authenticated teacher.
 */
exports.getQuizzesByTeacher = async (req, res, next) => {
  try {
    const teacherId = req.user.id;
    const quizzes = await quizModel.findByTeacher(teacherId);
    res.json(quizzes);
  } catch (err) {
    next(err);
  }
};

/**
 * Get available (published) quizzes (Student only).
 */
exports.getAvailableQuizzes = async (req, res, next) => {
  try {
    const quizzes = await quizModel.findAvailable();
    res.json(quizzes);
  } catch (err) {
    next(err);
  }
};

/**
 * Submit a quiz (Student only).
 * @body {answers: Record<questionId, selectedOption>, timeTaken: number}
 */
exports.submitQuiz = async (req, res, next) => {
  try {
    const quizId = req.params.id;
    const studentId = req.user.id;
    const { answers = {}, timeTaken } = req.body;

    // Fetch correct answers
    const questions = await questionModel.findByQuizId(quizId);
    let correctCount = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correct_option) correctCount++;
    });

    // Score calculation
    const score = Math.round((correctCount / questions.length) * 100);

    // Record submission
    const subId = await submissionModel.create({ quiz_id: quizId, student_id: studentId, score, time_taken: timeTaken });

    // Record each answer
    for (const [qId, selected] of Object.entries(answers)) {
      await createAnswer({ submission_id: subId, question_id: qId, selected_option: selected });
    }

    res.status(201).json({ submissionId: subId, score, correctCount, total: questions.length });
  } catch (err) {
    next(err);
  }
};

/**
 * Get quiz results for a given user (Student & Teacher).
 */
exports.getQuizResults = async (req, res, next) => {
  try {
    const quizId = req.params.id;
    const userId = req.params.userId;
    const submission = await submissionModel.findByQuizAndUser(quizId, userId);
    if (!submission) return res.status(404).json({ message: 'Submission not found' });
    const answersList = await findBySubmission(submission.id);
    res.json({ submission, answers: answersList });
  } catch (err) {
    next(err);
  }
}; 