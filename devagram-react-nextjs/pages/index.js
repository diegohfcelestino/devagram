import { useEffect, useState } from "react";
import Home from "../components/home";
import Login from "../components/login";
import UsuarioService from "../services/UsuarioService";

const usuarioService = new UsuarioService();

export default function Index() {
  const [estaAutenticado, setEstaAutenticado] = useState(false);

  useEffect(() => {
    setEstaAutenticado(
      usuarioService.estaAutenticado()
    );
  }, []);

  if (estaAutenticado) {
    return <Home />;
  }
  return (
    <Login />
  );
}
