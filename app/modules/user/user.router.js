import express from 'express';
import { userCreate, userGetAll, userGetById, userDelete } from './user.controller.js';

const router = express.Router();

// GET
router.get('/', userGetAll); // get all users
router.get('/:id', userGetById); // get user by id

// POST
router.post('/', userCreate); // create user

// DELETE
router.delete('/:id', userDelete); // delete user by id

export default router;
