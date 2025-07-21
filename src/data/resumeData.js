export const personalInfo = {
  name: "Rishith Kumar Pachipulusu",
  title: "Full-Stack Developer | AI Enthusiast",
  email: "rishithpachipulsu@gmail.com",
  phone: "+91 7901357303",
  location: "Vijayawada, India",
  about: "Motivated Full-Stack Developer with strong Backend expertise in Java and Spring Boot. Experienced in building real-world solutions with a focus on problem-solving and team collaboration. Eager to contribute to innovative projects and grow as a backend-oriented engineer.",
  github: "https://github.com/rishith29",
  linkedin: "https://www.linkedin.com/in/rishith-kumar-pachipulusu-13351a31b/"
};

export const education = [
  {
    id: 1,
    institution: "VIT-AP University",
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    duration: "2022 - 2026",
    grade: "CGPA: 8.12",
    location: "Amaravati, India"
  },
  {
    id: 2,
    institution: "Narayana N120 College",
    degree: "Intermediate (MPC)",
    duration: "2020 - 2022",
    grade: "79%",
    location: "Vijayawada, India"
  },
  {
    id: 3,
    institution: "Visvabharati High School",
    degree: "Secondary School Certificate (SSC)",
    duration: "2016- 2020",
    grade: "100%",
    location: "Vijayawada, India"
  }
];

export const skills = {
  languages: ["Java", "Python", "SQL"],
  web: ["HTML", "CSS", "JavaScript", "React.js"],
  backend: ["Spring Boot", "Node.js", "REST APIs"],
  cloud: ["AWS", "MySQL", "MongoDB"],
  aiml: ["Scikit-learn", "Pandas", "NumPy", "TensorFlow", "Keras"],
  nlp: ["NLTK", "Hugging Face", "BERT", "Whisper"],
  soft: ["Teamwork", "Problem-Solving", "Communication", "Leadership", "Time Management", "Critical Thinking"]
};

export const certifications = [
  {
    id: 1,
    title: "AWS Academy Cloud Foundations Badge",
    issuer: "AWS Academy",
    description: "Learned core cloud concepts and foundational AWS services for cloud computing.",
    icon: "🏆",
    link: "https://drive.google.com/file/d/1o2KkPad0m_jFkK_Q6FYLcV1E2vPTgKF3/view?pli=1"
  },
  {
    id: 2,
    title: "Python for AI",
    issuer: "Boston Training Academy",
    description: "Gained hands-on experience in Python for building AI and ML solutions.",
    icon: "🧠",
    link: "https://drive.google.com/file/d/1wHFtc1-j9k90OG4mZYq948nd_xt3MT8q/view"
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    issuer: "SmartED Innovations",
    description: "Completed end-to-end web development training with real-world project deployment.",
    icon: "🌐",
    link: "https://drive.google.com/file/d/1nQAVUPhYyzI-5ElZXYXz2IdExkKXblWR/view"
  },
  {
    id: 4,
    title: "Oracle Certified Generative AI Professional",
    issuer: "Oracle University",
    description: "Certified in cutting-edge generative AI techniques and Oracle's AI tools.",
    icon: "🤖",
    link: "https://drive.google.com/file/d/1rP1cYl1GlBrntmlKNgPML5SBnFVKGiME/view"
  }
];

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Responsive personal website built with React, HTML, CSS, JavaScript. Showcases projects, skills, education, and certifications with interactive UI components.",
    technologies: ["React", "HTML", "CSS", "JavaScript", "Vite"],
    github: "https://github.com/rishith2903/Portfolio",
    live: null,
    image: "/images/portfolio-SS.png"
  },
  {
    id: 2,
    title: "Stock Management System",
    description: "Inventory app built with JavaFX and MySQL. Reduced manual errors by 30% through automated tracking and real-time inventory updates.",
    technologies: ["Java", "JavaFX", "MySQL", "JDBC"],
    github: "https://github.com/rishithkumar/stock-management-system",
    live: null,
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Smart-Summary-Q&A Platform",
    description: "Full-stack AI-powered web application built with React, Node.js, Express, and Material-UI. Features intelligent video and document processing with real-time summarization, interactive Q&A system, batch processing capabilities, and responsive design with dark/light theme toggle.",
    technologies: ["React", "Node.js", "OpenAI API", "BART", "Whisper", "YouTube API", "PDF Processing","Python","HTML","CSS"],
    github: "https://github.com/rishith2903/Smart-Summary-Q-A_Frontend",
    githubBackend: "https://github.com/rishith2903/Smart-Summary-Q-A_Backend",
    live: "https://rishith2903.github.io/Smart-Summary-Q-A_Frontend/",
    image: "/images/smart-summary-qa.svg"
  },
  {
    id: 4,
    title: "Deepfake Detection (CNN-LSTM)",
    description: "Hybrid model on DFDC dataset with CNN + LSTM. Improved video forensics using spatio-temporal patterns for accurate deepfake detection.",
    technologies: ["Python", "TensorFlow", "CNN", "LSTM", "OpenCV", "Deep Learning"],
    github: "https://github.com/rishithkumar/deepfake-detection",
    live: null,
    image: "/api/placeholder/400/250"
  }
];

export const techFilters = [
  { name: "All", value: "all" },
  { name: "Web Dev", value: "web" },
  { name: "Java", value: "java" },
  { name: "Python", value: "python" },
  { name: "AI/ML", value: "aiml" },
  { name: "Deep Learning", value: "deeplearning" }
];