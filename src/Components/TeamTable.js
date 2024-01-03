import React, { useState, useEffect } from 'react';
import { Empty, Table, Input } from 'antd';
import { Layout } from 'antd';
import './Components.css';


const TeamTable = ({ teamName }) => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch the JSON data from the server for the specified team
        fetch(`https://lmbe-stats.uc.r.appspot.com/api/getData?team=${teamName}`)
        .then(response => response.json())
        .then(data => setData(data.values));
    }, [teamName]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = data.filter(item => 
        item[0].toLowerCase().includes(searchTerm.toLowerCase())
    );

    const columns = [
        { title: 'Jugador', dataIndex: 0 },
        { title: 'PJ', dataIndex: 1, sorter: (a,b) => a[1] - b[1], sortDirections: ['descend', 'ascend']},
        { title: 'PPP', dataIndex: 2, sorter: (a,b) => a[2] - b[2], sortDirections: ['descend', 'ascend']},
        { title: 'RPP', dataIndex: 3, sorter: (a,b) => a[3] - b[3], sortDirections: ['descend', 'ascend']},
        { title: 'APP', dataIndex: 4, sorter: (a,b) => a[4] - b[4], sortDirections: ['descend', 'ascend']},
        { title: 'TPP', dataIndex: 5, sorter: (a,b) => a[5] - b[5], sortDirections: ['descend', 'ascend']},
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
            <h2>{teamName}</h2>
            <Input.Search 
                placeholder='Buscar Jugador...'
                onChange={handleSearch}/>
            <Table 
            className='Tables'
            dataSource={filteredData} columns={columns}
            pagination={false}
            locale={{emptyText: <Empty description="Recuperando información..." image={Empty.PRESENTED_IMAGE_SIMPLE} />}}
            scroll={{x: "max-content"}}
            />
            <Footercillo />
        </Layout>
    );
};

export default TeamTable;