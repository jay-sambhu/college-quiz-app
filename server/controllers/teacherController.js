const Quiz = require('../models/Quiz');
const Note = require('../models/Note');
const TeacherRating = require('../models/TeacherRating');
const QuizSubmission = require('../models/QuizSubmission');

/**
 * Teacher controller for teacher-specific operations
 */
exports.getTeacherSubjects = async (req, res) => {
  try {
    // For now, we'll return a mock list of subjects since there's no subjects table
    const subjects = [
      { id: 1, name: 'Mathematics', description: 'Study of numbers, quantities, and shapes' },
      { id: 2, name: 'Computer Science', description: 'Study of computers and computational systems' },
      { id: 3, name: 'Physics', description: 'Study of matter, energy, and their interactions' },
      { id: 4, name: 'English', description: 'Study of language and literature' }
    ];
    
    res.json(subjects);
  } catch (error) {
    console.error('Error fetching subjects:', error);
    res.status(500).json({ message: 'Error fetching subjects', error: error.message });
  }
};

/**
 * Get all quizzes created by the teacher
 */
exports.getTeacherQuizzes = async (req, res) => {
  try {
    const teacherId = req.user.userId;
    const quizzes = await Quiz.findByTeacher(teacherId);
    res.json(quizzes);
  } catch (error) {
    console.error('Error fetching teacher quizzes:', error);
    res.status(500).json({ message: 'Error fetching quizzes', error: error.message });
  }
};

/**
 * Get all notes created by the teacher
 */
exports.getTeacherNotes = async (req, res) => {
  try {
    const teacherId = req.user.userId;
    const notes = await Note.findByUser(teacherId);
    res.json(notes);
  } catch (error) {
    console.error('Error fetching teacher notes:', error);
    res.status(500).json({ message: 'Error fetching notes', error: error.message });
  }
};

/**
 * Get teacher dashboard stats
 */
exports.getTeacherStats = async (req, res) => {
  try {
    const teacherId = req.user.userId;
    
    // Get count of quizzes created by teacher
    const quizCount = (await Quiz.count({ teacher_id: teacherId }))[0].count;
    
    // Get count of published quizzes
    const publishedQuizCount = (await Quiz.count({ 
      teacher_id: teacherId,
      is_published: true
    }))[0].count;
    
    // Get count of student submissions for teacher's quizzes
    const submissionCount = (await QuizSubmission.count({
      quiz: {
        teacher_id: teacherId
      }
    }))[0].count;
    
    // Get count of notes created by teacher
    const noteCount = (await Note.count({ user_id: teacherId }))[0].count;
    
    // Get average ratings for teacher
    const ratings = await TeacherRating.findByTeacher(teacherId);
    const avgRating = ratings.length > 0
      ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length
      : 0;
    
    res.json({
      quizCount,
      publishedQuizCount,
      submissionCount,
      noteCount,
      ratingCount: ratings.length,
      avgRating: avgRating.toFixed(1)
    });
  } catch (error) {
    console.error('Error fetching teacher stats:', error);
    res.status(500).json({ message: 'Error fetching stats', error: error.message });
  }
}; 