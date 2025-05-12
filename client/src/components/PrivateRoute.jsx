import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * PrivateRoute protects routes based on auth status and user roles.
 * @param {object} props
 * @param {React.ReactNode} props.children - Component to render if allowed
 * @param {string[]} props.allowedRoles - Array of roles allowed to access
 * @returns {React.ReactNode}
 */
const PrivateRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  // If no user, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If user role is not allowed, redirect to home/dashboard
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // Authorized: render children
  return children;
};

export default PrivateRoute; 