import fastify from 'fastify';
import { PrismaClient } from './generated/client';

export const app = fastify();

const prisma = new PrismaClient();

prisma.user.create({
  data: {
    name: 'Matheus Henrique',
    email: 'matheus@example.com.br',
  },
});
