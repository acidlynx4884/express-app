import express from 'express';
import { userCreate, userGetById, userDelete } from './user.controller.js';

const router = express.Router();

router.post('/', userCreate);
router.get('/:id', userGetById);
router.delete('/:id', userDelete);

export default router;
