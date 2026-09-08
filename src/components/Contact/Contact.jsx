import styles from "./Contact.module.css";
import { email, github, linkedin } from "../../data/personal.json";
import { updatedLabel } from "../../tenure";

const CHANNELS = [
  { label: "email", value: "bergueeg@gmail.com", href: `mailto:${email}` },
  {
    label: "calendly",
    value: "30-min call",
    href: "https://calendly.com/bergueeg/30min",
  },
  { label: "linkedin", value: "guilherme-bergue", href: linkedin },
  { label: "github", value: "GBergue", href: github },
];

export const Contact = () => {
  return (
    <footer id="contact" className={styles.colophon}>
      <div className={styles.inner}>
        <h2 className={styles.head}>
          <span className={styles.hash}>## </span>contact
        </h2>
        <p className={styles.blurb}>
          Open to full-time and contract work. Fastest ways to reach me:
        </p>

        <ul className={styles.channels}>
          {CHANNELS.map((c) => (
            <li key={c.label} className={styles.channel}>
              <span className={styles.label}>{c.label}</span>
              <a href={c.href} target="_blank" rel="noreferrer">
                {c.value}
              </a>
            </li>
          ))}
        </ul>

        <p className={styles.end}>— end of log · updated {updatedLabel()}</p>
      </div>
    </footer>
  );
};
