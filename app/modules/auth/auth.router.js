import express from 'express';
import { authLogin, authSignup } from './auth.controller.js';

const router = express.Router();

router.post('/login', authLogin);

router.post('/signup', authSignup);

export default router;
