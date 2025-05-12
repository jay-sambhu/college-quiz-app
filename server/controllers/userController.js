const User = require('../models/User');

/**
 * Get all users (Admin only).
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

/**
 * Get a single user by ID.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
exports.getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
};

/**
 * Update a user's details (Admin only).
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
exports.updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const fields = req.body;
    const affected = await User.update(id, fields);
    if (!affected) {
      return res.status(404).json({ message: 'User not found or no changes made' });
    }
    const updatedUser = await User.findById(id);
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
};

/**
 * Delete a user by ID (Admin only).
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
exports.deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const affected = await User.delete(id);
    if (!affected) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

/**
 * Get list of teacher users.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
exports.getTeacherList = async (req, res, next) => {
  try {
    const teachers = await User.findAll({ role: 'teacher' });
    res.json(teachers);
  } catch (err) {
    next(err);
  }
};

/**
 * Get list of student users.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
exports.getStudentList = async (req, res, next) => {
  try {
    const students = await User.findAll({ role: 'student' });
    res.json(students);
  } catch (err) {
    next(err);
  }
}; 