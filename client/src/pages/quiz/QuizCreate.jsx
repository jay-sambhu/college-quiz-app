import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Typography, Paper } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import useApi from '../../hooks/useApi';
import { createQuiz } from '../../services/api';
import QuizForm from '../../components/QuizForm';
import { toast } from 'react-toastify';

const QuizCreate = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { execute: doCreate, loading } = useApi(createQuiz);

  const initialValues = {
    title: '',
    description: '',
    timeLimit: 30,
    passingScore: 60,
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await doCreate({ ...values, teacherId: user.id });
      toast.success('Quiz created successfully');
      navigate('/teacher/quizzes');
    } catch {
      toast.error('Failed to create quiz');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Create New Quiz
          </Typography>
          <QuizForm
            initialValues={initialValues}
            onSubmit={handleSubmit}
            submitting={loading}
          />
        </Paper>
      </Box>
    </Container>
  );
};

export default QuizCreate; 