export const projects = [
  {
    id: 1,
    title: "Face Recognition Attendance System",
    shortDescription: "AI-powered attendance system designed to automate attendance using face recognition and reduce manual attendance issues.",
    description: "A comprehensive AI-powered attendance management system that uses face recognition technology to automate the attendance process. The system eliminates manual attendance taking, reduces proxy attendance, and provides real-time analytics. Built with OpenCV for face detection and recognition, MySQL for data storage, and a clean UI for administrators.",
    image: "/projects/attendance.png",
    category: "AI/ML",
    technologies: ["Python", "OpenCV", "MySQL"],
    github: "YOUR_GITHUB_LINK",
    live: "YOUR_LIVE_LINK",
    featured: true,
    problemStatement: "Manual attendance taking in educational institutions and organizations is time-consuming, prone to errors, and vulnerable to proxy attendance.",
    solution: "Developed an automated face recognition system that identifies students/employees in real-time, marks attendance instantly, and generates detailed reports.",
    features: [
      "Real-time face detection and recognition",
      "Automated attendance marking",
      "Anti-spoofing measures",
      "Admin dashboard with analytics",
      "Export reports in CSV/PDF",
      "Multi-camera support"
    ],
    architecture: "Client-server architecture with OpenCV for computer vision, MySQL for persistent storage, and a REST API for frontend communication.",
    myContribution: "Full-stack development including computer vision pipeline, database design, API development, and admin dashboard.",
    challenges: [
      "Handling varying lighting conditions",
      "Preventing photo/video spoofing",
      "Optimizing recognition speed for real-time use"
    ],
    futureImprovements: [
      "Mobile app integration",
      "Cloud deployment",
      "Advanced anti-spoofing with liveness detection"
    ]
  },
  {
    id: 2,
    title: "Personal Finance App",
    shortDescription: "Personal finance management application with transaction tracking, budgeting, chatbot assistance, and lending/borrowed-money tracking.",
    description: "A full-stack personal finance management application that helps users track expenses, create budgets, manage lending/borrowing with friends, and get AI-powered financial insights through a chatbot interface.",
    image: "/projects/finance.png",
    category: "Web Development",
    technologies: ["React", "Node.js", "MySQL"],
    github: "YOUR_GITHUB_LINK",
    live: "YOUR_LIVE_LINK",
    featured: true,
    problemStatement: "People struggle to track expenses, manage budgets, and keep track of money lent to or borrowed from friends.",
    solution: "Built a comprehensive finance app with transaction categorization, budget alerts, lending/borrowing tracker, and an AI chatbot for financial advice.",
    features: [
      "Income & expense tracking with categories",
      "Monthly/weekly budget planning",
      "Lending & borrowing management",
      "AI-powered financial chatbot",
      "Data visualization with charts",
      "Export financial reports",
      "Dark/Light theme"
    ],
    architecture: "MERN stack with React frontend, Node.js/Express backend, MySQL database, and OpenAI integration for chatbot.",
    myContribution: "Full-stack development including React frontend, Express API, database schema, and chatbot integration.",
    challenges: [
      "Real-time balance updates across devices",
      "Chatbot context management",
      "Data visualization performance"
    ],
    futureImprovements: [
      "Bank API integration",
      "Investment portfolio tracking",
      "Recurring transaction automation"
    ]
  },
  {
    id: 3,
    title: "Traffic Management System",
    shortDescription: "AI-based traffic management concept using vehicle detection, traffic density analysis, emergency priority, and intelligent signal timing.",
    description: "An AI-powered smart traffic management system developed for India Innovation 2026 Hackathon. Uses YOLO for real-time vehicle detection, analyzes traffic density, prioritizes emergency vehicles, and dynamically adjusts signal timing to optimize traffic flow.",
    image: "/projects/traffic.png",
    category: "Hackathon",
    technologies: ["Python", "OpenCV", "YOLO"],
    github: "YOUR_GITHUB_LINK",
    live: "YOUR_LIVE_LINK",
    featured: true,
    problemStatement: "Static traffic signals cause congestion, increased wait times, and cannot adapt to real-time traffic conditions or emergency vehicles.",
    solution: "Developed an intelligent traffic management system using computer vision to detect vehicles, analyze density, and dynamically control signal timing.",
    features: [
      "Real-time vehicle detection with YOLOv8",
      "Traffic density analysis per lane",
      "Emergency vehicle detection & priority",
      "Dynamic signal timing optimization",
      "Traffic flow visualization",
      "Simulation dashboard"
    ],
    architecture: "Python-based computer vision pipeline with YOLO for detection, OpenCV for processing, and a simulation engine for traffic light control logic.",
    myContribution: "Computer vision pipeline, YOLO model integration, traffic logic algorithms, and hackathon presentation.",
    challenges: [
      "Real-time inference optimization",
      "Multi-camera synchronization",
      "Edge case handling (occlusion, weather)"
    ],
    futureImprovements: [
      "Edge deployment on Jetson devices",
      "V2X communication integration",
      "City-wide simulation"
    ]
  },
  {
    id: 4,
    title: "AI-Powered Coupon Sharing & Verification Platform",
    shortDescription: "Platform for sharing and verifying coupons with duplicate detection, expiry validation, voting, moderation, and analytics.",
    description: "A full-stack platform where users can share coupon codes, verify their validity, and earn rewards. Features AI-powered duplicate detection, automatic expiry validation, community voting, admin moderation tools, and detailed analytics.",
    image: "/projects/coupon.png",
    category: "Web Development",
    technologies: ["FastAPI", "React", "MySQL"],
    github: "YOUR_GITHUB_LINK",
    live: "YOUR_LIVE_LINK",
    featured: true,
    problemStatement: "Coupon codes shared online are often expired, fake, or duplicated. No reliable platform exists for verified coupon sharing.",
    solution: "Built a community-driven platform with automated verification, duplicate detection, and reputation system.",
    features: [
      "Coupon submission & categorization",
      "AI duplicate detection",
      "Automatic expiry validation",
      "Community voting system",
      "Admin moderation dashboard",
      "User reputation & rewards",
      "Analytics & insights"
    ],
    architecture: "FastAPI backend with React frontend, MySQL for data, background workers for verification, and ML model for duplicate detection.",
    myContribution: "Backend API design, duplicate detection algorithm, database schema, and React frontend components.",
    challenges: [
      "Scalable duplicate detection",
      "Real-time verification workflows",
      "Preventing gaming of reputation system"
    ],
    futureImprovements: [
      "Browser extension for auto-apply",
      "Merchant partnership program",
      "Mobile app"
    ]
  },
  {
    id: 5,
    title: "AI Interview Preparation Assistant",
    shortDescription: "AI-based mock interview platform for conducting interviews, analyzing responses, and providing feedback.",
    description: "An intelligent mock interview platform that uses LLMs to conduct technical and behavioral interviews, analyzes candidate responses using speech-to-text and semantic analysis, and provides detailed feedback with improvement suggestions.",
    image: "/projects/interview.png",
    category: "AI/ML",
    technologies: ["FastAPI", "OpenAI API", "Whisper", "Sentence Transformers", "MySQL"],
    github: "YOUR_GITHUB_LINK",
    live: "YOUR_LIVE_LINK",
    featured: false,
    problemStatement: "Candidates lack access to realistic mock interviews with personalized feedback. Traditional prep methods are generic and don't simulate real interview pressure.",
    solution: "Created an AI interviewer that adapts questions based on role, evaluates responses in real-time, and provides structured feedback.",
    features: [
      "Role-specific interview tracks",
      "Voice-based interaction with Whisper",
      "Response analysis with Sentence Transformers",
      "Real-time feedback & scoring",
      "Strengths & improvement areas",
      "Interview history & progress tracking",
      "Custom question bank"
    ],
    architecture: "FastAPI backend with OpenAI GPT for question generation/evaluation, Whisper for STT, Sentence Transformers for semantic similarity, MySQL for persistence.",
    myContribution: "Full backend architecture, AI pipeline integration, evaluation algorithms, and API design.",
    challenges: [
      "Latency optimization for real-time feel",
      "Accurate speech recognition in noisy environments",
      "Fair evaluation across diverse responses"
    ],
    futureImprovements: [
      "Video analysis for body language",
      "Peer interview mode",
      "Integration with ATS platforms"
    ]
  }
];

export const categories = ["All", "AI/ML", "Web Development", "Data Analytics", "Hackathon"];