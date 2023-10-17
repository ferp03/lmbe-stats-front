import { Content } from 'antd/es/layout/layout';
import { Button } from 'antd'; 
import { Link } from 'react-router-dom';
import './Header.css'

function Menu(){
    return(
        <Content className='Menu'>
            <Link to="/">
            <Button className="Home-Button">Sobre Nosotros</Button>
            </Link>
            <Link to="/equipos">
            <Button className="Equipos-Button">Equipos</Button>
            </Link>
            <Link to="/contacto">
            <Button className="Contacto-Button">Contacto</Button>
            </Link>
        </Content>
    );
}
export default Menu;