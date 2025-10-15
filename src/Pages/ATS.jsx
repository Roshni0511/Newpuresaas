import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/ATS.css'
import HomeFaq from '../component/HomeFaq';
import HomePricing from '../component/HomePricing';
import ProductForm from '../component/ProductForm';
import Atsfaq from './Atsfaq';
export default function ATS() {
    const [email, setEmail] = useState('');
     const handleSubmit = (e) => {
            e.preventDefault();
            // Here you would typically handle the form submission,
            // e.g., send the email to an API, log it, etc.
            console.log('Email submitted:', email);
            alert(`Starting your trial for: ${email}`);
            setEmail(''); // Clear the input after submission
        };
    const data = [
  {
    icon: "fa-solid fa-universal-access", // Font Awesome icon class
    title: "Accessibility",
    desc: "Get instant access to important info anytime, anywhere—giving you the freedom to work on the move. Real estate agents can easily manage leads, properties, and communications wherever they are.",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Improved Productivity",
    desc: "Simplify your daily tasks with smooth workflows and efficient task management. Quick access to property details and client info helps you get more done, faster.",
  },
  {
    icon: "fa-solid fa-comments",
    title: "Enhanced Communication",
    desc: "Chat directly with your team through in-app messaging for fast, clear communication. Push notifications keep you updated on appointments, deadlines, and important news.",
  },
  {
    icon: "fa-solid fa-user-group",
    title: "Client Engagement",
    desc: "Clients can easily browse and search for properties right from their mobile devices. Stay connected with clients through alerts about new listings or updates on their deals.",
  },
];

  return (
    <div>
      <Navbar />
       {/* main section start  */}
        <section className="crypto-hero wow animate__animated animate__fadeInUp">
     
      <div className="left-cards">
        <div className="card sales-card">
            <img src="/Image/hero-img-07.webp" alt="" />
        </div>

        <div className="card sales-card">
          <img src="/Image/hero-img-05.webp" alt="" />
        </div>
      </div>

   <div className="center-content">
  <span className="badge">Recruitment</span>
  <h1>
    Simplify your <span>ATS hiring</span> process with ease.
  </h1>
  <p>
    Streamline candidate tracking, automate job postings, and manage interviews 
    seamlessly — all from one powerful Applicant Tracking System. 
    Focus on hiring top talent while we handle the workflow.
  </p>

  <div className="buttons">
    <button className="btn primary">Get started</button>
    <button className="btn secondary">Free trial</button>
  </div>

  <div className="trusted">
    <div className="avatars">
      <img src="https://i.pravatar.cc/40?img=1" alt="avatar" />
      <img src="https://i.pravatar.cc/40?img=2" alt="avatar" />
      <img src="https://i.pravatar.cc/40?img=3" alt="avatar" />
      <div className="avatar-count">99+</div>
    </div>
    <div className="trusted-text">
      <strong>Trusted by 20k+</strong>
      <p>HR teams across the globe</p>
    </div>
  </div>
</div>


      <div className="right-cards">
        <div className="card sales-card">
          <img src="/Image/hero-img-07.webp" alt="" />
        </div>

        <div className="card sales-card">
          <img src="/Image/hero-img-05.webp" alt="" />
        </div>
      </div>
    </section>
    {/* main section end  */}

    {/* why sales start  */}
       <div className="whyats wow animate__animated animate__fadeInUp">
        <section className="process-section">
      <div className="container">
        <span className="badge">Why</span>
        <h2>WHY ATS</h2>
        <p className="description">
     The Applicant Tracking System (ATS) simplifies the entire hiring journey — from job posting to onboarding. It helps recruiters manage applications, track candidate progress, automate communication, and make better hiring decisions, all in one intuitive and centralized platform.
     
        </p>

        <div className="process-content">
          {/* === Left Side Image Design === */}
          <div className="process-image">
            <img src="/Image/process.webp" alt="Process illustration" />
          </div>

          {/* === Right Side Steps === */}
          <div className="process-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-info">
                <h4>Streamlined Recruitment Workflow</h4>
                <p> Manage every stage of hiring — from posting jobs to shortlisting candidates — all in one organized system.
             </p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-info">
                <h4>Smart Candidate Tracking</h4>
                <p> Easily monitor candidate progress, schedule interviews, and keep your hiring team aligned in real time.
             </p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-info">
                <h4>Automated Communication</h4>
                <p>Save time with automated emails, status updates, and notifications to ensure a smooth experience for both recruiters and candidates.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
       </div>
    {/* why sales end  */}

    {/* Your Benefit section start  */}
   <div className="atsbenefit wow animate__animated animate__fadeInUp">
     <div className="finance-section">
      <div className="container">
        <h2>Finance and operation</h2>
        <p className="subtitle">
          NextSaaS is designed to serve a wide range of teams and industries.
          Whether you're managing data, scaling operations, optimizing finances,
          or streamlining customer experiences — NextSaaS is the platform that
          grows with you.
        </p>

        <div className="card-grid">
          {data.map((item, index) => (
            <div className="finance-card" key={index}>
              <div className="icon-box">
              <i className={item.icon}></i>
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
   </div>
    {/* Your Benefit section end  */}

    <ProductForm/>
    <HomePricing />
    <Atsfaq/>
    
    {/* email section start  */}
       <section className="cta-section wow animate__animated animate__fadeInUp">
            <div className="cta-content-left">
                <span className="cta-tag">Finance</span>
                <h1 className="cta-title">Ready to transform your business with PureSaas CRM</h1>
                <p className="cta-description">
                    Start your free trial today and see your ideas come to life easily and creatively.
                </p>
            </div>

            <div className="cta-form-right">
                <form onSubmit={handleSubmit} className="cta-form">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="cta-email-input"
                    />
                    <button type="submit" className="cta-button">Get started!</button>
                </form>
                <div className="cta-features">
                    <div className="feature-item">
                        <i className="fa-solid fa-circle-check "></i>
                        <span>No credit card required</span>
                    </div>
                    <div className="feature-item">
                        <i className="fa-solid fa-circle-check "></i>
                        <span>14-Day free trial</span>
                    </div>
                </div>
            </div>
        </section>
      {/* email section end   */}
      <Footer />
    </div>
  )
}
