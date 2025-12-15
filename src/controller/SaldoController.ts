import { SaldoRepository } from "../repository/SaldoRepository.js";
import { Request, Response } from "express";

export class SaldoController {

   private saldoRepositorio: SaldoRepository

   constructor() {
      this.saldoRepositorio = new SaldoRepository()
   }

   getUsuarioSaldo = async (req: Request, res: Response) => {
      const userId = Number(req.params.userId);
      const saldo = await this.saldoRepositorio.findByUsuarioId(userId);

      return res.json(saldo);

   }

}