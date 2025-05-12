require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { errorHandler } = require('./middleware/errorHandler');
const { testConnection } = require('./config/database');

// Import routes
const authRoutes = require('./routes/auth');
const quizRoutes = require('./routes/quiz');
const userRoutes = require('./routes/user');
const noteRoutes = require('./routes/note');
const ratingRoutes = require('./routes/rating');
const adminRoutes = require('./routes/admin.routes');
const teacherRoutes = require('./routes/teacher.routes');
const studentRoutes = require('./routes/student.routes');

const app = express();

// Detailed CORS configuration
const corsOptions = {
  origin: true, // Allow all origins in development
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
  maxAge: 86400 // 24 hours
};

// Log CORS requests for debugging
app.use((req, res, next) => {
  console.log('🌐 Incoming request:', {
    method: req.method,
    url: req.url,
    origin: req.headers.origin,
    contentType: req.headers['content-type']
  });
  next();
});

// Middleware
app.use(cors(corsOptions));
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' }
}));
app.use(morgan('dev'));
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Debug route to test API is running
app.get('/api/health', (req, res) => {
  console.log('Health check endpoint called');
  res.status(200).json({ status: 'ok', message: 'API is running' });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/user', userRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/ratings', ratingRoutes);

// Role-specific routes
app.use('/api/admin', adminRoutes);
app.use('/api/teacher', teacherRoutes);
app.use('/api/student', studentRoutes);

// Error handling
app.use(errorHandler);

// Start server if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  
  // Test database connection before starting the server
  testConnection()
    .then(connected => {
      if (!connected) {
        console.error('❌ Failed to connect to database. Server will not start.');
        process.exit(1);
      }
      
      app.listen(PORT, () => {
        console.log(`✅ Server running on port ${PORT}`);
        console.log('🌐 CORS configured to allow all origins in development');
        console.log('🔒 Authentication middleware is active');
     
      });
    })
    .catch(error => {
      console.error('❌ Server startup failed:', error);
      process.exit(1);
    });
}

// Export app for testing
module.exports = app; 