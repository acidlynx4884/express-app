import express from 'express';
import { userCreate, userDelete } from './controller.js';

const router = express.Router();

router.post('/', userCreate);
router.delete('/:id', userDelete);

export default router;
