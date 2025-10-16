import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/Refund.css'

const Refundpolicy = () => {
  return (
    <>
      <Navbar />
<div className='container'> 

          <div className="termsAndConditions fadeIn">
      <h1 className="termsAndConditionsHeading">Refund Policy</h1>
       
      <div className="serviceLeadingSection">
        <div className="serviceInfoContainer">
          {/* <h6 className="serviceLead">Some service info</h6> */}
          <p className="serviceDetails">1. In any Case of Refund Initiated Approved amount will be Refund within 7 to 10 Days</p>
          <div className="secionLine lineColorBlue"></div>
        </div>                   
      </div>
    </div>
</div>
      <Footer />
    </>
  )
}

export default Refundpolicy
