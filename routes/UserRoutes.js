import express from 'express';
import { updateUser } from '../Controller/UserController.js';

const router = express.Router();

router.put('/update', updateUser);

export default router;