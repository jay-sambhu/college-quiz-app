import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  CircularProgress,
  Chip,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import { getAvailableQuizzes, getMyQuizResults, getLoginStreak, getLoginHistory } from '../../services/api';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [quizzes, setQuizzes] = useState([]);
  const [results, setResults] = useState({});
  const [streak, setStreak] = useState(null);
  const [loginHistory, setLoginHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [allQuizzesRes, quizResults, streakRes, historyRes] = await Promise.all([
          getAvailableQuizzes(),
          Promise.all(
            (await getAvailableQuizzes()).map((quiz) =>
              getMyQuizResults(quiz.id).catch(() => null)
            )
          ),
          getLoginStreak(),
          getLoginHistory(),
        ]);

        const allQuizzes = allQuizzesRes.data;
        setQuizzes(allQuizzes);
        const resultsMap = {};
        quizResults.forEach((result, index) => {
          if (result) {
            resultsMap[allQuizzes[index].id] = result;
          }
        });
        setResults(resultsMap);
        setStreak(streakRes.data.streak);
        setLoginHistory(historyRes.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user.id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Login Streak: {streak ?? '-'}</Typography>
      </Box>
      {loginHistory.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">Login History</Typography>
          <List>
            {loginHistory.map((entry) => (
              <ListItem key={entry.id || entry.date}>
                <ListItemText primary={new Date(entry.date).toLocaleDateString()} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Available Quizzes
        </Typography>
        <Grid container spacing={3}>
          {quizzes.map((quiz) => {
            const result = results[quiz.id];
            const hasAttempted = !!result;
            const score = result
              ? (result.correctAnswers / quiz.questions.length) * 100
              : null;
            const passed = score >= quiz.passingScore;

            return (
              <Grid item xs={12} sm={6} md={4} key={quiz.id}>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    {quiz.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {quiz.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Typography variant="body2">
                      Time Limit: {quiz.timeLimit} min
                    </Typography>
                    <Typography variant="body2">
                      Passing Score: {quiz.passingScore}%
                    </Typography>
                  </Box>
                  {hasAttempted && (
                    <Box sx={{ mt: 2 }}>
                      <Chip
                        label={`Score: ${score.toFixed(1)}%`}
                        color={passed ? 'success' : 'error'}
                      />
                    </Box>
                  )}
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() =>
                        hasAttempted
                          ? navigate(`/quiz/${quiz.id}/results`)
                          : navigate(`/quiz/${quiz.id}/take`)
                      }
                    >
                      {hasAttempted ? 'View Results' : 'Take Quiz'}
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
        <Button variant="outlined" size="small" onClick={() => navigate('/student/leaderboard')}>
          Leaderboard
        </Button>
        <Button variant="outlined" size="small" onClick={() => navigate('/student/feedback')}>
          Feedback
        </Button>
        <Button variant="outlined" size="small" onClick={() => navigate('/student/profile')}>
          Profile
        </Button>
      </Box>
    </Container>
  );
};

export default StudentDashboard; 