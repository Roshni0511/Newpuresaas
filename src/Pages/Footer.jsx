import React, { useEffect } from "react";
import "../assets/css/Footer.css"; // Assuming your CSS is in this path

const Footer = () => {


  return (
    <>
      <footer id="footer" className="Footerstyle wow animate__animated animate__fadeInUp">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1 - About */}
            <div className="footer-column">
              <h3>Puresaas</h3>
              <p >
              Puresaas offers a wide range of CRM services, providing end-to-end solutions tailored to meet the unique demands of businesses across industries. Our platform integrates advanced customer relationship management tools, streamlining operations, enhancing customer engagement, and driving business growth.
              </p>

              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-link" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-link" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="social-link" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              </div>
            </div>

            {/* Column 2 - Navigation */}
            <div className="footer-column">
              <h3>Products</h3>
              <ul className="footer-links" >
                <li><a href="/RealEstateAgentCRM">Real Estate Agent CRM</a></li>
                <li><a href="/Realestatecrm">Real Estate CRM</a></li>
                <li><a href="#">Sales CRM</a></li>
                <li><a href="/B2BTextileERP">B2B Textile ERP</a></li>
                <li><a href="/Telecallercrm">Telecaller CRM</a></li>
                <li><a href="/Serviceerp">Service CRM</a></li>
                <li><a href="#">Payroll System</a></li>
                <li><a href="/ATS">ATS (Application Tracking System)</a></li>
                <li><a href="/OfficeErp">Office ERP</a></li>
              </ul>
            </div>

            {/* Column 3 - Support */}
            <div className="footer-column">
              <h3>Company</h3>
              <ul className="footer-links">
                <li><a href="/Enterprise">Enterprise</a></li>
                <li><a href="/Mission">Mission</a></li>
                <li><a href="/Vision">Vision</a></li>
                <li><a href="/Blog">Blog</a></li>
                <li><a href="/Faq">FAQ</a></li>
                <li><a href="/ContactUs">Contact US</a></li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div className="footer-column">
              <h3>Contact</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>123 Rue du Bien-être<br />75000 Paris, France</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone-alt"></i>
                  <span>9638373601</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>info@puresaas.in</span>
                </div>
              </div>

              <div className="newsletter">
                <p>newsletter :</p>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    className="newsletter-input"
                    placeholder=" email"
                    aria-label="Votre adresse email"
                    required
                  />
                  <button type="submit" className="newsletter-btn">Submit</button>
                </form>
              </div>
            </div>
          </div>

          <div className="copyright">
            <p>
              &copy; {new Date().getFullYear()} All Rights Reserved Puresaas
            </p>
            <p>
{" "}
              <a href="/Termsandcondition">Terms of Service</a> | <a href="/Privacypolicy">Privacy Policy</a>| <a href="/Refundpolicy">Refund Policy</a>
            </p>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Footer;
