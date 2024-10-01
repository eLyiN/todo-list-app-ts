// src/components/TodoList.tsx
import { List } from 'antd';
import TodoItem from './TodoItem';

interface Duty {
  id: number;
  description: string;
}

interface TodoListProps {
  todos: Duty[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, description: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onUpdate }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={todos}
      renderItem={(todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onUpdate={onUpdate} />
      )}
    />
  );
};

export default TodoList;
