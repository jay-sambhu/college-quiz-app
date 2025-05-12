# Login Credentials for Quiz App

These login credentials are automatically created when running the database seed script (`npm run db:seed`).

## Admin User
- **Email:** admin@example.com
- **Password:** admin123
- **Role:** admin

## Teacher User
- **Email:** teacher@example.com
- **Password:** teacher123
- **Role:** teacher

## Student User
- **Email:** student@example.com
- **Password:** student123
- **Role:** student

## Usage
To use these credentials, you need to:

1. Ensure the database is properly set up with Prisma
2. Run the seed script: `npm run db:seed`
3. Start the server with: `npm run dev`
4. Access the login page via the client application

## Troubleshooting
If login fails, check that:
- The MySQL database is running
- The database connection parameters in `.env` are correct
- The seed script completed successfully 