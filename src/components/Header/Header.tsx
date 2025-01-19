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
        <a style={{fontSize:"2rem"}} href="/">Amir Mansour</a>
        <a style={{paddingTop:"24px"}} href="/photo-section">Projet</a>
        <a style={{paddingTop:"24px"}} href="/">A propos</a>
        <a style={{paddingTop:"24px"}} href="/">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
