import type { TechStack } from "../types/tech";

export const TECH_STACK: TechStack = {

  frontend: [
    { key: "html", title: "HTML", icon: { light: "/icons_techno/html5.svg" } },
    { key: "css", title: "CSS", icon: { light: "/icons_techno/css_old.svg" } },
    { key: "javascript", title: "JavaScript", icon: { light: "/icons_techno/javascript.svg" } },
    { key: "typescript", title: "TypeScript", icon: { light: "/icons_techno/typescript.svg" } },
    { key: "jquery", title: "jQuery", icon: { light: "/icons_techno/jquery.svg" } },
    { key: "react", title: "React", icon: { light: "/icons_techno/React_light.svg" }, theme: true },
    { key: "nextjs", title: "Next.js", icon: { light: "/icons_techno/nextjs_icon_dark.svg", dark: "/icons_techno/nextjs-light.svg" }, theme: true },
    { key: "angular", title: "Angular", icon: { light: "/icons_techno/angular.svg" } },
    { key: "tailwindcss", title: "Tailwind CSS", icon: { light: "/icons_techno/tailwindcss.svg" } },
    { key: "bootstrap", title: "Bootstrap", icon: { light: "/icons_techno/bootstrap.svg" } },
    // { key: "shadcnui", title: "shadcn/ui", icon: { light: "/icons_techno/ui_light.svg", dark: "/icons_techno/ui_dark.svg" }, theme: true },
    // { key: "materialui", title: "Material UI", icon: { light: "/icons_techno/materialui.svg" } },
    // { key: "flowbite", title: "Flowbite", icon: { light: "/icons_techno/flbt.svg" } },
  ],

  backend: [
    { key: "java", title: "Java", icon: { light: "/icons_techno/java.svg" } },
    { key: "spring", title: "Spring", icon: { light: "/icons_techno/spring.svg" } },
    { key: "springboot", title: "Spring Boot", icon: { light: "/icons_techno/spring-boot.svg" } },
    { key: "php", title: "PHP", icon: { light: "/icons_techno/Php_light.svg", dark: "/icons_techno/Php_dark.svg" }, theme: true },
    { key: "laravel", title: "Laravel", icon: { light: "/icons_techno/laravel.svg" } },
    // { key: "sonarqube", title: "SonarQube", icon: { light: "/icons_techno/sonarqube.svg" } },
  
  ],

  database: [
    { key: "mysql", title: "MySQL", icon: { light: "/icons_techno/MySQL_light.svg" } },
    { key: "postgresql", title: "PostgreSQL", icon: { light: "/icons_techno/postgresql.svg" } },
    { key: "sqlserver", title: "SQL Server", icon: { light: "/icons_techno/sql-server.svg" } },
    { key: "h2database", title: "H2 Database", icon: { light: "/icons_techno/h2-logo.svg" } },
  ],

  securité: [
    { key: "jwt", title: "JWT", icon: { light: "/icons_techno/jwt.svg" } },
  ],

  "API & Outils": [
  { key: "restapi", title: "REST API", icon: { light: "/icons_techno/rest-api.svg" } },
    { key: "graphql", title: "GraphQL", icon: { light: "/icons_techno/graphql.svg" } },
    { key: "postman", title: "Postman", icon: { light: "/icons_techno/postman.svg" } },
    { key: "apidog", title: "ApiDog", icon: { light: "/icons_techno/apidog.svg" } },
  ],

  devops: [
    { key: "git", title: "Git", icon: { light: "/icons_techno/git.svg" } },
    { key: "github", title: "GitHub", icon: { light: "/icons_techno/github-light.svg", dark: "/icons_techno/github-dark.svg" }, theme: true },
    { key: "docker", title: "Docker", icon: { light: "/icons_techno/docker.svg" } },
    { key: "kubernetes", title: "Kubernetes", icon: { light: "/icons_techno/kubernetes.svg" } },
    { key: "jira", title: "Jira", icon: { light: "/icons_techno/ji.svg" } },
    
  ],

  conception: [
    { key: "merise", title: "Merise", icon: { light: "/icons_techno/merise.png" } },
    { key: "uml", title: "UML", icon: { light: "/icons_techno/uml.svg" } },
  ],

  // editors: [
  //   { key: "visualstudio", title: "Visual Studio", icon: { light: "/icons_techno/visual-studio.svg" } },
  //   { key: "vscode", title: "VS Code", icon: { light: "/icons_techno/vscode.svg" } },
  //   { key: "intellijidea", title: "IntelliJ IDEA", icon: { light: "/icons_techno/intellijidea.svg" } },
  //   { key: "eclipse", title: "Eclipse IDE", icon: { light: "/icons_techno/eclipse.svg" } },
  // ],

  design: [
    { key: "figma", title: "Figma", icon: { light: "/icons_techno/figma.svg" } },
    { key: "canva", title: "Canva", icon: { light: "/icons_techno/canva.svg" } },
  ],
};
