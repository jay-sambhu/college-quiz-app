const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');
const { authenticate, requireRole } = require('../middleware/auth');

// All routes require teacher role
router.use(authenticate, requireRole('teacher'));

// Debug middleware for teacher routes
router.use((req, res, next) => {
  console.log('🧑‍🏫 Teacher API Request:', {
    method: req.method,
    url: req.originalUrl,
    userId: req.user?.userId
  });
  next();
});

// Teacher routes
router.get('/subjects', teacherController.getTeacherSubjects);
router.get('/quizzes', teacherController.getTeacherQuizzes);
router.get('/notes', teacherController.getTeacherNotes);
router.get('/stats', teacherController.getTeacherStats);

module.exports = router; 