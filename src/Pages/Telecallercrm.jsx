import React from 'react';
import '../assets/css/Telecallercrm.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductForm from '../component/ProductForm';
import TelecallercrmFaq from '../component/Telecallercrmfaq';
import ProductNavbar from './ProductNavbar';




const TelecallerCRM = () => {
  const handleRequestDemo = () => {
    console.log('Demo requested');
  };
const features = [
    {
      id: 1,
      icon: 'fa-broadcast-tower',
      title: 'Lead Auto-Capture',
      description: 'Automatically gather leads from calls, web forms, and campaigns.',
      color: '#FF6B6B'
    },
    {
      id: 2,
      icon: 'fa-phone-flip',
      title: 'Call Dialer Integration',
      description: 'Speed up outreach with auto/manual dialer tools built in.',
      color: '#4ECDC4'
    },
    {
      id: 3,
      icon: 'fa-microphone-lines',
      title: 'Call Recording & History',
      description: 'Track all call logs and listen to recordings in one place.',
      color: '#45B7D1'
    },
    {
      id: 4,
      icon: 'fa-ranking-star',
      title: 'Lead Prioritization',
      description: 'Segment and prioritize leads using custom tags and scoring.',
      color: '#FFA07A'
    },
    {
      id: 5,
      icon: 'fa-clock-rotate-left',
      title: 'Follow-up Reminders',
      description: 'Get automated reminders so no lead is ever forgotten.',
      color: '#9B59B6'
    },
    {
      id: 6,
      icon: 'fa-scroll',
      title: 'Script Templates',
      description: 'Provide agents with pre-approved call scripts to follow.',
      color: '#3498DB'
    },
    {
      id: 7,
      icon: 'fa-chart-line',
      title: 'Real-Time Call Analytics',
      description: 'Measure call performance, connection rate, and outcomes.',
      color: '#2ECC71'
    },
    {
      id: 8,
      icon: 'fa-tags',
      title: 'Disposition Tags',
      description: 'Quickly mark call outcomes like interested, Callback, Not interested.',
      color: '#E74C3C'
    },
    {
      id: 9,
      icon: 'fa-comment-sms',
      title: 'SMS & WhatsApp Integration',
      description: 'Send updates, reminders, and follow-ups directly from CRM.',
      color: '#1ABC9C'
    },
    {
      id: 10,
      icon: 'fa-note-sticky',
      title: 'CRM Notes & Comments',
      description: 'Agents can jot down lead-specific notes after each interaction.',
      color: '#F39C12'
    },
    {
      id: 11,
      icon: 'fa-gauge-high',
      title: 'Performance Dashboard',
      description: 'Track agent KPIs like calls made, deals closed, and more.',
      color: '#9B59B6'
    },
    {
      id: 12,
      icon: 'fa-mobile-screen-button',
      title: 'Mobile CRM Access',
      description: 'Access and manage everything on-the-go from any device.',
      color: '#34495E'
    }
  ];

  const benefits = [
    {
      id: 1,
      icon: 'fa-diagram-project',
      title: 'Optimized Telecalling Workflows',
      description: 'TeleCaller CRM is tailored to streamline and optimize telecalling workflows. With features designed to manage call lists and track call outcomes.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      icon: 'fa-users',
      title: 'Enhanced Customer Interaction',
      description: 'Build and maintain stronger customer relationships with TeleCaller CRM\'s comprehensive customer interaction features.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      icon: 'fa-shield-halved',
      title: 'Data Security and Compliance',
      description: 'Ensure the security and privacy of your data with TeleCaller CRM\'s robust security features. The CRM implements encryption and access controls.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  return (
    <>
    <ProductNavbar/>
    <section className="tele-hero wow animate__animated animate__fadeInUp">
      {/* Background Elements */}
      <div className="tele-bg-elements">
        <div className="tele-grid-lines"></div>
        <div className="tele-pulse-dot tele-dot-1"></div>
        <div className="tele-pulse-dot tele-dot-2"></div>
        <div className="tele-pulse-dot tele-dot-3"></div>
        <div className="tele-floating-circle tele-circle-1"></div>
        <div className="tele-floating-circle tele-circle-2"></div>
      </div>

      <div className="tele-container">
        <div className="tele-content">
          <div className="tele-badge">
            <i className="fas fa-star"></i>
            <span>PROFESSIONAL CRM SOLUTION</span>
          </div>

          <h1 className="tele-title">
            <span className="tele-title-main">Smart Telecaller CRM</span>
            <span className="tele-title-highlight">Built for Telecalling Professionals</span>
          </h1>

          <div className="tele-desc">
            <p>
              Struggling to manage call lists, track customer interactions, or boost follow-up efficiency? 
              <strong> Our Telecaller CRM has got you covered!</strong>
            </p>
          </div>

          <p className="tele-subtitle">
            Pure$aaS Telecaller CRM is an all-in-one tool designed to streamline your calling campaigns, 
            improve productivity, and maximize conversions.
          </p>

          <div className="tele-cta">
            <button className="tele-btn" onClick={handleRequestDemo}>
              <span className="tele-btn-text">Request a Demo</span>
              <i className="fas fa-arrow-right tele-btn-arrow"></i>
              <div className="tele-btn-shine"></div>
            </button>

            <div className="tele-trust">
              <div className="tele-trust-item">
                <div className="tele-trust-icon"><i className="fas fa-users"></i></div>
                <div className="tele-trust-text">
                  <strong>500+</strong>
                  <span>Telecallers</span>
                </div>
              </div>
              <div className="tele-trust-item">
                <div className="tele-trust-icon"><i className="fas fa-star"></i></div>
                <div className="tele-trust-text">
                  <strong>98%</strong>
                  <span>Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tele-visual">
          <div className="tele-dashboard">
            <div className="tele-dashboard-header">
              <div className="tele-window-controls">
                <span className="tele-control red"></span>
                <span className="tele-control yellow"></span>
                <span className="tele-control green"></span>
              </div>
              <div className="tele-dashboard-title">Call Dashboard</div>
            </div>

            <div className="tele-dashboard-stats">
              <div className="tele-stat">
                <div className="tele-stat-icon"><i className="fas fa-phone"></i></div>
                <div className="tele-stat-content">
                  <div className="tele-stat-value">247</div>
                  <div className="tele-stat-label">Calls Today</div>
                </div>
              </div>
              <div className="tele-stat">
                <div className="tele-stat-icon"><i className="fas fa-chart-line"></i></div>
                <div className="tele-stat-content">
                  <div className="tele-stat-value">89%</div>
                  <div className="tele-stat-label">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="tele-call-activity">
              <h4>Recent Calls</h4>
              <div className="tele-activity-list">
                <div className="tele-activity-item active">
                  <div className="tele-avatar"><i className="fas fa-user"></i></div>
                  <div className="tele-caller-info">
                    <div className="tele-caller-name">Sarah Johnson</div>
                    <div className="tele-call-time">Scheduled - 2:30 PM</div>
                  </div>
                  <div className="tele-call-status"><i className="fas fa-phone"></i></div>
                </div>

                <div className="tele-activity-item">
                  <div className="tele-avatar"><i className="fas fa-user"></i></div>
                  <div className="tele-caller-info">
                    <div className="tele-caller-name">Mike Chen</div>
                    <div className="tele-call-time">Completed - 3:15 PM</div>
                  </div>
                  <div className="tele-call-status completed"><i className="fas fa-check"></i></div>
                </div>
              </div>
            </div>
          </div>

          <div className="tele-floating-elements">
            <div className="tele-floating-card tele-card-1"><i className="fas fa-phone-volume"></i></div>
            <div className="tele-floating-card tele-card-2"><i className="fas fa-bullseye"></i></div>
          </div>
        </div>
      </div>
    </section>



    <section>
      <div className="telefea-container">
      <div className="telefea-background">
        <div className="telefea-floating-shapes">
          <div className="telefea-shape telefea-shape-1"></div>
          <div className="telefea-shape telefea-shape-2"></div>
          <div className="telefea-shape telefea-shape-3"></div>
          <div className="telefea-shape telefea-shape-4"></div>
        </div>
        
        <header className="telefea-header wow animate__animated animate__fadeInUp">
          <h1 className="telefea-title">
            <span className="telefea-title-main">Telecaller CRM</span>
            <span className="telefea-title-sub">Powerful Features</span>
          </h1>
          <p className="telefea-intro">
            Revolutionize your telecalling operations with our cutting-edge CRM platform designed for maximum productivity and efficiency.
          </p>
        </header>

        <div className="telefea-features wow animate__animated animate__fadeInUp">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`telefea-feature telefea-feature-${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="telefea-feature-content">
                <div 
                  className="telefea-feature-icon" 
                  style={{ '--icon-color': feature.color }}
                >
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <div className="telefea-feature-text">
                  <h3 className="telefea-feature-title">{feature.title}</h3>
                  <p className="telefea-feature-description">{feature.description}</p>
                </div>
                <div className="telefea-feature-connector"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>



{/* Demo Form */}
    <section>
      <ProductForm/>
    </section>



{/* Why Section */}

<section>
  <div className="whytele-container wow animate__animated animate__fadeInUp">
    {/* Animated Gradient Background */}
    <div className="whytele-background">
      <div className="whytele-gradient-shape whytele-shape-1"></div>
      <div className="whytele-gradient-shape whytele-shape-2"></div>
      <div className="whytele-gradient-shape whytele-shape-3"></div>

      <div className="whytele-content">
        {/* Header */}
        <div className="whytele-header">
          <div className="whytele-badge">Why Choose</div>
          <h1 className="whytele-main-title">
            Telecaller <span className="whytele-highlight">CRM</span>
          </h1>
          <p className="whytele-subtitle">
            Revolutionize your telecalling operations with our cutting-edge CRM solution designed for maximum efficiency and productivity.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="whytele-benefits-grid">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.id} 
              className="whytele-benefit-card"
              style={{ '--delay': `${index * 0.15}s` }}
            >
              <div 
                className="whytele-benefit-icon-wrapper"
                style={{ background: benefit.gradient }}
              >
                <i className={`fas ${benefit.icon} whytele-benefit-icon`}></i>
              </div>
              <div className="whytele-benefit-content">
                <h3 className="whytele-benefit-title">{benefit.title}</h3>
                <p className="whytele-benefit-description">{benefit.description}</p>
              </div>
              <div className="whytele-hover-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


{/* Faq Section */}
<section>
  <TelecallercrmFaq/>
</section>


{/* Email Section */}
<section className="cta-section wow animate__animated animate__fadeInUp">
            <div className="cta-content-left">
                <span className="cta-tag">Finance</span>
                <h1 className="cta-title">Ready to transform your business with PureSaas CRM</h1>
                <p className="cta-description">
                    Start your free trial today and see your ideas come to life easily and creatively.
                </p>
            </div>

            <div className="cta-form-right">
                <form className="cta-form">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="cta-email-input"
                    />
                    <button type="submit" className="cta-button">Get started!</button>
                </form>
                <div className="cta-features">
                    <div className="feature-item">
                        <i className="fa-solid fa-circle-check "></i>
                        <span>No credit card required</span>
                    </div>
                    <div className="feature-item">
                        <i className="fa-solid fa-circle-check "></i>
                        <span>14-Day free trial</span>
                    </div>
                </div>
            </div>
        </section>


    <Footer/>
    </>
  );
};

export default TelecallerCRM;
