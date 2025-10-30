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
// Second Hand Car Management System FAQ Data
// ==========================================================
const faqData = [
    {
        id: 1,
        question: "What is the Second Hand Car Management System?",
        answer: "It’s a digital platform that helps car dealers, resellers, and individuals manage the buying, selling, and inventory of pre-owned vehicles efficiently in one place."
    },
    {
        id: 2,
        question: "How does it help car dealers?",
        answer: "Dealers can manage their car listings, track customer inquiries, maintain sales records, and analyze performance — all through a centralized dashboard."
    },
    {
        id: 3,
        question: "Can I upload vehicle photos and details?",
        answer: "Yes, you can add multiple car images, set prices, upload RC details, and provide full vehicle specifications for buyers to view."
    },
    {
        id: 4,
        question: "Does it include customer and lead management?",
        answer: "Absolutely. The system helps you capture leads from online and offline sources, follow up with potential buyers, and manage customer communications easily."
    },
    {
        id: 5,
        question: "Can I track vehicle history and maintenance records?",
        answer: "Yes, the system allows you to store service history, previous ownership details, and inspection reports to ensure transparency and build trust with buyers."
    },
    {
        id: 6,
        question: "Is there a reporting or analytics feature?",
        answer: "Yes, real-time analytics show your top-selling models, active listings, sales trends, and profit margins to help improve your dealership’s performance."
    },
    {
        id: 7,
        question: "Can it integrate with my website or mobile app?",
        answer: "Yes, the system supports integration with dealer websites and mobile apps, allowing automatic syncing of inventory and updates in real time."
    }
];

// ==========================================================
// Main Component
// ==========================================================
const SecondHandCarfaq = () => {
    const [openItemId, setOpenItemId] = useState(faqData[0].id);

    const handleToggle = (id) => {
        setOpenItemId(prevId => (prevId === id ? null : id));
    };

    return (
        <section className="faq-section wow animate__animated animate__fadeInUp">
            <div className="faq-header">
                <span className="faq-tag">FAQ</span>
                <h2 className="faq-title">Second Hand Car Management System - Frequently Asked Questions</h2>
                <p className="faq-description">
                    Find answers to common questions about the Second Hand Car Management System and how it simplifies buying, selling, and managing used cars.
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

export default SecondHandCarfaq;
