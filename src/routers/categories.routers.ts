import express from 'express';
import { createCategories } from '../controllers/categories.controllers.js';

const router = express.Router();

router.post("/categories", createCategories);

export default router;