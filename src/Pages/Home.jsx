import React, { useEffect } from 'react';

import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faHandHoldingUsd,
  faTools,
  faUserCheck,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import HomePricing from '../component/HomePricing';
const Home = () => {
const features = [
    {
      id: 1,
      title: "Sales & pipeline management",
      description: [
        "Visual sales pipelines for complete deal visibility.",
        "One-click proposal and contract generation.",
        "AI-powered lead scoring to prioritize high-value prospects.",
      ],
      image: "/Image/feature-img-01.webp", // Replace with your real image
    },
    {
      id: 2,
      title: "Omnichannel customer support",
      description: [
        "Handle tickets, chat, and calls in one place.",
        "Chatbots for quick customer replies.",
        "Customer portal to lower ticket requests.",
      ],
      image: "/Image/feature-img-02.webp",
    },
    {
      id: 3,
      title: "AI-driven marketing automation",
      description: [
        "AI-powered email & SMS campaigns.",
        "Smart customer segmentation & personalized outreach.",
        "Performance tracking & analytics for marketing ROI.",
      ],
      image: "/Image/feature-img-03.webp",
    },
  ];
  return (
    <>
      <Navbar />
      {/* hero section start  */}
      <div className="Home-style wow">
         <section className="hero-section">
      <div className="hero-wrapper">
        
        {/* === Hero Banner === */}
        <div 
          className="hero-banner" 
          role="banner"
        >
          
          {/* === Left Content Column (Text & Form) === */}
          <div className="hero-content-column">
            
            <div className="text-content">
              {/* --- Badge --- */}
              <span className="badge-crm" id="badge-crm">Modern CRM</span>
              
              {/* --- Heading Group --- */}
              <div className="heading-group wow animate__animated animate__fadeInUp">
                <h1>AI-powered CRM for businesses</h1>
                <p>Automate sales, streamline customer relationships, and scale your business—all in one intuitive platform.</p>
              </div>
            </div>
            
            {/* --- Form and Trust Badges --- */}
            <div className="form-trust-group wow">
              
              {/* Form */}
              <form   className="email-form">
                <input 
                  id="userEmail" 
                  placeholder="Enter your email" 
                  required 
                  className="email-input" 
                  aria-label="Email address" 
                  type="email" 
                  name="email" 
                />
                <button type="submit" className="btn btn-start" aria-label="Get started with our CRM">
                  <span>Get started</span>
                </button>
                <button type="submit" className="btn btn-start-xl" aria-label="Get started with our CRM">
                  <span>Get started</span>
                </button>
              </form>
              
              {/* Trust Avatars */}
              <div className="trust-avatars">
                <div className="avatar-group" role="group">
                  {/* Avatars */}
                  <img alt="Customer avatar" className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfTkosk_XISYGUe8YAUWMrv0kcP5a4YMcVQ&s" />
                  <img alt="Customer avatar" className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s" />
                  <img alt="Customer avatar" className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIpmLxtBTN4VX7pLzwmg_B9Fl5Ta4HXjrhfOIza7qA3KZcTOkoTz1qzcakXPHMuAGxES8&usqp=CAU" />
                  
                  {/* Count Badge */}
                  <div className="avatar-count" aria-label="More than 99 additional customers">
                    99+
                  </div>
                </div>
                
                <div className="trust-text">
                  <p>Trusted by 20k+</p>
                  <p >Customers Across the globe</p>
                </div>
              </div>
            </div>
          </div>

          {/* === Right Image Column (Visualizations) === */}
          <div className="hero-image-column wow animate__animated animate__fadeInRight">
            {/* Figure 1 */}
            <figure className="figure-1 ">
              <img alt="CRM dashboard visualization" src="/Image/hero-img-01.webp" />
            </figure>
            
            {/* Figure 2 */}
            <figure className="figure-2">
              <img alt="CRM feature card" src="/Image/hero-img-03.svg" />
            </figure>
            
            {/* Figure 3 */}
            <figure className="figure-3">
              <img alt="CRM analytics view" src="/Image/hero-img-04.webp" />
            </figure>
            
            {/* Figure 4 */}
            <figure className="figure-4">
              <img alt="CRM customer profile" src="/Image/hero-img-02.webp" />
            </figure>
            
            {/* Figure 5 */}
            <figure className="figure-5">
              <img alt="CRM data visualization" src="/Image/hero-img-05.webp" />
            </figure>
            
            {/* Figure 6 */}
            <figure className="figure-6">
              <img alt="CRM sales pipeline view" src="/Image/hero-img-06.webp" />
            </figure>
            
            {/* Figure 7 */}
            <figure className="figure-7">
              <img alt="CRM activity feed" src="/Image/hero-img-07.webp" />
            </figure>
            
            {/* Figure 8 */}
            <figure className="figure-8">
              <img alt="CRM reporting interface" src="/Image/hero-img-08.webp" />
            </figure>
            
          </div>
        </div>
      </div>
    </section>
      </div>
      {/* hero section end  */}

      {/* property section start */}
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
      {/* property section end */}

      {/* Features section start */}
 <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <span className="features-badge">Features</span>
          <h2 className='wow animate__animated animate__fadeInUp'>Key features of PureSaas CRM</h2>
          <p>
            PureSaas CRM is designed to simplify and supercharge your customer
            relationship management. With a clean, user-friendly interface and
            powerful automation tools.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card wow animate__animated animate__fadeInUp">
              <div className="feature-top">
              
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="feature-image"
                />
              </div>

              <div className="feature-content">
                <h3>{feature.title}</h3>
                <ul>
                  {feature.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* Features section end */}

      {/* pricing section start  */}
      <HomePricing />
      {/* pricing section end  */}
      <Footer />
    </>
  )
}

export default Home
