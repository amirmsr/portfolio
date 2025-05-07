import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ImageModal from '../../ImageModal';

const RerGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0044-min-0qVHS4liX6b8xIwqcwWz5YBmAtza1q.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0039-min-gLjxvFs5oKpU8l8pa0GYWf2DLjeX5X.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/6C83E447-BA4E-45F7-9501-53A16366B6AF_1_105_c-UPyl5TEBveSeu2rkCYaxu5npKvYEGE.jpeg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/EB2BBD48-2A4A-4C4F-BAC2-2B7C2D355F20-Iflqy2HZndxLilQUfhjORWzgtxSVBr.jpeg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/AB82EC5D-44A1-41FF-A8DE-8D4EA40D8C92-D3meYV4suwPdBK3Vmeq27S06w8Ecf9.jpeg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/B04EFDB4-E99A-4EBD-990B-BEA30432A854-slfjBnbhILipVg25yeKRzmF3lj8hiT.jpeg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/E609E966-7643-4502-B7E6-79CCC21728B1-9ozsS5rL2aiFa6ylAKeTnWKQbB73tr.jpeg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0089-min-88Y1d4NZLyQf3r7enqwSkl1zbRDAf8.JPG",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/P1090494-min-vXN64E8xNYorse9iqPWOyMthSJTKeL.jpg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0031-min-nV8HkIzClYp9Wl0VHGGQsFdulVKlzl.webp",
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