import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      className="about p-6"
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s",
      }}
    >
      <Row>
        <Col lg={7} className="about__col ms-0">
          <h2 className="about__title">
            <span>01. </span>Sobre Mí
          </h2>
          <p ref={ref}>
            A finales de 2021 decidí dar mis primeros pasos en el mundo de la
            programacion. Sin un rumbo especifico comencé mi aprendizaje con el
            desarrollo de videojueos en Unity, un par de meses despues decidi
            cambiar mi enfoque. Pase por el desarrollo de aplicaciones con Java y en abril de 2022 fue
            cuando comencé mis estudios en el desarrollo web, esta vez con un
            curso como base de aprendizaje.
          </p>
          <p>
            Cursando en RollingCode se desperto mi pasion por la programacion y
            desde entonces no he dejado de formarme. Mi foco principal hoy en
            dia es aprender todo lo necesario para poder desenvolverme como un
            desarrollador profesional, realizando proyectos que me ayuden a
            mantenerme actualizado con las tecnologias necesarias.
          </p>
          <p>Algunas de las tecnologias que utilizo son:</p>
          <ul className="about__list">
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Ant Design</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </Col>
        <Col lg={4} className="about__col">
          <div className="about__imgContainer">
            <img
              className="about__img"
              src="https://media.licdn.com/dms/image/D4D03AQFvmcXHrETmzQ/profile-displayphoto-shrink_800_800/0/1670453365274?e=1700092800&v=beta&t=35gSqupFTxbmMbnT7fBexjV4VBr-DQ-65oWnncaozI0"
              alt=""
            />
            <div className="about__imgMask" />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default About;
