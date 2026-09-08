import styles from "./Education.module.css";
import education from "../../data/education.json";
import { Entry } from "../Entry/Entry";

export const Education = () => {
  return (
    <section className="section" id="education">
      <h2 className="sectionHead">education</h2>
      <p className="sectionNote">Formal training, most recent first.</p>

      {education.map((item, i) => (
        <Entry
          key={i}
          date={`${item.startDate} → ${
            item.endDate === "Present" ? "now" : item.endDate
          }`}
          note={item.endDate === "Present" ? "in progress" : undefined}
        >
          <h3 className={styles.degree}>
            {item.degree} <span className={styles.at}>·</span> {item.organisation}
          </h3>
        </Entry>
      ))}
    </section>
  );
};
