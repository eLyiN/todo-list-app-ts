import { useEffect } from 'react';
import { Form, Input, Button } from 'antd';

interface TodoFormProps {
  initialValue: string;
  loading: boolean;
  onSubmit: (description: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ initialValue, loading, onSubmit }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ description: initialValue });
  }, [initialValue, form]);

  const handleFinish = (values: { description: string }) => {
    onSubmit(values.description);
  };

  return (
    <Form form={form} onFinish={handleFinish} layout="inline">
      <Form.Item
        name="description"
        rules={[{ required: true, message: 'Please input a task description!' }]}
      >
        <Input placeholder="Enter task" style={{ width: 300 }} />
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={loading}>
        {initialValue ? 'Update Task' : 'Add Task'}
      </Button>
    </Form>
  );
};

export default TodoForm;
