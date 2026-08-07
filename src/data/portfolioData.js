export const personalInfo = {
  name: "Muhammad Ibrahim",
  shortTitle: "Full-Stack & Web Developer",
  tagline: "Building dynamic, scalable, and intuitive web experiences.",
  bio: "Software Engineering Student with hands-on full-stack development experience. Passionate about building real-time applications, sleek user interfaces, and robust backend systems using React, Node.js, Express, and Databases.",
  email: "ibrahimjkxd@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohammad-ibrahim77/",
  github: "https://github.com/ibrahiim77",
  resumeUrl: "/resume.pdf",
  stats: [
    { label: "Projects Completed", value: "6+" },
    { label: "Internship Experience", value: "8 Weeks" },
    { label: "Tech Stack Tools", value: "12+" },
    { label: "Code Quality & UI", value: "100%" }
  ]
};

export const featuredProject = {
  id: "connecthub",
  title: "ConnectHub",
  subtitle: "Full-Stack Real-Time Communication & Social Platform",
  category: "Full Stack",
  featured: true,
  status: "Featured Project",
  badge: "Recent Highlight",
  description: "ConnectHub is a full-stack real-time messaging and social workspace built to deliver seamless instant communication, dynamic user rooms, authenticated profiles, and real-time status updates.",
  longDescription: "Designed with modern software engineering practices, ConnectHub enables users to create chat channels, exchange real-time messages with low latency, manage profile preferences, and stay connected across devices. The application features a clean glassmorphism dashboard, dynamic socket handlers, secure JWT authentication, and structured database persistence.",
  techStack: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB", "CSS3 / Modern UI", "REST APIs"],
  keyFeatures: [
    "⚡ Real-time instant messaging powered by WebSockets / Socket.io",
    "🔒 Secure User Authentication & JWT session handling",
    "🎨 Modern responsive UI with dark glassmorphism styling",
    "💬 Dynamic chat channels & private messaging streams",
    "🌐 Real-time online/offline user status indicator",
    "⚡ Fast API endpoints & optimized database query execution"
  ],
  links: {
    github: "https://github.com/ibrahiim77",
    demo: "#connecthub-demo",
    linkedin: "https://www.linkedin.com/in/mohammad-ibrahim77/"
  }
};

