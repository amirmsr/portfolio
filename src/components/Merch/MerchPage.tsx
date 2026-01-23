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
    title: "[1]",
    price: "0",
    description: "Vue panoramique sur les dunes",
  },
  {
    url: "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/merch/Group-81.webp",
    title: "[2]",
    price: "0",
    description: "Scène de vie locale authentique",
  },
  {
    url: "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/merch/Group-82.webp",
    title: "[3]",
    price: "0",
    description: "Détails architecturaux marocains",
  },
  {
    url: "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/merch/Group-83.webp",
    title: "[4]",
    price: "0",
    description: "Lumière dorée du Maroc",
  },
  {
    url: "https://gzpauqtc6hrhhsyz.public.blob.vercel-storage.com/merch/Group-84.webp",
    title: "[5]",
    price: "0",
    description: "Couleurs et ambiance des marchés",
  },
];

// Props pour le composant ImageModal
interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        cursor: "pointer",
      }}
      onClick={onClose}
    >
      <img
        src={imageUrl}
        alt="Full size"
        style={{ maxWidth: "90%", maxHeight: "90%", objectFit: "contain" }}
      />
    </div>
  );
};

// Props pour le composant DetailModal
interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ImageDataItem | null;
}

const DetailModal: React.FC<DetailModalProps> = ({ isOpen, onClose, item }) => {
  if (!isOpen || !item) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9998,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "90%",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          cursor: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <p>Me contacter par mail ou sur instagram</p>
        <p>Mail : amirmansour135@gmail.com</p>
        <p>Insragram : am.r_msr</p>
        <button
          onClick={onClose}
          style={{
            backgroundColor: "#0d0d0d",
            color: "#fff",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "1rem",
          }}
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

const MerchGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<ImageDataItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<ImageDataItem | null>(null);

  const handleImageClick = (imageUrl: string): void => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = (): void => {
    setSelectedImage(null);
  };

  const handleDetailClick = (item: ImageDataItem): void => {
    setSelectedItem(item);
  };

  const handleCloseDetailModal = (): void => {
    setSelectedItem(null);
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
        console.error("Error loading images:", error);
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  const Loader: React.FC = () => (
    <div style={{ textAlign: "center", margin: "3rem 0" }}>
      <div
        style={{
          border: "4px solid #f3f3f3",
          borderTop: "4px solid #0d0d0d",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          animation: "spin 1s linear infinite",
          margin: "0 auto",
        }}
      ></div>
      <p style={{ marginTop: "1rem" }}>Chargement des images...</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );

  return (
    <div
      className="about-wrapper"
      style={{
        maxWidth: "1100px",
        marginLeft: "0",
        marginRight: "0",
        margin: "0 auto",
      }}
    >
      <main className="container mt-5">
        <div style={{ paddingBottom: "50px" }}>
          <p style={{ fontSize: "1.7rem" }}>merch</p>
          <p style={{ color: "#686868", marginBottom: "0.25rem" }}>
            Retrouvez mes photos sur vos coques d'iphones
          </p>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
              textAlign: "left",
            }}
          >
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
                  transform:
                    hoveredCard === index
                      ? "translateY(-5px)"
                      : "translateY(0)",
                  boxShadow:
                    hoveredCard === index
                      ? "0 8px 16px rgba(0,0,0,0.15)"
                      : "0 2px 4px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  onClick={() => handleImageClick(item.url)}
                  style={{
                    overflow: "hidden",
                    height: "220px",
                    backgroundColor: "#f5f5f5",
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
                      transform:
                        hoveredCard === index ? "scale(1.05)" : "scale(1)",
                    }}
                    loading="lazy"
                  />
                </div>
                <div style={{ padding: "1rem" }}>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      margin: "0 0 0.5rem 0",
                      color: "#2c3e50",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#686868",
                      margin: "0 0 0.75rem 0",
                      lineHeight: "1.4",
                    }}
                  >
                  </p>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      color: "#2c3e50",
                    }}
                  >
                  </div>
                  <button
                    onClick={() => handleDetailClick(item)}
                    style={{
                      backgroundColor: "#fff",
                      color: "#0d0d0d",
                      border: "1px solid #0d0d0d",
                      padding: "0.5rem 1rem",
                      borderRadius: "4px",
                      cursor: "pointer",
                      marginTop: "1rem",
                      width: "100%",
                    }}
                  >
                    Détail
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <ImageModal
          isOpen={!!selectedImage}
          onClose={handleCloseModal}
          imageUrl={selectedImage || ""}
        />
        <DetailModal
          isOpen={!!selectedItem}
          onClose={handleCloseDetailModal}
          item={selectedItem}
        />
      </main>
    </div>
  );
};

export default MerchGallery;
