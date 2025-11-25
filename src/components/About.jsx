import React from 'react';
import { Code, Database, Server, Smartphone } from 'lucide-react';
import { GitBranch } from "lucide-react";

import '../styles/About.css';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Frontend Development",
      description: "React, Next.js, JavaScript, Tailwind CSS"
    },
    {
      icon: <Server className="w-8 h-8 text-green-600" />,
      title: "Backend Development",
      description: "Node.js, Express.js, RESTful APIs"
    },
    {
      icon: <Database className="w-8 h-8 text-purple-600" />,
      title: "Database Management",
      description: "MongoDB,mongodb atlas"
    },
  {
  icon: <GitBranch className="w-8 h-8 text-orange-600" />,
  title: "DevOps & Version Control",
  description: "Git, GitHub, Docker"
}

  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">
            About Me
          </h2>
          <p className="about-subtitle">
            "I am a full-stack developer focused on building clean, efficient, and user-friendly web applications using the MERN stack."
          </p>
        </div>

        <div className="about-content">
          <div>
            <img
              src="data:image/jpeg;base64,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"
              alt="Developer workspace"
              className="about-image"
            />
          </div>
          
          <div className="about-text">
            <h3>My Journey</h3>
            <p>
               "I started learning coding in 2021 because I wanted to understand how websites and apps are made. When I wrote my first program and saw it work, I felt excited and wanted to learn more.
            </p>
            <p>
             Slowly, I learned the MERN stack (MongoDB, Express.js, React, Node.js) and started building small projects. Each project made coding more interesting for me. Solving problems, fixing errors, and creating something that actually works keeps me motivated every day.
            </p>
            
            <div className="about-tags">
              {['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express.js'].map((tech) => (
                <span key={tech} className="about-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="about-highlights">
          {highlights.map((item, index) => (
            <div key={index} className="about-highlight">
              <div className="about-highlight-icon">
                {item.icon}
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;