import prisma from '../database/database.js';
import { QueryResult } from "pg";
/* import { Plants, PlantsEntity } from 'protocols'; */
import { Plant } from "@prisma/client";

export type PlantInput = Omit<Plant, "id" | "createAt">;

export async function checkPlantExists(plant: PlantInput) {
    return await prisma.plant.findFirst({
        where: {
            plantName: plant.plantName
        }
    })
};

export async function insertNewPlant(plant: PlantInput) {
    return await prisma.plant.create({
        data: plant
    })
};

/* export async function gettingPlantsBySize(grownPlantSize: string): Promise<QueryResult<PlantsEntity>> {
    return await connection.query(`
        SELECT * FROM plants WHERE plants."grownPlantSize" = $1;
    `, [grownPlantSize]);
};

export async function gettingAllPlants(): Promise<QueryResult<PlantsEntity>> {
    return await connection.query(`
        SELECT * FROM plants;
    `);
};

export async function updatingPlant(id: string, status: string): Promise<QueryResult<PlantsEntity>> {
    return await connection.query(`
        UPDATE plants SET status=$1 WHERE id=$2;
    `, [status, id]);
};

export async function deletingPlant(id: string): Promise<QueryResult<PlantsEntity>> {
    return await connection.query(`
        DELETE FROM plants WHERE id=$1;
    `, [id]);
}; */
