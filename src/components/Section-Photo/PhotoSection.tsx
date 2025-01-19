import React from "react";
import { Link } from "react-router-dom";




const PhotoSection: React.FC = () => {
  return (
    <main className="container text-center mt-5">
      <h1 className="mb-4">Amir Mansour</h1>
      <br /><br />
      <div className="link-container">
        <div className="link-item">
          <Link className="link"  to={"projet-maroc"}>
                Projet maroc
          </Link>
        </div>
        <div className="link-item">
          <Link className="link"  to={"projet-maroc"}>
                Projet maroc
          </Link>
        </div>
        <div className="link-item">
          <Link className="link"  to={"projet-maroc"}>
                Projet maroc
          </Link>
        </div>
    </div>
    </main>
  );
};

export default PhotoSection;
