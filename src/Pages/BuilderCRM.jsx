import React from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import '../assets/css/BuilderCRM.css';
import Footer from "./Footer";
import { FaProjectDiagram, FaUsers, FaTasks, FaFileInvoiceDollar, FaBell } from "react-icons/fa";
import HomePricing from "../component/HomePricing";
import ProductForm from "../component/ProductForm";
import Builderfaq from "../component/Builderfaq";
import Bookdemoform from "../component/Bookdemoform";
import BuilderCRMNavbar from "./AllNavbar/BuilderCRMNavbar";
import ProductNavbar from "./AllNavbar/ProductNavbar";


const Buildercrm = () => {
  const platforms = [
  { id: 1, icon: '/Image/googleplaystore.png', title: 'Google Play Store', subtitle: 'Android App Marketplace' },
  { id: 2, icon: '/Image/appleapp.png', title: 'Apple App Store', subtitle: 'iOS & macOS Downloads' },
  { id: 3, icon: '/Image/software.png', title: 'Software Suggest', subtitle: 'Software Reviews & Ratings' },
  { id: 4, icon: '/Image/windows.png', title: 'Winner', subtitle: 'Business Software Solutions' },
];
const features = [
  {
    icon: <FaProjectDiagram />,
    title: "Project Management",
    description: "Easily track multiple real estate projects from start to finish."
  },
  {
    icon: <FaUsers />,
    title: "Client Management",
    description: "Manage leads, buyers, and investors efficiently in one place."
  },
  {
    icon: <FaTasks />,
    title: "Task & Team Management",
    description: "Assign tasks, monitor progress, and collaborate seamlessly."
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Payment & Invoicing",
    description: "Track payments, generate invoices, and manage finances effortlessly."
  },
  {
    icon: <FaBell />,
    title: "Automated Follow-ups",
    description: "Set reminders and automate follow-ups for better client engagement."
  },
];
  return (
    <>
      <ProductNavbar/>
      <BuilderCRMNavbar />
      <section className="builder-hero-section">

        {/* Background Blobs */}
        <div className="builder-blob builder-blob-top-left"></div>
        <div className="builder-blob builder-blob-bottom-right"></div>

        <div className="builder-hero-container">
          {/* Text Content */}
          <motion.div
            className="builder-hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="builder-badge">
              <Building2 className="builder-icon" />
              <span>Builder CRM</span>
            </div>

            <h1 className="builder-title">
              Manage <span className="builder-highlight">Projects</span> & <span className="builder-highlight-alt">Leads</span> Effortlessly
            </h1>

            <p className="builder-subtitle">
              Simplify property management, track sales, and <br />boost team productivity with our all-in-one Developer/Builder CRM.
            </p>

            {/* Feature Highlight List */}
            <div className="builder-features">
              <div className="builder-feature-item">📊 Track Sales Effortlessly</div>
              <div className="builder-feature-item">🏗️ Manage Projects Seamlessly</div>
              <div className="builder-feature-item">🤝 Boost Team Collaboration</div>
            </div>

            <div className="builder-cta-buttons">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="builder-btn-primary"
              >
                Book a Demo
              </motion.button>
            </div>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div
            className="builder-hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/Image/builder-hero.jpg" alt="Builder CRM Illustration" className="builder-hero-img" />
          </motion.div>
        </div>
      </section>



      <section>
        <div className="socialsec wow animate__animated animate__fadeInUp ">
       <div className="social-selector-container">
     

      <div className="content-wrapper">
        <p className="section-tag">Ratings & Reviews</p>
        <h1 className="main-heading"> Where are your apps and software rated?</h1>
        <p className="sub-heading">
         Track and manage customer sentiment across major app stores and independent software review platforms to boost your online visibility.
        </p>

        <div className="platforms-grid wow animate__animated animate__fadeInUp">
          {platforms.map(platform => (
            <div key={platform.id} className={`platform-card ${platform.accent}`}>
              <div className="card-info">
                <img src={platform.icon} alt={`${platform.title} icon`} className="platform-icon" />
                <div className="text-content">
                  <span className="card-title">{platform.title}</span>
                  <span className="card-subtitle">{platform.subtitle}</span>
                </div>
              </div>
              <button className="arrow-button">
                &rarr; {/* Right arrow character */}
              </button>
            </div>
          ))}
        </div>

      
      </div>
    </div>
      </div>
      </section>

          {/* Features Section */}

      <section class="builderfea-section">
        <div class="builderfea-container">
            <div class="builderfea-header">
                <h2 class="builderfea-title">Key Features & Benefits</h2>
                <p class="builderfea-subtitle">Everything you need to manage your real estate business efficiently and grow your portfolio.</p>
            </div>
            
            <div class="builderfea-grid">
               
                <div class="builderfea-card">
                    <div class="builderfea-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3 class="builderfea-card-title">Market Analytics</h3>
                    <p class="builderfea-description">Access real-time market data and analytics to make informed investment decisions and identify emerging opportunities.</p>
                    <div class="builderfea-highlight">Data-driven insights</div>
                </div>
                
                <div class="builderfea-card">
                    <div class="builderfea-icon">
                        <i class="fas fa-home"></i>
                    </div>
                    <h3 class="builderfea-card-title">Property Management</h3>
                    <p class="builderfea-description">Streamline property management with automated rent collection, maintenance requests, and tenant communication.</p>
                    <div class="builderfea-highlight">Automated workflows</div>
                </div>
                
                <div class="builderfea-card">
                    <div class="builderfea-icon">
                        <i class="fas fa-file-contract"></i>
                    </div>
                    <h3 class="builderfea-card-title">Digital Contracts</h3>
                    <p class="builderfea-description">Create, sign, and manage contracts digitally with legally binding e-signatures and automated reminders.</p>
                    <div class="builderfea-highlight">Paperless solutions</div>
                </div>
                
                <div class="builderfea-card">
                    <div class="builderfea-icon">
                        <i class="fas fa-search-dollar"></i>
                    </div>
                    <h3 class="builderfea-card-title">Investment Analysis</h3>
                    <p class="builderfea-description">Evaluate potential investments with comprehensive ROI calculators, cash flow projections, and risk assessment tools.</p>
                    <div class="builderfea-highlight">Smart forecasting</div>
                </div>
                
                <div class="builderfea-card">
                    <div class="builderfea-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3 class="builderfea-card-title">Client Portal</h3>
                    <p class="builderfea-description">Provide clients with a personalized portal to view properties, track applications, and communicate securely.</p>
                    <div class="builderfea-highlight">Enhanced engagement</div>
                </div>
                
                <div class="builderfea-card">
                    <div class="builderfea-icon">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <h3 class="builderfea-card-title">Mobile App</h3>
                    <p class="builderfea-description">Manage your business on the go with our fully-featured mobile app available for iOS and Android devices.</p>
                    <div class="builderfea-highlight">Anywhere access</div>
                </div>
            </div>
        </div>
    </section>



    {/* Demo Section */}

      <ProductForm/>  



    {/* Pricing Section */}

      <HomePricing/>



    {/* Faq Section */}
    
      <Builderfaq/>
    


    {/* Email Section */}

    <Bookdemoform/>







      <Footer/>
    </>
  );
};

export default Buildercrm;
