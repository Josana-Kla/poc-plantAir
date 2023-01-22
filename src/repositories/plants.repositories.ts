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
}