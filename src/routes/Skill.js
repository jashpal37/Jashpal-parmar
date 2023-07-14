import React from "react";
import Navbar from "../component/Navbar";
import "../component/Skill.css";
import {
  FaBootstrap,
  FaCode,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaLaptop,
  FaNodeJs,
  FaPython,
  FaReact,
  FaServer,
  FaTerminal,
} from "react-icons/fa";

const Skill = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="skill-heading">Skills</h1>
        <span className="skill-bar"></span>
        <div style={{ marginLeft: "2rem" }}>
          <h3 style={{ color: "#eee", fontSize: "28px", fontWeight: "500" }}>
            <FaCode /> Programming Language
          </h3>
          <div style={{ display: "flex", margin: "1rem 1rem 0 4rem" }}>
            <h5
              style={{
                padding: "4.5px",
                width: "55px",
                height: "35px",
                color: "whitesmoke",
                borderBlock: "1px solid blue",
                backgroundColor: "blue",
                marginRight: "1.5rem",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              C++
            </h5>
            <h5
              style={{
                padding: "5px",
                width: "55px",
                height: "35px",
                color: "whitesmoke",
                borderBlock: "1px solid blue",
                backgroundColor: "blue",
                marginRight: "1.5rem",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              C
            </h5>
            <h5
              style={{
                padding: "5px",
                width: "120px",
                height: "35px",
                color: "whitesmoke",
                borderBlock: "1px solid blue",
                backgroundColor: "orange",
                marginRight: "1rem",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              <FaPython color="black" /> Python
            </h5>
          </div>
        </div>
        <br />
        <div style={{ marginLeft: "2rem" }}>
          <h3 style={{ color: "#eee", fontSize: "28px", fontWeight: "500" }}>
            <FaLaptop /> Frontend technologies
          </h3>
          <div style={{ display: "flex", margin: "1rem 1rem 0 4rem" }}>
            <h5
              style={{
                padding: "5px",
                width: "120px",
                height: "35px",
                color: "whitesmoke",
                borderBlock: "1px solid blue",
                backgroundColor: "blue",
                marginRight: "1rem",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              <FaReact /> React
            </h5>

            <h5
              style={{
                padding: "5px",
                width: "120px",
                height: "35px",
                color: "black",
                borderBlock: "1px solid blue",
                backgroundColor: "orange",
                marginRight: "1rem",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              JavaScript
            </h5>

            <h5
              style={{
                padding: "5px",
                width: "120px",
                height: "35px",
                color: "whitesmoke",
                borderBlock: "1px solid blue",
                backgroundColor: "blue",
                marginRight: "1rem",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              Material UI
            </h5>

            <h5
              style={{
                padding: "5px",
                width: "120px",
                height: "35px",
                color: "black",
                borderBlock: "1px solid blue",
                backgroundColor: "orange",
                marginRight: "1rem",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              <FaHtml5 color="red" /> HTML5
            </h5>

            <h5
              style={{
                padding: "5px",
                width: "150px",
                height: "35px",
                color: "whitesmoke",
                borderBlock: "1px solid blue",
                backgroundColor: "blue",
                marginRight: "1rem",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              <FaBootstrap color="whitesmoke" /> Bootstrap
            </h5>
          </div>
        </div>
        <br />
        <div style={{ marginLeft: "2rem" }}>
          <h3 style={{ color: "#eee", fontSize: "28px", fontWeight: "500" }}>
            <FaServer /> Backend technologies & Frameworks
          </h3>
          <div style={{ display: "flex", margin: "1rem 1rem 1rem 4rem" }}>
            <h5
              style={{
                padding: "5px",
                width: "120px",
                height: "35px",
                color: "green",
                borderBlock: "1px solid blue",
                backgroundColor: "orange",
                marginRight: "1rem",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              <FaNodeJs color="green" /> Nodejs
            </h5>

            <h5
              style={{
                padding: "5px",
                width: "120px",
                height: "35px",
                color: "black",
                borderBlock: "1px solid blue",
                backgroundColor: "orange",
                marginRight: "1rem",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              Express
            </h5>

            <h5
              style={{
                padding: "5px",
                width: "120px",
                height: "35px",
                color: "whitesmoke",
                borderBlock: "1px solid blue",
                backgroundColor: "orange",
                marginRight: "1rem",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              Django
            </h5>
          </div>
        </div>
        <div style={{ marginLeft: "2rem" }}>
          <h3 style={{ color: "#eee", fontSize: "28px", fontWeight: "500" }}>
            <FaDatabase /> Databases
          </h3>
          <div style={{ display: "flex", margin: "1rem 1rem 1rem 4rem" }}>
            <h5
              style={{
                padding: "5px",
                width: "120px",
                height: "35px",
                color: "green",
                borderBlock: "1px solid blue",
                backgroundColor: "orange",
                marginRight: "1rem",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              MongoDB
            </h5>

            <h5
              style={{
                padding: "5px",
                width: "120px",
                height: "35px",
                color: "whitesmoke",
                borderBlock: "1px solid blue",
                backgroundColor: "orange",
                marginRight: "1rem",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              MySQL
            </h5>
          </div>
        </div>
        <div style={{ marginLeft: "2rem" }}>
          <h3 style={{ color: "#eee", fontSize: "28px", fontWeight: "500" }}>
            <FaTerminal /> Tools, IDEs & Version Control
          </h3>
          <div style={{ display: "flex", margin: "1rem 1rem 0 4rem" }}>
            <h5
              style={{
                padding: "5.5px",
                width: "90px",
                height: "35px",
                color: "whitesmoke",
                borderBlock: "1px solid blue",
                backgroundColor: "orange",
                marginRight: "1rem",
                fontSize: "20px",
                textAlign: "center",
                justifyItems: "center",
              }}
            >
              <FaGitAlt color="red" size="20" /> Git
            </h5>

            <h5
              style={{
                padding: "5px",
                width: "120px",
                height: "35px",
                color: "blue",
                borderBlock: "1px solid blue",
                backgroundColor: "gray",
                marginRight: "1rem",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              VsCode
            </h5>

            <h5
              style={{
                padding: "5px",
                width: "120px",
                height: "35px",
                color: "orange",
                borderBlock: "1px solid blue",
                backgroundColor: "gray",
                marginRight: "1rem",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              Sublime
            </h5>
          </div>
        </div>

        <h1 className="coding-heading">Coding Profile</h1>
        <span className="coding-bar"></span>
      </div>
    </div>
  );
};

export default Skill;
