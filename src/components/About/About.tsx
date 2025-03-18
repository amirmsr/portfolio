import React from "react";

const About: React.FC = () => {
  return (
    <div className="about-wrapper" style={{maxWidth:"1100px", marginLeft:"0" , marginRight:"0", margin:"0 auto"}}>
      <main className="container mt-5">
      <div style={{paddingBottom:"20px"}}>
        <p style={{ fontSize: "1.7rem" }}>About</p>
      </div>
        <div className="about-content">
        <section className="bio-section mb-5">
          <p>
            Né en 2001 à Paris, je suis ingénieur logiciel actuellement basé à Paris.
            Mes passions sont les arts visuels, la photographie et le design.
          </p>
          <p>
            Dans mon travail photographique, je suis attiré par le minimalisme et les détails complexes des
            matériaux et des textures. Je trouve la beauté dans la simplicité et le jeu subtil de la lumière
            et de la forme. Mon approche de la photographie se concentre sur la capture de ces éléments essentiels,
            en éliminant le superflu pour révéler la nature fondamentale de mes sujets.
            J'utilise un Sony RX100, un iPhone 11 et un Nikon Coolpix 3600s. 
          </p>
        </section>


          <section className="contact-section mb-5">
            <h3 className="mb-3">Contact</h3>
            <p>
              <a href="mailto:amirmansour135@gmail.com" className="email-link">
                amirmansour135@gmail.com
              </a>
            </p>
          </section>

          <footer className="copyright-section text-muted">
            <p>© Amir Mansour. All rights reserved. 2025</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default About;