const BaseModel = require('./BaseModel');
const bcrypt = require('bcryptjs');
const { pool } = require('../config/database');

class User extends BaseModel {
  constructor() {
    super('users');
  }

  validateUserData(userData) {
    const errors = [];

    if (!userData.username) {
      errors.push('Username is required');
    } else if (userData.username.length < 3) {
      errors.push('Username must be at least 3 characters long');
    }

    if (!userData.email) {
      errors.push('Email is required');
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userData.email)) {
        errors.push('Invalid email format');
      }
    }

    if (!userData.password) {
      errors.push('Password is required');
    } else if (userData.password.length < 6) {
      errors.push('Password must be at least 6 characters long');
    }

    if (userData.role && !['student', 'teacher', 'admin'].includes(userData.role)) {
      errors.push('Invalid role specified');
    }

    return errors;
  }

  async findByEmail(email) {
    try {
      if (!email) {
        throw new Error('Email is required');
      }

      const [rows] = await pool.execute(
        'SELECT * FROM users WHERE email = ?',
        [email]
      );
      return rows[0];
    } catch (error) {
      console.error('Error in findByEmail:', error);
      throw new Error(`Error in findByEmail: ${error.message}`);
    }
  }

  async findByUsername(username) {
    try {
      if (!username) {
        throw new Error('Username is required');
      }

      const [rows] = await pool.execute(
        'SELECT * FROM users WHERE username = ?',
        [username]
      );
      return rows[0];
    } catch (error) {
      console.error('Error in findByUsername:', error);
      throw new Error(`Error in findByUsername: ${error.message}`);
    }
  }

  async create(userData) {
    try {
      // Validate user data
      const validationErrors = this.validateUserData(userData);
      if (validationErrors.length > 0) {
        throw new Error(`Validation failed: ${validationErrors.join(', ')}`);
      }

      // Check if user already exists
      const existingUser = await this.findByEmail(userData.email);
      if (existingUser) {
        throw new Error('User with this email already exists');
      }

      const existingUsername = await this.findByUsername(userData.username);
      if (existingUsername) {
        throw new Error('Username is already taken');
      }

      // Hash password before saving
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      
      // Prepare user data
      const userToCreate = {
        username: userData.username,
        email: userData.email,
        password: hashedPassword,
        role: userData.role || 'student',
        first_name: userData.firstName || null,
        last_name: userData.lastName || null,
        profile_picture: userData.profilePicture || null,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      };

      // Create user using BaseModel's create method
      const createdUser = await super.create(userToCreate);
      
      // Remove password from returned user data
      const { password, ...userWithoutPassword } = createdUser;
      return userWithoutPassword;
    } catch (error) {
      console.error('Error in create user:', error);
      throw new Error(`Error in create user: ${error.message}`);
    }
  }

  async verifyPassword(plainPassword, hashedPassword) {
    try {
      if (!plainPassword || !hashedPassword) {
        throw new Error('Both plain password and hashed password are required');
      }
      return await bcrypt.compare(plainPassword, hashedPassword);
    } catch (error) {
      console.error('Error in verifyPassword:', error);
      throw new Error(`Error in verifyPassword: ${error.message}`);
    }
  }

  async updateProfile(id, userData) {
    try {
      if (!id) {
        throw new Error('User ID is required');
      }

      // Validate user exists
      const user = await this.findById(id);
      if (!user) {
        throw new Error('User not found');
      }

      // If email is being updated, check if it's already taken
      if (userData.email && userData.email !== user.email) {
        const existingUser = await this.findByEmail(userData.email);
        if (existingUser) {
          throw new Error('Email is already taken');
        }
      }

      // If password is being updated, hash it
      if (userData.password) {
        if (userData.password.length < 6) {
          throw new Error('Password must be at least 6 characters long');
        }
        userData.password = await bcrypt.hash(userData.password, 10);
      }

      // Map camelCase to snake_case for database
      const mappedData = {
        first_name: userData.firstName,
        last_name: userData.lastName,
        profile_picture: userData.profilePicture,
        email: userData.email,
        password: userData.password,
        updated_at: new Date()
      };

      // Remove undefined values
      Object.keys(mappedData).forEach(key => 
        mappedData[key] === undefined && delete mappedData[key]
      );

      if (Object.keys(mappedData).length === 0) {
        throw new Error('No valid fields to update');
      }

      return await this.update(id, mappedData);
    } catch (error) {
      console.error('Error in updateProfile:', error);
      throw new Error(`Error in updateProfile: ${error.message}`);
    }
  }
}

module.exports = new User(); 