import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/resumeData';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          
          <div className="about-content-centered">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="about-description">
                {personalInfo.about}
              </p>

              <div className="about-details">
                <div className="detail-item">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">{personalInfo.location}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">{personalInfo.email}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Phone:</span>
                  <span className="detail-value">{personalInfo.phone}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
