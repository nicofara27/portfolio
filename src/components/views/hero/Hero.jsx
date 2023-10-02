import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="hero__preName"
      >
        Hola, mi nombre es
      </motion.p>
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="hero__name"
      >
        NICOLAS FARA ROMERO.
      </motion.h1>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="hero__position"
      >
        FULL STACK WEB DEVELOPER
      </motion.h2>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="hero__desc my-5"
      >
        Soy un desarrollador web de la provincia de Tucuman, Argentina.
        Actualmente me encuentro en la busqueda de nuevas oportunidades laborales
        que me permitan seguir aprendiendo y desarrollandome como profesional.
      </motion.p>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.5 }}
        className="outlineBtnContainer"
      >
        <button className="outlineBtn">
          <a href="#projects">Mis proyectos</a>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
