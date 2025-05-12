import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Dashboard Pages
import AdminDashboard from './pages/dashboard/AdminDashboard';
import TeacherDashboard from './pages/dashboard/TeacherDashboard';
import StudentDashboard from './pages/dashboard/StudentDashboard';

// Quiz Pages
import QuizCreate from './pages/quiz/QuizCreate';
import QuizEdit from './pages/quiz/QuizEdit';
import QuizTake from './pages/quiz/QuizTake';
import QuizResults from './pages/quiz/QuizResults';

// Notes Pages
import NotesList from './pages/notes/NotesList';
import NoteCreate from './pages/notes/NoteCreate';
import NoteView from './pages/notes/NoteView';

// Student Pages
import Leaderboard from './pages/student/Leaderboard';
import FeedbackForm from './pages/student/FeedbackForm';
import Profile from './pages/student/Profile';

// Error Page
const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for doesn't exist or has been moved.</p>
    <button onClick={() => window.history.back()}>Go Back</button>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route element={<Layout />}>
            {/* Admin Routes */}
            <Route path="/admin" element={
              <PrivateRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </PrivateRoute>
            } />

            {/* Teacher Routes */}
            <Route path="/teacher" element={
              <PrivateRoute allowedRoles={['teacher']}>
                <TeacherDashboard />
              </PrivateRoute>
            } />
            <Route path="/quiz/create" element={
              <PrivateRoute allowedRoles={['teacher']}>
                <QuizCreate />
              </PrivateRoute>
            } />
            <Route path="/quiz/:id/edit" element={
              <PrivateRoute allowedRoles={['teacher']}>
                <QuizEdit />
              </PrivateRoute>
            } />

            {/* Student Routes */}
            <Route path="/student" element={
              <PrivateRoute allowedRoles={['student']}>
                <StudentDashboard />
              </PrivateRoute>
            } />
            <Route path="/quiz/:id/take" element={
              <PrivateRoute allowedRoles={['student']}>
                <QuizTake />
              </PrivateRoute>
            } />
            <Route path="/quiz/:id/results" element={
              <PrivateRoute allowedRoles={['student']}>
                <QuizResults />
              </PrivateRoute>
            } />

            {/* Shared Routes */}
            <Route path="/notes" element={
              <PrivateRoute allowedRoles={['student', 'teacher']}>
                <NotesList />
              </PrivateRoute>
            } />
            <Route path="/notes/create" element={
              <PrivateRoute allowedRoles={['student', 'teacher']}>
                <NoteCreate />
              </PrivateRoute>
            } />
            <Route path="/notes/:id" element={
              <PrivateRoute allowedRoles={['student', 'teacher']}>
                <NoteView />
              </PrivateRoute>
            } />

            {/* Student Extra Routes */}
            <Route path="/student/leaderboard" element={
              <PrivateRoute allowedRoles={['student']}>
                <Leaderboard />
              </PrivateRoute>
            } />
            <Route path="/student/feedback" element={
              <PrivateRoute allowedRoles={['student']}>
                <FeedbackForm />
              </PrivateRoute>
            } />
            <Route path="/student/profile" element={
              <PrivateRoute allowedRoles={['student']}>
                <Profile />
              </PrivateRoute>
            } />
          </Route>

          {/* Default Route */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* Catch-all route - must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </Router>
    </AuthProvider>
  );
}

export default App;