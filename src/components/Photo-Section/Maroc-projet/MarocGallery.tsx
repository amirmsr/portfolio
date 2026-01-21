import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import '../section-photo.css';
import ImageModal from '../../ImageModal'; 

  const images = [
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC_2064_1_V2-2-5R6Lowm4132vB7vy0pfqE4bDoGwRS0.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/906511E3-8B84-4906-B303-3EE72019BD7D-B7AZRTTQtrtpF9VklObmxSAu8ohsph.jpeg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02805-KzCcFlgwQxDVuKBeAQrowcTzfuoTkl.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02817-Cf2yhc41pRwLr5oQOBiGxrOfdcSe10.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/9497647C-4A8D-4614-8DC6-7EBE3463C58A-o37SNu0hgpc7NRnlAt1XnukCXyED10.jpeg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02848-AHKvooAwffW1MLaXKlWcHtKYkV9j5j.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/C41893E7-9E13-47A3-B803-CBBCEEEC5296-DHEICDdMNLPGHM9n3XDCEj69N69A09.jpeg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/B0ACF3C5-A053-463F-847C-6BEB668F45CA_1_201_a-1FvDQIaGzGxHRn3wlMadLQmGbnsnhI.jpeg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/AC79ACB4-4795-4F1E-A521-CFD51019CC2B_1_105_c-JHlYd2v9EiTv474HzhasB57zsehrPg.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/C6AA622A-394F-417B-A685-5A0C00174A5F-qdRYxBqm0EUQC019Gbk3JycTVXEGC3.jpeg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02815-olKqd7YQ1U5IdUuMMVzaZipZVHQ4mx.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02852-S4tutsySPJlWfCwxd6149elFMm1Trv.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/6C89EAC4-A875-404E-99ED-5B668AB46931_1_105_c-MXDGN6o3OhjKYRZPtT7Zonp9b01yyH.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02846-Oxw8MMKkXNcuAGeeX3foRXvjcytPC5.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/DSC02813-maOvmGpSV6Jk2EwPuot1tFuBGQYRdt.webp",
  ];

const MarocGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = images.map((imageUrl) => {
        return new Promise<string>((resolve, reject) => {
          const img = new Image();
          img.src = imageUrl;
          img.onload = () => resolve(imageUrl);
          img.onerror = () => reject(imageUrl);
        });
      });

      try {
        const loadedImageUrls = await Promise.all(imagePromises);
        setLoadedImages(loadedImageUrls);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  // Loader component
  const Loader = () => (
    <div className="text-center my-5">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p>Loading images...</p>
    </div>
  );

  return (
    <main 
      className="container text-center mt-5" 
      style={{
        maxWidth:"1100px", 
        marginLeft:"0", 
        marginRight:"0", 
        margin:"0 auto"
      }}
    >
      <p style={{ fontSize: "1rem" }}>TRAIN DE VIE</p>
      <p style={{color:"#686868"}}>Prises de vue de moments de vie </p>
      <p style={{color:"#686868"}}>2023 - Maroc</p> 
      <br />
      <br />

      {isLoading ? (
        <Loader />
      ) : (
        <div className="gallery-container">
          <Row>
            {loadedImages.map((imageUrl, index) => (
              <Col key={index} className="col" xs={4} md={3}>
                <img
                  src={imageUrl}
                  alt={`Maroc gallery${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                    marginBottom: "15px"
                  }}
                  className="animate__animated animate__fadeIn"
                  onClick={() => handleImageClick(imageUrl)}
                  loading="lazy" // Native lazy loading
                />
              </Col>
            ))}
          </Row>
        </div>
      )}

      <ImageModal
        isOpen={!!selectedImage}
        onClose={handleCloseModal}
        imageUrl={selectedImage || ''}
      />
    </main>
  );
};

export default MarocGallery;