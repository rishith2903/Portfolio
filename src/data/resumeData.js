export const personalInfo = {
  name: "Rishith Kumar Pachipulusu",
  title: "Full-Stack Developer | AI Enthusiast",
  email: "rishithpachipulsu@gmail.com",
  phone: "+91 7901357303",
  location: "Vijayawada, India",
  about: "Full-Stack Developer with a strong backend focus in Java & Spring Boot, and a passion for building scalable applications. Experienced in Machine Learning, NLP, and Data Science, with hands-on projects combining software engineering and AI to deliver real-world solutions.",
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
    description: "Built a personal portfolio using React, Vite, CSS, and Framer Motion to showcase my skills and projects.Features include interactive navigation, project filtering, smooth animations, and a fully responsive dark theme.",
    technologies: ["React", "HTML", "CSS", "JavaScript", "Vite"],
    github: "https://github.com/rishith2903/Portfolio",
    live: null,
    image: "public/images/portfolio-SS.png"
  },
  {
    id: 2,
    title: "MedReserve AI – Healthcare Booking System",
    description: "Full-stack app with Spring Boot, React.js, MySQL, JWT, WebSockets, Docker, and FastAPI (ML). Real-time chat, role-based dashboards, chatbot-assisted scheduling. ML-based doctor recommendation, encrypted chat/files, and health analytics.",
    technologies: ["Spring Boot", "React.js", "MySQL", "JWT", "WebSockets", "Docker", "FastAPI", "Machine Learning", "Java", "Python"],
    github: "https://github.com/rishith2903/MedReserve-AI",
    githubBackend: "https://github.com/rishith2903/MedReserve-AI_Backend",
    live: "https://rishith2903.github.io/MedReserve-AI/",
    image: "public/images/medreserve-ai-placeholder.svg"
  },
  {
    id: 3,
    title: "Smart-Summary-Q&A Platform",
    description: "Full-stack AI-powered web application for content summarization and Q&A. Features intelligent video and document processing with real-time summarization, interactive Q&A system, batch processing capabilities, and responsive design with dark/light theme toggle.",
    technologies: ["React", "Node.js", "OpenAI API", "BART", "Whisper", "YouTube API", "PDF Processing","Python","HTML","CSS"],
    github: "https://github.com/rishith2903/Smart-Summary-Q-A",
    githubBackend: "https://github.com/rishith2903/Smart-Summary-Q-A_Backend",
    live: "https://rishith2903.github.io/Smart-Summary-Q-A/",
    image: "public/images/smart-summary.png"
  },
  {
    id: 4,
    title: "Deepfake Detection (CNN-LSTM)",
    description: "Hybrid model on DFDC dataset with CNN + LSTM. Improved video forensics using spatio-temporal patterns for accurate deepfake detection.",
    technologies: ["Python", "TensorFlow", "CNN", "LSTM", "OpenCV", "Deep Learning"],
    github: "https://github.com/rishithkumar/deepfake-detection",
    live: null,
    image: "/images/deepfake-detection-placeholder.svg"
  }
];

export const techFilters = [
  { name: "All", value: "all" },
  { name: "Web Dev", value: "web" },
  { name: "Java", value: "java" },
  { name: "Python", value: "python" },
  { name: "AI/ML", value: "aiml" },
];