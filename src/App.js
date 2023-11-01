import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import EquiposNav from './Components/EquiposNav';
import SiderTeams from './Components/SiderTeams';
import Home from './Home';
import AppHeader from './Components/Header';
import TeamTable from './Components/TeamTable';
import GeneralTable from './Components/GeneralTable';
import { useParams } from 'react-router-dom';


function App() {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contacto" element={<div>Contacto</div>} />
        <Route path="/equipos/*" element={<div> <SiderTeams /> <EquiposRoutes /> </div>} />
      </Routes>
    </Router>
  );
}

function EquiposRoutes() {
  return (
    <Routes>
      {/* Esta renderizando el siderTeams y Equipos nav. Buscar solo tener un sider y cambiar solo el contenido */}
      <Route path="/" element={<EquiposNav />} />
      <Route path=":teamName" element={<Team />} />
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
