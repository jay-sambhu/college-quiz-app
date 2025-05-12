const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { authenticate, requireRole } = require('../middleware/auth');
const {
  rateTeacher,
  updateRating,
  deleteRating,
  getTeacherRatings,
  getStudentRatings
} = require('../controllers/ratingController');

// Protected routes - All require authentication
router.use(authenticate);

// Debug middleware for rating routes
router.use((req, res, next) => {
  console.log('⭐ Rating API Request:', {
    method: req.method,
    url: req.originalUrl,
    userId: req.user?.userId
  });
  next();
});

// Student-only routes
router.post('/teacher/:teacherId', requireRole('student'), [
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
  body('comment').optional().trim().isLength({ min: 3, max: 500 }).withMessage('Comment must be between 3 and 500 characters')
], rateTeacher);

router.get('/my', getStudentRatings);

// Rating management
router.put('/:id', [
  body('rating').optional().isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
  body('comment').optional().trim().isLength({ min: 3, max: 500 }).withMessage('Comment must be between 3 and 500 characters')
], updateRating);

router.delete('/:id', deleteRating);

// Get ratings for a specific teacher
router.get('/teacher/:teacherId', getTeacherRatings);

module.exports = router; 