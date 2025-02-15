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
              Born in 2001 in Paris, I am a software engineer currently based in Paris. 
              My passions are visual arts, photography 
              and design.
            </p>
            <p>
              In my photographic work, I am drawn to minimalism and the intricate details of 
              materials and textures. I find beauty in simplicity and the subtle interplay of light 
              and form. My approach to photography focuses on capturing these essential elements,
              stripping away the unnecessary to reveal the fundamental nature of my subjects.
              I'm using a Sony RX100, iPhone 11, Nikon Coolpix 3600s.
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