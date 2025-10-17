import React, { useState } from 'react';
import '../../assets/css/ProductNavbar.css';
import {  FaBars, FaTimes } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';
export default function BuilderCRMNavbar() {
  const [isMobileMenuOpen1, setIsMobileMenuOpen1] = useState(false);
  const toggleMobileMenu1 = () => {
    setIsMobileMenuOpen1(!isMobileMenuOpen1);
  };
   const [isfeatureOpen, setIsfeatureOpen] = useState(false); // for mobile dropdown
    const togglefeatureMenu = (e) => {
      e.preventDefault();
      setIsfeatureOpen(!isfeatureOpen);
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
           <span className="logo__text">Builder / Developer CRM</span>
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
          <li className={`header__li dropdown services-menu-item ${isfeatureOpen ? 'mobile-open' : ''}`}>
  <a
    href="#"
    className="header__a dropdown__link"
    onClick={togglefeatureMenu}
  >
    Features <FaAngleDown size={10} />
  </a>

  <div className={`feature-dropdown ${isfeatureOpen ? 'mobile-open-menu' : ''}`}>
    <div className="feature-dropdown__inner">
      
      <ul className="feature-dropdown__column">
        <li>
          <a href="#"><span className="feature__number">01.</span>Project Management</a>
          <p>Manage and monitor construction projects from planning to handover.</p>
        </li>
        <li>
          <a href="#"><span className="feature__number">02.</span>Site Progress Tracking</a>
          <p>Track real-time progress and update site activities with visual status reports.</p>
        </li>
        <li>
          <a href="#"><span className="feature__number">03.</span>Inventory Management</a>
          <p>Monitor stock levels, building materials, and on-site inventory usage.</p>
        </li>
      </ul>

      <ul className="feature-dropdown__column">
        <li>
          <a href="#"><span className="feature__number">04.</span>Contractor & Vendor Management</a>
          <p>Assign tasks, track performance, and manage payments to contractors.</p>
        </li>
        <li>
          <a href="#"><span className="feature__number">05.</span>Payment & Installment Tracking</a>
          <p>Manage buyer payment schedules and automatically track due installments.</p>
        </li>
        <li>
          <a href="#"><span className="feature__number">06.</span>Customer Booking Portal</a>
          <p>Allow customers to book units, upload documents, and check progress.</p>
        </li>
      </ul>

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
