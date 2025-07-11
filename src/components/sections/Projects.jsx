import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects, techFilters } from '../../data/resumeData';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterChange = (filterValue) => {
    setActiveFilter(filterValue);
    
    if (filterValue === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project =>
        project.technologies.some(tech =>
          tech.toLowerCase().includes(filterValue.toLowerCase()) ||
          (filterValue === 'aiml' && (tech.toLowerCase().includes('bert') ||
           tech.toLowerCase().includes('nlp') || tech.toLowerCase().includes('whisper') ||
           tech.toLowerCase().includes('huggingface'))) ||
          (filterValue === 'deeplearning' && (tech.toLowerCase().includes('cnn') ||
           tech.toLowerCase().includes('lstm') || tech.toLowerCase().includes('tensorflow') ||
           tech.toLowerCase().includes('deep learning')))
        )
      );
      setFilteredProjects(filtered);
    }
  };

  // Use only real projects (removed coming soon projects)
  const allProjects = filteredProjects;

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="text-gradient">Projects</span>
        </motion.h2>
        
        <motion.div
          className="filter-menu"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {techFilters.map((filter) => (
            <motion.button
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => handleFilterChange(filter.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div
          className="projects-grid"
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {allProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <div className="project-placeholder">
                    <span className="project-icon">🚀</span>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                      <span>Code</span>
                    </motion.a>

                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
