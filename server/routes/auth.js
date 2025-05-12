const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { authenticate } = require('../middleware/auth');

// Log incoming requests to auth routes
router.use((req, res, next) => {
  console.log('🔐 Auth Route Request:', {
    method: req.method,
    url: req.originalUrl,
    body: req.body,
    headers: {
      'content-type': req.headers['content-type'],
      authorization: req.headers.authorization ? 'Present' : 'Not present'
    }
  });
  next();
});

// Public routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Protected routes
router.get('/me', authenticate, authController.getCurrentUser);
router.put('/profile', authenticate, authController.updateProfile);
router.put('/change-password', authenticate, authController.changePassword);

module.exports = router; 