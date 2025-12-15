import { Router } from "express";
import { AuthController } from "../controller/AuthController.js";

export const authrota = Router()
const authController = new AuthController()

authrota.post("/login", authController.login)