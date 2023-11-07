import React, { useState, useEffect, memo } from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import "./Components.css";

const { Sider, Content } = Layout;

const SiderTeams = memo(function SiderTeams(EquiposRoutes) {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();


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
    <Layout>
      <Sider
      breakpoint="lg"
      collapsedWidth="0"
      className="sider"
      >
        <div/>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
          {items.map((item) => (
            <Menu.Item
            className="sider-item"
              key = {item}
              onClick={() =>{
                navigate(`/equipos/${item}`)}   
              } 
            >
              <p style = {{background: "#fffff", fontWeight: "semibold"}}>{item}</p>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Content>
        <EquiposRoutes.equiposRoutes />
      </Content>
    </Layout>
  );
});

export default SiderTeams;