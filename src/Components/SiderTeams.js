import React, { useState, useEffect, memo } from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";


const { Sider } = Layout;

const SiderTeams = memo(function SiderTeams() {
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
          {items.map((item) => (
            <Menu.Item
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
    </Layout>
  );
});

export default SiderTeams;