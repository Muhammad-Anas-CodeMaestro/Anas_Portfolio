import React from "react";
import "./About.css";
import Routes from "../Routes";

function About() {
  return (
    <>
      <div className="formatting_background">
        <div className="section">
          <Routes />
        </div>
        <div className="about_me">
          <div className="image_me">
            <img
              src="./IMG-20230425-WA0082.jpg"
              alt="Anas_image"
              height={400}
            />
          </div>
          <div className="my_details">
            <div className="my_about">
              <h1>About Me</h1>
              <p>
                I'm Muhammad Anas, a computer science student skilled in
                JavaScript, HTML, CSS, and SQL. I excel in creating responsive
                web applications and efficient database solutions, constantly
                exploring new technologies to enhance my expertise.
              </p>
            </div>
            <div className="education_records">
              <div>
                <span>School: </span>
                Nobel Grammar School Bhimpura Karachi [2009 - 2020]
              </div>
              <div>
                <span>Intermediate: </span>
                Sindh Muslim Govt. Science College Karachi [2020 – 2022]
              </div>
              <div>
                <span>University (Degree Pursuing): </span>
                Bachelor of Science in Computer Science (BSCS), Sindh Madressatul Islam University, Karachi. Expected Graduation: [June, 2026]
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
