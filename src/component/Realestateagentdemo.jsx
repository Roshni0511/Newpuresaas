import React, { useState } from "react";
import { motion } from "framer-motion";
import '../assets/css/Realestateagentdemo.css';
import { Building2, CalendarDays, Mail, Phone, User } from "lucide-react";

const RealEstateAgentDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Regex patterns
  const nameRegex = /^[A-Za-z\s]{2,50}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\d{10}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent extra characters in phone
    if (name === "phone") {
      if (/^\d*$/.test(value) && value.length <= 10) {
        setFormData({ ...formData, [name]: value });
      }
    } 
    // Prevent numbers and special chars in name
    else if (name === "name") {
      if (/^[A-Za-z\s]*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } 
    else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!nameRegex.test(formData.name)) newErrors.name = "Enter a valid name (letters only).";
    if (!emailRegex.test(formData.email)) newErrors.email = "Enter a valid email.";
    if (!phoneRegex.test(formData.phone)) newErrors.phone = "Enter a 10-digit phone number.";
    if (!formData.date) newErrors.date = "Select a date.";
    if (!formData.message) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        message: ""
      });
      setErrors({});
    }, 2000);
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
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          {errors.name && <span className="error">{errors.name}</span>}

          <div className="input-group">
            <Mail className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {errors.email && <span className="error">{errors.email}</span>}

          <div className="input-group">
            <Phone className="input-icon" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          {errors.phone && <span className="error">{errors.phone}</span>}

          <div className="input-group">
            <CalendarDays className="input-icon" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          {errors.date && <span className="error">{errors.date}</span>}

          <div className="input-group">
            <textarea
              rows="3"
              name="message"
              placeholder="Tell us about your business or team size..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          {errors.message && <span className="error">{errors.message}</span>}

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
