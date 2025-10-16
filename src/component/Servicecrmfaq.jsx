import React, { useState } from 'react';
import '../assets/css/HomeFaq.css'; 

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
// Service crm FAQ Data
// ==========================================================
const faqData = [
    {
        id: 1,
        question: "What is Service CRM and why should I use it?",
        answer: "Service CRM is a comprehensive platform that helps manage customer relationships, track service requests, and streamline support operations. It improves customer satisfaction and boosts team productivity."
    },
    {
        id: 2,
        question: "Can I manage customer interactions efficiently?",
        answer: "Yes, Service CRM centralizes all customer communications including calls, emails, and chat, allowing your team to respond quickly and maintain strong customer relationships."
    },
    {
        id: 3,
        question: "Does Service CRM provide reporting and analytics?",
        answer: "Absolutely. You can track KPIs, monitor service team performance, and generate real-time reports to make informed business decisions."
    },
    {
        id: 4,
        question: "Can I track service tickets and requests?",
        answer: "Yes, Service CRM lets you create, assign, and monitor service tickets, set priorities, and ensure timely resolution for all customer requests."
    },
    {
        id: 5,
        question: "Is it suitable for multiple teams and departments?",
        answer: "Yes, Service CRM supports multiple teams, allowing each department to manage its own workflows while providing a unified view of all customer interactions."
    },
    {
        id: 6,
        question: "Does Service CRM integrate with other tools?",
        answer: "Yes, it integrates seamlessly with popular tools like Google Workspace, Microsoft 365, Slack, email systems, and more to enhance workflow automation."
    },
    {
        id: 7,
        question: "Can I customize Service CRM for my business?",
        answer: "Absolutely. You can customize workflows, fields, dashboards, and reports to match your business needs and create a solution that fits your operations perfectly."
    }
];


// ==========================================================
// Main Component
// ==========================================================
const ServicecrmFaq = () => {
    const [openItemId, setOpenItemId] = useState(faqData[0].id);

    const handleToggle = (id) => {
        setOpenItemId(prevId => (prevId === id ? null : id));
    };

    return (
        <section className="faq-section wow animate__animated animate__fadeInUp">
            <div className="faq-header">
                <span className="faq-tag">FAQ</span>
                <h2 className="faq-title">Service CRM - Frequently Asked Questions</h2>
                <p className="faq-description">
                    Find answers to the most common questions about Service CRM, its modules, and how it can improve your office operations.
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

export default ServicecrmFaq;
