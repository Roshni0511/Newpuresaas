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
        question: "What is an Application Tracking System (ATS) and why should I use it?",
        answer: "An ATS is software that helps companies manage the recruitment process efficiently. It allows HR teams to track job applications, manage candidate pipelines, and streamline hiring workflows."
    },
    {
        id: 2,
        question: "Can I post job openings through the ATS?",
        answer: "Yes, you can create and publish job listings on multiple platforms including your company website, job portals, and social media, all from a single dashboard."
    },
    {
        id: 3,
        question: "Does the ATS help with candidate management?",
        answer: "Absolutely. You can track applications, manage resumes, organize candidate profiles, schedule interviews, and maintain communication throughout the hiring process."
    },
    {
        id: 4,
        question: "Can I automate interview scheduling and reminders?",
        answer: "Yes, the ATS can automate interview scheduling, send reminders to candidates and interviewers, and integrate with calendar tools to avoid conflicts."
    },
    {
        id: 5,
        question: "Does the ATS provide analytics and reporting?",
        answer: "Yes, you can generate reports on candidate pipelines, application sources, hiring timelines, and team performance to make data-driven recruitment decisions."
    },
    {
        id: 6,
        question: "Can I collaborate with my team using the ATS?",
        answer: "Yes, team members can share feedback, rate candidates, assign tasks, and communicate within the platform to improve hiring collaboration and efficiency."
    },
    {
        id: 7,
        question: "Does the ATS integrate with other HR and productivity tools?",
        answer: "Yes, it integrates with HR software, email platforms, calendar apps, and job boards to streamline your recruitment workflow and maintain seamless communication."
    }
];



// ==========================================================
// 3. Main FAQ Section Component (Exported)
// ==========================================================
const Atsfaq = () => {
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

export default Atsfaq;