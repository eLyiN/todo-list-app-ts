# Todo List App - Backend

## Overview

This is the backend of a simple To-Do List application built using **Node.js** with **TypeScript**. The backend is structured with a clean separation of concerns, utilizing:
- **Controllers**: Handle the business logic and HTTP responses.
- **Models**: Handle database queries.
- **Routes**: Define the API endpoints.

The database used is **PostgreSQL**, and all database operations are done using plain SQL queries, without any ORM.


## Setup Instructions

### 1. Clone the Repository

```bash
git clone git@github.com:eLyiN/todo-list-app-ts.git
cd todo-list-app-ts/backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Environment Variables
Create a `.env` file in the root of the project and add the following environment variables:

```bash
POSTGRES_USER=your_postgres_username
POSTGRES_PASSWORD=your_postgres_password
POSTGRES_DB=your_postgres_database
POSTGRES_HOST=your_postgres_host
POSTGRES_PORT=your_postgres_port
```

### 4. Create the Database
If you haven't already created the database, you can do so by putting the environment variables in the `.env` file and running the following command:

```bash
NODE_ENV=development 
```

### 5. Run the Application
Start the development server by running:

```bash
npm run dev
```

The server should be running on `http://localhost:3000`.

### 6. API Endpoints
The API endpoints can be accessed at the following routes:
--- HTTP Method --- | --- Route --- | --- Description ---
- `GET /api/todos`: Get all todos
- `POST /api/todos`: Create a new todo
- `PUT /api/todos/:id`: Update a todo
- `DELETE /api/todos/:id`: Delete a todo

## Testing
We use Jest and Supertest to test the API endpoints and logic. The PostgreSQL database is mocked using jest.mock to avoid interacting with a real database during testing.

To run the tests, use the following command:

```bash
npm test
```

### Mocking the PostgreSQL Database
The PostgreSQL database is mocked using Jest's `jest.mock` function. The mock database is created in the `__mocks__` directory and is used to simulate database operations without interacting with a real database.