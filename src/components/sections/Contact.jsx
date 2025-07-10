import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../../data/resumeData';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // EmailJS Configuration
  const EMAILJS_CONFIG = {
    serviceId: 'service_4l9ee2h',
    templateId: 'template_4v26sgn',
    publicKey: 'ldNCmyNmULEAURDs-'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Rishith Kumar Pachipulusu'
        },
        EMAILJS_CONFIG.publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: personalInfo.location,
      href: null
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get In <span className="text-gradient">Touch</span>
        </motion.h2>
        
        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="contact-subtitle">Let's Connect</h3>
            <p className="contact-description">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and innovation.
            </p>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">{info.label}</span>
                    {info.href ? (
                      <a href={info.href} className="contact-value">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="Your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                  placeholder="Tell me about your project or just say hello!"
                  rows="5"
                />
              </div>
              
              <motion.button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
              
              {submitStatus && (
                <motion.div
                  className={`submit-status ${submitStatus}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {submitStatus === 'success' 
                    ? 'Message sent successfully! I\'ll get back to you soon.' 
                    : 'Failed to send message. Please try again or contact me directly.'
                  }
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
