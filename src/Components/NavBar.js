import { Menu, Drawer } from 'antd'; 
import { MenuOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Header.css'

function NavBar(){
    const [openMenu, setOpenMenu] = useState(false);
    return(
        <div>
            <div className='Menu-Icon'>
                <p className='Header-text'>Menú</p>
                <MenuOutlined 
                style={{height: "8vh", padding: 8, alignSelf: 'center'}}
                onClick={() => {setOpenMenu(true);}}
                />
            </div>
            <span className='Header-Menu'>
                <Buttons />
            </span>
            <Drawer 
            open= {openMenu}
            closable={false}
            onClose={() => {setOpenMenu(false);}}
            styles={{body: {backgroundColor: "#282c34"}, header: {backgroundColor: "#282c34"}}}
            width={205}
            placement='right'
            >
                <Buttons inLine/>
            </Drawer>
        </div>
    );
}

function Buttons({inLine=false}){
    const location = useLocation();
    const items = [
        {
            key: "1",
            label: "Sobre Nosotros",
            link: "/",
        },
        {
            key: "2",
            label: "Estadisticas",
            link: "/estadisticas",
        },
        {
            key: "3",
            label: "Contacto",
            link: "/contacto",
        },
        
    ]

    //Busca como empieza el location pathname y lo compara con los links de mis items. Como Sobre nosotros empieza igual que todos, 
    //se agrega una condicion que checa si el item link es / y pathname no es para que no siempre se eliga el key del primer item
    const selectedKey = items.find(item => {
        if(item.link === '/' && location.pathname !== '/'){
            return false;
        }
        return location.pathname.startsWith(item.link);
    })?.key;

    return(
        <Menu 
            style={{backgroundColor: "#282c34", color: "white", fontWeight: "bold", border: "none"}}
            mode={inLine ? "inline" : "horizontal"}
            defaultSelectedKeys={["1"]}
            selectedKeys={[selectedKey]}
        >
            {items.map(item => (
                <Menu.Item
                key={item.key}
                style={{textAlign: "right"}}
                >
                    <Link to={item.link}>{item.label}</Link>
                </Menu.Item>
            ))}
        </Menu>
    );
}

export default NavBar;