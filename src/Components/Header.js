import React from "react";
import { Layout } from 'antd'; 
import './Header.css';
import Menu from './Menu';
import Logo from '../Logo LMBE.png'
import { Link } from 'react-router-dom';

function App_Header(){
    return(
        <Layout>
        <div className="App">
        <header className="App-header">
            <Link to = "/"><img src={Logo} className="App-logo" alt="logo" /></Link>
            <text className="Header-text"> Liga Básquetbol Monterrey Elite</text>
            <div className="Menu-container">
                <Menu />
            </div>
        </header>
        </div>
        </Layout>
    );
}
export default App_Header;