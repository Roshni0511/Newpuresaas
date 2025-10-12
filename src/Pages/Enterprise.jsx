import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/Enterprise.css'
export default function Enterprise() {
  return (
    <div>
      <Navbar />
        {/* main section start  */}
            <div className="MissionHome wow animate__animated animate__fadeInUp">
         <div className="container">
         <section className="Mission-section">
      <div className="Mission-overlay">
        <div className="Mission-content">
          <p className="Mission-tag">Puresaas</p>
          <h2 className="Mission-title  wow animate__animated animate__fadeInUp">
           Enterprise
          </h2>
          <div class="mt-15">
            <a href="/">Home</a><span class="padding-rl-20">|</span><span class="main-color">Enterprise</span>
        </div>
        </div>

      </div>
    </section>
       </div>
            </div>
        {/* main section end  */}

        {/* enterprise section start  */}
       
    {/* enterprise section end */}

      <Footer />
    </div>
  )
}
