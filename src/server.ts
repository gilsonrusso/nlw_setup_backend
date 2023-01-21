import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors, {});

app.get("/habits", async () => {
  return await prisma.habit.findMany();
});

app
  .listen({ port: 3333 })
  .then(() => console.log("Server Running http://localhost:3333"));
