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
        question: "What is a Builder/Developer CRM and why do I need it?",
        answer: "A Builder/Developer CRM helps manage clients, leads, construction projects, and payments efficiently. It streamlines communication, tracks project progress, and ensures timely follow-ups to close deals faster."
    },
    {
        id: 2,
        question: "How can a CRM improve my lead management?",
        answer: "A CRM centralizes all project inquiries and client leads in one platform. It tracks lead sources, status, and engagement history, allowing you to prioritize high-potential clients and convert them into buyers or investors."
    },
    {
        id: 3,
        question: "Can a CRM help me track ongoing construction projects?",
        answer: "Yes. Most builder CRMs allow you to manage project timelines, milestones, and budgets. You can monitor progress, assign tasks, and generate reports for each project, keeping your team and clients informed."
    },
    {
        id: 4,
        question: "Does the CRM manage payments and booking details?",
        answer: "Absolutely. Builder CRMs track client payments, installment plans, booking confirmations, and payment schedules. This reduces errors and ensures smooth financial management for each project."
    },
    {
        id: 5,
        question: "Can the CRM integrate with other tools I use?",
        answer: "Yes, modern CRMs integrate with accounting software, email platforms, marketing tools, and calendar apps. This ensures seamless workflows and reduces repetitive data entry."
    },
    {
        id: 6,
        question: "Can I assign leads and projects to my team?",
        answer: "Yes, a Builder/Developer CRM allows you to assign leads, projects, and tasks to different team members. You can monitor performance, track follow-ups, and ensure accountability across your sales and operations teams."
    },
    {
        id: 7,
        question: "Is this CRM suitable for small builders as well as large developers?",
        answer: "Absolutely. The CRM is scalable—small builders can manage leads and projects efficiently, while large developers can coordinate multiple teams, projects, and clients seamlessly."
    },
    {
        id: 8,
        question: "Can I generate reports and analytics?",
        answer: "Yes, the CRM provides dashboards and reports that show project progress, sales performance, lead conversion rates, payment collection status, and overall business insights to help make informed decisions."
    }
];



// ==========================================================
// 3. Main FAQ Section Component (Exported)
// ==========================================================
const Builderfaq = () => {
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
    <h2 className="faq-title">
  Builder/Developer CRM FAQs
</h2>
<p className="faq-description">
  Answers to the most common questions about managing projects, clients, and payments efficiently.
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

export default Builderfaq;