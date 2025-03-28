import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient()

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', async (req: Request, res: Response) => {
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
  res.send('Express + TypeScript Serverr');

});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
