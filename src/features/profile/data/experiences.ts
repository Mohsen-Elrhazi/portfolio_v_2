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
];
