export type RecommandationPositionIcon =
  /** Icon key used to render the position category in the UI. */
  "code" | "design" | "education" | "business" | "idea" | "server";

export type RecommandationPosition = {
  id: string;
  authorRole: string;
  date: string;
  relationship: "mentor" | "collaborated" | "reported";
  icon?: RecommandationPositionIcon;
  summary: string;
  isExpanded?: boolean;
};

export type Recommandation = {
  id: string;
  authorName: string;
  authorAvatar: string;
  linkedinUrl?: string;
  positions: RecommandationPosition[];
};
