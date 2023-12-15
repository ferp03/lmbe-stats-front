import React from "react";
import './Header.css';
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';
import Logo from '../Images/logoLMBE.png'; 

function App_Header(){
    return(
            <header className="App-header">
                <Link to = "/">
                    <img src={Logo} className="App-logo" alt="logo" />
                </Link>
                <p className="Header-text"> Liga Básquetbol Monterrey Elite</p>
                <div className="Menu-container">
                    {/* <MenuButtons /> */}
                    <NavBar />
                </div>
            </header>
    );
}
export default App_Header;