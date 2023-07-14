import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Skill from "./routes/Skill";
import Qualification from "./routes/Qualification";
import Profile from "./routes/Profile";
import Contact from "./routes/Contact";
import { Routes,Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />}/>
          <Route path="/project" element={<Project />} />
          <Route path="/qualification" element={<Qualification />} />
          <Route path="/codingprofile" element={<Profile/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
