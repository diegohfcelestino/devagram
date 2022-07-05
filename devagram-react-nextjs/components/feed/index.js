import { useEffect, useState } from "react";
import Postagem from "./Postagem";

export default function Feed({ usuarioLogado }) {
  const [listaDePostagens, setListaDePostagens] = useState([]);

  useEffect(() => {
    console.log("Carregar o feed");
    setListaDePostagens([
      {
        id: '1',
        usuario: {
          id: '1',
          nome: 'Joao',
          avatar: null
        },
        fotoDoPost: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry, orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry, orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry, orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry, orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        curtidas: [],
        comentarios: [
          {
            nome: 'Diego',
            mensagem: 'Muito Legal'
          },
          {
            nome: 'Lucas',
            mensagem: 'Muito Tooooop'
          },
          {
            nome: 'Tiago',
            mensagem: 'Show de bola'
          }
        ],

      },
      {
        id: '2',
        usuario: {
          id: '2',
          nome: 'Diego',
          avatar: null
        },
        fotoDoPost: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg',
        descricao: 's standard dummy text ever since the 1500s, when an unknown printe',
        curtidas: [],
        comentarios: [
          {
            nome: 'Joao',
            mensagem: 'Muito Bom'
          }
        ],

      }
    ]);
  }, [usuarioLogado]);
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