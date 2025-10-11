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

    const duration = 2000; // 2 seconds
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
            <div className="subtitle">Smart property management software</div>
            <h1>
              Simplify property management.<br />
              Boost occupancy.
            </h1>
            <p>Manage your properties efficiently and increase revenue with ease.</p>
            <button className="demo-btn">Get Started</button>
          </div>
        </div>
      </div>

      {/* ✅ Counter Section */} 	
      <section className="counter-section wow animate__animated animate__fadeInUp" ref={sectionRef}>
        <div className="container">
          <div className="content">
            <h2>Powering the most successful businesses</h2>
            <p className="description">
              Deliver fast, seamless interactions with our AI-powered messaging platform—instant support, automated responses, and reduced wait times for meaningful engagement.
            </p>
            <div className="grid">
              <div className="item">
                <div className="number">{counters.counties}</div>
                <div className="label">Counties</div>
              </div>
              <div className="item">
                <div className="number">{counters.peoples}</div>
                <div className="label">Peoples</div>
              </div>
              <div className="item">
                <div className="number">{counters.orders}</div>
                <div className="label">Orders Processed</div>
              </div>
            </div>
          </div>
        </div>
      </section>


       <div className="reasons-section wow">
              <div className="reasons-container container">
                <span className="reasons-badge">Reasons to select us</span>
                <h1 className="reasons-title mt-5">Modern tools built for today’s property teams.</h1>
                <p className="reasons-subtitle pt-3">
                  Streamline operations, reduce manual tasks, and maximize revenue.
                </p>
                <ul className="reasons-features wow animate__animated animate__fadeInUp">
                  <li className="reasons-feature-item">
                    <FontAwesomeIcon icon={faTachometerAlt} /> Unified dashboard for all properties
                  </li>
                  <li className="reasons-feature-item">
                    <FontAwesomeIcon icon={faHandHoldingUsd} /> Automated rent collection & reminders
                  </li>
                  <li className="reasons-feature-item">
                    <FontAwesomeIcon icon={faTools} /> Online maintenance requests & work orders
                  </li>
                  <li className="reasons-feature-item">
                    <FontAwesomeIcon icon={faUserCheck} /> AI-powered tenant screening
                  </li>
                  <li className="reasons-feature-item">
                    <FontAwesomeIcon icon={faChartLine} /> Real-time financial insights
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
{/* <div className="property-section wow">
  <div className="content">
    <span className="tag">Features</span>
    <h2 className='wow animate__animated animate__fadeInUp'>
      Robust tools to enhance your property management business.
    </h2>
  </div>
  <div className="container">
    <div className="image-container" id="main-banner">
      <img src="/Image/hero-banner.png" alt="Property" />
    </div>
    <div className="info-grid">
      <div className="info-card">
        <h3>Building age</h3>
        <p>10Y</p>
      </div>
      <div className="info-card">
        <h3>Daily visitors</h3>
        <p>8950</p>
      </div>
      <div className="info-card">
        <h3>Temperature</h3>
        <p>34°F</p>
      </div>
      <div className="info-card">
        <h3>Occupancy rate</h3>
        <p>85%</p>
      </div>
    </div>
  </div>
</div> */}
<div style={{background:'#f9f9f9'}}>
<div className="opacity-100 filter-none rotate-0 scale-100 text-center">
  {/* Badge */}
  <span 
    className="badge text-dark mb-3" 
    style={{ backgroundColor: '#ffe16bff', fontSize: '1rem', padding: '0.5rem 1rem' }}>
    Features
  </span>

  {/* Heading */}
  <h2 style={{ fontSize: '2rem', opacity: 1, filter: 'blur(0px)' }}>
    Robust tools to enhance your <br />property management business.
  </h2>
</div>


<section style={{marginTop:'60px', marginBottom:'90px'}}>
<div class="parent">
    <div class="div1">
      <img src="/Image/hero-banner.png" alt="Building" />
    </div>

    <div class="div2">
  <div class="card" style={{background:'#f9eb57'}}>
    <div class="profile-row">
      <img src="path-to-profile1.jpg" alt="Profile 1" class="profile-img" />
      <img src="path-to-profile2.jpg" alt="Profile 2" class="profile-img" />
      <img src="path-to-profile3.jpg" alt="Profile 3" class="profile-img" />
      <img src="path-to-profile4.jpg" alt="Profile 4" class="profile-img" />
      <img src="path-to-profile5.jpg" alt="Profile 5" class="profile-img" />
      <div class="profile-plus">+20</div>
    </div>
    <h3>Tenants</h3>
    <p>Discover the surroundings.</p>
  </div>
