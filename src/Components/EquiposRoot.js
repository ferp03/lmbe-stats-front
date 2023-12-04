import { Layout, theme } from "antd";
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
        Aqui digo dq que onda estos son nuestros equipos, encontraras informacion de estadistica por cada jugador de cada equipo
      </div>
    </Content>
  );
}

export default EquiposRoot;
