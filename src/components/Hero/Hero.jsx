import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div>
        <div className={styles.header}>
          <h1 className={styles.emoji}>👋</h1>
          <h1 className={styles.title}>Hi, I'm Guilherme</h1>
        </div>
        <p className={styles.description}>
          Software Engineer with 3 years of hands-on experience.
          <p>Reach out if you'd like to learn more!</p>
        </p>
        <a target="_blank" href="mailto:bergueeg@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/myPhoto.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
