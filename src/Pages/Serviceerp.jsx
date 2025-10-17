import React, { useEffect } from 'react';
import '../assets/css/Serviceerp.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductForm from '../component/ProductForm';
import { FaTimes, FaClock, FaPhoneAlt, FaChartLine } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServicecrmFaq from '../component/Servicecrmfaq';
import HomePricing from '../component/HomePricing';
import ProductNavbar from './AllNavbar/ProductNavbar';
import Bookdemoform from '../component/Bookdemoform';
import ServiceCRMNavbar from './AllNavbar/ServiceCRMNavbar';

const features = [
  {
    icon: 'fas fa-bullseye',
    title: 'Lead & Request Management',
    description: 'Capture, qualify, and manage service requests and client leads efficiently.'
  },
  {
    icon: 'fas fa-list-alt',
    title: 'Service Catalog Management',
    description: 'Add, update, and manage your service offerings with detailed descriptions and pricing.'
  },
  {
    icon: 'fas fa-calendar-check',
    title: 'Appointment Scheduling',
    description: 'Schedule and track service appointments with automated reminders for clients and staff.'
  },
  {
    icon: 'fas fa-tasks',
    title: 'Job & Task Tracking',
    description: 'Monitor job progress from assignment to completion in a centralized dashboard.'
  },
  {
    icon: 'fas fa-comments',
    title: 'Client Communication',
    description: 'Centralize SMS, WhatsApp, and email interactions for every client and job.'
  },
  {
    icon: 'fas fa-file-contract',
    title: 'Document Management',
    description: 'Securely store contracts, work orders, and client documents in one place.'
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Performance Analytics',
    description: 'Track team productivity, service efficiency, and customer satisfaction in real-time.'
  },
  {
    icon: 'fas fa-bell',
    title: 'Automated Follow-up Reminders',
    description: 'Ensure no service or client follow-up is missed with automated task reminders.'
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Multi-Location Management',
    description: 'Manage staff, jobs, and clients across multiple offices or service areas.'
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Mobile Access',
    description: 'Manage your service CRM and tasks on the go from any device.'
  },
  {
    icon: 'fas fa-users',
    title: 'Team Collaboration',
    description: 'Assign tasks, share notes, and collaborate efficiently with role-based access.'
  },
  {
    icon: 'fas fa-brain',
    title: 'AI-Powered Insights',
    description: 'Get smart suggestions for follow-ups, pricing strategies, and client engagement.'
  }
];

const ServiceCRM = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <ProductNavbar />
      <ServiceCRMNavbar />
      {/* CRM Intro Section */}
      <section className="crm-section wow animate__animated animate__fadeInUp">
        <div className="crm-container">

          {/* Background Floating Shapes */}
          <div className="crm-bg-shapes">
            <div className="crm-circle crm-circle-1"></div>
            <div className="crm-circle crm-circle-2"></div>
            <div className="crm-circle crm-circle-3"></div>
            <div className="crm-circle crm-circle-4"></div>
          </div>

          {/* Main Content */}
          <div className="crm-content">
            <div className="crm-badge">
              <span className="crm-badge-dot"></span>
              <span>Smart Service CRM</span>
            </div>

            <h1 className="crm-title">
              Empowering <span className="crm-accent">Service Professionals</span>
            </h1>

            <p className="crm-description">
              Manage clients, appointments, and service pipelines effortlessly. Stay on top of your workflow and never miss an opportunity.
            </p>

            {/* Problem Cards */}
            <div className="crm-problems">
              <div className="crm-problem">
                <div className="crm-icon"><FaTimes /></div>
                <p>Missed Requests</p>
              </div>
              <div className="crm-problem">
                <div className="crm-icon"><FaClock /></div>
                <p>Scheduling Conflicts</p>
              </div>
              <div className="crm-problem">
                <div className="crm-icon"><FaPhoneAlt /></div>
                <p>Poor Follow-ups</p>
              </div>
              <div className="crm-problem">
                <div className="crm-icon"><FaChartLine /></div>
                <p>Unclear Pipeline</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="crm-actions">
              <button className="crm-btn crm-btn-primary">🚀 Start Free Trial</button>
            </div>

            {/* Trust Indicators */}
            <div className="crm-trust">
              <div className="crm-trust-item">
                <h3>2,500+</h3>
                <p>Service Pros</p>
              </div>
              <div className="crm-trust-item">
                <h3>98%</h3>
                <p>Satisfaction</p>
              </div>
              <div className="crm-trust-item">
                <h3>24/7</h3>
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="serfea-section wow animate__animated animate__fadeInUp">
        <div className="serfea-container">
          <div className="serfea-header">
            <h2 className="serfea-title">Service ERP Features</h2>
            <p className="serfea-subtitle">
              Powerful tools designed to streamline your service operations and boost productivity
            </p>
          </div>

          <div className="serfea-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="serfea-feature-card">
                <div className="serfea-glow-ring"></div>
                <div className="serfea-feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="serfea-feature-title">{feature.title}</h3>
                <p className="serfea-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


          
      {/* Demo Section */}
      <ProductForm/>

      {/* Pricing Section */}
      <HomePricing/>


      {/* Service Flow Section */}
      <section className="serflo-section">
        <div className="serflo-inner">
          {/* Decorative Elements */}
          <div className="serflo-floating-bg">
            <div className="serflo-float serflo-float-1"></div>
            <div className="serflo-float serflo-float-2"></div>
          </div>

          {/* Intro Block */}
          <div className="serflo-header">
            <h2 className="serflo-heading">Smart Tools for Smarter Service</h2>
            <p className="serflo-tagline">
              Boost productivity and deliver exceptional customer experiences — all from one place.
            </p>
          </div>

          {/* Features Grid */}
          <div className="serflo-grid">
  <div className="serflo-card" data-aos="fade-up">
    <div className="serflo-icon">
      <i className="fas fa-cogs"></i> {/* Workflow Automation */}
    </div>
    <h3 className="serflo-card-title">Workflow Automation</h3>
    <p className="serflo-card-desc">
      Automate repetitive tasks and focus on what truly matters — your service quality.
    </p>
  </div>

  <div className="serflo-card" data-aos="fade-up" data-aos-delay="150">
    <div className="serflo-icon">
      <i className="fas fa-chart-line"></i> {/* Actionable Insights */}
    </div>
    <h3 className="serflo-card-title">Actionable Insights</h3>
    <p className="serflo-card-desc">
      Real-time reports and analytics help you track performance and optimize every move.
    </p>
  </div>

  <div className="serflo-card" data-aos="fade-up" data-aos-delay="300">
    <div className="serflo-icon">
      <i className="fas fa-phone"></i> {/* Customer Connect */}
    </div>
    <h3 className="serflo-card-title">Customer Connect</h3>
    <p className="serflo-card-desc">
      Manage communications, reminders, and follow-ups from one unified dashboard.
    </p>
  </div>
</div>


          {/* CTA */}
          <div className="serflo-cta-wrap">
            <button className="serflo-cta">Explore More Features ➜</button>
          </div>
        </div>
      </section>



      {/* Faq Section */}
      <ServicecrmFaq/>



      {/* Email Section */}
     <Bookdemoform />
      <Footer />
    </>
  );
};

export default ServiceCRM;
