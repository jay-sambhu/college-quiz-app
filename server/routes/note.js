const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { authenticate } = require('../middleware/auth');
const {
  createNote,
  updateNote,
  deleteNote,
  getNoteById,
  getNotesByUser,
  getAllNotes,
  shareNote,
  unshareNote
} = require('../controllers/noteController');

// Protected routes - All require authentication
router.use(authenticate);

// Debug middleware for note routes
router.use((req, res, next) => {
  console.log('📝 Note API Request:', {
    method: req.method,
    url: req.originalUrl,
    userId: req.user?.userId
  });
  next();
});

// Create a new note
router.post('/', [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('content').trim().notEmpty().withMessage('Content is required'),
  body('isPublic').optional().isBoolean()
], createNote);

// Get all notes (admin only)
router.get('/all', getAllNotes);

// Get user's notes
router.get('/my', getNotesByUser);

// Get, update, delete a specific note
router.get('/:id', getNoteById);
router.put('/:id', [
  body('title').optional().trim().notEmpty(),
  body('content').optional().trim().notEmpty(),
  body('isPublic').optional().isBoolean()
], updateNote);
router.delete('/:id', deleteNote);

// Share/unshare note with a student
router.post('/:id/share', [
  body('studentId').isNumeric().withMessage('Valid student ID is required')
], shareNote);
router.post('/:id/unshare', [
  body('studentId').isNumeric().withMessage('Valid student ID is required')
], unshareNote);

module.exports = router; 