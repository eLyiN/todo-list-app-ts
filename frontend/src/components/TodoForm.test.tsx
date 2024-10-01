import { render, screen, fireEvent, act } from '@testing-library/react';
import TodoForm from './TodoForm';
import '@testing-library/jest-dom';

describe('TodoForm Component', () => {
  test('renders input and button', () => {
    render(<TodoForm initialValue="" loading={false} onSubmit={jest.fn()} />);

    const inputElement = screen.getByPlaceholderText(/enter task/i);
    const buttonElement = screen.getByText(/add task/i);

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onSubmit when form is submitted', async () => {
    const mockSubmit = jest.fn();
    
    render(<TodoForm initialValue="" loading={false} onSubmit={mockSubmit} />);

    const inputElement = screen.getByPlaceholderText(/enter task/i);
    const buttonElement = screen.getByText(/add task/i);

    // Simulate user typing into the input
    await act(async () => {
      fireEvent.change(inputElement, { target: { value: 'New Task' } });
    });

    // Simulate form submission
    await act(async () => {
      fireEvent.click(buttonElement);
    });

    // Check if onSubmit was called with the correct argument
    expect(mockSubmit).toHaveBeenCalledWith('New Task');
  });

  test('shows required validation error when input is empty', async () => {
    const mockSubmit = jest.fn();
    
    render(<TodoForm initialValue="" loading={false} onSubmit={mockSubmit} />);

    const buttonElement = screen.getByText(/add task/i);

    // Simulate form submission without entering a value
    await act(async () => {
      fireEvent.click(buttonElement);
    });

    // Expect the validation error message
    const errorMessage = await screen.findByText(/please input a task description!/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
