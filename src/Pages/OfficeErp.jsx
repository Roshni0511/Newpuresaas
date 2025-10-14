import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/OfficeErp.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function OfficeErp() {
  const [showDemo, setShowDemo] = useState(false);

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

  return (
    <div>
      <Navbar />

      <section className="office-hero-section position-relative bg-light overflow-hidden py-5">
        {/* Animated decorative shapes */}
        <div className="office-hero-shape blue"></div>
        <div className="office-hero-shape green"></div>
        <div className="office-hero-shape purple"></div>

        <div className="container position-relative z-2">
          <div className="row align-items-center g-5">
            {/* Left Column */}
            <div className="col-lg-6">
              <div className="office-trust-badge mb-3 text-primary fw-semibold small office-animate-delay-1">
                <i className="bi bi-shield-check me-2"></i> Trusted by 5,000+ Offices
              </div>

              <h1 className="display-5 fw-bold mb-3 office-hero-title office-animate-delay-2">
                Streamline Your Office Operations with <span>ERP</span>
              </h1>

              <p className="lead text-secondary mb-4 office-hero-text office-animate-delay-3">
                Integrated tools for HR, finance, inventory, and projects — scalable for teams of 10 to 1,000+. Reduce admin time by up to <strong>40%</strong> with smart automation and real-time insights.
              </p>

              <div className="d-flex flex-wrap gap-3 office-hero-btns">
                <a href="#signup" className="btn btn-primary btn-lg px-4 office-hero-btn-primary office-hero-btn">
                  Get Started Free <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>

              {/* Animated feature badges */}
              <div className="d-flex flex-wrap align-items-center gap-4 mt-4 text-muted small office-compliance-badges">
                <span className="office-compliance-item office-animate-delay-4">
                  <i className="bi bi-check-circle me-2 text-success"></i>SOC 2 Certified
                </span>
                <span className="office-compliance-item office-animate-delay-5">
                  <i className="bi bi-shield-lock me-2 text-primary"></i>GDPR Compliant
                </span>
                <span className="office-compliance-item office-animate-delay-6">
                  <i className="bi bi-cloud-check me-2 text-info"></i>Cloud Secure
                </span>
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
                {/* Floating animated elements around image */}
                <div className="office-floating-elements">
                  <div className="office-float-item item-1">
                    <i className="bi bi-graph-up"></i>
                  </div>
                  <div className="office-float-item item-2">
                    <i className="bi bi-people"></i>
                  </div>
                  <div className="office-float-item item-3">
                    <i className="bi bi-gear"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Demo Modal with animation */}
        {showDemo && (
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
        )}
      </section>

      {/* Features Section */}
    <section className="office-features-section py-5">
  <div className="container">
    <h2 className="office-section-title text-center mb-5">
      Core Modules of <span className="office-gradient-text">Our ERP</span>
    </h2>

    <div className="row g-4">
      {/* Card 1 */}
      <div className="col-md-6 col-lg-4">
        <div className="office-feature-card office-animate-in">
          <div className="office-feature-icon floating-icon">
            <i className="bi bi-person-badge"></i>
          </div>
          <h5 className="office-feature-title">HR Management</h5>
          <p className="office-feature-desc">
            Automate onboarding, payroll, and performance tracking with customizable workflows.
          </p>
          <div className="office-feature-overlay">
            <span>Boost productivity by 35%</span>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-6 col-lg-4">
        <div className="office-feature-card office-animate-in">
          <div className="office-feature-icon floating-icon">
            <i className="bi bi-currency-dollar"></i>
          </div>
          <h5 className="office-feature-title">Financial Accounting</h5>
          <p className="office-feature-desc">
            Real-time invoicing, expense tracking, and compliance reporting—integrated with QuickBooks and Xero.
          </p>
          <div className="office-feature-overlay">
            <span>Save 20+ hours per month</span>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-6 col-lg-4">
        <div className="office-feature-card office-animate-in">
          <div className="office-feature-icon floating-icon">
            <i className="bi bi-box-seam"></i>
          </div>
          <h5 className="office-feature-title">Inventory & Procurement</h5>
          <p className="office-feature-desc">
            Track stock levels, automate reorders, and forecast demand to cut waste by 30%.
          </p>
          <div className="office-feature-overlay">
            <span>Reduce waste by 30%</span>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-md-6 col-lg-4">
        <div className="office-feature-card office-animate-in">
          <div className="office-feature-icon floating-icon">
            <i className="bi bi-kanban"></i>
          </div>
          <h5 className="office-feature-title">Project Management</h5>
          <p className="office-feature-desc">
            Collaborate on tasks, timelines, and budgets with Gantt charts and team notifications.
          </p>
          <div className="office-feature-overlay">
            <span>Deliver projects 25% faster</span>
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="col-md-6 col-lg-4">
        <div className="office-feature-card office-animate-in">
          <div className="office-feature-icon floating-icon">
            <i className="bi bi-bar-chart-line"></i>
          </div>
          <h5 className="office-feature-title">Analytics Dashboard</h5>
          <p className="office-feature-desc">
            AI-driven insights on KPIs, with customizable reports and mobile alerts.
          </p>
          <div className="office-feature-overlay">
            <span>Get real-time insights</span>
          </div>
        </div>
      </div>

      {/* Card 6 */}
      <div className="col-md-6 col-lg-4">
        <div className="office-feature-card office-animate-in">
          <div className="office-feature-icon floating-icon">
            <i className="bi bi-puzzle"></i>
          </div>
          <h5 className="office-feature-title">Integrations</h5>
          <p className="office-feature-desc">
            Seamless connections to Google Workspace, Microsoft 365, Slack, and 50+ apps.
          </p>
          <div className="office-feature-overlay">
            <span>Connect 50+ tools instantly</span>
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
          How <span className="erp-gradient-text">Our ERP Works</span>
        </h2>

        <div className="erp-benefits-flow d-flex justify-content-center align-items-center flex-wrap">
          
          {/* Step 1 */}
          <div className="erp-flow-step">
            <div className="erp-benefit-card">
              <div className="erp-benefit-icon">
                <i className="fas fa-tachometer-alt"></i> 
              </div>
              <h5 className="erp-benefit-title">Efficiency Boost</h5>
              <p className="erp-benefit-desc">
                Centralize data to eliminate silos—reduce paperwork by 70% and free your team for high-value work.
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
                 <i className="fas fa-cloud-lock"></i> 
              </div>
              <h5 className="erp-benefit-title">Scalability & Security</h5>
              <p className="erp-benefit-desc">
                Cloud-based for easy growth; enterprise-grade encryption protects sensitive office data.
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
                <i className="fas fa-users"></i>
              </div>
              <h5 className="erp-benefit-title">User-Friendly</h5>
              <p className="erp-benefit-desc">
                Intuitive interface with role-based access—no IT team required. Onboard in under an hour.
              </p>
              <div className="erp-card-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>




      <Footer />
    </div>
  );
}
