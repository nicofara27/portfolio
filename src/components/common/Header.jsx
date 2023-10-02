import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { motion } from "framer-motion";
import { useScrollDirection } from "../hooks/useScrollDirection";

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      data-bs-theme="dark"
    >
      <Navbar
        expand="lg"
        className={`menu ${scrollDirection === "down" ? "hide" : "show"}`}
      >
        <Navbar.Brand href="/" className="text-light">
          NF
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Nav.Link href="#about">
                <span>01.</span>About
              </Nav.Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Nav.Link href="#projects">
                <span>02.</span>Proyectos
              </Nav.Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Nav.Link href="#contact">
                <span>03.</span>Contacto
              </Nav.Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="menu__btnContainer"
            >
              <Nav.Link className="menu__btn w-100 text-center" href="#link">
                Currículum
              </Nav.Link>
            </motion.div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </motion.header>
  );
};

export default Header;
