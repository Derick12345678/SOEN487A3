# SOEN487A3

Student Management System using GraphQL, Apollo Server, and Express.js

## Project Structure

```
SOEN487A3/
├── node_modules/      # Project dependencies
├── data.js            # Sample student data
├── schema.js          # GraphQL schema definition
├── resolvers.js       # GraphQL resolvers
├── server.js          # Express.js server with Apollo Server
├── index.html         # Frontend UI
└── package.json       # Project dependencies and scripts
```

## Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the server**:
   ```bash
   npm start
   ```

## Usage

- **Frontend UI**: Open `http://localhost:4000/` in your browser
- **GraphQL Playground**: Open `http://localhost:4000/graphql` in your browser

## Features

- Display all students
- Retrieve student by ID
- Add new student