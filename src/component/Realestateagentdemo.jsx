import React from "react";
import { motion } from "framer-motion";
import '../assets/css/Realestateagentdemo.css';
import { Building2, CalendarDays, Mail, Phone, User } from "lucide-react";

const RealEstateAgentDemo = () => {
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

        <form className="demo-form">
          <div className="input-group">
            <User className="input-icon" />
            <input type="text" placeholder="Full Name" />
          </div>

          <div className="input-group">
            <Mail className="input-icon" />
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="input-group">
            <Phone className="input-icon" />
            <input type="tel" placeholder="Phone Number" />
          </div>

          <div className="input-group">
            <CalendarDays className="input-icon" />
            <input type="date" />
          </div>

          <div className="input-group">
            <textarea rows="3" placeholder="Tell us about your business or team size..."></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="cta-button"
          >
            🚀 Schedule My Demo
          </motion.button>
        </form>

        <div className="trust-text">
          <p>💼 Trusted by 500+ Real Estate Agencies across India.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default RealEstateAgentDemo;
