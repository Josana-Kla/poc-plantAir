import { Response, Request } from 'express';
import joi from 'joi';
import { insertNewUser } from '../repositories/users.repositories.js';
import { User } from "@prisma/client";

export const userSchema = joi.object({
    name: joi.string().pattern(/^[A-zÀ-ú]/).min(2).required().empty(' '),
    photo: joi.string().uri().required().empty(' '),
    email: joi.string().email().required().empty(''),
    phone: joi.string().pattern(/^[0-9]+$/).min(10).max(11).required().empty(' '),
}); 

export type UserInput = Omit<User, "id" | "createdAt">;

async function createUsers(req: Request, res: Response) {
    const user = req.body as UserInput;
    const validation = userSchema.validate(req.body, {abortEarly: false});

    if(validation.error) {
        const error = validation.error.details.map(detail => detail.message);

        return res.status(400).send(error);
    };

    try {
        await insertNewUser(user);

        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

export { createUsers }