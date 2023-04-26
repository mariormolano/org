
//import { useState } from 'react';
import './MiOrg.css'

const MiOrg = (props) => {
    // const [mostrar, actualizaMostrar] = useState(true);
    // const manejarClick = () =>{
    //     console.log("Mostrar/Ocultar elemento");
    //     actualizaMostrar(!mostrar)
    // }

    return <section className='orgSection'>
        <h3 className='title'>Mi organización </h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostar} />
    </section>
}

export default MiOrg
