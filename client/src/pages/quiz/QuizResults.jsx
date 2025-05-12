import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Paper,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import { getStudentQuiz, getQuizResults } from '../../services/api';
import { toast } from 'react-toastify';

const QuizResults = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const [quizData, resultsData] = await Promise.all([
          getStudentQuiz(id),
          getQuizResults(id, user.id),
        ]);
        setQuiz(quizData.data);
        setResults(resultsData.data);
      } catch (error) {
        console.error('Error fetching quiz results:', error);
        setError(error.response?.data?.message || 'Failed to load quiz results');
        toast.error('Failed to load quiz results');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, user.id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md">
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h5" color="error" gutterBottom>
            {error}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/student')}
            sx={{ mt: 2 }}
          >
            Return to Dashboard
          </Button>
        </Box>
      </Container>
    );
  }

  if (!results) {
    return (
      <Container maxWidth="md">
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            No results found for this quiz.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/student')}
            sx={{ mt: 2 }}
          >
            Return to Dashboard
          </Button>
        </Box>
      </Container>
    );
  }

  const score = (results.correctAnswers / quiz.questions.length) * 100;
  const passed = score >= quiz.passingScore;

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Quiz Results: {quiz.title}
          </Typography>
          <Typography variant="h5" color={passed ? 'success.main' : 'error.main'}>
            Score: {score.toFixed(1)}% ({passed ? 'Passed' : 'Failed'})
          </Typography>
          <Typography variant="body1" paragraph>
            Passing Score: {quiz.passingScore}%
          </Typography>

          <List>
            {quiz.questions.map((question, index) => (
              <div key={index}>
                <ListItem>
                  <ListItemText
                    primary={`Question ${index + 1}`}
                    secondary={
                      <>
                        <Typography component="span" variant="body1">
                          {question.text}
                        </Typography>
                        <br />
                        <Typography
                          component="span"
                          variant="body2"
                          color={
                            results.answers[index] === question.correctOption
                              ? 'success.main'
                              : 'error.main'
                          }
                        >
                          Your answer: {question.options[results.answers[index]]}
                          <br />
                          Correct answer: {question.options[question.correctOption]}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
                {index < quiz.questions.length - 1 && <Divider />}
              </div>
            ))}
          </List>
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/student')}
            >
              Return to Dashboard
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default QuizResults; 