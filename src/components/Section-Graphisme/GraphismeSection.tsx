import React from "react";
import MediaCard from "./Cards/CardsGraphisme";



const GraphismeSection: React.FC = () => {
  return (
    <main className="container text-center mt-5">
      <h1 className="mb-4">Graphisme section</h1>
      <br /><br />
      <div style={{textAlign: "center" }}>
      <MediaCard
        image="/image/graphisme-cover1.png"
        title="Vrac"
        description="Vrac"
        button1Label="Share"
        button2Label="Learn More"
      />
      <br /><br /><br />
{/*       <MediaCard
        image="/image/photo-cover2.png"
        title="Forest"
        description="A forest is a large area dominated by trees."
        button1Label="Explore"
        button2Label="Discover More"
      /> */}
    </div>
    </main>
  );
};

export default GraphismeSection;
