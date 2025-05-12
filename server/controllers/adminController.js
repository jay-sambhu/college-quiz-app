const userService = require('../services/userService');
const User = require('../models/User');
const Quiz = require('../models/Quiz');
const QuizSubmission = require('../models/QuizSubmission');

/**
 * Admin controller for admin-specific operations
 */

/**
 * Get all users
 */
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};

/**
 * Update user role
 */
exports.updateUserRole = async (req, res) => {
  try {
    const userId = Number(req.params.userId);
    const { role } = req.body;
    
    if (!role || !['admin', 'teacher', 'student'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role' });
    }
    
    const updatedUser = await userService.update(userId, { role });
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user role:', error);
    res.status(500).json({ message: 'Error updating user role', error: error.message });
  }
};

/**
 * Get admin dashboard stats
 */
exports.getAdminStats = async (req, res) => {
  try {
    // Get user counts
    const totalUsers = (await User.count())[0].count;
    const teacherCount = (await User.count({ role: 'teacher' }))[0].count;
    const studentCount = (await User.count({ role: 'student' }))[0].count;
    
    // Get quiz counts
    const totalQuizzes = (await Quiz.count())[0].count;
    const publishedQuizzes = (await Quiz.count({ is_published: 1 }))[0].count;
    
    // Get submission counts
    const totalSubmissions = (await QuizSubmission.count())[0].count;
    
    // Get average scores
    const submissions = await QuizSubmission.findAll();
    const avgScore = submissions.length > 0
      ? submissions.reduce((sum, sub) => sum + (sub.score || 0), 0) / submissions.length
      : 0;
    
    // Get recent registrations (last 30 days)
    const recentUsers = (await User.countSince('created_at', 30))[0].count;
    
    // Get recent activity (submissions in last 7 days)
    const recentActivity = (await QuizSubmission.countSince('submitted_at', 7))[0].count;
    
    res.json({
      totalUsers,
      teacherCount,
      studentCount,
      totalQuizzes,
      publishedQuizzes,
      totalSubmissions,
      avgScore: avgScore.toFixed(1),
      recentUsers,
      recentActivity
    });
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    res.status(500).json({ message: 'Error fetching stats', error: error.message });
  }
}; 