import { Separator } from "@/components/ui/separator";
import { Prose } from "@/components/ui/typography";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

const SOFT_SKILLS = [
  "Travail en équipe",
  "Résolution de problèmes",
  "Adaptabilité",
  "Gestion du temps",
  "Autonomie",
];

export function SoftSkills() {
  return (
    <Panel id="soft-skills">
      <PanelHeader>
        <PanelTitle>Soft Skills</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <Prose>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {SOFT_SKILLS.map((skill, index) => (
              <span key={skill} className="flex items-center gap-2.5">
                <span>{skill}</span>
                {index < SOFT_SKILLS.length - 1 && (
                  <Separator
                    className="data-[orientation=vertical]:h-4"
                    orientation="vertical"
                  />
                )}
              </span>
            ))}
          </div>
        </Prose>
      </PanelContent>
    </Panel>
  );
}
