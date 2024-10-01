import { useEffect, useState } from 'react';
import { notification } from 'antd';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from './lib/api';

export interface Duty {
  id: number;
  description: string;
}

function App() {
  const [todos, setTodos] = useState<Duty[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (err) {
        notification.error({ message: (err as Error).message });
      }
    };
    loadTodos();
  }, []);

  const handleCreate = async (description: string) => {
    setLoading(true);
    try {
      const createdTodo = await createTodo(description);
      setTodos([...todos, createdTodo]);
      notification.success({ message: 'Todo created successfully' });
    } catch (err) {
      notification.error({ message: (err as Error).message });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id: number, description: string) => {
    setLoading(true);
    try {
      const updatedTodo = await updateTodo(id, description);
      setTodos(todos.map((todo: { id: number; }) => (todo.id === id ? updatedTodo : todo)));
      notification.success({ message: 'Todo updated successfully' });
    } catch (err) {
      notification.error({ message: (err as Error).message });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    setLoading(true);
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo: { id: number; }) => todo.id !== id));
      notification.success({ message: 'Todo deleted successfully' });
    } catch (err) {
      notification.error({ message: (err as Error).message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo List</h1>

      {/* Form to create a new task */}
      <TodoForm initialValue="" loading={loading} onSubmit={handleCreate} />

      {/* Render the list of todos */}
      <TodoList todos={todos} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
}

export default App;
