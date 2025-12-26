import React from "react";

import { RECOMMANDATIONS } from "../../data/recommandations";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { RecommandationItem } from "./recommandation-item";

export function Recommandations() {
  return (
    <Panel id="recommandations">
      <PanelHeader>
        <PanelTitle>Recommandations</PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {RECOMMANDATIONS.map((recommandation) => (
          <RecommandationItem key={recommandation.id} recommandation={recommandation} />
        ))}
      </div>
    </Panel>
  );
}
