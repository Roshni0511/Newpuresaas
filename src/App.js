import React, { useEffect, useState  } from 'react';
import './App.css';
import WOW from 'wowjs';
import 'animate.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import RealEstateAgentCRM from './Pages/RealEstateAgentCRM';
import ContactUs from './Pages/ContactUs';
import Termsandcondition from './Pages/Termsandcondition';
import "material-icons/iconfont/material-icons.css";
import Mission from './Pages/Mission';
import Privacypolicy from './Pages/Privacypolicy';
import Refundpolicy from './Pages/Refundpolicy';
import Vision from './Pages/Vision';
import Enterprise from './Pages/Enterprise';
import Blog from './Pages/Blog';
import Faq from './Pages/Faq';
import SignIn from './Pages/SignIn';
import LogIn from './Pages/Login';
import Solutions from './Pages/Solutions';
import Blogdetails from './Pages/Blogdetails';
import B2BTextileERP from './Pages/B2BTextileERP';
import Realestatecrm from './Pages/Realestatecrm';

const FabButton = ({ id, label, iconClass, link, show, positionClass }) => {
    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`nav ${positionClass} ${show ? 'show' : ''}`} 
            id={id}
            aria-label={label}
        >
            <i className="material-icons">{iconClass}</i>
            <span className="fab-label">{label}</span>
        </a>
    );
};
const FloatingActionMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Data for the 5 new buttons
    const buttonsData = [
        { id: 'brochure', label: 'Download Brochure', iconClass: 'file_download', link: '#' },
        { id: 'signup', label: 'Sign Up', iconClass: 'person_add', link: '#' },
        { id: 'demo', label: 'Schedule a Demo', iconClass: 'event', link: '#' },
        { id: 'quote', label: 'Request a Price Quote', iconClass: 'paid', link: '#' },
        { id: 'callback', label: 'Request a Callback', iconClass: 'phone', link: '#' },
    ];


    return (
        <div className="fab-menu-container">
            {/* 1. Overlay */}
            <div id="overlay" className={isOpen ? 'show' : ''} onClick={toggleMenu}></div>

            {/* 2. Individual Action Buttons */}
            {buttonsData.map((button, index) => (
                <FabButton
                    key={button.id}
                    id={button.id}
                    label={button.label}
                    iconClass={button.iconClass}
                    link={button.link}
                    show={isOpen}
                    // Apply different position class based on index (0, 1, 2, 3, 4)
                    positionClass={`fab-pos-${index}`} 
                />
            ))}

            {/* 3. Hamburger Toggle Button */}
            <div id="hamburger" className={isOpen ? 'show' : ''} onClick={toggleMenu}>
                <div id="wrapper">
                    <span className="icon-bar" id="one"></span>
                    <span className="icon-bar" id="two"></span>
                    <span className="icon-bar" id="thr"></span>
                </div>
            </div>
        </div>
    );
};
const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollThreshold = 300; // Distance to scroll before showing the button

    // Show button when page is scrolled
    const toggleVisibility = () => {
        if (window.pageYOffset > scrollThreshold) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to the top of the document smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
 useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const overlay = document.getElementById("overlay");
    const navItems = document.querySelectorAll(".nav");

    const toggleMenu = () => {
      hamburger.classList.toggle("show");
      overlay.classList.toggle("show");
      navItems.forEach((item) => item.classList.toggle("show"));
    };

    hamburger.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);

    return () => {
      hamburger.removeEventListener("click", toggleMenu);
      overlay.removeEventListener("click", toggleMenu);
    };
  }, []);
    return (
        // Note: The className 'back-to-top-btn' needs corresponding CSS in App.css
        <button
            id="backToTopBtn" // For specific CSS targeting
            className={`back-to-top-btn ${isVisible ? 'visible' : 'hidden'}`}
            onClick={scrollToTop}
            title="Go to top"
            aria-label="Back to top"
            style={{ display: isVisible ? 'block' : 'none' }} // Inline style as fallback/initial state
        >
            &#8679; {/* Up arrow character */}
        </button>
    );
};
function App() {
    useEffect(() => {
  new WOW.WOW({ live: false }).init();
}, []);
  return (
  <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/RealEstateAgentCRM' element={<RealEstateAgentCRM/>}/>
    <Route path='/ContactUs'  element={<ContactUs/>}/>
    <Route path='/Termsandcondition' element={<Termsandcondition/>}/>
    <Route path='/Privacypolicy' element={<Privacypolicy/>}/>
    <Route path='/Refundpolicy' element={<Refundpolicy/>}/>
    <Route path='/Blog' element={<Blog/>}/>
    <Route path='/Mission' element={<Mission/>}/>
    <Route path='/Vision' element={<Vision/>}/>
    <Route path='/Enterprise' element={<Enterprise/>}/>
    <Route path='/Faq' element={<Faq/>}/>
    <Route path='/SignIn' element={<SignIn/>}/>
    <Route path='/Login' element={<LogIn/>}/>
    <Route path='/Solutions' element={<Solutions/>}/>
    <Route path='/Blogdetails' element={<Blogdetails/>}/>
    <Route path='/B2BTextileERP' element={<B2BTextileERP/>}/>
    <Route path='/Realestatecrm' element={<Realestatecrm/>}/>
  </Routes>
  <BackToTopButton />
   <div class="wh-api">
	<div class="wh-fixed whatsapp-pulse">
		<a href="https://api.whatsapp.com/send?phone=9099383095" target="_blank" >
			<button class="wh-ap-btn"></button>
		</a>
	</div>
   </div>

 <FloatingActionMenu />

  </>
  );
}

export default App;
