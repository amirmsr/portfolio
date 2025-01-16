import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const MenuDeroulant: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(-1);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <div className="accordion-item">
        <div
          className={`accordion-header ${activeIndex === 0 ? "active" : ""}`}
          onClick={() => toggleAccordion(0)}
        >
          <p>Projet maroc </p>
        </div>
        {activeIndex === 0 && (
          <div className="accordion-body">
            <Row style={{ paddingBottom: "50px" }}>
              <Col className="animate__animated animate__fadeIn" >
                <img
                  className="img-fluid"
                  src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02815-OnpVfcQOJOIV2nnbahf7GcTSxUMEzY.webp"
                  alt=""
                />
              </Col>
              <Col className="animate__animated animate__fadeIn" >
                <img
                  className="img-fluid"
                  src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02820-31CiHP26rn4iED2AVWqDUEHn54lRmo.webp"
                  alt=""
                />
              </Col>
              <Col className="animate__animated animate__fadeIn" >
                <img
                  className="img-fluid"
                  src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02836-I9Ohw2KPRJ0UVEhCVjqVAU7JHhcPYd.webp"
                  alt=""
                />
              </Col>
            </Row>
            
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className={`accordion-header ${activeIndex === 1 ? "active" : ""}`}
          onClick={() => toggleAccordion(1)}
        >
          <p>Accordion Item #2 </p>
        </div>
        {activeIndex === 1 && (
          <div className="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        )}
      </div>
      <div className="accordion-item">
        <div
          className={`accordion-header ${activeIndex === 2 ? "active" : ""}`}
          onClick={() => toggleAccordion(2)}
        >
          <p>Accordion Item #3 </p>
        </div>
        {activeIndex === 2 && <div className="accordion-body">onClick</div>}
      </div>
    </div>
  );
};

export default MenuDeroulant;
