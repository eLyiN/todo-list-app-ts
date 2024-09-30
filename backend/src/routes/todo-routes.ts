import { Router } from 'express';
import { getAllTodos, createNewTodo, updateTodoById, deleteTodoById } from '../controllers/todo-controllers';

const router = Router();

router.get('/todos', getAllTodos);
router.post('/todos', createNewTodo);
router.put('/todos/:id', updateTodoById);
router.delete('/todos/:id', deleteTodoById);

export default router;