import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  CircularProgress
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';
import { getMySubjects, getTeacherQuizzes, getTeacherNotes } from '../../services/api';
import useApi from '../../hooks/useApi';

/**
 * TeacherDashboard displays a teacher's subjects, quizzes, and notes.
 */
const TeacherDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Hooks to fetch data
  const { execute: loadSubjects, data: subjects, loading: loadingSubjects } = useApi(getMySubjects);
  const { execute: loadQuizzes, data: quizzes, loading: loadingQuizzes } = useApi(getTeacherQuizzes);
  const { execute: loadNotes, data: notes, loading: loadingNotes } = useApi(getTeacherNotes);

  useEffect(() => {
    loadSubjects();
    loadQuizzes();
    loadNotes();
  }, [loadSubjects, loadQuizzes, loadNotes]);

  // Show loader if any section is loading
  const loading = loadingSubjects || loadingQuizzes || loadingNotes;
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
        {/* Subjects Section */}
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h4">My Subjects</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate('/teacher/subjects')}
          >
            Add Subject
          </Button>
        </Box>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {subjects?.map((sub) => (
            <Grid item key={sub.id} xs={12} sm={6} md={4}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6">{sub.name}</Typography>
                <Button
                  size="small"
                  onClick={() => navigate(`/teacher/subjects/${sub.id}/questions`)}
                >
                  Manage Questions
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Quizzes Section */}
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h4">My Quizzes</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate('/teacher/quizzes/create')}
          >
            Create Quiz
          </Button>
        </Box>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {quizzes?.map((quiz) => (
            <Grid item key={quiz.id} xs={12} sm={6} md={4}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6">{quiz.title}</Typography>
                <Button
                  size="small"
                  onClick={() => navigate(`/teacher/quizzes/${quiz.id}/edit`)}
                >
                  Edit Quiz
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Notes Section */}
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h4">My Notes</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate('/teacher/notes/create')}
          >
            New Note
          </Button>
        </Box>
        <Grid container spacing={3}>
          {notes?.map((note) => (
            <Grid item key={note.id} xs={12} sm={6} md={4}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6">{note.title}</Typography>
                <Button
                  size="small"
                  onClick={() => navigate(`/teacher/notes/${note.id}`)}
                >
                  View / Edit
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default TeacherDashboard; 