
# Todo List Application

This is a full-stack Todo List application with a **frontend built using Vite.js, React, TypeScript, and Ant Design** and a **backend using Node.js, Express, and PostgreSQL**.

## Prerequisites

- **Node.js**: Make sure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **PostgreSQL**: Ensure that PostgreSQL is installed and running.

---

## Backend Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/todo-list-app-ts.git
cd todo-list-app-ts/backend
```

### 2. Install Dependencies

Navigate to the **backend** directory and install the required dependencies:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a **.env** file in the **backend** directory and add your PostgreSQL database connection details:

```bash
POSTGRES_USER=your_postgres_user
POSTGRES_PASSWORD=your_postgres_password
POSTGRES_DB=your_database_name
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
```


### 4. Run the Backend Server

Now, start the backend server:

```bash
npm run dev
```

The backend should now be running on **http://localhost:3000**.

---

## Frontend Setup

### 1. Navigate to the Frontend Directory

After cloning the repository, navigate to the **frontend** directory:

```bash
cd ../frontend
```

### 2. Install Frontend Dependencies

Install the required dependencies for the **frontend**:

```bash
npm install
```

### 3. Run the Frontend Development Server

Start the frontend development server:

```bash
npm run dev
```

The frontend will run on **http://localhost:5173**.

---

## Screenshots

### Home Page
![Home Page](https://github.com/user-attachments/assets/21abadd5-5fb0-4f12-84db-52ac52c9ec2d)


### Adding a New Task
![Adding a New Task](https://github.com/user-attachments/assets/b10de85e-be4c-44d4-903a-0e49b1a48275)


### Editing a Task
![image](https://github.com/user-attachments/assets/a2c73cf8-68ee-4dfe-a31a-0994e51cfdce)
![image](https://github.com/user-attachments/assets/f24ffbbd-e973-474d-a328-db9f9260483c)

### Deleting a Task
![image](https://github.com/user-attachments/assets/a50df206-3b84-4aad-86dc-8dd92599d23a)
![image](https://github.com/user-attachments/assets/9e966b22-49c2-4e43-973c-b664f72b0386)


---

## Usage

1. Open **http://localhost:5173** in your browser.
2. You can create new tasks, edit existing tasks, or delete tasks.
3. All changes will be reflected in real-time.

---

## Technologies Used

- **Frontend**:
  - React (with TypeScript)
  - Vite.js
  - Ant Design
  - Zod (for validation)

- **Backend**:
  - Node.js
  - Express.js
  - PostgreSQL

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
