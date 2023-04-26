import "./CampoTexto.css";

const CampoTexto = (props) => {
  const { placeholder, required, valor, titulo, pattern, type } = props;

  const manejarCambio = (e) => {
    props.setValor(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{titulo}</label>
      {type === "color" ? (
        <input
          className="campoDeColor"
          type="color"
          id={titulo}
          value={valor}
          onChange={manejarCambio}
        />
      ) : (
        <input
          className="campoDeTexto"
          id={titulo}
          placeholder={placeholder}
          required={required}
          value={valor}
          onChange={manejarCambio}
          pattern={pattern}
        />
      )}
    </div>
  );
};

export default CampoTexto;
