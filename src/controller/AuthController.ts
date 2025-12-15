import { UsuarioRepository } from "../repository/UsuarioRepository.js";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export class AuthController{

    private usuarioRepositorio: UsuarioRepository

    constructor(){
        this.usuarioRepositorio = new UsuarioRepository()
    }

    login = async (req:Request, res:Response) => {
        const { login, senha } = req.body; //{login:eliel, senha:1234}
        
        const user = await this.usuarioRepositorio.auth(login, senha);
        
        if (!user) {
            return res.status(401).json({ message: "Login ou senha invalidos." });
        }

        const secret = process.env.JWT_SECRET as string;

        const token = jwt.sign(
            {
                userId: user.id,
                login: user.login,
            },
                secret,
            {
                expiresIn: "1h",
            }
        );

        return res.json({token});
    }
}