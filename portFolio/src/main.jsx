import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Resume from "./Pages/Resume.jsx";
import './ResumeStyle.css'

const resumeData = {
  name: "Muhammad Anas",
  about: "I'm Muhammad Anas, a computer science student skilled in JavaScript, HTML, CSS, and SQL. I excel in creating responsive web applications and efficient database solutions, constantly exploring new technologies to enhance my expertise.",
  education: [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: "Sindh Madressatul Islam University, Karachi",
      graduation: "Expected Graduation: June, 2026",
    },
    {
      degree: "Intermediate",
      institution: "Sindh Muslim Govt. Science College Karachi",
      graduation: "2020 - 2022",
    },
    {
      degree: "School",
      institution: "Nobel Grammar School Bhimpura Karachi",
      graduation: "2009 - 2020",
    },
  ],
  experience: [
    "6 months in Electrical Shop at densol market karachi",
    "1 year of Accountant Experience at Al-farooq iron merchant Timber Market Karachi",
    "Currently Employee as an Office Secretary at Cutchi Memon Jamaat Bhimpura, Karachi",
  ],
  skills: ["HTML", "CSS", "JavaScript", "SQL", "Mathematics", "Problem Solving"],
  contact: {
    phone: "0319-0409896",
    email: "mraza50044@gmail.com",
    address: "Flat no 19, 5th Floor, Farzana Building, Nanakwara Karachi",
  },
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/resume",
    element: <div className="resume_style"><Resume data={resumeData}/></div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
