import { useState } from "react";
import styles from "./Navbar.module.css";
import { experienceVersion } from "../../tenure";

const LINKS = [
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#about", label: "stack" },
  { href: "#education", label: "education" },
  { href: "#articles", label: "writing" },
  { href: "#contact", label: "contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <a className={styles.wordmark} href="#top">
          guilherme-bergue
          <span className={styles.ver}>{experienceVersion()}</span>
        </a>

        <button
          className={styles.toggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            {open ? (
              <>
                <line x1="3" y1="3" x2="15" y2="15" stroke="currentColor" strokeWidth="1.5" />
                <line x1="15" y1="3" x2="3" y2="15" stroke="currentColor" strokeWidth="1.5" />
              </>
            ) : (
              <>
                <line x1="2" y1="5" x2="16" y2="5" stroke="currentColor" strokeWidth="1.5" />
                <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" />
                <line x1="2" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.5" />
              </>
            )}
          </svg>
        </button>

        <ul
          className={`${styles.links} ${open ? styles.open : ""}`}
          onClick={() => setOpen(false)}
        >
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
