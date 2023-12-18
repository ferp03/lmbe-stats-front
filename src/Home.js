import React from "react";
import { useNavigate } from "react-router-dom";
import ImageSlider from "./Components/ImageSlider";
import { Layout, Button } from 'antd';
import './Home.css';


const Content = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contacto");
  }

  return (
    <div style={{padding: 20, display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <strong><h3 style={{textAlign: "center"}}>¡Bienvenido a la Emoción del Baloncesto Amateur!</h3></strong>
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
              <p>Grabación de partidos: Cada partido se graban los momentos favoritos para que puedas revivir los momentos emocionantes una y otra vez.</p>
            </li>
            <li>
              <strong>Estadísticas</strong>
              <p>Análisis personalizado: Ofrecemos estadísticas detalladas de cada jugador, desde puntos anotados hasta triples. Sigue tu progreso y mejora cada partido.</p>
            </li>
            <li>
              {/* TODO */}
              <strong>Comunidad Apasionada</strong>
              <p>Conéctate con Amantes del Baloncesto: Únete a nuestra vibrante comunidad en línea. Comparte tus momentos favoritos, participa en conversaciones y conoce a otros apasionados del baloncesto.</p>
            </li>
          </ul>
        </div>

        <div>
          <h3>Últimas Novedades</h3>
          {/* Add your news or blog section here */}
          <ul>
            <li>🏆Papeadores campeón actual🏆</li>
            <li>🏀+10 equipos inscritos temporada Invierno 2023🏀</li>
          </ul>
        </div>

        <div>
          <h3>¿Cómo Participar?</h3>
          <p>Regístrate Ahora</p>
          <Button shape="round" onClick={handleButtonClick}>¡Sé parte de la acción! Regístrate ahora.</Button>
        </div>
      </section>
    </div>
  );
}


function Home(){
  return(
    <Layout>
      <Content />
    </Layout>
  );
}

export default Home;