import React from "react";
import { Link } from "react-router-dom";

const PhotoSection: React.FC = () => {
  return (
    <main className="container mt-5">
      <div style={{maxWidth:"1100px", marginLeft:"0" , marginRight:"0", margin:"0 auto"}}>
      <div style={{paddingBottom:"20px"}}>
        <p style={{ fontSize: "1.7rem" }}>Projet</p>
      </div>
      <div className="link-container"  >
        <div className="link-item">
          <Link className="link-content" to={"projet-rer"}>
            <div>
              <div className="link-text">01</div>
            </div>
            <div className="image-container">
              <img
                src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0044-min-0qVHS4liX6b8xIwqcwWz5YBmAtza1q.webp"
                alt="RER"
                className="link-image"
              />
            </div>
            <div className="link-text">SOUTERRAIN</div>
          </Link>
        </div>
        <div className="link-item">
          <Link className="link-content" to={"projet-maroc"}>
            <div className="link-text">02</div>
            <div className="image-container">
              <img
                src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02813-maOvmGpSV6Jk2EwPuot1tFuBGQYRdt.webp"
                alt="Maroc"
                className="link-image"
              />
            </div>
            <div className="link-text">MAROC</div>
          </Link>
        </div>
      </div>
      </div>
    </main>
  );
};

export default PhotoSection;
