import express from 'express';
import { createPlants, getAllPlants, updatePlants, deletePlants } from '../controllers/plants.controllers';

const router = express.Router();

router.post("/plants", createPlants);
router.get("/plants", getAllPlants);
router.put("/plants/:id", updatePlants);
router.delete("/plants/:id", deletePlants);

export default router;