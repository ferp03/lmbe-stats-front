import React from "react";
import { Layout } from 'antd';
import './App.css';

const { Header } = Layout;

function Home(){
    return(
        <Layout>
            <Header className="Home">LMBE STATS</Header>
        </Layout>
    );
}

export default Home;