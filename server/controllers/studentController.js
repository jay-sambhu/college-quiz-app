const Quiz = require('../models/Quiz');
const QuizSubmission = require('../models/QuizSubmission');

/**
 * Student controller for student-specific operations
 */

/**
 * Get all available quizzes for students
 */
exports.getAvailableQuizzes = async (req, res) => {
  try {
    // Get all published quizzes with teacher info
    const quizzes = await Quiz.findAllWithTeacher();
    
    // Check if student has already taken each quiz
    const studentId = req.user.userId;
    const quizzesWithStatus = await Promise.all(quizzes.map(async (quiz) => {
      const submission = await QuizSubmission.findOne({
        quiz_id: quiz.id,
        student_id: studentId
      });
      
      return {
        ...quiz,
        questionCount: quiz.question_count,
        taken: !!submission,
        score: submission?.score || null
      };
    }));
    
    res.json(quizzesWithStatus);
  } catch (error) {
    console.error('Error fetching available quizzes:', error);
    res.status(500).json({ message: 'Error fetching quizzes', error: error.message });
  }
};

/**
 * Get quiz details for student
 */
exports.getQuizDetails = async (req, res) => {
  try {
    const quizId = Number(req.params.quizId);
    const studentId = req.user.userId;
    
    // Get quiz with questions
    const quiz = await Quiz.findByIdWithQuestions(quizId);
    
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    
    if (!quiz.is_published) {
      return res.status(403).json({ message: 'This quiz is not available' });
    }
    
    // Check if student has already taken the quiz
    const submission = await QuizSubmission.findOne({
      quiz_id: quizId,
      student_id: studentId
    });
    
    // Remove correct answers if quiz hasn't been taken
    if (!submission) {
      quiz.questions = quiz.questions.map(q => ({
        id: q.id,
        text: q.text,
        optionA: q.optionA,
        optionB: q.optionB,
        optionC: q.optionC,
        optionD: q.optionD
      }));
    }
    
    res.json({
      ...quiz,
      taken: !!submission,
      score: submission?.score || null,
      questions: !submission ? quiz.questions : []
    });
  } catch (error) {
    console.error('Error fetching quiz details:', error);
    res.status(500).json({ message: 'Error fetching quiz details', error: error.message });
  }
};

/**
 * Submit quiz answers
 */
exports.submitQuiz = async (req, res) => {
  try {
    const quizId = Number(req.params.quizId);
    const studentId = req.user.userId;
    const { answers, timeTaken } = req.body;
    
    // Validate request
    if (!Array.isArray(answers) || !timeTaken) {
      return res.status(400).json({ message: 'Invalid submission data' });
    }
    
    // Get quiz with questions
    const quiz = await Quiz.findByIdWithQuestions(quizId);
    
    if (!quiz || !quiz.is_published) {
      return res.status(404).json({ message: 'Quiz not found or not available' });
    }
    
    // Check if student has already submitted this quiz
    const existingSubmission = await QuizSubmission.findOne({
      quiz_id: quizId,
      student_id: studentId
    });
    
    if (existingSubmission) {
      return res.status(400).json({ message: 'You have already submitted this quiz' });
    }
    
    // Calculate score
    let correctAnswers = 0;
    const validAnswers = answers.filter(answer => {
      const question = quiz.questions.find(q => q.id === Number(answer.questionId));
      if (question && question.correctOption === answer.selectedOption) {
        correctAnswers++;
      }
      return !!question;
    });
    
    const totalQuestions = quiz.questions.length;
    const score = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Create submission with answers
    const submission = await QuizSubmission.createWithAnswers(
      {
        quizId,
        studentId,
        score,
        timeTaken
      },
      validAnswers.map(a => ({
        questionId: a.questionId,
        selectedOption: a.selectedOption
      }))
    );
    
    res.status(201).json({
      id: submission.id,
      score,
      timeTaken,
      submittedAt: submission.submitted_at,
      passed: score >= quiz.passing_score
    });
  } catch (error) {
    console.error('Error submitting quiz:', error);
    res.status(500).json({ message: 'Error submitting quiz', error: error.message });
  }
};

/**
 * Get student quiz history
 */
exports.getQuizHistory = async (req, res) => {
  try {
    const studentId = req.user.userId;
    const submissions = await QuizSubmission.findByStudent(studentId);
    res.json(submissions);
  } catch (error) {
    console.error('Error fetching quiz history:', error);
    res.status(500).json({ message: 'Error fetching quiz history', error: error.message });
  }
};

/**
 * Get student dashboard stats
 */
exports.getStudentStats = async (req, res) => {
  try {
    const studentId = req.user.userId;
    
    // Get count of quizzes taken
    const quizzesTaken = (await QuizSubmission.count({ student_id: studentId }))[0].count;
    
    // Get all submissions for average score
    const submissions = await QuizSubmission.findByStudent(studentId);
    const avgScore = submissions.length > 0
      ? submissions.reduce((sum, sub) => sum + sub.score, 0) / submissions.length
      : 0;
    
    // Get recent activity (submissions in last 7 days)
    const recentActivity = (await QuizSubmission.countSince('submitted_at', 7))[0].count;
    
    res.json({
      quizzesTaken,
      avgScore: avgScore.toFixed(1),
      recentActivity
    });
  } catch (error) {
    console.error('Error fetching student stats:', error);
    res.status(500).json({ message: 'Error fetching stats', error: error.message });
  }
}; 