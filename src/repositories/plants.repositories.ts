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

async function updatingPlant(idNumber: number, status: string) {
    await prisma.plant.update({
        where: { id: idNumber },
        data: {
            status
        }
    })
};

async function deletingPlant(idNumber: number) {
    await prisma.plant.delete({
        where: { id: idNumber }
    })
};

const plantRepository = {
    checkPlantExists,
    insertNewPlant,
    updatingPlant,
    deletingPlant
}

export default plantRepository;