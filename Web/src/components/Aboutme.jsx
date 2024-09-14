import React, { useState } from 'react';
import img1 from "../image/shrutiphoto.jpeg"; // Replace this with the correct image path
import Skills from "./Skills"
const About = () => {
  // State to track which section is active
  const [activeSection, setActiveSection] = useState('Education');

  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-left">
          <img src={img1} alt="Shruti Singh" className="profile-image" />
        </div>
        <div className="about-right">
          <p className="about-description">
            I am a dedicated and innovative technology enthusiast with a passion for solving problems through code.
            Currently, I focused on areas such as AI, web development and creating meaningful digital experiences. Over
            the years, I've worked on exciting projects like Bhumi, ParQ, and Sanchaar where I combined creativity and
            technical skills to deliver impactful solutions.
          </p>

          <div className="tabs">
            <button
              className={`tab-button ${activeSection === 'Skills' ? 'active' : ''}`}
              onClick={() => setActiveSection('Skills')}
            >
              Skills
            </button>
            <button
              className={`tab-button ${activeSection === 'Experience' ? 'active' : ''}`}
              onClick={() => setActiveSection('Experience')}
            >
              Experience
            </button>
            <button
              className={`tab-button ${activeSection === 'Education' ? 'active' : ''}`}
              onClick={() => setActiveSection('Education')}
            >
              Education
            </button>
          </div>

          {/* Render section based on active button */}
          <div className="tab-content">
            {activeSection === 'Education' && (
              <div className="education-content">
                <p><strong>2026</strong> - BTech from ITER college in CSE Branch</p>
                <p><strong>2021</strong> - 12th (JAC Board) from Rajkiya Madhya Vidyalaya +2 High School</p>
                <p><strong>2019</strong> - 12th (CBSE Board) from BNT Saint Mary's School, Garhwa, Jharkhand</p>
              </div>
            )}

            {activeSection === 'Experience' && (
              <div className="experience-content">
                <p>Experience content goes here...</p>
                {/* Add experience details */}
              </div>
            )}

            {activeSection === 'Skills' && (
              <div className="skills-content">
                {/* Add skills details */}
                 <Skills/> 
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
