import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ImageModal from "../../ImageModal";

const images = [
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/2C0F2214-6B2A-4D40-82D7-61EDCE450DB9-converti-depuis-jpg.webp",  
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/5774BEBF-04BF-4DD3-9C0E-69354D30B68C_1_105_c.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/DSC02705.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/P1110072.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/P1090428.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/DSC03064.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/DSC03487%202.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/IMG_0850.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/DSC03515.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/IMG_0218.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/IMG_0375.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/IMG_0402.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/IMG_0420.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/IMG_3473.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/IMG_0577.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/IMG_0674.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/IMG_0847.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/IMG_0858.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/IMG_3421.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/IMG_0981.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/IMG_3469.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/IMG_3472.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/P1090375.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/IMG_0373.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/P1110071.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20couleurs%20galery/P1110198.webp"
];

const CouleurGallery: React.FC = () => {
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
        console.error("Error loading images:", error);
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  // Loader component
  const Loader = () => (
    <div className="text-center my-5">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Chargement...</span>
      </div>
      <p>Chargement des images...</p>
    </div>
  );

  return (
    <main
      className="container text-center mt-5"
      style={{
        maxWidth: "1100px",
        marginLeft: "0",
        marginRight: "0",
        margin: "0 auto",
      }}
    >
      <p style={{ fontSize: "1rem" }}>COULEUR DES RUES</p>
      <p style={{ color: "#686868" }}></p>
      <p style={{ color: "#686868" }}>2025 - #####</p>
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
                  alt={`RER gallery  ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                    marginBottom: "20px",
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
        imageUrl={selectedImage || ""}
      />
    </main>
  );
};

export default CouleurGallery;
