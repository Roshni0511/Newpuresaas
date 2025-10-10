import React, { useEffect } from "react";
import "../assets/css/Footer.css"; // Assuming your CSS is in this path

const Footer = () => {


  return (
    <>
      <footer id="footer" className="Footerstyle">
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
                <li><a href="#">Real Estate Agent CRM</a></li>
                <li><a href="#">Real Estate CRM</a></li>
                <li><a href="#">Sales CRM</a></li>
                <li><a href="#">B2B Textile ERP</a></li>
                <li><a href="#">Telecaller CRM</a></li>
                <li><a href="#">Service CRM</a></li>
                   <li><a href="#">Payroll System</a></li>
                      <li><a href="#">ATS (Application Tracking System)</a></li>
                         <li><a href="#">Office ERP</a></li>
              </ul>
            </div>

            {/* Column 3 - Support */}
            <div className="footer-column">
              <h3>Company</h3>
              <ul className="footer-links">
                <li><a href="#">Enterprise</a></li>
                <li><a href="#">Mission</a></li>
                <li><a href="#">Vision</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact US</a></li>
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
                <p>Abonnez-vous à notre newsletter :</p>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    className="newsletter-input"
                    placeholder="Votre email"
                    aria-label="Votre adresse email"
                    required
                  />
                  <button type="submit" className="newsletter-btn">S'abonner</button>
                </form>
              </div>
            </div>
          </div>

          <div className="copyright">
            <p>
              &copy; {new Date().getFullYear()} Harmonie. Tous droits réservés. |{" "}
              <a href="#">Mentions légales</a> | <a href="#">Politique des cookies</a>
            </p>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Footer;
