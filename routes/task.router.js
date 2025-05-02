import {Router} from 'express';
import authenticate from '../middleware/user.middleware.js';
import {createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask} from '../controller/task.controller.js';

// eslint-disable-next-line new-cap
const router=Router();

router.use(authenticate);

router.get('/', authenticate, getAllTasks);
router.get('/:id', authenticate, getTaskById);
router.post('/', authenticate, createTask);
router.put('/:id', authenticate, updateTask);
router.delete('/:id', authenticate, deleteTask);

export default router;
