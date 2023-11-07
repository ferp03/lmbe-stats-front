import { Menu, Drawer } from 'antd'; 
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css'

function NavBar(){
    const [openMenu, setOpenMenu] = useState(false);
    return(
        <div>
            <div className='Menu-Icon'>
                <MenuOutlined 
                style={{height: 60, padding: 8}}
                onClick={() => {setOpenMenu(true);}}
                />
            </div>
            <span className='Header-Menu'>
                <Buttons />
            </span>
            <Drawer 
            open= {openMenu}
            onClose={() => {setOpenMenu(false);}}
            closable={false}
            bodyStyle={{backgroundColor: "#282C34"}}
            placement='right'
            >
                <Buttons inLine/>
            </Drawer>
        </div>
    );
}

function Buttons({inLine=false}){
    const items = [
        {
            key: "1",
            label: "Sobre Nosotros",
            link: "/",
        },
        {
            key: "2",
            label: "Equipos",
            link: "/equipos",
        },
        {
            key: "3",
            label: "Contacto",
            link: "/contacto",
        },
        
    ]
    return(
        <Menu 
            style={{backgroundColor: "#282C34", color: "white", fontWeight: "bold"}}
            mode={inLine ? "inline" : "horizontal"}
        >
            {items.map(item => (
                <Menu.Item key={item.key}>
                    <Link to={item.link}>{item.label}</Link>
                </Menu.Item>
            ))}
        </Menu>
    );
}

export default NavBar;