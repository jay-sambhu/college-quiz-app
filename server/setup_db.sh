#!/bin/bash

# Load environment variables
source .env

# Create database and import schema
mysql -u $DB_USER -p$DB_PASSWORD < database.sql

echo "Database setup completed!" 