import styles from "./ProjectCard.module.css";
import { Entry } from "../Entry/Entry";

export const ProjectCard = ({
  project: { title, description, skills, demo, source, note = "mobile" },
}) => {
  return (
    <Entry note={note}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <p className={styles.stack}>
        {skills.map((skill, id) => (
          <span key={id}>
            {skill}
            {id < skills.length - 1 ? <span className={styles.sep}> · </span> : null}
          </span>
        ))}
      </p>

      <p className={styles.links}>
        {demo ? (
          <a target="_blank" rel="noreferrer" href={demo}>
            demo&nbsp;→
          </a>
        ) : null}
        <a target="_blank" rel="noreferrer" href={source}>
          source&nbsp;→
        </a>
      </p>
    </Entry>
  );
};
