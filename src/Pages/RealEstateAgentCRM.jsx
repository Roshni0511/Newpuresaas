import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../assets/css/RealEstateAgentCRM.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faHandHoldingUsd,
  faTools,
  faUserCheck,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";













export default function RealEstateAgentCRM() {
  // ✅ Counter States
  const [counters, setCounters] = useState({
    counties: 0,
    peoples: 0,
    orders: 0,
  });

  // ✅ Refs and animation state
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // ✅ Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // ✅ Counter animation logic
  const animateCounters = () => {
    const targetCounts = {
      counties: 10,
      peoples: 50,
      orders: 50,
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;

      setCounters({
        counties: Math.min(
          targetCounts.counties,
          Math.floor((targetCounts.counties * currentStep) / steps)
        ),
        peoples: Math.min(
          targetCounts.peoples,
          Math.floor((targetCounts.peoples * currentStep) / steps)
        ),
        orders: Math.min(
          targetCounts.orders,
          Math.floor((targetCounts.orders * currentStep) / steps)
        ),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targetCounts);
      }
    }, stepDuration);
  };

  return (
    <div>
      <Navbar />
      <div className="hero-banner">
        <img src="/Image/hero-banner.png" alt="Hero Banner" />
        <div className="banner-content">
          <div className="subtitle">Smart property management software</div>
          <h1>
            Simplify property management.<br />
            Boost occupancy.
          </h1>
          <p>Manage your properties efficiently and increase revenue with ease.</p>
          <button className="demo-btn">Get Started</button>
        </div>
      </div>

      {/* ✅ Counter Section */}
      <section className="counter-section" ref={sectionRef}>
        <div className="container">
          <div className="content">
            <h2>Powering the most successful businesses</h2>
            <p className="description">
              Deliver fast, seamless interactions with our AI-powered messaging platform—instant support, automated responses, and reduced wait times for meaningful engagement.
            </p>

            <div className="grid">
              <div className="item">
                <div className="number">{counters.counties}</div>
                <div className="label">Counties</div>
              </div>

              <div className="item">
                <div className="number">{counters.peoples}</div>
                <div className="label">Peoples</div>
              </div>

              <div className="item">
                <div className="number">{counters.orders}</div>
                <div className="label">Orders Processed</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="reasons-section">
      <div className="reasons-container">
        <span className="reasons-badge">Reasons to select us</span>
        <h1 className="reasons-title">Modern tools built for today’s property teams.</h1>
        <p className="reasons-subtitle">
          Streamline operations, reduce manual tasks, and maximize revenue.
        </p>
        <ul className="reasons-features">
          <li className="reasons-feature-item">
            <FontAwesomeIcon icon={faTachometerAlt} /> Unified dashboard for all properties
          </li>
          <li className="reasons-feature-item">
            <FontAwesomeIcon icon={faHandHoldingUsd} /> Automated rent collection & reminders
          </li>
          <li className="reasons-feature-item">
            <FontAwesomeIcon icon={faTools} /> Online maintenance requests & work orders
          </li>
          <li className="reasons-feature-item">
            <FontAwesomeIcon icon={faUserCheck} /> AI-powered tenant screening
          </li>
          <li className="reasons-feature-item">
            <FontAwesomeIcon icon={faChartLine} /> Real-time financial insights
          </li>
        </ul>
      </div>
        <div className="reasons-image">
          <img src="/Image/Demo_Img" alt="Reasons Illustration" className="main-img" />
          <img src="/Image/Square" alt="Square" className="square-img" />
          <img src="/Image/Rectangle" alt="Rectangle" className="rect-img" />
        </div>

    </div>

      <Footer />
    </div>
  );
}
