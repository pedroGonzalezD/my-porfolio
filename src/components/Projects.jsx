import styles from '../assets/stylesComponents/projects.module.scss';

const projects = [
  {
    id: 1,
    title: "Crypto Screener Application",
    description: "I'm Evren Shah. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    title: "Euphoria - Ecommerce (Apparels) Website Template",
    description: "I'm Evren Shah. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    title: "Blog Website Template",
    description: "I'm Evren Shah. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const Projects = () => {
  return (
    <section className={styles.projects} id='projects'>
      <div className={styles.container}>
      <h2>My <span className={styles.highlight}>Projects</span></h2>
      {projects.map((project) => (
        <div key={project.id} className={styles.project}>
          <div className={styles.projectInfo}>
            <h3>{project.id < 10 ? `0${project.id}` : project.id}</h3>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <a href="#" className={styles.projectLink}>🔗</a>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default Projects;
