import React, { useEffect } from 'react';
import WOW from 'wowjs';
import 'animate.css';
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/Home.css'
const Home = () => {
  useEffect(() => {
  new WOW.WOW({ live: false }).init();
}, []);
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  )
}

export default Home
