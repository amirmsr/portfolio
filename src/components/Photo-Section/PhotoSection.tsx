import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20projet%20/Group%2059-min-vAswo4N0tTiOm2nSTJcNNiCentvzXS.png",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20projet%20/Group%2057-min-6nQilHxzD7dQLYLXS5p1JtFda5M9gR.png",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20projet%20/Group-78.webp",
  "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/section%20projet%20/Group-79.webp",
];

const PhotoSection: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

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
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading images:", error);
        setImagesLoaded(true);
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
      <p>Chargement des projets...</p>
    </div>
  );

  // If images are not loaded, show loader
  if (!imagesLoaded) {
    return (
      <main className="container mt-5">
        <div
          style={{
            maxWidth: "1100px",
            marginLeft: "0",
            marginRight: "0",
            margin: "0 auto",
          }}
        >
          <Loader />
        </div>
      </main>
    );
  }

  return (
    <main className="container mt-5">
      <div
        style={{
          maxWidth: "1100px",
          marginLeft: "0",
          marginRight: "0",
          margin: "0 auto",
        }}
      >
        <div style={{ paddingBottom: "20px" }}>
          <p style={{ fontSize: "1.7rem" }}>projet photographique</p>
        </div>
        <div className="link-container">
          <div className="link-item">
            <Link className="link-content" to={"projet-rer"}>
              <div>
                <div className="link-text">01</div>
              </div>
              <div className="image-container">
                <img
                  src={loadedImages[0]}
                  alt="RER Project"
                  className="link-image"
                  loading="lazy"
                />
              </div>
              <div className="link-text">SOUTERRAIN</div>
            </Link>
          </div>
          <div className="link-item">
            <Link className="link-content" to={"projet-maroc"}>
              <div className="link-text">02</div>
              <div className="image-container">
                <img
                  src={loadedImages[1]}
                  alt="Maroc Project"
                  className="link-image"
                  loading="lazy"
                />
              </div>
              <div className="link-text">MAROC</div>
            </Link>
          </div>
          <div className="link-item">
            <Link className="link-content" to={"projet-asie"}>
              <div className="link-text">03</div>
              <div className="image-container">
                <img
                  src={loadedImages[2]}
                  alt="Asie Project"
                  className="link-image"
                  loading="lazy"
                />
              </div>
              <div className="link-text">ASIE</div>
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: "1100px",
          marginLeft: "0",
          marginRight: "0",
          margin: "0 auto",
          marginTop: "80px",
        }}
      >
        <div style={{ paddingBottom: "20px" }}>
          <p style={{ fontSize: "1.7rem" }}>projet graphique</p>
        </div>
        <div className="link-container">
          <div className="link-item">
            <Link className="link-content" to={"formes-couleurs"}>
              <div>
                <div className="link-text">01</div>
              </div>
              <div className="image-container">
                <img
                  src={loadedImages[3]}
                  alt="Formes-Couleurs Project"
                  className="link-image"
                  loading="lazy"
                />
              </div>
              <div className="link-text">FORMES ET COULEURS</div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PhotoSection;
