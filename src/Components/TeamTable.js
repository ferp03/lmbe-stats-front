import React, { useState, useEffect } from 'react';
import { Empty, Table } from 'antd';
import { Layout } from 'antd';
import './Components.css';


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

    const Footercillo = () =>{
        return(
            <footer className='Footer'>
                <div className='footer-column'>
                    <small><strong>PJ:</strong> Partidos jugados</small>
                    <small><strong>PPP:</strong> Puntos por partido</small>
                </div>
                <div className='footer-column'>
                    <small><strong>RPP:</strong> Rebotes por partido</small>
                </div>
                <div className='footer-column'>
                    <small><strong>APP:</strong> Asistencias por partido</small>
                    <small><strong>TPP:</strong> Triples por partido</small>
                </div>
            </footer>
        )
    }

    return (
        <Layout
        className='LayoutTables'>
            <Table 
            className='Tables'
            dataSource={data} columns={columns} 
            pagination={false}
            locale={{emptyText: <Empty description="Recuperando información..." image={Empty.PRESENTED_IMAGE_SIMPLE} />}}
            scroll={{x: "max-content"}}
            />
            <Footercillo />
            {/* editar para que los margins sean responsivos de acuerdo con el tamaño de la pantalla (CSS) */}
        </Layout>
    );
};

export default TeamTable;