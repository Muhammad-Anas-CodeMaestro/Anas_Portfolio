import React from "react";
import Routes from "../Routes";

function Resume({ data }) {
  const { name, education, experience, skills, contact } = data;
  return (
    <>
      <div className="formatting_background">
        <div className="section">
          <Routes />
        </div>
        <div className="resume">
          <h1>{name}</h1>
          <div className="edu_exp">
            <div>
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div key={index}>
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
              <p>{edu.graduation}</p>
            </div>
          ))}
            </div>
            <div>
          <h2>Experience</h2>
          <ul>
            {experience.map((job, index) => (
              <li key={index}>{job}</li>
            ))}
          </ul>
          <h2>Skills</h2>
          <ul className="skill">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
