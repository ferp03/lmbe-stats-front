import React, { useState, useEffect } from "react";
import { Empty, Table } from "antd";
import { Layout, Space, Alert } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import "./Components.css";

const GeneralTable = ({}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://lmbe-stats.uc.r.appspot.com/api/getData?team=TABLA`)
        .then(response => response.json())
        .then(data => setData(data.values));
    }, []);
    
    const columns = [
        { title: "Posicion", dataIndex: 0 },
        { title: "Equipo", dataIndex: 1 },
        { title: "PG", dataIndex: 2 },
        { title: "PJ", dataIndex: 3 },
        { title: "V", dataIndex: 4 },
        { title: "D", dataIndex: 5 },
        { title: "PFP", dataIndex: 6 },
        { title: "PCP", dataIndex: 7 },
        { title: "DIF", dataIndex: 8 }
    ];

    const SignificadosGeneral = () => {
        return(
            <footer className="Footer">
                <div className="footer-column">
                    <p><strong>PG:</strong> Porcentaje ganados</p>
                    <p><strong>PJ:</strong> Partidos jugados</p>
                    <p><strong>V:</strong> Victorias</p>
                    <p><strong>D:</strong> Derrotas</p>
                </div>
                <div className="footer-column">
                    <p><strong>PFP:</strong> Puntos a favor por partido</p>
                    <p><strong>PCP:</strong> Puntos en contra por partido</p>
                    <p><strong>DIF:</strong> Diferencia de puntos favor y contra</p>
                </div>
            </footer>
        )
    };

function ContentPrincipal() {
    return (
        <div>
            <p>¡Aquí podrás ver las estadisticas personalizadas de cada equipo y sus jugadores! Tomamos en cuenta puntos, rebotes, asistencias y triples de cada partido.</p> 
            <p>Has click en el botón <MenuUnfoldOutlined /> para poder descubrir los nuestros equipos y jugadores</p>
        </div>
        );
    };   

    return(
        <Layout 
        className="LayoutTables">
            <h2>Tabla General</h2>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Space direction='vertical' style={{width: "80vw"}}>
                    <Alert message="¡Hola!"
                    description={<ContentPrincipal />} 
                    type="info"
                    showIcon closable />
                    
                </Space>
            </div>
            <Table 
            className="Tables"
            dataSource={data} columns={columns} 
            pagination={false}
            locale={{emptyText: <Empty description="Recuperando información..." image={Empty.PRESENTED_IMAGE_SIMPLE} />}}
            scroll={{x:'max-content'}}
            />
           <SignificadosGeneral /> 
        </Layout>
    )
};

export default GeneralTable;