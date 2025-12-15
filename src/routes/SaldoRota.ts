import { Router } from "express";
import { SaldoController } from "../controller/SaldoController.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

export const saldoRota = Router()
const saldoController = new SaldoController();

saldoRota.get("/saldos/:userId", authMiddleware, saldoController.getUsuarioSaldo);