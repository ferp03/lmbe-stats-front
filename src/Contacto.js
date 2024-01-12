import React from 'react';
import { Row, Col, Button } from 'antd';
import { InstagramOutlined, WhatsAppOutlined, MailOutlined } from "@ant-design/icons";
import './Home.css';

const Contacto = () => {
  const whatsappNumber = '81 2360 5971 / 81 2468 0512';
  const email = 'lmbe.oficial@gmail.com';
  const instagramLink = 'https://www.instagram.com/lmbe.oficial?igshid=MTNiYzNiMzkwZA%3D%3D&utm_source=qr';
  const registrationFormLink = 'https://forms.gle/1jfFRurMucZTW2YYA';

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
          <InstagramOutlined style={{ fontSize: '22px' }} />
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <> Instagram</>
          </a>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <h2>Contacto Directo</h2>
          <p>
            <WhatsAppOutlined style={{ fontSize: '22px' }} />
            <> WhatsApp: {whatsappNumber}</>
          </p>
          <p>
            <MailOutlined style={{ fontSize: '22px' }} />
            <> Correo Electrónico: {email}</>
          </p>
        </Col>

        <Col xs={24} sm={16} md={12} lg={8} style={{textAlign: "center"}}>
          <h2>Inscríbete Ahora</h2>
          <Button className='btn' type="primary" href={registrationFormLink} target="_blank" rel="noopener noreferrer">
            <i className="animation"></i>
            Inscríbete
            <i className="animation"></i>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Contacto;
