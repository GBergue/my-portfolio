import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { email, github, linkedin } from "../../data/personal.json";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <div className={styles.linksContainer}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a target="_blank" href={`mailto:${email}`}>
              Email
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a target="_blank" href={linkedin}>
              Linkedin
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
            <a target="_blank" href={github}>
              GitHub
            </a>
          </li>
        </div>
      </ul>
    </footer>
  );
};
