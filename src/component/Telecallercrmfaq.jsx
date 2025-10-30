import React, { useState } from 'react';
import '../assets/css/Telecallercrmfaq.css'; 

const AccordionItem = ({ id, question, answer, isOpen, toggleAccordion }) => {
    return (
        <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
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
//  FAQ Data
// ==========================================================
const faqData = [
    {
        id: 1,
        question: "What is Telecaller CRM and why should I use it?",
        answer: "Telecaller CRM is a specialized software designed to manage leads, calls, and customer interactions efficiently. It streamlines telecalling operations, boosts productivity, and ensures follow-ups are never missed."
    },
    {
        id: 2,
        question: "Can I manage my leads and contacts with Telecaller CRM?",
        answer: "Yes, you can organize leads, track customer interactions, segment contacts, and maintain a complete communication history in a centralized system."
    },
    {
        id: 3,
        question: "Does Telecaller CRM provide call tracking?",
        answer: "Absolutely. You can log incoming and outgoing calls, record call notes, monitor call durations, and analyze telecaller performance to improve results."
    },
    {
        id: 4,
        question: "Can I automate follow-ups and reminders?",
        answer: "Yes, Telecaller CRM allows you to set automatic reminders, schedule follow-ups, and send alerts to ensure leads are contacted on time."
    },
    {
        id: 5,
        question: "Does it support team management?",
        answer: "Yes, you can assign leads to telecallers, track their performance, generate activity reports, and ensure accountability across your team."
    },
    {
        id: 6,
        question: "Can I generate analytics and reports?",
        answer: "Telecaller CRM provides real-time dashboards, performance reports, lead conversion analytics, and call statistics to help you make data-driven decisions."
    },
    {
        id: 7,
        question: "Does it integrate with other business tools?",
        answer: "Yes, Telecaller CRM integrates with popular tools like Google Workspace, Microsoft 365, email platforms, and VoIP systems to streamline your workflow."
    },
    {
        id: 8,
        question: "Is Telecaller CRM suitable for small and large teams?",
        answer: "Yes, it scales according to your business needs, whether you have a small sales team or a large telecalling operation, providing efficiency at every level."
    }
];


// ==========================================================
// Main Component
// ==========================================================
const TelecallercrmFaq = () => {
    const [openItemId, setOpenItemId] = useState(faqData[0].id);

    const handleToggle = (id) => {
        setOpenItemId(prevId => (prevId === id ? null : id));
    };

    return (
        <section className="faq-section wow animate__animated animate__fadeInUp">
            <div className="faq-header">
                <span className="faq-tag">FAQ</span>
                <h2 className="faq-title">Telecaller CRM - Frequently Asked Questions</h2>
                <p className="faq-description">
                    Find answers to the most common questions about Office ERP, its modules, and how it can improve your office operations.
                </p>
            </div>

            <div className="faq-accordion-container">
                {faqData.map((item) => (
                    <AccordionItem
                        key={item.id}
                        id={item.id}
                        question={item.question}
                        answer={item.answer}
                        isOpen={item.id === openItemId}
                        toggleAccordion={handleToggle}
                    />
                ))}
            </div>
        </section>
    );
};

export default TelecallercrmFaq;
