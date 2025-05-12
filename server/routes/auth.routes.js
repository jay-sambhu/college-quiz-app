const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/auth.controller');
const router = express.Router();

router.post(
  '/register',
  [
    body('username').trim().isLength({ min: 3 }),
    body('email').isEmail().normalizeEmail(),
    body('password').trim().isLength({ min: 6 }),
    body('role').isIn(['admin', 'teacher', 'student'])
  ],
  authController.register
);

router.post(
  '/login',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').trim().not().isEmpty()
  ],
  authController.login
);

module.exports = router; 