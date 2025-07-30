export const personalInfo = {
  name: "Rishith Kumar Pachipulusu",
  title: "Full-Stack Developer | AI Enthusiast",
  email: "rishithpachipulsu@gmail.com",
  phone: "+91 7901357303",
  location: "Vijayawada, India",
  about: "Full-Stack Developer with a strong backend focus in Java & Spring Boot, and a passion for building scalable applications. Experienced in Machine Learning, NLP, and Data Science, with hands-on projects combining software engineering and AI to deliver real-world solutions.",
  github: "https://github.com/rishith2903",
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
    title: "Personal Portfolio Website",
    description: "Designed and developed a responsive personal portfolio website using React.js, Tailwind CSS, and Framer Motion. Features project showcases, certification display, dynamic routing, and a responsive dark mode. Deployed on Vercel for fast, global performance.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Vercel", "Responsive Design"],
    github: "https://github.com/rishith2903/Portfolio",
    live: "https://portfolio-one-jade-97.vercel.app/",
    image: "/images/portfolio-SS.png"
  },
  {
    id: 2,
    title: "MedReserve AI – Healthcare Booking Platform",
    description: "Built a full-stack healthcare booking system using Spring Boot, React.js, and FastAPI that enables users to search, book, and manage doctor appointments. Integrated JWT-based authentication for secure role-based access (admin, doctor, patient), real-time dashboards, and AI-driven NLP chatbot for symptom-based doctor recommendations. Backend deployed on Render with PostgreSQL; frontend hosted on Vercel.",
    technologies: ["Spring Boot", "FastAPI", "React.js", "JWT", "PostgreSQL", "NLP", "Chatbot", "REST API", "Role-based Auth"],
    github: "https://github.com/rishith2903/MedReserve-AI",
    githubBackend: "https://github.com/rishith2903/MedReserve-AI_Backend",
    live: "https://med-reserve-ai.vercel.app/login",
    image: "/images/medreserve-ai-placeholder.svg"
  },
  {
    id: 3,
    title: "Smart Summary Q&A – AI-Powered Transcript Platform",
    description: "Developed a real-time video/audio summarization and Q&A system using Whisper (OpenAI) for speech-to-text and BART for summarization. Built with React.js frontend and Node.js + FastAPI backend, using WebSockets for live transcript streaming. Enabled dynamic Q&A generation with OpenAI GPT and integrated transcript download support.",
    technologies: ["Whisper", "BART", "OpenAI", "React.js", "FastAPI", "Node.js", "WebSocket", "Speech-to-Text", "Real-time Transcript"],
    github: "https://github.com/rishith2903/Smart-Summary-Q-A",
    githubBackend: "https://github.com/rishith2903/Smart-Summary-Q-A_Backend",
    live: "https://smart-summary-q-a.vercel.app/",
    image: "/images/smart-summary.png"
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