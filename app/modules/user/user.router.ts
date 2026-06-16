import express from 'express';
import { userCreate, userGetAll, userGetById, userDelete } from './user.controller.js';

const router = express.Router();

router.get('/', userGetAll);
router.get('/:id', userGetById);
router.post('/', userCreate);
router.delete('/:id', userDelete);

export default router;
