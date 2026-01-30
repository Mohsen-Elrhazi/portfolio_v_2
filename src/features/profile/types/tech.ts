/**
 * Représente UNE technologie (React, HTML, MySQL, etc.)
 */
export type Tech = {
  key: string;
  title: string;
  icon: {
    light: string;
    dark?: string;
  };
  theme?: boolean;
};

/**
 * Représente TOUT le stack technique, séparé par catégories
 */
export type TechStack = {
  // languages: Tech[];
  frontend: Tech[];
  backend: Tech[];
  devops: Tech[];
  // editors: Tech[];
  design: Tech[];
  database: Tech[];
  securité: Tech[];
  conception: Tech[];
  "API & Outils": Tech[];

};
