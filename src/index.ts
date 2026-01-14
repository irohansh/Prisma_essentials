import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function createAtTable(){
    try{
        const user=await prisma.user.create({
            data:{
                username:"irohansh",
                password:"rohan",
                firstName:"Rohan",
                lastName:"Sharma"
            },
        });

        console.log("user created",user);
    }catch (error) {
        console.error("Prisma error:", error);
    } finally {
        await prisma.$disconnect();
    }
}

createAtTable();
