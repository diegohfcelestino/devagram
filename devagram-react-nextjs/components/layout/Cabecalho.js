import Image from 'next/image';
import { useState } from 'react';
import logoHorizontalImg from '../../public/imagens/logoHorizontal.svg';
import imagemLupa from '../../public/imagens/lupa.svg';
import Navegacao from './Navegacao';
import ResultadoPesquisa from './ResultadoPesquisa';

export default function Cabecalho() {
  const [resultadoPesquisa, setResultadoPesquisa] = useState([]);
  const [termoPesquisado, setTermoPesquisado] = useState([]);

  const aoPesquisar = (e) => {
    setTermoPesquisado(e.target.value);
    setResultadoPesquisa([]);

    if (termoPesquisado.length < 3) {
      return;
    }
    setResultadoPesquisa([
      {
        avatar: '',
        nome: "Diego",
        email: 'testediego@diego.com',
        _id: '21324331'
      },
      {
        avatar: '',
        nome: "Aline",
        email: 'bbbbb@diego.com',
        _id: '213245454331'
      },
      {
        avatar: '',
        nome: "Tiago",
        email: 'aaaaaa@diego.com',
        _id: '21324676331'
      }
    ]);
  };

  const aoClicarResultadoPesquisa = (id) => {
    consolelog("aoClicarResultadoPesquisa", id);


  };

  return (
    <header className="cabecalhoPrincipal">
      <div className="conteudoCabecalhoPrincipal">
        <div className="logoCabecalhoPrincipal">
          <Image
            src={logoHorizontalImg}
            alt="Logo Devagram"
            layout="fill"
          />
        </div>
        <div className="barraPesquisa">
          <div className="containerImagemLupa">
            <Image
              src={imagemLupa}
              alt="Ícone Lupa"
              layout="fill"
            />
          </div>
          <input
            type="text"
            placeholder='Pesquisar'
            value={termoPesquisado}
            onChange={aoPesquisar}
          />
        </div>

        <Navegacao className='desktop' />

      </div>

      {resultadoPesquisa.length > 0 && (
        <div className='resultadoPesquisaContainer'>
          {resultadoPesquisa.map(r => (
            <ResultadoPesquisa
              key={r.id}
              avatar={r.avatar}
              nome={r.nome}
              email={r.email}
              id={r.id}
              onClick={aoClicarResultadoPesquisa}
            />
          ))}
        </div>
      )}
    </header>
  );
}