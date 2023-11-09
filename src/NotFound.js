import React from 'react';
import { Link } from 'react-router-dom';

export default function FuncNotFound() {
    return(
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh'}}>
            <h1>URL incorrecto</h1>
            <p>El URL ingresado no existe.</p>
            <Link to="/"> Regresar a la página principal </Link>
        </div>
    );
}