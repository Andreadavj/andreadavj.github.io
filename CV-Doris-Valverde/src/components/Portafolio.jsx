import "./Portafolio.css";

function Portafolio() {
  return (
    <section id="projects" className="portafolio">
      <h2>Proyectos Destacados</h2>
      <div className="project">
        <h3>Proyecto 1</h3>
        <p>Descripción del proyecto.</p>
        <a href="https://github.com/andreadavj/proyecto1" target="_blank">Ver en GitHub</a>
      </div>
      <div className="project">
        <h3>Proyecto 2</h3>
        <p>Descripción del proyecto.</p>
        <a href="https://github.com/andreadavj/proyecto2" target="_blank">Ver en GitHub</a>
      </div>
    </section>
  );
}

export default Portafolio;
