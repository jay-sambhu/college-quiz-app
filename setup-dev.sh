#!/bin/bash

# College Quiz App Development Setup Script

echo "🎓 Setting up College Quiz App development environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js (v16 or higher) first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Check if MySQL is installed
if ! command -v mysql &> /dev/null; then
    echo "⚠️  MySQL is not found. Please make sure MySQL is installed and running."
fi

echo "📦 Installing server dependencies..."
cd server
npm install

if [ ! -f .env ]; then
    echo "🔧 Creating server environment file..."
    cp .env.example .env
    echo "✏️  Please edit server/.env with your database credentials"
fi

echo "📦 Installing client dependencies..."
cd ../client
npm install

if [ ! -f .env ]; then
    echo "🔧 Creating client environment file..."
    cp .env.example .env
fi

echo "🗄️  Setting up database..."
cd ../server
echo "Please run the following commands to set up your database:"
echo "1. Create database: CREATE DATABASE quiz_app_college;"
echo "2. Run: mysql -u [username] -p quiz_app_college < database.sql"

echo "✅ Setup complete!"
echo ""
echo "🚀 To start development:"
echo "1. Start the backend: cd server && npm run dev"
echo "2. Start the frontend: cd client && npm run dev"
echo ""
echo "📚 Don't forget to:"
echo "- Configure your database connection in server/.env"
echo "- Run the database setup script"
echo "- Check the README.md for detailed instructions"