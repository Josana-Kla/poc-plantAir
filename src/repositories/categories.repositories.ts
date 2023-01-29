import prisma from '../database/database.js';
import { Category } from "@prisma/client";

export type CategoryInput = Omit<Category, "id">;

export async function insertNewCategory(category: CategoryInput): Promise<Category> {
    return await prisma.category.create({
        data: category
    })
}