import React, { useState } from 'react';
import '../assets/css/HomeFaq.css'; 

// ==========================================================
// 1. Accordion Item Component (Now controlled by Parent)
// ==========================================================
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

// ==========================================================
// 2. Data
// ==========================================================
const faqData = [
    {
        id: 1,
        question: "What is a Real Estate CRM and why should I use it?",
        answer: "A Real Estate CRM is software designed to manage property listings, client interactions, and sales processes efficiently. It helps agents and agencies track leads, nurture relationships, and close deals faster."
    },
    {
        id: 2,
        question: "Can I manage property listings and details with this CRM?",
        answer: "Yes, you can add, update, and organize property listings with photos, videos, pricing, and location details. The CRM helps you showcase properties to clients seamlessly."
    },
    {
        id: 3,
        question: "Does the CRM help with lead management?",
        answer: "Absolutely. It allows you to capture leads from multiple sources, assign them to agents, track their interactions, and follow up automatically to increase conversion rates."
    },
    {
        id: 4,
        question: "Can I schedule viewings and client meetings?",
        answer: "Yes, the CRM has built-in scheduling tools to plan property viewings, client meetings, and reminders, ensuring no appointment is missed."
    },
    {
        id: 5,
        question: "Does it provide reporting and analytics?",
        answer: "Yes, the CRM offers real-time dashboards, performance reports, sales pipeline insights, and lead conversion analytics to help make informed business decisions."
    },
    {
        id: 6,
        question: "Can I automate communication with clients?",
        answer: "Yes, you can send automated emails, SMS alerts, and follow-up reminders to clients, keeping them engaged throughout the buying or renting process."
    },
    {
        id: 7,
        question: "Does the CRM integrate with other tools?",
        answer: "Yes, it integrates with email platforms, social media channels, calendar apps, and other third-party tools to streamline workflows and enhance productivity."
    }
];


// ==========================================================
// 3. Main FAQ Section Component (Exported)
// ==========================================================
const Realestatecrmfaq = () => {
    // State now holds the ID of the currently open item.
    // It is initialized with the ID of the item we want open by default (the first one).
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
        <section className="faq-section wow animate__animated animate__fadeInUp">
            <div className="faq-header">
                <span className="faq-tag">FAQ</span>
                <h2 className="faq-title">Commonly Asked Questions</h2>
                <p className="faq-description">
    Manage properties, leads, and client interactions effortlessly. Our Real Estate CRM streamlines sales, schedules viewings, and tracks every deal from start to finish.
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
    );
};

export default Realestatecrmfaq;