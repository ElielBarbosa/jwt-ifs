import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.saldo.deleteMany();
  await prisma.usuario.deleteMany();

  const usuario1 = await prisma.usuario.create({
    data: {
      login: "eliel",
      senha: "123456",
    },
  });

  const usuario2 = await prisma.usuario.create({
    data: {
      login: "luis",
      senha: "123456",
    },
  });

  await prisma.saldo.create({
    data: {
      usuarioId: usuario1.id,
      valor: 1000.0,
    },
  });

  await prisma.saldo.create({
    data: {
      usuarioId: usuario2.id,
      valor: 1.0,
    },
  });
}

main()
  .then(() => {
    console.log("Seed executado com sucesso.");
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });