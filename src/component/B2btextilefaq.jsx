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
        question: "What is a B2B Textile ERP and why should I use it?",
        answer: "A B2B Textile ERP is software designed to manage textile business operations including production, inventory, orders, and client management, helping streamline processes and boost efficiency."
    },
    {
        id: 2,
        question: "Can I manage orders and clients with this ERP?",
        answer: "Yes, you can track client orders, manage quotations, handle bulk B2B transactions, and maintain a centralized database for customer details and order history."
    },
    {
        id: 3,
        question: "Does it help with inventory and stock management?",
        answer: "Absolutely. You can monitor raw materials, finished goods, track stock levels in real-time, automate reorders, and reduce wastage across your textile operations."
    },
    {
        id: 4,
        question: "Can I manage production and manufacturing processes?",
        answer: "Yes, the ERP allows you to plan production schedules, monitor machine utilization, track work-in-progress, and optimize your textile manufacturing workflow."
    },
    {
        id: 5,
        question: "Does the ERP provide reporting and analytics?",
        answer: "Yes, you can generate real-time dashboards, sales reports, inventory insights, production efficiency metrics, and client order analytics to make informed business decisions."
    },
    {
        id: 6,
        question: "Can I automate communication and notifications?",
        answer: "Yes, you can send automated order confirmations, stock alerts, delivery updates, and client reminders to ensure smooth communication with partners and customers."
    },
    {
        id: 7,
        question: "Does the ERP integrate with other business tools?",
        answer: "Yes, it integrates with accounting software, supply chain tools, CRM systems, and e-commerce platforms to provide a seamless end-to-end textile business solution."
    }
];




// ==========================================================
// 3. Main FAQ Section Component (Exported)
// ==========================================================
const B2btextilefaq = () => {
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
    Simplify recruitment with our ATS. Manage applications, schedule interviews, track candidates, and make smarter hiring decisions—all in one place.
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

export default B2btextilefaq;