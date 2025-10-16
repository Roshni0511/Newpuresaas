import React, { useState, useEffect } from "react";
import "../assets/css/Review.css";

const testimonials = [
  {
    id: 1,
    quote:
      "From onboarding to daily use, the experience has been smooth and intuitive. Our team collaboration has improved significantly thanks to this platform.",
    author: "Lucas Meyer",
    title: "Project Coordinator",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    quote:
      "The platform's intuitive interface and powerful features have revolutionized our workflow. Customer support has been outstanding, always ready to help.",
    author: "Sarah Johnson",
    title: "Marketing Director",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    quote:
      "As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly made a difference.",
    author: "Michael Chen",
    title: "Tech Lead",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    quote:
      "The platform's intuitive interface and powerful features have revolutionized our workflow. Customer support has been outstanding, always ready to help.",
    author: "Sophia Patel",
    title: "Operations Manager",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    quote:
      "Your product has improved our data visibility and helped us make faster, better decisions. Truly transformative for our business.",
    author: "James Wilson",
    title: "Finance Head",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

// ✅ Clone first few for seamless looping
const cardsToShow = 4; // 4 visible per view in desktop CSS
const clonedCards = testimonials.slice(0, cardsToShow);
const loopedTestimonials = [...testimonials, ...clonedCards];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const total = testimonials.length;

  // Auto-slide logic
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setTransition(true);
      setCurrentIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Seamless loop reset logic
  useEffect(() => {
    if (currentIndex === total) {
      const timer = setTimeout(() => {
        setTransition(false);
        setCurrentIndex(0);
      }, 400); // transition duration match
      return () => clearTimeout(timer);
    } else {
      setTransition(true);
    }
  }, [currentIndex, total]);

  return (
    <div className="reviewswc">
      <div className="testimonial-section wow animate__animated animate__fadeInUp">
        {/* Header */}
        <div className="testimonial-header">
          <span className="reviews-tag">Reviews</span>
          <h2 className="main-title">
            Hear from our customers about their experiences with us
          </h2>
        </div>

        {/* Slider */}
        <div
          className="testimonial-slider-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="testimonial-slider-track"
            style={{
              transform: `translateX(-${(100 / cardsToShow) * currentIndex}%)`,
              transition: transition ? "transform 0.4s ease-in-out" : "none",
              width: `${(loopedTestimonials.length / cardsToShow) * 100}%`,
            }}
          >
            {loopedTestimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author-info">
                  <img src={t.avatar} alt={t.author} className="author-avatar" />
                  <div>
                    <p className="author-name">{t.author}</p>
                    <p className="author-title">{t.title}</p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="hover-overlay">
                  <div className="rating-content">
                    <span className="rating-number">4.7</span>
                    <div className="trustpilot-logo">
                      Trustpilot
                      <div className="stars">★★★★★</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
