import React, { useState } from 'react';
import '../assets/css/Signin.css';
import { Link } from 'react-router-dom'; // if using React Router
import Navbar from './Navbar';
import Footer from './Footer';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    } else {
      setPasswordError('');
      // Proceed with form submission or authentication
      console.log('Form submitted:', { email, password });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="signup-container">
        <div className="signup-card">
          {/* Left Form Section */}
          <div className="form-section">
            <h2 className="form-title">Log In</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your email</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && (
                  <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                    {passwordError}
                  </p>
                )}
              </div>

              <button type="submit" className="signup-button">
                Login
              </button>
            </form>

            <div className="or-divider">Or</div>

            <div className="social-buttons">
              <button className="social-button google">
                <img src="/Image/google.png" alt="" style={{ width: '20px' }} />
              </button>
              <button className="social-button facebook">
                <img src="/Image/apple.png" alt="" style={{ width: '20px' }} />
              </button>
              <button className="social-button apple">
                <img src="/Image/facebook.png" alt="" style={{ width: '20px' }} />
              </button>
              <button className="social-button microsoft">
                <img src="/Image/windows.png" alt="" style={{ width: '20px' }} />
              </button>
            </div>

            {/* Sign Up Link */}
            <div
              className="signup-option"
              style={{ marginTop: '20px', textAlign: 'center' }}
            >
              Don't have an account?{' '}
              <Link
                to="/Signup"
                style={{
                  color: '#8b5cf6',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
              >
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
