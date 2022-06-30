import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import UploadImagem from "../../components/uploadImagem";
import Botao from "../../components/botao";
import imagemLogo from '../../public/imagens/logo.svg';
import imagemUsuarioAtivo from '../../public/imagens/usuarioAtivo.svg';
import imagemEnvelope from '../../public/imagens/envelope.svg';
import imagemChave from '../../public/imagens/chave.svg';
import imagemAvatar from '../../public/imagens/avatar.svg';
import InputPublico from "../../components/inputPublico";

export default function Cadastro() {
  const [imagem, setImagem] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");


  return (
    <section className={`paginaCadastro paginaPublica`}>
      <div className="logoContainer desktop">
        <Image
          src={imagemLogo}
          alt="Logotipo"
          layout="fill"
          className="logo"
        />
      </div>

      <div className="conteudoPaginaPublica">
        <form>
          <UploadImagem
            imagemPreviewClassName="avatar avatarPreview"
            imagemPreview={imagem?.preview || imagemAvatar.src}
            setImagem={setImagem}
          />

          <InputPublico
            imagem={imagemUsuarioAtivo}
            texto="Nome completo"
            tipo="text"
            aoAlterarValor={e => setNome(e.target.value)}
            valor={nome}
          />
          <InputPublico
            imagem={imagemEnvelope}
            texto="E-mail"
            tipo="email"
            aoAlterarValor={e => setEmail(e.target.value)}
            valor={email}
          />
          <InputPublico
            imagem={imagemChave}
            texto="Senha"
            tipo="password"
            aoAlterarValor={e => setSenha(e.target.value)}
            valor={senha}
          />

          <InputPublico
            imagem={imagemChave}
            texto="Confirmar senha"
            tipo="password"
            aoAlterarValor={e => setConfirmarSenha(e.target.value)}
            valor={confirmarSenha}
          />

          <Botao
            texto="Cadastrar"
            tipo="submit"
            desabilitado={false}
          />
        </form>

        <div className="rodapePaginaPublica">
          <p>Já possui uma conta</p>
          <Link href="/">Faça seu login agora</Link>
        </div>
      </div>
    </section>
  );
}