import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { BiLogoGithub, BiLinkExternal } from "react-icons/bi";

const Project = ({ proj, index }) => {
  const { img, type, title, desc, tech, link, frontLink, backLink } = {
    ...proj,
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <article
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s",
      }}
      ref={ref}
      className="proj"
    >
      <Row className="proj__container">
        <Col className="align-self-center proj__container1" xs={12} md={7}>
          <div className="proj__imgContainer">
            <img className="proj__img" src={img} alt={title} />
            <div className="proj__imgMask" />
          </div>
        </Col>
        <Col className="align-self-center proj__container2" xs={12} md={5}>
          <p className="proj__type">{type}</p>
          <h3 className="proj__title">
            <a href={link} target="_blank" rel="noreferrer">
              {title}
              <BiLinkExternal className="ms-1" />
            </a>
          </h3>
          <p className="proj__desc">{desc}</p>
          <div className="proj__techs d-flex flex-wrap">
            {tech.map((elem, index) => (
              <div key={index}>
                <p>{elem}</p>
              </div>
            ))}
          </div>
          <div className="proj__links mt-3">
            <a href={frontLink}>
              <BiLogoGithub />
              Front
            </a>
            <a href={backLink}>
              <BiLogoGithub />
              Back
            </a>
          </div>
        </Col>
      </Row>
    </article>
  );
};

export default Project;
