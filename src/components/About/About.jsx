import styles from "./About.module.css";
import skills from "../../data/skills.json";
import { languages } from "../../data/personal.json";

const GROUPS = [
  {
    label: "backend",
    members: [
      "Java", "Spring Boot", "Hibernate", "REST APIs", "Microservices",
      "PostgreSQL", "MongoDB", "Kafka", "Python",
    ],
  },
  {
    label: "mobile",
    members: [
      "React Native", "Expo", "Redux Toolkit", "React Navigation", "Kotlin",
      "EAS", "Google Play", "App Store",
    ],
  },
  {
    label: "frontend",
    members: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  { label: "testing", members: ["JUnit", "Jest", "React Testing Library"] },
  {
    label: "tooling",
    members: [
      "Docker", "Jenkins", "CI/CD", "Git", "Google Cloud Platform",
      "Maven", "Vite", "Figma", "Jira",
    ],
  },
  {
    label: "ai/ml",
    members: [
      "Computer vision", "On-device ML", "Real-time face detection",
      "AI-assisted development",
    ],
  },
];

export const About = () => {
  const known = new Set(GROUPS.flatMap((g) => g.members));
  const rest = skills.map((s) => s.title).filter((t) => !known.has(t));
  const groups = rest.length
    ? [...GROUPS, { label: "more", members: rest }]
    : GROUPS;

  return (
    <section className="section" id="about">
      <h2 className="sectionHead">stack</h2>
      <p className="sectionNote">
        Back end is where I&apos;m strongest; the rest is what I reach for to
        ship the whole thing.
      </p>

      <dl className={styles.grid}>
        {groups.map((g) => (
          <div className={styles.row} key={g.label}>
            <dt className={styles.term}>{g.label}</dt>
            <dd className={styles.def}>{g.members.join("  ·  ")}</dd>
          </div>
        ))}
        <div className={styles.row}>
          <dt className={styles.term}>languages</dt>
          <dd className={styles.def}>{languages.join("  ·  ")}</dd>
        </div>
      </dl>
    </section>
  );
};
