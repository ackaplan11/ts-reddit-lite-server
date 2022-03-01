import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()

async function main() {
    const app = express()
    app.listen(4000, () => {
      console.log("server started on localhost:4000")
    })
    
    app.get('/feed', async (_, res) => {
      const posts = await prisma.post.findMany({
        where: { published: true },
        include: { author: true },
      })
      res.json(posts)
    })
    
    app.get('/', async (_, res) => {
      res.json('hello')
    })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

  //1, 2