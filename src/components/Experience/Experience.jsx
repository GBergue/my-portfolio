import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { Entry } from "../Entry/Entry";
import { experienceTenureShort } from "../../tenure";

export const Experience = () => {
  return (
    <section className="section" id="experience">
      <h2 className="sectionHead">experience</h2>
      <p className="sectionNote">Current role. Still shipping.</p>

      {history.map((item, i) => (
        <Entry
          key={i}
          date={`${item.startDate.replace(",", "")} → ${
            item.endDate === "Present" ? "now" : item.endDate
          }`}
          note={item.endDate === "Present" ? experienceTenureShort() : undefined}
        >
          <h3 className={styles.role}>
            {item.role} <span className={styles.at}>·</span> {item.organisation}
          </h3>
          <ul className={styles.log}>
            {item.experiences.map((line, j) => (
              <li key={j}>{line}</li>
            ))}
          </ul>
        </Entry>
      ))}
    </section>
  );
};
