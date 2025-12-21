export const TECH_STACK: TechStack[] = [

  /* =======================
   * LANGUAGES
   * ======================= */
  {
    key: "html",
    title: "HTML",
    categories: ["Language"],
    icon: { light: "/icons_techno/html5.svg", dark: "/icons_techno/html5.svg" },
  },
  {
    key: "css",
    title: "CSS",
    categories: ["Language"],
    icon: { light: "/icons_techno/css_old.svg", dark: "/icons_techno/css_old.svg" },
  },
  {
    key: "javascript",
    title: "JavaScript",
    categories: ["Language"],
    icon: { light: "/icons_techno/javascript.svg", dark: "/icons_techno/javascript.svg" },
  },
  {
    key: "typescript",
    title: "TypeScript",
    categories: ["Language"],
    icon: { light: "/icons_techno/typescript.svg", dark: "/icons_techno/typescript.svg" },
  },
  {
    key: "java",
    title: "Java",
    categories: ["Language"],
    icon: { light: "/icons_techno/java.svg", dark: "/icons_techno/java.svg" },
  },
  {
    key: "php",
    title: "PHP",
    categories: ["Language"],
    icon: { light: "/icons_techno/Php_light.svg", dark: "/icons_techno/Php_dark.svg" },
    theme: true,
  },
  {
    key: "c",
    title: "C",
    categories: ["Language"],
    icon: { light: "/icons_techno/c.svg", dark: "/icons_techno/c.svg" },
  },
    {
    key: "jquery",
    title: "jQuery",
    categories: ["Frontend", "Library"],
    icon: { light: "/icons_techno/jquery.svg", dark: "/icons_techno/jquery.svg" },
    theme: true,
  },

  /* =======================
   * FRONTEND
   * ======================= */
  {
    key: "react",
    title: "React",
    categories: ["Frontend", "Library"],
    icon: { light: "/icons_techno/React_light.svg", dark: "/icons_techno/React_dark.svg" },
    theme: true,
  },
    {
    key: "vue",
    title: "Vue.js",
    categories: ["Frontend", "Library"],
    icon: { light: "/icons_techno/vue.svg", dark: "/icons_techno/vue.svg" },
    theme: true,
  },
  {
    key: "nextjs",
    title: "Next.js",
    categories: ["Frontend", "Framework"],
    icon: { light: "/icons_techno/nextjs_icon_dark.svg", dark: "/icons_techno/nextjs_icon_dark.svg" },
  },
  {
    key: "angular",
    title: "Angular",
    categories: ["Frontend", "Framework"],
    icon: { light: "/icons_techno/angular.svg", dark: "/icons_techno/angular.svg" },
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    categories: ["Frontend", "CSS Framework"],
    icon: { light: "/icons_techno/tailwindcss.svg", dark: "/icons_techno/tailwindcss.svg" },
  },
  {
    key: "bootstrap",
    title: "Bootstrap",
    categories: ["Frontend", "CSS Framework"],
    icon: { light: "/icons_techno/bootstrap.svg", dark: "/icons_techno/bootstrap.svg" },
  },

  /* =======================
   * UI / COMPONENT LIBRARIES
   * ======================= */
  {
    key: "shadcnui",
    title: "shadcn/ui",
    categories: ["UI", "Component Library"],
    icon: { light: "/icons_techno/ui_light.svg", dark: "/icons_techno/ui_dark.svg" },
    theme: true,
  },
  {
    key: "materialui",
    title: "Material UI",
    categories: ["UI", "Component Library"],
    icon: { light: "/icons_techno/materialui.svg", dark: "/icons_techno/materialui.svg" },
  },
  {
    key: "flowbite",
    title: "Flowbite",
    categories: ["UI", "Component Library"],
    icon: { light: "/icons_techno/flowbite.svg", dark: "/icons_techno/flowbite.svg" },
  },

  /* =======================
   * BACKEND
   * ======================= */
  {
    key: "springboot",
    title: "Spring Boot",
    categories: ["Backend", "Framework"],
    icon: { light: "/icons_techno/spring-boot.svg", dark: "/icons_techno/spring-boot.svg" },
  },
  {
    key: "spring",
    title: "Spring",
    categories: ["Backend", "Framework"],
    icon: { light: "/icons_techno/spring.svg", dark: "/icons_techno/spring.svg" },
  },
  {
    key: "laravel",
    title: "Laravel",
    categories: ["Backend", "Framework"],
    icon: { light: "/icons_techno/laravel.svg", dark: "/icons_techno/laravel.svg" },
  },
    {
    key: "jwt",
    title: "JWT",
    categories: ["Backend", "Framework"],
    icon: { light: "/icons_techno/jwt.svg", dark: "/icons_techno/jwt.svg" },
  },

  /* =======================
   * API & ARCHITECTURE
   * ======================= */
  {
    key: "restapi",
    title: "REST API",
    categories: ["API", "Architecture"],
    icon: { light: "/icons_techno/rest-api.svg", dark: "/icons_techno/rest-api.svg" },
  },
  {
    key: "graphql",
    title: "GraphQL",
    categories: ["API", "Architecture"],
    icon: { light: "/icons_techno/graphql.svg", dark: "/icons_techno/graphql.svg" },
  },
  {
    key: "uml",
    title: "UML",
    categories: ["Architecture", "Modeling"],
    icon: { light: "/icons_techno/uml.svg", dark: "/icons_techno/uml.svg" },
  },

    /* =======================
   * API TOOLS
   * ======================= */
  {
    key: "postman",
    title: "Postman",
    categories: ["API", "Tool"],
    icon: { light: "/icons_techno/postman.svg", dark: "/icons_techno/postman.svg" },
  },
  {
    key: "apidog",
    title: "ApiDog",
    categories: ["API", "Tool"],
    icon: { light: "/icons_techno/apidog.svg", dark: "/icons_techno/apidog.svg" },
  },

  /* =======================
   * DATABASES
   * ======================= */
  {
    key: "mysql",
    title: "MySQL",
    categories: ["Database"],
    icon: { light: "/icons_techno/MySQL_light.svg", dark: "/icons_techno/MySQL_dark.svg" },
  },
  {
    key: "postgresql",
    title: "PostgreSQL",
    categories: ["Database"],
    icon: { light: "/icons_techno/postgresql.svg", dark: "/icons_techno/postgresql.svg" },
  },
  {
    key: "sqlserver",
    title: "SQL Server",
    categories: ["Database"],
    icon: { light: "/icons_techno/sql-server.svg", dark: "/icons_techno/sql-server.svg" },
  },

  /* =======================
   * DEVOPS
   * ======================= */
  {
    key: "docker",
    title: "Docker",
    categories: ["DevOps", "Containerization"],
    icon: { light: "/icons_techno/docker.svg", dark: "/icons_techno/docker.svg" },
  },

  /* =======================
   * VERSION CONTROL
   * ======================= */
  {
    key: "git",
    title: "Git",
    categories: ["Version Control"],
    icon: { light: "/icons_techno/git.svg", dark: "/icons_techno/git.svg" },
  },
  {
    key: "github",
    title: "GitHub",
    categories: ["Version Control"],
    icon: { light: "/icons_techno/github-light.svg", dark: "/icons_techno/github-dark.svg" },
    theme: true,
  },

  /* =======================
   * EDITORS & IDE
   * ======================= */
  {
    key: "visualstudio",
    title: "Visual Studio",
    categories: ["Editor"],
    icon: { light: "/icons_techno/visual-studio.svg", dark: "/icons_techno/visual-studio.svg" },
  },
   {
    key: "vscode",
    title: "Visual Studio Code",
    categories: ["Editor"],
    icon: { light: "/icons_techno/vscode.svg", dark: "/icons_techno/vscode.svg" },
  },
  {
    key: "intellijidea",
    title: "IntelliJ IDEA",
    categories: ["IDE"],
    icon: { light: "/icons_techno/intellijidea.svg", dark: "/icons_techno/intellijidea.svg" },
  },
  {
    key: "eclipse",
    title: "Eclipse IDE",
    categories: ["IDE"],
    icon: { light: "/icons_techno/eclipse.svg", dark: "/icons_techno/eclipse.svg" },
  },

  /* =======================
   * TOOLS & DESIGN
   * ======================= */
  {
    key: "figma",
    title: "Figma",
    categories: ["Design", "Tool"],
    icon: { light: "/icons_techno/figma.svg", dark: "/icons_techno/figma.svg" },
  },
  {
    key: "canva",
    title: "Canva",
    categories: ["Design", "Tool"],
    icon: { light: "/icons_techno/canva.svg", dark: "/icons_techno/canva.svg" },
  },


];
