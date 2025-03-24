import React, { useState, useEffect } from "react";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";

const Main: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
   
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
   
    window.addEventListener("resize", checkIfMobile);
    
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const desktopImageUrl = "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/home%20page/Group%2055-rogSS5Hr1nFoieQmQFMEJGr29H2Bp4.png";
  const mobileImageUrl = "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/home%20page/Group%2056-min-eFfmqIjESt4mpuggLff98NPTmw3Y90.png"; 

  return (
    <main className="container text-center mt-5" style={{maxWidth:"1100px", margin:"0 auto"}}>
      <Link className="link1" to="/photo-section">
        <div className="animate__animated animate__fadeIn">
          <img 
            className={styles.responsiveImage} 
            src={isMobile ? mobileImageUrl : desktopImageUrl} 
            alt="Découvrir section" 
          />
        </div>
        <br /><br/>
        <div className="link1-item"> Découvrir </div>
      </Link>
    </main>
  );
};

export default Main;