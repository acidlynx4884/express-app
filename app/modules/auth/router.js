import express from 'express';
import { authLoginPage, authSignupPage, authLogin, authSignup } from './controller.js';

const router = express.Router();

router.get('/login', authLoginPage);
router.get('/signup', authSignupPage);
router.post('/login', authLogin);
router.post('/signup', authSignup);

export default router;
