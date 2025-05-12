import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Paper,
  CircularProgress,
} from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import useApi from '../../hooks/useApi';
import { getTeacherQuiz, updateQuiz } from '../../services/api';
import QuizForm from '../../components/QuizForm';
import { toast } from 'react-toastify';

const QuizEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();
  const { execute: fetchQuiz, data: quizRes, loading: loadingQuiz, error: fetchError } = useApi(getTeacherQuiz);
  const { execute: saveQuiz, loading: savingQuiz } = useApi((values) => updateQuiz(id, values));

  useEffect(() => {
    fetchQuiz(id).catch(() => {
      toast.error('Failed to load quiz');
      navigate('/teacher/quizzes');
    });
  }, [id]);

  if (loadingQuiz) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }
  if (fetchError) {
    return (
      <Container maxWidth="sm">
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography color="error">Failed to load quiz.</Typography>
        </Box>
      </Container>
    );
  }

  const quiz = quizRes?.data;
  const initialValues = quiz
    ? {
        title: quiz.title,
        description: quiz.description,
        timeLimit: quiz.timeLimit,
        passingScore: quiz.passingScore,
      }
    : { title: '', description: '', timeLimit: 30, passingScore: 60 };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await saveQuiz(values);
      toast.success('Quiz updated successfully');
      navigate('/teacher/quizzes');
    } catch {
      toast.error('Failed to update quiz');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Edit Quiz
          </Typography>
          <QuizForm
            initialValues={initialValues}
            onSubmit={handleSubmit}
            submitting={savingQuiz}
          />
        </Paper>
      </Box>
    </Container>
  );
};

export default QuizEdit; 