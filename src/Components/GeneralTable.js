import React, { useState, useEffect } from "react";
import { Empty, Table } from "antd";
import { Layout } from "antd";
import "./Components.css";


const GeneralTable = ({ teamName }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://lmbe-stats.uc.r.appspot.com/api/getData?team=${teamName}`)
        .then(response => response.json())
        .then(data => setData(data.values));
    }, [teamName]);
    
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
    }

    return(
        <Layout 
        className="LayoutTables">
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