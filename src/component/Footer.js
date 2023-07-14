import React from "react";
import "../component/FooterStyle.css";
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Navjivan Apart,Surat</p>
              <p>Gujarat,India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              +919773105362
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              jashpalsinhparmar422@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <div className="social">
            <FaGithub
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaLinkedin
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaInstagram
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaTwitter
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
