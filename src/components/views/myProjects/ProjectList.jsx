import React from "react";
import Project from "./Project";

const ProjectList = () => {
  const projects = [
    {
      img: "https://gcdnb.pbrd.co/images/oJsP5Pll1mT1.png?o=1",
      type: "Projecto grupal",
      title: "E-comerce de Hamburgueseria",
      desc: "Pagina realizada en grupo como trabajo final del curse de Full Stack Developer de RollingCode. Puedes registrarte, ver los productos, agregarlos al carrito y enviar tu pedido. Si eres un usuario administrador puedes subir, editar y borrar productos, ademas de suspender y borrar usuarios.",
      tech: ["React", "Bootstrap", "Node.js", "MongoDb"],
      link: "https://lenohamburguesas.netlify.app/",
      frontLink: "https://github.com/mattelgrandexx/frontendProyectoFinal",
      backLink: "https://github.com/mattelgrandexx/backendProyectoFinal",
    },
    {
      img: "https://gcdnb.pbrd.co/images/84aKaMaqaOio.png?o=1",
      type: "Projecto individual",
      title: "Buscador de peliculas",
      desc: "Pagina en la que se puede buscar peliculas tanto por su titulo como por diferentes filtros, ademas se puede registrar para asi poder agregar dichas peliculas a una lista de vistas con una puntuacion incluida. Este proyecto fue realizado con la finalidad de profundizar mi conocimiento con el manejo de APIs.",
      tech: ["React", "Antd", "TMDB API", "Node.js", "MongoDb"],
      link: "https://info-pelis.netlify.app/",
      frontLink: "https://github.com/nicofara27/peliculas-front",
      backLink: "https://github.com/nicofara27/peliculas-back",
    },
    {
      img: "https://gcdnb.pbrd.co/images/48CPg6n0LqnV.png?o=1",
      type: "Projecto individual",
      title: "Blog",
      desc: "Pagina en la que se puede subir articulos de diferentes categorias, tambien editar y borrar en caso de ser el creador del articulo. Este proyecto lo realize con el fin de empezar mi aprendizaje con MySQL y entender el concepto de useContext de React.",
      tech: ["React", "Bootstrap", "Node.js", "MySQL"],
      link: "https://blog-nfr.netlify.app/",
      frontLink: "https://github.com/nicofara27/blog-front",
      backLink: "https://github.com/nicofara27/blog-back",
    },
  ];

  return (
    <section id="projects" className="p-6">
      <h2 className="projList__title">
        <span>03. </span>Mis Proyectos
      </h2>
      {projects.map((proj, index) => (
        <Project key={index} index={index} proj={proj} />
      ))}
    </section>
  );
};

export default ProjectList;
