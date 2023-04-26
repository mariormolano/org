import { useState } from "react";
import Boton from "../Boton/Boton";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import "./Formulario.css";

const Formulario = (props) => {
  const [Nombre, actualizarNombre] = useState("");
  const [Puesto, actualizarPuesto] = useState("");
  const [Foto, actualizarFoto] = useState("");
  const [Equipo, actualizarEquipo] = useState("");

  const [Titulo, actualizarTitulo] = useState("");
  const [Color, actualizarColor] = useState("");

  const { registrarColaborador, crearEquipo, equipos } = props;

  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosAEnviar = {
      Nombre: Nombre,
      Puesto: Puesto,
      Foto: Foto,
      Equipo: Equipo,
    };
    console.log(datosAEnviar);
    registrarColaborador(datosAEnviar);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ id: "", titulo: Titulo, colorPrimario: Color });
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto
          titulo="Nombre"
          required
          placeholder="Ingresar nombre"
          Valor={Nombre}
          setValor={actualizarNombre}
        />
        <CampoTexto
          titulo="Puesto"
          required
          placeholder="Ingresar puesto"
          Valor={Puesto}
          setValor={actualizarPuesto}
        />
        <CampoTexto
          titulo="Foto"
          required
          placeholder="Ingresar enlace de foto"
          Valor={Foto}
          setValor={actualizarFoto}
        />
        <ListaOpciones
          equipos={equipos}
          Valor={Equipo}
          setValor={actualizarEquipo}
        />
        <Boton>Crear</Boton>
      </form>

      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <CampoTexto
          titulo="Titulo"
          required
          placeholder="Ingresar el titulo"
          Valor={Titulo}
          setValor={actualizarTitulo}
        />
        {/* <input
          type="color"
          value={Color}
          onChange={(e) => {
            actualizarColor(e.target.value);
            console.log(e.target.value,Color);
          }}
        /> */}
        <CampoTexto
          titulo="Color"
          required
          placeholder="Ingresar el color en #rrggbb"
          Valor={Color}
          setValor={actualizarColor}
          pattern="^#([A-Fa-f0-9]{6})$"
          type="color"
        />
        <Boton>Registrar equipo</Boton>
      </form>
    </section>
  );
};

export default Formulario;
