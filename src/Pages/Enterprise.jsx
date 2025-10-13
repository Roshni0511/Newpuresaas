import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/Enterprise.css'
const icons = [
  "/Image/google-play.png",
  "/Image/snapchat.png",
  "/Image/telegram.png",
  "/Image/instagram.png",
  "/Image/figma.png",
  "/Image/reddit.png",
  "/Image/twitter.png",
  "/Image/slack.png",
  "/Image/whatsapp.png",
  "/Image/windows.png",
  "/Image/youtube.png",
  "/Image/communication.png",
  // "/Image/integration4.svg",
];

export default function Enterprise() {
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
           Enterprise
          </h2>
          <div class="mt-15">
            <a href="/">Home</a><span class="padding-rl-20">|</span><span class="main-color">Enterprise</span>
        </div>
        </div>

      </div>
    </section>
       </div>
            </div>
        {/* main section end  */}

        {/* enterprise section start  */}
             <div className=" enterprisesec reasons-section wow animate__animated animate__fadeInUp">
        <div className="reasons-container container">
          <span className="reasons-badge">About Company</span>
          <h1 className="reasons-title mt-5 mb-3">ENTERPRISE</h1>
          
          <ul className="reasons-features wow ">
            <li className="reasons-feature-item">
              Welcome to Puresaas, where we transform the way businesses connect with their customers through advanced CRM solutions. Since our inception, we've been on a mission to help businesses build stronger, more meaningful relationships that drive growth and success.
            </li>
            <li className="reasons-feature-item">
              At Puresaas, we know that every thriving business is built on a foundation of satisfied customers. Our CRM platform is designed to streamline your operations, enhance workflows, and provide actionable insights into customer behavior, regardless of your business size or industry. Our solutions are scalable and tailored to meet the unique needs of both startups and large enterprises.
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
    {/* enterprise section end */}

    {/* why choose us section start */}
    <div className="whyenterprise wow animate__animated animate__fadeInUp">
       <div className="section-container">
      <div className="installation-manual-card">
        <p className="subtitle-text">WHY CHOOSE US</p>
        
       <h2 className="title-text">
  Discover Why <br />
  <span className="highlight-text">Clients Choose Us</span>
</h2>
        
         <div className="features-grid">
          
          {/* Feature 1 */}
          <div className="feature-item">
             <i className="fa-solid fa-user-tie"></i>
            <h3>Expertise</h3>
            <p>Backed by a team of seasoned developers, designers, and industry experts, we bring years of collective experience to every project.</p>
          </div>
          
          {/* Feature 2 */}
          <div className="feature-item">
            <i className="fa-solid fa-shield-alt"></i>
            <h3>Quality Assurance</h3>
            <p>Our testing and quality assurance processes guarantee CRM that is not only functional but also robust and reliable.</p>
          </div>
          
          {/* Feature 3 */}
          <div className="feature-item">
           <i className="fa-solid fa-handshake"></i>
            <h3>Customer-Driven Focus</h3>
            <p>We prioritize customer satisfaction above all else, striving to build relationships based on trust, transparency, and mutual success.</p>
          </div>
          
        </div>
      </div>
    </div>
    </div>
    {/* why choose us section end  */}

    {/* IT management section start */}
    <section className="It-section">
      <div className="It-content">
        <div className="It-badge">Integration</div>
        <h2 className="It-title">
         <span> Security and <br />
          IT management</span>
          
        </h2>
        <p className="It-subtitle">
         Optimize IT and enterprise operations with a
comprehensive toolkit,covering cloud access,
endpoint security, and mobile device management.
        </p>
        <button className="It-btn">See it in action</button>
      </div>

      <div className="It-icons">
        {icons.map((icon, index) => (
          <div key={index} className={`icon-item icon-${index}`}>
            <img src={icon} alt="brand icon" />
          </div>
        ))}
      </div>
    </section>
    {/* IT management section end */}
      <Footer />
    </div>
  )
}
