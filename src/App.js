import React, { useEffect, useState  } from 'react';
import './App.css';
import WOW from 'wowjs';
import 'animate.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import RealEstateAgentCRM from './Pages/RealEstateAgentCRM';
import ContactUs from './Pages/ContactUs';
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
  </Routes>
  <BackToTopButton />
  </>
  );
}

export default App;
