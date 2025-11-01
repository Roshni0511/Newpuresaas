import React from 'react';
import '../assets/css/Blog.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaCalendarAlt, FaClock } from 'react-icons/fa'; // ✅ Importing icons
import { FaSearch } from 'react-icons/fa';

const Blog = () => {
  return (
    <div>
      <Navbar />

      <div className="MissionHome wow animate__animated animate__fadeInUp">
        <div className="container">
          <section className="Mission-section">
            <div className="Mission-overlay">
              <div className="Mission-content">
                <p className="Mission-tag">Puresaas</p>
                <h2 className="Mission-title wow animate__animated animate__fadeInUp">
                  Blog
                </h2>
                <div className="mt-15">
                  <a href="/">Home</a>
                  <span className="padding-rl-20">|</span>
                  <span className="main-color">Blog</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="blogs-container wow animate__animated animate__fadeInUp">
        {/* Main Content */}
        <div className="blogs-main">
          {[
            {
              img: '/Image/blog1.jpg',
              category: 'Banking',
              date: 'May 28, 2025',
              time: '6 min read',
              title: 'Secure and Reliable CRM Solutions',
              
            },
            {
              img: '/Image/blog2.jpg',
              category: 'Finance',
              date: 'May 25, 2025',
              time: '5 min read',
              title: 'Lead Capture and CRM Integration',
            },
            {
              img: '/Image/blog3.jpg',
              category: 'Technology',
              date: 'May 22, 2025',
              time: '8 min read',
              title: 'Comprehensive Customer Management',
            },
           
          ].map((blog, index) => (
            <div className="blogs-article" key={index}>
              <img
                src={blog.img}
                alt={blog.title}
                className="blogs-article-img"
              />
              <div className="blogs-article-content">
                <span className="blogs-category">{blog.category}</span>
                <div className="blogs-meta">
                  <span className="blogs-date">
                    <FaCalendarAlt style={{ marginRight: '5px', color: '#555' }} />
                    {blog.date}
                  </span>
                  <span className="blogs-read-time">
                    <FaClock style={{ marginRight: '5px', color: '#555' }} />
                    {blog.time}
                  </span>
                </div>
                <h3 className="blogs-article-title">{blog.title}</h3>
               <a href="/Blogdetails"> <button className="blogs-read-more-btn">Read more</button></a>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        {/* <div className="blogs-sidebar">
         
          <div className="blogs-search-section">
            <div className="blogs-search-wrapper">
              <input
                type="text"
                placeholder="Search articles"
                className="blogs-search-input"
              />
              <FaSearch className="blogs-search-icon" />
            </div>
          </div>

          <div className="blogs-categories-section">
            <h4 className="blogs-section-title">Categories</h4>
            <ul className="blogs-category-list">
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">All <span className="blogs-category-count">(28)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Marketing <span className="blogs-category-count">(1)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Banking <span className="blogs-category-count">(12)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Design <span className="blogs-category-count">(1)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Finance <span className="blogs-category-count">(6)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Innovation <span className="blogs-category-count">(1)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Research <span className="blogs-category-count">(1)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Security <span className="blogs-category-count">(1)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Technology <span className="blogs-category-count">(1)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Sustainability <span className="blogs-category-count">(2)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Workplace <span className="blogs-category-count">(1)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Crypto <span className="blogs-category-count">(1)</span></a></li>
            </ul>
          </div>

          <div className="blogs-recent-section">
            <h4 className="blogs-section-title">Recent articles</h4>

            <div className="blogs-recent-item">
              <img src="/Image/blog7.jpg" alt="Maximizing Productivity in 2024" className="blogs-recent-img" />
              <div className="blogs-recent-content">
                <p className="blogs-recent-text">Maximizing Productivity in...</p>
                <span className="blogs-recent-date">Nov 28, 2025</span>
              </div>
            </div>

            <div className="blogs-recent-item">
              <img src="/Image/blog8.jpg" alt="A Sustainable Electric Vehicle" className="blogs-recent-img" />
              <div className="blogs-recent-content">
                <p className="blogs-recent-text">A customized electronic...</p>
                <span className="blogs-recent-date">Nov 28, 2025</span>
              </div>
            </div>

            <div className="blogs-recent-item">
              <img src="/Image/blog9.jpg" alt="Our Strategy for 2025" className="blogs-recent-img" />
              <div className="blogs-recent-content">
                <p className="blogs-recent-text">Our SaaS SEO strategy 6...</p>
                <span className="blogs-recent-date">Nov 28, 2025</span>
              </div>
            </div>
          </div>

          <div className="blogs-past-section">
            <h4 className="blogs-section-title">
              Past records <span className="blogs-total-count">(28)</span>
            </h4>
            <ul className="blogs-past-list">
              <li className="blogs-past-item"><a href="#" className="blogs-past-link">All time 2025 <span className="blogs-category-count">(28)</span></a></li>
              <li className="blogs-past-item"><a href="#" className="blogs-past-link">April 2025 <span className="blogs-category-count">(7)</span></a></li>
              <li className="blogs-past-item"><a href="#" className="blogs-past-link">November 2025 <span className="blogs-category-count">(2)</span></a></li>
              <li className="blogs-past-item"><a href="#" className="blogs-past-link">June 2025 <span className="blogs-category-count">(5)</span></a></li>
              <li className="blogs-past-item"><a href="#" className="blogs-past-link">May 2025 <span className="blogs-category-count">(4)</span></a></li>
              <li className="blogs-past-item"><a href="#" className="blogs-past-link">July 2025 <span className="blogs-category-count">(1)</span></a></li>
              <li className="blogs-past-item"><a href="#" className="blogs-past-link">February 2025 <span className="blogs-category-count">(2)</span></a></li>
            </ul>
          </div>
        </div> */}
          <div className="col-lg-4 col-md-12 wow animate__animated animate__fadeInUp">
                            <div className="sidebar">
                                {/* ==== Search Box ==== */}
                                <div className="sidebar-box search-box">
                                    <input type="text" placeholder="Search..." />
                                    <button>
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>

                                {/* ==== Category ==== */}
                                <div className="sidebar-box category-box">
                                    <h5>Category</h5>
                                    <ul>
                                        <li><a href="/BuilderCRM">Builder / Developer CRM</a></li>
                                        <li><a href="/Realestatecrm">Real Estate CRM</a></li>
                                        <li><a href="/Telecallercrm">Telecaller  CRM</a></li>
                                        <li><a href="/Sales">Sales CRM</a></li>
                                        <li><a href="/Serviceerp">Service CRM</a></li>
                                        <li><a href="/ATS">ATS (Application Tracking System)</a></li>
                                        <li><a href="/B2BTextileERP">B2B Textile ERP</a></li>
                                        <li><a href="/SecondHandCar">Second Hand Car Management System</a></li>

                                    </ul>
                                </div>

                                {/* ==== Recent Posts ==== */}
                                <div className="sidebar-box recent-posts tags">
                                    <h5>Latest Posts</h5>
                                    <ul>
                                        <li>
                                            <img src="/Image/bdetail1.png" alt="post" />
                                            <div>
                                                <span>Web Design</span>
                                                <h6 style={{marginTop:'10px'}}><a href="#">Advanced Analytics and Reporting</a></h6>
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/Image/bdetail2.png" alt="post" />
                                            <div>
                                                 <span>Web Design</span>
                                                <h6  style={{marginTop:'10px'}}><a href="#">Automation and Workflow Efficiency</a></h6>
                                        
                                            </div>
                                        </li>
                                        <li>
                                            <img src="/Image/bdetail3.png" alt="post" />
                                            <div>
                                                 <span>Web Design</span>
                                                <h6  style={{marginTop:'10px'}}><a href="#">Customizable Solutions</a></h6>
                                     
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* ==== Popular Tags ==== */}
                                <div className="sidebar-box tags-box">
                                    <h5>Popular Tags</h5>
                                    <div className="tags">
                                        <span>Data Analytics</span>
                                        <span>Data Security</span>
                                        <span>ModUser-friendly CRMern</span>
                                        <span>Workflow Optimization</span>
                                     
                                    </div>
                                </div>
                            </div>
                        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
