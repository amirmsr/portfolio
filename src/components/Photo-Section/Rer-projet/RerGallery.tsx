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
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0044-min-0qVHS4liX6b8xIwqcwWz5YBmAtza1q.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0039-min-gLjxvFs5oKpU8l8pa0GYWf2DLjeX5X.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/EB2BBD48-2A4A-4C4F-BAC2-2B7C2D355F20-Iflqy2HZndxLilQUfhjORWzgtxSVBr.jpeg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN2655-min-O6ocmWYBvX9XdTtXG5ZpKEo7CLH6ku.jpg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/5914DB1C-F1F6-4230-8E44-C39117DE8CB9-oV5VaqImHV4TRFX1kVOf25p14gvWRL.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/405419D5-6AB0-41AF-8C3F-85C7FF8080B7-7KhvpKIYBcCmzzAmwqP7xbb7Cvytpn.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/AB82EC5D-44A1-41FF-A8DE-8D4EA40D8C92-D3meYV4suwPdBK3Vmeq27S06w8Ecf9.jpeg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0030V2-min-kPWEVGcD9PZiT2dAEF87LItHLSHAGB.webp",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/B04EFDB4-E99A-4EBD-990B-BEA30432A854-slfjBnbhILipVg25yeKRzmF3lj8hiT.jpeg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20maroc%20galery/E609E966-7643-4502-B7E6-79CCC21728B1-9ozsS5rL2aiFa6ylAKeTnWKQbB73tr.jpeg",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0089-min-88Y1d4NZLyQf3r7enqwSkl1zbRDAf8.JPG",
    "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20photo%20rer%20galery/DSCN0031-min-nV8HkIzClYp9Wl0VHGGQsFdulVKlzl.webp",
  ];

  return (
    <main className="container text-center mt-5" style={{maxWidth:"1100px", marginLeft:"0" , marginRight:"0", margin:"0 auto"}}>
      <p style={{ fontSize: "1rem" }}>SOUTERRAIN</p>
      <p style={{color:"#686868"}}>Ensemble de photos prises dans les stations de RER</p>
      <p style={{color:"#686868"}}>2025 - Paris</p>
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