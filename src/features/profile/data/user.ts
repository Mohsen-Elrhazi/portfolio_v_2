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
    "Développeur Full Stack",
    "Software engineer",
    "Frontend engineer",
    "Backend engineer",
    "Cloud engineer",
  ],
  address: "Youssoufia, Maroc",
  phoneNumber: "KzIxMiA2MDQ1NTY0ODc=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "ZWxyaGF6aS5tb2hzZW4uZGV2QGdtYWlsLmNvbQ==", // base64 encoded
  website: "https://elrhazi.tech",
  jobTitle: "Full stack Engineer",
  jobs: [
    {
      title: "Développeur Full Stack ",
      company: "Youcode - UM6P",
      website: "https://youcode.ma/",
    },
  ],
  about: `
Je suis Mohsen Elrhazi développeur full stack passionné par la conception et la mise en œuvre de solutions web innovantes. Rigoureux,
curieux et orienté résultats, je cherche à contribuer à des projets à fort impact technologique et humain.
`,

  avatar: "mohsen_profile.jpg",
  ogImage: '' , // "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1759581475"
  namePronunciationUrl: "/audio/audio.mp3",
  keywords: ["Elrhazi Mohsen", "elrhazi mohsen", "mohsen elrhazi", ""],
  dateCreated: "2025-10-27", // YYYY-MM-DD
  cv: "/CV_Elrhazi_Mohsen.pdf",
};
