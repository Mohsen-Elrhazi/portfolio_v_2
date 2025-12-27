import React from "react";

import { EDUCATIONS } from "../../data/educations";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { EducationItem } from "./education-item";

export function Educations() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle className="flex items-center justify-start">
          <span>Education</span>
          {/* <div className="flex items-center gap-3">
            <div className="flex size-6 shrink-0 items-center justify-center select-none">
              <span className="relative flex items-center justify-center">
                <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-info" />
                <span className="sr-only">Current Education</span>
              </span>
            </div>
          </div> */}
        </PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {EDUCATIONS.map((education) => (
          <EducationItem key={education.id} experience={education} />
        ))}
      </div>
    </Panel>
  );
}
