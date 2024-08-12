import { useNavigate } from "react-router-dom";
import { Layout, Card, Col, Row, Button } from "antd";
import imgS1 from "../Images/PAPEADORES.jpg";
import imgS2 from "../Images/VIOLAS_CHAMPS2.jpg";
import imgCurrent from "../Images/logoOficial_resized.png";
import "./Components.css";

// const { Content } = Layout;
const { Meta } = Card;

const SeasonsCards = () => {
    const navigate = useNavigate();

    const seasons = [
        {
          title: "Temporada 1",
          description: "Agosto-Diciembre 2023",
          image: imgS1,
          navigateTo: `/estadisticas/S1/TABLA`,
        },
        {
          title: "Temporada 2",
          description: "Enero-Junio 2024",
          image: imgS2,
          navigateTo: `/estadisticas/S2/TABLA%20C1`,
        },
        {
          title: "Temporada 3",
          description: "Agosto-Diciembre 2024",
          image: imgCurrent,
          navigateTo: "/estadisticas/S3/TABLA",
        },
        // Puedes agregar más tarjetas aquí
      ];
    
      return (
        <Layout
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            padding: "20px 0",
            overflow: "auto",

          }}
        >
          <Row gutter={[18, 18]} style={{ width: "80vw", height: "80vh", maxHeight: "100%", overflowY: "auto" }}>
            {seasons.map((season, index) => (
              <Col xs={24} sm={12} md={12} lg={8} key={index}>
                <Card
                  bordered={false}
                  cover={<img alt={season.title} src={season.image} />}
                  actions={[
                    <Button
                      className="btn"
                      type="primary"
                      size="large"
                      shape="round"
                      onClick={() => {
                        navigate(season.navigateTo);
                      }}
                    >
                      <i className="animation"></i>
                      Ver
                      <i className="animation"></i>
                    </Button>,
                  ]}
                >
                  <Meta title={season.title} description={season.description} />
                </Card>
              </Col>
            ))}
          </Row>
        </Layout>
      );


}

export default SeasonsCards;