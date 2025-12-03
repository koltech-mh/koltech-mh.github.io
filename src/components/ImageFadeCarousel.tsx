import React, { useState, useEffect } from "react";
import "./ImageFadeCarousel.css"; // We'll add styles here

const images = [
  "https://lh3.googleusercontent.com/p/AF1QipMioeeQKzmKagGRVyEnj0clFD2Qc-8xKC1DBMz3=s680-w680-h510",
  "https://d16ohktstcjvly.cloudfront.net/image/513891251684/image_o8jat0e2ch6undk9vt2dsi286f/-FJPG",
];

const ImageFadeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-wrapper">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`carousel-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default ImageFadeCarousel;