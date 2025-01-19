import React, { useState } from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.burger} onClick={toggleMenu}>
        <div className={`${styles.line} ${menuOpen ? styles.active : ""}`}></div>
        <div className={`${styles.line} ${menuOpen ? styles.active : ""}`}></div>
        <div className={`${styles.line} ${menuOpen ? styles.active : ""}`}></div>
      </div>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <a href="/">Accueil</a>
        <a href="/photo-section">Projet</a>
        <a href="/">A propos</a>
        <a href="/">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
