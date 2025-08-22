export const personalInfo = {
  name: "Rishith Kumar Pachipulusu",
  title: "Full-Stack Developer | AI Enthusiast",
  email: "rishithpachipulusu@gmail.com",
  phone: "+91 7901357303",
  location: "Vijayawada, India",
  about: "Versatile Computer Science student skilled in AI/ML and Full-Stack Development. Experienced in building end-to-end solutions from backend systems to intelligent AI applications. Passionate about delivering innovative, high-quality software.",
  github: "https://github.com/rishith2903",
  linkedin: "https://www.linkedin.com/in/rishith-kumar-pachipulusu-13351a31b/",
  portfolio: "https://portfolio-one-jade-97.vercel.app/"
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
    duration: "2016 - 2020",
    grade: "100%",
    location: "Gudivada, India"
  }
];

export const skills = {
  languages: ["Java", "Python", "SQL", "JavaScript"],
  web: ["HTML", "CSS", "React.js"],
  backend: ["Spring Boot", "Node.js", "REST APIs"],
  cloud: ["AWS", "MySQL", "MongoDB"],
  tools: ["Git", "Docker", "GitHub Actions"],
  aiml: ["TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy"],
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
    link: "https://drive.google.com/file/d/1o2KkPad0m_jFkK_Q6FYLcV1E2vPTgKF3/view?usp=sharing"
  },
  {
    id: 2,
    title: "Python for AI",
    issuer: "Boston Training Academy",
    description: "Gained hands-on experience in Python for building AI and ML solutions.",
    icon: "🧠",
    link: "https://drive.google.com/file/d/1wHFtc1-j9k90OG4mZYq948nd_xt3MT8q/view?usp=drive_link"
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    issuer: "SmartED Innovations",
    description: "Completed end-to-end web development training with real-world project deployment.",
    icon: "🌐",
    link: "https://drive.google.com/file/d/1nQAVUPhYyzI-5ElZXYXz2IdExkKXblWR/view?usp=drive_link"
  },
  {
    id: 4,
    title: "Oracle Certified Generative AI Professional",
    issuer: "Oracle University",
    description: "Certified in cutting-edge generative AI techniques and Oracle's AI tools.",
    icon: "🤖",
    link: "https://drive.google.com/file/d/1rP1cYl1GlBrntmlKNgPML5SBnFVKGiME/view?usp=drive_link"
  }
];

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "Designed and developed a responsive personal portfolio website using React.js, Tailwind CSS, and Framer Motion. Features project showcases, certification display, dynamic routing, dark/light themes, and SEO optimization. Deployed on Vercel with GitHub content linking.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Vercel", "Responsive Design", "SEO"],
    github: "https://github.com/rishith2903/Portfolio",
    live: "https://portfolio-one-jade-97.vercel.app/",
    image: "/images/portfolio-SS.png"
  },
  {
    id: 2,
    title: "Smart Summary Q&A – AI-Powered Transcript Platform",
    description: "Developed a real-time video/audio summarization and Q&A system using Whisper (OpenAI) for speech-to-text and BART for summarization. Built with React.js frontend and Node.js + FastAPI backend, using WebSockets for live transcript streaming. Enabled dynamic Q&A generation with OpenAI GPT, serving 500+ users and improving response accuracy by 20%.",
    technologies: ["Whisper", "BART", "OpenAI", "React.js", "FastAPI", "Node.js", "WebSocket", "Speech-to-Text", "Real-time Transcript"],
    github: "https://github.com/rishith2903/Smart-Summary-Q-A",
    githubBackend: "https://github.com/rishith2903/Smart-Summary-Q-A_Backend",
    live: "https://smart-summary-q-a.vercel.app/",
    image: "/images/smart-summary.png"
  },
  {
    id: 3,
    title: "MedReserve AI – Healthcare Booking Platform",
    description: "Built a full-stack healthcare booking system using Spring Boot, React.js, and FastAPI that enables users to search, book, and manage doctor appointments. Integrated JWT-based authentication for secure role-based access (admin, doctor, patient), real-time dashboards, and AI-driven NLP chatbot for symptom-based doctor recommendations. Reduced appointment booking time by 30%. Backend deployed on Render with PostgreSQL; frontend hosted on Vercel.",
    technologies: ["Spring Boot", "FastAPI", "React.js", "JWT", "PostgreSQL", "NLP", "Chatbot", "REST API", "Role-based Auth"],
    github: "https://github.com/rishith2903/MedReserve-AI",
    githubBackend: "https://github.com/rishith2903/MedReserve-AI_Backend",
    live: "https://med-reserve-ai.vercel.app/login",
    image: "/images/medreserve-ai-placeholder.svg"
  },
  {
    id: 4,
    title: "AIthlete – AI-Powered Fitness Platform",
    description: "Built a full-stack fitness website using Spring Boot, React.js, and PostgreSQL. Integrated AI models for personalized workouts, diet plans, chatbot, and pose detection. Delivered a scalable platform with dashboards, theming, and live deployment.",
    technologies: ["Spring Boot", "React.js", "PostgreSQL", "AI Models", "Chatbot", "Pose Detection"],
    github: null, // add repo link if exists
    live: "https://aithlete.vercel.app/",
    image: "/images/aithlete-placeholder.svg"
  },
];

export const extracurriculars = [
  {
    id: 1,
    title: "Photography Club – VIT-AP University",
    duration: "July 2023 – May 2024",
    description: "Created multimedia content for university events as an active member."
  },
  {
    id: 2,
    title: "LEO Club – Lions Club, VIT-AP University",
    duration: "June 2024 – March 2025",
    description: "Co-led social media efforts and participated in outreach programs."
  },
  {
    id: 3,
    title: "IEI (Institution of Engineers of India)",
    duration: "June 2024 – Present",
    description: "Contributed to technical documentation and content creation for organizational events."
  }
];

export const techFilters = [
  { name: "All", value: "all" },
  { name: "Web Dev", value: "web" },
  { name: "Java", value: "java" },
  { name: "Python", value: "python" },
  { name: "AI/ML", value: "aiml" }
];
