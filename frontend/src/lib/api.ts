import { z } from 'zod';

export interface Duty {
  id: number;
  description: string;
}

// Define Zod schema for validation
const todoSchema = z.object({
  description: z.string().min(1, 'Description cannot be empty').max(100, 'Description cannot exceed 100 characters'),
});

// Validation function using Zod
export const validateTodo = (description: string) => {
  return todoSchema.safeParse({ description });
};

// Fetch all todos from the backend
export const fetchTodos = async (): Promise<Duty[]> => {
  const response = await fetch('/api/todos');
  if (!response.ok) throw new Error('Failed to fetch todos');
  return response.json();
};

// Create a new todo
export const createTodo = async (description: string): Promise<Duty> => {
  const validation = validateTodo(description);
  if (!validation.success) throw new Error(validation.error.errors[0].message);

  const response = await fetch('/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ description }),
  });
  console.log('response', response);
  if (!response.ok) throw new Error('Failed to create todo');
  return response.json();
};

// Edit a todo
export const updateTodo = async (id: number, description: string): Promise<Duty> => {
  const validation = validateTodo(description);
  if (!validation.success) throw new Error(validation.error.errors[0].message);

  const response = await fetch(`/api/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ description }),
  });
  console.log('response', response);
  if (!response.ok) throw new Error('Failed to update todo');
  return response.json();
};

// Delete a todo
export const deleteTodo = async (id: number): Promise<void> => {
  const response = await fetch(`/api/todos/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete todo');
};
