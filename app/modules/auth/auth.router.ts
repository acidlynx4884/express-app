import express from 'express';
import { authLogin, authLogout, authSignup } from './auth.controller.js';

const router = express.Router();

router.post('/login', authLogin);
router.post('/logout', authLogout);
router.post('/signup', authSignup);

export default router;
