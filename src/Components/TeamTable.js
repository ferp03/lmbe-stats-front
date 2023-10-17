import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import SiderTeams from './SiderTeams';

const TeamTable = ({ teamName }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch the JSON data from the server for the specified team
        fetch(`http://localhost:8000/api/getData?team=${teamName}`)
        .then(response => response.json())
        .then(data => setData(data.values));
    }, [teamName]);

    const columns = [
        {
        title: 'Jugador',
        dataIndex: 0,
        },
        {
        title: 'PJ',
        dataIndex: 1,
        },
        {
        title: 'PPP',
        dataIndex: 2,
        },
        {
        title: 'RPP',
        dataIndex: 3,
        },
        {
        title: 'APP',
        dataIndex: 4,
        },
        {
        title: 'TPP',
        dataIndex: 5,
        },
    ];

    return (
        <div>
            <SiderTeams />
            <Table dataSource={data} columns={columns} style={{ marginLeft: '200px', width: 'calc(100% - 200px)' }} />
        </div>
    );
};

export default TeamTable;