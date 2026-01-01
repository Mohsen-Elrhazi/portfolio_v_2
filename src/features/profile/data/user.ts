import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Mohsen",
  lastName: "Elrhazi",
  displayName: "Mohsen Elrhazi",
  username: "mohsenelrhazi",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Technicien Supérieur",
    "Développeur Full Stack",
   "Développeur Frontend",
    "Développeur Backend",
    // "A la recherche d'une opportunité d'emploi",
  ],
  address: "Youssoufia, Maroc",
  phoneNumber: "KzIxMiA2MDQ1NTY0ODc=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "ZWxyaGF6aS5tb2hzZW4uZGV2QGdtYWlsLmNvbQ==", // base64 encoded
  website: "https://mohsen-elrhazi.tech",
  jobTitle: "Développeur Full Stack",
  jobs: [
    {
      title: "Développeur Full Stack",
      company: "Youcode - UM6P",
      website: "https://youcode.ma/",
    },
  ],
  about: `
Développeur Full Stack, passionné par la conception et la création de solutions web modernes et performantes. Rigoureux, curieux et orienté résultats, je suis actuellement à la recherche d’une opportunité d'emploi pour contribuer à des projets à fort impact et continuer à évoluer techniquement.
`,

  // avatar: "mohsen.jpeg",
  avatar: "mohsen2_ai.png",
  ogImage: "https://mohsen-elrhazi.tech/mohsen2_ai.png",
  namePronunciationUrl: "/audio/audio.mp3",
  keywords: ["Elrhazi Mohsen", "elrhazi mohsen", "mohsen elrhazi", ""],
  dateCreated: "2025-10-27", // YYYY-MM-DD
  cv: "/CV_Elrhazi_Mohsen.pdf",
};
