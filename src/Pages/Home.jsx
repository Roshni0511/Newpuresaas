import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/Home.css'
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="Home-style">
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
              <div className="heading-group">
                <h1>AI-powered CRM for businesses</h1>
                <p>Automate sales, streamline customer relationships, and scale your business—all in one intuitive platform.</p>
              </div>
            </div>
            
            {/* --- Form and Trust Badges --- */}
            <div className="form-trust-group">
              
              {/* Form */}
              <form action="#" method="post" className="email-form">
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
          <div className="hero-image-column">
            {/* Figure 1 */}
            <figure className="figure-1">
              <img alt="CRM dashboard visualization" src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" />
            </figure>
            
            {/* Figure 2 */}
            <figure className="figure-2">
              <img alt="CRM feature card" src="YOUR_IMAGE_PATH_2" />
            </figure>
            
            {/* Figure 3 */}
            <figure className="figure-3">
              <img alt="CRM analytics view" src="YOUR_IMAGE_PATH_3" />
            </figure>
            
            {/* Figure 4 */}
            <figure className="figure-4">
              <img alt="CRM customer profile" src="YOUR_IMAGE_PATH_4" />
            </figure>
            
            {/* Figure 5 */}
            <figure className="figure-5">
              <img alt="CRM data visualization" src="YOUR_IMAGE_PATH_5" />
            </figure>
            
            {/* Figure 6 */}
            <figure className="figure-6">
              <img alt="CRM sales pipeline view" src="YOUR_IMAGE_PATH_6" />
            </figure>
            
            {/* Figure 7 */}
            <figure className="figure-7">
              <img alt="CRM activity feed" src="YOUR_IMAGE_PATH_7" />
            </figure>
            
            {/* Figure 8 */}
            <figure className="figure-8">
              <img alt="CRM reporting interface" src="YOUR_IMAGE_PATH_8" />
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
