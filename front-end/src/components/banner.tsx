import React, { useState, useEffect, useMemo } from "react";
import "../styles/global.css";
import "../styles/componentCss/banner.css";
import arrow from "../styles/img/left-arrow.png";
import banner_1 from "../styles/img/banner-img/banner-1.jpg";
import banner_2 from "../styles/img/banner-img/banner-2.jpg";
import banner_3 from "../styles/img/banner-img/banner-3.jpg";
import banner_4 from "../styles/img/banner-img/banner-4.jpg";

const Banner: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<string | undefined>(
    undefined
  );

  const images = useMemo(() => [banner_1, banner_2, banner_3, banner_4], []);

  const totalImages = images.length;
  let currentIndex = images.indexOf(currentImage || "");

  const handlePrevImage = () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    setCurrentImage(images[currentIndex]);
  };

  const handleNextImage = () => {
    currentIndex = (currentIndex + 1) % totalImages;
    setCurrentImage(images[currentIndex]);
  };

  useEffect(() => {
    setCurrentImage(images[0]);
  }, [images]);

  return (
    <div className="banner-container">
      <div className="banner-frame">
        <div className="banner-navigation-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`banner-nav ${
                currentIndex === index ? "banner-nav-active" : ""
              }`}
              style={{ width: currentIndex === index ? "60px" : "20px" }}
            />
          ))}
        </div>
        <div className="arrow-group">
          <div className="left-arrow-frame" onClick={handlePrevImage}>
            <img className="left-arrow" src={arrow} alt="Left-arrow" />
          </div>
          <div className="right-arrow-frame" onClick={handleNextImage}>
            <img className="right-arrow" src={arrow} alt="Right-arrow" />
          </div>
        </div>
      </div>
      <div className="banner-img-container">
        {currentImage && (
          <img className="banner-img" src={currentImage} alt="BannerImage" />
        )}
      </div>
    </div>
  );
};

export default Banner;
