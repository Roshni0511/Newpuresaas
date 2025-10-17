import React, { useState } from 'react';
import '../../assets/css/ProductNavbar.css';
import {  FaBars, FaTimes } from 'react-icons/fa';

import { FaAngleDown } from 'react-icons/fa';
export default function ServiceCRMNavbar() {
 const [isMobileMenuOpen1, setIsMobileMenuOpen1] = useState(false);
     const [isservicesOpen, setIsservicesOpen] = useState(false); // for mobile dropdown
     const toggleMobileMenu1 = () => {
       setIsMobileMenuOpen1(!isMobileMenuOpen1);
     };
   
     const toggleservicesMenu = (e) => {
       e.preventDefault();
       setIsMobileMenuOpen1(!isservicesOpen);
     };
 
 

  return (
    <>

   <div className="productsecond">
     <div className="navbar-container">
      <header className="header">
        <div className="header__logo">
          <a href="#">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              className="logo__icon"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z" />
            </svg>
           <span className="logo__text">Service CRM</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="menu-toggle"
          onClick={toggleMobileMenu1}
          aria-expanded={isMobileMenuOpen1}
        >
          {isMobileMenuOpen1 ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation */}
        <nav className={`header__nav ${isMobileMenuOpen1 ? 'open' : ''}`}>
          <ul className="header__ul">
            <li className="header__li"><a href="/" className="header__a ">Home</a></li>
               <li
                                                     className={`header__li dropdown services-menu-item ${
                                                       isservicesOpen ? 'mobile-open' : ''
                                                     }`}
                                                   >
                                                     <a
                                                       href="#"
                                                       className="header__a dropdown__link"
                                                       onClick={toggleservicesMenu}
                                                     >
                                                       Features <FaAngleDown size={10} />
                                                     </a>
                                       
                                                      <div
                                                       className={`feature-dropdown ${
                                                         isservicesOpen ? 'mobile-open-menu' : ''
                                                       }`}
                                                     >
                                                   <div class="productsecond">
  <div class="feature-dropdown__inner">
    <ul class="feature-dropdown__column">
      <li>
        <a href="#">Client Management</a>
        <p>Keep all client details in one place.</p>
      </li>
      <li>
        <a href="#">Service Scheduling</a>
        <p>Book and manage appointments easily.</p>
      </li>
      <li>
        <a href="#">Custom Packages</a>
        <p>Create tailored plans for each client.</p>
      </li>
   
    </ul>
    <ul class="feature-dropdown__column">
      <li>
        <a href="#">Feedback Collection</a>
        <p>Get client feedback with simple forms.</p>
      </li>
      <li>
        <a href="#">Invoice Generation</a>
        <p>Send branded invoices in seconds.</p>
      </li>
      <li>
        <a href="#">Team Collaboration</a>
        <p>Work together with shared notes and files.</p>
      </li>
    
     
    </ul>
  </div>
</div>

                                                     </div>
                                                   </li>
            <li className="header__li"><a href="/HomePricing" className="header__a ">Pricing</a></li>
            <li className="header__li signuphide "><a href="/SignIn" className="header__cta-btn m-2">Sign In</a></li>
            <li className="header__li signuphide "><a href="/Signup" className="header__cta-btn m-2">Sign Up</a></li>
            {/* <li className="header__li signinhide m-2"><a href="#" className="header__cta-btn "> </a></li> */}
          </ul>
        </nav>
        <div className="header__cta-wrapper" style={{marginRight:'10px'}}>
          <a href="/SignIn" className="header__cta-btn">Sign In</a>
        </div>
        <div className="header__cta-wrapper" style={{marginRight:'10px'}}>
          <a href="/Signup" className="header__cta-btn">Sign Up</a>
        </div>
      
      </header>
    </div>
   </div>
   </>
  );
}
