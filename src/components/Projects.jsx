import styles from '../assets/stylesComponents/projects.module.scss';

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 2,
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 3,
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }    
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
