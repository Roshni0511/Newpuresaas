import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/Realestatecrm.css'
import HomePricing from '../component/HomePricing';
import HomeFaq from '../component/HomeFaq';
import ProductForm from '../component/ProductForm';
import Realestatecrmfaq from '../component/Realestatercmfaq';
import ProductNavbar from './ProductNavbar';
import Bookdemoform from '../component/Bookdemoform';



export default function Realestatecrm() {
  const cardImages = {
    left: '/Image/hero-img-07.webp', // Replace with actual path or URL
    center: '/Image/hero-img-07.webp', // Replace with actual path or URL
    right: '/Image/hero-img-07.webp', // Replace with actual path or URL
  };
 const platforms = [
  { id: 1, icon: '/Image/googleplaystore.png', title: 'Google Play Store', subtitle: 'Android App Marketplace' },
  { id: 2, icon: '/Image/appleapp.png', title: 'Apple App Store', subtitle: 'iOS & macOS Downloads' },
  { id: 3, icon: '/Image/software.png', title: 'Software Suggest', subtitle: 'Software Reviews & Ratings' },
  { id: 4, icon: '/Image/windows.png', title: 'Winner', subtitle: 'Business Software Solutions' },
];
const features = [
  {
    id: 1,
    title: 'Lead Management',
    description: 'Easily keep track of your leads and nurture them into happy clients.',
    iconClass: 'fas fa-funnel-dollar', // Icon for tracking/converting leads
  },
  {
    id: 2,
    title: 'Cloud Access',
    description: 'Access your CRM anytime, anywhere — from any device you like.',
    iconClass: 'fas fa-cloud', // Standard cloud/access icon
  },
  {
    id: 3,
    title: 'Client Data Security',
    description: 'Keep your clients’ information safe and sound with top-level encryption.',
    iconClass: 'fas fa-shield-alt', // Shield/Security icon
  },
  {
    id: 4,
    title: 'Faster Deal Closures',
    description: 'Speed up your sales process with smart automation working for you.',
    iconClass: 'fas fa-rocket', // Rocket/Speed/Launch icon
  },
  {
    id: 5,
    title: 'Multi-Listing Support',
    description: 'Manage all your listings across different regions and platforms with ease.',
    iconClass: 'fas fa-building', // Building/Listing icon
  },
  {
    id: 6,
    title: 'Real-Time Alerts',
    description: 'Get instant updates on leads and deals so you’re always in the loop.',
    iconClass: 'fas fa-bell', // Bell/Alerts icon
  },
  {
    id: 7,
    title: 'Automated Follow-Ups',
    description: 'Never let a lead slip away — automated emails and reminders do the work for you.',
    iconClass: 'fas fa-robot', // Robot/Automation icon
  },
  {
    id: 8,
    title: 'Market Insights',
    description: 'Stay ahead of the curve with data that helps you spot trends and opportunities.',
    iconClass: 'fas fa-chart-line', // Line chart/Insights icon
  },
];
const Benefit = [
  { id: 1, name: 'Accessibility', text: "Get instant access to important info anytime, anywhere—giving you the freedom to work on the move. Real estate agents can easily manage leads, properties, and communications wherever they are." },
  { id: 2, name: 'Improved Productivity', text: "Simplify your daily tasks with smooth workflows and efficient task management. Quick access to property details and client info helps you get more done, faster." },
  { id: 3, name: 'Enhanced Communication', text: "Chat directly with your team through in-app messaging for fast, clear communication. Push notifications keep you updated on appointments, deadlines, and important news." },
  { id: 4, name: 'Client Engagement', text: "Clients can easily browse and search for properties right from their mobile devices. Stay connected with clients through alerts about new listings or updates on their deals." },
  
 
];

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
      {/* main section start  */}
    <div className="realproduct">
    <div className="landing-container">
      {/* Background Animation Placeholder */}
      <div className="animated-background-lines">
        {/*
          In a real application, this div would likely contain
          multiple elements (lines, svgs, etc.) styled with CSS
          or controlled by an animation library (e.g., Framer Motion)
          to achieve the dynamic effect seen in the original image.
        */}
      </div>

      <header className="header-text wow animate__animated animate__fadeInUp">
        <p className="small-text">Keep an eye on your finances</p>
        <h1 className="main-title ">
          Smart <span className="highlight">Real Estate CRM Solution</span> Built for Property Professionals
        </h1>
        <p className="sub-text">
         PureSaaS CRM is a powerful, all-in-one real estate management tool designed to help you close more deals, stay organized, and grow your business effortlessly.
        </p>
        <button className="free-demo-btn">
          Get a free demo
        </button>
      </header>

      {/* Image Cards Section */}
      <section className="image-cards-section wow animate__animated animate__fadeInUp">
        <div className="card-wrapper left">
          <img src={cardImages.left} alt="Abstract Card 1" className="image-card" />
        </div>
        <div className="card-wrapper center">
          <img src={cardImages.center} alt="Abstract Card 2" className="image-card" />
        </div>
        <div className="card-wrapper right">
          <img src={cardImages.right} alt="Abstract Card 3" className="image-card" />
        </div>
      </section>
    </div>
    </div>
          {/* main section end  */}
      
      {/* social section start */}
      <div className="socialsec wow animate__animated animate__fadeInUp ">
       <div className="social-selector-container">
     

      <div className="content-wrapper">
        <p className="section-tag">Ratings & Reviews</p>
        <h1 className="main-heading"> Where are your apps and software rated?</h1>
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
              <button className="arrow-button">
                &rarr; {/* Right arrow character */}
              </button>
            </div>
          ))}
        </div>

      
      </div>
    </div>
      </div>
      {/* social section end  */}
        
      {/* service section start  */}
    <div className="mortgage-solutions-section">
      <div className="container">
        {/* Header Section */}
        <div className="header-content">
          <p className="tag-line">Features</p>
          <h1 className="main-heading">Smart Features for Smarter Business</h1>
          <p className="sub-heading">
           Explore powerful tools crafted to make your textile business streamlined, automated, and intelligent.
          </p>
        </div>

        {/* Features and Image Grid */}
        <div className="features-grid">
          {/* Left Column Features */}
          <div className="features-column left">
            {features.slice(0, 4).map(feature => (
              <div key={feature.id} className="feature-item">
                <i className={`feature-icon ${feature.iconClass}`}></i> {/* Use <i> tag for Font Awesome */}
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Central Image */}
          <div className="central-image-container">
            <img 
              src='/Image/hold-mobile.webp' 
              alt="Mobile phone displaying card interfaces in a hand" 
              className="phone-in-hand-img" 
            />
          </div>

          {/* Right Column Features */}
          <div className="features-column right">
            {features.slice(4, 8).map(feature => (
              <div key={feature.id} className="feature-item">
                <i className={`feature-icon ${feature.iconClass}`}></i> {/* Use <i> tag for Font Awesome */}
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
      {/* service section end  */}

      {/* PRODUCT FORM START  */}
          <ProductForm />
    {/* product form end  */}
      <HomePricing />

      {/* features section start  */}
       <div className="combined-page-wrapper">
      
      <section className="testimonials-section">
        <div className="container testimonials-container">
          <p className="section-tag reviews-tag">Your Benefit</p>
          <h2 className="section-heading">Achieve More with Less Effort.</h2>
          
          <div className="reviews-grid">
            {Benefit.map(review => (
              <div key={review.id} className="review-card">
              
                <div className="review-header">
                  {/* Placeholder for user avatar */}
                  <span className="user-avatar">{review.name[0]}</span> 
                  <div className="user-info">
                    <p className="user-name">{review.name}</p>
                   
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      </div>
      {/* features section end  */}
      
      <Realestatecrmfaq/>

      {/* email section start  */}

       <Bookdemoform />
      {/* email section end   */}
      <Footer />
    </div>
  )
}
