import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async () => {
  const prisma = new PrismaClient();

  const users = await prisma.user.findMany();

  return { data: users };
});
