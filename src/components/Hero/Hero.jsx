import styles from "./Hero.module.css";
import { email, github, linkedin } from "../../data/personal.json";
import { experienceVersion, experienceTenure, updatedLabel } from "../../tenure";

export const Hero = () => {
  return (
    <header className={styles.masthead} id="top">
      <img
        className={styles.photo}
        src={`${import.meta.env.BASE_URL}me.png`}
        alt="Guilherme Bergue"
        width="128"
        height="128"
      />
      <div className={styles.text}>
        <p className={styles.name}>Guilherme Bergue</p>
        <p className={styles.meta}>
          guilherme-bergue<span className={styles.dot}>·</span>
          {experienceVersion()}
          <span className={styles.dot}>·</span>updated {updatedLabel()}
        </p>

        <h1 className={styles.headline}>
          Full-stack engineer, back-end first. I ship production software fast
          and keep the quality.
        </h1>

        <p className={styles.sub}>
          {experienceTenure()} in production at SHX — PostgreSQL and Spring Boot
          on the back end, React Native and Expo on the front.
        </p>

        <div className={styles.actions}>
          <a className={styles.primary} href={`mailto:${email}`}>
            Contact
          </a>
          <a
            className={styles.secondary}
            target="_blank"
            rel="noreferrer"
            href="https://calendly.com/bergueeg/30min"
          >
            Schedule a call
          </a>
        </div>

        <p className={styles.links}>
          <a target="_blank" rel="noreferrer" href={github}>
            github/GBergue
          </a>
          <span className={styles.dot}>·</span>
          <a target="_blank" rel="noreferrer" href={linkedin}>
            linkedin/guilherme-bergue
          </a>
        </p>
      </div>
    </header>
  );
};
