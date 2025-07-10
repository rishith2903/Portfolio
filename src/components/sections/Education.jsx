import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../../data/resumeData';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="text-gradient">Education</span>
        </motion.h2>
        
        <div className="education-timeline">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="education-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="education-card">
                <div className="education-header">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <span className="education-duration">{edu.duration}</span>
                </div>
                
                <h4 className="education-institution">{edu.institution}</h4>
                <p className="education-location">{edu.location}</p>
                
                <div className="education-grade">
                  <span className="grade-label">Grade:</span>
                  <span className="grade-value">{edu.grade}</span>
                </div>
              </div>
              
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
          
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Education;
