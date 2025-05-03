import express from 'express';
import authRoutes from './user.router.js';
import taskRoutes from './task.router.js';

// eslint-disable-next-line new-cap
const router = express.Router();

router.use('/auth', authRoutes);
router.use('/tasks', taskRoutes);

export default router;
