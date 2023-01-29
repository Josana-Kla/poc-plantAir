import { Plant } from "@prisma/client";

export type PlantInput = Omit<Plant, "id" | "createAt">;