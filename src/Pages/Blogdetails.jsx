import React, { useEffect, useRef, useState } from 'react'
import "../assets/css/blogdetails.css"
import Navbar from './Navbar'
import Footer from './Footer'

const Blogdetails = () => {
      const canvasRef = useRef(null);
  const [captchaCode, setCaptchaCode] = useState("");
  const [inputValue, setInputValue] = useState("");

  // Generate random number helper
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  // Generate CAPTCHA code and draw on canvas
  const generateCaptcha = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";

    for (let m = 0; m < 6; m++) {
      const char = characters.charAt(Math.floor(Math.random() * characters.length));
      code += char;

      const fontSize = 20 + Math.random() * 10; // Random font size
      const rotation = randomNumber(-45, 45); // Random rotation
      const x = 20 + m * 30;
      const y = canvas.height / 2;

      ctx.save(); // Save current state
      ctx.font = `${fontSize}px Arial`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = `rgb(${randomNumber(0,255)}, ${randomNumber(0,255)}, ${randomNumber(0,255)})`;
      ctx.translate(x, y);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.fillText(char, 0, 0);
      ctx.restore(); // Restore state
    }

    setCaptchaCode(code); // Save code in state
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === captchaCode) {
      alert("Form submitted successfully!");
      setInputValue("");
      generateCaptcha();
    } else {
      alert("Invalid captcha code. Please try again.");
      setInputValue("");
      generateCaptcha();
    }
  };

  useEffect(() => {
    generateCaptcha(); // Generate CAPTCHA on component mount
  }, []);

    return (
        <>
        <Navbar />
           <div className="MissionHome wow animate__animated animate__fadeInUp">
         <div className="container">
         <section className="Mission-section">
      <div className="Mission-overlay">
        <div className="Mission-content">
          <p className="Mission-tag">Puresaas</p>
          <h2 className="Mission-title  wow animate__animated animate__fadeInUp">
     Blog Details
          </h2>
          <div className="mt-15">
            <a href="/">Home</a><span className="padding-rl-20">|</span><span className="main-color">Blog Details</span>
        </div>
        </div>

      </div>
    </section>
       </div>
            </div>
            <section className="blog-details section-padding ">
                <div className="container">
                    <div className="row">
                        {/* ===== Left Side Blog Content ===== */}
                        <div className="col-lg-8 col-md-12 wow animate__animated animate__fadeInUp">
                            <div className="blog-content">

                                <div className="blog-meta">
                                    <span>Admin</span> | <span>February 15, 2025</span>
                                </div>
                                <h3>Boost Your Business Efficiency with CRM</h3>
                                <p>
                                    Customer Relationship Management (CRM) software has evolved into a powerful tool that not only centralizes customer data but also enhances communication, streamlines processes, and drives revenue. In this comprehensive guide, we explore how implementing the right CRM solution can transform your business operations and elevate customer satisfaction to new heights.
                                </p>
                                <blockquote>
                                    "A great watch is not just about telling time but making a
                                    statement."
                                </blockquote>
                                <p>
                                    Customer Relationship Management (CRM) software is a technology solution designed to help businesses manage interactions with current and potential customers. It enables organizations to streamline sales processes, improve customer service, and build stronger relationships by centralizing customer information and automating tasks. In today's competitive market, where customer experience is paramount, CRM empowers businesses to deliver personalized service and targeted marketing campaigns, ultimately driving growth and profitability.
                                </p>

                                <img
                                    src="https://t4.ftcdn.net/jpg/02/46/95/59/360_F_246955925_aagLKZevnHfWaAKqoX0l5yOpP6Dl54GW.jpg"
                                    alt="watch"
                                    className="blog-img"
                                />
                                <h3>Better Security and faster Server</h3>
                                <p>
                                    CRM systems streamline lead management, automate sales processes, and provide real-time insights into sales pipelines. This helps sales teams prioritize leads, forecast sales more accurately, and ultimately increase conversion rates.
                                </p>

                                 
                              
                            </div>
                        </div>

                        {/* ===== Right Sidebar ===== */}
                        <div className="col-lg-4 col-md-12 wow animate__animated animate__fadeInUp">
                               <div className="category-bar">
      <div className="categories" style={{display:"flex",marginBottom:'15px'}}>
        <h5 style={{marginTop:'5px'}}>Tags :</h5>
 
        <button className="btn" style={{marginLeft:"10px"}}>Optimize</button>
        <button className="btn">Hosting</button>
      </div>
      <div className="social-icons" style={{display:"flex"}}>
               <h5 style={{marginTop:'5px'}}>Share :</h5>
 
        <a href="#" ><i className="fab fa-facebook-f facebook" style={{padding:'5px',width:" var(--fa-width, -0.75em)"}}></i></a>
 
        <a href="#"><i className="fab fa-instagram instagram" style={{padding:'5px',width:" var(--fa-width, -0.75em)"}}></i></a>
        <a href="#"><i className="fab fa-youtube youtube" style={{padding:'5px',width:" var(--fa-width, -0.75em)"}}></i></a>
   
      </div>
    </div>

                             <div className="author-box">
                                    <div className="author-img">
                                        <img src="/Image/bdetail1.png" alt="Author" />
                                    </div>

                                    <div className="author-info">
                                        <h5>Smith patel</h5>
                                        <p>
                                            Switching to Puresaas was a game-changer for us! It streamlined our operations and improved customer interactions significantly. Highly recommend it for any business looking to boost efficiency and sales.
                                        </p>
                                    </div>
                                </div>
                                {/* Comment Form */}
                                <div className="comment-form">
                                    <h5>Leave a Reply</h5>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input type="text" placeholder="Name" required />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" placeholder="Email" required />
                                            </div>
                                            <div className="col-12">
                                                <textarea rows="4" placeholder="Comment"></textarea>
                                            </div>
                                        
        <div className="col-md-12">
          <form onSubmit={handleSubmit}  style={{    transition: "transform 0.2s ease-in-out" }}>
            <div className="mb-3 d-flex align-items-center">
              <canvas
                ref={canvasRef}
                width={200}
                height={80}
                style={{
                  borderRadius: "10px",
                  border: "1px solid #dee2e6",
                  background: "#f8f9fa",
                  boxShadow: "inset 0 2px 6px rgba(0,0,0,0.05)",
                  marginRight: "10px",
                  maxWidth: "100%",
                }}
              />
              <button
                type="button"
                className="btn btn-secondary"
                onClick={generateCaptcha}
                style={{
                  borderRadius: "10px",
                  padding: "12px 18px",
                  boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                  transition: "all 0.2s ease-in-out",
                }}
              >
                <i className="fa fa-refresh"></i>
              </button>
            </div>

            <div className="mb-3">
              <label htmlFor="captcha-input" className="form-label">Enter Captcha</label>
              <input
                type="text"
                id="captcha-input"
                className="form-control"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
              />
            </div>

     
          </form>
     
    </div>
                                           </div>
                                        <button type="submit" className="btn-submit">
                                            Post Comment
                                        </button>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </section>

        <Footer />
        </>
    )
}

export default Blogdetails
