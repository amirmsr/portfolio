import React, { useState, useEffect } from "react";

// Interface pour les données d'image
interface ImageDataItem {
  url: string;
  title: string;
  price: string;
  description: string;
}

// Données des images avec informations
const imageData: ImageDataItem[] = [
  {
    url: "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/merch/Group-80.webp",
    title: "Paysage du désert",
    price: "150€",
    description: "Vue panoramique sur les dunes"
  },
  {
    url: "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/merch/Group-81.webp",
    title: "Médina de Marrakech",
    price: "120€",
    description: "Scène de vie locale authentique"
  },
  {
    url: "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/merch/Group-82.webp",
    title: "Architecture traditionnelle",
    price: "140€",
    description: "Détails architecturaux marocains"
  },
  {
    url: "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/merch/Group-83.webp",
    title: "Coucher de soleil",
    price: "160€",
    description: "Lumière dorée du Maroc"
  },
  {
    url: "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/merch/Group-84.webp",
    title: "Souk traditionnel",
    price: "130€",
    description: "Couleurs et ambiance des marchés"
  }
];

// Props pour le composant ImageModal
interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        cursor: 'pointer'
      }}
      onClick={onClose}
    >
      <img 
        src={imageUrl} 
        alt="Full size" 
        style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }}
      />
    </div>
  );
};

const MerchGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<ImageDataItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleImageClick = (imageUrl: string): void => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = (): void => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const loadImages = async (): Promise<void> => {
      const imagePromises = imageData.map((item) => {
        return new Promise<ImageDataItem>((resolve, reject) => {
          const img = new Image();
          img.src = item.url;
          img.onload = () => resolve(item);
          img.onerror = () => reject(item);
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

  const Loader: React.FC = () => (
    <div style={{ textAlign: 'center', margin: '3rem 0' }}>
      <div style={{
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #0d0d0d',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        animation: 'spin 1s linear infinite',
        margin: '0 auto'
      }}></div>
      <p style={{ marginTop: '1rem' }}>Chargement des images...</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );

  return (
    <main style={{
      maxWidth: "1200px", 
      margin: "3rem auto",
      padding: "0 15px",
      textAlign: "center"
    }}>
      <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>MERCH</p>
    {/*   <p style={{ color: "#686868", marginBottom: "0.25rem" }}>Des coques d'iphones </p>
      <p style={{ color: "#686868", marginBottom: "3rem" }}>2023 - Maroc</p> */}

      {isLoading ? (
        <Loader />
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
          textAlign: "left"
        }}>
          {loadedImages.map((item, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                overflow: "hidden",
                transition: "all 0.3s ease",
                cursor: "pointer",
                transform: hoveredCard === index ? "translateY(-5px)" : "translateY(0)",
                boxShadow: hoveredCard === index 
                  ? "0 8px 16px rgba(0,0,0,0.15)" 
                  : "0 2px 4px rgba(0,0,0,0.05)"
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div 
                onClick={() => handleImageClick(item.url)}
                style={{ 
                  overflow: "hidden", 
                  height: "220px",
                  backgroundColor: "#f5f5f5"
                }}
              >
                <img 
                  src={item.url} 
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                    transform: hoveredCard === index ? "scale(1.05)" : "scale(1)"
                  }}
                  loading="lazy"
                />
              </div>
              <div style={{ padding: "1rem" }}>
                <h3 style={{ 
                  fontSize: "1.1rem", 
                  fontWeight: "600",
                  margin: "0 0 0.5rem 0",
                  color: "#2c3e50"
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  fontSize: "0.9rem", 
                  color: "#686868",
                  margin: "0 0 0.75rem 0",
                  lineHeight: "1.4"
                }}>
                  {item.description}
                </p>
                <div style={{ 
                  fontSize: "1.2rem", 
                  fontWeight: "bold",
                  color: "#2c3e50"
                }}>
                  {item.price}
                </div>
              </div>
            </div>
          ))}
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

export default MerchGallery;