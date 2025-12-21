import type { Experience } from "../types/experiences";

export const EDUCATIONS: Experience[] = [{
    id: "education",
    companyName: "Education",
    isCurrentEmployer : true,
    positions: [
      {
        id: "youcode-2024",
        title: " Certificat en Développement Web",
        employmentPeriod: { start: "2024", end: "Present" },
        icon: "education",
        description: `Youcode | UM6P, Campus Youssoufia`,
        skills: ["Web Development", "Distributed Systems", "Machine Learning", "AI", "AI Agents"],
        isExpanded: true,
      },
      {
        id: "bts-2022",
        title: "BTS Développement des Systèmes d’Information",
        employmentPeriod: { start: "2022", end: "2024" },
        icon: "education",
        description: `- Centre BTS Hassan II, Marrakech`,
        skills: ["Software Engineering", "Network Administration", "Database Management", "Cloud Computing"],
      },
      {
        id: "estc-2019",
        title: "Baccalauréat +1 en génie électique",
        employmentPeriod: { start: "2019", end: "2022" },
        icon: "education",
        description: `- École Supérieure de Technologie, Casablanca`,
        skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MongoDB", "React.js", "Node.js", "Laravel", "Cloud Computing", "Microservices"],
      },
      {
        id: "baccalaureate-2029",
        title: "Baccalauréat Sciences et Technologies Electriques",
        employmentPeriod: { start: "2018", end: "2019" },
        icon: "education",
        description: `- Lycée Technique Alkhawarizmi, Safi`,
        skills: ["Biology", "Chemistry", "Physics"],
      },
    ],
  },
];