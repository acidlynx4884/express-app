import express from 'express';
import authRouter from '../modules/auth/auth.router.js';
import userRouter from '../modules/user/user.router.js';
import { requireAuth } from '../middlewares/requireAuth.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/user', requireAuth, userRouter);

export default router;
