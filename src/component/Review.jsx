import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/Review.css'

const testimonials = [
    {
        id: 1,
        quote: "From onboarding to daily use, the experience has been smooth and intuitive. Our team collaboration has improved significantly thanks to this platform.",
        author: "Lucas Meyer",
        title: "Project Coordinator",
        avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
        id: 2,
        quote: "The platform's intuitive interface and powerful features have revolutionized our workflow. Customer support has been outstanding, always ready to help.",
        author: "Sarah Johnson",
        title: "Marketing Director",
        avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
        id: 3,
        quote: "As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly made a difference.",
        author: "Michael Chen",
        title: "Tech Lead",
        avatar: "https://i.pravatar.cc/150?img=3"
    },
    // ... add more testimonials if needed ...
];

// ----------------------------------------------------
// NEW LOGIC: Clone the first 3 cards for the infinite loop illusion
const cardsToShow = 3; 
const clonedCards = testimonials.slice(0, cardsToShow);
const loopedTestimonials = [...testimonials, ...clonedCards];
// ----------------------------------------------------


const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Tracks the index of the original testimonials
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const totalOriginalCards = testimonials.length;

    // Auto-slide effect
    useEffect(() => {
        let interval;
        if (!isHovered) {
            interval = setInterval(() => {
                // Set transition flag to true before changing index
                setIsTransitioning(true);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, 5000); // 5 seconds
        }

        return () => clearInterval(interval);
    }, [isHovered]);

    // Loop correction effect
    useEffect(() => {
        // This runs AFTER the transition for the last cloned card finishes (500ms + buffer)
        if (currentIndex >= totalOriginalCards && isTransitioning) {
            // After the slide to the first cloned card, instantly jump back to the original first card
            const timeout = setTimeout(() => {
                // 1. Temporarily disable CSS transition
                setIsTransitioning(false);
                // 2. Jump back to the index 0 (the original first card)
                setCurrentIndex(0);
            }, 500); // Wait slightly longer than the CSS transition time (0.4s)
            
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, totalOriginalCards, isTransitioning]);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Calculate transform for the slider
    const getTransformValue = () => {
        const cardWidthPercentage = 100 / cardsToShow; // e.g., 33.33%
        return `translateX(-${currentIndex * cardWidthPercentage}%)`;
    };

    return (
        <div className="testimonial-section wow animate__animated animate__fadeInUp">
            {/* ... (Header remains the same) ... */}
            <div className="testimonial-header">
                <span className="reviews-tag">Reviews</span>
                <h2 className="main-title">Hear from our customers about their experiences with us</h2>
            </div>

            <div
                className="testimonial-slider-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className="testimonial-slider-track"
                    style={{ 
                        transform: getTransformValue(), 
                        // Conditionally apply transition for instant jump back
                        transition: isTransitioning ? 'transform 0.4s ease-in-out' : 'none' 
                    }}
                >
                    {/* Map over the Looped array */}
                    {loopedTestimonials.map((testimonial, index) => (
                        <div
                            key={`${testimonial.id}-${index}`} // Use index in key to handle clones
                            className="testimonial-card"
                        >
                            {/* ... (Card content remains the same) ... */}
                            <p className="testimonial-quote">"{testimonial.quote}"</p>
                            <div className="testimonial-author-info">
                                <img src={testimonial.avatar} alt={testimonial.author} className="author-avatar" />
                                <div>
                                    <p className="author-name">{testimonial.author}</p>
                                    <p className="author-title">{testimonial.title}</p>
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
    );
};

export default TestimonialSlider;