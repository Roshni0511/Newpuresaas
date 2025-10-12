import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/Privacypolicy.css'

const Privacypolicy = () => {
  return (
    <>
      <Navbar />
      <div className='container'> 
        <div className="termsAndConditions fadeIn">
          <h1 className="termsAndConditionsHeading">Privacy Policy</h1>
           
          <div className="serviceLeadingSection">
            <h4><span className="sn blue">1.</span><span className="st blue">Our Privacy Policy</span></h4>
           
            <div className="serviceInfoContainer">
              <p className="serviceDetails">If you Use The Platform, You puresaas. This privacy policy sets out how www.puresaas.in uses and protects any information that you give www.puresaas.in when you use this website.</p>
              <div className="secionLine lineColorBlue"></div>
            </div>
                                  
          </div>

          <div className="serviceLeadingSection">
            <h4><span className="sn orange">2.</span><span className="st orange">Commitment to Privacy</span></h4>
            
            <div className="serviceInfoContainer">
              
              <p className="serviceDetails">www.puresaas.in is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.</p>
              <div className="secionLine lineColorOrange"></div>
            </div>
                        
          </div>
          <div className="serviceLeadingSection">
            <h4><span className="sn lightGreen">3.</span><span className="st lightGreen">Information We Collect</span></h4>
      
            <div className="serviceInfoContainer">

              <p className="serviceDetails">We may collect the following information:</p>
              <div className="secionLine lineColorGreen"></div>
            </div>

            <div className="serviceInfoContainer">
              <p className="serviceDetails">1. Contact information including email address</p>
              <div className="secionLine lineColorGreen"></div>
            </div>

            <div className="serviceInfoContainer">
              <p className="serviceDetails">2. Demographic information such as postcode, preferences and interests</p>
              <div className="secionLine lineColorGreen"></div>
            </div>

            <div className="serviceInfoContainer">
              <p className="serviceDetails">We require this information to understand your needs and provide you with a better service, and in particular for the following reasons.</p>
              <div className="secionLine lineColorGreen"></div>
            </div>
          
          </div> 
          <div className="serviceLeadingSection">
            <h4><span className="sn purple">4.</span><span className="st purple">How We Use the Information</span></h4>
          
            <div className="serviceInfoContainer">
          
              <p className="serviceDetails">1. Internal record keeping</p>
              <div className="secionLine lineColorPurple"></div>
            </div>

            <div className="serviceInfoContainer">
              <p className="serviceDetails">1.2. We may use the information to improve our products and services</p>
              <div className="secionLine lineColorPurple"></div>
            </div>

            <div className="serviceInfoContainer">
              <p className="serviceDetails">3. We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided</p>
              <div className="secionLine lineColorPurple"></div>
            </div>

            <div className="serviceInfoContainer">
              <p className="serviceDetails">4. From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customize the website according to your interests.</p>
              <div className="secionLine lineColorPurple"></div>
            </div>
             
          </div>    


            <div className="serviceLeadingSection">
            <h4><span className="sn blue">5.</span><span className="st blue">Data Retention / Deletion of Account</span></h4>
           
            <div className="serviceInfoContainer">
              <p className="serviceDetails">We will retain your information for as long as your account is active, your information is needed to provide you services, or as required to fulfill our legal obligations. If you wish to delete your account or request that we no longer use your information to provide you services contact us at support@puresaas.in We will respond to your request within reasonable time. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes and enforce our agreements.</p>
              <div className="secionLine lineColorBlue"></div>
            </div>
                                  
          </div>

          <div className="serviceLeadingSection">
            <h4><span className="sn orange">6.</span><span className="st orange">Unsubscribe / Opt Out</span></h4>
            
            <div className="serviceInfoContainer">
              
              <p className="serviceDetails">You may opt out of receiving puresaas email updates, newsletters and/or partner emails by clicking on the "My Profile" link on the website and making the appropriate selections. The choice to opt out of such communications is also generally available during the sign-up process. puresaas will still contact you when there are changes to the Terms of Service or Submitter Terms of Service, as applicable. In addition, we will still send you service-related announcements including, but not limited to, a registration email, order related notifications and emails automatically triggered by actions you took on the Site. Generally, you may not opt-out of these communications, which are not promotional in nature.</p>
                <div className="secionLine lineColorOrange"></div>
                </div>
          </div>
       
        </div>
      </div>
        <Footer />
    </>
  )
}

export default Privacypolicy;