</div>

    <div class="div3">
      <div class="card">
        <h3>Tenants</h3>
        <p>Join over 800 active tenants enjoying the perks of being part of our vibrant community, where you can connect with neighbors.</p>
      </div>
    </div>

<div class="div4">
  <div class="card glass-card-1">
    <i class="fas fa-building card-icon"></i>
    <h3>Building Age</h3>
    <p>10Y</p>
  </div>
</div>

<div class="div5">
  <div class="card glass-card-2">
    <i class="fas fa-users card-icon"></i>
    <h3>Daily Visitors</h3>
    <p>8950</p>
  </div>
</div>

<div class="div6">
  <div class="card glass-card-3">
    <i class="fas fa-thermometer-half card-icon"></i>
    <h3>Temperature</h3>
    <p>34°F</p>
  </div>
</div>

<div class="div7">
  <div class="card glass-card-4">
    <i class="fas fa-home card-icon"></i>
    <h3>Occupancy Rate</h3>
    <p>85%</p>
  </div>
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





<div className="opacity-100 filter-none rotate-0 scale-100 text-center">
  {/* Badge */}
  <span 
    className="badge text-dark mb-3" 
    style={{ backgroundColor: '#ffe16bff', fontSize: '1rem', padding: '0.5rem 1rem' }}>
    Features
  </span>

  {/* Heading */}
  <h2 style={{ fontSize: '2rem', opacity: 1, filter: 'blur(0px)' }}>
    Powerful features to elevate<br></br> your business
  </h2>
</div>

<div className="bus-card-container">
      {/* Top row - 3 cards */}
      <div className="bus-card-row">
        <div>
        <div className="bus-card">
          <img
            src="/Image/hero-banner.png"
            alt="Card 1"
            className="bus-card-image"
          />
        </div>
        <h4>Smart scheduling</h4>
        <p>Auto-assign tasks & updates in real-time</p>
        </div>

        <div>
        <div className="bus-card">
          <img
            src="/Image/hero-banner.png"
            alt="Card 2"
            className="bus-card-image"
          />
        </div>
        <h4>Smart scheduling</h4>
        <p>Auto-assign tasks & updates in real-time</p>
        </div>


        <div>
        <div className="bus-card">
          <img
            src="/Image/hero-banner.png"
            alt="Card 3"
            className="bus-card-image"
          />
        </div>  
        <h4>Smart scheduling</h4>
        <p>Auto-assign tasks & updates in real-time</p>
        </div>
      </div>

      {/* Bottom row - 2 cards */}
      <div className="bus-card-row">

        <div>
        <div className="bus-card">
          <img
            src="/Image/hero-banner.png"
            alt="Card 4"
            className="bus-card-image"
          />
        </div>
        <h4>Smart scheduling</h4>
        <p>Auto-assign tasks & updates in real-time</p>
        </div>

        <div>
        <div className="bus-card">
          <img
            src="/Image/hero-banner.png"
            alt="Card 5"
            className="bus-card-image"
          />
        </div>
        
        <h4>Smart scheduling</h4>
        <p>Auto-assign tasks & updates in real-time</p>
        </div>

      </div>
    </div>




<div className="opacity-100 filter-none rotate-0 scale-100 text-center">
  {/* Badge */}
  <span 
    className="badge text-dark mb-3" 
    style={{ backgroundColor: '#ffe16bff', fontSize: '1rem', padding: '0.5rem 1rem' }}>
    Features
  </span>

  {/* Heading */}
  <h2 style={{ fontSize: '2rem', opacity: 1, filter: 'blur(0px)' }}>
    Enhance your productivity effortlessly with <br></br>over 50 integrations.
  </h2>
  <span>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like nothing.</span>

  
</div>




      <Footer />
    </div>
  );
}