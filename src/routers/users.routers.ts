import express from 'express';
import { createUsers } from '../controllers/users.controllers.js';

const router = express.Router();

router.post("/users", createUsers);

export default router;