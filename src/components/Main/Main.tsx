import React from "react";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";
const Main: React.FC = () => {
  return (
    <main className="container text-center mt-5">
      <h1 className="mb-4">Amir Mansour</h1>
      <br /><br />
      <div className="row justify-content-center">
        <div className="col-12 col-md-4 mb-3">
        <Link to={"/photo-section"}>
        <button className={styles.button} >Section photo</button>
        </Link>
        </div>
        <div className="col-12 col-md-4 mb-3">
        <Link to="/graphisme-section">
          <button className={styles.button}>Section graphisme</button>
        </Link>
        </div>
        <div className="col-12 col-md-4 mb-3">
        <Link to="/graph">
          <button className={styles.button}>Section design</button>
        </Link>        </div>
      </div>
    </main>
  );
};

export default Main;
