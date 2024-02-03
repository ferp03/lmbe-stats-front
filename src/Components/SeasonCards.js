import { useNavigate } from "react-router-dom";
import { Layout, Card, Col, Row, Button } from "antd";
import imgS1 from "../Images/PAPEADORES.jpg";
import imgCurrent from "../Images/logoOficial.png";

// const { Content } = Layout;
const { Meta } = Card;

const SeasonsCards = () => {
    const navigate = useNavigate();


    return(
        <Layout style={{height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Row gutter={18} style={{border: "1px solid red", width: "80vw", height: "80vh"}}>
                <Col span={12} style={{border: "1px solid red"}}>
                    <Card
                    bordered={false}
                    cover={<img alt="Los Papeadores" src={imgS1} />}
                    style={{
                    //width: "30vw",
                    }}
                    actions={[
                        <Button className="btn" type='primary' size="large" shape="round" onClick={() => {navigate(`/estadisticas/S1/TABLA`)}}>
                        <i className="animation"></i>
                        Ver
                        <i className="animation"></i>
                        </Button>
                      ]}
                    >
                        
                        <Meta 
                            title="Temporada 1"
                            description="Agosto-Diciembre 2023"
                        />
                    </Card>
                </Col>
                <Col span={12} style={{border: "1px solid red"}}>
                    <Card
                    bordered={false}
                    cover={<img alt="Temporada actual" src={imgCurrent} />}
                    style={{
                    //width: "30vw",
                    }}
                    actions={[
                        <Button className="btn" type='primary' size="large" shape="round" onClick={() => {navigate(`/estadisticas/S2/TABLA`)}}>
                        <i className="animation"></i>
                        Ver
                        <i className="animation"></i>
                        </Button>
                    ]}
                    >
                        <Meta 
                            title="Temporada 2"
                            description="Enero-Junio 2024"
                        />
                    </Card>
                </Col>
            </Row>

        </Layout>
    );
}

export default SeasonsCards;