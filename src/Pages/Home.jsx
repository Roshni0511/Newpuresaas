import React, { useEffect ,useState } from 'react';

import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faHandHoldingUsd,
  faTools,
  faUserCheck,
  faChartLine,
   faHandshake, 
  faLightbulb, 
  faUsers, 
  faLaptopCode, 
  faMicrochip, 
  faArrowRotateRight 
} from "@fortawesome/free-solid-svg-icons";
import HomePricing from '../component/HomePricing';
import Review from '../component/Review';
import HomeFaq from '../component/HomeFaq';
// import bgImage from '../../public/Image/gradient-22.webp'; // your gradient background image
// import iconsImage from '../../public/Image/intregration-img.webp';
const FeatureBlock = ({ title, description, icon }) => (
  <div className="feature-block">
    <div className="icon-placeholder">
      {/* Font Awesome Icon */}
      <FontAwesomeIcon icon={icon} size="lg" /> 
    </div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);
const Home = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar filling up
    let start = 0;
    const end = 80; // Final percentage
    const duration = 1500; // in ms
    const increment = end / (duration / 20);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setProgress(Math.floor(start));
    }, 20);
  }, []);
const features = [
    {
      id: 1,
      title: "Sales & pipeline management",
      description: [
        "Visual sales pipelines for complete deal visibility.",
        "One-click proposal and contract generation.",
        "AI-powered lead scoring to prioritize high-value prospects.",
      ],
      image: "/Image/feature-img-01.webp", // Replace with your real image
    },
    {
      id: 2,
      title: "Omnichannel customer support",
      description: [
        "Handle tickets, chat, and calls in one place.",
        "Chatbots for quick customer replies.",
        "Customer portal to lower ticket requests.",
      ],
      image: "/Image/feature-img-02.webp",
    },
    {
      id: 3,
      title: "AI-driven marketing automation",
      description: [
        "AI-powered email & SMS campaigns.",
        "Smart customer segmentation & personalized outreach.",
        "Performance tracking & analytics for marketing ROI.",
      ],
      image: "/Image/feature-img-03.webp",
    },
  ];
   const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission,
        // e.g., send the email to an API, log it, etc.
        console.log('Email submitted:', email);
        alert(`Starting your trial for: ${email}`);
        setEmail(''); // Clear the input after submission
    };
  return (
    <>
      <Navbar />
      {/* hero section start  */}
      <div className="Home-style wow">
         <section className="hero-section">
      <div className="hero-wrapper">
        
        {/* === Hero Banner === */}
        <div 
          className="hero-banner" 
          role="banner"
        >
          
          {/* === Left Content Column (Text & Form) === */}
          <div className="hero-content-column">
            
            <div className="text-content">
              {/* --- Badge --- */}
              <span className="badge-crm" id="badge-crm">Modern CRM</span>
              
              {/* --- Heading Group --- */}
              <div className="heading-group wow animate__animated animate__fadeInUp">
                <h1>AI-powered CRM for businesses</h1>
                <p>Automate sales, streamline customer relationships, and scale your business—all in one intuitive platform.</p>
              </div>
            </div>
            
            {/* --- Form and Trust Badges --- */}
            <div className="form-trust-group wow">
              
              {/* Form */}
              <form   className="email-form">
                <input 
                  id="userEmail" 
                  placeholder="Enter your email" 
                  required 
                  className="email-input" 
                  aria-label="Email address" 
                  type="email" 
                  name="email" 
                />
                <button type="submit" className="btn btn-start" aria-label="Get started with our CRM">
                  <span>Get started</span>
                </button>
                <button type="submit" className="btn btn-start-xl" aria-label="Get started with our CRM">
                  <span>Get started</span>
                </button>
              </form>
              
              {/* Trust Avatars */}
              <div className="trust-avatars">
                <div className="avatar-group" role="group">
                  {/* Avatars */}
                  <img alt="Customer avatar" className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfTkosk_XISYGUe8YAUWMrv0kcP5a4YMcVQ&s" />
                  <img alt="Customer avatar" className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s" />
                  <img alt="Customer avatar" className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIpmLxtBTN4VX7pLzwmg_B9Fl5Ta4HXjrhfOIza7qA3KZcTOkoTz1qzcakXPHMuAGxES8&usqp=CAU" />
                  
                  {/* Count Badge */}
                  <div className="avatar-count" aria-label="More than 99 additional customers">
                    99+
                  </div>
                </div>
                
                <div className="trust-text">
                  <p>Trusted by 20k+</p>
                  <p >Customers Across the globe</p>
                </div>
              </div>
            </div>
          </div>

          {/* === Right Image Column (Visualizations) === */}
          <div className="hero-image-column wow animate__animated animate__fadeInRight">
            {/* Figure 1 */}
            <figure className="figure-1 ">
              <img alt="CRM dashboard visualization" src="/Image/hero-img-01.webp" />
            </figure>
            
            {/* Figure 2 */}
            <figure className="figure-2">
              <img alt="CRM feature card" src="/Image/hero-img-03.svg" />
            </figure>
            
            {/* Figure 3 */}
            <figure className="figure-3">
              <img alt="CRM analytics view" src="/Image/hero-img-04.webp" />
            </figure>
            
            {/* Figure 4 */}
            <figure className="figure-4">
              <img alt="CRM customer profile" src="/Image/hero-img-02.webp" />
            </figure>
            
            {/* Figure 5 */}
            <figure className="figure-5">
              <img alt="CRM data visualization" src="/Image/hero-img-05.webp" />
            </figure>
            
            {/* Figure 6 */}
            <figure className="figure-6">
              <img alt="CRM sales pipeline view" src="/Image/hero-img-06.webp" />
            </figure>
            
            {/* Figure 7 */}
            <figure className="figure-7">
              <img alt="CRM activity feed" src="/Image/hero-img-07.webp" />
            </figure>
            
            {/* Figure 8 */}
            <figure className="figure-8">
              <img alt="CRM reporting interface" src="/Image/hero-img-08.webp" />
            </figure>
            
          </div>
        </div>
      </div>
    </section>
      </div>
      {/* hero section end  */}

      {/* property section start */}
      <div className="reasons-section wow">
        <div className="reasons-container container">
          <span className="reasons-badge">Reasons to select us</span>
          <h1 className="reasons-title mt-5">Modern tools built for today’s property teams.</h1>
          <p className="reasons-subtitle pt-3">
            Streamline operations, reduce manual tasks, and maximize revenue.
          </p>
          <ul className="reasons-features wow animate__animated animate__fadeInUp">
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
        
        {/* === IMAGE STRUCTURE WITH OVERLAYS === */}
        <div className="reasons-image-wrapper wow animate__animated animate__fadeInUp">
          {/* Main background image (the building) */}
          <img src="/Image/Demo_Img" alt="Reasons Illustration" className="main-img" />
          
          {/* Overlay images (the 'Square' and 'Rectangle' data cards) */}
          {/* Ensure these paths are correct for your uploaded images */}
          <img src="/Image/transaction.jpg" alt="Transaction statistics card" className="overlay-img square-overlay" />
          <img src="/Image/profit.jpg" alt="Profit chart card" className="overlay-img rectangle-overlay" />
        </div>
        {/* =========================================== */}

      </div>
      {/* property section end */}

      {/* functional component section start  */}
      <div className="functionalcompo ">
       <div className="retail-system-container">
    
      {/* <div className="glow-background"></div> */}

     
      <div className="header-content">
        <p className="subtitle">Seamless Solutions for Every Work Environment</p>
        <h1 className="main-title">Work Environment</h1>
      </div>

      <div className="features-row top-row wow animate__animated animate__fadeInUp">
        <FeatureBlock
          title="Enduring Commitment"
          description="With over 25 years of successful operation, we have a deep understanding"
          // Mapped to a Font Awesome icon for commitment/partnership
          icon={faHandshake} 
        />
        <FeatureBlock
          title="Dedicated to Innovation"
          description="At the heart of our business lies a relentless pursuit of excellence"
          // Mapped to a Font Awesome icon for innovation/idea
          icon={faLightbulb} 
        />
        <FeatureBlock
          title="Client-Focused Strategy"
          description="Our success is built on the trust and support of our customers. We prioritize"
          // Mapped to a Font Awesome icon for clients/users
          icon={faUsers} 
        />
      </div>
      
      <div className="features-row bottom-row wow animate__animated animate__fadeInUp" >
        <FeatureBlock
          title="Complete Software Suite"
          description="We offer a full range of software products designed to meet your"
          // Mapped to a Font Awesome icon for software/products
          icon={faLaptopCode} 
        />
        <FeatureBlock
          title="Cutting-Edge Technology"
          description="Our proprietary technology stack ensures you receive the most"
          // Mapped to a Font Awesome icon for technology
          icon={faMicrochip} 
        />
      </div>
      
      <div className="features-row bottom-row wow animate__animated animate__fadeInUp">
        <FeatureBlock
          title="Ongoing Evolution"
          description="Our dedication to continuous improvement means we are always"
          // Mapped to a Font Awesome icon for evolution/refresh
          icon={faArrowRotateRight} 
        />
      </div>
      <div>
        <a href="/Solutions"><button className='featurebutton'>Read More</button></a>
      </div>
    </div>
    </div>
      {/* functional component section end  */}

      {/* Features section start */}
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <span className="features-badge">Features</span>
          <h2 className='wow animate__animated animate__fadeInUp'>Key features of PureSaas CRM</h2>
          <p>
            PureSaas CRM is designed to simplify and supercharge your customer
            relationship management. With a clean, user-friendly interface and
            powerful automation tools.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card wow animate__animated animate__fadeInUp">
              <div className="feature-top">
              
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="feature-image"
                />
              </div>

              <div className="feature-content">
                <h3>{feature.title}</h3>
                <ul>
                  {feature.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* Features section end */}

      {/* pricing section start  */}
      <HomePricing />
      {/* pricing section end  */}

      {/* Integration section start  */}
      <div className="IntegrationHome">
         <div className="container">
         <section className="integration-section">
      <div className="integration-overlay">
        <div className="integration-content">
          <p className="integration-tag">Integration</p>
          <h2 className="integration-title  wow animate__animated animate__fadeInUp">
            Boost productivity with <br /> 50+ integrations.
          </h2>
          <p className="integration-text wow">
            Seamlessly connect your favorite tools and platforms without the usual hassle.
            Our solution is designed to make it easier.
          </p>
          <button className="integration-btn">See it in action</button>
        </div>

        <div className="integration-image-wrapper wow animate__animated animate__fadeInUp">
          <img src="/Image/intregration-img.webp" alt="Integration icons" className="integration-icons" />
        </div>
      </div>
    </section>
       </div>
      </div>
      {/* Integration section end  */}

      {/* Who uses section start  */}
        <div className="whoHome wow animate__animated animate__fadeInUp">
      <div className="container">
        <div className="row align-items-center">
          {/* === Left Side === */}
          <div className="col-6 left-section">
            <div className="image-wrapper">
              <img
                src="/Image/round-image.webp"
                alt="person"
                className="main-person"
              />
              <div className="revenue-card">
                <p className="revenue-title">Today's Revenue</p>
                <div className="revenue-amount">
                  <span>$ 53,224</span>
                  <span className="revenue-percent">{progress}%</span>
                </div>
                <div className="revenue-bar">
                  <div
                    className="revenue-progress"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* === Right Side === */}
          <div className="col-6 right-section">
  <h1 className="who-title wow animate__animated animate__fadeInUp">
    Who uses PureSaas CRM?
  </h1>
  <p className="who-desc">
    PureSaas CRM empowers professionals and organizations to manage customer 
    relationships efficiently. From startups to large-scale enterprises, it 
    simplifies workflows, improves communication, and enhances overall productivity.
  </p>
  <ul className="who-list">
    <li><i className="fa-solid fa-circle-check"></i> Real Estate Agents & Brokers</li>
    <li><i className="fa-solid fa-circle-check"></i> Financial Advisors & Consultants</li>
    <li><i className="fa-solid fa-circle-check"></i> E-commerce & Retail Businesses</li>
    <li><i className="fa-solid fa-circle-check"></i> Healthcare & Service Providers</li>
    <li><i className="fa-solid fa-circle-check"></i> Marketing & Sales Teams</li>
  </ul>
  <button className="who-btn">Explore Features</button>
</div>

        </div>
      </div>
    </div>
      {/* Who uses section end  */}
      
      {/* review section start  */}
      <Review />
      {/* review section end  */}

      {/* faq section start  */}
      <HomeFaq />
      {/* faq section end  */}


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
    </>
  )
}

export default Home
