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
  languages: ["Java", "Python", "SQL", "JavaScript", "TypeScript"],
  web: ["HTML", "CSS", "React.js"],
  backend: ["Spring Boot", "Node.js", "REST APIs", "FastAPI", "Express.js"],
  cloud: ["AWS", "MySQL", "MongoDB"],
  tools: ["Git", "Docker", "GitHub", "Postman", "Swagger", ""],
  aiml: ["TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "PyTorch"],
  nlp: ["NLTK", "Hugging Face", "BERT", "Whisper", "Text Summarization", "Sentiment Analysis", "Speech-to-Text", "Text-to-Speech"],
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
    description: "A cutting-edge full-stack application revolutionizing video and document content interaction. Leverages OpenAI's Whisper for audio transcription, Xenova Transformers for NLP, and advanced summarization models. Features multiple transcription methods, intelligent content summarization, and a context-aware Q&A system that understands document semantics. Built with React.js frontend and Node.js + FastAPI backend using WebSockets for live streaming, with a robust fallback system ensuring 100% uptime.",
    technologies: ["Whisper AI", "Xenova Transformers", "OpenAI GPT", "React.js", "FastAPI", "Node.js", "WebSocket", "NLP", "Speech-to-Text"],
    github: "https://github.com/rishith2903/smart-summary-Q-A",
    live: "https://smart-summary-q-a.vercel.app/",
    thumbnail: "/images/Project/smart-summary.png"
  },
  {
    id: 2,
    title: "MedReserve AI – Healthcare Booking Platform",
    description: "A comprehensive, production-ready healthcare management platform bridging patients and healthcare providers through AI-driven automation. Features symptom-to-specialization prediction using Random Forest classifiers with TF-IDF vectorization, role-aware chatbots (Patient & Doctor) for 24/7 conversational support, and complete appointment management. Built with Spring Boot backend, React.js frontend, and Python FastAPI microservices for ML. Supports multi-role authentication (admin, doctor, patient) with robust dashboards and analytics.",
    technologies: ["Spring Boot", "FastAPI", "Random Forest", "TF-IDF", "React.js", "JWT", "PostgreSQL", "NLP Chatbot", "REST API", "Java", "Python"],
    github: "https://github.com/rishith2903/MedReserve-AI",
    live: "https://med-reserve-ai.vercel.app/login",
    thumbnail:  "/images/Project/MedReserve_AI.png",

  },

  {
    id: 3,
    title: "Athlete – AI-Powered Fitness Platform",
    description: "A comprehensive AI-powered fitness platform combining cutting-edge ML algorithms with modern web technologies. Features Deep Reinforcement Learning for workout recommendations with multi-objective optimization, Computer Vision with MediaPipe and PyTorch for real-time 3D pose estimation and biomechanical analysis, and NLP-powered fitness chatbot using LangChain. Built with microservices architecture: FastAPI AI services communicating with Spring Boot backend and React.js frontend.",
    technologies: ["Spring Boot", "React.js", "MongoDB", "MediaPipe", "PyTorch", "LangChain", "FastAPI", "Deep RL", "Computer Vision", "Java", "Python"],
    github: "https://github.com/rishith2903/Athlete",
    live: "https://athlete-eight.vercel.app/",
    thumbnail: "/images/Project/Athlete.png",
    
  },
  {
    id: 4,
    title: "Personal Finance Manager – AI-Powered Analytics",
    description: "A full-stack web application transforming raw transaction data into actionable financial intelligence. Features AI-powered analytics for automatic transaction categorization, spending pattern identification, and personalized recommendations. The intelligent insight engine analyzes monthly spending behaviors, calculates savings rates, identifies top merchants, and suggests budget optimizations. Built with Spring Boot backend, React.js with Tailwind CSS frontend, and MongoDB for data storage, with Spring Security JWT authentication.",
    technologies: ["Spring Boot", "React.js", "MongoDB", "Tailwind CSS", "JWT", "AI Analytics", "Spring Security", "Java"],
    github: "https://github.com/rishith2903/Personal-Finance-Manager",
    live: "https://personal-finance-manager-neon.vercel.app/",
    thumbnail: "/images/Project/Personal-Finance-Manager.png"
  },
  {
    id: 5,
    title: "GenTask – Generative AI Task Manager",
    description: "An intelligent productivity platform leveraging Generative AI and NLP for smart task management. Features AI-powered natural language task parsing, intelligent prioritization by urgency, automated daily/weekly productivity summaries, and background scheduling for deadline reminders. Built with Flask backend (JWT authentication, CRUD operations) and modern React frontend with Tailwind CSS. Supports advanced search/filtering and real-time task status updates.",
    technologies: ["Flask", "React.js", "MongoDB", "OpenAI API", "NLP", "Generative AI", "JWT", "Tailwind CSS"],
    github: "https://github.com/rishith2903/GenTask",
    live: null,
    thumbnail: null
  },

  {
    id: 6,
    title: "Deepstack – RL-Based Trading Strategy",
    description: "A reinforcement learning-based trading system implementing Deep Q Network (DQN) for automated trading decisions. Features a custom trading environment with buy, sell, and hold actions, experience replay training pipeline, and saved model weights for inference. Includes complete project structure with training scripts, inference module, and Jupyter notebook for experiments and visualization. Demonstrates RL-driven financial modeling for improved trading efficiency.",
    technologies: ["Python", "PyTorch", "Deep Q Network", "Reinforcement Learning", "NumPy", "Pandas", "Scikit-learn"],
    github: "https://github.com/rishith2903/Deepstack",
    live: null,
    thumbnail: null
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
