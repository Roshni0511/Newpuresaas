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
    question: "What is PureSaas?",
    answer:
      "PureSaas is an all-in-one customer relationship management platform designed to help businesses streamline sales, automate workflows, manage leads, and strengthen customer relationships through powerful, easy-to-use tools."
  },
  {
    id: 2,
    question: "Who can benefit from using PureSaas?",
    answer:
      "PureSaas is ideal for sales teams, marketing professionals, customer support departments, and small to medium-sized businesses that want to improve productivity, boost collaboration, and gain actionable insights from customer data."
  },
  {
    id: 3,
    question: "Does PureSaas support automation?",
    answer:
      "Yes! PureSaas includes intelligent automation features that reduce manual tasks — such as automated lead assignment, follow-up reminders, deal tracking, and email workflows — so your team can focus on closing more deals."
  },
  {
    id: 4,
    question: "Can PureSaas integrate with other tools and platforms?",
    answer:
      "Absolutely. PureSaas easily integrates with popular tools like Google Workspace, Microsoft Outlook, marketing platforms, and other third-party applications to ensure a seamless workflow across your business ecosystem."
  },
  {
    id: 5,
    question: "Is my data safe with PureSaas?",
    answer:
      "Yes, data security is a top priority. PureSaas uses industry-standard encryption, regular backups, and secure cloud infrastructure to protect your business information and ensure your data stays private and safe."
  },
  {
    id: 6,
    question: "How long does it take to get started with PureSaas?",
    answer:
      "Getting started is quick and easy. Most businesses can set up their accounts, import customer data, and start managing leads within a few hours. Plus, our support team is always available to guide you through the setup process."
  }
];


// ==========================================================
// 3. Main FAQ Section Component (Exported)
// ==========================================================
const HomeFaq = () => {
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
    Find quick answers to the most common questions about PureSaas — from setup 
    and automation to integrations and data security. Learn how our CRM helps your 
    business streamline sales, boost productivity, and build lasting customer relationships.
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

export default HomeFaq;