import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ImageModal from '../../ImageModal';

const FormesCouleursGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20graphique%20formes%20couleurs%20galery/Group-2-min%20%281%29.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20graphique%20formes%20couleurs%20galery/Group-3-min.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20graphique%20formes%20couleurs%20galery/Group-68-min.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20graphique%20formes%20couleurs%20galery/Group-7-min.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20graphique%20formes%20couleurs%20galery/Group-9-min.webp",
  ];

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
        <span className="visually-hidden">Chargement...</span>
      </div>
      <p>Chargement des images...</p>
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
      <p style={{ fontSize: "1rem" }}>SOUTERRAIN</p>
      <p style={{color:"#686868"}}>Ensemble de photos prises dans les stations de RER</p>
      <p style={{color:"#686868"}}>2025 - Paris</p>
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
                    marginBottom: "20px"
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

export default FormesCouleursGallery;