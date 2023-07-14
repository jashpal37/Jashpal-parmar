import React from 'react'
import Navbar from "../component/Navbar";
import "../component/ContactStyle.css";
import Footer from '../component/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar />;
      <div>
        <h1 className="contact-heading">CONTACT</h1>
        <span className="contact-bar"></span>
        <div className="form">
          <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Phone Number</label>
            <input type="number" maxLength="10"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" />
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact
