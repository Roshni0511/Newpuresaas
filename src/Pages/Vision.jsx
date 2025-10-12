import React, { useEffect, useRef,useState  } from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/Mission.css'

export default function Vision() {
 const containerRef = useRef(null);

  const data = [
    {
      title: "Pioneering the Future of Software Solutions",
      desc: `our vision is to pioneer the future of software solutions by continually innovating and setting new standards in the industry. We aspire to be the go-to provider for businesses seeking reliable, cutting-edge software that transforms how they operate and grow.`,
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=100",
    },
    {
      title: "Empowering Businesses Worldwide",
      desc: `We envision a world where businesses, regardless of their size or location, have access to the best software tools to drive their success. By breaking down barriers and providing scalable solutions, we aim to empower businesses worldwide to achieve their full potential.`,
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=100",
    },
    {
      title: "Building a Connected Ecosystem",
      desc: `Our vision extends to building a connected ecosystem where our software solutions seamlessly integrate with other technologies and platforms. By fostering interoperability, we enable businesses to create cohesive and efficient workflows that enhance productivity and innovation.`,
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=100",
    },
    {
      title: "Championing Customer Success",
      desc: `our vision is the success of our customers. We aim to be more than just a software provider; we want to be a trusted partner in our customers' journeys. Our success is measured by the success of those we serve, and we are dedicated to supporting them every step of the way.`,
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=100",
    },
  ];

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".card");

    const handleScroll = () => {
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const nextCard = cards[index + 1];
        const cardInner = card.querySelector(".card__inner");

        if (!nextCard) return;

        const percentageY = Math.min(
          Math.max(
            0,
            (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
          ),
          1
        );

        const toScale = 1 - (cards.length - 1 - index) * 0.1;
        const scaleValue = 1 - (1 - toScale) * percentageY;
        const brightness = 1 - 0.4 * percentageY;

        cardInner.style.transform = `scale(${scaleValue})`;
        cardInner.style.filter = `brightness(${brightness})`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
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

  return (
    <div>
      <Navbar />

        {/* main section start  */}
            <div className="MissionHome wow animate__animated animate__fadeInUp">
         <div className="container">
         <section className="Mission-section">
      <div className="Mission-overlay">
        <div className="Mission-content">
          <p className="Mission-tag">Puresaas</p>
          <h2 className="Mission-title  wow animate__animated animate__fadeInUp">
           Vision
          </h2>
          <div class="mt-15">
            <a href="/">Home</a><span class="padding-rl-20">|</span><span class="main-color">Vision</span>
        </div>
        </div>

      </div>
    </section>
       </div>
            </div>
        {/* main section end  */}

        {/* mission section start  */}
         <div className="missionslide wow animate__animated animate__fadeInUp">
      <div className="container">
         <div className="row">
        <div className="col-lg-6">
          <div>
              <p className="mission-badge">Our Vision</p>
        <h2 className="mission-heading wow animate__animated animate__fadeInUp">
         Driving Innovation, Empowering Growth, and Delivering Excellence in Every Solution.
        </h2>
            <img src="/Image/mission.webp" alt="" width="90%" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="cards" ref={containerRef}>
        {data.map((item, index) => (
          <div className="card" key={index}>
            <div className="card__inner">
              <div className="card__image-container">
                <img className="card__image" src={item.img} alt={item.title} />
              </div>
              <div className="card__content">
                <h1 className="card__title">{item.title}</h1>
                <p className="card__description">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>
      </div>
        </div>
        {/* mission section end   */}


        {/* process section start   */}
        <div className="missionprocess">
          
           <section className="process-section" ref={sectionRef}>
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
        </div>
        {/* process section end   */}
      <Footer />
    </div>
  )
}
