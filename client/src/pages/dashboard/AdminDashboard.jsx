import { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  CircularProgress,
} from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import { getAllQuizzes, getAllUsers } from '../../services/api';

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalQuizzes: 0,
    totalUsers: 0,
    totalTeachers: 0,
    totalStudents: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [quizzes, users] = await Promise.all([
          getAllQuizzes(),
          getAllUsers(),
        ]);

        const teachers = users.filter((user) => user.role === 'teacher');
        const students = users.filter((user) => user.role === 'student');

        setStats({
          totalQuizzes: quizzes.length,
          totalUsers: users.length,
          totalTeachers: teachers.length,
          totalStudents: students.length,
        });
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

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
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h4" color="primary">
                {stats.totalQuizzes}
              </Typography>
              <Typography variant="subtitle1">Total Quizzes</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h4" color="primary">
                {stats.totalUsers}
              </Typography>
              <Typography variant="subtitle1">Total Users</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h4" color="primary">
                {stats.totalTeachers}
              </Typography>
              <Typography variant="subtitle1">Teachers</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h4" color="primary">
                {stats.totalStudents}
              </Typography>
              <Typography variant="subtitle1">Students</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AdminDashboard; 