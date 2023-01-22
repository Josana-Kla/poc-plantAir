import connection from '../database/database';
import { QueryResult } from "pg";
import { Plants, PlantsEntity } from 'protocols';

export async function checkPlantExists(plantName: string): Promise<QueryResult<PlantsEntity>> {
    return await connection.query(`
        SELECT * FROM plants WHERE "plantName" = $1;
    `, [plantName]);
};

export async function insertNewPlant(plantName: string, grownPlantSize: string, plantCategory: string, image: string, donor: string, description: string): Promise<QueryResult<Plants>> {
    return await connection.query(`
        INSERT INTO plants("plantName", "grownPlantSize", "plantCategory", image, donor, description) VALUES($1, $2, $3, $4, $5, $6);
    `, 
        [plantName, grownPlantSize, plantCategory, image, donor, description]
    );
};

export async function gettingPlantsBySize(grownPlantSize: string): Promise<QueryResult<PlantsEntity>> {
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
};
