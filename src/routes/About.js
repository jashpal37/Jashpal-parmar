import React from "react";
import Navbar from "../component/Navbar";
import { FaChevronRight } from "react-icons/fa";
import "../component/AboutStyle.css";
import MyImg from "../assest/profile.jpeg";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="about-heading">ABOUT ME</h1>
        <span className="about-bar"></span>
        <div className="about-container">
          <div className="image-container">
            <img className="about-img" src={MyImg} alt="Jashpal Parmar" />
          </div>
          <div className="about-text">
            <p>
              Hi! My name is Jashpalsinh Parmar, and I'm a Computer Engineering
              student pursuing my Bachelor's degree at Dharmsinh Desai
              University. I'm passionate about technology and the endless
              possibilities it offers, which is why I chose to study computer
              engineering.
            </p>
            <br />
            <p>
              Throughout my academic journey, I have gained a strong foundation
              in programming languages like C++, Java, and Python. I have also
              developed skills in software development, database management,
              computer networks, and machine learning. I enjoy exploring new
              technologies and learning about their potential applications.
            </p>
            <br />
            <p>
              In addition to my studies, I have been involved in various
              extracurricular activities, including coding competitions and
              hackathons. These experiences have taught me valuable teamwork,
              communication, and problem-solving skills that are essential in
              the tech industry.
            </p>
          </div>
        </div>
        <div className="info-container">
          <h1 className="info-heading">BASIC INFORMSTION</h1>
          <span className="info-bar"></span>
          <div className="basic-info">
            <div className="left-info">
              <div className="bdate">
                <p>
                  <FaChevronRight />
                  <big>
                    <b> Birth Date : </b>
                  </big>
                  28 October 2002
                </p>
              </div>
              <div className="age">
                <p>
                  <FaChevronRight />
                  <big>
                    <b> Age : </b>
                  </big>
                  21
                </p>
              </div>
              <div className="city">
                <p>
                  <FaChevronRight />
                  <big>
                    <b> City : </b>
                  </big>
                  Surat, Gujarat (India)
                </p>
              </div>
            </div>
            <div className="right-info">
              <div className="email">
                <p>
                  <FaChevronRight />
                  <big>
                    <b> Email : </b>
                  </big>
                  <a
                    style={{ textDecoration: "none", color: "blue" }}
                    href="mailto:jashpalsinhparmar422@gmail.com"
                  >
                    Send mail
                  </a>
                </p>
              </div>
              <div className="wsite">
                <p>
                  <FaChevronRight />
                  <big>
                    <b> Website : </b>
                  </big>
                  <a
                    style={{ textDecoration: "none", color: "blue" }}
                    href="https://jashpal37.github.io/"
                  >
                    Visit Portfolio
                  </a>
                </p>
              </div>
              <div className="opentowork">
                <p>
                  <FaChevronRight />
                  <big>
                    <b> Open to Work? : </b>
                  </big>
                  Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
