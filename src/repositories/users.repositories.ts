import prisma from '../database/database.js';
import { User } from "@prisma/client";

export type UserInput = Omit<User, "id" | "createdAt">;

export async function insertNewUser(user: UserInput): Promise<User> {
    return await prisma.user.create({
        data: user
    })
}