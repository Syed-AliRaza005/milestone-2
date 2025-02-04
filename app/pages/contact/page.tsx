import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1 className="contact-title">Contact</h1>
        <p className="contact-description">
          For clients, please reach out through the following methods:
        </p>

        <div>
          <div className="contact-item">
            <h2>Email</h2>
            <p>support@example.com</p>
          </div>

          <div className="contact-item">
            <h2>Phone Number</h2>
            <p>1-800-VIP-HELP</p>
          </div>

          <div className="contact-item">
            <h2>Address</h2>
            <p>123 Lane, Karachi East, Pakistan</p>
            <p>Postal Code: 76500</p>
          </div>

          <div className="contact-item">
            <h2>Support Line</h2>
            <p>For immediate assistance, call: 1-800-ASSIST</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
