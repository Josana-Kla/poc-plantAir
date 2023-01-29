import plantRepository from "../repositories/plants.repositories.js";
import { Plant } from "@prisma/client";

async function createPlants(plant: Plant) {
    const plantExists = await plantRepository.checkPlantExists(plant);

    if(plantExists) {
        throw new Error("This plant name already exists");
    }
    
    await plantRepository.insertNewPlant(plant);
};

async function getAllPlants() {
    
};

async function updatePlants(id: string) {
    const idNumber: number = Number(id);
    const status: string = "donated";

    await plantRepository.updatingPlant(idNumber, status);
};

async function deletePlants(id: string) {
    const idNumber: number = Number(id);

    await plantRepository.deletingPlant(idNumber)
};

const plantService = {
    createPlants,
    getAllPlants,
    updatePlants,
    deletePlants
};

export default plantService;