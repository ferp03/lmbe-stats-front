import React from 'react';
import { Carousel } from 'antd';
import image1 from '../Images/PAPEADORES2.jpg';
import image2 from '../Images/VIOLAS.jpg';
import image3 from '../Images/GOLDEN.jpg';
import image4 from '../Images/CONEJOS.jpg';
import image5 from '../Images/AVENGERS.jpg';
import image6 from '../Images/CAÑONEROS.jpg';

const images = [
    {url: image1, title: "Los Papeadores, Campeones actuales"},
    {url: image2, title: "Las Violas"},
    {url: image3, title: "Golden Eagles"},
    {url: image4, title: "Conejos B"},
    {url: image5, title: "Los Avengers"},
    {url: image6, title: "Cañoneros"}
];

const ImageSlider = () => {
  return (
    <div style={{border: "1px solid red"}}>
      <Carousel  dotPosition={'left'}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={image.title} className="carousel-Img" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;