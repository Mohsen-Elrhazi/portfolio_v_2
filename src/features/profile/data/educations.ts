import type { Experience } from "../types/experiences";

export const EDUCATIONS: Experience[] = [
  {
    id: "education",
    companyName: "Education",
    // isCurrentEmployer: true,
    positions: [
      {
        id: "youcode-2024",
        title: " Formation en Développement Web",
        school: "Youcode - UM6P",
        employmentPeriod: { start: "2024", end: "Present" },
        location: "Youssoufia, Maroc",
        icon: "education",
        description: `- Programme intensif axé sur le développement web full-stack, couvrant les technologies front-end et back-end.
- Projets pratiques incluant la création d'applications web complètes et réactives.`,
        // skills: ["Web Development", "Distributed Systems", "Machine Learning", "AI", "AI Agents"],
        isExpanded: false,
      },
      {
        id: "bts-2022",
        title: "BTS Développement des Systèmes d’Information",
        school: "Centre BTS Hassan II",
        employmentPeriod: { start: "2022", end: "2024" },
        location: "Marrakech, Maroc",
        icon: "education",
        description: `- Brevet de Technicien Supérieur (BTS) en Développement des Systèmes d’Information.
- Conception et développement d’applications informatiques.
- Analyse et modélisation des systèmes d’information.
        `,
        // skills: ["Software Engineering", "Network Administration", "Database Management", "Cloud Computing"],
      },
      {
        id: "estc-2019",
        title: "Baccalauréat +1 en génie électique",
        school: "École Supérieure de Technologie Casablanca (ESTC)",
        employmentPeriod: { start: "2019", end: "2022" },
        location: "Casablanca, Maroc",
        icon: "education",
        description: `- Parcours universitaire en génie électrique et systèmes industrielles.
- Étude des systèmes électriques et électroniques.
- Initiation aux automatismes et systèmes industriels.
`,
        // skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MongoDB", "React.js", "Node.js", "Laravel", "Cloud Computing", "Microservices"],
      },
      {
        id: "baccalaureate-2029",
        title: "Baccalauréat Sciences et Technologies Electriques",
        school: "Lycée Qualifiant Alkhawarizmi Technique",
        employmentPeriod: { start: "2018", end: "2019" },
        location: "Safi, Maroc",
        icon: "education",
        description: `- Formation secondaire orientée sciences appliquées et technologies électriques.
- Étude des principes fondamentaux de l'électricité et de l'électronique.
        `,
        // skills: ["Biology", "Chemistry", "Physics"],
      },
    ],
  },
];
