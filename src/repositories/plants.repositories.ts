import prisma from '../database/database.js';
import { Plant } from "@prisma/client";
import { PlantInput } from '../protocols';

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

async function gettingPlantsBySize(grownPlantSize: string) {
    return await prisma.plant.findMany({
        where: {
            grownPlantSize
        }
    })
};

async function gettingAllPlants() {
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
    gettingPlantsBySize,
    gettingAllPlants,
    updatingPlant,
    deletingPlant
}

export default plantRepository;