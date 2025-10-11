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
        question: "What is the primary role of a business agency?",
        answer: "A business agency helps companies grow by offering strategic services like branding, digital marketing, business consulting, and customer experience optimization. Their goal is to improve performance and scalability."
    },
    {
        id: 2,
        question: "What kinds of services should I anticipate from a business agency?",
        answer: "You can expect services such as market research, brand development, content creation, social media management, SEO, paid advertising, website design, and strategic planning, all tailored to meet your business objectives."
    },
    {
        id: 3,
        question: "How often should I consider updating my website?",
        answer: "It's generally recommended to update your website every 2-3 years to ensure it remains modern, secure, and compatible with the latest web technologies and user experience trends. Minor content updates should be ongoing."
    },
    {
        id: 4,
        question: "Why is digital marketing essential for modern businesses?",
        answer: "Digital marketing is crucial because it allows businesses to reach a wider audience, track campaign performance accurately, engage with customers directly, and compete effectively in an increasingly online marketplace."
    },
    {
        id: 5,
        question: "How long does it typically take to see results from digital marketing efforts?",
        answer: "The timeframe for seeing results from digital marketing can vary widely based on the strategies employed, industry, competition, and budget. Some tactics like paid ads might show quicker results, while SEO and content marketing can take several months to yield significant impact."
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

export default HomeFaq;