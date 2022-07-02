import { useRouter } from "next/router";
import Cabecalho from "../components/layout/Cabecalho";
import Rodape from "../components/layout/Rodape";
import UsuarioService from "../services/UsuarioService";

const usuarioService = new UsuarioService();

export default function ComAutorizacao(Componente) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    if (typeof window !== 'undefined') {
      if (!usuarioService.estaAutenticado()) {
        router.replace("/");
        return null;
      }
      return (
        <>
          <Cabecalho />
          <Componente {...props} />
          <Rodape />
        </>
      );
    }
    return null;
  };
}