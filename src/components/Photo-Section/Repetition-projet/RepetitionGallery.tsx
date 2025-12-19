import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ImageModal from '../../ImageModal';

const RerGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20repetition/0FCCC144-5BD4-4018-A581-D7342DA7BA76_1_105_c.jpeg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20repetition/1CDD362C-98B3-4103-8883-1C4373DDAB76_1_105_c.jpeg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20repetition/1ED8B949-5E18-4165-86DC-8D30BE2AB2DF_1_105_c.jpeg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20repetition/3D5C4A4E-F39D-49D0-8A45-B4D3A1386E40_1_105_c.jpeg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20repetition/46339E70-77E1-4BF7-BC16-B10B57735AE5_1_105_c.jpeg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20repetition/6B9D0976-7979-40EA-87A2-5AB9EB1F7D23_1_105_c.jpeg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20repetition/E1B8036E-4ABE-4760-BBD4-FF1C36F34F75_1_105_c.jpeg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20repetition/IMG_0481.jpg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20repetition/IMG_0577.jpg",
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

export default RerGallery;