import React from "react";
import ImageSlider from "./Components/ImageSlider";
import { Layout } from 'antd';
import './Home.css';


const Content = () => {
  return (
    <div style={{padding: 20, display: "flex", flexDirection: "column"}}>
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
              <p>Grabación Profesional: Cada partido se graba con calidad profesional para que puedas revivir los momentos emocionantes una y otra vez.</p>
            </li>
            <li>
              <strong>Estadísticas Personalizadas</strong>
              <p>Análisis Detallado: Ofrecemos estadísticas detalladas de cada jugador, desde puntos anotados hasta habilidades defensivas. Sigue tu progreso y mejora cada partido.</p>
            </li>
            <li>
              <strong>Comunidad Apasionada</strong>
              <p>Conéctate con Amantes del Baloncesto: Únete a nuestra vibrante comunidad en línea. Comparte tus momentos favoritos, participa en conversaciones y conoce a otros apasionados del baloncesto.</p>
            </li>
          </ul>
        </div>

        <div>
          <h3>Últimas Novedades</h3>
          {/* Add your news or blog section here */}
          <p>[Sección de noticias o blog con actualizaciones sobre partidos, jugadores destacados, eventos próximos, etc.]</p>
        </div>

        <div>
          <h3>¿Cómo Participar?</h3>
          <p>Regístrate Ahora</p>
          <button>¡Sé parte de la acción! Regístrate ahora.</button>
        </div>

        <div>
          <h3>Explora Nuestra Plataforma</h3>
          {/* Add your screenshots or description of the online platform here */}
          <p>Descubre todos los beneficios y características exclusivas.</p>
        </div>

        <div>
          <h3>Colabora con Nosotros</h3>
          <p>Impulsa tu marca al asociarte con nosotros. Contáctanos para oportunidades de patrocinio.</p>
        </div>

        <div>
          <h3>Únete a LMBE y Eleva tu Juego</h3>
          {/* Add your team celebrating image or any relevant image here */}
          <img src="team-celebrating-image.jpg" alt="Equipo celebrando" />
        </div>

        <div>
          <p>¡La Emoción Comienza Aquí!</p>
          <button>Únete Ahora</button>
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