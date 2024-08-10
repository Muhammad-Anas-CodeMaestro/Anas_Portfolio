import React, { useState, useEffect } from "react";
import Routes from "../Routes";
import './contact.css'

function Contact() {
  const [contactInfo, setContactInfo] = useState({
    phone: "",
    email: "",
    linkedin: "",
  });

  useEffect(() => {
    const fetchContactInfo = () => {
      setContactInfo({
        phone: "0319-0409896",
        email: "mraza50044@gmail.com",
        linkedin: "https://www.linkedin.com/in/mohammad-anas-72aa05260/",
      });
    };
    fetchContactInfo();
  }, []);
  return (
    <>
      <div className="formatting_background">
        <div className="section">
          <Routes />
        </div>
        <div className="contact-container">
          <h1>Contact Information</h1>
          <div className="contact-info">
            <p>
              <strong>Phone:</strong> {contactInfo.phone}
            </p>
            <p>
              <strong>Email:</strong> {contactInfo.email}
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Muhammad Anas
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
