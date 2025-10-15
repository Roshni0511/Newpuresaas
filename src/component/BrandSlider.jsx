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
    <section
      style={{ background: "#f9f9f9", paddingTop: "60px", paddingBottom: "90px", paddingRight:'15px', paddingLeft:'15px' }}
      className="wow animate__animated animate__fadeInUp"
    >
      <div className="opacity-100 filter-none rotate-0 scale-100 text-center" style={{ marginTop: "60px" }}>
        {/* Badge */}
        <span
          className="badge text-dark mb-3"
          style={{ backgroundColor: "#ffe16bff", fontSize: "1rem", padding: "0.5rem 1rem" }}
        >
          Features
        </span>

        {/* Heading */}
        <h2 style={{ fontSize: "2rem", opacity: 1, filter: "blur(0px)", marginBottom: "20px", fontWeight: "700", color: "#2c3e50", textAlign:"justify"}}>
          Enhance your productivity effortlessly with <br />
          over 50 integrations.
        </h2>

        {/* Description */}
        <span style={{textAlign:"justify"}}> 
          Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like nothing.
        </span>

        <div style={{ marginTop: "40px" }}>
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
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;
