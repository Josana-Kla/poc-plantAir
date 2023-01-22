import connection from '../database/database';
import { QueryResult } from "pg";
import { PlantsEntity } from 'protocols';

export async function updatingPlant(id: string, status: string): Promise<QueryResult<PlantsEntity>> {
    return await connection.query(`
        UPDATE plants
        SET status=$1
        WHERE id=$2;
    `, [status, id]
    )
};

export async function deletingPlant(id: string): Promise<QueryResult<PlantsEntity>> {
    return await connection.query(`
        DELETE FROM plants WHERE id=$1;
    `, [id]);
};
