import plantRepository, { PlantInput } from "../repositories/plants.repositories.js";
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

async function updatePlants() {
    
};

async function deletePlants() {
    
};

const plantService = {
    createPlants,
    getAllPlants,
    updatePlants,
    deletePlants
};

export default plantService;