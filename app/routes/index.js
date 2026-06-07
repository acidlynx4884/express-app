import express from 'express';
import pagesRouter from '../modules/pages/router.js';
import authRouter from '../modules/auth/router.js';
import userRouter from '../modules/user/router.js';

const router = express.Router();

router.use('/', pagesRouter);
router.use('/auth', authRouter);
router.use('/user', userRouter);

export default router;
