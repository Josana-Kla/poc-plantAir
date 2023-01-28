import express from 'express';
import { createPlants,/*  getAllPlants, updatePlants, deletePlants */ } from '../controllers/plants.controllers.js';

const router = express.Router();

router.post("/plants", createPlants);
/* router.get("/plants", getAllPlants);
router.patch("/plants/:id", updatePlants);
router.delete("/plants/:id", deletePlants); */

export default router;