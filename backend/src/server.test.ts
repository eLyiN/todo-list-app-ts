import request from 'supertest';
import app from './server';
import { Pool } from 'pg';

// Mock the PostgreSQL Pool
jest.mock('pg', () => {
  const mPool = {
    query: jest.fn().mockImplementation((query, params) => {
      if (query.includes('SELECT')) {
        return { rows: [{ id: 1, description: 'Test Task' }] };  // Mocked data for GET
      }
      if (query.includes('INSERT')) {
        return { rows: [{ id: 1, description: params[0] }] };  // Mocked data for POST
      }
      if (query.includes('UPDATE')) {
        return { rows: [] };  // Mocked data for UPDATE
      }
      if (query.includes('DELETE')) {
        return { rows: [] };  // Mocked data for DELETE
      }
    }),
    connect: jest.fn(),
  };
  return { Pool: jest.fn(() => mPool) };
});

describe('Todo API Endpoints', () => {
  it('should fetch all todos', async () => {
    const res = await request(app).get('/api/todos');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0]).toHaveProperty('description', 'Test Task');
  });

  it('should create a new todo', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({
        description: 'Test new task',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('description', 'Test new task');
  });

  it('should update an existing todo', async () => {
    const todoId = 1; // Adjust based on your existing data
    const res = await request(app)
      .put(`/api/todos/${todoId}`)
      .send({
        description: 'Updated task description',
      });
    expect(res.statusCode).toEqual(200);
  });

  it('should delete a todo', async () => {
    const todoId = 1; // Adjust based on your existing data
    const res = await request(app).delete(`/api/todos/${todoId}`);
    expect(res.statusCode).toEqual(200);
  });
});
