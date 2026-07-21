export const profile = {
  name: "Siddhant Rao",
  title: "Software Developer | Distributed Systems Specialist",
  tagline: "Distributed Systems · Scala · Kafka · Enterprise SaaS · Cloud-Native Architecture",
  location: "Bengaluru, India",
  availability: "Actively seeking opportunities",
  relocation: "Open to relocation (US, Europe, APAC)",
  phone: "+91 9112303091",
  email: "sids9rao@gmail.com",
  linkedin: "https://linkedin.com/in/siddhant-rao-a696471b4",
  github: "https://github.com/siddhantrao23",
  yearsOfExperience: "3+",
  summary:
    "Results-driven Software Developer with 3+ years of experience architecting and scaling enterprise-grade distributed systems at SAP Labs. Expert in building event-driven microservices using Scala, Kafka, and cloud-native technologies that process millions of events daily. Proven track record of reducing migration times by 90%, improving API performance by 25%, and increasing platform reliability by 30% through innovative synchronization frameworks and asynchronous processing architectures.",
};

export const skills = [
  {
    category: "Languages",
    items: ["Scala", "Java", "SQL", "TypeScript", "Python"],
    proficiency: "Expert in Scala, Java · Proficient in SQL, TypeScript, Python",
  },
  {
    category: "Backend & APIs",
    items: ["Microservices", "REST APIs", "GraphQL", "Spring Boot", "Event-Driven Architecture"],
    proficiency: "Production experience building scalable APIs",
  },
  {
    category: "Distributed Systems",
    items: [
      "Apache Kafka",
      "Message Queues",
      "Event Streaming",
      "Asynchronous Processing",
      "Data Synchronization",
      "Circuit Breakers",
    ],
    proficiency: "10M+ events/day processed in production",
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Kubernetes", "Cloud Foundry", "CI/CD", "GitOps", "Infrastructure as Code"],
    proficiency: "Kubernetes orchestration · Multi-cloud deployment",
  },
  {
    category: "Databases",
    items: ["SAP HANA", "SQL Server", "MySQL", "Redis", "PostgreSQL"],
    proficiency: "Query optimization · Schema design",
  },
  {
    category: "Observability & Monitoring",
    items: ["Dynatrace", "Distributed Tracing", "APM", "Grafana", "Prometheus", "ELK Stack"],
    proficiency: "Production monitoring · Incident response",
  },
  {
    category: "Testing & Quality",
    items: ["JUnit", "ScalaTest", "Testcontainers", "Integration Testing", "TDD"],
    proficiency: "85% code coverage maintained",
  },
  {
    category: "Tools & Collaboration",
    items: ["Git", "Gerrit", "Jira", "Swagger/OpenAPI", "Agile/Scrum", "Code Review"],
    proficiency: "Cross-functional team collaboration",
  },
];

export const experience = [
  {
    company: "SAP Labs India",
    role: "Software Developer",
    location: "Bengaluru, India",
    period: "2022 – Present",
    duration: "3 years",
    highlights: [
      "Architected and deployed Kafka-based synchronization framework processing 10M+ events/day across distributed SaaS environments, reducing customer migration time from 10+ hours to under 60 minutes (90% reduction).",
      "Designed scalable microservices in Scala handling 500K+ daily API requests, implementing async processing patterns that reduced P95 latency from 400ms to 300ms (25% improvement).",
      "Improved platform reliability from 95% to 98.5% uptime by implementing comprehensive schema validation, automated data quality checks, and circuit breaker patterns across 15+ microservices.",
      "Led incident response for production-critical issues using Dynatrace APM, reducing MTTR by 40% through enhanced observability, distributed tracing, and automated alerting.",
      "Built comprehensive testing framework with 85% code coverage, including 200+ unit tests and integration test suites using JUnit, ScalaTest, and Testcontainers.",
      "Collaborated with cross-functional teams (Product, DevOps, QA) across 3 time zones to deliver features on Agile sprints with 95% on-time delivery rate.",
      "Mentored 2 junior engineers on Scala best practices, code review processes, and distributed systems design patterns.",
    ],
    technologies: ["Scala", "Apache Kafka", "Spring Boot", "SAP HANA", "Docker", "Kubernetes", "Dynatrace", "REST APIs", "GraphQL"],
  },
  {
    company: "Info Tech Corporation",
    role: "Software Engineering Intern",
    location: "India",
    period: "2021",
    duration: "6 months",
    highlights: [
      "Developed full-stack government web application using C#, ASP.NET MVC, and SQL Server, serving 1000+ daily active users.",
      "Built RESTful API services and optimized database queries reducing page load time by 35%.",
      "Implemented automated workflow approval system, reducing manual processing time by 50%.",
    ],
    technologies: ["C#", "ASP.NET", "SQL Server", "REST APIs"],
  },
];

