# College Quiz App

A comprehensive full-stack quiz application designed for educational institutions, featuring role-based access control for admins, teachers, and students.

## 🚀 Features

### For Students
- Take interactive quizzes with timer functionality
- View quiz results and performance analytics
- Access leaderboards and compare with peers
- Provide feedback on courses and teachers
- Manage personal profile and progress tracking

### For Teachers
- Create and manage quizzes with multiple question types
- Monitor student performance and analytics
- Upload and manage course notes
- View ratings and feedback from students
- Track class progress and engagement

### For Administrators
- Comprehensive user management system
- System-wide analytics and reporting
- Content moderation and oversight
- Platform configuration and settings

## 🏗️ Technical Stack

### Frontend
- **React 18** with modern hooks and functional components
- **Material-UI (MUI)** for consistent, accessible UI components
- **React Router** for client-side routing
- **Axios** for HTTP requests
- **Formik & Yup** for form handling and validation
- **Vite** for fast development and building

### Backend
- **Node.js** with Express.js framework
- **MySQL** database with connection pooling
- **JWT** for authentication and authorization
- **bcrypt** for password hashing
- **express-validator** for input validation
- **Helmet** for security headers
- **CORS** for cross-origin requests
- **Rate limiting** for API protection

## 📋 Prerequisites

Before running this application, ensure you have:

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **MySQL** (v8 or higher)
- **Git** for version control

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/jay-sambhu/college-quiz-app.git
cd college-quiz-app
```

### 2. Database Setup
```bash
# Navigate to server directory
cd server

# Create MySQL database
mysql -u root -p
CREATE DATABASE quiz_app_college;
exit

# Run database setup script
chmod +x setup_db.sh
./setup_db.sh
```

### 3. Backend Setup
```bash
# Install dependencies
npm install

# Copy environment configuration
cp .env.example .env

# Edit .env file with your database credentials
# DB_HOST=localhost
# DB_USER=your_username
# DB_PASSWORD=your_password
# DB_NAME=quiz_app_college
# JWT_SECRET=your_jwt_secret_key
# PORT=5000

# Start development server
npm run dev
```

### 4. Frontend Setup
```bash
# Navigate to client directory
cd ../client

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔧 Development Commands

### Backend Commands
```bash
cd server

# Development with auto-reload
npm run dev

# Production start
npm start

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Format code
npm run format

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

### Frontend Commands
```bash
cd client

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Format code
npm run format

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Run quality checks
npm run check
```

## 📁 Project Structure

```
college-quiz-app/
├── client/                 # React frontend application
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # React context providers
│   │   ├── hooks/          # Custom React hooks
│   │   ├── pages/          # Page components
│   │   ├── services/       # API service functions
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
├── server/                 # Node.js backend application
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Express middleware
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── services/           # Business logic services
│   ├── tests/              # Test files
│   ├── utils/              # Utility functions
│   ├── database.sql        # Database schema
│   ├── package.json
│   └── server.js
├── .editorconfig          # Editor configuration
├── .prettierrc           # Prettier configuration
├── README.md
└── ...
```

## 🔐 Environment Variables

### Backend (.env)
```env
# Database Configuration
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=quiz_app_college
DB_PORT=3306

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=24h

# Server Configuration
PORT=5000
NODE_ENV=development

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## 🚦 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user profile

### Quiz Management
- `GET /api/quiz` - Get all available quizzes
- `POST /api/quiz` - Create new quiz (Teacher/Admin)
- `GET /api/quiz/:id` - Get specific quiz
- `PUT /api/quiz/:id` - Update quiz (Teacher/Admin)
- `DELETE /api/quiz/:id` - Delete quiz (Admin)

### Student Operations
- `POST /api/quiz/:id/submit` - Submit quiz answers
- `GET /api/student/results` - Get quiz results
- `GET /api/student/leaderboard` - Get leaderboard

## 🧪 Testing

### Running Tests
```bash
# Backend tests
cd server
npm test

# Frontend tests (if added)
cd client
npm test
```

### Test Coverage
```bash
cd server
npm run test:coverage
```

## 🚀 Deployment

### Production Build
```bash
# Build frontend
cd client
npm run build

# Start backend in production
cd ../server
NODE_ENV=production npm start
```

### Environment Considerations
- Use environment-specific configuration files
- Configure proper database connections
- Set up SSL certificates for HTTPS
- Configure reverse proxy (nginx recommended)
- Set up process management (PM2 recommended)

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Authors

- **Jay Sambhu** - *Initial work* - [jay-sambhu](https://github.com/jay-sambhu)

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/jay-sambhu/college-quiz-app/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about your environment and the issue

## 🔄 Version History

- **v1.0.0** - Initial release with core functionality
  - User authentication and authorization
  - Quiz creation and management
  - Student quiz taking interface
  - Basic reporting and analytics

## 🎯 Roadmap

- [ ] Enhanced analytics dashboard
- [ ] Mobile application
- [ ] Real-time notifications
- [ ] Advanced question types
- [ ] Integration with external LMS systems
- [ ] Multi-language support 