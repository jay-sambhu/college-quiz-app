# Contributing to College Quiz App

We love your input! We want to make contributing to the College Quiz App as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## Pull Requests

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Code Style

We use Prettier and ESLint to maintain consistent code style:

### Frontend (React)
```bash
cd client
npm run lint        # Check for linting errors
npm run lint:fix    # Auto-fix linting errors
npm run format      # Format code with Prettier
npm run check       # Run both lint and format checks
```

### Backend (Node.js)
```bash
cd server
npm run lint        # Check for linting errors
npm run lint:fix    # Auto-fix linting errors
npm run format      # Format code with Prettier
```

## Coding Standards

### General
- Use meaningful variable and function names
- Write clear, concise comments for complex logic
- Follow the existing code structure and patterns
- Keep functions small and focused on a single responsibility

### React Components
- Use functional components with hooks
- Implement proper prop validation
- Use descriptive component and prop names
- Extract reusable logic into custom hooks

### Backend API
- Follow RESTful conventions
- Implement proper error handling
- Use middleware for common functionality
- Write comprehensive input validation

## Testing

### Running Tests
```bash
# Backend tests
cd server
npm test

# Frontend tests (when added)
cd client
npm test
```

### Writing Tests
- Write unit tests for utility functions
- Write integration tests for API endpoints
- Test both success and error scenarios
- Maintain good test coverage

## Bug Reports

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/jay-sambhu/college-quiz-app/issues/new).

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## Feature Requests

We welcome feature requests! Before creating a new feature request:

1. Check if a similar feature request already exists
2. Provide a clear description of the problem you're trying to solve
3. Describe the solution you'd like to see
4. Consider the impact on existing users

## Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- MySQL (v8 or higher)

### Local Development
```bash
# Clone the repository
git clone https://github.com/jay-sambhu/college-quiz-app.git
cd college-quiz-app

# Setup backend
cd server
npm install
cp .env.example .env
# Configure your .env file
npm run dev

# Setup frontend (in another terminal)
cd client
npm install
npm run dev
```

## Database Changes

When making database schema changes:

1. Update the `database.sql` file
2. Create migration scripts if necessary
3. Update relevant model files
4. Test with both empty and populated databases

## Commit Messages

Use clear, descriptive commit messages:

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

Examples:
```
Add user authentication middleware
Fix quiz submission validation bug
Update README with installation instructions
```

## Security

### Reporting Security Issues

Please do not report security vulnerabilities through public GitHub issues. Instead, email [your-email@example.com] with details.

### Security Best Practices

- Never commit sensitive information (passwords, API keys, etc.)
- Use environment variables for configuration
- Validate all user inputs
- Implement proper authentication and authorization
- Keep dependencies up to date

## Code Review Process

All submissions require review before merging:

1. Create a pull request with a clear description
2. Ensure all tests pass
3. Address any feedback from reviewers
4. Maintain a clean commit history

## License

By contributing, you agree that your contributions will be licensed under the ISC License.

## Questions?

Feel free to contact the maintainers if you have any questions. We're here to help!

## Recognition

Contributors will be recognized in the project documentation and release notes.

Thank you for contributing to College Quiz App! 🎓✨