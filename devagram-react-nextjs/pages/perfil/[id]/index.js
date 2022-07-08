import CabecalhoComAcoes from '../../../components/cabecalhoComAcoes';
import Feed from '../../../components/feed';
import comAutorizacao from '../../../hoc/comAutorizacao';

function Perfil({ usuarioLogado }) {
  return (
    <div className='paginaPerfil'>
      <CabecalhoComAcoes />
      <Feed usuarioLogado={usuarioLogado} />

    </div>
  );
}

export default comAutorizacao(Perfil);