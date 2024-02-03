import React from 'react';
import { Row, Col, Button } from 'antd';
import { InstagramOutlined, FacebookOutlined, WhatsAppOutlined, MailOutlined } from "@ant-design/icons";
import './Home.css';

const Contacto = () => {
  const email = 'lmbe.oficial@gmail.com';
  const instagramLink = 'https://www.instagram.com/lmbe.oficial?igshid=MTNiYzNiMzkwZA%3D%3D&utm_source=qr';
  const facebookLink = 'https://www.facebook.com/lmbe.oficial?mibextid=LQQJ4d';
  const registrationFormLink = 'https://forms.gle/jiJ4qqio4rYp83ZaA';
  const agentesLibres = 'https://forms.gle/XDNJJe7MQFM37Bgv8';

  return (
    <div style={{ padding: 25 }}>
      <Row justify="center">
        <Col span={24} style={{ textAlign: 'center' }}>
          <h1>LMBE</h1>
          <p>¡Conéctate con nosotros para vivir la emoción del baloncesto amateur!</p>
        </Col>
      </Row>

      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8}>
          <h2>Redes Sociales</h2>
          <p>
            <InstagramOutlined style={{ fontSize: '22px' }} />
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <> Instagram</>
            </a>
          </p>
          <p>
            <FacebookOutlined style={{ fontSize: '22px' }} />
            <a href={facebookLink} target="_blank" rel="noopener noreferrer">
              <> Facebook</>
            </a>
          </p>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <h2>Contacto Directo</h2>
          <p>
            ¡Contáctanos por nuestras redes sociales!
          </p>
          <p>
            <MailOutlined style={{ fontSize: '22px' }} />
            <> Correo Electrónico: {email}</>
          </p>
        </Col>

        <Col xs={24} sm={16} md={12} lg={8} style={{textAlign: "center"}}>
          <h2>Inscríbete Ahora</h2>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <Button style={{marginBottom: '10px'}} className='btn' type="primary" href={registrationFormLink} target="_blank" rel="noopener noreferrer">
              <i className="animation"></i>
              Inscribe a tu Equipo
              <i className="animation"></i>
            </Button>
            <Button className='btn' type='primary' href={agentesLibres} target='_blank' rel='noopener noreferrer'>
              <i className='animation'></i>
              Agentes Libres
              <i className='animation'></i>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contacto;
