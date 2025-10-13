import React from 'react'
import HomePricing from '../component/HomePricing'
import Navbar from './Navbar'
import Footer from './Footer'
import BrandSlider from '../component/BrandSlider'

const B2BTextileERP = () => {
  return (
    <>
    <Navbar />
      <div className="MissionHome wow animate__animated animate__fadeInUp">
         <div className="container">
         <section className="Mission-section">
      <div className="Mission-overlay">
        <div className="Mission-content">
          <p className="Mission-tag">Puresaas</p>
          <h2 className="Mission-title  wow animate__animated animate__fadeInUp">
           B2B Textile ERP
          </h2>
          <div class="mt-15">
            <a href="/">Home</a><span class="padding-rl-20">|</span><span class="main-color">B2B Textile ERP</span>
        </div>
        </div>

      </div>
    </section>
       </div>
            </div>
             <div className="whyenterprise wow animate__animated animate__fadeInUp">
       <div className="section-container">
      <div className="installation-manual-card">
       <h3 >
Smart Features for Smarter Real Estate Business<br />
  <p style={{color:'#a060ff',marginTop:'20px',fontSize:"18px"}}>
Explore powerful tools designed to streamline, automate, and elevate your real estate operations.</p>
</h3>
        
         <div className="features-grid" >
          
          {/* Feature 1 */}
          <div className="feature-item">
             <i className="fa-solid fa-user-tie"></i>
            <h3>Lead Management</h3>
            <p>Track, organize, and nurture leads across your entire team with ease.</p>
          </div>
          
          {/* Feature 2 */}
          <div className="feature-item">
            <i className="fa-solid fa-shield-alt"></i>
            <h3>Cloud-Based Platform</h3>
            <p>Secure, scalable access to your CRM from any device, ensuring your team stays connected.</p>
          </div>
          
          {/* Feature 3 */}
          <div className="feature-item">
           <i className="fas fa-user-shield" ></i>
            <h3>Client Data Security</h3>
            <p>Protect sensitive client and transaction information with enterprise-grade encryption.</p>
          </div>

                 <div className="feature-item">
         <i className="fas fa-handshake"></i>
            <h3>Faster Deal Closures</h3>
            <p>Speed up your sales cycle with intelligent automation and workflow management.</p>
          </div>

          
          
        </div>
         <div className="features-grid">
          
          {/* Feature 1 */}
          <div className="feature-item">
            <i className="fas fa-globe" ></i>
            <h3>Multi-Listing & Multi-Region Support</h3>
            <p>Effortlessly manage property listings across regions, offices, and platforms.    </p>
          </div>
          
          {/* Feature 2 */}
          <div className="feature-item">
           <i className="fas fa-bell" ></i>   
          <h3>Real-Time Notifications</h3>
            <p>Get instant alerts on lead activity and deal progress to stay proactive.</p>
          </div>
          
          {/* Feature 3 */}
          <div className="feature-item">
          <i className="fas fa-robot" ></i>
            <h3>Automated Follow-Ups</h3>
            <p>Never miss a lead with built-in email automation and task reminders.</p>
          </div>

                 <div className="feature-item">
  <i className="fas fa-chart-line" ></i>            <h3>Market Insights & Analytics</h3>
            <p>Leverage data-driven insights to anticipate trends and make smarter business decisions.</p>
          </div>

          
          
        </div>
      </div>
    </div>
    </div>
    <BrandSlider />
      <HomePricing />
      <Footer />
    </>
  )
}

export default B2BTextileERP
