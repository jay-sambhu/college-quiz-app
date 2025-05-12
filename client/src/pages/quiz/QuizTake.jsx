import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Paper,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  LinearProgress,
} from '@mui/material';
import { toast } from 'react-toastify';
import useApi from '../../hooks/useApi';
import useQuizTimer from '../../hooks/useQuizTimer';
import useQuizProgress from '../../hooks/useQuizProgress';
import { getStudentQuiz, submitQuiz } from '../../services/api';

const QuizTake = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { execute: fetchQuiz, data: quizRes, loading: loadingQuiz } = useApi(getStudentQuiz);
  const { execute: doSubmit, loading: submitting } = useApi(submitQuiz);

  const quiz = quizRes?.data;
  const questions = quiz?.questions || [];

  const {
    currentQuestion,
    currentQuestionIndex,
    answers,
    progress,
    isComplete,
    handleAnswer,
    nextQuestion,
    previousQuestion,
  } = useQuizProgress(questions);

  const {
    timeLeft,
    formattedTime,
    startTimer,
  } = useQuizTimer(quiz?.timeLimit || 0, () => {
    toast.info('Time is up! Submitting quiz...');
    handleSubmit();
  });

  useEffect(() => {
    fetchQuiz(id)
      .then(() => startTimer())
      .catch(() => {
        toast.error('Failed to load quiz');
        navigate('/student');
      });
  }, [id]);

  const handleSubmit = async () => {
    try {
      const answersArray = Object.entries(answers).map(([questionId, answer]) => ({
        question_id: questionId,
        selected_option: answer,
      }));
      await doSubmit(id, answersArray, quiz.timeLimit * 60 - timeLeft);
      toast.success('Quiz submitted successfully');
      navigate(`/quiz/${id}/results`);
    } catch {
      toast.error('Failed to submit quiz');
    }
  };

  if (loadingQuiz) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!quiz) return null;

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4">{quiz.title}</Typography>
        <Typography
          variant="h6"
          color={timeLeft < 60 ? 'error' : 'textPrimary'}
        >
          Time Left: {formattedTime}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ height: 10, borderRadius: 5, mb: 3 }}
      />
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Question {currentQuestionIndex + 1} of {questions.length}
        </Typography>
        <Typography variant="body1" paragraph>
          {currentQuestion?.text}
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            value={answers[currentQuestion?.id] || ''}
            onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
          >
            {currentQuestion?.options.map((option, idx) => (
              <FormControlLabel
                key={idx}
                value={idx.toString()}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button
            disabled={currentQuestionIndex === 0}
            onClick={previousQuestion}
          >
            Previous
          </Button>
          {!isComplete ? (
            <Button
              variant="contained"
              onClick={nextQuestion}
              disabled={!answers[currentQuestion.id]}
            >
              Next
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit Quiz'}
            </Button>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default QuizTake; 