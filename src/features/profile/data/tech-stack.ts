import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [
  // 🧠 Languages
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
    icon: {
      light: "/icons/typescript.svg",
      dark: "/icons/typescript.svg",
    },
  },
  {
    key: "javascript",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
    icon: {
      light: "/icons/javascript.svg",
      dark: "/icons/javascript.svg",
    },
  },
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Language"],
    icon: {
      light: "/icons/python.svg",
      dark: "/icons/python.svg",
    },
  },
  {
    key: "php",
    title: "PHP",
    href: "https://www.php.net/",
    categories: ["Language"],
    icon: {
      light: "/icons/Php_light.svg",
      dark: "/icons/Php_dark.svg",
    },
    theme: true,
  },
  {
    key: "java",
    title: "Java",
    href: "https://www.java.com/",
    categories: ["Language"],
    icon: {
      light: "/icons/java.svg",
      dark: "/icons/java.svg",
    },
  },

  // ⚙️ Frameworks & Libraries
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Library", "UI Library"],
    icon: {
      light: "/icons/reactquery.svg",
      dark: "/icons/reactquery.svg",
    },
  },
  {
    key: "nextjs",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
    icon: {
      light: "/icons/nextjs_icon_dark.svg",
      dark: "/icons/nextjs_icon_dark.svg",
    },
    theme: true,
  },
  {
    key: "angular",
    title: "Angular",
    href: "https://angular.dev/",
    categories: ["Framework"],
    icon: {
      light: "/icons/angular.svg",
      dark: "/icons/angular.svg",
    },
  },
  {
    key: "vue",
    title: "Vue.js",
    href: "https://vuejs.org/",
    categories: ["Framework"],
    icon: {
      light: "/icons/vue.svg",
      dark: "/icons/vue.svg",
    },
  },
  {
    key: "nestjs",
    title: "NestJS",
    href: "https://nestjs.com/",
    categories: ["Framework"],
    icon: {
      light: "/icons/nestjs.svg",
      dark: "/icons/nestjs.svg",
    },
  },
  {
    key: "spring",
    title: "Spring Boot",
    href: "https://spring.io/projects/spring-boot",
    categories: ["Framework"],
    icon: {
      light: "/icons/spring.svg",
      dark: "/icons/spring.svg",
    },
  },
  {
    key: "express",
    title: "Express.js",
    href: "https://expressjs.com/",
    categories: ["Framework"],
    icon: {
      light: "/icons/Express.js_light.svg",
      dark: "/icons/Express.js_dark.svg",
    },
    theme: true,
  },
  {
    key: "laravel",
    title: "Laravel",
    href: "https://laravel.com/",
    categories: ["Framework"],
    icon: {
      light: "/icons/laravel.svg",
      dark: "/icons/laravel.svg",
    },
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
    icon: {
      light: "/icons/tailwindcss.svg",
      dark: "/icons/tailwindcss.svg",
    },
  },
  {
    key: "bootstrap",
    title: "Bootstrap",
    href: "https://getbootstrap.com/",
    categories: ["Framework"],
    icon: {
      light: "/icons/bootstrap.svg",
      dark: "/icons/bootstrap.svg",
    },
  },

  // 🗄️ Databases
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Database"],
    icon: {
      light: "/icons/MySQL_light.svg",
      dark: "/icons/MySQL_dark.svg",
    },
    theme: true,
  },
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Database"],
    icon: {
      light: "/icons/postgresql.svg",
      dark: "/icons/postgresql.svg",
    },
  },

  {
    key: "sqlite",
    title: "SQLite",
    href: "https://www.sqlite.org/",
    categories: ["Database"],
    icon: {
      light: "/icons/sqlite.svg",
      dark: "/icons/sqlite.svg",
    },
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    categories: ["Database"],
    icon: {
      light: "/icons/redis.svg",
      dark: "/icons/redis.svg",
    },
  },
  {
    key: "drizzle-orm",
    title: "Drizzle ORM",
    href: "https://orm.drizzle.team/",
    categories: ["ORM"],
    icon: {
      light: "/icons/Drizzle ORM_light.svg",
      dark: "/icons/Drizzle ORM_dark.svg",
    },
    theme: true,
  },
  {
    key: "supabase",
    title: "Supabase",
    href: "https://supabase.com/",
    categories: ["Database", "Backend as a Service"],
    icon: {
      light: "/icons/supabase.svg",
      dark: "/icons/supabase.svg",
    },
  },

  // 🔐 Auth & Security
  {
    key: "jwt",
    title: "JWT",
    href: "https://jwt.io/",
    categories: ["Security"],
    icon: {
      light: "/icons/jwt.svg",
      dark: "/icons/jwt.svg",
    },
  },
  {
    key: "keycloak",
    title: "Keycloak",
    href: "https://www.keycloak.org/",
    categories: ["Security"],
    icon: {
      light: "/icons/keycloak.svg",
      dark: "/icons/keycloak.svg",
    },
  },
  {
    key: "authjs",
    title: "Auth.js",
    href: "https://authjs.dev/",
    categories: ["Security"],
    icon: {
      light: "/icons/authjs.svg",
      dark: "/icons/authjs.svg",
    },
  },
  {
    key: "clerk",
    title: "Clerk",
    href: "https://clerk.com/",
    categories: ["Security"],
    icon: {
      light: "/icons/Clerk_light.svg",
      dark: "/icons/Clerk_dark.svg",
    },
    theme: true,
  },

  // ☁️ Tools & Cloud
  {
    key: "vercel",
    title: "Vercel",
    href: "https://vercel.com/",
    categories: ["Deployment", "Cloud"],
    icon: {
      light: "/icons/Vercel_light.svg",
      dark: "/icons/Vercel_dark.svg",
    },
    theme: true,
  },
  {
    key: "openai",
    title: "OpenAI",
    href: "https://openai.com/",
    categories: ["AI"],
    icon: {
      light: "/icons/OpenAI_light.svg",
      dark: "/icons/OpenAI_dark.svg",
    },
    theme: true,
  },
  {
    key: "claude-ai",
    title: "Claude AI",
    href: "https://claude.ai/",
    categories: ["AI"],
    icon: {
      light: "/icons/claude-ai-icon.svg",
      dark: "/icons/claude-ai-icon.svg",
    },
  },
  {
    key: "graphql",
    title: "GraphQL",
    href: "https://graphql.org/",
    categories: ["API"],
    icon: {
      light: "/icons/graphql.svg",
      dark: "/icons/graphql.svg",
    },
  },
  {
    key: "vite",
    title: "Vite",
    href: "https://vitejs.dev/",
    categories: ["Bundler", "Build Tool"],
    icon: {
      light: "/icons/vitejs.svg",
      dark: "/icons/vitejs.svg",
    },
  },
];
