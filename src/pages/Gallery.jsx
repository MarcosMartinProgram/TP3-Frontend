import React, { useState, useEffect } from "react";
import "../styles/Gallery.css";

export default function Gallery() {
  const images = [
    { id: 1, src: "/src/assets/img/movie01.jpg", title: "The Godfather" },
    { id: 2, src: "/src/assets/img/movie02.jpg", title: "Forrest Gump" },
    { id: 3, src: "/src/assets/img/movie03.jpg", title: "Jurassic Park" },
    { id: 4, src: "/src/assets/img/movie04.jpg", title: "Pulp Fiction" },
    { id: 5, src: "/src/assets/img/movie05.jpg", title: "The Dark Knight" },
    { id: 6, src: "/src/assets/img/movie06.jpg", title: "The Shawshank Redemption" },
  ];

  const [currentIndex, setCurrentIndex] = useState(null);
  const [zoom, setZoom] = useState(false);

  // ⌨️ Manejo del teclado
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setCurrentIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  const handlePrev = () => {
    setZoom(false);
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : images.length - 1
    );
  };

  const handleNext = () => {
    setZoom(false);
    setCurrentIndex((prev) =>
      prev < images.length - 1 ? prev + 1 : 0
    );
  };

  const toggleZoom = () => {
    setZoom((z) => !z);
  };

  return (
    <div className="gallery-container">
      <h2>🎞️ Galería de Cine Clásico</h2>
      <p style={{ color: "#ccc" }}>
        Haz clic en una imagen para ampliarla. Usa ← → o ESC para navegar.
      </p>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={img.id}
            className="gallery-item"
            onClick={() => setCurrentIndex(index)}
          >
            <img src={img.src} alt={img.title} loading="lazy" />
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <div className="lightbox" onClick={() => setCurrentIndex(null)}>
          <div
            className={`lightbox-content ${zoom ? "zoomed" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className={`lightbox-image ${zoom ? "zoomed" : ""}`}
              onClick={toggleZoom}
            />
            <p className="lightbox-caption">
              {images[currentIndex].title}
            </p>

            <button className="lightbox-close" onClick={() => setCurrentIndex(null)}>
              ✖
            </button>

            <button className="lightbox-prev" onClick={handlePrev}>
              ←
            </button>
            <button className="lightbox-next" onClick={handleNext}>
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
