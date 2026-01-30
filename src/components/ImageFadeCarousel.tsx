import { useState, useEffect, useMemo } from "react";
import "./ImageFadeCarousel.css";

interface Props {
  images?: string[];
  onlyPropImages?: boolean;
  interval?: number;
}
// You can set images directly via props or let the component load all images from the folder. The folder has to be hardcoded below.
const ImageFadeCarousel: React.FC<Props> = ({ images = [], onlyPropImages = false, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // import all images from the specified folder
  const folderImages = useMemo(() => {
    // Skip loading if onlyPropImages is true and prop images are provided 
    if (onlyPropImages = true && images.length > 0) return []; 

    const imported = import.meta.glob(
      "../assets/about_img_carousel/*.{jpg,jpeg,png,webp}",//set path to your folder
      { eager: true }
    ) as Record<string, { default: string }>;

    return Object.values(imported).map((m) => m.default);
  }, [images]);

  // Combine folder images + prop images
  const finalImages = useMemo(() => {
    const combined = onlyPropImages ? images : [...folderImages, ...images];
    return Array.from(new Set(combined));
  }, [folderImages, images]);

  useEffect(() => {
    if (finalImages.length === 0) return;

    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % finalImages.length);
    }, interval);

    return () => clearInterval(id);
  }, [finalImages, interval]);

  if (finalImages.length === 0) return null;// hide component if no images available

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-wrapper">
      {finalImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`carousel-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}

      {/* Dots Indicator */}
      <div className="carousel-dots">
        {finalImages.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageFadeCarousel;
