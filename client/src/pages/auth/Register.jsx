import React, { useEffect } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Link
} from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';

/**
 * Validation schema for registration form.
 */
const RegisterSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password too short').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  role: Yup.string().oneOf(['student', 'teacher'], 'Invalid role').required('Role is required')
});

/**
 * Registration page component.
 */
const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  // Add effect to log when component mounts
  useEffect(() => {
    console.log('🔄 Register component mounted');
    
    return () => {
      console.log('🔄 Register component unmounted');
    };
  }, []);

  /**
   * Handle form submission.
   * @param {{username:string,email:string,password:string,confirmPassword:string,role:string}} values
   * @param {object} formikHelpers
   */
  const handleSubmit = async (values, { setSubmitting, setErrors, validateForm }) => {
    console.log('🚀 Starting registration process with values:', { 
      username: values.username, 
      email: values.email, 
      role: values.role 
    });
    
    // First, validate the form manually to double check
    const errors = await validateForm(values);
    console.log('🔍 Form validation results:', { 
      isValid: Object.keys(errors).length === 0,
      errors
    });
    
    if (Object.keys(errors).length > 0) {
      console.error('❌ Form validation failed:', errors);
      setErrors(errors);
      setSubmitting(false);
      return;
    }
    
    try {
      const { username, email, password, role } = values;
      console.log('📤 Sending registration request to server...');
      
      const result = await register({ username, email, password, role });
      console.log('📥 Received registration response:', result);
      
      if (result.success) {
        console.log('✅ Registration successful!', { userId: result.user?.id, role: result.user?.role });
        toast.success('Registration successful!');
        
        console.log('🔄 Navigating to dashboard:', `/${role}`);
        navigate(`/${role}`);
      } else {
        console.error('❌ Registration failed:', result.error);
        toast.error(result.error || 'Registration failed');
        setErrors({ submit: result.error });
      }
    } catch (error) {
      console.error('❌ Registration error:', error);
      toast.error('Registration failed');
      setErrors({ submit: 'Registration failed' });
    } finally {
      console.log('🏁 Registration process completed');
      setSubmitting(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Register
          </Typography>
          <Formik
            initialValues={{ username: '', email: '', password: '', confirmPassword: '', role: 'student' }}
            validationSchema={RegisterSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched, validateForm }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      name="username"
                      as={TextField}
                      label="Username"
                      fullWidth
                      error={touched.username && Boolean(errors.username)}
                      helperText={touched.username && errors.username}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="email"
                      as={TextField}
                      label="Email"
                      type="email"
                      fullWidth
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="password"
                      as={TextField}
                      label="Password"
                      type="password"
                      fullWidth
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="confirmPassword"
                      as={TextField}
                      label="Confirm Password"
                      type="password"
                      fullWidth
                      error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                      helperText={touched.confirmPassword && errors.confirmPassword}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="role"
                      as={TextField}
                      select
                      label="Role"
                      fullWidth
                      SelectProps={{ native: true }}
                      error={touched.role && Boolean(errors.role)}
                      helperText={touched.role && errors.role}
                    >
                      <option value="student">Student</option>
                      <option value="teacher">Teacher</option>
                    </Field>
                  </Grid>
                  {errors.submit && (
                    <Grid item xs={12}>
                      <Typography color="error">{errors.submit}</Typography>
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      fullWidth 
                      disabled={isSubmitting}
                      onClick={() => {
                        console.log('🖱️ Register button clicked');
                        validateForm().then(errors => {
                          console.log('🔍 Pre-submission validation:', { 
                            isValid: Object.keys(errors).length === 0,
                            errors 
                          });
                        });
                      }}
                    >
                      {isSubmitting ? 'Registering...' : 'Register'}
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="body2">
                        Already have an account?{' '}
                        <Link component={RouterLink} to="/login">
                          Login here
                        </Link>
                      </Typography>
                    </Box>
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

export default Register; 