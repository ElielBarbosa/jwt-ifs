-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Saldo" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "Saldo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_login_key" ON "Usuario"("login");

-- CreateIndex
CREATE UNIQUE INDEX "Saldo_usuarioId_key" ON "Saldo"("usuarioId");

-- AddForeignKey
ALTER TABLE "Saldo" ADD CONSTRAINT "Saldo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
