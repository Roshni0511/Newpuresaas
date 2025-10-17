import React, { useState } from 'react';
import '../../assets/css/ProductNavbar.css';
import {  FaBars, FaTimes } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';
export default function B2BTextileERPNavbar() {
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
           <span className="logo__text">B2B Textile ERP</span>
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
          <a href="#"><span className="feature__number">01.</span>Order & Quotation Management</a>
          <p>Create, manage, and track B2B orders and quotations with real-time status updates.</p>
        </li>
        <li>
          <a href="#"><span className="feature__number">02.</span>Inventory & Stock Control</a>
          <p>Track raw materials, finished goods, and fabric rolls across warehouses.</p>
        </li>
        <li>
          <a href="#"><span className="feature__number">03.</span>Production Planning</a>
          <p>Plan dyeing, weaving, stitching, and finishing operations efficiently.</p>
        </li>
      </ul>

      <ul className="feature-dropdown__column">
        <li>
          <a href="#"><span className="feature__number">04.</span>Supplier & Vendor Management</a>
          <p>Manage yarn/fabric suppliers, rate contracts, deliveries, and payments.</p>
        </li>
        <li>
          <a href="#"><span className="feature__number">05.</span>Client & Channel Partner Portal</a>
          <p>Allow buyers/distributors to place orders, track delivery, and download invoices.</p>
        </li>
        <li>
          <a href="#"><span className="feature__number">06.</span>Reports & Compliance</a>
          <p>Generate GST-compliant invoices, order reports, production logs, and audit trails.</p>
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
