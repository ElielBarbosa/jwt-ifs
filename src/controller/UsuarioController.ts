import { Request, Response } from "express"
import { UsuarioRepository } from "../repository/UsuarioRepository.js"

export class UsuarioController {
    
    private usuarioRepository:UsuarioRepository

    constructor(){
        this.usuarioRepository = new UsuarioRepository();
    }

    listar = async (req:Request, res:Response) =>{
        const users = await this.usuarioRepository.listAll()
        return res.json(users);
    }

    criar = async (req: Request, res:Response) =>{
        const { login, senha } = req.body; //{login:eliel, senha:12345}

        const existing = await this.usuarioRepository.findByLogin(login);

        if (existing) {
            return res.status(400).json({ message: "Login ja existe." });
        }

        const user = await this.usuarioRepository.criar(login, senha);

        return res.json(user);
    }
}