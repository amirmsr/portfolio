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
              Photographie et création .
            </p>

            <p>
              Contraste, couleurs et minimalisme
            </p>

            <p>Quotidient : expert en management des systèmes d'information</p>
          </section>

        </div>
      </main>
    </div>
  );
};

export default About;
