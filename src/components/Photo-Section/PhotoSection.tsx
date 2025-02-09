import React from "react";
import { Link } from "react-router-dom";

const PhotoSection: React.FC = () => {
  return (
    <main className="container mt-5" style={{ paddingTop: "50px" }}>
      <br /><br />
      <div className="link-container">
        <div className="link-item">
          <Link className="link-content" to={"projet-rer"}>
            <div>
            <div className="link-text">
              01
            </div>
            </div>
            <div className="image-container">
              <img src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0060-min-DzYQM9IGGlbbfrP2Hnp7vndKSOCFGJ.webp" alt="RER" className="link-image" />
            </div>
            <div className="link-text">
              SOUTERRAIN
            </div>
          </Link>
        </div>
        <div className="link-item">
          <Link className="link-content" to={"projet-maroc"}>
            <div className="link-text">
              02
            </div>
            <div className="image-container">
              <img src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02813-maOvmGpSV6Jk2EwPuot1tFuBGQYRdt.webp" alt="Maroc" className="link-image" />
            </div>
            <div className="link-text">
              MAROC
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PhotoSection;
