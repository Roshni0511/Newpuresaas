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
        question: "What is a Real Estate CRM and why do I need it?",
        answer: "A Real Estate CRM (Customer Relationship Management) helps agents manage leads, clients, property listings, and communications efficiently. It streamlines operations, ensures timely follow-ups, and helps close deals faster."
    },
    {
        id: 2,
        question: "How can a CRM improve my lead management?",
        answer: "A CRM centralizes all leads in one place, tracks their source, status, and engagement history. This allows agents to prioritize high-potential leads, follow up promptly, and convert more prospects into clients."
    },
    {
        id: 3,
        question: "Can a Real Estate CRM help with property management?",
        answer: "Yes, most CRMs allow you to manage property listings, schedule viewings, track property status, and maintain detailed records. This makes it easier to match clients with the right properties quickly."
    },
    {
        id: 4,
        question: "Does a CRM integrate with other tools I use?",
        answer: "Modern CRMs integrate with email platforms, marketing tools, social media, accounting software, and calendar apps. This ensures seamless workflows and reduces manual data entry."
    },
    {
        id: 5,
        question: "How can a CRM help me stay in touch with clients?",
        answer: "CRMs provide automated follow-ups, reminders, email campaigns, and SMS notifications. This ensures no client is forgotten and strengthens long-term relationships for repeat business."
    },
    {
        id: 6,
        question: "Is it suitable for solo agents as well as large agencies?",
        answer: "Absolutely. CRMs are scalable—solo agents can manage their personal leads efficiently, while larger agencies can coordinate teams, assign leads, and monitor performance across multiple agents."
    },
    {
        id: 7,
        question: "Can I track my sales performance with a Real Estate CRM?",
        answer: "Yes, CRMs offer dashboards and reports that show sales performance, lead conversion rates, agent activity, and revenue trends, helping you make informed decisions and improve strategies."
    }
];


// ==========================================================
// 3. Main FAQ Section Component (Exported)
// ==========================================================
const RealEstateAgentCRMfaq = () => {
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
    );
};

export default RealEstateAgentCRMfaq;