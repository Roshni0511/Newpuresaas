import React, { useEffect, useRef,useState  } from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/Mission.css'

export default function Mission() {
 const containerRef = useRef(null);

  const data = [
    {
      title: "Empowering Growth and Innovation",
      desc: `our mission is to empower businesses of all sizes with innovative software solutions that drive growth, efficiency, and success. We are dedicated to developing cutting-edge technology that addresses the unique needs of our clients, helping them to navigate the complexities of their industries with ease and confidence.`,
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=100",
    },
    {
      title: "Commitment to Excellence",
      desc: `We believe in setting the highest standards for our products and services. Our commitment to excellence is reflected in every aspect of our operations, from the initial design and development of our software to the ongoing support and updates we provide. We strive to deliver solutions that not only meet but exceed the expectations of our clients.`,
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=100",
    },
    {
      title: "Building Long-Term Partnerships",
      desc: `We value long-term relationships with our clients and partners. Our goal is to build lasting partnerships based on trust, reliability, and mutual success. By delivering consistent value and exceptional service, we foster relationships that go beyond transactional interactions, contributing to the sustained growth and success of our clients.`,
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=100",
    },
    {
      title: "Relentless Innovation",
      desc: `In the ever-evolving world of technology, staying ahead of the curve is crucial. We invest heavily in research and development to keep our software solutions at the forefront of the industry. Our focus on innovation ensures that our clients benefit from the latest advancements and features, providing them with a competitive edge in their respective markets.`,
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
           Mission
          </h2>
          <div class="mt-15">
            <a href="/">Home</a><span class="padding-rl-20">|</span><span class="main-color">Mission</span>
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
              <p className="mission-badge">Our Mission</p>
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
