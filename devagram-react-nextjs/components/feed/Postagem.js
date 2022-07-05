/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Avatar from '../avatar';

export default function Postagem({
  usuario, fotoDoPost
}) {
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
    </div>
  );
}