import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import '../styles/Hero.css';
import photo from '../assets/faridphoto.jpg';
// import resume from "../assets/farid_cv.pdf";


const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">Farid</span>
            </h1>
            
            <p className="hero-description">
              Full Stack MERN Developer passionate about creating scalable web applications 
              with modern technologies and exceptional user experiences.
            </p>
            
            <div className="hero-actions">
              <button className="hero-btn">
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
              
              <div className="hero-social">
                <a
                  href="https://github.com/abdulfarid-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                >
                  <Github className="hero-social-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdulfarid-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                >
                  <Linkedin className="hero-social-icon" />
                </a>
                <a
                  href="abdulrrr78@gmail.com"
                  className="hero-social-link"
                >
                  <Mail className="hero-social-icon" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="hero-image-container">
            <img
              src={photo}
              alt="Profile"
              className="hero-image"
            />
          </div>
        </div>
        
        <div className="hero-arrow">
          <ArrowDown className="hero-arrow-icon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;