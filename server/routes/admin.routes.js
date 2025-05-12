const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authenticate, requireRole } = require('../middleware/auth');

// All routes require admin role
router.use(authenticate, requireRole('admin'));

// Debug middleware for admin routes
router.use((req, res, next) => {
  console.log('👑 Admin API Request:', {
    method: req.method,
    url: req.originalUrl,
    userId: req.user?.userId
  });
  next();
});

// Admin routes
router.get('/users', adminController.getAllUsers);
router.put('/users/:userId/role', adminController.updateUserRole);
router.get('/stats', adminController.getAdminStats);

module.exports = router; 