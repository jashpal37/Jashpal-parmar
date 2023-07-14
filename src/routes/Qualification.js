import React from "react";
import Navbar from "../component/Navbar";
import "../component/QualStyle.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaUniversity,
  FaGraduationCap,
  FaAws,
  FaCloud,

} from "react-icons/fa";

const Qualification = () => {
  return (
    <div>
      <Navbar />;
      <div>
        <h1 className="q-heading">Qualifications</h1>
        <span className="q-bar"></span>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(137,142,140)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(137,142,140)" }}
            date="2020 - Present"
            iconStyle={{ background: "rgb(137,142,140)", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">
              COMPUTER ENGINEERING
            </h3>
            <p>
              <a href="https://ddu.ac.in/">
                Dharmsinh Desai Institute of Technology, Nadiad(Gujarat)
              </a>
            </p>
            <p>CGPA - 7.39</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2018 - 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaUniversity />}
          >
            <h3 className="vertical-timeline-element-title">
              HIGHER SECONDARY EDUCATION
            </h3>
            <p>Ramkrishna Vidhya Bhavan, Surat, Gujarat</p>
            <p>97.23 PR</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(137,142,140)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(137,142,140)" }}
            date="2016 - 2018"
            iconStyle={{ background: "rgb(137,142,140)", color: "#fff" }}
            icon={<FaUniversity />}
          >
            <h3 className="vertical-timeline-element-title">
              SECONDARY EDUCATION
            </h3>
            <p>Ramkrishna Vidhya Bhavan, Surat, Gujarat</p>
            <p>95.36 PR</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <h1 className="q-heading">Experience</h1>
        <span className="q-bar"></span>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="May 2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaCloud />}
          >
            <h3 className="vertical-timeline-element-title">Google Cloud</h3>
            <p>
              <a href="https://www.cloudskillsboost.google/public_profiles/600a9af9-f3c7-41cb-9f54-5d08c8b585bf">
                GoogleCloudReady Facilitator Program
              </a>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(137,142,140)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(137,142,140)" }}
            date="Jun 2023"
            iconStyle={{ background: "rgb(137,142,140)", color: "#fff" }}
            icon={<FaAws />}
          >
            <h3 className="vertical-timeline-element-title">AWS Cloud</h3>
            <p>
              <a href="https://www.credly.com/badges/2bb9a963-70ee-4040-a63f-dcc587e471e1/public_url">
                AWS Academy Cloud Foundations
              </a>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Qualification;

