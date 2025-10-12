import React from 'react';
import '../assets/css/Blog.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Blog = () => {
  return (
    <div>
      <Navbar />

      <div className="blogs-container">
        {/* Main Content */}
        <div className="blogs-main">
          <div className="blogs-article">
            <img src="/Image/blog1.jpg" alt="Building Customer Experience Strategies" className="blogs-article-img" />
            <div className="blogs-article-content">
              <span className="blogs-category">Banking</span>
              <div className="blogs-meta">
                <span className="blogs-date">📅 May 28, 2025</span>
                <span className="blogs-read-time">⏱ 6 min read</span>
              </div>
              <h3 className="blogs-article-title">Building Outstanding Customer Experience Strategies</h3>
              <button className="blogs-read-more-btn">Read more</button>
            </div>
          </div>

          <div className="blogs-article">
            <img src="/Image/blog2.jpg" alt="Building Resilient Business Models" className="blogs-article-img" />
            <div className="blogs-article-content">
              <span className="blogs-category">Finance</span>
              <div className="blogs-meta">
                <span className="blogs-date">📅 May 25, 2025</span>
                <span className="blogs-read-time">⏱ 5 min read</span>
              </div>
              <h3 className="blogs-article-title">Building Resilient Business Models</h3>
              <button className="blogs-read-more-btn">Read more</button>
            </div>
          </div>

          <div className="blogs-article">
            <img src="/Image/blog3.jpg" alt="Complete Guide to Digital Transformation in 2024" className="blogs-article-img" />
            <div className="blogs-article-content">
              <span className="blogs-category">Technology</span>
              <div className="blogs-meta">
                <span className="blogs-date">📅 May 22, 2025</span>
                <span className="blogs-read-time">⏱ 8 min read</span>
              </div>
              <h3 className="blogs-article-title">Complete Guide to Digital Transformation in 2025</h3>
              <button className="blogs-read-more-btn">Read more</button>
            </div>
          </div>

          <div className="blogs-article">
            <img src="/Image/blog4.jpg" alt="Decoding Consolidation" className="blogs-article-img" />
            <div className="blogs-article-content">
              <span className="blogs-category">Startups</span>
              <div className="blogs-meta">
                <span className="blogs-date">📅 May 18, 2025</span>
                <span className="blogs-read-time">⏱ 4 min read</span>
              </div>
              <h3 className="blogs-article-title">Decoding Consolidation: What It Means for Founders</h3>
              <button className="blogs-read-more-btn">Read more</button>
            </div>
          </div>

          <div className="blogs-article">
            <img src="/Image/blog5.jpg" alt="Digital Making Place in Funds" className="blogs-article-img" />
            <div className="blogs-article-content">
              <span className="blogs-category">Finance</span>
              <div className="blogs-meta">
                <span className="blogs-date">📅 May 15, 2025</span>
                <span className="blogs-read-time">⏱ 7 min read</span>
              </div>
              <h3 className="blogs-article-title">Digital Making Place in Funds</h3>
              <button className="blogs-read-more-btn">Read more</button>
            </div>
          </div>

          <div className="blogs-article">
            <img src="/Image/blog6.jpg" alt="Efficient Banking Operations" className="blogs-article-img" />
            <div className="blogs-article-content">
              <span className="blogs-category">Banking</span>
              <div className="blogs-meta">
                <span className="blogs-date">📅 May 12, 2025</span>
                <span className="blogs-read-time">⏱ 5 min read</span>
              </div>
              <h3 className="blogs-article-title">Efficient Banking Operations</h3>
              <button className="blogs-read-more-btn">Read more</button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="blogs-sidebar">
          {/* Search */}
          <div className="blogs-search-section">
            <div className="blogs-search-wrapper">
              <input
                type="text"
                placeholder="Search articles"
                className="blogs-search-input"
              />
              <span className="blogs-search-icon">🔍</span>
            </div>
          </div>

          {/* Categories */}
          <div className="blogs-categories-section">
            <h4 className="blogs-section-title">Categories <span className="blogs-total-count">(28)</span></h4>
            <ul className="blogs-category-list">
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Marketing <span className="blogs-category-count">(10)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Banking <span className="blogs-category-count">(12)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Design <span className="blogs-category-count">(10)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Finance <span className="blogs-category-count">(6)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Innovation <span className="blogs-category-count">(10)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Research <span className="blogs-category-count">(10)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Security <span className="blogs-category-count">(10)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Technology <span className="blogs-category-count">(12)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Sustainability <span className="blogs-category-count">(2)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Crypto <span className="blogs-category-count">(10)</span></a></li>
            </ul>
          </div>

          {/* Recent Articles */}
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

          {/* Past Records */}
          <div className="blogs-past-section">
            <h4 className="blogs-section-title">Past records <span className="blogs-total-count">(28)</span></h4>
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;