import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, imgWidth, imgHeight, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
          style={{ width: imgWidth, height: imgHeight }}
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {demo ? (
          <a target="_blank" href={demo} className={styles.link}>
          Demo
        </a> ) : null}
        <a target="_blank" href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
