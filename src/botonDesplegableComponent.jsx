import React from "react";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";

function BotonDesplegable() {
    const [texto1, setTexto1] = useState('Elijan si imagen')
    
    const nombreImagen = (event) => {
        setTexto1(event.target.value)
    }

    return (

        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {texto1}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default BotonDesplegable