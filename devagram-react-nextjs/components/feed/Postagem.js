/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Avatar from '../avatar';

import imgCurtir from '../../public/imagens/curtir.svg';
import imgCurtido from '../../public/imagens/curtido.svg';
import imgComentarioAtivo from '../../public/imagens/comentarioAtivo.svg';
import imgComentarioCinza from '../../public/imagens/comentarioCinza.svg';
import { FazerComentario } from './FazerComentario';

const tamanhoLimiteDescricao = 90;

export default function Postagem({
  usuario, fotoDoPost, descricao, comentarios, usuarioLogado
}) {
  const [deveExibirSecaoParaComentar, setDeveExibirSecaoParaComentar] = useState(false);
  const [tamanhoAtualDaDescricao, setTamanhoAtualDaDescricao] = useState(tamanhoLimiteDescricao);

  const descricaoMaiorQueLimite = () => {
    return descricao.length > tamanhoAtualDaDescricao;
  };

  const obterDercricao = () => {
    let mensagem = descricao.substring(0, tamanhoAtualDaDescricao);
    if (descricaoMaiorQueLimite()) {
      mensagem += '...';
    }
    return mensagem;
  };

  const exibirDescricaoCompleta = () => {
    setTamanhoAtualDaDescricao(Number.MAX_SAFE_INTEGER);
  };


  return (
    <div className="postagem">
      <Link href={`/perfil/${usuario.id}`}>
        <session className="cabecalhoPostagem">
          <Avatar src={usuario.avatar} />
          <strong>{usuario.nome}</strong>
        </session>
      </Link>

      <div className="fotoDaPostagem">
        <img src={fotoDoPost} alt='foto da postagem' />
      </div>

      <div className="rodapeDaPostagem">
        <div className="acoesDaPostagem">
          <Image
            src={imgCurtir}
            alt='Ícone curtir'
            width={20}
            height={20}
            onClick={() => console.log('curtir')}
          />
          <Image
            src={imgComentarioCinza}
            alt='Ícone comentar'
            width={20}
            height={20}
            onClick={() => setDeveExibirSecaoParaComentar(!deveExibirSecaoParaComentar)}
          />
          <span className="quantidadeCurtidas">
            Curtido por <strong>32 pessoas</strong>
          </span>
        </div>
        <div className="descricaoDaPostagem">
          <strong className="nomeUsuario">{usuario.nome}</strong>
          <p className='descricao'>
            {obterDercricao()}
            {descricaoMaiorQueLimite() && (
              <span
                onClick={exibirDescricaoCompleta}
                className="exibirDescricaoCompleta">
                mais
              </span>
            )}
          </p>
        </div>

        <div className="comentariosDaPublicacao">
          {comentarios.map((comentario, i) => (
            <div className="comentario" key={i}>
              <strong className="nomeUsuario">{comentario.nome}</strong>
              <p className="descricao">{comentario.mensagem}</p>
            </div>
          ))}
        </div>
      </div>

      {deveExibirSecaoParaComentar && (
        <FazerComentario usuarioLogado={usuarioLogado} />
      )
      }

    </div>
  );
}