const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticate = async (req, res, next) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'No token provided'
      });
    }

    const token = authHeader.split(' ')[1];

    // Verify token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      console.error('Token verification error:', error);
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({
          success: false,
          message: 'Token expired'
        });
      }
      return res.status(401).json({
        success: false,
        message: 'Invalid token'
      });
    }
    
    // Get user from database
    const user = await User.findById(decoded.id);
    if (!user) {
      console.error('User not found for token:', decoded);
      return res.status(401).json({
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

    // Add user to request object
    req.user = {
      userId: user.id,
      id: user.id,
      role: user.role,
      email: user.email
    };

    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).json({
      success: false,
      message: 'Error authenticating user'
    });
  }
};

const requireRole = (role) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ 
        success: false,
        message: 'Authentication required' 
      });
    }

    if (typeof role === 'string' && req.user.role !== role) {
      return res.status(403).json({ 
        success: false,
        message: `Access denied. Requires ${role} role.` 
      });
    }

    if (Array.isArray(role) && !role.includes(req.user.role)) {
      return res.status(403).json({ 
        success: false,
        message: `Access denied. Requires one of: ${role.join(', ')}` 
      });
    }

    next();
  };
};

module.exports = {
  authenticate,
  requireRole
}; 