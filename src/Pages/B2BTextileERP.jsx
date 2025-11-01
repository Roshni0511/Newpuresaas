import React, { useRef, useState } from 'react'
import HomePricing from '../component/HomePricing'

import Footer from './Footer'
import BrandSlider from '../component/BrandSlider'
import "../assets/css/b2berp.css"
import ProductForm from '../component/ProductForm'
import B2btextilefaq from '../component/B2btextilefaq'
import ProductNavbar from "./AllNavbar/ProductNavbar";
import Bookdemoform from '../component/Bookdemoform'
import B2BTextileERPNavbar from './AllNavbar/B2BTextileERPNavbar'
// import { UploadCloud, Trash2, FileSpreadsheet, Search, Users, BarChart2 } from "lucide-react";


const faqData = [
    {
        id: 1,
        question: "What is B2B Textile ERP?",
        answer: "B2B Textile ERP is a software system designed to manage textile industry operations, including inventory, orders, production, and supply chain management."
    },
    {
        id: 2,
        question: "How does B2B Textile ERP improve efficiency?",
        answer: "It automates key processes like order management, stock tracking, and vendor coordination, reducing manual work and errors."
    },
    {
        id: 3,
        question: "Can B2B Textile ERP integrate with other software?",
        answer: "Yes, it can integrate with accounting, CRM, and e-commerce platforms to ensure smooth business operations."
    },
    {
        id: 4,
        question: "Does B2B Textile ERP support real-time inventory tracking?",
        answer: "Yes, it provides real-time stock updates, helping businesses manage raw materials and finished goods efficiently."
    },
    {
        id: 5,
        question: "How does it help in production planning?",
        answer: "It optimizes resource allocation, scheduling, and workflow management to ensure timely and cost-effective production."
    },
    {
        id: 6,
        question: "Is B2B Textile ERP useful for small textile businesses?",
        answer: "Yes, it helps businesses of all sizes by automating tasks, reducing costs, and improving operational efficiency."
    },
    {
        id: 7,
        question: "What are the key benefits of using B2B Textile ERP?",
        answer: "The main benefits include improved efficiency, cost reduction, real-time data access, and better decision-making capabilities."
    }
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

// It no longer manages its own 'isOpen' state but receives it as a prop.
const AccordionItem = ({ id, question, answer, isOpen, toggleAccordion }) => {

    return (
        <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
            {/* The onClick now calls the function passed down from the parent */}
            <button className="accordion-header" onClick={() => toggleAccordion(id)}>
                <h3 className="accordion-question">{question}</h3>
                <span className="accordion-icon">
                    
                    {isOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 15L12 8L19 15" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 9L12 16L5 9" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )}
                </span>
            </button>
            <div className={`accordion-content ${isOpen ? 'show' : ''}`}>
                <p>{answer}</p>
            </div>
        </div>
    );
};

