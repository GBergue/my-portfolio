import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Guilherme Bergue
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a className={styles.menuLink} href="#about">About</a>
          </li>
          <li>
            <a className={styles.menuLink} href="#experience">Experience</a>
          </li>
          <li>
            <a className={styles.menuLink} href="#projects">Projects</a>
          </li>
          <li>
            <a className={styles.menuLink} href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
