import { createContext, useContext, useState, useEffect } from 'react';
import {
  apiLogin,
  apiRegister,
  getCurrentUser,
  updateProfile as apiUpdateProfile,
  changePassword as apiChangePassword
} from '../services/api';

/**
 * AuthContext provides user session data and auth actions.
 */
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function init() {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await getCurrentUser();
          setUser(response.data);
        } catch (err) {
          console.error('Failed to fetch user', err);
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    }
    init();
  }, []);

  /**
   * Perform login and set user state.
   * @param {Object} credentials
   */
  const login = async (credentials) => {
    setError(null);
    try {
      const response = await apiLogin(credentials);
      
      // Extract data from response
      const { token, user } = response.data.data;
      
      localStorage.setItem('token', token);
      setUser(user);
      
      return { success: true, user };
    } catch (err) {
      console.error('Login error:', err);
      const msg = err.response?.data?.message || 'Login failed';
      setError(msg);
      return { success: false, error: msg };
    }
  };

  /**
   * Register a new user and set state.
   * @param {Object} userData
   */
  const register = async (userData) => {
    console.log('🔍 AuthContext: Starting user registration process', {
      username: userData.username,
      email: userData.email,
      role: userData.role
    });
    
    setError(null);
    
    try {
      console.log('📤 AuthContext: Sending registration API request...');
      const response = await apiRegister(userData);
      console.log('📥 AuthContext: Registration response received:', response.data);
      
      // Extract data from response
      const { token, user } = response.data.data;
      console.log('🔑 AuthContext: Extracted auth data:', user);
      
      console.log('💾 AuthContext: Storing token in localStorage...');
      localStorage.setItem('token', token);
      
      console.log('👤 AuthContext: Setting user state...');
      setUser(user);
      
      console.log('✅ AuthContext: Registration complete and successful');
      return { success: true, user };
    } catch (err) {
      console.error('❌ AuthContext: Registration error:', err);
      console.error('❌ AuthContext: Error response:', err.response?.data);
      
      const msg = err.response?.data?.message || 'Registration failed';
      console.error('❌ AuthContext: Setting error message:', msg);
      
      setError(msg);
      return { success: false, error: msg };
    }
  };

  /**
   * Logout user and clear state.
   */
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  /**
   * Update user profile.
   * @param {Object} profileData
   */
  const updateProfile = async (profileData) => {
    try {
      const response = await apiUpdateProfile(profileData);
      setUser(response.data);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.response?.data?.message };
    }
  };

  /**
   * Change user password.
   * @param {Object} passwords { oldPassword, newPassword }
   */
  const changePassword = async (passwords) => {
    try {
      await apiChangePassword(passwords);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.response?.data?.message };
    }
  };

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    updateProfile,
    changePassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}; 