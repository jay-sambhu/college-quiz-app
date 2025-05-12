const ratingService = require('../services/ratingService');
const userService = require('../services/userService');
const { validationResult } = require('express-validator');

/**
 * Rate a teacher
 */
exports.rateTeacher = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const teacherId = Number(req.params.teacherId);
    const studentId = req.user.userId;
    const { rating, comment } = req.body;

    // Verify the teacher exists and has the teacher role
    const teacher = await userService.findById(teacherId);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    if (teacher.role !== 'teacher') {
      return res.status(400).json({ message: 'The specified user is not a teacher' });
    }

    // Students can't rate themselves
    if (teacherId === studentId) {
      return res.status(400).json({ message: 'You cannot rate yourself' });
    }

    const ratingRecord = await ratingService.create({
      teacherId,
      studentId,
      rating,
      comment
    });

    res.status(201).json(ratingRecord);
  } catch (error) {
    console.error('Error rating teacher:', error);
    res.status(500).json({ message: 'Error rating teacher', error: error.message });
  }
};

/**
 * Update a rating
 */
exports.updateRating = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const ratingId = Number(req.params.id);
    const studentId = req.user.userId;
    const { rating, comment } = req.body;

    // Check if rating exists and belongs to the student
    const existingRating = await ratingService.findById(ratingId);
    if (!existingRating) {
      return res.status(404).json({ message: 'Rating not found' });
    }

    if (existingRating.studentId !== studentId && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'You do not have permission to update this rating' });
    }

    const updatedRating = await ratingService.update(ratingId, { rating, comment });
    res.json(updatedRating);
  } catch (error) {
    console.error('Error updating rating:', error);
    res.status(500).json({ message: 'Error updating rating', error: error.message });
  }
};

/**
 * Delete a rating
 */
exports.deleteRating = async (req, res) => {
  try {
    const ratingId = Number(req.params.id);
    const studentId = req.user.userId;

    // Check if rating exists and belongs to the student
    const existingRating = await ratingService.findById(ratingId);
    if (!existingRating) {
      return res.status(404).json({ message: 'Rating not found' });
    }

    if (existingRating.studentId !== studentId && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'You do not have permission to delete this rating' });
    }

    await ratingService.delete(ratingId);
    res.json({ message: 'Rating deleted successfully' });
  } catch (error) {
    console.error('Error deleting rating:', error);
    res.status(500).json({ message: 'Error deleting rating', error: error.message });
  }
};

/**
 * Get ratings for a teacher
 */
exports.getTeacherRatings = async (req, res) => {
  try {
    const teacherId = Number(req.params.teacherId);
    
    // Verify the teacher exists
    const teacher = await userService.findById(teacherId);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    const ratings = await ratingService.findByTeacher(teacherId);
    const stats = await ratingService.getTeacherStats(teacherId);

    res.json({
      teacher: {
        id: teacher.id,
        username: teacher.username,
        firstName: teacher.firstName,
        lastName: teacher.lastName
      },
      ratings,
      stats
    });
  } catch (error) {
    console.error('Error fetching teacher ratings:', error);
    res.status(500).json({ message: 'Error fetching ratings', error: error.message });
  }
};

/**
 * Get ratings by a student
 */
exports.getStudentRatings = async (req, res) => {
  try {
    const studentId = req.user.userId;
    const ratings = await ratingService.findByStudent(studentId);
    res.json(ratings);
  } catch (error) {
    console.error('Error fetching student ratings:', error);
    res.status(500).json({ message: 'Error fetching ratings', error: error.message });
  }
}; 