import React, { useState } from "react";
import { motion } from "framer-motion";
import '../assets/css/Realestateagentdemo.css';
import { Building2, CalendarDays, Mail, Phone, User } from "lucide-react";

const RealEstateAgentDemo = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000); // 2 seconds
  };

  const closePopup = () => setSuccess(false);

  return (
    <section className="demo-section">
      <div className="gradient-blob top-left"></div>
      <div className="gradient-blob bottom-right"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="demo-card"
      >
        <div className="demo-header">
          <div className="demo-badge">
            <Building2 className="icon" />
            <span className="badge-text">PureSaas CRM</span>
          </div>
          <h1 className="demo-title">
            Book a Free <span className="highlight">CRM Demo</span>
          </h1>
          <p className="demo-subtitle">
            See how our Real Estate CRM can grow your sales and manage leads smarter.
          </p>
        </div>

        <form className="demo-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <User className="input-icon" />
            <input type="text" placeholder="Full Name" required />
          </div>

          <div className="input-group">
            <Mail className="input-icon" />
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="input-group">
            <Phone className="input-icon" />
            <input type="tel" placeholder="Phone Number" required />
          </div>

          <div className="input-group">
            <CalendarDays className="input-icon" />
            <input type="date" required />
          </div>

          <div className="input-group">
            <textarea rows="3" placeholder="Tell us about your business or team size..." required></textarea>
          </div>

          <motion.button
            type="submit"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            disabled={loading}
          >
            {loading ? "Scheduling..." : "🚀 Schedule My Demo"}
          </motion.button>
        </form>

        <div className="trust-text">
          <p>💼 Trusted by 500+ Real Estate Agencies across India.</p>
        </div>
      </motion.div>

      {/* Success Popup */}
      {success && (
        <div className="popup-overlay">
          <div className="popup-card">
            <h2>🎉 Success!</h2>
            <p>Your Demo Scheduled Successfully.</p>
            <button className="cta-button" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default RealEstateAgentDemo;
