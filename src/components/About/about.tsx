import React from "react";

const About: React.FC = () => {
  return (
    <div
      className="about-wrapper"
      style={{
        maxWidth: "1100px",
        marginLeft: "0",
        marginRight: "0",
        margin: "0 auto",
      }}
    >
      <main className="container mt-5">
        <div style={{ paddingBottom: "20px" }}>
          <p style={{ fontSize: "1.7rem" }}>à propos</p>
        </div>
        <div className="about-content">
          <section>
            <p>
              <strong>Amir Mansour</strong> —<br />
              Photographie, design, graphisme et développement.
            </p>


              Inspiré par le minimalisme, les couleurs vives et les formes
              abstraites.


            <p>
              Je crée des visuels sur Figma, j’explore la photographie à travers
              différents appareils photos,<p>et je développe des interfaces en
              pensant avant tout à l’expérience utilisateur.</p> 
            </p>

            <p>Master en développement cloud à Supinfo.</p>
          </section>

        </div>
      </main>
    </div>
  );
};

export default About;
