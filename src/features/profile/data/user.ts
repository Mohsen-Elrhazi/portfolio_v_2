import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Jeraidi",
  lastName: "Yassir",
  displayName: "Jeraidi Yassir",
  username: "yassir-jeraidi",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Full stack engineer",
    "Software engineer",
    "Frontend engineer",
    "Backend engineer",
    "Cloud engineer",
  ],
  address: "Casablanca, Morocco",
  phoneNumber: "KzIxMjYzODcyNTQwMw==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "eWFzc2lyLmplcmFpZGlAZ21haWwuY29t", // base64 encoded
  website: "https://jeraidi.tech",
  jobTitle: "Full stack Engineer",
  jobs: [
    {
      title: "Software Engineer Student",
      company: "ENSET Media — Distributed Systems",
      website: "https://enset-media.ac.ma",
    },
  ],
  about: `
I'm Yassir Jeraidi — a Moroccan Software Engineer and master's student in Distributed Systems & AI at ENSET Media.  
I specialize in full-stack development (Next.js, React, Node.js, Spring Boot) and love building scalable, user-focused applications.  
Passionate about innovation, I blend creativity and engineering to craft impactful digital solutions.
`,

  avatar: "me.webp",
  ogImage: '' , // "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1759581475"
  namePronunciationUrl: "/audio/audio.mp3",
  keywords: ["Jeraidi Yassir", "jeraidi yassir", "yassir jr", "yassirjr"],
  dateCreated: "2025-10-27", // YYYY-MM-DD
};
