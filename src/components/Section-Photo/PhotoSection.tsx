import React from "react";
import MediaCard from "./Cards/CardsPhoto";



const PhotoSection: React.FC = () => {
  return (
    <main className="container text-center mt-5">
      <h1 className="mb-4">Photo section</h1>
      <br /><br />
      <div style={{textAlign: "center" }}>
      <MediaCard
        image="/image/photo-cover1.webp"
        title="Projet Maroc"
        description="Projet Maroc"
        button1Label="Share"
        button2Label="Learn More"
      />
      <br /><br /><br />
      <MediaCard
        image="/image/photo-cover2.webp"
        title="Forest"
        description="A forest is a large area dominated by trees."
        button1Label="Explore"
        button2Label="Discover More"
      />
    </div>
    </main>
  );
};

export default PhotoSection;
