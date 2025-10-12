import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/Refund.css'

const Refundpolicy = () => {
  return (
    <>
      <Navbar />
<div className='container'> 

          <div class="termsAndConditions fadeIn">
      <h1 class="termsAndConditionsHeading">Refund Policy</h1>
       
      <div class="serviceLeadingSection">
        <div class="serviceInfoContainer">
          {/* <h6 class="serviceLead">Some service info</h6> */}
          <p class="serviceDetails">1. In any Case of Refund Initiated Approved amount will be Refund within 7 to 10 Days</p>
          <div class="secionLine lineColorBlue"></div>
        </div>                   
      </div>
    </div>
</div>
      <Footer />
    </>
  )
}

export default Refundpolicy
