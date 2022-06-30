import InputPublico from "../inputPublico";
import Image from "next/image";
import Botao from "../botao";
import { validarEmail, validarSenha } from '../../utils/validadores';

import imagemEnvelope from '../../public/imagens/envelope.svg';
import imagemChave from '../../public/imagens/chave.svg';
import imagemLogo from '../../public/imagens/logo.svg';
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const validarFormulario = () => {
    return (
      validarEmail(email) && validarSenha(senha)
    );
  };

  return (
    <section className={`paginaLogin paginaPublica`}>
      <div className="logoContainer">
        <Image
          src={imagemLogo}
          alt="Logotipo"
          layout="fill"
          className="logo"
        />
      </div>

      <div className="conteudoPaginaPublica">
        <form action="">
          <InputPublico
            imagem={imagemEnvelope}
            texto="E-mail"
            tipo="email"
            aoAlterarValor={e => setEmail(e.target.value)}
            valor={email}
            mensagemValidacao="O endereço de e-mail é inválido"
            exibirMensagemValidacao={email && !validarEmail(email)}
          />

          <InputPublico
            imagem={imagemChave}
            texto="Senha"
            tipo="password"
            aoAlterarValor={e => setSenha(e.target.value)}
            valor={senha}
            mensagemValidacao="A senha deve conter no mínimo 3 caracteres"
            exibirMensagemValidacao={senha && !validarSenha(senha)}
          />

          <Botao
            texto="Login"
            tipo="submit"
            desabilitado={!validarFormulario()}
          />
        </form>
        <div className="rodapePaginaPublica">
          <p>Não possui uma conta?</p>
          <Link href="/cadastro">Faça seu cadastro agora</Link>
        </div>
      </div>
    </section>
  );
}