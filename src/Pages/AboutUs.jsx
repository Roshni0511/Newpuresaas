import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


  const steps = [
    {
      id: "01",
      title: "Discovery & strategy",
      desc: "Start your application in minutes—no paperwork required.",
    },
    {
      id: "02",
      title: "Design & prototype",
      desc: "Our team reviews your application and offers a personalized solution.",
    },
    {
      id: "03",
      title: "Development & testing",
      desc: "We handle coordination, documents, and closing logistics.",
    },
  ];
const AboutUs = () => {
      const sectionRef = useRef(null);
        const [activeStep, setActiveStep] = useState(0);
      
          const [hasAnimated, setHasAnimated] = useState(false);
        
          useEffect(() => {
            const observer = new IntersectionObserver(
              (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !hasAnimated) {
                  setHasAnimated(true);
                  startAnimation();
                }
              },
              { threshold: 0.4 } // Trigger when 40% of section is visible
            );
        
            if (sectionRef.current) observer.observe(sectionRef.current);
        
            return () => observer.disconnect();
          }, [hasAnimated]);
        
          const startAnimation = () => {
            const timers = [
              setTimeout(() => setActiveStep(1), 1000),
              setTimeout(() => setActiveStep(2), 2500),
              setTimeout(() => setActiveStep(3), 4000),
            ];
            return () => timers.forEach(clearTimeout);
          };
  return (
    <>
      <Navbar />
        {/* main section start  */}
            <div className="MissionHome wow animate__animated animate__fadeInUp">
         <div className="container">
         <section className="Mission-section">
      <div className="Mission-overlay">
        <div className="Mission-content">
          <p className="Mission-tag">Puresaas</p>
          <h2 className="Mission-title  wow animate__animated animate__fadeInUp">
           About Us
          </h2>
          <div class="mt-15">
            <a href="/">Home</a><span class="padding-rl-20">|</span><span class="main-color">  About Us</span>
        </div>
        </div>

      </div>
    </section>
       </div>
            </div>
        {/* main section end  */}
         <div className="missionprocess wow animate__animated animate__fadeInUp">
          
           <section className="process-section wow animate__animated animate__fadeInUp"  ref={sectionRef}>
      <div className="container">
        <p className="process-badge">Our process</p>
        <h2 className="process-heading">
          From Idea to app <br /> store simplified
        </h2>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div className="process-card" key={step.id}>
              <div
                className={`progress-line ${
                  activeStep > index ? "active" : ""
                }`}
              ></div>
              <p className="step-id">{step.id}</p>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      <section className="mission-section wow animate__animated animate__fadeInUp">
      <div className="mission-container">
        {/* Left side */}
        <div className="mission-left">
          <span className="mission-badge">Our mission</span>
          <h1 className="mission-title">
            Empowering teams to collaborate and thrive with intelligent
          </h1>
          <p className="mission-text">
            In today's fast-paced, digitally connected world, successful teams
            rely on more than just talent—they thrive on intelligent
            collaboration.
          </p>
        </div>

        {/* Right side */}
        <div className="mission-right wow animate__animated animate__fadeInUp">
          <div className="mission-card">
            <div className="mission-avatars">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt=""
              />
              <img
                src="https://randomuser.me/api/portraits/men/65.jpg"
                alt=""
              />
              <img
                src="https://randomuser.me/api/portraits/men/14.jpg"
                alt=""
              />
              <div className="mission-icon">
                <FaArrowUpRightFromSquare />
              </div>
            </div>

            <h3>20k+ global investment</h3>
            <p>Get Global Investment policy in the year</p>

            <div className="mission-gradient"></div>
          </div>

          <div className="growth-card">
            <div className="growth-top">
              <p>150%</p>
              <span className="growth-arrow">
                <FaArrowUpRightFromSquare />
              </span>
            </div>
            <p className="growth-sub">Business Growth</p>
            <h2>$682.5</h2>
          </div>
        </div>
      </div>
    </section>
     <section className="vision-section wow animate__animated animate__fadeInUp">
      <div className="vision-container">
        {/* Left Side (Image) */}
        <div className="vision-left">
          <div className="vision-image-card">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
              alt="Vision Team"
              className="vision-image"
            />

            <div className="vision-stats-card">
              <div className="vision-stats-top">
                <p>98%</p>
                <span className="vision-arrow">
                  <FaArrowUpRightFromSquare />
                </span>
              </div>
              <p className="vision-sub">Client Satisfaction</p>
              <h2>Trusted Worldwide</h2>
            </div>
          </div>
        </div>

        {/* Right Side (Text) */}
        <div className="vision-right wow animate__animated animate__fadeInUp">
          <span className="vision-badge">Our vision</span>
          <h2 className="vision-title">
            Shaping the future of digital transformation with innovation
          </h2>
          <p className="vision-text">
            Our vision is to redefine how businesses operate by delivering
            intelligent, scalable, and connected ERP solutions that transform
            data into decisions and collaboration into success.
          </p>
          <p className="vision-text">
            We aim to empower organizations to embrace technology-driven growth,
            adapt to change seamlessly, and achieve new heights of productivity
            through innovation and automation.
          </p>
        </div>
      </div>
    </section>
        </div>

      <Footer />
    </>
  )
}

export default AboutUs
