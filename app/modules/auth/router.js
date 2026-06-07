import express from 'express';
import { authLogin, authSignup } from './controller.js';

const router = express.Router();

router.post('/login', authLogin);
router.post('/signup', authSignup);

export default router;
