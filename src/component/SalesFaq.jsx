import React, { useState } from 'react'

export default function SalesFaq() {
    const faqData = [
    {
        id: 1,
        question: "What is a Sales CRM?",
        answer: "A Sales CRM (Customer Relationship Management) system is a software solution designed to manage and analyze customer interactions and data throughout the sales lifecycle. It helps streamline sales processes, improve customer relationships, and drive business growth."
    },
    {
        id: 2,
        question: "What are the benefits of real-time sales insights?",
        answer: "Real-time sales insights provide visibility into the sales pipeline, helping teams track progress, identify bottlenecks, and make informed decisions. This leads to more accurate forecasting and better management of sales opportunities."
    },
    {
        id: 3,
        question: "How does a Sales CRM enhance customer relationship management?",
        answer: "A Sales CRM enhances customer relationship management by storing detailed information about customers, including interaction history and preferences. This data enables personalized communication and helps build stronger client relationships."
    },
    {
        id: 4,
        question: "What types of reports can a Sales CRM generate?",
        answer: "A Sales CRM can generate various reports, including sales performance reports, lead conversion rates, pipeline status, and customer interactions. These reports provide insights into sales activities and help with strategic planning."
    },
    {
        id: 5,
        question: "How does a Sales CRM support sales forecasting?",
        answer: "Sales CRM systems support sales forecasting by analyzing historical data and current pipeline status to predict future sales performance. This helps with planning, resource allocation, and setting realistic sales targets."
    },
    {
        id: 6,
        question: "Can a Sales CRM be customized to fit specific business needs?",
        answer: "Yes,Sales CRM systems offer customization options, including customizable dashboards, workflows, and reporting features, allowing businesses to tailor the CRM to their specific sales processes and requirements."
    },
    {
        id: 7,
        question: "How does a Sales CRM facilitate team collaboration?",
        answer: "A Sales CRM facilitates team collaboration by providing shared access to customer data, notes, and communication tools. This ensures that team members are aligned, can collaborate effectively, and have access to the information they need."
    },
     {
        id: 8,
        question: "How does mobile access benefit sales teams?",
        answer: "Mobile access allows sales teams to manage client interactions, update information, and access CRM data from their smartphones or tablets, enhancing flexibility and enabling them to work effectively while on-the-go."
    }
];

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
  return (
    <div>
      <div className="saleserp">

         <section className="faq-section wow animate__animated animate__fadeInUp">
            <div className="faq-header">
                <span className="faq-tag">FAQ</span>
                <h2 className="faq-title">Commonly Asked Questions</h2>
                <p className="faq-description">
                      Explore answers to the most common questions about our Sales CRM — from lead tracking and automation 
        to performance analytics. Learn how our platform helps you close deals faster and manage your sales 
        pipeline effortlessly.
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
 
</div>
    </div>
  )
}
