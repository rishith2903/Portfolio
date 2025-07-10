import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/resumeData';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    { title: 'Programming Languages', skills: skills.languages, color: '#667eea' },
    { title: 'Web Development', skills: skills.web, color: '#764ba2' },
    { title: 'Backend & APIs', skills: skills.backend, color: '#f093fb' },
    { title: 'Cloud & Database', skills: skills.cloud, color: '#4facfe' },
    { title: 'AI/ML & Data Science', skills: skills.aiml, color: '#43e97b' },
    { title: 'NLP & Language Models', skills: skills.nlp, color: '#9c88ff' },
    { title: 'Soft Skills', skills: skills.soft, color: '#ff6b6b' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="text-gradient">Skills</span>
        </motion.h2>
        
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="category-title" style={{ color: category.color }}>
                {category.title}
              </h3>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="skill-badge"
                    style={{ 
                      background: `linear-gradient(135deg, ${category.color}20, ${category.color}10)`,
                      borderColor: `${category.color}40`
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.4 
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      background: `linear-gradient(135deg, ${category.color}30, ${category.color}20)`,
                      transition: { duration: 0.2 }
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="skill-name" style={{ color: category.color }}>
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
