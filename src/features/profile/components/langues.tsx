import { Separator } from "@/components/ui/separator";
import { Prose } from "@/components/ui/typography";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

const LANGUES = [
  "Français (B1)",
  "Anglais (A2)",
  "Arabe (maternelle)",

];

export function Langues() {
  return (
    <Panel id="langues">
      <PanelHeader>
        <PanelTitle>Langues</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <Prose>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {LANGUES.map((langue, index) => (
              <span key={langue} className="flex items-center gap-6">
                <span>{langue}</span>
                {index < LANGUES.length - 1 && (
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
