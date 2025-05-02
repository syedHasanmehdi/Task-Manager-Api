import express from 'express';
import authRoutes from './user.router.js';
import taskRoutes from './task.router.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/tasks', taskRoutes);

export default router;
