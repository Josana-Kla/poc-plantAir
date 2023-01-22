export type PlantsEntity = {
    id: number,
    plantName: string,
    grownPlantSize: string,
    plantCategory: string,
    image: string,
    donor: string,
    status: string,
    description: string,
};

export type Plants = Omit<PlantsEntity, "id" | "status">