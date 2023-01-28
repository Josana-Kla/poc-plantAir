import prisma from '../src/database/database.js';

async function main(){
    data: [
        {
            "name": "Mariazinha",           
            "photo": "https://i.pinimg.com/736x/5e/f4/b7/5ef4b73cf1941ca22620dc87b37d8782.jpg",
            "email": "ma@gmail.com",      
            "phone": "2345677345"        
        }
    ]
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
})