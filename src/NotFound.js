import React from 'react';
import { Link } from 'react-router-dom';

export default function FuncNotFound() {
    return(
        <div>
            <h1>Equipo no seleccionado</h1>
            <p>No se pudo recuperar la información correctamente.</p>
            <Link to="/"> Regresar a la página principal </Link>
        </div>
    );
}