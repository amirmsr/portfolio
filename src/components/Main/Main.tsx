import React from "react";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <main className="container text-center mt-5" style={{maxWidth:"1100px", marginLeft:"0" , marginRight:"0", margin:"0 auto"}}>
        <Link className="link1" to="/photo-section">
      <div className="animate__animated animate__fadeIn">
        <img
          className={styles.responsiveImage} 
          src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02805-2hRCliUJyN3QyabNrz6iEeeZd7gs5j.webp"
          alt=""
        />
      </div>
      <br /><br/>
      <div className="link1-item">
        Découvrir
      </div>
      </Link>
    </main>
  );
};

export default Main;
