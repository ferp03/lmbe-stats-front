import React, { useState, useEffect, memo } from "react";
import { Layout, Menu, Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./Components.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Sider, Content } = Layout;

const SiderTeams = memo(function SiderTeams(EquiposRoutes) {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);


  useEffect(() => {
    fetch("https://lmbe-stats.uc.r.appspot.com/api/getSheets", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.sheets) {
          setItems(data.sheets);
          console.log(data.sheets);
        }
      })
      .catch((error) => {
        console.error("Error fetching data en sider:", error);
      });
  }, []);


  return (
    <Layout
    style={{height: "100hv"}}>
      <Sider
      trigger={null}
      collapsible collapsed={collapsed}
      breakpoint="lg"
      collapsedWidth="0"
      style={{backgroundColor: "#282c34", height: "100%"}}
      >
        <div/>
        <Menu 
        theme="dark"
        style={{backgroundColor: "#282c34", border: "none"}}
        mode="inline" 
        defaultSelectedKeys={[window.location.pathname]}
        >
          {items.map((item) => (
            <Menu.Item
            className="sider-item"
              key = {item}
              onClick={() =>{
                navigate(`/estadisticas/${item}`)}   
              } 
            >
              <p style={{fontWeight: "bold", color: "e6e6e6"}}>{item}</p>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Button 
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined style={{fontSize: "22px"}}/> : <MenuFoldOutlined style={{fontSize: "22px"}}/>}
        onClick={() => setCollapsed(!collapsed)}
        title="Ver estadisticas"
      />
      <Content>
        <EquiposRoutes.EquiposRoutes />
      </Content>
    </Layout>
  );
});

export default SiderTeams;