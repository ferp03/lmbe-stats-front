import React, { useState, useEffect } from "react";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";


const { Header, Content, Footer, Sider } = Layout;

function EquiposNav() {
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
      <TeamContent />
    </Layout>
  );
}

function TeamContent() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      className="site-layout"
      style={{
        marginLeft: 200,
      }}
    >
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      />
      {/* contenido de la pagina */}
      <ContentPrincipal />

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        LMBE STATS
      </Footer>
    </Layout>
  );
}

function ContentPrincipal() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
      <div
        style={{
          padding: 24,
          textAlign: "center",
          background: colorBgContainer,
        }}
      >
        {/* //Aqui empieza el contenido de la pagina */}
        Aqui digo dq que onda estos son nuestros equipos, encontraras informacion de estadistica por cada jugador de cada equipo
      </div>
    </Content>
  );
}

export default EquiposNav;
