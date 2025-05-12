const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    req.role = decoded.role;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.role !== 'admin') {
    return res.status(403).json({ message: 'Requires admin role' });
  }
  next();
};

exports.isTeacher = (req, res, next) => {
  if (req.role !== 'teacher' && req.role !== 'admin') {
    return res.status(403).json({ message: 'Requires teacher role' });
  }
  next();
};

exports.isStudent = (req, res, next) => {
  if (req.role !== 'student' && req.role !== 'admin') {
    return res.status(403).json({ message: 'Requires student role' });
  }
  next();
}; 