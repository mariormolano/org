import './ListaOpciones.css'

const ListaOpciones = (props) =>{

    const {equipos} = props
    const seleccionEquipo = (e) =>{
        props.setValor(e.target.value)
        console.log(e.target.value);
    }

    return <div className="listaOpciones">
        <label>Equipos</label>
        <select value={props.Valor} onChange={seleccionEquipo}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {equipos.map((equipo, index) => <option key={equipo.titulo}>{equipo.titulo}</option>)}
        </select>
    </div>
}

export default ListaOpciones