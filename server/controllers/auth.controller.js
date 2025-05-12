const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

class AuthController {
  async register(req, res) {
    try {
      const { username, email, password, role, firstName, lastName } = req.body;

      // Validate required fields
      if (!username || !email || !password) {
        return res.status(400).json({
          success: false,
          message: 'Username, email, and password are required'
        });
      }

      // Create user
      const user = await User.create({
        username,
        email,
        password,
        role: role || 'student',
        firstName,
        lastName
      });

      // Generate JWT token
      const token = jwt.sign(
        { 
          id: user.id, 
          role: user.role,
          email: user.email
        },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );

      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: {
          user,
          token
        }
      });
    } catch (error) {
      console.error('Registration error:', error);
      
      // Handle specific error types
      if (error.message.includes('Validation failed')) {
        return res.status(400).json({
          success: false,
          message: error.message
        });
      }

      if (error.message.includes('already exists') || error.message.includes('already taken')) {
        return res.status(409).json({
          success: false,
          message: error.message
        });
      }

      res.status(500).json({
        success: false,
        message: 'Error registering user'
      });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      // Validate required fields
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: 'Email and password are required'
        });
      }

      // Find user by email
      const user = await User.findByEmail(email);
      if (!user) {
        return res.status(401).json({
          success: false,
          message: 'Invalid email or password'
        });
      }

      // Check if user is active
      if (!user.is_active) {
        return res.status(403).json({
          success: false,
          message: 'Account is deactivated. Please contact support.'
        });
      }

      // Verify password
      const isValidPassword = await User.verifyPassword(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({
          success: false,
          message: 'Invalid email or password'
        });
      }

      // Generate JWT token
      const token = jwt.sign(
        { 
          id: user.id,
          role: user.role,
          email: user.email
        },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );

      // Remove password from user object
      const { password: _, ...userWithoutPassword } = user;

      res.json({
        success: true,
        message: 'Login successful',
        data: {
          user: userWithoutPassword,
          token
        }
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({
        success: false,
        message: 'Error during login'
      });
    }
  }

  async getCurrentUser(req, res) {
    try {
      const userId = req.user.id;
      console.log('📝 Fetching current user data:', { userId });
      
      const user = await User.findById(userId);
      if (!user) {
        console.error('❌ User not found:', userId);
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }

      // Check if user is active
      if (!user.is_active) {
        return res.status(403).json({
          success: false,
          message: 'Account is deactivated. Please contact support.'
        });
      }
      
      // Remove password from user object
      const { password, ...userWithoutPassword } = user;
      
      console.log('✅ User data retrieved successfully');
      res.json({
        success: true,
        data: userWithoutPassword
      });
    } catch (error) {
      console.error('❌ Error fetching user:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching user data'
      });
    }
  }

  async updateProfile(req, res) {
    try {
      const userId = req.user.id;
      const fields = req.body;

      // Validate that at least one field is being updated
      if (Object.keys(fields).length === 0) {
        return res.status(400).json({
          success: false,
          message: 'No fields provided for update'
        });
      }
      
      const updated = await User.updateProfile(userId, fields);
      if (!updated) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }

      const updatedUser = await User.findById(userId);
      const { password, ...userWithoutPassword } = updatedUser;

      res.json({
        success: true,
        message: 'Profile updated successfully',
        data: userWithoutPassword
      });
    } catch (error) {
      console.error('Profile update error:', error);
      
      // Handle specific error types
      if (error.message.includes('Validation failed')) {
        return res.status(400).json({
          success: false,
          message: error.message
        });
      }

      if (error.message.includes('already taken')) {
        return res.status(409).json({
          success: false,
          message: error.message
        });
      }

      res.status(500).json({
        success: false,
        message: 'Error updating profile'
      });
    }
  }

  async changePassword(req, res) {
    try {
      const userId = req.user.id;
      const { oldPassword, newPassword } = req.body;

      if (!oldPassword || !newPassword) {
        return res.status(400).json({
          success: false,
          message: 'Old password and new password are required'
        });
      }

      if (newPassword.length < 6) {
        return res.status(400).json({
          success: false,
          message: 'New password must be at least 6 characters long'
        });
      }

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }

      const valid = await User.verifyPassword(oldPassword, user.password);
      if (!valid) {
        return res.status(400).json({
          success: false,
          message: 'Old password is incorrect'
        });
      }

      const hashed = await bcrypt.hash(newPassword, 10);
      await User.update(userId, { 
        password: hashed,
        updated_at: new Date()
      });

      res.json({
        success: true,
        message: 'Password changed successfully'
      });
    } catch (error) {
      console.error('Password change error:', error);
      res.status(500).json({
        success: false,
        message: 'Error changing password'
      });
    }
  }
}

module.exports = new AuthController(); 