import { Layout, theme } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import './Components.css';


const { Content, Footer} = Layout;


function EquiposRoot() {
  return (
    <Layout
    className="LayoutTables"
    >
      {/* contenido de la pagina */}
      <ContentPrincipal />
      <Footer
      style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div>
          <p>LMBE STATS</p>
        </div>
      </Footer>
    </Layout>
  );
}

function ContentPrincipal() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content className="container">
      <div
        style={{
          padding: 24,
          textAlign: "center",
          background: colorBgContainer,
        }}
      >
        <p>Aqui podrás ver las estadisticas personalizadas de cada jugador! Tomamos en cuenta puntos, rebotes, asistencias y triples de cada partido.</p> 
        <p>También podrás ver la tabla general de la temporada actual!</p>
        <p>Has click en el botón <MenuUnfoldOutlined /> para poder descubrir los nuestros equipos y jugadores</p>
      </div>
    </Content>
  );
}

export default EquiposRoot;
