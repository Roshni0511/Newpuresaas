import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTachometerAlt, FaLock, FaUsers } from "react-icons/fa";
import '../assets/css/SecondHandCar.css';
import Footer from "./Footer";
import 'bootstrap-icons/font/bootstrap-icons.css';  
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePricing from "../component/HomePricing";
import SecondHandCarfaq from "../component/SecondHandCarfaq";
import ProductForm from "../component/ProductForm"
import ProductNavbar from "./AllNavbar/ProductNavbar";
import Bookdemoform from "../component/Bookdemoform";
import SecondHandCarNavbar from "./AllNavbar/SecondHandCarNavbar";

export default function SecondHandCar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    alert('Demo booked successfully!');
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Trigger entrance animations on load
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('office-animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const title = document.querySelector('.office-hero-title');
    const text = document.querySelector('.office-hero-text');
    const buttons = document.querySelectorAll('.office-hero-btn');
    const image = document.querySelector('.office-hero-image');
    const trustBadge = document.querySelector('.office-trust-badge');

    if (title) observer.observe(title);
    if (text) observer.observe(text);
    if (trustBadge) observer.observe(trustBadge);
    if (image) observer.observe(image);
    buttons.forEach(btn => observer.observe(btn));

    // Cleanup
    return () => observer.disconnect();
  }, []);
 const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission,
        // e.g., send the email to an API, log it, etc.
        console.log('Email submitted:', email);
        alert(`Starting your trial for: ${email}`);
        setEmail(''); // Clear the input after submission
    };
  return (
    <div>
      <ProductNavbar />
    <SecondHandCarNavbar />
      <section className="office-hero-section position-relative bg-light overflow-hidden py-5">
        <div className="container position-relative z-2">
          <div className="row align-items-center g-5">
      {/* Left Column */}
<div className="col-lg-6">
  <div className="office-trust-badge mb-3 text-primary fw-semibold small office-animate-delay-1">
    <i className="bi bi-shield-check me-2"></i> Trusted by 1,000+ Car Dealers Nationwide
  </div>

  <h1 className="display-5 fw-bold mb-3 office-hero-title office-animate-delay-2">
    Simplify Your <span>Used Car Business</span> with Our Management System
  </h1>

  <p className="lead text-secondary mb-4 office-hero-text office-animate-delay-3">
    From car listings to customer tracking, streamline every step of your dealership operations. 
    Manage inventory, leads, and sales effortlessly—all from one powerful dashboard.
  </p>

  <div className="d-flex flex-wrap gap-3 office-hero-btns">
    <a
      href="#signup"
      className="btn btn-primary btn-lg px-4 office-hero-btn-primary office-hero-btn"
      onClick={() => setIsModalOpen(true)}
    >
      Get Free Demo <i className="bi bi-arrow-right ms-2"></i>
    </a>
   
  </div>
</div>


            {/* Right Column */}
            <div className="col-lg-6 text-center position-relative">
              <div className="position-relative d-inline-block">
                <img
                  src="/Image/Hero.png"
                  alt="ERP Dashboard"
                  className="img-fluid rounded office-hero-image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Demo Modal with animation */}
        {/* {showDemo && (
          <div className="office-hero-modal d-flex align-items-center justify-content-center">
            <div className="office-hero-modal-content bg-white rounded shadow-lg p-4">
              <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
                <h5 className="m-0">Product Demo (2 min)</h5>
                <button className="btn-close" onClick={() => setShowDemo(false)}></button>
              </div>
              <div className="ratio ratio-16x9 mb-3">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual demo video URL
                  title="ERP Demo"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="text-end">
                <a href="#signup" className="btn btn-primary px-4">
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        )} */}
      </section>

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


      {/* Features Section */}
<section className="office-features-section py-5">
  <div className="container">
    <h2 className="office-section-title text-center mb-5">
      Core Modules of <span className="office-gradient-text">Our Car Management System</span>
    </h2>

    <div className="row g-4">
      {/* Card 1 */}
      <div className="col-md-6 col-lg-4">
        <div className="office-feature-card office-animate-in">
          <div className="office-feature-icon floating-icon">
            <i className="bi bi-car-front"></i>
          </div>
          <h5 className="office-feature-title">Vehicle Management</h5>
          <p className="office-feature-desc">
            Manage all car listings with complete details, pricing, images, and availability status in one place.
          </p>
          <div className="office-feature-overlay">
            <span>Manage 100+ cars effortlessly</span>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-6 col-lg-4">
        <div className="office-feature-card office-animate-in">
          <div className="office-feature-icon floating-icon">
            <i className="bi bi-people"></i>
          </div>
          <h5 className="office-feature-title">Customer & Lead Tracking</h5>
          <p className="office-feature-desc">
            Capture buyer inquiries, follow up on leads, and track customer history for better conversions.
          </p>
          <div className="office-feature-overlay">
            <span>Boost sales by 40%</span>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-6 col-lg-4">
        <div className="office-feature-card office-animate-in">
          <div className="office-feature-icon floating-icon">
            <i className="bi bi-wallet2"></i>
          </div>
          <h5 className="office-feature-title">Sales & Payments</h5>
          <p className="office-feature-desc">
            Generate invoices, track payments, and record every transaction securely with digital receipts.
          </p>
          <div className="office-feature-overlay">
            <span>Track every sale in real-time</span>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-md-6 col-lg-4">
        <div className="office-feature-card office-animate-in">
          <div className="office-feature-icon floating-icon">
            <i className="bi bi-gear"></i>
          </div>
          <h5 className="office-feature-title">Service & Maintenance</h5>
          <p className="office-feature-desc">
            Maintain service history, inspection reports, and vehicle condition records for buyer transparency.
          </p>
          <div className="office-feature-overlay">
            <span>Ensure trust with service logs</span>
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="col-md-6 col-lg-4">
        <div className="office-feature-card office-animate-in">
          <div className="office-feature-icon floating-icon">
            <i className="bi bi-graph-up"></i>
          </div>
          <h5 className="office-feature-title">Analytics Dashboard</h5>
          <p className="office-feature-desc">
            View performance metrics, top-selling cars, and profit trends through intuitive reports.
          </p>
          <div className="office-feature-overlay">
            <span>Monitor performance in real-time</span>
          </div>
        </div>
      </div>

      {/* Card 6 */}
      <div className="col-md-6 col-lg-4">
        <div className="office-feature-card office-animate-in">
          <div className="office-feature-icon floating-icon">
            <i className="bi bi-link-45deg"></i>
          </div>
          <h5 className="office-feature-title">Integrations</h5>
          <p className="office-feature-desc">
            Connect with dealer websites, CRM tools, and online marketplaces to sync inventory automatically.
          </p>
          <div className="office-feature-overlay">
            <span>Connect across platforms easily</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


              

{/* Benefits Section Starts */}
<section className="erp-benefits-section py-5">
  <div className="container">
    <h2 className="erp-section-title text-center mb-5">
      How <span className="erp-gradient-text">Our Car Management System Works</span>
    </h2>

    <div className="erp-benefits-flow d-flex justify-content-center align-items-center flex-wrap">
      
      {/* Step 1 */}
      <div className="erp-flow-step">
        <div className="erp-benefit-card">
          <div className="erp-benefit-icon">
            <FaTachometerAlt />
          </div>
          <h5 className="erp-benefit-title">Streamlined Inventory</h5>
          <p className="erp-benefit-desc">
            Easily add, update, and track all used car listings—organize details, pricing, and availability in one place.
          </p>
          <div className="erp-card-glow"></div>
        </div>
        <div className="erp-flow-arrow">
          <div className="erp-arrow-line"></div>
          <div className="erp-arrow-head"></div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="erp-flow-step">
        <div className="erp-benefit-card">
          <div className="erp-benefit-icon">
             <FaLock /> 
          </div>
          <h5 className="erp-benefit-title">Secure Data & Transactions</h5>
          <p className="erp-benefit-desc">
            Keep buyer, seller, and vehicle data safe with encrypted storage and verified transaction records.
          </p>
          <div className="erp-card-glow"></div>
        </div>
        <div className="erp-flow-arrow">
          <div className="erp-arrow-line"></div>
          <div className="erp-arrow-head"></div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="erp-flow-step">
        <div className="erp-benefit-card">
          <div className="erp-benefit-icon">
            <FaUsers />
          </div>
          <h5 className="erp-benefit-title">Dealer & Customer Friendly</h5>
          <p className="erp-benefit-desc">
            Simple dashboard for dealers and buyers—manage leads, inquiries, and sales seamlessly from any device.
          </p>
          <div className="erp-card-glow"></div>
        </div>
      </div>
    </div>
  </div>
</section>




{/* WHY SecondHandCar CRM */}
<section className="why-hero-section py-5">
  <div className="why-container">
    <div className="why-row align-items-center">
      <div className="why-col-lg-6">
        <div className="why-hero-content">
          <div className="why-hero-badge">
            <span className="why-badge-text">Second Hand Car Management System</span>
            <div className="why-badge-glow"></div>
          </div>
          
          <h1 className="why-hero-title">
            <span className="why-hero-title-line">Smart & Secure</span>
            <span className="why-hero-title-line why-gradient-text">Used Car Management</span>
            <span className="why-hero-title-line">Platform</span>
          </h1>
          
          <p className="why-hero-description">
            Our Second Hand Car Management System helps car dealers, resellers, and individuals 
            manage listings, leads, and sales with ease — bringing transparency and efficiency 
            to the pre-owned vehicle market.
          </p>

          <div className="why-hero-features">
            <div className="why-feature-item">
              <div className="why-feature-icon">
                <i className="fas fa-car"></i>
              </div>
              <div className="why-feature-content">
                <h6>Complete Vehicle Management</h6>
                <p>Upload car details, track inventory, and maintain vehicle history from one simple dashboard.</p>
              </div>
            </div>
            
            <div className="why-feature-item">
              <div className="why-feature-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <div className="why-feature-content">
                <h6>Lead & Customer Tracking</h6>
                <p>Convert inquiries into sales by managing customer interactions, negotiations, and follow-ups efficiently.</p>
              </div>
            </div>
          </div>

          <div className="why-hero-actions">
            <button className="why-btn why-btn-primary why-btn-lg">
              <span>Get Started Now</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      
      <div className="why-col-lg-6">
        <div className="why-hero-visual">
          <div className="why-floating-cards">
            <div className="why-card why-card-1">
              <div className="why-card-icon">
                <i className="fas fa-warehouse"></i>
              </div>
              <h6>Inventory</h6>
              <p>Vehicle Listings</p>
            </div>
            
            <div className="why-card why-card-2">
              <div className="why-card-icon">
                <i className="fas fa-users"></i>
              </div>
              <h6>Customers</h6>
              <p>Lead Management</p>
            </div>
            
            <div className="why-card why-card-3">
              <div className="why-card-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h6>Maintenance</h6>
              <p>Service History</p>
            </div>

            <div className="why-card why-card-4">
              <div className="why-card-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h6>Reports</h6>
              <p>Sales Insights</p>
            </div>
          </div>
          
          <div className="why-dashboard-preview">
            <div className="why-dashboard-header">
              <div className="why-window-controls">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="why-dashboard-content">
              <div className="why-metric-grid">
                <div className="why-metric why-metric-1">
                  <span className="why-metric-value">+60%</span>
                  <span className="why-metric-label">Faster Sales</span>
                </div>
                <div className="why-metric why-metric-2">
                  <span className="why-metric-value">+75%</span>
                  <span className="why-metric-label">Customer Retention</span>
                </div>
                <div className="why-metric why-metric-3">
                  <span className="why-metric-value">-40%</span>
                  <span className="why-metric-label">Manual Workload</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="why-hero-background-elements">
    <div className="why-bg-circle why-circle-1"></div>
    <div className="why-bg-circle why-circle-2"></div>
    <div className="why-bg-circle why-circle-3"></div>
    <div className="why-bg-grid"></div>
  </div>
</section>




{/* Demo Form */}
<ProductForm/>

{/* Pricing Section Starts */}
<HomePricing/>

{/* SecondHandCar faq */}
<SecondHandCarfaq/>



{/* Email Section Starts */}
<Bookdemoform />


      <Footer />
    </div>
  );
}
