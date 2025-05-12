import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Grid,
  TextField,
  Button,
  Box,
  CircularProgress,
} from '@mui/material';

// Validation schema for quiz form
const QuizSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  timeLimit: Yup.number()
    .min(1, 'Time limit must be at least 1 minute')
    .required('Time limit is required'),
  passingScore: Yup.number()
    .min(0, 'Passing score must be at least 0%')
    .max(100, 'Passing score cannot exceed 100%')
    .required('Passing score is required'),
});

/**
 * QuizForm component handles both create and edit quiz forms.
 * Props:
 * - initialValues: default form values
 * - onSubmit: function to call on submit
 * - submitting: boolean loading state
 */
const QuizForm = ({ initialValues, onSubmit, submitting }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={QuizSchema}
    onSubmit={onSubmit}
    enableReinitialize
  >
    {({ isSubmitting, errors, touched }) => (
      <Form noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Field
              name="title"
              as={TextField}
              label="Title"
              fullWidth
              error={touched.title && Boolean(errors.title)}
              helperText={<ErrorMessage name="title" />}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="description"
              as={TextField}
              label="Description"
              fullWidth
              multiline
              rows={4}
              error={touched.description && Boolean(errors.description)}
              helperText={<ErrorMessage name="description" />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name="timeLimit"
              as={TextField}
              label="Time Limit (minutes)"
              type="number"
              fullWidth
              error={touched.timeLimit && Boolean(errors.timeLimit)}
              helperText={<ErrorMessage name="timeLimit" />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name="passingScore"
              as={TextField}
              label="Passing Score (%)"
              type="number"
              fullWidth
              error={touched.passingScore && Boolean(errors.passingScore)}
              helperText={<ErrorMessage name="passingScore" />}
            />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ position: 'relative' }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting || submitting}
              >
                {isSubmitting || submitting ? 'Saving...' : 'Save Quiz'}
              </Button>
              {(isSubmitting || submitting) && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: 'primary.main',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </Box>
          </Grid>
        </Grid>
      </Form>
    )}
  </Formik>
);

export default QuizForm; 