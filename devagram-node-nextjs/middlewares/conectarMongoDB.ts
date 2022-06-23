import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import mongoose from "mongoose";
import type { RespostaPadraoMsg } from "../types/RespostaPadraoMsg";

export const conectarMongoDB =
  (handler: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse<RespostaPadraoMsg>) => {
    //verificar se o banco está conectado, se estiver seguir para o endpoint
    if (mongoose.connections[0].readyState) {
      return handler(req, res);
    }

    //já que não está conectado vamos conectar
    //obter a variável de ambiente preenchida no env
    const { DB_CONEXAO_STRING } = process.env;

    //se a env estiver vazia aborta o uso do sistema e avia o programador
    if (!DB_CONEXAO_STRING) {
      return res.status(500).json({
        erro: "ENV de configuração do banco, não foi informado ou está errado"
      });
    }

    mongoose.connection.on("connected", () =>
      console.log("Banco de dados conectado")
    );
    mongoose.connection.on("error", error =>
      console.log(`Ocorreu erro ao conectar no banco: ${error}`)
    );
    await mongoose.connect(DB_CONEXAO_STRING);

    return handler(req, res);
  };
