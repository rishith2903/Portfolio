import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFileAlt, FaEye } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  // Single source of truth for resume URL - use absolute path to ensure consistency
  const RESUME_URL = '/resume.pdf';
  const RESUME_FILENAME = 'Rishith_Kumar_Pachipulusu_Resume.pdf';

  const handleDownload = () => {
    // Add cache-busting parameter to ensure fresh file
    const downloadUrl = `${RESUME_URL}?v=${Date.now()}`;
    console.log('Download URL:', downloadUrl);

    // Check if resume exists first
    fetch(RESUME_URL, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          // File exists, proceed with download
          const link = document.createElement('a');
          link.href = downloadUrl;
          link.download = RESUME_FILENAME;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          // File doesn't exist
          alert('Resume PDF not found. Please add your resume.pdf file to the public folder.');
        }
      })
      .catch(() => {
        // Error occurred
        alert('Resume PDF not found. Please add your resume.pdf file to the public folder.');
      });
  };

  const handleView = () => {
    // Add cache-busting parameter to ensure fresh file
    const viewUrl = `${RESUME_URL}?v=${Date.now()}`;
    console.log('View URL:', viewUrl);

    // Open PDF in new tab for viewing - uses the same file as download
    window.open(viewUrl, '_blank');
  };

  return (
    <section id="resume" className="resume">
      <div className="container">
        <motion.div
          className="resume-content"
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
            My <span className="text-gradient">Resume</span>
          </motion.h2>
          
          <motion.div
            className="resume-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="resume-icon">
              <FaFileAlt />
            </div>
            
            <div className="resume-text">
              <h3 className="resume-title">Download My Resume</h3>
              <p className="resume-description">
                Get a comprehensive overview of my education, skills, experience, and projects. 
                Perfect for recruiters and potential collaborators.
              </p>
            </div>
            
            <div className="resume-buttons">
              <motion.button
                className="download-btn primary"
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                <span>Download Resume</span>
              </motion.button>

              <motion.button
                className="download-btn secondary"
                onClick={handleView}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEye />
                <span>View Resume</span>
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            className="resume-preview"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="preview-title">Quick Overview</h4>
            <div className="preview-grid">
              <div className="preview-item">
                <span className="preview-label">Education</span>
                <span className="preview-value">B.Tech CSE (AI & ML)</span>
              </div>
              <div className="preview-item">
                <span className="preview-label">University</span>
                <span className="preview-value">VIT-AP University</span>
              </div>
              <div className="preview-item">
                <span className="preview-label">CGPA</span>
                <span className="preview-value">8.12</span>
              </div>
              <div className="preview-item">
                <span className="preview-label">Graduation</span>
                <span className="preview-value">2026</span>
              </div>
              <div className="preview-item">
                <span className="preview-label">Specialization</span>
                <span className="preview-value">AI & Machine Learning</span>
              </div>
              <div className="preview-item">
                <span className="preview-label">Focus</span>
                <span className="preview-value">Full-Stack Development</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
