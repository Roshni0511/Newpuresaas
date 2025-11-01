import React, {  useState } from 'react'
import Footer from './Footer'
import "../assets/css/sales.css"
import BrandSlider from '../component/BrandSlider'
import ProductForm from '../component/ProductForm'
import HomePricing from '../component/HomePricing'
import { FaHeart } from "react-icons/fa";
import ProductNavbar from "./AllNavbar/ProductNavbar";
import Bookdemoform from '../component/Bookdemoform'
import SalesNavbar from './AllNavbar/SalesNavbar'
import SalesFaq from '../component/SalesFaq'



const collectors = [
  {
    name: "Google Play Store",
    desc: "Download your favorite apps instantly",
    color: "linear-gradient(135deg, #ffb199 0%, #ff0844 100%)",
  icon: "▶️",
  },
  {
    name: "Apple App Store",
    desc: "Store, access, and manage data from anywhere.",
    color: "linear-gradient(135deg, #b993d6 0%, #8ca6db 100%)",
     icon: "📱", 
  },
  {
    name: "Software Suggest",
    desc: "Trending Software of 2022 updates",
    color: "linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)",
    icon: "💻", // laptop = software or technology
  },
   {
    name: "Winner",
    desc: "Vibrant Gujarat Startup & Tech Summit",
    color: "linear-gradient(135deg, rgb(132 215 250) 0%, rgb(73 75 131) 100%)", // 🩵 mint-blue (unique & premium look)
    icon: "🏆",
  },
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

 const data = [
  {
    title: "Accessibility",
    icon: "fa-elevator", // 🚀 Accessibility
    desc: `Get instant access to important info anytime, anywhere—giving you the freedom to work on the move. Real estate agents can easily manage leads, properties, and communications wherever they are.`,
  },
  {
    title: "Improved Productivity",
    icon: "fa-bolt", // ⚡ Productivity
    desc: `Simplify your daily tasks with smooth workflows and efficient task management. Quick access to property details and client info helps you get more done, faster.`,
  },
  {
    title: "Enhanced Communication",
    icon: "fa-comments", // 💬 Communication
    desc: `Chat directly with your team through in-app messaging for fast, clear communication. Push notifications keep you updated on appointments, deadlines, and important news.`,
  },
  {
    title: "Client Engagement",
    icon: "fa-handshake", // 🤝 Engagement
    desc: `Clients can easily browse and search for properties right from their mobile devices. Stay connected with clients through alerts about new listings or updates on their deals.`,
  },
];


const Sales = () => {
const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    alert('Demo booked successfully!');
    setIsModalOpen(false);
  };
   
  return (
    <>
       <ProductNavbar />
       <SalesNavbar />
<div className="saleserp wow animate__animated animate__fadeInUp">

        <section className="hero-section">
      <div className="hero-content">
        <h1>
          Smart Sales CRM Solution
        <br />Built for Sales Professionals
        </h1>
        <p className="hero-subtext">
         PureSaas is a powerful, all-in-one sales management tool designed to help you accelerate your <br /> sales pipeline, stay organized, and grow your business effortlessly.
        </p>
<div className="hero-points">
  <span>⚡ Streamline your sales process effortlessly.</span>
  <span>🤝 Build stronger customer relationships with ease.</span>
  <span>🚀 Empower your team to close deals faster.</span>
</div>

        <button className="get-started-btn" onClick={() => setIsModalOpen(true)}>Get started</button>
      </div>

      {/* Floating Cards */}
      <div className="floating-card card-left">
        <div className="credit-box">
          <p>Credit limit</p>
          <h4>₹80224</h4>
        </div>
        <div className="transfer-box">
          <span className="icon">✅</span>
          <p>Transfer success!</p>
        </div>
      </div>

      <div className="floating-card card-right">
        <div className="balance-box">
          <p>Total balance</p>
          <h4>₹45324</h4>
          <div className="mini-cards">
            <div className="income">Income <b>₹48000</b></div>
            <div className="expense">Expenses <b>₹02321</b></div>
          </div>
        </div>
      </div>

      <div className="floating-card card-bottom">
        <p>How AI assist your file?</p>
        <div className="upload-box">
          <div className="upload-icon">💡</div>
          <p>Ensure your doc contains text and is under 10 MB</p>
        </div>
      </div>
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


</div>

<div className="saleserp wow animate__animated animate__fadeInUp">
    

  <div className="card-container">
      {collectors.map((item, index) => (
        <div key={index} className="collector-card" style={{ background: item.color }}>
          <div className="heart-icon">
            <FaHeart />
          </div>

          <div className="inner-card">
            <div className="avatar">{item.icon}</div>
            <h3>{item.name}</h3>
            <p className="title">{item.title}</p>
            <p className="desc">{item.desc}</p>
          </div>

        </div>
      ))}
    </div>
    </div>
    <BrandSlider />
    <div className="saleserp">

    <div className="smart-features-section">
  <div className="container">
    <div className="features-header">
      <p className="tag">Features</p>
      <h1 className="heading">Smart Features for Smarter Business</h1>
      <p className="description">
        Explore powerful tools crafted to make your textile business streamlined,
        automated, and intelligent.
      </p>
    </div>

    <div className="features-layout">
      {/* Image side */}
      <div className="image-area">
        <img
          src="/Image/hold-mobile.webp"
          alt="Smart business mobile view"
          className="floating-image"
        />
        <div className="blur-bg"></div>
      </div>

      {/* Features Cards */}
      <div className="features-cards">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="icon-box">
              <i className={`fa ${feature.iconClass}`}></i>
            </div>
            <div className="text-box">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
    </div>

    <ProductForm />
    <HomePricing />
<SalesFaq />
<div className="saleserp">
<div className="benefit-modern-section">
  <div className="container">
    <h2 className="benefit-modern-title">Your Benefit</h2>

    <div className="benefit-modern-layout">
      {/* Left Image Section */}
      <div className="benefit-modern-image">
        <img src="/Image/mission.webp" alt="Mission" />
      </div>

      {/* Right Animated Cards */}
      <div className="benefit-modern-cards">
        {data.map((item, index) => (
          <div className="benefit-modern-card" key={index}>
            <div className="benefit-modern-icon">
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
            <div className="benefit-modern-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


  </div>
        <Bookdemoform />
       <Footer />
    </>
  )
}

export default Sales
