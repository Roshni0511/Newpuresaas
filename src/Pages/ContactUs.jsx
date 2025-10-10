import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import { MdSubject } from "react-icons/md";
import "../assets/css/Contact.css"
import { MdOutlineDriveFileRenameOutline, MdPhone } from "react-icons/md";
import { MdOutlineMail, MdOutlineMessage  } from "react-icons/md";
import { FaHome, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactUs = () => {

  const cards = [
    {
      icon: <FaHome />,
      title: "Our Address",
      text: "2464 Royal Ln. Mesa, New Jersey 45463",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      text: "hello@nextsaaS.com",
    },
    {
      icon: <FaPhone />,
      title: "Call Us",
      text: "+391 (0)35 2568 4593",
    },
  ];


    // State hooks for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    console.log("Submitting form with data:", {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      // Include other necessary fields as required by your backend
    });

    const apiUrl =
      "https://shubhamsingh.in/Application_Tracking_System/inquiry_msg";

    try {
      const response = await fetch(apiUrl, {
        method: "POST", // Typically POST should be used for form submissions
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          // Include other necessary fields
        }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("User created successfully:", result);

        // Display SweetAlert success message
        Swal.fire({
          title: "Success!",
          text: "Thank you for Contacting us! Our Team will contact you as soon as possible.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#808080",
        }).then(() => {
          // Refresh the page after the user clicks 'OK'
          window.location.reload();
        });
      } else {
        console.error("Error:", result);
        alert(`Error: ${result.error}`);
        // Handle API errors here (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
    <section className="contact section-padding">
  <div className="container">
   <h3>Reach out to our support team for help.</h3>
   <p>Whether you have a question, need technical assistance, or just want some guidance, our support team is here to help. We're available around the clock to provide quick and friendly support.

</p>

    <div className="row">

      {/* ==== Left Side Boxes ==== */}
      <div className="col-lg-4 col-md-12">
        <div className="contact-container">
          {cards.map((item, index) => (
            <div key={index} className="contact-card">
              <div className="card-glow"></div>
              <div className="icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ==== Right Side Form ==== */}
      <div className="col-lg-8 col-md-12">
      

        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            <div className="col-md-6">
              <label style={{color:'#000',marginBottom:'8px'}}>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-control"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
                <div className="col-md-6">
                     <label style={{color:'#000',marginBottom:'8px'}}>Your Number</label>
              <input
                type="text"
                name=""
                placeholder="Your Number"
                className="form-control"
     
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-12">
                      <label style={{color:'#000',marginBottom:'8px'}}>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-12">
                   <label style={{color:'#000',marginBottom:'8px'}}>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Enter Your Subject"
                className="form-control"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12">
               <label style={{color:'#000',marginBottom:'8px'}}>Write message</label>
              <textarea
                name="message"
                placeholder="Enter Your Message"
                className="form-control"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-dark rounded-pill px-4 py-2 " style={{width:'100%'}}>
            Submit
              </button>
            </div>
          </div>
        </form>
      </div>

    </div>
  </div>
</section>



    </>
  )
}

export default ContactUs
