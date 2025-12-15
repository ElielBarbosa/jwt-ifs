import { Saldo } from "../entities/ISaldo.js";
import { prisma } from "../prismaClient.js";

export class SaldoRepository{
    async findByUsuarioId(usuarioId: number): Promise<Saldo | null> {
        const rows = await prisma.$queryRaw`
            SELECT id, "usuarioId", valor
            FROM "Saldo"
            WHERE "usuarioId" = ${usuarioId}
        ` as Saldo[];

        if (rows.length === 0) {
            return null;
        }
        return rows[0];
    }
}