const navLinks = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Work", link: "#work" },
  { name: "Achievements", link: "#achievements" },
  { name: "Contact", link: "#contact" },
];

const words = [
  { text: "Web Apps", imgPath: "/images/code.svg" },
  { text: "AI Tools", imgPath: "/images/ideas.svg" },
  { text: "APIs", imgPath: "/images/concepts.svg" },
];

// Real, resume-backed numbers instead of fake "client" stats
// `icon` / `color` just drive which badge is shown — no new claims added
const counterItems = [
  { value: 3, suffix: "+", label: "Full-Stack Projects Shipped", icon: "rocket", color: "violet" },
  { value: 300, suffix: "+", label: "DSA Problems Solved", icon: "code", color: "sky" },
  { value: 9.21, suffix: "", label: "CGPA out of 10", icon: "star", color: "fuchsia" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Clean, Scalable Code",
    desc: "Writes maintainable, well-structured code across the stack, backed by strong DSA and OOP fundamentals.",
    color: "violet",
  },
  {
    imgPath: "/images/chat.png",
    title: "Fast Learner",
    desc: "Picks up new frameworks and tools quickly — from NLP pipelines to real-time systems — and ships working products.",
    color: "sky",
  },
  {
    imgPath: "/images/time.png",
    title: "End-to-End Ownership",
    desc: "Comfortable owning a project from database schema to deployed frontend, not just one layer of the stack.",
    color: "fuchsia",
  },
];

// Skill categories pulled directly from resume. `icon` maps to a glyph
// in components/Icons.jsx purely for visual grouping.
const skillGroups = [
  {
    title: "Languages",
    icon: "terminal",
    color: "violet",
    skills: ["C++", "Python", "JavaScript"],
  },
  {
    title: "Frontend",
    icon: "layers",
    color: "sky",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "cpu",
    color: "emerald",
    skills: ["Node.js", "Express.js", "Flask", "REST APIs"],
  },
  {
    title: "Databases",
    icon: "database",
    color: "amber",
    skills: ["SQL", "PostgreSQL", "MongoDB", "Firebase Firestore"],
  },
  {
    title: "Cloud & Tools",
    icon: "cloud",
    color: "fuchsia",
    skills: ["AWS", "Microsoft Azure", "Git/GitHub", "Linux", "Postman", "Vercel", "Render"],
  },
  {
    title: "Core CS",
    icon: "award",
    color: "rose",
    skills: ["Data Structures & Algorithms", "OOP", "Operating Systems", "DBMS", "Computer Networks"],
  },
];

const techStackImgs = [
  { name: "React", imgPath: "/images/logos/react.png" },
  { name: "Python", imgPath: "/images/logos/python.svg" },
  { name: "Node.js", imgPath: "/images/logos/node.png" },
  { name: "Git", imgPath: "/images/logos/git.svg" },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Git & Version Control",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

// Real projects from resume, replacing the app-showcase placeholder content.
// `visual` selects a hand-built mockup in ProjectVisual.jsx that represents
// each app's actual UI/functionality, instead of a generic stock screenshot.
const projects = [
  {
    title: "ResumeIQ — AI-Powered ATS Resume Analyzer",
    desc: "An AI-powered resume analyzer that scores resumes against job descriptions using an NLP pipeline (TF-IDF, cosine similarity, keyword extraction) — returning ATS scores, skill-match percentages, and targeted improvement suggestions.",
    tags: ["React.js", "Flask", "PostgreSQL", "SQLAlchemy", "Scikit-learn"],
    visual: "resumeiq",
    githubLink: "https://github.com/KhushiChaudhary03/Resume_Analyzer",
    liveLink: "https://resume-analyzer-five-steel.vercel.app",
  },
  {
    title: "SyncWrite — Real-Time Collaborative Code Editor",
    desc: "A real-time collaborative code editor supporting concurrent multi-user editing over WebSockets (Socket.IO), with a room-based architecture and a multi-file workspace for concurrent create, rename, and delete operations.",
    tags: ["React.js", "Node.js", "Express.js", "Socket.IO", "CodeMirror"],
    visual: "syncwrite",
    githubLink: "https://github.com/KhushiChaudhary03/collaborative_code-editor",
    liveLink: "https://collaborative-code-editor-vd3e.onrender.com",
  },
  {
    title: "CampusQuery — Student Query Management App",
    desc: "A cross-platform mobile app for campus discussions and Q&A, with Firebase Authentication, real-time Cloud Firestore sync, subject-based filtering, and profile management.",
    tags: ["React Native", "Expo", "Firebase", "NativeWind"],
    visual: "campusquery",
    githubLink: "https://github.com/KhushiChaudhary03/Student_query_management_system",
    liveLink: "https://expo.dev/accounts/khushi_03/projects/CampusQuery/builds/e074d494-17b4-42c3-bff6-b031d939b0ec",
  },
];

// Achievements & certifications, using the same timeline UI that used to hold fake "work experience"
// `icon`/`color` are purely presentational — content is unchanged from the resume.
const achievementCards = [
  {
    title: "Semi-Finalist — Flipkart GRiD 8.0",
    date: "National-level competition",
    icon: "trophy",
    color: "amber",
    responsibilities: [
      "Shortlisted among thousands of participants in Flipkart's flagship engineering challenge.",
    ],
  },
  {
    title: "300+ DSA Problems Solved",
    date: "LeetCode & GeeksforGeeks",
    icon: "star",
    color: "emerald",
    responsibilities: [
      "Consistent practice across arrays, trees, graphs, DP, and system-design fundamentals.",
    ],
  },
  {
    title: "School Topper — CBSE Class XII",
    date: "93.8% — PSM Public School",
    icon: "medal",
    color: "violet",
    responsibilities: [
      "Ranked first across the school in the Science stream.",
    ],
  },
];

const certifications = [
  {
    title: "Cloud Computing with AWS and Azure",
    issuer: "NIELIT Delhi Centre",
  },
  {
    title: "Artificial Intelligence & Machine Learning — Summer Training",
    issuer: "WinnoVation",
  },
  {
    title: "GenAI Powered Data Analytics — Job Simulation",
    issuer: "Tata (via Forage)",
  },
];

const education = [
  {
    school: "Bhagwan Parshuram Institute of Technology, New Delhi",
    degree: "B.Tech, Computer Science & Engineering",
    period: "2023 – 2027",
    detail: "CGPA: 9.21 / 10",
  },
  {
    school: "PSM Public School, New Delhi",
    degree: "CBSE Class XII (Science)",
    period: "2022",
    detail: "93.8% — Overall School Topper",
  },
  {
    school: "PSM Public School, New Delhi",
    degree: "CBSE Class X",
    period: "2020",
    detail: "94%",
  },
];

// Real profiles only — dropped the fake insta/fb/x icons
const socialImgs = [
  {
    name: "github",
    url: "https://github.com/KhushiChaudhary03",
    imgPath: "/images/logos/git.svg",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/khushi-347bb6356/",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "leetcode",
    url: "https://leetcode.com/u/khushi0310/",
    imgPath: "/images/x.svg",
  },
];

const contactInfo = {
  email: "khushichaudhary0310@gmail.com",
  phone: "+91 9582355059",
};

export {
  words,
  abilities,
  counterItems,
  skillGroups,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
  achievementCards,
  certifications,
  education,
  socialImgs,
  contactInfo,
};
