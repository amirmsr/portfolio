import React from "react";
import Carousel from "react-bootstrap/Carousel";
import '../Section-Photo/section-photo.css';

function UncontrolledExample() {
  return (
    <main className="container text-center mt-5">
      <h1 className="mb-4">Photo section</h1>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              width={"50%"}
              src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02815-S9OL5rl8i77kzP3Mmy4KgmiLcRXeAZ.webp"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width={"50%"}
              src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02820-UMXGWNUCdHqGsYcrNahi4DjXcTRK7K.webp"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width={"50%"}
              src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02836-Qa0fhehcsGMC24zGAoYxVPbbb31AED.webp"
              alt=""
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </main>
    
  );
}

export default UncontrolledExample;
