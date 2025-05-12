# Quiz App Backend

A Node.js Express backend for a college quiz application with role-based access control, quiz management, and student submissions.

## Features

- User authentication with JWT
- Role-based access control (Admin, Teacher, Student)
- Quiz creation and management
- Student quiz submissions
- Teacher ratings
- Admin dashboard with statistics

## Prerequisites

- Node.js (v14 or higher)
- MySQL (v8 or higher)
- npm

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd quizappcollege
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
PORT=3000
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=quiz_app
JWT_SECRET=your_jwt_secret_key
```

4. Set up the database:
- Create a MySQL database
- Import the schema from `database.sql`

5. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user

### Quiz Management (Teachers)
- POST `/api/quiz` - Create a new quiz
- PUT `/api/quiz/:quizId` - Update a quiz
- DELETE `/api/quiz/:quizId` - Delete a quiz
- GET `/api/quiz/teacher` - Get teacher's quizzes
- GET `/api/quiz/:quizId` - Get quiz details
- GET `/api/quiz` - Get all quizzes

### Student Actions
- POST `/api/student/quiz/:quizId/submit` - Submit quiz answers
- POST `/api/student/teacher/:teacherId/rate` - Rate a teacher
- GET `/api/student/quiz-history` - Get quiz submission history

### Admin Actions
- GET `/api/admin/users` - Get all users
- PUT `/api/admin/users/:userId/role` - Update user role
- GET `/api/admin/statistics/quizzes` - Get quiz statistics
- GET `/api/admin/statistics/teacher-ratings` - Get teacher ratings statistics

## Project Structure

```
├── config/
│   └── db.config.js
├── controllers/
│   ├── auth.controller.js
│   └── quiz.controller.js
├── middleware/
│   └── auth.middleware.js
├── models/
│   ├── user.model.js
│   └── quiz.model.js
├── routes/
│   ├── admin.routes.js
│   ├── auth.routes.js
│   ├── quiz.routes.js
│   └── student.routes.js
├── .env
├── database.sql
├── package.json
├── README.md
└── server.js
```

## Testing

- Run all tests (unit & integration): `npm test`
- Run tests in watch mode: `npm run test:watch`

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Write clear, concise commit messages.
4. Add tests for any new functionality.
5. Submit a pull request with a detailed description.

## License

ISC 