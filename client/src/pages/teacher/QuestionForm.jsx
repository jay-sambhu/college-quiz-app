import React, { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Container, Box, Typography, Paper, Grid, Button, CircularProgress } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useApi from '../../hooks/useApi';
import { getQuestion, createQuestion, updateQuestion } from '../../services/api';

/**
 * Validation schema for question form.
 */
const QuestionSchema = Yup.object().shape({
  text: Yup.string().required('Question text is required'),
  option_a: Yup.string().required('Option A is required'),
  option_b: Yup.string().required('Option B is required'),
  option_c: Yup.string().required('Option C is required'),
  option_d: Yup.string().required('Option D is required'),
  correct_option: Yup.string().oneOf(['a','b','c','d'], 'Select correct option').required()
});

/**
 * QuestionForm allows creating or editing a quiz question.
 */
const QuestionForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // question ID if editing
  const [searchParams] = useSearchParams();
  const subjectId = searchParams.get('subjectId');
  const isEdit = Boolean(id);

  // Fetch existing question if editing
  const { execute: fetchQuestion, data: question, loading: loadingQ } = useApi(
    () => getQuestion(id),
    { manual: true }
  );
  // Save API call
  const { execute: saveQuestion, loading: saving } = useApi(
    (values) => isEdit ? updateQuestion(id, values) : createQuestion(subjectId, values)
  );

  useEffect(() => {
    if (isEdit) fetchQuestion();
  }, [isEdit, fetchQuestion]);

  if (isEdit && loadingQ) {
    return <CircularProgress />;
  }

  const initialValues = isEdit && question ? {
    text: question.text,
    option_a: question.option_a,
    option_b: question.option_b,
    option_c: question.option_c,
    option_d: question.option_d,
    correct_option: question.correct_option
  } : {
    text: '', option_a: '', option_b: '', option_c: '', option_d: '', correct_option: 'a'
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>
            {isEdit ? 'Edit Question' : 'New Question'}
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={QuestionSchema}
            enableReinitialize
            onSubmit={async (values, { setSubmitting }) => {
              await saveQuestion(values);
              setSubmitting(false);
              navigate(`/teacher/subjects/${subjectId}/questions`);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      name="text"
                      as={TextField}
                      label="Question Text"
                      fullWidth
                      helperText={<ErrorMessage name="text" />}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="option_a"
                      as={TextField}
                      label="Option A"
                      fullWidth
                      helperText={<ErrorMessage name="option_a" />}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="option_b"
                      as={TextField}
                      label="Option B"
                      fullWidth
                      helperText={<ErrorMessage name="option_b" />}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="option_c"
                      as={TextField}
                      label="Option C"
                      fullWidth
                      helperText={<ErrorMessage name="option_c" />}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="option_d"
                      as={TextField}
                      label="Option D"
                      fullWidth
                      helperText={<ErrorMessage name="option_d" />}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="correct_option"
                      as={TextField}
                      select
                      label="Correct Option"
                      fullWidth
                      SelectProps={{ native: true }}
                      helperText={<ErrorMessage name="correct_option" />}
                    >
                      <option value="a">A</option>
                      <option value="b">B</option>
                      <option value="c">C</option>
                      <option value="d">D</option>
                    </Field>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      disabled={isSubmitting || saving}
                    >
                      {isSubmitting || saving ? 'Saving...' : 'Save Question'}
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Paper>
      </Box>
    </Container>
  );
};

export default QuestionForm; 