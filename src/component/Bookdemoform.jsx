import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Bookdemoform = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    alert('Demo booked successfully!');
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="cta-section wow animate__animated animate__fadeInUp">
        <div className="cta-content-left">
          <span className="cta-tag">Finance</span>
          <h1 className="cta-title">Ready to transform your business with PureSaas</h1>
          <p className="cta-description">
            Start your free trial today and see your ideas come to life easily and creatively.
          </p>
        </div>

        <div className="cta-form-right">
          <div className="cta-form">
            <button 
              type="button" 
              className="cta-button"
              onClick={() => setIsModalOpen(true)}
            >
              Get started!
            </button>
          </div>

          <div className="cta-features">
            <div className="feature-item">
              <i className="fa-solid fa-circle-check"></i>
              <span>No credit card required</span>
            </div>
            <div className="feature-item">
              <i className="fa-solid fa-circle-check"></i>
              <span>7-Day free trial</span>
            </div>
          </div>
        </div>
      </section>
 
      {/* Modal */}
      {isModalOpen && (
        <div className="buildermod-overlay">
          <div className="buildermod-container">
            <button 
              className="buildermod-close-btn" 
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="buildermod-title">Book a Demo</h2>
            <form className="buildermod-form" onSubmit={handleFormSubmit}>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone" required />
              <input type="date" required />
              <input type="time" required />
              <textarea placeholder="Short Description" rows={3}></textarea>
              <button type="submit" className="buildermod-submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Bookdemoform;
