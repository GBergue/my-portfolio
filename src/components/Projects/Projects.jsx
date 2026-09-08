import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className="section" id="projects">
      <h2 className="sectionHead">projects</h2>
      <p className="sectionNote">Things built outside work.</p>

      <div className={styles.list}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
