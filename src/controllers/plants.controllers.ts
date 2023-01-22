import connection from '../database/database';
import { Response, Request } from 'express';
import joi from 'joi';
import { Plants } from 'protocols';
import { updatingPlant } from 'repositories/plants.repositories';

export const plantSchema = joi.object({
    plantName: joi.string().pattern(/^[A-zÀ-ú]/).min(2).required().empty(' '),
    grownPlantSize: joi.string().valid('small', 'medium', 'large').required().empty(' '),
    plantCategory: joi.string().pattern(/^[A-zÀ-ú]/).min(2).required().empty(' '),
    image: joi.string().uri().required().empty(' '),
    donor: joi.string().pattern(/^[A-zÀ-ú]/).min(2).required().empty(' '),
    description: joi.string(),
}); 

async function createPlants(req: Request, res: Response) {
    const { plantName, grownPlantSize, plantCategory, image, donor, description } = req.body as Plants;
    const validation = plantSchema.validate(req.body, {abortEarly: false});

    if(validation.error) {
        const error = validation.error.details.map(detail => detail.message);

        return res.status(400).send(error);
    };

    try {
        const plantExists = await connection.query(`
            SELECT * FROM plants WHERE "plantName" = $1;
        `, [plantName]);

        if(plantExists.rows[0] === undefined) {
            await connection.query(`
                INSERT INTO plants("plantName", "grownPlantSize", "plantCategory", image, donor, description) VALUES($1, $2, $3, $4, $5, $6)
            `, 
                [plantName, grownPlantSize, plantCategory, image, donor, description]
            );

            return res.sendStatus(201);
        } else {
            throw new Error("Esse nome já existe");
        }
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

async function getAllPlants(req: Request, res: Response) {
    const { grownPlantSize } = req.query;

    try {
        if(grownPlantSize) {
            const { rows: grownPlantSizeValue } = await connection.query(`
                SELECT 
                plants.*
                WHERE plants."grownPlantSize" = $1;
            `, [grownPlantSize]);

            if(!grownPlantSizeValue[0]) {
                return res.sendStatus(404);
            };

            return res.status(200).send(grownPlantSizeValue);
        } else {
            const { rows: allPlants } = await connection.query(`
                SELECT * FROM plants;
            `);

            if(!allPlants[0]) {
                return res.sendStatus(404);
            };

            return res.status(200).send(allPlants);
        }
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

async function updatePlants(req: Request, res: Response) {
    const id: string = req.params.id;
    const status: string = req.body.status;
  
    try {
        await updatingPlant(id, status);
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

async function deletePlants(req, res) {
    
};

export { createPlants, getAllPlants, updatePlants, deletePlants };