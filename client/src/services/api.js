import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    // Log successful responses in development
    if (process.env.NODE_ENV === 'development') {
      console.log('API Response:', {
        url: response.config.url,
        method: response.config.method,
        status: response.status,
        data: response.data
      });
    }

    // Check if the response indicates an error
    if (response.data && response.data.success === false) {
      return Promise.reject({
        response: {
          data: response.data
        }
      });
    }

    return response;
  },
  (error) => {
    // Log errors in development
    if (process.env.NODE_ENV === 'development') {
      console.error('API Error:', {
        url: error.config?.url,
        method: error.config?.method,
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
    }

    // Handle token expiration
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }

    // Ensure error has a consistent structure
    const errorResponse = {
      response: {
        data: {
          success: false,
          message: error.response?.data?.message || error.message || 'An error occurred'
        }
      }
    };

    return Promise.reject(errorResponse);
  }
);

// Auth endpoints
export const apiLogin = (credentials) => api.post('/auth/login', credentials);
export const apiRegister = (userData) => api.post('/auth/register', userData);
export const apiLogout = () => {
  localStorage.removeItem('token');
  return Promise.resolve();
};

// User endpoints
export const apiGetUser = () => api.get('/users/me');
export const apiUpdateUser = (data) => api.put('/users/me', data);

// Quiz endpoints
export const apiGetQuizzes = () => api.get('/quizzes');
export const apiGetQuiz = (id) => api.get(`/quizzes/${id}`);
export const apiCreateQuiz = (data) => api.post('/quizzes', data);
export const apiUpdateQuiz = (id, data) => api.put(`/quizzes/${id}`, data);
export const apiDeleteQuiz = (id) => api.delete(`/quizzes/${id}`);

// Submission endpoints
export const apiSubmitQuiz = (quizId, answers) => 
  api.post(`/quizzes/${quizId}/submit`, { answers });
export const apiGetSubmissions = () => api.get('/submissions');
export const apiGetSubmission = (id) => api.get(`/submissions/${id}`);

// Note endpoints
export const apiGetNotes = () => api.get('/notes');
export const apiGetNote = (id) => api.get(`/notes/${id}`);
export const apiCreateNote = (data) => api.post('/notes', data);
export const apiUpdateNote = (id, data) => api.put(`/notes/${id}`, data);
export const apiDeleteNote = (id) => api.delete(`/notes/${id}`);
export const apiShareNote = (id, studentId) => 
  api.post(`/notes/${id}/share`, { studentId });
export const apiUnshareNote = (id, studentId) => 
  api.post(`/notes/${id}/unshare`, { studentId });

// Add missing endpoints for student dashboard
export const getAvailableQuizzes = () => api.get('/quizzes/available');
export const getMyQuizResults = (quizId) => api.get(`/quizzes/${quizId}/my-result`);
export const getLoginStreak = () => api.get('/users/login-streak');
export const getLoginHistory = () => api.get('/users/login-history');

// Add changePassword function
export const changePassword = (currentPassword, newPassword) => {
  return api.post('/auth/change-password', { currentPassword, newPassword });
};

// Add getCurrentUser function
export const getCurrentUser = () => {
  return api.get('/auth/me');
};

// Add updateProfile function
export const updateProfile = (profileData) => {
  return api.put('/auth/update-profile', profileData);
};

// Add getAllQuizzes function
export const getAllQuizzes = () => {
  return api.get('/quizzes');
};

// Add getAllUsers function
export const getAllUsers = () => {
  return api.get('/users');
};

// Add getTeacherQuizzes function
export const getTeacherQuizzes = (teacherId) => {
  return api.get(`/teachers/${teacherId}/quizzes`);
};

// Add getTeacherNotes function
export const getTeacherNotes = (teacherId) => {
  return api.get(`/teachers/${teacherId}/notes`);
};

// Add getMySubjects function
export const getMySubjects = () => {
  return api.get('/subjects/my');
};

// Add createQuiz function
export const createQuiz = (quizData) => {
  return api.post('/quizzes', quizData);
};

// Add getTeacherQuiz function
export const getTeacherQuiz = (teacherId, quizId) => {
  return api.get(`/teachers/${teacherId}/quizzes/${quizId}`);
};

// Add updateQuiz function
export const updateQuiz = (quizId, quizData) => {
  return api.put(`/quizzes/${quizId}`, quizData);
};

// Add submitQuiz function
export const submitQuiz = (quizId, answers) => {
  return api.post(`/quizzes/${quizId}/submit`, { answers });
};

// Add getStudentQuiz function
export const getStudentQuiz = (quizId) => {
  return api.get(`/quizzes/${quizId}/student`);
};

// Add getQuizResults function
export const getQuizResults = (quizId) => {
  return api.get(`/quizzes/${quizId}/results`);
};

// Add getStudentNotes function
export const getStudentNotes = () => {
  return api.get('/notes/student');
};

// Add getStudentNote function
export const getStudentNote = (noteId) => {
  return api.get(`/notes/student/${noteId}`);
};

// Add getTeacherNote function
export const getTeacherNote = (noteId) => {
  return api.get(`/teachers/notes/${noteId}`);
};

// Add getLeaderboard function
export const getLeaderboard = () => {
  return api.get('/leaderboard');
};

// Add getTeachers function
export const getTeachers = () => {
  return api.get('/teachers');
};

// Add submitFeedback function
export const submitFeedback = (feedbackData) => {
  return api.post('/feedback', feedbackData);
};

// Add getProfile function
export const getProfile = () => {
  return api.get('/profile');
};

export default api;