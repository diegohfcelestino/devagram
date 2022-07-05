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
        fotoDoPost: 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
        descricao: '',
        curtidas: [],
        comentarios: [
          {
            nome: 'Diego',
            mensagem: 'Muito Legal'
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
        descricao: '',
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

    <div className="feedContainer">
      {listaDePostagens.map(dadosPostagem => (
        <Postagem key={dadosPostagem.id} {...dadosPostagem} />
      ))}
    </div>

  );
}