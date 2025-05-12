const express = require('express');
const { body } = require('express-validator');
const quizController = require('../controllers/quiz.controller');
const { verifyToken, isTeacher } = require('../middleware/auth.middleware');

const router = express.Router();

// Protected routes that require authentication and teacher role
router.use(verifyToken, isTeacher);

router.post(
  '/',
  [
    body('title').trim().isLength({ min: 3 }),
    body('description').trim().isLength({ min: 10 })
  ],
  quizController.createQuiz
);

router.put(
  '/:quizId',
  [
    body('title').trim().isLength({ min: 3 }),
    body('description').trim().isLength({ min: 10 })
  ],
  quizController.updateQuiz
);

router.delete('/:quizId', quizController.deleteQuiz);

router.get('/teacher', quizController.getTeacherQuizzes);

// Public routes
router.get('/:quizId', quizController.getQuiz);
router.get('/', quizController.getAllQuizzes);

module.exports = router; 