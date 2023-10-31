import React from "react";
import { Layout } from 'antd'; 
import './Header.css';
import MenuButtons from './MenuButtons';
import Logo from '../Logo LMBE.png'
import { Link } from 'react-router-dom';

function App_Header(){
    return(
        <Layout>
        <div className="App">
        <header className="App-header">
            <Link to = "/"><img src={Logo} className="App-logo" alt="logo" /></Link>
            <p className="Header-text"> Liga Básquetbol Monterrey Elite</p>
            <div className="Menu-container">
                <MenuButtons />
            </div>
        </header>
        </div>
        </Layout>
    );
}
export default App_Header;