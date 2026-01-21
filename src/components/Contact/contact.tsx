import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="about-wrapper" style={{maxWidth:"1100px", marginLeft:"0" , marginRight:"0", margin:"0 auto"}}>
      <main className="container mt-5">
      <div style={{paddingBottom:"20px"}}>
        <p style={{ fontSize: "1.7rem" }}>contact</p>
      </div>
        <div className="about-content">
          <section className="contact-section mb-5"> 
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

export default Contact;