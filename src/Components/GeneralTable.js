import React, { useState, useEffect } from "react";
import { Empty, Table, Input } from "antd";
import { Layout, Space, Alert } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./Components.css";

const GeneralTable = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://lmbe-stats.uc.r.appspot.com/api/getData?team=TABLA`)
        .then(response => response.json())
        .then(data => setData(data.values));
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = data.filter(item => 
        item[1].toLowerCase().includes(searchTerm.toLowerCase())
    );
    const columns = [
        { title: "Posición", dataIndex: 0, sorter: (a,b) => a[0] - b[0], sortDirections: ['descend', 'ascend'] },
        { title: "Equipo", dataIndex: 1, render: (text, record) => (
            <div style={{color: "blue", cursor: "pointer"}} onClick={() => navigate(`/estadisticas/${text}`)}>{text}</div>
        ) },
        { title: "PG", dataIndex: 2, sorter: (a,b) => a[2] - b[2], sortDirections: ['descend', 'ascend'] },
        { title: "PJ", dataIndex: 3, sorter: (a,b) => a[3] - b[3], sortDirections: ['descend', 'ascend'] },
        { title: "V", dataIndex: 4, sorter: (a,b) => a[4] - b[4], sortDirections: ['descend', 'ascend'] },
        { title: "D", dataIndex: 5, sorter: (a,b) => a[5] - b[5], sortDirections: ['descend', 'ascend'] },
        { title: "PFP", dataIndex: 6, sorter: (a,b) => a[6] - b[6], sortDirections: ['descend', 'ascend'] },
        { title: "PCP", dataIndex: 7, sorter: (a,b) => a[7] - b[7], sortDirections: ['descend', 'ascend'] },
        { title: "DIF", dataIndex: 8, sorter: (a,b) => a[8] - b[8], sortDirections: ['descend', 'ascend'] }
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
            <p>Has click en el botón <MenuUnfoldOutlined /> para poder descubrir los nuestros equipos y jugadores.</p>
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
            <Input.Search 
                placeholder='Buscar Equipo...'
                onChange={handleSearch}/>
            <Table 
            className="Tables"
            dataSource={filteredData} columns={columns} 
            pagination={false}
            locale={{emptyText: <Empty description="Recuperando información..." image={Empty.PRESENTED_IMAGE_SIMPLE} />}}
            scroll={{x:'max-content'}}
            />
           <SignificadosGeneral /> 
        </Layout>
    )
};

export default GeneralTable;