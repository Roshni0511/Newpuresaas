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
// Office ERP FAQ Data
// ==========================================================
const faqData = [
    {
        id: 1,
        question: "What is Office ERP and why should I use it?",
        answer: "Office ERP is a comprehensive software that integrates HR, finance, inventory, and project management tools. It helps streamline office operations, reduce manual work, and improve overall productivity."
    },
    {
        id: 2,
        question: "Can I manage my HR tasks with Office ERP?",
        answer: "Yes, you can automate employee onboarding, attendance, payroll, and performance management, all in one centralized system."
    },
    {
        id: 3,
        question: "Does Office ERP handle financial accounting?",
        answer: "Absolutely. You can manage invoicing, expenses, compliance reports, and integrate with popular accounting tools like QuickBooks and Xero."
    },
    {
        id: 4,
        question: "Can I track inventory and procurement?",
        answer: "Office ERP lets you track stock levels, automate purchase orders, forecast demand, and reduce waste, ensuring efficient inventory management."
    },
    {
        id: 5,
        question: "Is project management supported?",
        answer: "Yes, you can plan tasks, timelines, and budgets, collaborate with your team, and use Gantt charts to monitor project progress."
    },
    {
        id: 6,
        question: "Can I generate analytics and reports?",
        answer: "Office ERP provides real-time dashboards and AI-driven insights on KPIs, helping you make informed decisions and monitor office performance."
    },
    {
        id: 7,
        question: "Does it integrate with other tools?",
        answer: "Yes, Office ERP seamlessly integrates with Google Workspace, Microsoft 365, Slack, and many other popular business apps."
    }
];

// ==========================================================
// Main Component
// ==========================================================
const OfficeErpFaq = () => {
    const [openItemId, setOpenItemId] = useState(faqData[0].id);

    const handleToggle = (id) => {
        setOpenItemId(prevId => (prevId === id ? null : id));
    };

    return (
        <section className="faq-section wow animate__animated animate__fadeInUp">
            <div className="faq-header">
                <span className="faq-tag">FAQ</span>
                <h2 className="faq-title">Office ERP - Frequently Asked Questions</h2>
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

export default OfficeErpFaq;
