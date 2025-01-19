import React from "react";
import Carousel from "react-bootstrap/Carousel";
import '../section-photo.css';

function ProjetMarocGalleryMob() {
  return (
    <main style={{textAlign:"center", margin:"50px 0px 0px 0px", overflowY:"hidden"}}>
      <h1 className="mb-4">Projet Maroc</h1>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item >
            <img
             src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/AC79ACB4-4795-4F1E-A521-CFD51019CC2B_1_105_c-JHlYd2v9EiTv474HzhasB57zsehrPg.webp"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/6C89EAC4-A875-404E-99ED-5B668AB46931_1_105_c-MXDGN6o3OhjKYRZPtT7Zonp9b01yyH.webp"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
             src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/B0ACF3C5-A053-463F-847C-6BEB668F45CA_1_201_a-1FvDQIaGzGxHRn3wlMadLQmGbnsnhI.jpeg"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
             src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02805-QcYlfP9siTc20y2VanM3y0QbKbhuZq.webp"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
             src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02815-olKqd7YQ1U5IdUuMMVzaZipZVHQ4mx.webp"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
             src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02836-E91ZwPUIayKbSdd3irzT9NtiiV26XJ.webp"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
             src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02836-I9Ohw2KPRJ0UVEhCVjqVAU7JHhcPYd.webp"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
             src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02846-Oxw8MMKkXNcuAGeeX3foRXvjcytPC5.webp"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width={"%"}
             src="https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02848-AHKvooAwffW1MLaXKlWcHtKYkV9j5j.webp"
              alt=""
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </main>
    
  );
}

export default ProjetMarocGalleryMob;
