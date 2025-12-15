import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import process from 'process';

interface TokenPayload {
    userId: number;
    login: string;
    iat: number;
    exp: number;
}

/*Apliquei a middleware na rota específica para conseguir pegar o id do req.parms
e compara com o id do token e validar.*/

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.json({ menssagem: "Voce precisa fazer login para prosseguir" }).status(401);
    }

    const parts = authHeader.split(" ");

    const [type, token] = parts;

    const secret = process.env.JWT_SECRET as string;

    try {
        const decoded = jwt.verify(token, secret) as TokenPayload;

        const userId = Number(req.params.userId);

        if (userId === decoded.userId) {
            return next();
        }

        throw new Error("Token inválido");

    } catch {
        return res.status(401).json({ message: 'Token inválido ou expirado' });
    }
}