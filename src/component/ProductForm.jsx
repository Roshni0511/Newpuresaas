import React, { useState } from 'react'
import '../assets/css/Productform.css'
export default function ProductForm() {
       const [showModal, setShowModal] = useState(false);
      const [closing, setClosing] = useState(false);
    
      const handleOpen = () => {
        setClosing(false);
        setShowModal(true);
      };
    
      const handleClose = () => {
        setClosing(true);
        setTimeout(() => setShowModal(false), 300); // Wait for animation to finish
      };
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
        handleClose();
      };
  return (
    <div>
      <div className="productform wow animate__animated animate__fadeInUp">
  <div className="hero-section">
    <img
      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
      alt="Office ERP"
      className="hero-image"
    />
    <div className="hero-overlay">
      <h2>Book a Demo</h2>
      <p>
        Thank you for your interest in Puresaas CRM. We're here to help.
        Just fill in the form below, and we'll have our best product expert
        reach out to you.
      </p>
      <button className="open-modal-btn" onClick={handleOpen}>
        Book a Demo
      </button>
    </div>
  </div>

  {/* Modal */}
  {showModal && (
    <div className={`modal-overlay ${closing ? "fade-out" : "fade-in"}`}>
      <div className={`modal-content ${closing ? "slide-down" : "slide-up"}`}>
        <span className="close-btn" onClick={handleClose}>
          &times;
        </span>
        <h3>Request a Free Demo</h3>
        <form onSubmit={handleFormSubmit}>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Mobile Number</label>
          <input type="tel" placeholder="Enter your mobile number" required />

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  )}
</div>
    </div>
  )
}
