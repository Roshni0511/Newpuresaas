import React, { useState } from 'react';
import '../../assets/css/ProductNavbar.css';
import { FaAngleDown, FaBars, FaTimes } from 'react-icons/fa';

export default function ProductNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // for mobile dropdown
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesMenu = (e) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <>
   <div className="productnavbar">
     <div className="navbar-container">
      <header className="header">
        <div className="header__logo">
          <a href="/">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              className="logo__icon"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z" />
            </svg>
            <span className="logo__text">PureSaaS</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="menu-toggle"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation */}
        <nav className={`header__nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="header__ul">
        
            <li
              className={`header__li dropdown services-menu-item ${
                isServicesOpen ? 'mobile-open' : ''
              }`}
            >
              <a
                href="#"
                className="header__a dropdown__link"
                onClick={toggleServicesMenu}
              >
                Product <FaAngleDown size={10} />
              </a>

               <div
                className={`services-dropdown ${
                  isServicesOpen ? 'mobile-open-menu' : ''
                }`}
              >
                <div className="services-dropdown__inner">

                       <ul className="services-dropdown__column">
                    <li>
                      <a href="/BuilderCRM"><span className="service__number">01.</span> Builder / Developer CRM</a>
                      <p>Streamline payroll processing, ensure accuracy, and simplify compliance.</p>
                    </li>
                      <li>
                      <a href="/Realestatecrm"><span className="service__number">02.</span> Real Estate CRM</a>
                      <p>Early Create professional sites & offload them to clients</p>
                    </li>
                      <li>
                      <a href="/Telecallercrm"><span className="service__number">03.</span> Telecaller CRM</a>
                      <p>Boost productivity, manage calls, and track leads effortlessly.</p>
                    </li>
                 
                 
                  </ul>
              
                  <ul className="services-dropdown__column">
                      <li>
                    <a href="/Sales"><span className="service__number">04.</span> Sales CRM</a>
                    <p>Streamline your sales process, manage leads, and close deals faster.</p>
                  </li>
                   <li>
                      <a href="/Serviceerp"><span className="service__number">05.</span> Service CRM</a>
                      <p>Streamline support and boost customer satisfaction.</p>
                    </li>
                    <li>
                      <a href="/ATS"><span className="service__number">06.</span> ATS (Application Tracking System)</a>
                      <p>Simplify recruitment, track candidates, and streamline your hiring process.</p>
                    </li>
                    {/* <li>
                      <a href="/RealEstateAgentCRM"><span className="service__number">01.</span> Real Estate Agent CRM</a>
                       <p>Quickly create, manage, and offload sites to clients with ease.</p>
                    </li>
                   */}
                    
                  </ul>

           
                  <ul className="services-dropdown__column">
                    <li>
                      <a href="/B2BTextileERP"><span className="service__number">07.</span> B2B Textile ERP</a>
                      <p>Simplify operations, manage inventory, and streamline production.</p>
                    </li>
                    <li>
                    <a href="/OfficeErp"><span className="service__number">08.</span> Office ERP</a>
                    <p>Integrate business operations, streamline workflows, and boost productivity.</p>
                  </li>
                   
                   
                  </ul>

          
             
                </div>
              </div>
            </li>

            <li className="header__li ">
              <a href="/Enterprise" className="header__a ">
                Enterprise 
              </a>
            </li>

             <li className="header__li ">
              <a href="/AboutUs" className="header__a ">
                   About Us
              </a>
              
            </li>

           

            <li className="header__li ">
              <a href="/Blog" className="header__a ">
                Blogs 
              </a>
              
            </li>

            <li className="header__li">
              <a href="/ContactUs" className="header__a">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* <div className="header__cta-wrapper">
          <a href="/SignIn" className="header__cta-btn">
            Sign In
          </a>
        </div> */}
      </header>
    </div>
   </div>   
   
   </>
  );
}
