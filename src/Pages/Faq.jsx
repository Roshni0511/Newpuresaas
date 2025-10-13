import React, { useState, useEffect } from 'react';
import '../assets/css/Faq.css';
import Navbar from './Navbar';
import Footer from './Footer';

// ==========================================================
// Accordion Item Component
// ==========================================================
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

const Faq = () => {
  const [activeTab, setActiveTab] = useState('General CRM');
  const [openItemId, setOpenItemId] = useState(null);

  // Updated data for each tab with id, question, and answer
  const tabData = {
    'General CRM': [
      { id: 1, question: "What is this CRM used for?", answer: "Our CRM helps you manage leads, track client interactions, and automate sales and marketing workflows efficiently." },
      { id: 2, question: "Is the CRM cloud-based?", answer: "Yes, it is fully cloud-based, allowing access from any device with an internet connection." },
      { id: 3, question: "Can multiple team members use one account?", answer: "Yes, you can create multiple users with role-based permissions to manage your team effectively." },
      { id: 4, question: "Does it integrate with other apps?", answer: "Yes, the CRM integrates with popular tools like Gmail, Outlook, WhatsApp, and marketing platforms via API." },
      { id: 5, question: "Is training provided?", answer: "Yes, we offer tutorials, documentation, and onboarding sessions to help you get started." },
      { id: 6, question: "Can I customize workflows?", answer: "Absolutely, you can configure pipelines, automations, and dashboards to fit your business needs." }
    ],
    'Latest Updates': [
      { id: 7, question: "Recent version updates", answer: "The latest version 2.5.0 includes performance improvements, bug fixes, and new automation features." },
      { id: 8, question: "New feature additions", answer: "Added advanced reporting, email sequencing, and customizable lead scoring features." },
      { id: 9, question: "Bug fixes", answer: "Fixed issues related to mobile responsiveness, data export errors, and duplicate lead detection." },
      { id: 10, question: "Security improvements", answer: "Enhanced data encryption and two-factor authentication for all accounts." },
      { id: 11, question: "UI enhancements", answer: "Redesigned dashboard for easier navigation and improved visual reporting." },
      { id: 12, question: "Third-party integrations", answer: "Added support for new integrations including Zoom, Slack, and payment gateways." }
    ],
    'Privacy & Security': [
      { id: 13, question: "What data do we collect?", answer: "We collect personal info like name, email, usage data, and preferences to improve service delivery." },
      { id: 14, question: "How is my data used?", answer: "Data is used to personalize your experience, automate processes, and provide analytics and insights." },
      { id: 15, question: "Data retention policy", answer: "We retain data only as long as necessary for operational purposes or compliance, usually up to 2 years." },
      { id: 16, question: "Third-party sharing", answer: "We do not sell your data. Sharing with trusted service providers is under strict confidentiality." },
      { id: 17, question: "Can I delete my data?", answer: "Yes, you can request data deletion through account settings or by contacting support." },
      { id: 18, question: "Is data encrypted?", answer: "Yes, all data is encrypted in transit and at rest using industry-standard protocols." }
    ],
    'Terms & Policies': [
      { id: 19, question: "User responsibilities", answer: "Users must provide accurate information, maintain account security, and comply with laws." },
      { id: 20, question: "Prohibited activities", answer: "Unauthorized access, spamming, data theft, and violating intellectual property laws are prohibited." },
      { id: 21, question: "Account termination", answer: "Accounts may be suspended or terminated for violations of terms, without prior notice." },
      { id: 22, question: "Limitation of liability", answer: "Our liability is limited to the amount paid in the last 12 months; we are not liable for indirect damages." },
      { id: 23, question: "Changes to terms", answer: "We may update terms from time to time; continued use constitutes acceptance of changes." },
      { id: 24, question: "Governing law", answer: "These terms are governed by the laws of the jurisdiction where our company is registered." }
    ]
  };

  // Function to handle accordion toggling (only one open at a time)
  const handleToggle = (id) => {
    setOpenItemId(prevId => prevId === id ? null : id);
  };

  // Reset/open the first item when active tab changes
  useEffect(() => {
    const firstId = tabData[activeTab]?.[0]?.id || null;
    setOpenItemId(firstId);
  }, [activeTab]);

  return (
    <div>
      <Navbar />
      
      <div className="MissionHome wow animate__animated animate__fadeInUp">
        <div className="container">
          <section className="Mission-section">
            <div className="Mission-overlay">
              <div className="Mission-content">
                <p className="Mission-tag">Puresaas</p>
                <h2 className="Mission-title wow animate__animated animate__fadeInUp">
                  Faq
                </h2>
                <div className="mt-15">
                  <a href="/">Home</a>
                  <span className="padding-rl-20">|</span>
                  <span className="main-color">Faq</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="faq-section">
        <div className="faq-tabs-container">
          {/* Tab Headers */}
          <div className="faq-tabs-header">
            {['General CRM', 'Latest Updates', 'Privacy & Security', 'Terms & Policies'].map((tab) => (
              <button
                key={tab}
                className={`faq-tab-button ${activeTab === tab ? 'faq-active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content with Accordion */}
          <div className="faq-tab-content">
            <div className="faq-accordion-container">
              {tabData[activeTab]?.map((item) => (
                <AccordionItem
                  key={item.id}
                  id={item.id}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openItemId === item.id}
                  toggleAccordion={handleToggle}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faq;
