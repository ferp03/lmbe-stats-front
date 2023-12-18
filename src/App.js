import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import EquiposRoot from './Components/EquiposRoot';
import SiderTeams from './Components/SiderTeams';
import Home from './Home';
import Contacto from './Contacto';
import AppHeader from './Components/Header';
import TeamTable from './Components/TeamTable';
import GeneralTable from './Components/GeneralTable';
import { useParams } from 'react-router-dom';
import "./Components/Components.css";
import FuncNotFound from './NotFound';


function App() {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="/equipos/*" element={ <div className='TeamsContainer'> <SiderTeams EquiposRoutes={EquiposRoutes}/> </div>} />
        <Route path="*" element={<FuncNotFound />} />
      </Routes>
    </Router>
  );
}

function EquiposRoutes() {
  return (
    <Routes>
      <Route path="/" element={<EquiposRoot />} />
      <Route path=":teamName" element={<Team />} />
      <Route path="*" element={<FuncNotFound />} />
    </Routes>
  );
}

function Team(){
  let {teamName} = useParams();
  if(teamName === "TABLA"){
    return <GeneralTable teamName={teamName} />
  }else{
    return <TeamTable teamName={teamName} />
  }
}

export default App;
