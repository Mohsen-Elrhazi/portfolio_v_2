import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "softnex",
    companyName: "SOFTNEX",
    companyLogo: "/icons_entreprise/softnex.png",
    positions: [
      {
        id: "softnex-2025",
        title: "Développeur Full-stack",
        employmentPeriod: { start: "05.2025", end: "07.2025" },
        // employmentType: "Full-time",
        location: "Casablanca, Maroc",
        icon: "code",
        description: `- Conception et développement d’une solution SaaS pour la gestion digitale des fiches de police hôtelières.`,
        skills: ["React.js", "Laravel", "PostgreSQL", "Docker", "JWT", "Postman", "Jira", "Git/GitHub", "UML"],
      },
    ],
  },
  {
    id: "onestcom",
    companyName: "ONESTCOM",
    companyLogo: "/icons_entreprise/onestcom.jpg",
    positions: [
      {
        id: "onestcom-2023",
        title: "Développeur Full-stack",
        employmentPeriod: { start: "05.2024", end: "06.2024" },
        // employmentType: "Full-time",
        location: "Marrakech, Maroc",
        icon: "code",
        description: `- Conception et Développement d’un Site E-commerce.`,
        skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Git/GitHub", "Figma"],
      },
    ],
  },
  {
    id: "mdc",
    companyName: "Maroc Datacenter",
    companyLogo: "/icons_entreprise/mdc.jpg",
    positions: [
      {
        id: "mdc-2023",
        title: "Stagiaire Systèmes & Réseaux",
        employmentPeriod: { start: "07.2023", end: "08.2023" },
        // employmentType: "Full-time",
        location: "Rabat, Maroc",
        icon: "server",
        description: `- Analyse de l’architecture et de la configuration d’un Data Center.
- Installation et configuration de l’hyperviseur VMware ESXi.`,
        skills: ["Linux", "VMware ESXI", "Windows Server"],
      },
    ],
  },
];
