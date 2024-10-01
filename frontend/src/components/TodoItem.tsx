// src/components/TodoItem.tsx
import { useState } from 'react';
import { List, Input, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import TodoForm from './TodoForm';

interface Duty {
  id: number;
  description: string;
}

interface TodoItemProps {
  todo: Duty;
  onDelete: (id: number) => void;
  onUpdate: (id: number, description: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditSubmit = (newDescription: string) => {
    onUpdate(todo.id, newDescription);
    setIsEditing(false);
  };

  return (
    <List.Item
      actions={[
        isEditing ? null : (
          <EditOutlined key="edit" onClick={() => setIsEditing(true)} />
        ),
        <DeleteOutlined key="delete" onClick={() => onDelete(todo.id)} />,
      ]}
    >
      {isEditing ? (
        <TodoForm
          initialValue={todo.description}
          loading={false}
          onSubmit={handleEditSubmit}
        />
      ) : (
        todo.description
      )}
    </List.Item>
  );
};

export default TodoItem;
