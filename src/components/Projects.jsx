import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [

    {
      title: "MERN Stack Blog Application",
      description: "A fully functional blogging platform with secure user authentication, post creation, and a clean responsive UI. Includes JWT-based login, MongoDB Atlas storage, and full MERN deployment across Render and Netlify.",
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React (Vite)", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Axios"],
      liveUrl: "https://codezaimblog.netlify.app/",
      githubUrl: "https://github.com/abdulfarid-dev/codeZaimBlog",
      date: "2025"
    }
    ,
    {
      title: "Swift Patrol – Security & Manpower Website",
      description:
        "A fully responsive client website built using React, React Router, and Tailwind CSS. Features include a dynamic multi-page layout, mobile-first design, custom services & clients sections, Google Maps integration, and a global WhatsApp floating support button. Deployed on Netlify.",
      image: "https://media.gettyimages.com/id/531146987/photo/woman-and-man-security-guard.jpg?s=2048x2048&w=gi&k=20&c=ArthCDTZ8GWrj8A11WrjQXiTorJGxqQNgTipuXgEoJM=",
      technologies: [
        "React",
        "React Router",
        "Tailwind CSS",
        "JavaScript",
        "Netlify",
        "Responsive Design"
      ],
      liveUrl: "https://peaceful-madeleine-2f6ee7.netlify.app/",
      githubUrl: "https://github.com/abdulfarid-dev/manpowerwebsite/tree/main",
      date: "2025"
    }
    ,
    {
      title: "Software Project Lead – AlhindMedicare",
      description: "Led the end-to-end development and launch of a full-scale medical tourism platform connecting international patients with Indian hospitals. Built secure backend services, integrated MongoDB Atlas, managed SEO, and optimized digital marketing to grow online visibility.",
      image: "https://www.pajasaapartments.com/wp-content/uploads/2024/05/Practice-Templates3-2025-05-02T145840.780.jpg",
      technologies: ["Node.js", "Express", "JavaScript", "MongoDB Atlas", "EJS", "SEO"],
      liveUrl: "https://alhindmedicare.com",
      githubUrl: "",
      date: "2025"
    }
     
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">
            Featured Projects
          </h2>
          <p className="projects-subtitle">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay"></div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-date">
                    <Calendar className="project-date-icon" />
                    {project.date}
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tech-tag">
                      <Tag className="project-tech-icon" />
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live"
                  >
                    <ExternalLink className="project-link-icon" />
                    <span className="project-link-text">Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    <Github className="project-link-icon" />
                    <span className="project-link-text">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <a
            href="https://github.com/abdulfarid-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-github-btn"
          >
            <Github className="projects-github-icon" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;