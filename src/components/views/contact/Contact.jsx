import { useInView } from "framer-motion";
import React, { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s",
      }}
      ref={ref}
      id="contact"
      className="p-6 text-center mx-auto"
    >
      <p className="contact__preTitle">Si mi perfil te interesa</p>
      <h2 className="contact__title">Ponte en contacto</h2>
      <p className="contact__text">
        Si te encuentras en la busqueda de un desarrolador comprometido con todo lo que se propone y con ganas de seguir creciendo, no dudes en enviarme un email.
      </p>
      <div className="outlineBtnContainer">
        <a href="mailto:nicolas.fara.romero@gmail.com">
          <button className="outlineBtn">Contactame</button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
