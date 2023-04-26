import Colaborador from "../Colaborador/Colaborador";
import "./Equipo.css";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  const { id, titulo, colorPrimario, actualizarColor, like } = props;
  const { colaboradores, eliminiarColaborador } = props;
  const obj = { backgroundColor: hexToRgba(colorPrimario, 0.35) };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="Equipo" style={obj}>
          <input
            type="color"
            value={colorPrimario}
            className="input-color"
            onChange={(e) => {
              actualizarColor(e.target.value, id);
            }}
          />

          <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                like={like}
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminiarColaborador={eliminiarColaborador}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
