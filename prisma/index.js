

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const dotenv = require("dotenv");
require('dotenv').config()
dotenv.config() // Load the environment variables
console.log(`The connection URL is ${process.env.DATABASE_URL}`)


async function main() {
    // run inside `async` function
    const newUser = await prisma.users.create({
        data: {
            name: 'Alice',
            email: 'alice@prisma.io',
        },
    })

    const users = await prisma.users.findMany()
}




main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })