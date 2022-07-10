/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CabecalhoPerfil from '../../../components/cabecalhoPerfil';
import Feed from '../../../components/feed';
import comAutorizacao from '../../../hoc/comAutorizacao';

function Perfil({ usuarioLogado }) {
  const [usuario, setUsusario] = useState([]);
  const router = useRouter();

  const buscaUsuario = async () => {

    setUsusario({
      nome: 'Diego Henrique Ferreira'
    });
  };

  useEffect(() => {
    buscaUsuario();
  }, [router.query.id]);

  return (
    <div className='paginaPerfil'>
      <CabecalhoPerfil usuarioLogado={usuarioLogado} usuario={usuario} />
      <Feed usuarioLogado={usuarioLogado} />

    </div>
  );
}

export default comAutorizacao(Perfil);