import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import '../assets/css/BuilderCRM.css';
import Footer from "./Footer";
import { FaProjectDiagram, FaUsers, FaTasks, FaFileInvoiceDollar, FaBell } from "react-icons/fa";
import HomePricing from "../component/HomePricing";
import ProductForm from "../component/ProductForm";
import Builderfaq from "../component/Builderfaq";
import BuilderCRMNavbar from "./AllNavbar/BuilderCRMNavbar";
import ProductNavbar from "./AllNavbar/ProductNavbar";

const Buildercrm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const platforms = [
    { id: 1, icon: '/Image/googleplaystore.png', title: 'Google Play Store', subtitle: 'Android App Marketplace' },
    { id: 2, icon: '/Image/appleapp.png', title: 'Apple App Store', subtitle: 'iOS & macOS Downloads' },
    { id: 3, icon: '/Image/software.png', title: 'Software Suggest', subtitle: 'Software Reviews & Ratings' },
    { id: 4, icon: '/Image/windows.png', title: 'Winner', subtitle: 'Business Software Solutions' },
  ];

  const features = [
    { icon: <FaProjectDiagram />, title: "Project Management", description: "Easily track multiple real estate projects from start to finish." },
    { icon: <FaUsers />, title: "Client Management", description: "Manage leads, buyers, and investors efficiently in one place." },
    { icon: <FaTasks />, title: "Task & Team Management", description: "Assign tasks, monitor progress, and collaborate seamlessly." },
    { icon: <FaFileInvoiceDollar />, title: "Payment & Invoicing", description: "Track payments, generate invoices, and manage finances effortlessly." },
    { icon: <FaBell />, title: "Automated Follow-ups", description: "Set reminders and automate follow-ups for better client engagement." },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Demo booked successfully!");
    setIsModalOpen(false);
  };

  return (
    <>
      <ProductNavbar/>
      <BuilderCRMNavbar />

      {/* Hero Section */}
      <section className="builder-hero-section">
        <div className="builder-blob builder-blob-top-left"></div>
        <div className="builder-blob builder-blob-bottom-right"></div>

        <div className="builder-hero-container">
          {/* Text Content */}
          <motion.div
            className="builder-hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="builder-badge">
              <Building2 className="builder-icon" />
              <span>Builder CRM</span>
            </div>

            <h1 className="builder-title">
              Manage <span className="builder-highlight">Projects</span> & <span className="builder-highlight-alt">Leads</span> Effortlessly
            </h1>

            <p className="builder-subtitle">
              Simplify property management, track sales, and <br />boost team productivity with our all-in-one Developer/Builder CRM.
            </p>

            <div className="builder-features">
              <div className="builder-feature-item">📊 Track Sales Effortlessly</div>
              <div className="builder-feature-item">🏗️ Manage Projects Seamlessly</div>
              <div className="builder-feature-item">🤝 Boost Team Collaboration</div>
            </div>

            <div className="builder-cta-buttons">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="builder-btn-primary"
                onClick={() => setIsModalOpen(true)}
              >
                Book a Demo
              </motion.button>
            </div>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div
            className="builder-hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/Image/builder-hero.jpg" alt="Builder CRM Illustration" className="builder-hero-img" />
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
  <div className="buildermod-overlay">
    <motion.div className="buildermod-container">
      <button className="buildermod-close-btn" onClick={() => setIsModalOpen(false)}>&times;</button>
      <h2 className="buildermod-title">Book a Demo</h2>
      <form onSubmit={handleFormSubmit} className="buildermod-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone" required />
        <input type="date" required />
        <input type="time" required />
        <textarea placeholder="Short Description" rows={3}></textarea>
        <button type="submit" className="buildermod-submit-btn">Submit</button>
      </form>
    </motion.div>
  </div>
)}


      {/* Social Section */}
      <section>
        <div className="socialsec wow animate__animated animate__fadeInUp ">
          <div className="social-selector-container">
            <div className="content-wrapper">
              <p className="section-tag">Ratings & Reviews</p>
              <h1 className="main-heading">Where are your apps and software rated?</h1>
              <p className="sub-heading">
                Track and manage customer sentiment across major app stores and independent software review platforms to boost your online visibility.
              </p>

              <div className="platforms-grid wow animate__animated animate__fadeInUp">
                {platforms.map(platform => (
                  <div key={platform.id} className={`platform-card ${platform.accent}`}>
                    <div className="card-info">
                      <img src={platform.icon} alt={`${platform.title} icon`} className="platform-icon" />
                      <div className="text-content">
                        <span className="card-title">{platform.title}</span>
                        <span className="card-subtitle">{platform.subtitle}</span>
                      </div>
                    </div>
                    <button className="arrow-button">&rarr;</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="builderfea-section">
        <div className="builderfea-container">
          <div className="builderfea-header">
            <h2 className="builderfea-title">Key Features & Benefits</h2>
            <p className="builderfea-subtitle">Everything you need to manage your real estate business efficiently and grow your portfolio.</p>
          </div>

          <div className="builderfea-grid">
            {/* Existing feature cards */}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <ProductForm/>

      {/* Pricing Section */}
      <HomePricing/>

      {/* Faq Section */}
      <Builderfaq/>

      <Footer/>
    </>
  );
};

export default Buildercrm;
