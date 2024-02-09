import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import SiderTeams from './Components/SiderTeams';
import Home from './Home';
import Contacto from './Contacto';
import AppHeader from './Components/Header';
import SeasonsCards from './Components/SeasonCards';
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
        <Route path="/estadisticas" element={<SeasonsCards />} />
        <Route path="/estadisticas/:season/*" element={<SeasonRoutes />} />
        <Route path="*" element={<FuncNotFound />} />
      </Routes>
    </Router>
  );
}

function SeasonRoutes(){
  let {season} = useParams();
  return(
    <div className='TeamsContainer'>
      <SiderTeams season={season} />
      <Routes>
        <Route path="/*" element={<EquiposRoutes season={season} />} />
        <Route path="*" element={<FuncNotFound />} />
      </Routes>
    </div>
  );
}

function EquiposRoutes({ season }) {
  return (
    <Routes>
      {/* Ver si nombrar la tabla general normal como tabla general o como tabla simplemente (Excel) */}
      <Route path="TABLA" element={<GeneralTable tabla={"TABLA"} season={season} />} /> 
      <Route path="TABLA C1" element={<GeneralTable tabla={"TABLA C1"} season={season} />} />
      <Route path="TABLA C2" element={<GeneralTable tabla={"TABLA C2"} season={season} />} />
      <Route path=":teamName" element={<Team season={season} />} />
      <Route path="*" element={<FuncNotFound />} />
    </Routes>
  );
}

function Team({ season }){
  let {teamName} = useParams();
  return <TeamTable teamName={teamName} season={season} />
}

export default App;
