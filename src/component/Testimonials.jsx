import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "John Doe",
    designation: "CEO, Company A",
    image: "https://via.placeholder.com/80",
    message: "This service is amazing! Highly recommend to everyone.",
  },
  {
    name: "Jane Smith",
    designation: "Marketing Head, Company B",
    image: "https://via.placeholder.com/80",
    message: "Truly exceptional experience. The team is very professional.",
  },
  {
    name: "Michael Lee",
    designation: "Product Manager, Company C",
    image: "https://via.placeholder.com/80",
    message: "Quality and dedication at its best. I am impressed!",
  },
  {
    name: "Sara Khan",
    designation: "Designer, Company D",
    image: "https://via.placeholder.com/80",
    message: "Highly creative solutions and excellent support!",
  },
];

const TestimonialSlider = () => {
  return (
    <div
      style={{
        padding: "50px",
        background: "#f9f9f9",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={40} // Increased spacing between cards
        slidesPerView={1} // Default view for mobile
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1.5 }, // Wider cards
          1024: { slidesPerView: 2 },   // Only 2 cards, bigger width
          1280: { slidesPerView: 2.5 }, // Adjust as needed
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                background: "#fff",
                borderRadius: "15px",
                padding: "30px", // More padding makes it visually bigger
                textAlign: "center",
                width: "100%", // Ensure card fills SwiperSlide width
              }}
            >
              <img
                src={t.image}
                alt={t.name}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  marginBottom: "15px",
                }}
              />
              <h3 style={{ margin: "10px 0", fontSize: "1.2rem" }}>{t.name}</h3>
              <p style={{ fontStyle: "italic", color: "#555" }}>
                {t.designation}
              </p>
              <p style={{ marginTop: "15px", fontSize: "1rem" }}>
                "{t.message}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
