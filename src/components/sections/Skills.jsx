import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaAws, FaDocker, FaGitAlt, FaNode } from 'react-icons/fa';
import { SiMongodb, SiSpringboot, SiNumpy, SiTensorflow, SiKeras, SiScikitlearn, SiPandas } from 'react-icons/si';
import './Skills.css';

const skillIcons = {
  Java: <FaJava />,
  Python: <FaPython />,
  SQL: "🗄️",
  JavaScript: "⚡",
  "React.js": <FaReact />,
  "Spring Boot": <SiSpringboot />,
  "Node.js": <FaNode />,
  MongoDB: <SiMongodb />,
  MySQL: "🛢️",
  Docker: <FaDocker />,
  AWS: <FaAws />,
  Git: <FaGitAlt />,
  "GitHub Actions": "⚙️",
  TensorFlow: <SiTensorflow />,
  Keras: <SiKeras />,
  "Scikit-learn": <SiScikitlearn />,
  Pandas: <SiPandas />,
  NumPy: <SiNumpy />,
  NLTK: "📖",
  "Hugging Face": "🤗",
  BERT: "🤖",
  Whisper: "🎤",
};

const Skills = () => {
  const skillCategories = [
    { title: 'Languages', skills: ["Java", "Python", "SQL", "JavaScript"], color: '#667eea' },
    { title: 'Frameworks', skills: ["Spring Boot", "Node.js", "React.js", "REST APIs"], color: '#764ba2' },
    { title: 'DB / Cloud', skills: ["MySQL", "MongoDB", "Docker", "AWS"], color: '#4facfe' },
    { title: 'AI/ML/NLP', skills: ["TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "NLTK", "Hugging Face", "BERT", "Whisper"], color: '#43e97b' },
    { title: 'Tools', skills: ["Git", "GitHub Actions"], color: '#9c88ff' },
    { title: 'Soft Skills', skills: ["Communication", "Teamwork", "Problem Solving", "Adaptability", "Time Management"], color: '#ff6b6b' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 className="section-title text-center">
          My <span className="text-gradient">Skills</span>
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <motion.div key={category.title} className="skill-category">
              <h3 className="category-title" style={{ color: category.color }}>
                {category.title}
              </h3>

              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill} className="skill-badge" style={{ borderColor: `${category.color}40` }}>
                    <span className="skill-icon">{skillIcons[skill] || "🔹"}</span>
                    <span className="skill-name" style={{ color: category.color }}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
