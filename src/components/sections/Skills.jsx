import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaAws, FaDocker, FaGitAlt, FaNode, FaJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiSpringboot, SiNumpy, SiTensorflow, SiKeras, SiScikitlearn, SiPandas, SiTypescript, SiMysql, SiFastapi, SiExpress, SiPytorch, SiPostman, SiSwagger } from 'react-icons/si';
import { skills } from '../../data/resumeData';
import './Skills.css';

const skillIcons = {
  Java: <FaJava />,
  Python: <FaPython />,
  SQL: "🗄️",
  JavaScript: <FaJs />,
  TypeScript: <SiTypescript />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  "React.js": <FaReact />,
  "Spring Boot": <SiSpringboot />,
  "Node.js": <FaNode />,
  "REST APIs": "🔌",
  FastAPI: <SiFastapi />,
  "Express.js": <SiExpress />,
  MongoDB: <SiMongodb />,
  MySQL: <SiMysql />,
  Docker: <FaDocker />,
  AWS: <FaAws />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
  Postman: <SiPostman />,
  Swagger: <SiSwagger />,
  TensorFlow: <SiTensorflow />,
  Keras: <SiKeras />,
  "Scikit-learn": <SiScikitlearn />,
  Pandas: <SiPandas />,
  NumPy: <SiNumpy />,
  Matplotlib: "📊",
  Seaborn: "📈",
  PyTorch: <SiPytorch />,
  NLTK: "📖",
  "Hugging Face": "🤗",
  BERT: "🤖",
  Whisper: "🎤",
  "Text Summarization": "📝",
  "Sentiment Analysis": "💭",
  "Speech-to-Text": "🎙️",
  "Text-to-Speech": "🔊",
  Teamwork: "🤝",
  "Problem-Solving": "🧩",
  Communication: "💬",
  Leadership: "👑",
  "Time Management": "⏰",
  "Critical Thinking": "🧠",
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Languages');

  // Consolidated skill categories (5 instead of 8)
  const skillCategories = [
    { title: 'Languages', skills: skills.languages.filter(s => s) },
    { title: 'Web Development', skills: [...skills.web, ...skills.backend].filter(s => s) },
    { title: 'AI/ML', skills: [...skills.aiml, ...skills.nlp].filter(s => s) },
    { title: 'DevOps & Tools', skills: [...skills.cloud, ...skills.tools].filter(s => s) },
    { title: 'Soft Skills', skills: skills.soft.filter(s => s) },
  ];

  // Get all skills for "View All" tab
  const allSkills = skillCategories.flatMap(cat => cat.skills);
  const activeCategory = activeTab === 'All'
    ? { skills: allSkills }
    : skillCategories.find(cat => cat.title === activeTab);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="skills-header"
        >
          <h2 className="skills-title">Technical Skills</h2>
          <p className="skills-subtitle">My expertise across various technologies and tools</p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="skills-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <button
            className={`tab-btn ${activeTab === 'All' ? 'active' : ''}`}
            onClick={() => setActiveTab('All')}
          >
            View All
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.title}
              className={`tab-btn ${activeTab === category.title ? 'active' : ''}`}
              onClick={() => setActiveTab(category.title)}
            >
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Skills Container */}
        <motion.div
          className="skills-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="skills-grid"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {activeCategory?.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="skill-badge"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="skill-icon">{skillIcons[skill] || "🔹"}</span>
                  <span className="skill-name">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
