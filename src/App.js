import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import EquiposNav from './Components/EquiposNav';
import Home from './Home';
import AppHeader from './Components/Header';
import TeamTable from './Components/TeamTable';


function App() {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contacto" element={<div>Contacto</div>} />
        <Route path="/equipos" element={<EquiposNav />} />
        {/* Equipos */}
        <Route path="/equipos/WE THE SOUTH" element={<TeamTable teamName="WE THE SOUTH"></TeamTable>} />
        <Route path="/equipos/SNIPERS" element={<TeamTable teamName="SNIPERS"></TeamTable>} />
        <Route path="/equipos/AGL DEL SUR" element={<TeamTable teamName="AGL DEL SUR"></TeamTable>} />
        <Route path="/equipos/ROTOPLAS" element={<TeamTable teamName="ROTOPLAS"></TeamTable>} />
        <Route path="/equipos/LOS AVENGERS" element={<TeamTable teamName="LOS AVENGERS"></TeamTable>} />
        <Route path="/equipos/TEC VALLE ALTO" element={<TeamTable teamName="TEC VALLE ALTO"></TeamTable>} />
        <Route path="/equipos/LOS PAPEADORES" element={<TeamTable teamName="LOS PAPEADORES"></TeamTable>} />
        <Route path="/equipos/CONEJOS B" element={<TeamTable teamName="CONEJOS B"></TeamTable>} />
        <Route path="/equipos/GOLDEN EAGLES" element={<TeamTable teamName="GOLDEN EAGLES"></TeamTable>} />
        <Route path="/equipos/LOS RUSKIS" element={<TeamTable teamName="LOS RUSKIS"></TeamTable>} />
        <Route path="/equipos/LAS VIOLAS" element={<TeamTable teamName="LAS VIOLAS"></TeamTable>} />
        <Route path="/equipos/CAÑONEROS" element={<TeamTable teamName="CAÑONEROS"></TeamTable>} />
      </Routes>
    </Router>
  );
}

export default App;
