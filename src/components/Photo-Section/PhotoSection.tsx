import React from "react";
import { Link } from "react-router-dom";

const PhotoSection: React.FC = () => {
  return (
    <main className="container mt-5">
      <div style={{maxWidth:"1100px", marginLeft:"0" , marginRight:"0", margin:"0 auto"}}>
      <div style={{paddingBottom:"20px"}}>
        <p style={{ fontSize: "1.7rem" }}>projet</p>
      </div>
      <div className="link-container"  >
        <div className="link-item">
          <Link className="link-content" to={"projet-rer"}>
            <div>
              <div className="link-text">01</div>
            </div>
            <div className="image-container">
              <img
                src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20projet%20/Group%2059-min-vAswo4N0tTiOm2nSTJcNNiCentvzXS.png"
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
                src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20projet%20/Group%2057-min-6nQilHxzD7dQLYLXS5p1JtFda5M9gR.png"
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
