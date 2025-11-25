import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 60 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 92 },
        { name: "Tailwind CSS", level: 88 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "sql", level: 80 },
        { name: "REST APIs", level: 92 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "Docker", level: 75 },
         { name: "DockerHub", level: 75 },

      
     
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">
            Skills & Expertise
          </h2>
          <p className="skills-subtitle">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skills-category">
              <h3>{category.title}</h3>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-tech">
          <h3>Technologies I Love Working With</h3>
          <div className="skills-tech-grid">
            {[
              'React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript',
              'Next.js', 'Tailwind CSS', 'mogodb Atlas', 'Docker',
              'Git',   'Socket.io'
            ].map((tech) => (
              <span key={tech} className="skills-tech-item">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;