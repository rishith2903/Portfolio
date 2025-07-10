import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data/resumeData';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: personalInfo.github,
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: personalInfo.linkedin,
      color: '#0077b5'
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`,
      color: '#ea4335'
    }
  ].filter(link => link.url); // Filter out any links without URLs

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-main">
            <motion.div
              className="footer-brand"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="footer-name">{personalInfo.name}</h3>
              <p className="footer-title">{personalInfo.title}</p>
            </motion.div>
            
            <motion.div
              className="footer-social"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--hover-color': link.color }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.2,
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  viewport={{ once: true }}
                >
                  {link.icon}
                  <span className="social-tooltip">{link.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="footer-divider"></div>
            <p className="footer-copyright">
              © {currentYear} {personalInfo.name}.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
