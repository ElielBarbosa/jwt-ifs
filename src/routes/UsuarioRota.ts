import { Router } from "express";
import { UsuarioController } from "../controller/UsuarioController.js";

export const usuarioRota = Router();
const usuarioController = new UsuarioController();

usuarioRota.post("/usuarios", usuarioController.criar)
usuarioRota.get("/usuarios", usuarioController.listar)