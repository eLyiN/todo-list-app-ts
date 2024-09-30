import pool from "../config/db";

export const getTodos = async () => {
  return await pool.query('SELECT * FROM todos');
};

export const createTodo = async (description: string) => {
  return await pool.query('INSERT INTO todos (description) VALUES ($1)', [description]);
};

export const updateTodo = async (id: string, description: string) => {
  return await pool.query('UPDATE todos SET description = $1 WHERE id = $2', [description, id]);
};

export const deleteTodo = async (id: string) => {
  return await pool.query('DELETE FROM todos WHERE id = $1', [id]);
};