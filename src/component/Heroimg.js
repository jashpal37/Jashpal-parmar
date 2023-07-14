import React from 'react';
import "./Heroimg.css";
import IntroImg from '../assest/intro-img.jpg'
import { Link } from 'react-router-dom';

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <h1>Jashpalsinh Parmar</h1>
        <p>I'm fullstack developer</p>
        <div>
            <Link to="/project" className="btn">Project</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Heroimg;
