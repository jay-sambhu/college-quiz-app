const express = require('express');
const router = express.Router();
const { authenticate, requireRole } = require('../middleware/auth');
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getTeacherList,
  getStudentList
} = require('../controllers/userController');

// Protected routes - All require authentication
router.use(authenticate);

// Admin routes
router.get('/', requireRole('admin'), getAllUsers);
router.delete('/:id', requireRole('admin'), deleteUser);

// Teacher routes
router.get('/students', requireRole('teacher'), getStudentList);

// Admin and Student shared routes
router.get('/teachers', requireRole(['admin', 'student']), getTeacherList);

// Shared routes
router.get('/:id', requireRole(['admin', 'teacher']), getUserById);
router.put('/:id', requireRole('admin'), updateUser);

module.exports = router; 