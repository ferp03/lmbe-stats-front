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
            link: "/estadisticas/TABLA%20S2",
        },
        {
            key: "3",
            label: "Contacto",
            link: "/contacto",
        },
        
    ]

    const selectedKey = items.find(item => item.link === location.pathname)?.key;

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