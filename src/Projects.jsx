import projects from "./projects";

function Projects() {
  return (
    <section>
      <h2>Meus Projetos</h2>
      {projects.map((projeto) => (
        <div key={projeto.id}>
          <h3>{projeto.nome}</h3>
          <p>{projeto.descricao}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
