import React from "react";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <main className="container text-center mt-5 ">
      <h1 className="mb-4">Amir Mansour</h1>
      <br></br>
      <div>
        <img
          className={styles.responsiveImage}
          src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/AC79ACB4-4795-4F1E-A521-CFD51019CC2B_1_105_c-JHlYd2v9EiTv474HzhasB57zsehrPg.webp"
          alt=""
        />
      </div>
      <br />
      <Link to="/photo-section">
        <p className={`${styles.lien} ${styles.centered}`}>Découvrir</p>
      </Link>
    </main>
  );
};

export default Main;
