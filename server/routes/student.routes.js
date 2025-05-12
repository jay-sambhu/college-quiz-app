const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const { authenticate, requireRole } = require('../middleware/auth');

// All routes require student role
router.use(authenticate, requireRole('student'));

// Debug middleware for student routes
router.use((req, res, next) => {
  console.log('🧑‍🎓 Student API Request:', {
    method: req.method,
    url: req.originalUrl,
    userId: req.user?.userId
  });
  next();
});

// Student routes
router.get('/quizzes/available', studentController.getAvailableQuizzes);
router.get('/quizzes/:quizId', studentController.getQuizDetails);
router.post('/quizzes/:quizId/submit', studentController.submitQuiz);
router.get('/quizzes/history', studentController.getQuizHistory);
router.get('/stats', studentController.getStudentStats);

module.exports = router; 