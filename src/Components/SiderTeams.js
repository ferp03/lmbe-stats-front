import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";


const { Sider } = Layout;

function SiderTeams() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    fetch("http://localhost:8000/api/getSheets", {
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
        console.error("Error fetching data:", error);
      });
  }, []);


  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "absolute",
          left: 0,
          top: "60px",
          width: "200px",
          collapsedWidth: "80px",
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline">
          {items.map((item) => (
            <Menu.Item
              onClick={() =>{
                navigate(`/equipos/${item}`)}   
              } 
              defaultSelectedKeys = {[window.location.pathname]}
            >
              <p style = {{background: "#fffff", fontWeight: "semibold"}}>{item}</p>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    </Layout>
  );
}

export default SiderTeams;