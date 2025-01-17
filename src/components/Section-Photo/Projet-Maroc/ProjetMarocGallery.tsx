import React from "react";
import { Col, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import ProjetMarocGalleryMob from "./ProjetMarocGalleryMob";

const ProjetMarocGallery: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  if (isMobile) {
    return <ProjetMarocGalleryMob />;
  }

  return (
    <main className="container text-center mt-5">
      <h1 className="mb-4">Amir Mansour</h1>
      <br />
      <br />
      <div className="gallery-container">
        <Row>
          <Col xs={12} sm={6} md={4}>
            <img
              src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/AC79ACB4-4795-4F1E-A521-CFD51019CC2B_1_105_c-JHlYd2v9EiTv474HzhasB57zsehrPg.webp"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              className="animate__animated animate__fadeIn"
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <img
              src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/6C89EAC4-A875-404E-99ED-5B668AB46931_1_105_c-MXDGN6o3OhjKYRZPtT7Zonp9b01yyH.webp"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              className="animate__animated animate__fadeIn"
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <img
              src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/B0ACF3C5-A053-463F-847C-6BEB668F45CA_4_5005_c-a16ry9O15366WRKqYsg7oisqRacSKw.webp"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              className="animate__animated animate__fadeIn"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <img
              src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02805-QcYlfP9siTc20y2VanM3y0QbKbhuZq.webp"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              className="animate__animated animate__fadeIn"
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <img
              src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02815-OnpVfcQOJOIV2nnbahf7GcTSxUMEzY.webp"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              className="animate__animated animate__fadeIn"
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <img
              src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02820-31CiHP26rn4iED2AVWqDUEHn54lRmo.webp"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              className="animate__animated animate__fadeIn"
            />
          </Col>
        </Row>
      </div>
    </main>
  );
};

export default ProjetMarocGallery;
