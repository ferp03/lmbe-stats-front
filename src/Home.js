import React from "react";
import { useNavigate } from "react-router-dom";
import ImageSlider from "./Components/ImageSlider";
import Map from "./Components/Map";
import { Layout, Button } from 'antd';
import './Home.css';


const Content = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contacto");
  }

  return (
    <div style={{padding: 20, paddingBottom: 0, display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <strong><h2 style={{textAlign: "center"}}>¡Bienvenido a la Emoción del Baloncesto Amateur!</h2></strong>
      {/* Add your attractive image or video component here */}
       <ImageSlider />

   

      <section>
        <h2>Descubre la Diferencia</h2>
        <p>En LMBE, no solo jugamos al baloncesto; creamos experiencias. Explora lo que nos hace únicos:</p>

        <div>
          <h3>¿Por Qué Elegirnos?</h3>
          <ul>
            <li>
              <strong>Partidos Inolvidables</strong>
              <p>Grabación de partidos: Cada partido se graban los momentos favoritos para que puedas revivir los jugadas emocionantes una y otra vez.</p>
            </li>
            <li>
              <strong>Estadísticas</strong>
              <p>Análisis personalizado: Ofrecemos estadísticas detalladas de cada jugador, desde puntos anotados hasta triples. Sigue tu progreso y mejora cada partido.</p>
            </li>
            <li>
              {/* TODO */}
              <strong>Comunidad Apasionada</strong>
              <p>Únete a la competencia: Sé parte de una experiencia única donde la competencia y la pasión convergen para crear momentos inolvidables en la cancha. ¡Prepárate para elevar tu juego y ser parte de nuestra comunidad competitiva!</p>
            </li>
          </ul>
        </div>

        <div>
          <h3>Últimas Novedades</h3>
          {/* Add your news or blog section here */}
          <ul>
            <li>🏆Papeadores campeón actual🏆</li>
            <li>🏀+10 equipos inscritos temporada Sept-Dic 2023🏀</li>
          </ul>
        </div>

        <div style={{paddingBottom: "2rem"}}>
          <h3>¿Cómo Participar?</h3>
          <Button className="btn" type='primary' size="large" shape="round" onClick={handleButtonClick}>
            <i className="animation"></i>
            ¡Únete a LMBE! Regístrate ahora
            <i className="animation"></i>
          </Button>
        </div>
      </section>
    </div>
  );
}


function Home(){
  return(
    <Layout>
      <Content />
      {/* <Map /> */}
    </Layout>
  );
}

export default Home;