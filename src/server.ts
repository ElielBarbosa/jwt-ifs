import "dotenv/config";
import express from "express";
import cors from "cors";
import { saldoRota } from "./routes/SaldoRota.js";
import { usuarioRota } from "./routes/UsuarioRota.js";
import { authrota } from "./routes/AuthRota.js";
import { authMiddleware } from "./middleware/auth.middleware.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use(usuarioRota);
app.use(authrota);



app.use(saldoRota);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});