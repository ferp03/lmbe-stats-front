import React, { useState, useEffect, memo } from "react";
import { Layout, Menu, Button, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./Components.css";

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const SiderTeams = memo(function SiderTeams(EquiposRoutes) {
  const [itemsS1, setItemsS1] = useState([]);
  const [itemsS2, setItemsS2] = useState([]);
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([]);

  //Obtener las hojas de la primer temporada
  useEffect(() => {
    fetch("https://lmbe-stats.uc.r.appspot.com/api/getSheets", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.sheets) {
          setItemsS1(data.sheets);
        }
      })
      .catch((error) => {
        console.error("Error fetching data en s1:", error);
      });
  }, []);

  //Obtener las ojas de la segunda temporada
  useEffect(() => {
    fetch("http://localhost:8000/api/getSheets/S2", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.sheets) {
          setItemsS2(data.sheets);
        }
      })
      .catch((error) => {
        console.error("Error fetching data en s2:", error);
      });
  }, []);

  //const selectedKey = decodeURIComponent(window.location.pathname.split('/').pop());

  return (
    <Layout
    style={{height: "100hv"}}>
      <Sider
      trigger={null}
      collapsible collapsed={collapsed}
      breakpoint="lg"
      collapsedWidth="0"
      style={{backgroundColor: "#282c34", height: "100%", transitionDuration: "0.4s", transitionDelay: clicked ? "0.2s" : "0.0s"}}
      >
        <div/>
        <Menu 
        theme="dark"
        style={{backgroundColor: "#282c34", border: 'none'}}
        mode="inline" 
        selectedKeys={[selectedKeys]}
        // defaultOpenKeys={["sub2"]}
        >
          <SubMenu key="sub1" title="Temporada 1" style={{fontWeight: 'bold', color: 'e6e6e6'}}>
          {itemsS1.map((item) => (
            <Menu.Item
              className="sider-item"
              key={`${item}S1`}
              onClick={() =>{
                navigate(`/estadisticas/${item}`);
                setCollapsed(true);
                setClicked(true);
                setSelectedKeys(`${item}S1`);
              }}
            >
              <p style={{color: "e6e6e6"}}>{item}</p>
            </Menu.Item>
          ))}
          </SubMenu>
          
          <SubMenu key="sub2" title="Temporada 2" style={{fontWeight: 'bold', color: 'e6e6e6'}}>
          {itemsS2.map((item) => (
            <Menu.Item
              className="sider-item"
              key={`${item}S2`}
              onClick={() =>{
                navigate(`/estadisticas/${item}`);
                setCollapsed(true);
                setClicked(true);
                setSelectedKeys(`${item}S2`);
              }}
            >
              <p style={{color: "e6e6e6"}}>{item}</p>
            </Menu.Item>
          ))}
          </SubMenu>

        </Menu>
      </Sider>
      {collapsed ? (
      <Tooltip placement="right" title="Ver Estadisticas">
        <Button 
          type="text"
          icon={<MenuUnfoldOutlined style={{fontSize: "22px"}}/>}
          onClick={() =>{
            setCollapsed(!collapsed);
            setClicked(false);
          }}
          title="Ver estadisticas"
         />
      </Tooltip>
      ) : (
      <Button 
        type="text"
        icon={<MenuFoldOutlined style={{fontSize: "22px"}}/>}
        onClick={() => setCollapsed(!collapsed)}
        title="Ver estadisticas"
      />
)}
      <Content>
        <EquiposRoutes.EquiposRoutes />
      </Content>
    </Layout>
  );
});

export default SiderTeams;