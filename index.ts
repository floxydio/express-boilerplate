import express, { Express } from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import Router from './src/routes/routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3500;
const prisma = new PrismaClient();

Router(app);



app.listen(port, () => {
    prisma.$connect().then(() => {
        console.log("Database is connected")
    }).catch((err) => {
        console.log(`Database is not connected: ${err}`)
    })
    console.log(`Server is running on port ${port}`)
})
