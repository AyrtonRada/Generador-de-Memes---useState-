import React from "react";
import { useState } from "react";
import bootstrap from "bootstrap";

function BotonDesplegable() {
    const [texto1, setTexto1] = useState('Elija su imagen')
    
    const nombreImagen = (event) => {
        setTexto1(event.target.value)
    }

    return (

        <div className="boton" >
            <select onChange={nombreImagen}>
                <option value="banner">Banner</option>
                <option value="fondo">Fondo de Escritorio</option>
            </select>
            <br/>
            <img src={"/"+ texto1 + ".jpg"} />
           
        </div>
    )
}

export default BotonDesplegable