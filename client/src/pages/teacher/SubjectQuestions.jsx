import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Box, Typography, Button, Grid, Paper, CircularProgress } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import useApi from '../../hooks/useApi';
import { getSubjectQuestions } from '../../services/api';

/**
 * SubjectQuestions displays all questions for a specific subject.
 */
const SubjectQuestions = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const { execute, data: questions, loading, error } = useApi(() => getSubjectQuestions(subjectId));

  useEffect(() => {
    execute();
  }, [execute]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error" variant="h6">{error}</Typography>;
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4">Questions for Subject {subjectId}</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate(`/teacher/questions/new?subjectId=${subjectId}`)}
        >
          Add Question
        </Button>
      </Box>
      <Grid container spacing={3}>
        {questions?.map((q) => (
          <Grid item xs={12} sm={6} md={4} key={q.id}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="body1" gutterBottom>
                {q.text}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  size="small"
                  onClick={() => navigate(`/teacher/questions/${q.id}`)}
                >
                  Edit
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SubjectQuestions; 