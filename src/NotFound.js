import { React } from 'react';

export default function NotFound() {
    return(
        <div>
            <h1>Equipo no seleccionado</h1>
            <p>No se pudo recuperar la información correctamente.</p>
            <Link href="https://lmbe-stats-front.uc.r.appspot.com"> Regresar a la página principal </Link>
        </div>
    );
}