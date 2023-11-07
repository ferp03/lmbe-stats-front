import React, { useState, useEffect } from 'react';
import { Empty, Table } from 'antd';
import { Layout } from 'antd';
import './Components.css';

const { Footer } = Layout;

const TeamTable = ({ teamName }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch the JSON data from the server for the specified team
        fetch(`https://lmbe-stats.uc.r.appspot.com/api/getData?team=${teamName}`)
        .then(response => response.json())
        .then(data => setData(data.values));
    }, [teamName]);

    const columns = [
        { title: 'Jugador', dataIndex: 0 },
        { title: 'PJ', dataIndex: 1 },
        { title: 'PPP', dataIndex: 2 },
        { title: 'RPP', dataIndex: 3 },
        { title: 'APP', dataIndex: 4 },
        { title: 'TPP', dataIndex: 5 },
    ];

    const Significados = () =>{
        return(
            <div>
            <p><strong>PJ:</strong> Partidos jugados</p>
            <div style={{ columnCount: 2 }}>
                <div>
                    <p><strong>PPP:</strong> Puntos por partido</p>
                    <p><strong>RPP:</strong> Rebotes por partido</p>
                </div>
                <div>
                    <p><strong>APP:</strong> Asistencias por partido</p>
                    <p><strong>TPP:</strong> Triples por partido</p>
                </div>
            </div>
        </div>
        )
    }

    return (
        <div>
            <Table 
            className='TeamTable'
            dataSource={data} columns={columns} 
            pagination={data.length > 10 ? { position: ["bottomRight"] } : false}
            locale={{emptyText: <Empty description="Fetching data..." image={Empty.PRESENTED_IMAGE_SIMPLE} />}}
            scroll={{x:'max-content'}}
            style={{ margin: 0, padding: 0, width: '100%' }}
            /> 
            {/* editar para que los margins sean responsivos de acuerdo con el tamaño de la pantalla (CSS) */}
            <Footer style={{ textAlign: 'center', border: '1px solid red'}}> <Significados /> </Footer>
        </div>
    );
};

export default TeamTable;