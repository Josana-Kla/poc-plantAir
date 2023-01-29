import { Response, Request } from 'express';
import joi from 'joi';
import plantService from '../services/plants.services.js';

export const plantSchema = joi.object({
    plantName: joi.string().pattern(/^[A-zÀ-ú]/).min(2).required().empty(' '),
    grownPlantSize: joi.string().valid('small', 'medium','large').required().empty(' '),
    image: joi.string().uri().required().empty(' '),
    description: joi.string(),
    donorId: joi.number().required(),
    plantCategoryId: joi.number().required(),
}); 

async function createPlants(req: Request, res: Response) {
    const plant = req.body;
    const validation = plantSchema.validate(req.body, {abortEarly: false});

    if(validation.error) {
        const error = validation.error.details.map(detail => detail.message);
        return res.status(400).send(error);
    };

    try {
        await plantService.createPlants(plant);
        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

async function getAllPlants(req: Request, res: Response) {
    const grownPlantSize: string  = req.query.grownPlantSize as string;
  
    try {
        const getPlants = await plantService.getAllPlants(grownPlantSize);
        return res.status(200).send(getPlants);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

async function updatePlants(req: Request, res: Response) {
    const id: string = req.params.id; 
  
    try {
        await plantService.updatePlants(id);
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

async function deletePlants(req: Request, res: Response) {
    const id: string = req.params.id;
    
    try {
        await plantService.deletePlants(id);
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

export { createPlants, getAllPlants, updatePlants, deletePlants };