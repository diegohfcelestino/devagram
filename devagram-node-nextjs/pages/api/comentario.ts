import type { NextApiRequest, NextApiResponse } from "next";
import { conectarMongoDB } from "../../middlewares/conectarMongoDB";
import { politicaCORS } from "../../middlewares/politicaCORS";
import { validarTokenJWT } from "../../middlewares/validarTokenJWT";
import { PublicacaoModel } from "../../models/PublicacaoModel";
import { UsuarioModel } from "../../models/UsuarioModel";
import type { RespostaPadraoMsg } from "../../types/RespostaPadraoMsg";

const comentarioEndpoint = async (
  req: NextApiRequest,
  res: NextApiResponse<RespostaPadraoMsg>
) => {
  try {
    if (req.method === "PUT") {
      const { userId, id } = req.query;
      const usuarioLogado = await UsuarioModel.findById(userId);
      if (!usuarioLogado) {
        return res.status(400).json({ erro: "Usuário não encontrado" });
      }

      const publicacao = await PublicacaoModel.findById(id);
      if (!publicacao) {
        return res.status(400).json({ erro: "Publicação não encontrada" });
      }

      if (!req.body || !req.body.comentario || req.body.comentario.length < 2) {
        return res.status(400).json({ erro: "Comentário não e válido" });
      }

      const comentario = {
        usuarioId: usuarioLogado._id,
        nome: usuarioLogado.nome,
        comentario: req.body.comentario
      };

      publicacao.comentarios.push(comentario);
      await PublicacaoModel.findByIdAndUpdate(
        { _id: publicacao._id },
        publicacao
      );
      return res.status(200).json({ msg: "Comentário adicionado com sucesso" });
    }

    return res.status(405).json({ erro: "Método informado nao e valido" });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ erro: "Ocorreu erro ao adicionar comentário" });
  }
};

export default politicaCORS(
  validarTokenJWT(conectarMongoDB(comentarioEndpoint))
);
