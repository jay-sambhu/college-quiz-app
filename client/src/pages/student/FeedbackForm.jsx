import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  CircularProgress,
} from '@mui/material';
import { toast } from 'react-toastify';
import useApi from '../../hooks/useApi';
import { getTeachers, submitFeedback } from '../../services/api';

// Validation schema for feedback form
const FeedbackSchema = Yup.object().shape({
  teacherId: Yup.string().required('Teacher is required'),
  rating: Yup.number()
    .min(1, 'Minimum rating is 1')
    .max(5, 'Maximum rating is 5')
    .required('Rating is required'),
  comment: Yup.string().max(500, 'Comment too long'),
});

const FeedbackForm = () => {
  const navigate = useNavigate();
  const {
    execute: fetchTeachers,
    data: teachersRes,
    loading: loadingTeachers,
    error: loadError,
  } = useApi(getTeachers);
  const { execute: doSubmit, loading: submitting } = useApi(submitFeedback);

  useEffect(() => {
    fetchTeachers().catch(() => {
      toast.error('Failed to load teachers');
    });
  }, [fetchTeachers]);

  const teachers = teachersRes?.data || [];

  if (loadingTeachers) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (loadError) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography color="error">Failed to load teachers.</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Submit Feedback
        </Typography>
        <Formik
          initialValues={{ teacherId: '', rating: '', comment: '' }}
          validationSchema={FeedbackSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await doSubmit({
                teacherId: values.teacherId,
                rating: Number(values.rating),
                comment: values.comment,
              });
              toast.success('Feedback submitted!');
              navigate('/student');
            } catch {
              toast.error('Submit failed');
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form noValidate>
              <FormControl
                fullWidth
                sx={{ mb: 2 }}
                error={touched.teacherId && Boolean(errors.teacherId)}
              >
                <InputLabel id="teacher-label">Teacher</InputLabel>
                <Field
                  name="teacherId"
                  as={Select}
                  labelId="teacher-label"
                  label="Teacher"
                >
                  {teachers.map((t) => (
                    <MenuItem key={t.id} value={t.id}>
                      {t.username}
                    </MenuItem>
                  ))}
                </Field>
                <ErrorMessage
                  name="teacherId"
                  component="div"
                  style={{ color: '#d32f2f', marginTop: 4 }}
                />
              </FormControl>

              <Field
                name="rating"
                as={TextField}
                fullWidth
                label="Rating (1-5)"
                type="number"
                inputProps={{ min: 1, max: 5 }}
                sx={{ mb: 2 }}
                error={touched.rating && Boolean(errors.rating)}
                helperText={<ErrorMessage name="rating" />}
              />

              <Field
                name="comment"
                as={TextField}
                fullWidth
                label="Comment"
                multiline
                rows={4}
                sx={{ mb: 2 }}
                error={touched.comment && Boolean(errors.comment)}
                helperText={<ErrorMessage name="comment" />}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isSubmitting || submitting}
              >
                {isSubmitting || submitting ? 'Submitting...' : 'Submit Feedback'}
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default FeedbackForm; 