const B2BTextileERP = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    alert('Demo booked successfully!');
    setIsModalOpen(false);
  };
  const containerRef = useRef(null);
   const [openItemId, setOpenItemId] = useState(faqData[0].id);
  
      // Function to handle the opening/closing logic
      const handleToggle = (id) => {
          setOpenItemId(prevId => {
              // If the clicked item is already open, close it (set to null)
              if (prevId === id) {
                  return null;
              }
              // Otherwise, open the new item
              return id;
          });
      };
     
  return (
    <>
    <ProductNavbar />
    <B2BTextileERPNavbar />
    <div className='texttile'>

      <section className="hero-section ">
      <div className="hero-content">
        <div className="left-side wow animate__animated animate__fadeInUp" >
          <span className="badge">Bring your ideas to life</span>
          <h2 className="hero-title">
            Smart Real Estate CRM Solution
Built for Real Estate Businesses & Teams
          </h2>
          <p className="hero-text">
         Are you a real estate firm, brokerage, or property management company looking to centralize operations, streamline lead management, and scale your business? PureSaaS has the solution!
PureSaas is your all-in-one, enterprise-ready real estate management solution
          </p>
          <p className="hero-text">
          Built for B2B needs, it helps your team manage leads, track property listings, automate client follow-ups, and optimize your entire sales pipeline—from inquiry to close.
          </p>
          <div className="input-group">
         
            <button className="btn-start" onClick={() => setIsModalOpen(true)}>Request a Demo</button>
          </div>
          <div className="trust-section">
            <div className="avatars">
              <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" className="avatar" />
              <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="" className="avatar" />
              <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="" className="avatar" />
              <div className="avatar more">99+</div>
            </div>
            <div className="trust-text">
              <strong>Trusted by 20k+</strong><br />
              Customers across the globe
            </div>
          </div>
        </div>
        <div className="right-side wow animate__animated animate__fadeInUp">
          <div className="pattern-bg"></div>
          <img src="/Image/b2b.png" alt="Server" className="hero-img"  />
        </div>
      </div>
   <section className="money-section wow animate__animated animate__fadeInUp">
     

      <div className="cards-grid">
        <div className="card">
          <div className="card-inner">
            <div className="upload-icon side">
          <img src="https://cdn-icons-png.flaticon.com/512/300/300218.png" alt="playstore" />
        </div>
            <h3>Google Play Store</h3>
           <p>Download your favorite apps instantly</p>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="upload-icon">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
        alt="appstore"
      />
    </div>
            <h3>Apple App Store</h3>
            <p>Store, access, and manage data from anywhere.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="upload-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/954/954591.png" alt="ai" />
            </div>
            <h3>Software Suggest</h3>
         <p>Trending Software of 2022 updates</p>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="upload-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" alt="connect" />
            </div>
            <h3>Winner</h3>
            <p>Vibrant Gujarat Startup & Tech Summit</p>
          </div>
        </div>
      </div>
    </section>
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
 <div className='texttile'>

             <div className=" wow animate__animated animate__fadeInUp">
       <div className="section-container" >
      <div className="installation-manual-card">
       <h3 >
Smart Features for Smarter Real Estate Business<br />
  <p style={{color:'#a060ff',marginTop:'20px',fontSize:"18px"}}>
Explore powerful tools designed to streamline, automate, and elevate your real estate operations.</p>
</h3>
        
         <div className="features-grid" >
          
          {/* Feature 1 */}
          <div className="feature-item">
             <i className="fa-solid fa-user-tie icon"></i>
            <h3>Lead Management</h3>
            <p>Track, organize, and nurture leads across your entire team with ease.</p>
          </div>
          
          {/* Feature 2 */}
          <div className="feature-item">
            <i className="fa-solid fa-shield-alt icon"></i>
            <h3>Cloud-Based Platform</h3>
            <p>Secure, scalable access to your CRM from any device, ensuring your team stays connected.</p>
          </div>
          
          {/* Feature 3 */}
          <div className="feature-item">
           <i className="fas fa-user-shield icon" ></i>
            <h3>Client Data Security</h3>
            <p>Protect sensitive client and transaction information with enterprise-grade encryption.</p>
          </div>

                 <div className="feature-item">
         <i className="fas fa-handshake icon"></i>
            <h3>Faster Deal Closures</h3>
            <p>Speed up your sales cycle with intelligent automation and workflow management.</p>
          </div>

          
          
        </div>
         <div className="features-grid">
          
          {/* Feature 1 */}
          <div className="feature-item">
            <i className="fas fa-globe icon" ></i>
            <h3>Multi-Listing & Multi-Region Support</h3>
            <p>Effortlessly manage property listings across regions, offices, and platforms.    </p>
          </div>
          
          {/* Feature 2 */}
          <div className="feature-item">
           <i className="fas fa-bell icon" ></i>   
          <h3>Real-Time Notifications</h3>
            <p>Get instant alerts on lead activity and deal progress to stay proactive.</p>
          </div>
          
          {/* Feature 3 */}
          <div className="feature-item">
          <i className="fas fa-robot icon" ></i>
            <h3>Automated Follow-Ups</h3>
            <p>Never miss a lead with built-in email automation and task reminders.</p>
          </div>

                 <div className="feature-item">
  <i className="fas fa-chart-line icon  " ></i>            <h3>Market Insights & Analytics</h3>
            <p>Leverage data-driven insights to anticipate trends and make smarter business decisions.</p>
          </div>

          
          
        </div>
      </div>
    </div>
    </div>
      </div>


      
    <BrandSlider />
    <ProductForm />
    <HomePricing />
    <B2btextilefaq/>


 <div className='texttile'>
        <div className="missionslide wow animate__animated animate__fadeInUp">
  <div className="container">
          <h2 className="mission-heading wow animate__animated animate__fadeInUp" style={{fontSize:'50px',display:'flex',justifyContent:'center'}}>
            Your Benefit
          </h2>
    <div className="row">
      <div className="col-lg-6">
        <div>
     
          <img src="/Image/mission.webp" alt="" width="90%" />
        </div>
      </div>

      <div className="col-lg-6">
        <div className="cards" ref={containerRef}>
          {data.map((item, index) => (
            <div className="card" key={index}>
              <div className="card__inner">
                <div className="card__content">
                  <h1 className="card__title">
                    <i className={`fa-solid ${item.icon}`} style={{ marginRight: "10px", color: "#4CAF50" }}></i>
                    {item.title}
                  </h1>
                  <p className="card__description">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
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

export default B2BTextileERP