export const projects = [
  {
    name: "Enterprise Synchronization Framework",
    subtitle: "Bidirectional Data Sync Platform",
    description:
      "Production-grade Kafka-based distributed system synchronizing enterprise customizations across multi-tenant SaaS environments. Handles 10M+ events/day with < 5s latency, featuring schema transformation pipelines, fault-tolerant retry mechanisms, dead-letter queues, and real-time monitoring dashboards. Reduced customer migration times by 90% and eliminated 95% of manual sync operations.",
    tags: ["Kafka", "Scala", "Distributed Systems", "Event-Driven Architecture", "Microservices"],
    impact: "10M+ events/day processed · 90% faster migrations · 95% automation",
    scale: "Multi-tenant · 1000+ enterprise customers",
    github: undefined as string | undefined,
    demo: undefined as string | undefined,
  },
  {
    name: "Legion",
    subtitle: "Real-time Anonymous Chat Platform",
    description:
      "Scalable real-time messaging platform supporting anonymous communication with WebSocket-based architecture. Built with Django channels, Redis pub-sub, and AJAX for low-latency message delivery. Features include room management, message persistence, user presence detection, and horizontal scaling support.",
    tags: ["Django", "WebSockets", "Redis", "Real-time", "Python"],
    impact: "Sub-second message latency · 500+ concurrent users tested",
    github: "https://github.com/siddhantrao23/legion",
    demo: undefined as string | undefined,
  },
  {
    name: "Cloud-Native Microservices Platform",
    subtitle: "Kubernetes-orchestrated Services",
    description:
      "Designed and deployed containerized microservices architecture on Kubernetes with automated CI/CD pipelines, service mesh integration, and comprehensive observability stack. Implemented blue-green deployments, auto-scaling, and centralized logging using ELK stack.",
    tags: ["Kubernetes", "Docker", "CI/CD", "Microservices", "Cloud Foundry"],
    impact: "99.9% uptime · 15+ microservices orchestrated",
    scale: "Production workload · Auto-scaling enabled",
    github: undefined as string | undefined,
    demo: undefined as string | undefined,
  },
];

export const education = [
  {
    institution: "BITS Pilani",
    degree: "M.Tech, Software Engineering",
    score: "CGPA: 9.0/10",
    period: "2020 - 2022",
    focus: "Distributed Systems, Cloud Computing, Software Architecture",
  },
  {
    institution: "Christ University",
    degree: "B.Sc, Computer Science",
    score: "CGPA: 9.58/10",
    period: "2017 - 2020",
    honors: "First Class with Distinction",
  },
];

export const achievements = [
  {
    title: "High Impact Project Award",
    organization: "SAP Labs India",
    year: "2024",
    description: "Recognized for delivering the enterprise synchronization framework that reduced migration times by 90%",
  },
  {
    title: "Spot Award for Excellence",
    organization: "SAP Labs India",
    year: "2023",
    description: "Outstanding performance in incident management and system reliability improvements",
  },
  {
    title: "Academic Excellence Award",
    organization: "BITS Pilani",
    year: "2022",
    description: "Top 5% of graduating class with 9.0 CGPA in M.Tech program",
  },
];

export const certifications: Array<{
  name: string;
  issuer: string;
  year: string;
  credentialUrl: string;
}> = [
  // Add your actual certifications from LinkedIn here
  // Example format:
  // {
  //   name: "Certification Name",
  //   issuer: "Issuing Organization",
  //   year: "2024",
  //   credentialUrl: "https://credential-url.com",
  // },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const impactStats = [
  { value: "10M+", label: "Events processed daily via Kafka" },
  { value: "90%", label: "Faster migration (10hrs → 60min)" },
  { value: "25%", label: "API latency reduction (P95)" },
  { value: "30%", label: "Platform reliability improvement" },
];
