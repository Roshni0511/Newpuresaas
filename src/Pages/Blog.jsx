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
              <h3 className="blogs-article-title">Building Customer Experience Strategies</h3>
              <p className="blogs-article-date">Jun 20, 2024</p>
              <button className="blogs-read-more-btn">Read more</button>
            </div>
          </div>

          <div className="blogs-article">
            <img src="/Image/blog2.jpg" alt="Building Resilient Business Models" className="blogs-article-img" />
            <div className="blogs-article-content">
              <h3 className="blogs-article-title">Building Resilient Business Models</h3>
              <p className="blogs-article-date">Jun 15, 2024</p>
              <button className="blogs-read-more-btn">Read more</button>
            </div>
          </div>

          <div className="blogs-article">
            <img src="/Image/blog3.jpg" alt="Complete Guide to Digital Transformation in 2024" className="blogs-article-img" />
            <div className="blogs-article-content">
              <h3 className="blogs-article-title">Complete Guide to Digital Transformation in 2024</h3>
              <p className="blogs-article-date">Jun 10, 2024</p>
              <button className="blogs-read-more-btn">Read more</button>
            </div>
          </div>

          <div className="blogs-article">
            <img src="/Image/blog4.jpg" alt="Decoding Consolidation" className="blogs-article-img" />
            <div className="blogs-article-content">
              <h3 className="blogs-article-title">Decoding Consolidation: What It Means for Founders</h3>
              <p className="blogs-article-date">Jun 05, 2024</p>
              <button className="blogs-read-more-btn">Read more</button>
            </div>
          </div>

          <div className="blogs-article">
            <img src="/Image/blog5.jpg" alt="Digital Making Place in Funds" className="blogs-article-img" />
            <div className="blogs-article-content">
              <h3 className="blogs-article-title">Digital Making Place in Funds</h3>
              <p className="blogs-article-date">May 30, 2024</p>
              <button className="blogs-read-more-btn">Read more</button>
            </div>
          </div>

          <div className="blogs-article">
            <img src="/Image/blog6.jpg" alt="Efficient Banking Operations" className="blogs-article-img" />
            <div className="blogs-article-content">
              <h3 className="blogs-article-title">Efficient Banking Operations</h3>
              <p className="blogs-article-date">May 25, 2024</p>
              <button className="blogs-read-more-btn">Read more</button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="blogs-sidebar">
          {/* Search */}
          <div className="blogs-search-section">
            <input
              type="text"
              placeholder="Search articles"
              className="blogs-search-input"
            />
          </div>

          {/* Categories */}
          <div className="blogs-categories-section">
            <h4 className="blogs-section-title">Categories</h4>
            <ul className="blogs-category-list">
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Marketing <span className="blogs-category-count">(5)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Design <span className="blogs-category-count">(4)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Finance <span className="blogs-category-count">(3)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Security <span className="blogs-category-count">(2)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Sustainability <span className="blogs-category-count">(1)</span></a></li>
              <li className="blogs-category-item"><a href="#" className="blogs-category-link">Crypto <span className="blogs-category-count">(6)</span></a></li>
            </ul>
          </div>

          {/* Recent Articles */}
          <div className="blogs-recent-section">
            <h4 className="blogs-section-title">Recent articles</h4>

            <div className="blogs-recent-item">
              <img src="/Image/blog7.jpg" alt="Maximizing Productivity in 2024" className="blogs-recent-img" />
              <p className="blogs-recent-text">Maximizing Productivity in 2024</p>
            </div>

            <div className="blogs-recent-item">
              <img src="/Image/blog8.jpg" alt="A Sustainable Electric Vehicle" className="blogs-recent-img" />
              <p className="blogs-recent-text">A Sustainable Electric Vehicle</p>
            </div>

            <div className="blogs-recent-item">
              <img src="/Image/blog9.jpg" alt="Our Strategy for 2025" className="blogs-recent-img" />
              <p className="blogs-recent-text">Our Strategy for 2025</p>
            </div>
          </div>

          {/* Past Issues */}
          <div className="blogs-past-section">
            <h4 className="blogs-section-title">Past issues</h4>
            <ul className="blogs-past-list">
              <li className="blogs-past-item"><a href="#" className="blogs-past-link">January 2025</a></li>
              <li className="blogs-past-item"><a href="#" className="blogs-past-link">November 2025</a></li>
              <li className="blogs-past-item"><a href="#" className="blogs-past-link">June 2025</a></li>
              <li className="blogs-past-item"><a href="#" className="blogs-past-link">February 2025</a></li>
              <li className="blogs-past-item"><a href="#" className="blogs-past-link">December 2025</a></li>
              <li className="blogs-past-item"><a href="#" className="blogs-past-link">October 2025</a></li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
