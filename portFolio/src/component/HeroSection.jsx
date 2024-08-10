import twitterIcon from './twitter-svgrepo-com (1).svg';
import instaIcon from './insta-png.png';
import facebookIcon from './facebook-png.png';
import linkedinIcon from './linkedin-boerder-svgrepo-com.png';
import React from 'react'
import { Link } from "react-router-dom";

function HeroSection() {
  const routes = [
    {
      pageName : 'Home',
      path : '/'
    },
    {
      pageName : 'About',
      path : '/about'
    },
    {
      pageName : 'Resume',
      path : '/resume'
    },
    {
      pageName : 'Contact',
      path : '/contact'
    },
  ]
  return (
    <>
    <div className="background_image">
      <div className="section">
        <h1>Muhammad Anas</h1>
        <p>I'm passionate <span>Web And App Developer</span> From Karachi</p>
        <ul>
          {
            routes.map(({pageName, path}, index) => {
              return(
                <li>
                <Link to = {path}>{pageName}</Link>
                </li>
              );
            })
          }
        </ul>
        <div className="icon">
          <div>
            <img src={twitterIcon} alt="Twitter" height="20" />
          </div>
          <div>
            <img src={instaIcon} alt="Instagram" height="20" />
          </div>
          <div>
            <img src={facebookIcon} alt="Facebook" height="25" />
          </div>
          <div>
            <img src={linkedinIcon} alt="LinkedIn" height="20" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HeroSection