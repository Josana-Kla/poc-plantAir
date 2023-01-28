import { Response, Request } from 'express';
import joi from 'joi';
import { insertNewCategory } from '../repositories/categories.repositories.js';
import { Category } from "@prisma/client";

export const categorySchema = joi.object({
    name: joi.string().pattern(/^[A-zÀ-ú]/).min(2).required().empty(' '),
}); 

export type CategoryInput = Omit<Category, "id">;

async function createCategories(req: Request, res: Response) {
    const category = req.body as CategoryInput;
    const validation = categorySchema.validate(req.body, {abortEarly: false});

    if(validation.error) {
        const error = validation.error.details.map(detail => detail.message);

        return res.status(400).send(error);
    };

    try {
        await insertNewCategory(category);

        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

export { createCategories }