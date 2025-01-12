import React from "react";
import MediaCard from "./Cards/CardsPhoto";
import { Link } from "react-router-dom";



const PhotoSection: React.FC = () => {
  return (
    <main className="container text-center mt-5">
      <h1 className="mb-4">Photo section</h1>
      <br /><br />
      <div style={{textAlign: "center" }}>
      <Link to={"/projet-maroc"} style={{textDecoration:'none'}}>
        <MediaCard
          image="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20projet%20cover%20/DSC02846-d9zB2KG8JEVN9coXQiKnAyaJh3Q1XX.webp"
          title="Projet Maroc"
          description="Projet Maroc"
          button1Label="Share"
          button2Label="Learn More"
        />
      </Link>
      <br /><br /><br />
      <Link to={"/projet-maroc"} style={{textDecoration:'none'}}> 
        <MediaCard
          image="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20projet%20cover%20/IMG_2101-vTyHR4KxDYZInHcs7BBq6hz8X7NZ9G.webp"
          /* image="/image/photo-cover2.webp" */
          title="Projet matière"
          description="Des textures, des matières"
          button1Label="Explore"
          button2Label="Discover More"
        />
      </Link> 
    </div>
    </main>
  );
};

export default PhotoSection;
