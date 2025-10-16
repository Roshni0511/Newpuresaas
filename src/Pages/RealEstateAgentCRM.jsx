import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../assets/css/RealEstateAgentCRM.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faHandHoldingUsd,
  faTools,
  faUserCheck,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import BrandSlider from '../component/BrandSlider';
import TestimonialsSlider from '../component/Testimonials';
import RealEstateAgentCRMfaq from '../component/Realestatecrmfaq';
import HomeFaq from '../component/HomeFaq';
import ProductForm from '../component/ProductForm';
import Realestateagentcrmslider from '../component/Realestateagentcrmslider';



export default function RealEstateAgentCRM() {
  // ✅ Counter States
  const [counters, setCounters] = useState({
    counties: 0,
    peoples: 0,
    orders: 0,
  });

  // ✅ Refs and animation state
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // ✅ Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // ✅ Counter animation logic
  const animateCounters = () => {
    const targetCounts = {
      counties: 10,
      peoples: 50,
      orders: 50,
    };

    const duration = 2000; 
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;

      setCounters({
        counties: Math.min(
          targetCounts.counties,
          Math.floor((targetCounts.counties * currentStep) / steps)
        ),
        peoples: Math.min(
          targetCounts.peoples,
          Math.floor((targetCounts.peoples * currentStep) / steps)
        ),
        orders: Math.min(
          targetCounts.orders,
          Math.floor((targetCounts.orders * currentStep) / steps)
        ),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targetCounts);
      }
    }, stepDuration);
  };

  return (
    <div>
      <Navbar />
      <div className="real-style wow animate__animated animate__fadeInUp">
  <div className="hero-banner">
    <img src="/Image/hero-banner.png" alt="Hero Banner" />
    <div className="banner-content">
      <div className="subtitle">Smart Real Estate Agent CRM</div>
      <h1>
        Streamline client management.<br />
        Close deals faster.
      </h1>
      <p>Manage leads, track property listings, and automate follow-ups to grow your real estate business efficiently.</p>
      <button className="demo-btn">Get Started</button>
    </div>
  </div>
</div>


      {/* ✅ Counter Section */} 	
      <section className="counter-section wow animate__animated animate__fadeInUp" ref={sectionRef}>
        <div className="container">
  <div className="content">
    <h2>Helping Real Estate Agents Thrive</h2>
    <p className="description">
      Stay on top of your business without the stress. Our CRM helps you keep track of clients, manage property listings, follow up effortlessly, and close deals faster—so you can focus on what you do best: building relationships and growing your business.
    </p>
    <div className="grid">
      <div className="item">
        <div className="number">30+</div>
        <div className="label">Properties Managed</div>
      </div>
      <div className="item">
        <div className="number">100+</div>
        <div className="label">Happy Clients</div>
      </div>
      <div className="item">
        <div className="number">120+</div>
        <div className="label">Deals Closed</div>
      </div>
    </div>
  </div>
</div>

      </section>


       <div className="reasons-section wow">
              <div className="reasons-container container">
  <span className="reasons-badge">Why Choose Us</span>
  <h1 className="reasons-title mt-5">Modern tools for today’s property professionals</h1>
  <p className="reasons-subtitle pt-3">
    Make property management effortless, save time, and grow your rental business.
  </p>
  <ul className="reasons-features wow animate__animated animate__fadeInUp">
    <li className="reasons-feature-item">
      <FontAwesomeIcon icon={faTachometerAlt} /> Keep all your properties organized in one dashboard
    </li>
    <li className="reasons-feature-item">
      <FontAwesomeIcon icon={faHandHoldingUsd} /> Collect rent automatically and send reminders
    </li>
    <li className="reasons-feature-item">
      <FontAwesomeIcon icon={faTools} /> Submit and track maintenance requests online
    </li>
    <li className="reasons-feature-item">
      <FontAwesomeIcon icon={faUserCheck} /> Screen tenants quickly using AI-powered checks
    </li>
    <li className="reasons-feature-item">
      <FontAwesomeIcon icon={faChartLine} /> Get real-time financial insights and reports
    </li>
  </ul>
</div>

              
              {/* === IMAGE STRUCTURE WITH OVERLAYS === */}
              <div className="reasons-image-wrapper wow animate__animated animate__fadeInUp">
                {/* Main background image (the building) */}
                <img src="/Image/Demo_Img" alt="Reasons Illustration" className="main-img" />
                
                {/* Overlay images (the 'Square' and 'Rectangle' data cards) */}
                {/* Ensure these paths are correct for your uploaded images */}
                <img src="/Image/transaction.jpg" alt="Transaction statistics card" className="overlay-img square-overlay" />
                <img src="/Image/profit.jpg" alt="Profit chart card" className="overlay-img rectangle-overlay" />
              </div>
              {/* =========================================== */}
      
            </div>

{/* ============================= */}
{/* Property Section */}
{/* ============================= */}

<div style={{background:'#f9f9f9',paddingTop:'40px'}} className=' wow animate__animated animate__fadeInUp'>
<div className="opacity-100 filter-none rotate-0 scale-100 text-center">
  {/* Badge */}
  <span 
    className="badge text-dark mb-3" 
    style={{ backgroundColor: '#ffe16bff', fontSize: '1rem', padding: '0.5rem 1rem' }}>
    Tools
  </span>

  {/* Heading */}
  <h2 style={{ fontSize: '2rem', opacity: 1, filter: 'blur(0px)', marginBottom:'20', fontWeight:'700', color:'#2c3e50',padding:'10px' }}>
    Robust tools to enhance your <br />property management business.
  </h2>
</div>


<section style={{marginTop:'60px', paddingBottom:'70px'}}>
<div class="parent">
    <div class="div1">
      <img src="/Image/hero-banner.png" alt="Building" />
    </div>

    <div class="div2">
  <div class="property-card" style={{background:'#f9eb57'}}>
    <div class="profile-row">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s" alt="Profile 1" class="profile-img" style={{width:'40px',borderRadius:'100%',marginRight:'5px'}}/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s" alt="Profile 2" class="profile-img" style={{width:'40px',borderRadius:'100%',marginRight:'5px'}}/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s" alt="Profile 3" class="profile-img" style={{width:'40px',borderRadius:'100%',marginRight:'5px'}}/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s" alt="Profile 4" class="profile-img" style={{width:'40px',borderRadius:'100%',marginRight:'5px'}}/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s" alt="Profile 5" class="profile-img" style={{width:'40px',borderRadius:'100%',marginRight:'5px'}}/>
      <div class="profile-plus">+20</div>
    </div>
    <h3>Tenants</h3>
    <p>Discover the surroundings.</p>
  </div>
</div>

    <div class="property-div3">
      <div class="property-card">
        <h3>Tenants</h3>
        <p>Join over 800 active tenants enjoying the perks of being part of our vibrant community, where you can connect with neighbors.</p>
      </div>
    </div>

<div class="div4 metric-card">
    <i class="fas fa-building card-icon"></i>
    <h3>Building Age</h3>
    <p>10Y</p>
</div>

<div class="div5 metric-card">
    <i class="fas fa-users card-icon"></i>
    <h3>Daily Visitors</h3>
    <p>8950</p>
</div>

<div class="div6 metric-card">
    <i class="fas fa-thermometer-half card-icon"></i>
    <h3>Temperature</h3>
    <p>34°F</p>
</div>

<div class="div7 metric-card">
    <i class="fas fa-home card-icon"></i>
    <h3>Occupancy Rate</h3>
    <p>85%</p>
</div>


    <div class="div8">
      <div class="progress-card">
        <h3>Active Users</h3>
        <div class="progress-bar"></div>
      </div>
    </div>

    <div class="div9">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.254272231177!2d90.3654215!3d23.7985508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1592852423971!5m2!1sen!2sbd"></iframe>
    </div>
</div>
</section>        
</div>




{/* ============================= */}
{/* Features Section */}
{/* ============================= */}
<div className="wow animate__animated animate__fadeInUp">
  <div className="opacity-100 filter-none rotate-0 scale-100 text-center wow animate__animated animate__fadeInUp features-section">
    {/* Badge */}
    <span className="badge text-dark mb-3 features-badge">
      Real Estate Agent  CRM
    </span>

    {/* Heading */}
    <h2 className="features-heading">
      Powerful tools to grow<br /> your real estate business
    </h2>
  </div>

  <div className="bus-card-container">
    {/* Top row - 3 cards */}
    <div className="bus-card-row">
      <div>
        <div className="bus-card">
          <img src="/Image/feature1.jpg" alt="Lead Management" className="bus-card-image" />
        </div>
        <h4>Lead Management</h4>
        <p>Capture, track, and convert leads faster.</p>
      </div>

      <div>
        <div className="bus-card">
          <img src="/Image/feature2.jpg" alt="Property Listings" className="bus-card-image" />
        </div>
        <h4>Property Listings</h4>
        <p>Manage all your property data in one place.</p>
      </div>

      <div>
        <div className="bus-card">
          <img src="/Image/feature3.jpg" alt="Client Follow-ups" className="bus-card-image" />
        </div>
        <h4>Client Follow-ups</h4>
        <p>Never miss a deal with smart reminders.</p>
      </div>
    </div>

    {/* Bottom row - 2 cards */}
    <div className="bus-card-row">
      <div>
        <div className="bus-card">
          <img src="/Image/feature4.jpg" alt="Sales Pipeline" className="bus-card-image" />
        </div>
        <h4>Sales Pipeline</h4>
        <p>Track deals from inquiry to closing.</p>
      </div>

      <div>
        <div className="bus-card">
          <img src="/Image/feature5.jpg" alt="Performance Insights" className="bus-card-image" />
        </div>
        <h4>Performance Insights</h4>
        <p>Analyze growth and boost your sales.</p>
      </div>
    </div>
  </div>
</div>



{/* ============================= */}
{/* Slider Section */}
{/* ============================= */}

<Realestateagentcrmslider/>

{/* ============================= */}
{/* Features Section */}
{/* ============================= */}

<ProductForm/>



{/* ============================= */}
{/* Industries Section */}
{/* ============================= */}
<section className='wow animate__animated animate__fadeInUp'> 
  <div className="opacity-100 filter-none rotate-0 scale-100 text-center" style={{background:'#f9f9f9', paddingBottom:'40px', paddingTop:'60px'}}>
    {/* Badge */}
    <span 
      className="badge text-dark mb-3" 
      style={{ backgroundColor: '#ffe16bff', fontSize: '1rem', padding: '0.5rem 1rem' }}>
      Integration
    </span>

    {/* Heading */}
    <h2 style={{ fontSize: '2rem', opacity: 1, filter: 'blur(0px)', marginBottom:'20px', fontWeight:'700', color:'#2c3e50', paddingTop:'20px'}}>
      Industries We Serve
    </h2>
    <span>
      PureSaaS delivers tailored solutions for each industry. Our expertise helps you innovate, adapt, and achieve results.
    </span>
  </div>

  <div className="industry-card-container" style={{paddingBottom:'100px'}}>
    <div className="industry-card">
      <img src="/Image/industry.jpg" alt="Vacation rentals" className="industry-card-image" />
      <div className="industry-card-overlay">
        <h3>Vacation Rentals</h3>
        <p>Fully furnished spaces with modern amenities for a seamless stay.</p>
      </div>
    </div>
    <div className="industry-card">
      <img src="/Image/industry.jpg" alt="Corporate housing" className="industry-card-image" />
      <div className="industry-card-overlay">
        <h3>Corporate Housing</h3>
        <p>Comfortable, convenient living solutions for business professionals.</p>
      </div>
    </div>
    <div className="industry-card">
      <img src="/Image/industry.jpg" alt="Hotels & resorts" className="industry-card-image" />
      <div className="industry-card-overlay">
        <h3>Hotels & Resorts</h3>
        <p>Experience a blend of comfort and elegance in our curated properties.</p>
      </div>
    </div>
  </div>
</section>




{/* ============================= */}
{/* Testimonials Section */}
{/* ============================= */}
<section style={{background:'#f9f9f9'}} className=' wow animate__animated animate__fadeInUp'>
  <div className="opacity-100 filter-none rotate-0 scale-100 text-center" style={{background:'#f9f9f9', paddingTop:'120px'}}>
  {/* Badge */}
  <span 
    className="badge text-dark mb-3" 
    style={{ backgroundColor: '#ffe16bff', fontSize: '1rem', padding: '0.5rem 1rem' }}>
    Testimonials
  </span>

  {/* Heading */}
  <h3 style={{ fontSize: '2rem', opacity: 1, filter: 'blur(0px)', marginBottom:'20', fontWeight:'700', color:'#2c3e50'}}>
   Client words
  </h3>
</div>
  <TestimonialsSlider/>
</section>
    




{/* ============================= */}
{/* Faq Section */}
{/* ============================= */}
<section style={{background:'#f9f9f9'}} className=' wow animate__animated animate__fadeInUp'>
<RealEstateAgentCRMfaq/>
</section>




{/* ============================= */}
{/* Email Section */}
{/* ============================= */}
<section className="cta-section wow animate__animated animate__fadeInUp">
    <div className="cta-content-left">
        <span className="cta-tag">Finance</span>
        <h1 className="cta-title">Ready to transform your business with PureSaaS CRM</h1>
        <p className="cta-description">
            Start your free trial today and see your ideas come to life easily and creatively.
        </p>
    </div>

    <div className="cta-form-right">
        <div className="cta-form">
            <button type="button" className="cta-button">Get started!</button>
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


      <Footer />
    </div>
  );
}