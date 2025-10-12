import React from "react";

const BrandSlider = () => {
  const icons = [
    { id: 1, src: "/Image/behance.png" },
    { id: 2, src: "/Image/communication.png" },
    { id: 3, src: "/Image/google-play.png" },
    { id: 4, src: "/Image/instagram.png" },
    { id: 5, src: "/Image/reddit.png" },
    { id: 6, src: "/Image/snapchat.png" },
    { id: 7, src: "/Image/telegram.png" },
    { id: 8, src: "/Image/twitter.png" },
    { id: 9, src: "/Image/whatsapp.png" },
    { id: 10, src: "/Image/windows.png" },
    { id: 11, src: "/Image/youtube.png" },
    { id: 12, src: "/Image/figma.png" },
    { id: 13, src: "/Image/slack.png" },
  ];

  // Duplicate for seamless infinite scroll
  const duplicatedIcons = [...icons, ...icons];

  return (
    <div className="slider-container">
      <div className="fade-overlay left"></div>
      <div className="fade-overlay right"></div>

      <div className="slider-track">
        {duplicatedIcons.map((icon, index) => (
          <div key={index} className="slide">
            <img src={icon.src} alt={`Icon ${icon.id}`} />
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default BrandSlider;
