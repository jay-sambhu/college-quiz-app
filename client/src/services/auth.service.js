import { apiLogin, apiRegister, apiLogout, apiGetUser } from './api';

class AuthService {
  async login(username, password) {
    try {
      const response = await apiLogin({ username, password });
      if (!response.data.success) {
        throw new Error(response.data.message || 'Login failed');
      }
      return response.data.data;
    } catch (error) {
      throw error.response?.data || { message: 'Login failed' };
    }
  }

  async register(userData) {
    try {
      const response = await apiRegister(userData);
      if (!response.data.success) {
        throw new Error(response.data.message || 'Registration failed');
      }
      return response.data.data;
    } catch (error) {
      throw error.response?.data || { message: 'Registration failed' };
    }
  }

  logout() {
    return apiLogout();
  }

  async getCurrentUser() {
    try {
      const response = await apiGetUser();
      if (!response.data.success) {
        throw new Error(response.data.message || 'Failed to get user data');
      }
      return response.data.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to get user data' };
    }
  }
}

export default new AuthService(); 