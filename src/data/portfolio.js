const portfolio = {
  greeting: {
    salutation: "Hey, I'm",
    name: "Ravi Saxena",
    role: "Full-Stack AI Engineer — Systems, SaaS & LLM Workflows",
    displayLine1: "FULL-STACK",
    displayLine2: "AI ENGINEER",
    tagline:
      "I design distributed backends and product UIs, then wire AI (Claude, Cursor, MCP) into real CI/CD and engineering workflows.",
    resumeUrl: "/ravi_saxena_fullstack_engineer.pdf",
    resumeDriveUrl:
      "https://drive.google.com/file/d/1ZHkEUw9hcnU5dbtkA8ojIE461aBIiMVs/view?usp=sharing",
  },

  socials: {
    email: "mailto:ravisaxena230599@gmail.com",
    github: "https://github.com/ravisaxena23",
    linkedin: "https://linkedin.com/in/ravisaxena23",
    phone: "+91 96430 19798",
  },

  editor: {
    experience: "5+ years",
    traits: ["Full-stack", "Distributed systems", "AI-native builder"],
    birthYear: 1999,
  },

  marquee: [
    "Node.js",
    "TypeScript",
    "Kafka",
    "PostgreSQL",
    "AWS",
    "Kubernetes",
    "React",
    "Claude",
    "Cursor",
    "MCP",
    "LLM Workflows",
    "GraphQL",
  ],

  tools: [
    {
      name: "Node.js + TypeScript",
      blurb: "Typed microservices and API surfaces for multi-tenant SaaS.",
    },
    {
      name: "Kafka + SQS",
      blurb: "Event pipelines that cut processing latency and decouple scale.",
    },
    {
      name: "PostgreSQL + Redis",
      blurb: "Durable models with caching for high-traffic read paths.",
    },
    {
      name: "AWS + Kubernetes",
      blurb: "Cloud-native deploy, scale, and reliability for enterprise load.",
    },
    {
      name: "React + Micro-frontends",
      blurb: "Authoring UIs used across global tenants with accessibility in mind.",
    },
    {
      name: "Claude + Cursor + MCP",
      blurb: "AI-assisted reviews and workflows wired into real CI/CD.",
    },
  ],

  about: {
    headline: "About",
    paragraphs: [
      "Senior Software Engineer with 5+ years building scalable distributed systems, microservices, and cloud-native SaaS platforms. Experienced in system design, API design, event-driven architecture, performance optimization, and AI-assisted engineering workflows.",
      "Delivered solutions supporting 1,000+ enterprise tenants and millions of monthly transactions—focused on reliability, authorization, and developer velocity.",
    ],
  },

  metrics: [
    { value: "1,000+", label: "Enterprise tenants" },
    { value: "Millions", label: "Monthly API requests" },
    { value: "12%", label: "Latency reduction" },
    { value: "11%", label: "Fewer security incidents" },
  ],

  experience: [
    {
      company: "Simpplr",
      role: "Software Engineer",
      period: "Sept 2024 — Present",
      context: "Enterprise SaaS Platform",
      highlight: "Star Performer (2025)",
      tech: [
        "Node.js",
        "PostgreSQL",
        "Kafka",
        "AWS",
        "Kubernetes",
        "Docker",
        "React",
        "TypeScript",
      ],
      bullets: [
        "Architected scalable backend microservices and REST APIs powering content creation and publishing workflows for 1,000+ enterprise tenants, handling millions of monthly API requests.",
        "Built and optimized React/TypeScript content-authoring workflows used across global enterprise tenants, improving usability, accessibility, and platform adoption.",
        "Engineered event-driven pipelines using Kafka and AWS SQS, cutting processing latency 12%, and migrated authorization from RBAC to ABAC, reducing security incidents 11%.",
        "Led system design reviews and architectural discussions for high-traffic services, improving scalability, caching efficiency, and API reliability.",
        "Automated an AI-powered PR review workflow (Claude) integrated into CI/CD to flag dependency vulnerabilities, saving ~2 hours/week of manual review time.",
      ],
    },
    {
      company: "SHL Global",
      role: "Associate Software Engineer",
      period: "Jul 2021 — Aug 2024",
      context: "Global HR-Tech Platform",
      highlight: "Most Valuable Developer (3x)",
      tech: ["Node.js", "MongoDB", "MySQL", "AWS", "Docker", "React", "WebRTC"],
      bullets: [
        "Engineered backend services for a WebRTC-based interview platform, including session orchestration, audit logging, and data persistence, boosting interviewer throughput 20%.",
        "Designed scheduling and calendar-sync microservices with conflict resolution logic, automating 60% of manual interview scheduling.",
        "Delivered reusable React/TypeScript frontend components integrated with backend REST APIs, cutting feature delivery time 20%.",
        "Authored unit and integration test suites (Jest, Mocha), reducing regression bugs and improving code coverage across releases.",
      ],
    },
  ],

  skillGroups: [
    {
      title: "Languages",
      items: ["JavaScript", "TypeScript", "SQL"],
    },
    {
      title: "Backend & Security",
      items: [
        "Node.js",
        "Express",
        "REST",
        "GraphQL",
        "Microservices",
        "Kafka",
        "AWS SQS",
        "ABAC",
        "RBAC",
        "OAuth",
      ],
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    },
    {
      title: "Frontend",
      items: ["React", "Redux", "TypeScript", "Micro-Frontends", "WCAG AA"],
    },
    {
      title: "System Design & Cloud",
      items: [
        "Distributed Systems",
        "Multi-tenant Architecture",
        "AWS Lambda",
        "ECS",
        "RDS",
        "S3",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
      ],
    },
    {
      title: "AI / LLM",
      items: [
        "Claude Code",
        "Cursor",
        "MCP",
        "Prompt Engineering",
        "LLM Integration",
      ],
    },
    {
      title: "Testing & Observability",
      items: ["Jest", "Mocha", "Cypress", "Structured Logging", "Monitoring"],
    },
  ],

  awards: [
    "Star Performer (Simpplr, 2025)",
    "Most Valuable Developer (3x, SHL Global)",
    "Hackathon Winner — SODA Foundation (2022)",
    "MERN Stack Specialization (Coursera, 2021)",
  ],

  education: {
    degree: "B.Tech in Computer Science & Engineering",
    school: "Galgotias University",
    period: "2017 — 2021",
    detail: "GPA: 8.5 / 10",
  },
};

export default portfolio;
