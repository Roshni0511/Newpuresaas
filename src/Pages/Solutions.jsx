import React, { useEffect } from "react";
import AOS from "aos";
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/Solutions.css'
export default function Solutions() {
     useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const processSteps = [
    {
      side: "right",
      title: "Enduring Commitment",
      desc: "With over 25 years of successful operation, we have a deep understanding of evolving business challenges. Our longevity is a testament to sustainability and profitability.",
    },
    {
      side: "left",
      title: "Dedicated to Innovation",
      desc: "At the heart of our business lies a relentless pursuit of excellence in software development. We invest heavily in innovation to stay at the cutting edge.",
    },
    {
      side: "right",
      title: "Client-Focused Strategy",
      desc: "Our success is built on trust and customer support. We prioritize your needs and are dedicated to fostering your growth.",
    },
    {
      side: "left",
      title: "Complete Software Suite",
      desc: "We offer a full range of software products from CRM systems to advanced data management tools, crafted to simplify your operations.",
    },
    {
      side: "right",
      title: "Cutting-Edge Technology",
      desc: "Our proprietary technology stack ensures the most advanced and secure software solutions, providing a seamless experience.",
    },
    {
      side: "left",
      title: "Ongoing Evolution",
      desc: "We continuously enhance our products and services, adapting to the ever-changing demands of the business landscape.",
    },
  ];
  return (
    <div>
      <Navbar />
       <section className="process-section">
      <h2 className="section-title">Seamless Solutions for Every Work Environment</h2>

      <div className="timeline">
        <div className="timeline-line"></div>
        <div className="timeline-circle">NOW</div>

        {processSteps.map((step, index) => (
          <div
            key={index}
            className={`timeline-item ${step.side}`}
            data-aos={step.side === "left" ? "fade-right" : "fade-left"}
          >
            <div className="timeline-box">
              <div className="timeline-icon">
                <i className="fa-solid fa-star"></i>
              </div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
      <Footer />
    </div>
  )
}
