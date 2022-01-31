import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()

async function main() {
    const app = express()
    console.log(app)
    const allUsers = await prisma.user.findMany()
    console.dir(allUsers, { depth: null } )
    console.log("hello eart")
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })