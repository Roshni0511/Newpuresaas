import React from 'react'
import "../assets/css/blogdetails.css"
import Navbar from './Navbar'
import Footer from './Footer'

const Blogdetails = () => {
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
          <div class="mt-15">
            <a href="/">Home</a><span class="padding-rl-20">|</span><span class="main-color">Blog Details</span>
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
                                    src="/Image/mainblog.jpg"
                                    alt="watch"
                                    className="blog-img"
                                />
                                <h3>Better Security and faster Server</h3>
                                <p>
                                    CRM systems streamline lead management, automate sales processes, and provide real-time insights into sales pipelines. This helps sales teams prioritize leads, forecast sales more accurately, and ultimately increase conversion rates.
                                </p>

                                    <div className="category-bar">
      <div className="categories" style={{display:"flex"}}>
        <h5 style={{marginTop:'5px'}}>Tags :</h5>
 
        <button className="btn" style={{marginLeft:"10px"}}>Optimize</button>
        <button className="btn">Hosting</button>
      </div>
      <div className="social-icons" style={{display:"flex"}}>
               <h5 style={{marginTop:'5px'}}>Share :</h5>
 
        <a href="#" ><i className="fab fa-facebook-f facebook" style={{padding:'5px'}}></i></a>
 
        <a href="#"><i className="fab fa-instagram instagram" style={{padding:'5px'}}></i></a>
        <a href="#"><i className="fab fa-youtube youtube" style={{padding:'5px'}}></i></a>
   
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
                                        </div>
                                        <button type="submit" className="btn-submit">
                                            Post Comment
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* ===== Right Sidebar ===== */}
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
                                        <li><a href="/RealEstateAgentCRM">Real Estate Agent CRM</a></li>
                                        <li><a href="#">Real Estate CRM</a></li>
                                        <li><a href="#">Sales CRM</a></li>
                                        <li><a href="#">Service CRM</a></li>
                                        <li><a href="#">B2B Textile ERP</a></li>
                                         <li><a href="#">Telecaller  CRM</a></li>
                                          <li><a href="#">ATS (Application Tracking System)</a></li>
                                           <li><a href="#">Payroll System</a></li>
                                             <li><a href="#">Office ERP</a></li>

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
                </div>
            </section>

        <Footer />
        </>
    )
}

export default Blogdetails
