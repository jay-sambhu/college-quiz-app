const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { authenticate, requireRole } = require('../middleware/auth');
const {
  createQuiz,
  updateQuiz,
  deleteQuiz,
  getQuizById,
  getAllQuizzes,
  getQuizzesByTeacher,
  getAvailableQuizzes,
  submitQuiz,
  getQuizResults
} = require('../controllers/quizController');

// Debug middleware for quiz routes
router.use((req, res, next) => {
  console.log('📝 Quiz API Request:', {
    method: req.method,
    url: req.originalUrl,
    userId: req.user?.id
  });
  next();
});

// Protected routes - All require authentication
router.use(authenticate);

// Teacher routes
router.post('/', requireRole('teacher'), createQuiz);
router.put('/:id', requireRole('teacher'), updateQuiz);
router.delete('/:id', requireRole('teacher'), deleteQuiz);
router.get('/teacher', requireRole('teacher'), getQuizzesByTeacher);

// Student routes
router.get('/available', requireRole('student'), getAvailableQuizzes);
router.post('/:id/submit', requireRole('student'), submitQuiz);
router.get('/:id/results/:userId', requireRole(['student', 'teacher']), getQuizResults);

// Shared routes
router.get('/:id', requireRole(['teacher', 'student']), getQuizById);

// Admin routes
router.get('/', requireRole('admin'), getAllQuizzes);

module.exports = router; 