import React, { useState, useEffect, memo } from "react";
import { Layout, Menu, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import "./Components.css";

const { Sider } = Layout;

const SiderTeams = memo(function SiderTeams({ season }) {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
      fetch(`https://lmbe-stats.uc.r.appspot.com/api/getSheets/${season}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && data.sheets) {
            setItems(data.sheets);
          }
        })
        .catch((error) => {
          console.error("Error fetching data en sider:", error);
        });
  }, [season]);

  const selectedKey = decodeURIComponent(window.location.pathname.split('/').pop());

  return (
    <Layout
    //Al agregar el maxWidth, la tabla ya no se hace resize o al abrir el sider
    style={{height: "100hv", maxWidth:"0vw", zIndex: 2}}>
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
        style={{backgroundColor: "#282c34", border: "none"}}
        mode="inline" 
        selectedKeys={[selectedKey]}
        >
          {items.map((item) => (
            <Menu.Item
              className="sider-item"
              key = {item}
              onClick={() =>{
                navigate(`/estadisticas/${season}/${item}`);
                setCollapsed(true);
                setClicked(true);
              }}
            >
              <p style={{fontWeight: "bold", color: "e6e6e6"}}>{item}</p>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <div style={{ //Div para el background del botón de colapsar
        backgroundColor: "#282c34", 
        padding: "0.5rem", 
        borderRadius: '0 0 10px 0', 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        position: "relative",
        height: "40px", 
        width: "60px"
        }}>
        <div style={{height: "40px", display: "flex", alignItems: "center"}}>
        {collapsed ? (
          <Button 
            type="text"
            icon={<RightCircleOutlined style={{fontSize: "24px", color: "white"}}/>}
            onClick={() =>{
              setCollapsed(!collapsed);
              setClicked(false);
            }}
            title="Ver estadisticas"
            />
        ) : (
          <Button 
          type="text"
          icon={<LeftCircleOutlined style={{fontSize: "24px", color: "white"}}/>}
          onClick={() => setCollapsed(!collapsed)}
          title="Ver estadisticas"
          />
          )}
        </div>
      </div>
    </Layout>
  );
});

export default SiderTeams;