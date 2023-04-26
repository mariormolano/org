import "./Colaborador.css";
import { TiDelete } from "react-icons/ti";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

//TiDeleteOutline
//TiDelete

const Colaborador = (props) => {
  const { colorPrimario, eliminiarColaborador, like } = props;

  const { Foto, Nombre, Puesto, id, Fav } = props.datos;


  return (
    <div className="Colaborador">
      <TiDelete onClick={() => eliminiarColaborador(id)} className="eliminar" />
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={Foto} alt={Nombre} />
      </div>
      <div className="info">
        <h4>{Nombre}</h4>
        <h5>{Puesto}</h5>
        {Fav ? (
          <AiFillHeart color="red" onClick={() => like(id)} />
        ) : (
          <AiOutlineHeart onClick={() => like(id)} />
        )}
      </div>
    </div>
  );
};

export default Colaborador;
