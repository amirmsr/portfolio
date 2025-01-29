import React from "react";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <main className="container text-center mt-5 " style={{paddingTop:"50px"}}>
      <div className="animate__animated animate__fadeIn">
        <img
          className={styles.responsiveImage} 
          src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02805-2hRCliUJyN3QyabNrz6iEeeZd7gs5j.webp"
          alt=""
        />
      </div>
      <br /><br/>
      <div className="link-item">
        <Link className="link" to="/photo-section">
        Découvrir
        </Link>
      </div>
    </main>
  );
};

export default Main;
