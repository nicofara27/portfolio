import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import ProjectList from "./myProjects/ProjectList";
import Contact from "./contact/Contact";
import SideLinks from "../common/SideLinks";
import SideContact from "../common/SideContact";
import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <main>
      <Container>
        <Hero />
        <About />
        <ProjectList />
        <Contact />
        <SideContact />
        <SideLinks />
      </Container>
    </main>
  );
};

export default Main;