export const projectsData = [
  featuredProject,
  {
    id: "alkhidmat-reservation",
    title: "Al-Khidmat Board & Vehicle Reservation System",
    subtitle: "8-Week Internship System at Al-Khidmat",
    category: "Full Stack",
    featured: false,
    badge: "Internship Project",
    description: "Built during an 8-week software engineering internship at Al-Khidmat. Managed vehicle allocations and board meeting reservations across multiple departments.",
    longDescription: "Collaborated with the IT team to design secure backend REST APIs and optimize database queries. Ensured real-time reservation tracking, department approval workflows, and seamless user experience.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Node.js", "MySQL", "Express.js"],
    keyFeatures: [
      "🚗 Real-time vehicle reservation tracking",
      "🏢 Boardroom scheduling with conflict detection",
      "⚡ Optimized SQL queries for fast lookup",
      "🔐 Multi-department role authorization",
      "📜 Verified Internship Certificate available on LinkedIn"
    ],
    links: {
      certificate: "https://www.linkedin.com/posts/mohammad-ibrahim77_internship-softwareengineering-experience-activity-7387472709187686402-muIK/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcT83YBFjTIWvipRbRwpTL5DBMGfnK9y7I"
    }
  },
  {
    id: "crypto-wallet-ui",
    title: "Crypto Wallet UI/UX Design",
    subtitle: "Figma Prototype & Interactive Interface",
    category: "UI/UX",
    featured: false,
    badge: "Figma Prototype",
    description: "Designed an intuitive, secure user interface for a crypto wallet mobile/web app featuring live balance tracking and seamless crypto transfers.",
    longDescription: "Created comprehensive wireframes, user flows, and interactive prototypes focusing on user experience, accessibility, transaction history, and responsive layout.",
    techStack: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "User Experience"],
    keyFeatures: [
      "📊 Interactive real-time balance tracking dashboard",
      "🔄 Send/Receive cryptocurrency transaction flow",
      "📱 Mobile-first responsive layout with dark aesthetics",
      "🎯 Accessible components & intuitive micro-interactions"
    ],
    links: {
      figma: "https://www.figma.com/proto/8mGhiA8bSt7852TmBx8j7M/Cryptooo-1-?node-id=45-23&starting-point-node-id=45%3A23&t=JJkO6yX0ua9pQw2k-1"
    }
  },
  {
    id: "weather-forecast-app",
    title: "Weather Forecast Application",
    subtitle: "Java Swing Desktop App + Open-Meteo API",
    category: "Java & APIs",
    featured: false,
    badge: "Desktop Application",
    description: "Desktop application built with Java Swing that integrates Open-Meteo API to fetch real-time weather, temperature, humidity, and wind speeds.",
    longDescription: "Implements asynchronous HTTP requests to fetch live weather data, JSON parsing, dynamic icon renders, and custom Java Swing graphics for smooth desktop UX.",
    techStack: ["Java", "Java Swing", "REST API", "JSON", "Open-Meteo API"],
    keyFeatures: [
      "🌤 Live weather metrics (Temperature, Wind speed, Humidity)",
      "🔍 Instant location lookup & API data parsing",
      "🖥 Custom desktop interface with Java Swing",
      "⚡ Lightweight execution and instant response"
    ],
    links: {
      demo: "https://www.linkedin.com/posts/mohammad-ibrahim77_excited-to-share-a-java-swing-weather-app-activity-7333535569773309952-ncCC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcT83YBFjTIWvipRbRwpTL5DBMGfnK9y7I"
    }
  },
  {
    id: "clothing-ecommerce",
    title: "Clothing E-Commerce Website",
    subtitle: "Pure HTML5 & CSS3 Responsive Shop",
    category: "Web Dev",
    featured: false,
    badge: "E-Commerce",
    description: "Responsive e-commerce frontend built from scratch using clean HTML5 & modern CSS3 layouts featuring homepage, catalog, and contact modules.",
    longDescription: "Focused on clean UI layout, CSS Grid/Flexbox responsiveness, product showcase cards, interactive navigation, and cross-device compatibility.",
    techStack: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive Design"],
    keyFeatures: [
      "🛍 Interactive product catalog showcase",
      "📱 Fully responsive cross-device layout",
      "✨ Custom CSS hover effects and card designs",
      "🌐 Deployed on GitHub Pages"
    ],
    links: {
      demo: "https://ibrahiim77.github.io/Clothing-Web/"
    }
  }
];

export const skillsCategories = [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Java", level: 85 },
      { name: "C Language", level: 80 },
      { name: "C# / .NET", level: 75 }
    ]
  },
  {
    title: "Web & Frameworks",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Node.js & Express", level: 85 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "RESTful APIs", level: 90 }
    ]
  },
  {
    title: "Databases & Storage",
    icon: "Database",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "SQL Querying", level: 88 }
    ]
  },
  {
    title: "Tools & Design",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Figma (UI/UX)", level: 82 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 }
    ]
  },
  {
    title: "Core Concepts",
    icon: "Brain",
    skills: [
      { name: "Object-Oriented Programming (OOP)", level: 92 },
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Software Architecture", level: 80 },
      { name: "Database Design", level: 85 }
    ]
  },
  {
    title: "Languages Spoken",
    icon: "Languages",
    skills: [
      { name: "English (Professional)", level: 90 },
      { name: "Urdu (Native / Fluent)", level: 100 },
      { name: "Sindhi (Fluent)", level: 95 }
    ]
  }
];

export const experienceData = [
  {
    role: "Software Engineering Intern",
    company: "Al-Khidmat Foundation",
    duration: "8 Weeks Internship",
    location: "Karachi, Pakistan",
    description: "Designed and developed the Board and Vehicle Reservation System to optimize resource scheduling across multiple organization departments.",
    achievements: [
      "Collaborated with IT engineering team to build secure backend REST APIs with Node.js and Express.",
      "Optimized MySQL database queries, reducing reservation processing latency.",
      "Implemented real-time reservation tracking with conflict detection for meeting rooms and vehicles.",
      "Awarded official internship completion certificate for technical excellence."
    ],
    certificateUrl: "https://www.linkedin.com/posts/mohammad-ibrahim77_internship-softwareengineering-experience-activity-7387472709187686402-muIK/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcT83YBFjTIWvipRbRwpTL5DBMGfnK9y7I"
  }
];
