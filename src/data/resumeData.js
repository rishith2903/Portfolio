export const personalInfo = {
  name: "Rishith Kumar Pachipulusu",
  title: "Full-Stack Developer | AI Enthusiast",
  email: "rishithpachipulusu@gmail.com",
  phone: "+91 7901357303",
  location: "Narasaraopeta, India",
  about: "Versatile Computer Science student skilled in AI/ML and Full-Stack Development. Experienced in building end-to-end solutions from backend systems to intelligent AI applications. Passionate about delivering innovative, high-quality software.",
  github: "https://github.com/rishith2903",
  linkedin: "https://www.linkedin.com/in/rishith-kumar-pachipulusu-2748b4380/",
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
    institution: "Viswabharati High School",
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
    title: "Python for AI",
    provider: "Boston Training Academy",
    description: "Gained hands-on experience in Python for building AI and ML solutions.",
    thumbnail: "/images/Certificates/Python for AI.png",
    link: "https://drive.google.com/file/d/1wHFtc1-j9k90OG4mZYq948nd_xt3MT8q/view?usp=drive_link"
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    provider: "SmartED Innovations",
    description: "Completed end-to-end web development training with real-world project deployment.",
    thumbnail: "images/Certificates/Full Stack Web Development.png",
    link: "https://drive.google.com/file/d/1nQAVUPhYyzI-5ElZXYXz2IdExkKXblWR/view?usp=drive_link"
  },
  {
    id: 3,
    title: "Oracle Certified Generative AI Professional",
    provider: "Oracle University",
    description: "Certified in cutting-edge generative AI techniques and Oracle's AI tools.",
    thumbnail: "/images/Certificates/Gen AI.png",
    link: "https://drive.google.com/file/d/1rP1cYl1GlBrntmlKNgPML5SBnFVKGiME/view?usp=drive_link"
  },
  {
    id: 4,
    title: "AWS Academy Cloud Foundations Badge",
    provider: "AWS Academy",
    description: "Learned core cloud concepts and foundational AWS services for cloud computing.",
    thumbnail: "/images/Certificates/AWS.png",
    link: "https://drive.google.com/file/d/1o2KkPad0m_jFkK_Q6FYLcV1E2vPTgKF3/view?usp=sharing"
  },
  {
    id: 5,
    title: "Solutions Architecture Job Simulation",
    provider: "AWS and Forage",
    description: "I completed practical tasks in Designing a simple, scalable, hosting architecture",
    thumbnail: "/images/Certificates/AWS-Solutions Architecture Job Simulation.png",
    link: "https://drive.google.com/file/d/1qV-IhoubQLluaH6k18DRtKZS7e0gH96a/view?usp=sharing"
  },
  {
    id: 6,
    title: "Software Engineering Job Simulation",
    provider: " Electronics Arts and Forage",
    description: "I completed practical tasks in Write a Feature Proposal,Create a Game Object Class,Improve Inventory System, and Live Bugfix",
    thumbnail: "/images/Certificates/Electronics Arts.png",
    link: "https://drive.google.com/file/d/1qV-IhoubQLluaH6k18DRtKZS7e0gH96a/view?usp=sharing"
  }
];


export const projects = [
  
  {
    id: 1,
    title: "Smart Summary Q&A – AI-Powered Transcript Platform",
    description: "Developed a real-time video/audio summarization and Q&A system using Whisper (OpenAI) for speech-to-text and BART for summarization. Built with React.js frontend and Node.js + FastAPI backend, using WebSockets for live transcript streaming. Enabled dynamic Q&A generation with OpenAI GPT, serving 500+ users and improving response accuracy by 20%.",
    technologies: ["NLP Model","Whisper", "BART", "OpenAI", "React.js", "FastAPI", "Node.js", "WebSocket", "Speech-to-Text", "Real-time Transcript"],
    github: "https://github.com/rishith2903/Smart-Summary-Q-A",
    githubBackend: "https://github.com/rishith2903/Smart-Summary-Q-A_Backend",
    live: "https://smart-summary-q-a.vercel.app/",
    thumbnail: "/images/Project/smart-summary.png"
  },
  {
    id: 2,
    title: "MedReserve AI – Healthcare Booking Platform",
    description: "Built a full-stack healthcare booking system using Spring Boot, React.js, and FastAPI that enables users to search, book, and manage doctor appointments. Integrated JWT-based authentication for secure role-based access (admin, doctor, patient), real-time dashboards, and AI-driven NLP chatbot for symptom-based doctor recommendations. Reduced appointment booking time by 30%. Backend deployed on Render with PostgreSQL; frontend hosted on Vercel.",
    technologies: ["Spring Boot", "FastAPI", "ML model","React.js", "JWT", "PostgreSQL", "NLP", "Chatbot", "REST API", "Role-based Auth","Java"],
    github: "https://github.com/rishith2903/MedReserve-AI",
    githubBackend: "https://github.com/rishith2903/MedReserve-AI_Backend",
    live: "https://med-reserve-ai.vercel.app/login",
    thumbnail:  "/images/Project/MedReserve_AI.png",

  },
  
  {
    id: 3,
    title: "AIthlete – AI-Powered Fitness Platform",
    description: "Built a full-stack fitness website using Spring Boot, React.js, and MOngoDB. Integrated AI models for personalized workouts, diet plans, chatbot, and pose detection. Delivered a scalable platform with dashboards, theming, and live deployment.",
    technologies: ["Spring Boot", "React.js", "MOngoDB", "AI Model", "Chatbot", "Pose Detection","Python","Java"],
    github: "https://github.com/rishith2903/AIthlete", // add repo link if exists
    githubBackend: "https://github.com/rishith2903/AIthlete_backend",
    live: null,
    
  },
  {
    id: 4,
    title: "GenTask – Generative AI for smarter tasks",
    description: "A productivity platform leveraging Generative AI and NLP to manage tasks intelligently. Supports multilingual inputs, automatic prioritization, subtask generation, and smart activity summarization. Built with React, Flask, and MongoDB for secure and scalable task management.",
    technologies: ["NLP Model"," Generative AI", "Flask", "React.js", "MongoDB"],
    github: null,
    live:null,
    thumbnail: null,
  }
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
  { name: "Spring Boot", value: "Spring Boot" },
  { name: "Node.js", value: "Node.js" },
  { name: "AI Models", value: "AI Models" }
];
