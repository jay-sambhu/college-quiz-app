import React from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Paper
} from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';

/**
 * Validation schema for login form.
 */
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required')
});

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  /**
   * Handle form submission.
   * @param {Object} values - { email, password }
   */
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const result = await login(values);
      if (result.success) {
        toast.success('Login successful!');
        // Redirect based on role
        const role = result.user?.role || 'student';
        navigate(`/${role}`);
        console.log(`Redirecting to: /${role}`);
      } else {
        toast.error(result.error || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      toast.error('Login failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            Login
          </Typography>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  name="email"
                  as={TextField}
                  label="Email Address"
                  fullWidth
                  margin="normal"
                  autoComplete="email"
                  helperText={<ErrorMessage name="email" />}
                />
                <Field
                  name="password"
                  as={TextField}
                  label="Password"
                  type="password"
                  fullWidth
                  margin="normal"
                  autoComplete="current-password"
                  helperText={<ErrorMessage name="password" />}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </Button>
                <Box sx={{ textAlign: 'center' }}>
                  <Link component={RouterLink} to="/register" variant="body2">
                    Don't have an account? Register
                  </Link>
                </Box>
              </Form>
            )}
          </Formik>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login; 