import { useState } from "react";
import { APIProvider, Map, AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";

//Link al depo https://maps.app.goo.gl/nwZxMGnpFYymwcsb8 25.536983, -100.220920

function Mapa(){
    const position = {lat: 25.536983, lng: -100.220920};
    const [open, setOpen] = useState(false);
    return(
        <APIProvider apiKey={process.env.REACT_APP_MAPS_API}>
            <div style={{width: "100vw", height: "80vh", padding: 20, paddingBottom: 30}}>
                <h3>Ubicación</h3>
                <Map zoom={17} center={position} mapId={process.env.REACT_APP_MAP_ID}>
                    <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                    </AdvancedMarker>
                    {open && <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                        <p>Estacionamiento del Deportivo</p>
                    </InfoWindow>}
                </Map>
            </div>
        </APIProvider>
    )
}

export default Mapa;