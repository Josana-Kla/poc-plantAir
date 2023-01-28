import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/* async function main(){

}

main()
.then(async () => {
    console.error("Success!");
    })
.catch(async (e) => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
}) */

export default prisma;