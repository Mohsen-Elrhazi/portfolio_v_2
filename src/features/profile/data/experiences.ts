import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "atos",
    companyName: "ATOS",
    companyLogo: "/atos-logo.png",
    positions: [
      {
        id: "atos-appdev-2024",
        title: "Application Developer",
        employmentPeriod: { start: "04.2024", end: "08.2024" },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed a desktop application for overtime calculation.
- Developed a web application for administrative management.
- Developed a blog management web application.`,
        skills: ["Shadcn UI", "React.js", "Next.js", "Node.js", "Electron.js", "SQLite"],
      },
    ],
  },
  {
    id: "cdc",
    companyName: "CDC Digital and AI",
    positions: [
      {
        id: "cdc-webdev-2023",
        title: "Web Developer",
        employmentPeriod: { start: "03.2023", end: "05.2023" },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed a website allowing company employees to print various management documents.`,
        skills: ["React.js", "Tailwind CSS", "Laravel", "MySQL"],
      },
    ],
  },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "freelance-fullstack-2018",
        title: "Full-stack Developer",
        employmentPeriod: { start: "2022" },
        employmentType: "Part-time",
        icon: "code",
        description: `- Built an order management website with real-time delivery tracking.
- Developed an e-commerce site for bird's nest products.
- Created a map to display monitoring station data.
- Designed a customizable WordPress landing page.`,
        skills: ["Laravel", "React", "Express.js", "Socket.IO", "MongoDB", "Firebase", "WordPress", "Docker", "NGINX"],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    isCurrentEmployer : true,
    positions: [
      {
        id: "ensetm-master-2024",
        title: "Master's degree in Distributed Systems and Artificial Intelligence",
        employmentPeriod: { start: "2024", end: "Present" },
        icon: "education",
        description: `- Currently pursuing a master's degree focused on distributed systems and AI technologies.`,
        skills: ["Web Development", "Distributed Systems", "Machine Learning", "AI", "AI Agents"],
        isExpanded: true,
      },
      {
        id: "est-bachelor-2023",
        title: "Professional Bachelor in Software Engineering and Advanced Administration of Computer Systems and Networks",
        employmentPeriod: { start: "2023", end: "2024" },
        icon: "education",
        description: `- Studied software engineering principles, advanced computer systems, and network administration.`,
        skills: ["Software Engineering", "Network Administration", "Database Management", "Cloud Computing"],
      },
      {
        id: "ifso-web-2021",
        title: "Specialized Technician in Web Programming And Technologies",
        employmentPeriod: { start: "2021", end: "2023" },
        icon: "education",
        description: `- Acquired skills in web programming, including front-end and back-end technologies.`,
        skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MongoDB", "React.js", "Node.js", "Laravel", "Cloud Computing", "Microservices"],
      },
      {
        id: "baccalaureate-2020",
        title: "Baccalaureate In Life and Earth Sciences",
        employmentPeriod: { start: "2020", end: "2021" },
        icon: "education",
        description: `- Completed high school education with a focus on life and earth sciences.`,
        skills: ["Biology", "Chemistry", "Physics"],
      },
    ],
  },
];
