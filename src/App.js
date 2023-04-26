import { useState } from "react";
import "./App.css";
import Formulario from "./componentes/Formulario/Formulario";
import Header from "./componentes/Header/Header";
import MiOrg from "./componentes/MiOrg/MiOrg";
import Equipo from "./componentes/Equipo/Equipo";
import Footer from "./componentes/Footer/Footer";
import { v4 as uuid } from "uuid";

function App() {
  const [mostrarFormulario, actualizaMostrar] = useState(false);

  const [equipos, actualizaEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([
    {
      id: uuid(),
      Equipo: "Front End",
      Foto: "https://github.com/harlandlohora.png",
      Nombre: "Harland Lohora",
      Puesto: "Instructor",
      Fav: true,
    },
    {
      id: uuid(),
      Equipo: "Programación",
      Foto: "https://github.com/genesysaluralatam.png",
      Nombre: "Genesys Rondón",
      Puesto: "Instructor",
      Fav: false,
    },
    {
      id: uuid(),
      Equipo: "UX y Diseño",
      Foto: "https://github.com/JeanmarieAluraLatam.png",
      Nombre: "Jeanmarie Quijada",
      Puesto: "Instructor",
      Fav: false,
    },
    {
      id: uuid(),
      Equipo: "Programación",
      Foto: "https://github.com/christianpva.png",
      Nombre: "Christian Velasco",
      Puesto: "Instructor",
      Fav: false,
    },
    {
      id: uuid(),
      Equipo: "Innovación y Gestión",
      Foto: "https://github.com/JoseDarioGonzalezCha.png",
      Nombre: "Jose Gonzalez",
      Puesto: "Instructor",
      Fav: false,
    },
  ]);

  const like = (id) => {
    const colaboradoresActualizador = colaboradores.map((colaborador) => {
      if (colaborador.id === id) colaborador.Fav = !colaborador.Fav;
      return colaborador
    });
    setColaboradores(colaboradoresActualizador);
    console.log("id", id);
  };

  const cambiarMostar = () => {
    actualizaMostrar(mostrarFormulario ? false : true);
  };

  //Eliminar colaborador

  const eliminiarColaborador = (id) => {
    const colaboradoresActualizados = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(colaboradoresActualizados);
  };

  //Actualizar color
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) equipo.colorPrimario = color;

      return equipo;
    });
    console.log(equiposActualizados);
    actualizaEquipos(equiposActualizados);
  };

  //registrar colaborador
  const registrarColaborador = (colaborador) => {
    //console.log("Nuevo colaborador ", colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  //Crear equipo

  const crearEquipo = (nuevoEquipo) => {
    actualizaEquipos([...equipos, { id: uuid(), ...nuevoEquipo }]);
  };

  /*

            COMPONENTES

  */

  return (
    <div>
      <Header />
      {mostrarFormulario && (
        <Formulario
          registrarColaborador={registrarColaborador}
          colaboradores={colaboradores}
          equipos={equipos}
          crearEquipo={crearEquipo}
        />
      )}

      <MiOrg cambiarMostar={cambiarMostar} />
      {equipos.map((equipo) => (
        <Equipo
          {...equipo}
          key={equipo.titulo}
          eliminiarColaborador={eliminiarColaborador}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.Equipo === equipo.titulo
          )}
          like={like}
          actualizarColor={actualizarColor}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
