import React, { useRef, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "../assets/css/sales.css"
import BrandSlider from '../component/BrandSlider'
import ProductForm from '../component/ProductForm'
import HomePricing from '../component/HomePricing'
import { FaHeart } from "react-icons/fa";


const faqData = [
    {
        id: 1,
        question: "What is a Sales CRM?",
        answer: "A Sales CRM (Customer Relationship Management) system is a software solution designed to manage and analyze customer interactions and data throughout the sales lifecycle. It helps streamline sales processes, improve customer relationships, and drive business growth."
    },
    {
        id: 2,
        question: "What are the benefits of real-time sales insights?",
        answer: "Real-time sales insights provide visibility into the sales pipeline, helping teams track progress, identify bottlenecks, and make informed decisions. This leads to more accurate forecasting and better management of sales opportunities."
    },
    {
        id: 3,
        question: "How does a Sales CRM enhance customer relationship management?",
        answer: "A Sales CRM enhances customer relationship management by storing detailed information about customers, including interaction history and preferences. This data enables personalized communication and helps build stronger client relationships."
    },
    {
        id: 4,
        question: "What types of reports can a Sales CRM generate?",
        answer: "A Sales CRM can generate various reports, including sales performance reports, lead conversion rates, pipeline status, and customer interactions. These reports provide insights into sales activities and help with strategic planning."
    },
    {
        id: 5,
        question: "How does a Sales CRM support sales forecasting?",
        answer: "Sales CRM systems support sales forecasting by analyzing historical data and current pipeline status to predict future sales performance. This helps with planning, resource allocation, and setting realistic sales targets."
    },
    {
        id: 6,
        question: "Can a Sales CRM be customized to fit specific business needs?",
        answer: "Yes,Sales CRM systems offer customization options, including customizable dashboards, workflows, and reporting features, allowing businesses to tailor the CRM to their specific sales processes and requirements."
    },
    {
        id: 7,
        question: "How does a Sales CRM facilitate team collaboration?",
        answer: "A Sales CRM facilitates team collaboration by providing shared access to customer data, notes, and communication tools. This ensures that team members are aligned, can collaborate effectively, and have access to the information they need."
    },
     {
        id: 8,
        question: "How does mobile access benefit sales teams?",
        answer: "Mobile access allows sales teams to manage client interactions, update information, and access CRM data from their smartphones or tablets, enhancing flexibility and enabling them to work effectively while on-the-go."
    }
];
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
const Sales = () => {

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
       <Navbar />
<div className="saleserp wow animate__animated animate__fadeInUp">

        <section className="hero-section">
      <div className="hero-content">
        <h1>
          Smart Sales CRM Solution
        <br />Built for Sales Professionals
        </h1>
        <p className="hero-subtext">
         PureSaaS CRM is a powerful, all-in-one sales management tool designed to help you accelerate your <br /> sales pipeline, stay organized, and grow your business effortlessly.
        </p>
<div className="hero-points">
  <span>⚡ Streamline your sales process effortlessly.</span>
  <span>🤝 Build stronger customer relationships with ease.</span>
  <span>🚀 Empower your team to close deals faster.</span>
</div>

        <button className="get-started-btn">Get started</button>
      </div>

      {/* Floating Cards */}
      <div className="floating-card card-left">
        <div className="credit-box">
          <p>Credit limit</p>
          <h4>$80224</h4>
        </div>
        <div className="transfer-box">
          <span className="icon">✅</span>
          <p>Transfer success!</p>
        </div>
      </div>

      <div className="floating-card card-right">
        <div className="balance-box">
          <p>Total balance</p>
          <h4>$45324</h4>
          <div className="mini-cards">
            <div className="income">Income <b>$48000</b></div>
            <div className="expense">Expenses <b>$02321</b></div>
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
    <ProductForm />
    <HomePricing />
<div className="saleserp">

         <section className="faq-section wow animate__animated animate__fadeInUp">
            <div className="faq-header">
                <span className="faq-tag">FAQ</span>
                <h2 className="faq-title">Commonly Asked Questions</h2>
                <p className="faq-description">
                    Neque accumsan dolor nullam commodo. Odio massa nisi ullamcorper suspendisse
                    amet amet. Aenean suspendisse eget est pulvinar. Fames eget eget nascetur ornare
                </p>
            </div>

            <div className="faq-accordion-container">
                {faqData.map((item) => (
                    <AccordionItem
                        key={item.id}
                        id={item.id} // Pass the ID for toggling
                        question={item.question}
                        answer={item.answer}
                        // Determine if this item is open by comparing its ID to the state
                        isOpen={item.id === openItemId}
                        toggleAccordion={handleToggle} // Pass the toggle function
                    />
                ))}
            </div>
        </section>
 
</div>
       <Footer />
    </>
  )
}

export default Sales
