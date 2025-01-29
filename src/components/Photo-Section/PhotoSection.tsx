import React from "react";
import { Link } from "react-router-dom";


const PhotoSection: React.FC = () => {
  return (
    <main className="container text-center mt-5" style={{ paddingTop: "50px" }}>
      <br /><br />
      <div className="link-container">
        <div className="link-item">
          <div className="link-content">
            <Link className="link" to={"projet-maroc"}>
              * MAROC / DESERT -2023-
            </Link>
           {/*  &nbsp;&nbsp;
            <span className="description">Description du projet Maroc</span> */}
          </div>
          <div className="image-container">
            <img src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0070-min-iO7nBJWbGa9tH9oHuRbuqX7LpwGz9L.webp" alt="Maroc" className="link-image" />
          </div>
        </div>
        <div className="link-item">
          <div className="link-content">
            <Link className="link" to={"projet-rer"}>
              * RER DE TOUT LES JOURS -2025-
            </Link>
           {/*  &nbsp;&nbsp;
            <span className="description">Description du projet RER</span> */}
          </div>
          <div className="image-container">
            <img src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0070-min-iO7nBJWbGa9tH9oHuRbuqX7LpwGz9L.webp" alt="RER" className="link-image" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default PhotoSection;
