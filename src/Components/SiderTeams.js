import React, { useState, useEffect, memo } from "react";
import { Layout, Menu, Button, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
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
        style={{backgroundColor: "#282c34", border: "none"}}
        mode="inline" 
        defaultSelectedKeys={'TABLA'}
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
      {collapsed ? (
      <Tooltip placement="right" title="Ver equipos">
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
    </Layout>
  );
});

export default SiderTeams;