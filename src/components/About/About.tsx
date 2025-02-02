import React from "react";

const About: React.FC = () => {
  return (
    <div className="about-wrapper">
      <main className="container mt-5" style={{ paddingTop: "50px" }}>
        <div className="about-content">
          <section className="bio-section mb-5">
            <h2 className="mb-4">About</h2>
            <p>
              Born in 2001 in Nogent-sur-Marne, I am a software engineer currently based in Paris. 
              My passion lies at the intersection of technology and visual arts, particularly photography 
              and design.
            </p>
            <p>
              In my photographic work, I am drawn to minimalism and the intricate details of 
              materials and textures. I find beauty in simplicity and the subtle interplay of light 
              and form. My approach to photography focuses on capturing these essential elements,
              stripping away the unnecessary to reveal the fundamental nature of my subjects.
              I'm using a Sony RX10, iPhone 11, Nikon Coolpix 3600s.
            </p>
          </section>

          <section className="contact-section mb-5">
            <h3 className="mb-3">Contact</h3>
            <p>
              <a href="mailto:your.email@example.com" className="email-link">
                your.email@example.com
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