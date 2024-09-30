import { Request, Response } from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../models/todo-model';

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const result = await getTodos();
    res.json(result.rows);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

export const createNewTodo = async (req: Request, res: Response) => {
  const { description } = req.body;
  if (!description) {
    res.status(400).send({ error: 'Description is required' });
    return;
  }
  try {
    const result = await createTodo(description);
    res.status(201).json({ id: result.rows[0].id, description }); 
  } catch (err) {
    res.status(500).send({ error: 'Server error' });
  }
};


export const updateTodoById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { description } = req.body;
  if (!description) {
    res.status(400).send({ error: 'Description is required' });
    return;
  }
  
  try {
    const result = await updateTodo(id, description);
    res.status(200).json({ id, description });
  } catch (err) {
    res.status(500).send({ error: 'Server error' });
  }
};

export const deleteTodoById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteTodo(id);
    res.status(200).send('To-do deleted');
  } catch (err) {
    res.status(500).send('Server error');
  }
};