import type { LucideProps } from "lucide-react";
import React from "react";
import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
  LightbulbIcon,
  ServerIcon,
} from "lucide-react";

import type { RecommandationPositionIcon } from "../../types/recommandations";

const iconMap: Record<
  RecommandationPositionIcon,
  React.ComponentType<LucideProps>
> = {
  code: CodeXmlIcon,
  design: DraftingCompassIcon,
  education: GraduationCapIcon,
  business: BriefcaseBusinessIcon,
  idea: LightbulbIcon,
  server: ServerIcon,
};

export function RecommandationIcon({
  icon,
  ...props
}: {
  icon: RecommandationPositionIcon | undefined;
} & LucideProps) {
  const IconComponent = icon ? iconMap[icon] : BriefcaseBusinessIcon;
  return <IconComponent {...props} />;
}
