import { useEffect, useState } from "react";
import FeedService from "../../services/FeedService";
import Postagem from "./Postagem";

const feedService = new FeedService();

export default function Feed({ usuarioLogado, usuarioPerfil }) {
  const [listaDePostagens, setListaDePostagens] = useState([]);

  async function carregarPostagensFeed() {
    const { data } = await feedService.carregarPostagens();
    const postagensFormatadas = data.map((postagem) => (
      {
        id: postagem._id,
        usuario: {
          id: postagem.userId,
          nome: postagem?.usuario?.nome || usuarioPerfil?.nome,
          avatar: postagem?.usuario?.avatar || usuarioPerfil?.avatar
        },
        fotoDoPost: postagem.foto,
        descricao: postagem.descricao,
        curtidas: postagem.likes,
        comentarios: postagem.comentarios.map(c => ({
          nome: c.nome,
          mensagem: c.comentario
        }))
      }
    ));

    setListaDePostagens(postagensFormatadas);
  }

  useEffect(() => {
    carregarPostagensFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usuarioLogado, usuarioPerfil]);

  if (!listaDePostagens.length) {
    return null;
  }

  return (

    <div className="feedContainer largura30pctDesktop">
      {listaDePostagens.map(dadosPostagem => (
        <Postagem
          key={dadosPostagem.id}
          usuarioLogado={usuarioLogado}
          {...dadosPostagem}
        />
      ))}
    </div>

  );
}