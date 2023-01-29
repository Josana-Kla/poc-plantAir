import prisma from '../database/database.js';
/* import { Plants, PlantsEntity } from 'protocols'; */
import { Plant } from "@prisma/client";

export type PlantInput = Omit<Plant, "id" | "createAt">;

async function checkPlantExists(plant: Plant): Promise<Plant> {
    const plants =  await prisma.plant.findUnique({
        where: {
            plantName: plant.plantName
        }
    })
    return plants;
};

async function insertNewPlant(plant: PlantInput): Promise<void> {
    await prisma.plant.create({
        data: plant
    })
};

export async function gettingPlantsBySize(grownPlantSize: string) {
    return await prisma.plant.findMany({
        where: {
            grownPlantSize
        }
    })
};

export async function gettingAllPlants() {
    return await prisma.plant.findMany()
};

export async function updatingPlant(idNumber: number, status: string) {
    return await prisma.plant.update({
        where: { id: idNumber },
        data: {
            status
        }
    })
};

/* export async function deletingPlant(id: string): Promise<QueryResult<PlantsEntity>> {
    return await connection.query(`
        DELETE FROM plants WHERE id=$1;
    `, [id]);
}; */

const plantRepository = {
    checkPlantExists,
    insertNewPlant,
}

export default plantRepository;