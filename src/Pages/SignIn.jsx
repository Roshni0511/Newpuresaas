import React from 'react';
import '../assets/css/Signin.css';
import { Link } from 'react-router-dom'; // if using React Router
import Navbar from './Navbar';
import Footer from './Footer';

const SignIn = () => {
  return (
    <div>
      <Navbar />
      <div className="signup-container">
        <div className="signup-card">
          {/* Left Form Section */}
          <div className="form-section">
            <h2 className="form-title">Log In</h2>
            <form className="signup-form">
              <div className="form-group">
                <label className="form-label">Your email</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Email address"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="At least 8 characters"
                />
              </div>
              <button type="submit" className="signup-button">
                Login
              </button>
            </form>

            <div className="or-divider">Or</div>

            <div className="social-buttons">
              <button className="social-button google">
                <img src="/Image/google.png" alt="" style={{width:'20px'}}/>
              </button>
              <button className="social-button facebook">
                <img src="/Image/apple.png" alt="" style={{width:'20px'}}/>
              </button>
              <button className="social-button apple">
                <img src="/Image/facebook.png" alt="" style={{width:'20px'}}/>
              </button>
              <button className="social-button microsoft">
                <img src="/Image/windows.png" alt="" style={{width:'20px'}}/>
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="signup-option" style={{ marginTop: '20px', textAlign: 'center' }}>
              Don't have an account?{' '}
              <Link to="/Signup" style={{ color: '#8b5cf6', fontWeight: 'bold', textDecoration: 'none' }}>
                Sign Up
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div
            className="image-section"
            style={{ backgroundImage: "url('/Image/signup-img.jpg')" }}
          ></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
