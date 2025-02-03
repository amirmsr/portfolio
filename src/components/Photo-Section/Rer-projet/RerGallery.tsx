import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ImageModal from '../../ImageModal';

const RerGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const images = [
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0039-min-gLjxvFs5oKpU8l8pa0GYWf2DLjeX5X.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0033-min-yC0UZsgftnaXaPCsjwQG6SkJm2RUm9.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0030V2-min-kPWEVGcD9PZiT2dAEF87LItHLSHAGB.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0070-min-iO7nBJWbGa9tH9oHuRbuqX7LpwGz9L.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0057-min-qd8Ogr9K2o4klvDseDRJj9qgDKKxlG.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0044-min-0qVHS4liX6b8xIwqcwWz5YBmAtza1q.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0089-min-88Y1d4NZLyQf3r7enqwSkl1zbRDAf8.JPG",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0043-min-jwYbvBH3kyLW56YpGrt73xKuedg7dG.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN2641%202-min-oEp1ltIBowqGJMKwSnIb6yDxLCMmE8.JPG",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0038-min-DFCl6XAo3Qr0O7lHGxZbvrrq8ViWb6.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0031-min-nV8HkIzClYp9Wl0VHGGQsFdulVKlzl.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0060-min-DzYQM9IGGlbbfrP2Hnp7vndKSOCFGJ.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0026V2-min-k69lbuM59czARVqWHzxcM5dBz3XZ1A.webp"
  ];

  return (
    <main className="container text-center mt-5" style={{ paddingTop: "50px" }}>
      <p style={{ fontSize: "1.3rem" }}>RER ET STATIONS -2025-</p>
      <br />
      <br />
      <div className="gallery-container">
        <Row>
          {images.map((imageUrl, index) => (
            <Col key={index} className="col" xs={12} sm={6} md={4}>
              <img
                src={imageUrl}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                  marginBottom: "20px"
                }}
                className="animate__animated animate__fadeIn"
                onClick={() => handleImageClick(imageUrl)}
              />
            </Col>
          ))}
        </Row>
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={handleCloseModal}
        imageUrl={selectedImage || ''}
      />
    </main>
  );
};

export default RerGallery;